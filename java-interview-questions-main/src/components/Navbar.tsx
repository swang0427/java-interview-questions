import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

interface NavbarProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const Navbar = ({ isOpen, onToggle, onClose }: NavbarProps) => {
  return (
    <>
      <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              {/* Mobile Menu Button */}
              <button
                onClick={onToggle}
                className="md:hidden text-white hover:text-indigo-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl">☕</span>
                <span className="text-white font-bold text-xl">Java面试题</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-white hover:text-indigo-200 transition-all duration-200 font-medium py-1"
              >
                首页
              </Link>
              <a 
                href="#ai-tools"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('ai-tools');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-white hover:text-indigo-200 transition-all duration-200 font-medium flex items-center"
              >
                <span className="mr-1">🤖</span>
                AI工具
              </a>
              <a 
                href="#docs"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('docs');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-white hover:text-indigo-200 transition-all duration-200 font-medium flex items-center"
              >
                <span className="mr-1">🔧</span>
                工具箱
              </a>
              <a 
                href="#categories"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('categories');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-white hover:text-indigo-200 transition-all duration-200 font-medium flex items-center"
              >
                <span className="mr-1">📚</span>
                知识分类
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Navbar;