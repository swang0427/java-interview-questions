import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { categories } from '../data/categories';
import { questions } from '../data/questions';

interface DocLink {
  name: string;
  url: string;
  description: string;
  usage: string;
  icon: string;
  color: string;
}

interface AiLink {
  name: string;
  url: string;
  description: string;
  icon: string;
  color: string;
  category: string;
}

const aiTools: AiLink[] = [
  {
    name: 'ChatGPT',
    url: 'https://chat.openai.com',
    description: 'OpenAI的智能对话AI助手，支持代码生成、写作、翻译等',
    icon: '🤖',
    color: 'from-green-500 to-green-600',
    category: '大模型'
  },
  {
    name: 'Claude',
    url: 'https://claude.ai',
    description: 'Anthropic公司开发的AI助手，擅长长文本处理和代码生成',
    icon: '🧠',
    color: 'from-orange-500 to-amber-500',
    category: '大模型'
  },
  {
    name: 'Gemini',
    url: 'https://gemini.google.com',
    description: 'Google开发的AI助手，支持多模态交互和代码生成',
    icon: '✨',
    color: 'from-blue-500 to-indigo-500',
    category: '大模型'
  },
  {
    name: '通义千问',
    url: 'https://tongyi.aliyun.com',
    description: '阿里云开发的AI助手，支持对话、代码、写作等功能',
    icon: '🦅',
    color: 'from-orange-500 to-orange-600',
    category: '大模型'
  },
  {
    name: '文心一言',
    url: 'https://yiyan.baidu.com',
    description: '百度开发的AI助手，支持对话、写作、代码生成',
    icon: '🐼',
    color: 'from-red-500 to-orange-500',
    category: '大模型'
  },
  {
    name: '智谱AI',
    url: 'https://chatglm.cn',
    description: '清华系开发的AI助手，支持多模态和编程',
    icon: '🔬',
    color: 'from-purple-500 to-indigo-500',
    category: '大模型'
  },
  {
    name: '豆包',
    url: 'https://www.doubao.com',
    description: '字节跳动开发的AI助手，支持对话、写作、代码',
    icon: '📦',
    color: 'from-emerald-500 to-teal-500',
    category: '大模型'
  },
  {
    name: 'GitHub Copilot',
    url: 'https://copilot.github.com',
    description: 'AI编程助手，自动补全代码，支持多种编程语言',
    icon: '🚀',
    color: 'from-gray-700 to-gray-900',
    category: '编程工具'
  },
  {
    name: 'Cursor',
    url: 'https://cursor.so',
    description: 'AI代码编辑器，基于GPT-4，支持代码补全、修复、重构',
    icon: '✏️',
    color: 'from-blue-600 to-cyan-600',
    category: '编程工具'
  },
  {
    name: 'Codeium',
    url: 'https://codeium.com',
    description: '免费的AI编程助手，支持多种IDE和编程语言',
    icon: '💡',
    color: 'from-yellow-500 to-orange-500',
    category: '编程工具'
  },
  {
    name: 'Midjourney',
    url: 'https://www.midjourney.com',
    description: 'AI绘画工具，通过文字描述生成高质量图片',
    icon: '🎨',
    color: 'from-purple-600 to-pink-600',
    category: '图像生成'
  },
  {
    name: 'Stable Diffusion',
    url: 'https://stability.ai',
    description: '开源的AI绘画模型，支持本地部署和定制',
    icon: '🖼️',
    color: 'from-indigo-500 to-purple-500',
    category: '图像生成'
  },
  {
    name: 'DALL-E',
    url: 'https://openai.com/dall-e-3',
    description: 'OpenAI开发的AI绘画工具，生成高质量图片',
    icon: '🖌️',
    color: 'from-emerald-500 to-green-600',
    category: '图像生成'
  },
  {
    name: 'Runway',
    url: 'https://runwayml.com',
    description: 'AI视频生成和编辑平台，支持多种创意工具',
    icon: '🎬',
    color: 'from-pink-500 to-rose-600',
    category: '视频生成'
  },
  {
    name: 'Suno',
    url: 'https://suno.ai',
    description: 'AI音乐生成平台，通过文字描述生成音乐',
    icon: '🎵',
    color: 'from-cyan-500 to-blue-600',
    category: '音频生成'
  },
  {
    name: 'Notion AI',
    url: 'https://www.notion.so/product/ai',
    description: 'Notion内置的AI助手，支持写作、总结、翻译等',
    icon: '📝',
    color: 'from-gray-800 to-black',
    category: '写作工具'
  },
  {
    name: 'DeepL',
    url: 'https://www.deepl.com',
    description: '高质量的AI翻译工具，支持多种语言',
    icon: '🌍',
    color: 'from-red-600 to-red-700',
    category: '翻译工具'
  },
  {
    name: 'Perplexity',
    url: 'https://www.perplexity.ai',
    description: 'AI搜索引擎，提供带引用来源的回答',
    icon: '🔍',
    color: 'from-yellow-400 to-yellow-600',
    category: '搜索工具'
  },
  {
    name: 'Hugging Face',
    url: 'https://huggingface.co',
    description: 'AI模型库和开源社区，提供各种AI模型和工具',
    icon: '🤗',
    color: 'from-yellow-500 to-amber-600',
    category: '开发平台'
  },
  {
    name: 'Ollama',
    url: 'https://ollama.com',
    description: '本地运行大模型的工具，支持多种开源模型',
    icon: '🦙',
    color: 'from-emerald-600 to-green-700',
    category: '开发平台'
  }
];

