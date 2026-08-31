import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { categories } from '../data/categories';
import { questions } from '../data/questions';

const QuestionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [showAnswer, setShowAnswer] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const question = questions.find(q => q.id === id);
  const category = question ? categories.find(c => c.id === question.category) : undefined;
  const relatedQuestions = question 
    ? questions.filter(q => q.category === question.category && q.id !== question.id).slice(0, 3)
    : [];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '简单';
      case 'medium': return '中等';
      case 'hard': return '困难';
      default: return difficulty;
    }
  };

  if (!question) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar 
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        <div className="md:ml-64 pb-20 sm:pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900">题目不存在</h2>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              返回首页
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      
      <div className="md:ml-64 pb-20 sm:pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center text-xs sm:text-sm text-gray-500 space-x-1 sm:space-x-2">
              <Link to="/" className="hover:text-blue-600">首页</Link>
              <span>/</span>
              {category && (
                <>
                  <Link to={`/category/${category.id}`} className="hover:text-blue-600">
                    {category.name}
                  </Link>
                  <span>/</span>
                </>
              )}
              <span className="text-gray-900">题目详情</span>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 mb-6 sm:mb-8">
            <div className="p-4 sm:p-8">
              <div className="flex items-start justify-between mb-3 sm:mb-4 flex-wrap gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  {category && (
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white ${category.color}`}>
                      {category.icon} {category.name}
                    </span>
                  )}
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getDifficultyColor(question.difficulty)}`}>
                    {getDifficultyText(question.difficulty)}
                  </span>
                </div>
              </div>
              
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{question.title}</h1>
              
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">{question.content}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {question.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Show Answer Button */}
              <button
                onClick={() => setShowAnswer(!showAnswer)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>{showAnswer ? '收起答案' : '查看答案'}</span>
                <svg 
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${showAnswer ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Answer Section */}
          {showAnswer && (
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 mb-6 sm:mb-8 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 sm:px-8 py-3 sm:py-4">
                <h2 className="text-lg sm:text-xl font-bold flex items-center">
                  <span className="mr-2">💡</span> 参考答案
                </h2>
              </div>
              <div className="p-4 sm:p-8">
                <div className="mb-6 sm:mb-8">
                  <p className="text-gray-800 leading-relaxed text-sm sm:text-lg whitespace-pre-wrap">
                    {question.answer}
                  </p>
                </div>

                {question.codeExample && (
                  <div className="mt-6 sm:mt-8">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                      <span className="mr-2">📝</span> 代码示例
                    </h3>
                    <div className="bg-gray-900 rounded-lg p-3 sm:p-6 overflow-x-auto">
                      <pre className="text-green-400 font-mono text-xs sm:text-sm leading-relaxed">
                        <code>{question.codeExample}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Related Questions */}
          {relatedQuestions.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="p-4 sm:p-8">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                  <span className="mr-2">📚</span> 相关题目
                </h2>
                <div className="space-y-2 sm:space-y-4">
                  {relatedQuestions.map((q) => (
                    <Link 
                      key={q.id}
                      to={`/question/${q.id}`}
                      className="block p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="font-medium text-gray-900 text-sm sm:text-base flex-1 mr-2">{q.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(q.difficulty)} whitespace-nowrap`}>
                          {getDifficultyText(q.difficulty)}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6 sm:mt-8">
            <Link 
              to={`/category/${question.category}`}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base flex items-center"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回分类
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs sm:text-sm">
              © 2024 Java面试题. 帮助每一位开发者准备面试。
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default QuestionDetail;
