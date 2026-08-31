import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'basics',
    name: 'Java基础',
    icon: '📚',
    color: 'bg-blue-500',
    description: 'Java语言的核心基础知识，包括语法、类型系统、异常处理等'
  },
  {
    id: 'oop',
    name: '面向对象',
    icon: '🎯',
    color: 'bg-green-500',
    description: '面向对象编程的三大特性：封装、继承、多态'
  },
  {
    id: 'collection',
    name: '集合框架',
    icon: '📦',
    color: 'bg-purple-500',
    description: 'Java集合框架的核心实现类，如List、Map、Set等'
  },
  {
    id: 'concurrent',
    name: '并发编程',
    icon: '⚡',
    color: 'bg-yellow-500',
    description: '多线程编程、线程安全、并发工具类等'
  },
  {
    id: 'jvm',
    name: 'JVM原理',
    icon: '🔧',
    color: 'bg-red-500',
    description: 'Java虚拟机原理、内存模型、GC机制等'
  },
  {
    id: 'advanced',
    name: '高级特性',
    icon: '🚀',
    color: 'bg-indigo-500',
    description: '反射、注解、泛型、Lambda表达式等高级特性'
  },
  {
    id: 'design-pattern',
    name: '设计模式',
    icon: '🎨',
    color: 'bg-teal-500',
    description: 'GoF设计模式：创建型、结构型、行为型模式'
  },
  {
    id: 'microservice',
    name: '微服务与分布式',
    icon: '🌐',
    color: 'bg-cyan-500',
    description: '微服务架构、分布式系统、Spring Cloud、服务治理'
  }
];