const backendTools: DocLink[] = [
  {
    name: 'IntelliJ IDEA',
    url: 'https://www.jetbrains.com/idea/',
    description: 'Java集成开发环境（IDE），业界公认的Java开发首选工具',
    usage: '安装后安装Tomcat、Spring等插件，配置Maven/Gradle项目，快速开发Java应用。支持代码提示、重构、调试等功能。',
    icon: '💻',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    name: 'Spring Boot',
    url: 'https://spring.io/projects/spring-boot',
    description: 'Spring Framework的子项目，简化Spring应用开发',
    usage: '创建Spring Boot项目：访问start.spring.io生成项目结构。使用@SpringBootApplication启动应用，自动配置数据库、Web等。',
    icon: '🌱',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Redis',
    url: 'https://redis.io/',
    description: '高性能键值对数据库，常用于缓存和会话存储',
    usage: '安装Redis后，使用redis-cli连接。常用命令：SET/GET存取数据，EXPIRE设置过期，HASH存对象。Java中使用Jedis或Lettuce客户端。',
    icon: '🔴',
    color: 'from-red-500 to-orange-500'
  },
  {
    name: 'MySQL',
    url: 'https://www.mysql.com/',
    description: '开源关系型数据库，Web应用最常用的数据库之一',
    usage: '安装MySQL后，使用mysql -u root -p登录。创建数据库：CREATE DATABASE name；创建表：CREATE TABLE；常用命令：SELECT/INSERT/UPDATE/DELETE。',
    icon: '🐬',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Maven',
    url: 'https://maven.apache.org/',
    description: 'Java项目管理和依赖管理工具，统一项目结构',
    usage: '配置pom.xml添加依赖：<dependency>标签。常用命令：mvn clean install编译项目，mvn package打包，mvn spring-boot:run运行Spring Boot项目。',
    icon: '🧱',
    color: 'from-yellow-500 to-amber-500'
  }
];

const frontendTools: DocLink[] = [
  {
    name: 'Vue.js',
    url: 'https://vuejs.org/',
    description: '渐进式JavaScript框架，用于构建用户界面',
    usage: '使用npm create vue@latest创建项目。组件结构：template写HTML，script写逻辑，style写样式。常用指令：v-if/v-for/v-model。状态管理用Pinia或Vuex。',
    icon: '💚',
    color: 'from-green-400 to-emerald-400'
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org/',
    description: '基于Chrome V8引擎的JavaScript运行时，可开发后端服务',
    usage: 'npm init初始化项目，npm install安装依赖。创建服务器：const http = require("http")。Express框架：npm install express，快速搭建Web API。',
    icon: '🟢',
    color: 'from-green-600 to-green-400'
  },
  {
    name: 'Postman',
    url: 'https://www.postman.com/',
    description: 'API开发和测试工具，简化HTTP请求调试',
    usage: '新建请求：选择GET/POST等方法，输入URL。Params设置参数，Body选择raw/JSON格式发送数据。Headers设置请求头。Collections管理多个请求。',
    icon: '🚀',
    color: 'from-orange-400 to-yellow-400'
  }
];

const devopsTools: DocLink[] = [
  {
    name: 'Git',
    url: 'https://git-scm.com/',
    description: '分布式版本控制系统，管理代码版本和协作开发',
    usage: 'git init初始化仓库。git add添加文件，git commit -m提交。git push推送到远程，git pull拉取更新。git branch创建分支，git merge合并分支。',
    icon: '🔀',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Docker',
    url: 'https://www.docker.com/',
    description: '容器化平台，实现应用及其依赖的打包和部署',
    usage: 'Dockerfile定义镜像：FROM指定基础镜像，COPY复制文件，RUN执行命令，CMD启动命令。构建镜像：docker build -t name。运行容器：docker run -p 8080:80 name。',
    icon: '🐳',
    color: 'from-blue-600 to-blue-400'
  }
];

const wechatTools: DocLink[] = [
  {
    name: '微信小程序',
    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
    description: '微信官方小程序开发框架，跨平台移动应用',
    usage: '下载微信开发者工具，创建项目。pages目录下创建页面，app.json配置路由，app.wxss写样式。调用wx.request发起网络请求，wx.setStorage存本地数据。',
    icon: '💬',
    color: 'from-green-500 to-green-400'
  },
  {
    name: '微信小游戏',
    url: 'https://developers.weixin.qq.com/minigame/dev/guide/',
    description: '微信小游戏开发平台，基于Canvas/WebGL渲染',
    usage: '使用微信开发者工具创建小游戏项目。LayaAir/Cocos Creator等引擎开发。小游戏使用wx.createCanvas()创建画布，通过requestAnimationFrame实现游戏循环。',
    icon: '🎮',
    color: 'from-blue-400 to-cyan-400'
  }
];

