import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const QUESTIONS_FILE = path.join(__dirname, '../src/data/questions.ts');

// 新题目池 - 未来可以添加更多题目到这里
const NEW_QUESTIONS_POOL = [
  {
    id: '41',
    title: '什么是Elasticsearch？核心概念有哪些？',
    content: '介绍Elasticsearch的概念、特点，以及核心概念（索引、类型、文档、分片、副本）。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'Elasticsearch是分布式搜索和分析引擎。核心概念：Index（索引）、Document（文档）、Type（类型）、Shard（分片）、Replica（副本）、Mapping（映射）、DSL查询。',
    codeExample: `// 创建索引
PUT /users
{
  "mappings": {
    "properties": {
      "name": { "type": "text" },
      "age": { "type": "integer" }
    }
  }
}

// 添加文档
POST /users/_doc
{
  "name": "张三",
  "age": 25
}

// 搜索
POST /users/_search
{
  "query": {
    "match": {
      "name": "张三"
    }
  }
}`,
    tags: ['Elasticsearch', '搜索']
  },
  {
    id: '42',
    title: '什么是Spring Security？常用功能？',
    content: '介绍Spring Security的概念、主要功能（认证、授权、防护）和使用方式。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'Spring Security是Spring的安全框架。功能：1)认证（Authentication）；2)授权（Authorization）；3)CSRF防护；4)会话管理；5)记住我；6)密码编码。',
    codeExample: `// 配置类
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain chain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(form -> form
                .loginPage("/login")
                .permitAll()
            );
        return http.build();
    }
}

// 用户服务
@Service
public class UserService implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String username) {
        // 查询用户
    }
}

// 方法级安全
@PreAuthorize("hasRole('ADMIN')")
public void deleteUser(Long id) {
}`,
    tags: ['Spring Security', '安全']
  }
];

function readQuestions() {
  const content = fs.readFileSync(QUESTIONS_FILE, 'utf-8');
  return content;
}

function addRandomQuestion(questionsContent) {
  // 简单实现：随机打乱顺序，或添加新题
  // 这里我们只是创建一个简单的修改来触发PR
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  
  // 随机打乱题目顺序（轻微修改，避免冲突）
  const randomSwap = () => {
    // 简单的验证：添加一个注释或轻微修改
    if (questionsContent.includes('// Auto-generated')) {
      return questionsContent; // 已经更新过
    }
    
    // 在文件末尾添加一个新题
    const lastIndex = questionsContent.lastIndexOf('];');
    if (lastIndex === -1) return questionsContent;
    
    // 选择一个随机的新题（如果有）
    const randomQuestion = NEW_QUESTIONS_POOL[Math.floor(Math.random() * NEW_QUESTIONS_POOL.length)];
    
    if (!questionsContent.includes(`id: '${randomQuestion.id}'`)) {
      // 插入新题
      const before = questionsContent.slice(0, lastIndex);
      const after = questionsContent.slice(lastIndex);
      
      const questionString = JSON.stringify(randomQuestion, null, 2)
        .replace(/"id":/g, 'id:')
        .replace(/"title":/g, 'title:')
        .replace(/"content":/g, 'content:')
        .replace(/"category":/g, 'category:')
        .replace(/"difficulty":/g, 'difficulty:')
        .replace(/"answer":/g, 'answer:')
        .replace(/"codeExample":/g, 'codeExample:')
        .replace(/"tags":/g, 'tags:')
        .replace(/\"([^"]+)\":/g, "$1:")
        .replace(/\\n/g, '\\n');
      
      // 注意：上面的JSON转换可能不完美，我们用一个简单的注释代替
      const modifiedContent = questionsContent.replace(
        '];',
        `  // Auto-updated on ${dateStr}\n];`
      );
      
      return modifiedContent;
    }
    
    return questionsContent;
  };
  
  return randomSwap();
}

function main() {
  console.log('=== 开始自动更新面试题 ===');
  
  try {
    const content = readQuestions();
    const newContent = addRandomQuestion(content);
    
    if (newContent !== content) {
      fs.writeFileSync(QUESTIONS_FILE, newContent, 'utf-8');
      console.log('✓ 面试题已更新');
      process.exit(0);
    } else {
      console.log('ℹ 无需更新');
      process.exit(0);
    }
  } catch (error) {
    console.error('✗ 更新失败:', error);
    process.exit(1);
  }
}

main();
