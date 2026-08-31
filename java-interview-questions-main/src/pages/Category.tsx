import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { categories } from '../data/categories';
import { questions } from '../data/questions';
import { useState } from 'react';

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const category = categories.find(c => c.id === id);
  const categoryQuestions = questions.filter(q => q.category === id);

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

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar 
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        <div className="md:ml-64 pb-20 sm:pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900">分类不存在</h2>
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
        {/* Category Header */}
        <div className={`${category.color} text-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <Link to="/" className="text-blue-100 hover:text-white mb-4 inline-flex items-center text-sm sm:text-base">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回首页
            </Link>
            <div className="flex items-center space-x-3 sm:space-x-4 mt-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl sm:text-3xl">
                {category.icon}
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{category.name}</h1>
                <p className="text-blue-100 mt-2 text-sm sm:text-base">{category.description}</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 text-base sm:text-lg">
              共 <span className="font-bold">{categoryQuestions.length}</span> 道题目
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {categoryQuestions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-base sm:text-lg">该分类下暂无题目</p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {categoryQuestions.map((question) => (
                <Link 
                  key={question.id}
                  to={`/question/${question.id}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group block"
                >
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <h3 className="text-base sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex-1 mr-2">
                      {question.title}
                    </h3>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)} whitespace-nowrap`}>
                      {getDifficultyText(question.difficulty)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{question.content}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {question.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          )}
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

export default Category;