interface ToolSectionProps {
  id: string;
  title: string;
  tools: DocLink[];
}

const ToolSection = ({ id, title, tools }: ToolSectionProps) => {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
        <span className="mr-2 sm:mr-3">{title.split(' ')[0]}</span>
        <span>{title.split(' ').slice(1).join(' ')}</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {tools.map((doc) => (
          <div
            key={doc.name}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group card-hover"
          >
            <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${doc.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                {doc.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-lg">{doc.name}</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">{doc.description}</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
              <h5 className="text-indigo-900 font-semibold text-xs sm:text-sm mb-1 sm:mb-2 flex items-center">
                <span className="mr-1">📖</span> 使用方法
              </h5>
              <p className="text-indigo-800 text-xs leading-relaxed line-clamp-3">{doc.usage}</p>
            </div>
            
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-xs sm:text-sm shadow-lg hover:shadow-xl"
            >
              <span className="mr-1 sm:mr-2">🌐</span>
              访问官方文档
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const AiToolCard = ({ tool }: { tool: AiLink }) => (
  <a
    href={tool.url}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-3 sm:p-5 border border-white/20 group flex items-start space-x-3 hover:scale-[1.02] card-hover"
  >
    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
      {tool.icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-bold text-gray-900 text-xs sm:text-base">{tool.name}</h4>
        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-lg text-xs font-medium border border-indigo-200">{tool.category}</span>
      </div>
      <p className="text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2">{tool.description}</p>
    </div>
  </a>
);

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const featuredQuestions = questions.slice(0, 10);

  const scrollToQuestions = () => {
    const element = document.getElementById('questions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const getCategoryName = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.name : categoryId;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'difficulty-easy';
      case 'medium': return 'difficulty-medium';
      case 'hard': return 'difficulty-hard';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <Navbar 
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      
      {/* Main Content */}
      <div className="md:ml-64 pb-20 sm:pb-0">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
            <div className="text-center animate-fadeInUp">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
                Java面试题精选
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-indigo-100 mb-6 sm:mb-10 max-w-3xl mx-auto">
                精心整理的Java面试题集，涵盖基础、集合、并发、JVM等核心知识，助您面试一臂之力！
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={scrollToQuestions}
                  className="bg-white text-indigo-600 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold hover:bg-indigo-50 transition-all duration-300 shadow-2xl hover:shadow-3xl text-base sm:text-xl transform hover:scale-[1.05]"
                >
                  🚀 开始刷题
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          {/* Featured Questions - First Priority */}
          <section id="questions" className="mb-12 sm:mb-20 scroll-mt-24">
            <h2 className="section-title mb-6 sm:mb-10 text-center">
              🎯 精选面试题
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {featuredQuestions.map((question, index) => (
                <Link 
                  key={question.id}
                  to={`/question/${question.id}`}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group card-hover animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors flex-1 mr-2">
                      {question.title}
                    </h3>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)} whitespace-nowrap border`}>
                      {getDifficultyText(question.difficulty)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-2">
                    {question.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">
                      {getCategoryName(question.category)}
                    </span>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {question.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-lg text-xs font-medium border border-indigo-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8 sm:mt-10">
              <Link 
                to="/category/basics"
                className="inline-flex items-center text-indigo-600 hover:text-purple-600 font-bold text-sm sm:text-lg transition-all duration-300"
              >
                查看更多题目
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </section>

          {/* Categories Section */}
          <section id="categories" className="mb-8 sm:mb-16 scroll-mt-24">
            <h2 className="section-title mb-6 sm:mb-10 text-center">
              📚 知识分类
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {categories.map((category, index) => (
                <Link 
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group card-hover animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${category.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Official Documentation Links */}
          <section id="docs" className="mb-8 sm:mb-16">
            <h2 className="section-title mb-2 text-center">
              🔧 开发工具箱
            </h2>
            <p className="text-gray-600 text-center mb-6 sm:mb-10 text-sm sm:text-lg">
              Java开发者必备的官方文档和工具，包含详细使用教程
            </p>
            
            <ToolSection id="backend" title="🖥️ 后端开发工具" tools={backendTools} />
            <ToolSection id="frontend" title="🌐 前端开发工具" tools={frontendTools} />
            <ToolSection id="devops" title="🔧 DevOps工具" tools={devopsTools} />
            <ToolSection id="wechat" title="💬 微信生态" tools={wechatTools} />
          </section>

          {/* AI Tools Navigation - Moved to bottom */}
          <section id="ai-tools" className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 py-8 sm:py-12 rounded-3xl shadow-2xl mb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 flex items-center justify-center">
                  <span className="mr-2 sm:mr-3">🤖</span> AI工具导航
                </h2>
                <p className="text-indigo-100 text-sm sm:text-lg md:text-xl">精心整理的热门AI工具，助力开发者提升效率</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                {aiTools.map((tool) => (
                  <AiToolCard key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-6 sm:py-8 border-t border-gray-700">
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

export default Home;
