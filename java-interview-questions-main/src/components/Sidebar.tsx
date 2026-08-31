import { Link } from 'react-router-dom';

interface NavItem {
  id: string;
  name: string;
  icon: string;
  type: 'tool' | 'question';
}

const navItems: NavItem[] = [
  { id: 'backend', name: '后端开发工具', icon: '🖥️', type: 'tool' },
  { id: 'frontend', name: '前端开发工具', icon: '🌐', type: 'tool' },
  { id: 'devops', name: 'DevOps工具', icon: '🔧', type: 'tool' },
  { id: 'wechat', name: '微信生态', icon: '💬', type: 'tool' },
  { id: 'basics', name: 'Java基础', icon: '📚', type: 'question' },
  { id: 'oop', name: '面向对象', icon: '🎯', type: 'question' },
  { id: 'collection', name: '集合框架', icon: '📦', type: 'question' },
  { id: 'concurrent', name: '并发编程', icon: '⚡', type: 'question' },
  { id: 'jvm', name: 'JVM原理', icon: '🔧', type: 'question' },
  { id: 'advanced', name: '高级特性', icon: '🚀', type: 'question' },
  { id: 'design-pattern', name: '设计模式', icon: '🎨', type: 'question' },
  { id: 'microservice', name: '微服务与分布式', icon: '🌐', type: 'question' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:block fixed left-0 top-16 h-screen w-64 bg-white shadow-xl overflow-y-auto border-r border-gray-100 z-40">
        <div className="p-4">
          <div className="mb-6">
            <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 flex items-center">
              <span className="mr-2">🔧</span> 开发工具
            </h3>
            <ul className="space-y-1">
              {navItems.filter(item => item.type === 'tool').map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r from-indigo-50 to-purple-50 hover:text-indigo-700 transition-all duration-300 flex items-center space-x-3 text-sm font-medium group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 flex items-center">
              <span className="mr-2">📝</span> 面试题分类
            </h3>
            <ul className="space-y-1">
              {navItems.filter(item => item.type === 'question').map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/category/${item.id}`}
                    className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r from-indigo-50 to-purple-50 hover:text-indigo-700 transition-all duration-300 flex items-center space-x-3 text-sm font-medium group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 shadow-xl">
        <div className="flex justify-around items-center py-2">
          <Link
            to="/"
            className="flex flex-col items-center text-indigo-600 p-2"
          >
            <span className="text-2xl mb-1">🏠</span>
            <span className="text-xs">首页</span>
          </Link>
          <Link
            to="/category/basics"
            className="flex flex-col items-center text-gray-600 p-2"
          >
            <span className="text-2xl mb-1">📚</span>
            <span className="text-xs">面试题</span>
          </Link>
          <a
            href="#ai-tools"
            className="flex flex-col items-center text-gray-600 p-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('ai-tools');
            }}
          >
            <span className="text-2xl mb-1">🤖</span>
            <span className="text-xs">AI工具</span>
          </a>
          <a
            href="#docs"
            className="flex flex-col items-center text-gray-600 p-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('docs');
            }}
          >
            <span className="text-2xl mb-1">🔧</span>
            <span className="text-xs">工具箱</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;