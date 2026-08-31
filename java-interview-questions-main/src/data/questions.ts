import { Question } from '../types';

export const questions: Question[] = [
  {
    id: '1',
    title: 'Java中==和equals的区别是什么？',
    content: '请详细解释Java中==运算符和equals方法的区别，并举例说明。',
    category: 'basics',
    difficulty: 'easy',
    answer: '==用于比较基本数据类型的值是否相等，或比较引用类型的引用地址是否相同。equals方法用于比较对象的内容是否相等，默认行为与==相同，但通常被重写（如String、Integer等类）来比较内容。',
    codeExample: `String s1 = new String("hello");
String s2 = new String("hello");
System.out.println(s1 == s2);      // false，引用不同
System.out.println(s1.equals(s2)); // true，内容相同

int a = 10;
int b = 10;
System.out.println(a == b);        // true，基本类型比较值`,
    tags: ['基础', '面向对象']
  },
  {
    id: '2',
    title: '什么是Java的自动装箱和拆箱？',
    content: '解释Java中的自动装箱（autoboxing）和拆箱（unboxing）概念，并说明它们的使用场景和注意事项。',
    category: 'basics',
    difficulty: 'easy',
    answer: '自动装箱是Java编译器自动将基本类型转换为对应的包装类类型的过程，拆箱则是相反的过程。例如int自动转换为Integer，Double自动转换为double等。这简化了代码，但在性能敏感的场景或集合操作中需要注意。',
    codeExample: `// 自动装箱
Integer i = 100; // 相当于 Integer.valueOf(100)

// 自动拆箱
int j = i;       // 相当于 i.intValue()

// 在集合中使用
List<Integer> list = new ArrayList<>();
list.add(1);     // 自动装箱`,
    tags: ['基础', '类型系统']
  },
  {
    id: '3',
    title: 'String、StringBuilder和StringBuffer的区别',
    content: '比较这三个字符串相关类的特点、使用场景和性能差异。',
    category: 'basics',
    difficulty: 'medium',
    answer: 'String是不可变的，每次修改都会创建新对象。StringBuilder是可变的，非线程安全，性能高。StringBuffer是可变的，线程安全（方法都加了synchronized），性能略低于StringBuilder。',
    codeExample: `// String - 不可变
String s = "hello";
s = s + " world"; // 创建新对象

// StringBuilder - 可变，非线程安全
StringBuilder sb = new StringBuilder("hello");
sb.append(" world"); // 原地修改

// StringBuffer - 可变，线程安全
StringBuffer sbuf = new StringBuffer("hello");
sbuf.append(" world");`,
    tags: ['字符串', '性能']
  },
  {
    id: '4',
    title: 'Java中的异常体系是怎样的？',
    content: '请描述Java异常的层次结构，以及Error、Exception、RuntimeException的区别。',
    category: 'basics',
    difficulty: 'medium',
    answer: 'Java异常体系的根类是Throwable，分为Error和Exception。Error表示系统级错误，通常无法恢复。Exception分为受检异常（必须处理）和非受检异常（RuntimeException及其子类）。RuntimeException表示编程错误，如空指针、数组越界等。',
    codeExample: `// 受检异常 - 需要catch或throws
public void readFile() throws IOException {
    FileInputStream fis = new FileInputStream("file.txt");
}

// 非受检异常 - 可以不处理
public void divide(int a, int b) {
    if (b == 0) {
        throw new ArithmeticException("除数不能为0");
    }
}`,
    tags: ['异常处理', '核心概念']
  },
  {
    id: '5',
    title: '什么是Java的反射机制？',
    content: '解释Java反射的概念、用途、优缺点以及基本使用方法。',
    category: 'advanced',
    difficulty: 'hard',
    answer: '反射允许程序在运行时检查类、接口、方法和字段的信息，并且可以在运行时创建对象、调用方法、访问字段。它是框架开发的基础，但会降低性能并破坏封装性。',
    codeExample: `// 获取Class对象
Class<?> clazz = Class.forName("java.lang.String");

// 获取构造函数并创建对象
Constructor<?> constructor = clazz.getConstructor(String.class);
String str = (String) constructor.newInstance("hello");

// 获取方法并调用
Method method = clazz.getMethod("length");
int length = (int) method.invoke(str);`,
    tags: ['高级特性', '反射']
  },
  {
    id: '6',
    title: 'HashMap的实现原理是什么？',
    content: '详细描述Java 8中HashMap的底层数据结构、hash算法、扩容机制等。',
    category: 'collection',
    difficulty: 'hard',
    answer: 'Java 8的HashMap底层使用数组+链表+红黑树实现。当链表长度超过8且数组容量大于64时，链表会转为红黑树。hash通过hash(key) ^ (hash >>> 16)计算。当size超过负载因子0.75*capacity时，数组会扩容为原来的2倍。',
    codeExample: `// HashMap的基本使用
HashMap<String, Integer> map = new HashMap<>();
map.put("a", 1);
map.put("b", 2);

// 遍历方式
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}`,
    tags: ['集合', '数据结构']
  },
  {
    id: '7',
    title: 'ArrayList和LinkedList的区别',
    content: '对比这两个List实现类的底层结构、性能特点和适用场景。',
    category: 'collection',
    difficulty: 'medium',
    answer: 'ArrayList基于动态数组实现，随机访问快，插入删除慢（需要移动元素）。LinkedList基于双向链表实现，插入删除快，随机访问慢（需要遍历）。ArrayList默认容量10，扩容为1.5倍。',
    codeExample: `// ArrayList
List<String> arrayList = new ArrayList<>();
arrayList.get(0);        // O(1) 快速随机访问
arrayList.add(0, "a");   // O(n) 需要移动元素

// LinkedList
List<String> linkedList = new LinkedList<>();
linkedList.get(0);       // O(n) 需要遍历
linkedList.add(0, "a");  // O(1) 只修改指针`,
    tags: ['集合', 'List']
  },
  {
    id: '7-1',
    title: 'HashMap和Hashtable的区别',
    content: '对比HashMap和Hashtable在线程安全、性能、null支持等方面的区别。',
    category: 'collection',
    difficulty: 'medium',
    answer: 'HashMap线程不安全，允许key和value为null，效率高。Hashtable线程安全（synchronized修饰），不允许key或value为null，效率低。推荐使用ConcurrentHashMap替代Hashtable。',
    codeExample: `// HashMap允许null
HashMap<String, Integer> map = new HashMap<>();
map.put(null, 1);      // 允许
map.put("key", null);  // 允许

// Hashtable不允许null
Hashtable<String, Integer> table = new Hashtable<>();
table.put(null, 1);    // NullPointerException
table.put("key", null); // NullPointerException

// 线程安全推荐使用ConcurrentHashMap
ConcurrentHashMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
concurrentMap.put("key", 1); // 高效的线程安全操作`,
    tags: ['集合', 'Map']
  },
  {
    id: '7-2',
    title: 'ConcurrentHashMap的实现原理',
    content: '详细解释ConcurrentHashMap如何实现高效的并发访问，包括JDK 7的分段锁和JDK 8的CAS+synchronized。',
    category: 'collection',
    difficulty: 'hard',
    answer: 'JDK 7使用Segment数组+链表，每个Segment类似一个Hashtable。JDK 8取消分段锁，采用数组+链表+红黑树，使用CAS操作和synchronized来保证并发安全。put时如果数组为空，用CAS初始化头节点；否则对头节点加锁插入。',
    codeExample: `// ConcurrentHashMap基本操作
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();

// 原子操作
map.putIfAbsent("key", 1);  // 不存在才插入
map.computeIfAbsent("key", k -> 1);  // compute
map.merge("key", 1, Integer::sum);  // 合并

// 高并发场景
for (int i = 0; i < 100; i++) {
    new Thread(() -> {
        map.put(Thread.currentThread().getName(), 1);
    }).start();
}

// JDK 8后采用CAS+synchronized
// 1. 使用CAS初始化数组
// 2. 使用synchronized锁住头节点进行插入
// 3. 链表转红黑树阈值仍为8`,
    tags: ['集合', '并发', '线程安全']
  },
  {
    id: '7-3',
    title: 'HashSet的实现原理',
    content: '解释HashSet如何保证元素唯一性，以及它与HashMap的关系。',
    category: 'collection',
    difficulty: 'medium',
    answer: 'HashSet底层使用HashMap实现，元素作为Map的key，value使用一个Object对象（PRESENT）。添加元素时调用hashCode和equals判断唯一性。由于HashMap的key不能重复，所以HashSet元素唯一。',
    codeExample: `// HashSet内部实际使用HashMap
private transient HashMap<E, Object> map;
private static final Object PRESENT = new Object();

public boolean add(E e) {
    return map.put(e, PRESENT) == null;
}

// HashSet保证唯一性的过程
// 1. 计算hashCode确定bucket位置
// 2. 通过equals比较是否已存在
// 3. 已存在返回false，不存在则添加返回true

Set<String> set = new HashSet<>();
set.add("hello");
set.add("hello");  // 返回false，不会重复添加

// LinkedHashSet保持插入顺序
Set<String> linkedSet = new LinkedHashSet<>();
linkedSet.add("a");
linkedSet.add("b");
linkedSet.add("a");  // 保持a,b的插入顺序`,
    tags: ['集合', 'Set']
  },
  {
    id: '7-4',
    title: 'TreeMap和HashMap的区别',
    content: '对比TreeMap和HashMap的底层数据结构、排序方式和使用场景。',
    category: 'collection',
    difficulty: 'medium',
    answer: 'HashMap基于哈希表，无序；TreeMap基于红黑树，有序（自然顺序或自定义Comparator）。HashMap查找O(1)，TreeMap查找O(log n)。TreeMap支持范围查询和按序遍历。',
    codeExample: `// HashMap - 无序
Map<String, Integer> hashMap = new HashMap<>();
hashMap.put("banana", 2);
hashMap.put("apple", 1);
hashMap.put("cherry", 3);
// 遍历顺序不确定

// TreeMap - 有序
Map<String, Integer> treeMap = new TreeMap<>();
treeMap.put("banana", 2);
treeMap.put("apple", 1);
treeMap.put("cherry", 3);
// 遍历顺序: apple, banana, cherry（字典序）

// 自定义排序
TreeMap<Integer, String> customMap = new TreeMap<>(Comparator.reverseOrder());
customMap.put(1, "one");
customMap.put(3, "three");
customMap.put(2, "two");
// 遍历顺序: 3, 2, 1（降序）

// TreeMap特有功能
treeMap.firstKey();  // 获取最小key
treeMap.lastKey();   // 获取最大key
treeMap.subMap("a", "c");  // 获取子Map`,
    tags: ['集合', 'Map', '红黑树']
  },
  {
    id: '7-5',
    title: 'ArrayList的扩容机制',
    content: '详细解释ArrayList的扩容原理，包括默认容量、扩容公式和性能影响。',
    category: 'collection',
    difficulty: 'hard',
    answer: 'ArrayList默认容量为10。添加第一个元素时数组初始化为空数组，扩容时创建新数组并复制元素。JDK 6及之前：newCapacity = (oldCapacity * 3) / 2 + 1；JDK 7开始使用 oldCapacity + (oldCapacity >> 1)，即1.5倍。扩容操作耗时，应预估容量或使用ArrayList(int initialCapacity)预分配。',
    codeExample: `// ArrayList扩容源码（JDK 8）
private void grow(int minCapacity) {
    int oldCapacity = elementData.length;
    // 新容量 = 旧容量 + 旧容量/2（即1.5倍）
    int newCapacity = oldCapacity + (oldCapacity >> 1);
    if (newCapacity - minCapacity < 0)
        newCapacity = minCapacity;
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        newCapacity = hugeCapacity(minCapacity);
    // 复制数组
    elementData = Arrays.copyOf(elementData, newCapacity);
}

// 性能影响
List<Integer> list = new ArrayList<>();
// 每次add都可能触发扩容和数组复制
for (int i = 0; i < 100000; i++) {
    list.add(i);  // 多次扩容，效率低
}

// 推荐做法：预估容量
List<Integer> list2 = new ArrayList<>(100000);
for (int i = 0; i < 100000; i++) {
    list2.add(i);  // 一次分配，效率高
}

// trimToSize()回收多余空间
list2.trimToSize();`,
    tags: ['集合', 'ArrayList', '性能']
  },
  {
    id: '7-6',
    title: 'fail-fast与fail-safe的区别',
    content: '解释Java集合框架中的fail-fast和fail-safe机制，以及它们在并发环境下的表现。',
    category: 'collection',
    difficulty: 'hard',
    answer: 'fail-fast在检测到并发修改时立即抛出ConcurrentModificationException，通过modCount实现。ArrayList、HashMap等非线程安全集合采用fail-fast。fail-safe复制集合快照进行遍历，不抛异常，如CopyOnWriteArrayList、ConcurrentHashMap。',
    codeExample: `// fail-fast示例
List<String> list = new ArrayList<>();
list.add("a");
for (String item : list) {  // ConcurrentModificationException
    list.remove(item);
}

// 正确遍历删除方式
Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    if (iterator.next().equals("a")) {
        iterator.remove();  // 使用迭代器删除
    }
}

// fail-safe示例
List<String> safeList = new CopyOnWriteArrayList<>();
safeList.add("a");
for (String item : safeList) {  // 不会抛异常
    safeList.remove(item);       // 可以安全删除
}

// ConcurrentHashMap遍历
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("a", 1);
// 安全遍历，不会抛ConcurrentModificationException
map.forEach((k, v) -> System.out.println(k + ": " + v));`,
    tags: ['集合', '并发', '异常处理']
  },
  {
    id: '8',
    title: '什么是Java的多态？',
    content: '解释多态的概念、实现方式（重载和重写）以及向上转型和向下转型。',
    category: 'oop',
    difficulty: 'medium',
    answer: '多态是指同一操作作用于不同对象会产生不同的结果。实现方式包括方法重载（编译时多态）和方法重写（运行时多态）。向上转型是子类转父类，自动进行；向下转型是父类转子类，需要强制类型转换并可能抛出ClassCastException。',
    codeExample: `class Animal {
    void makeSound() { System.out.println("Animal sound"); }
}

class Dog extends Animal {
    @Override
    void makeSound() { System.out.println("Woof!"); }
}

// 多态示例
Animal animal = new Dog(); // 向上转型
animal.makeSound();        // 运行时调用Dog的方法`,
    tags: ['面向对象', '多态']
  },
  {
    id: '9',
    title: 'synchronized关键字的作用和原理',
    content: '解释synchronized的用法、作用范围以及底层实现原理。',
    category: 'concurrent',
    difficulty: 'hard',
    answer: 'synchronized用于保证多线程环境下的原子性、可见性和有序性。可以修饰方法或代码块。底层通过对象头的Mark Word和monitor机制实现。JDK 6后引入了偏向锁、轻量级锁、重量级锁的锁升级机制来优化性能。',
    codeExample: `// 修饰实例方法
public synchronized void increment() {
    count++;
}

// 修饰代码块
public void decrement() {
    synchronized (this) {
        count--;
    }
}

// 修饰静态方法
public static synchronized void staticMethod() {
    // ...
}`,
    tags: ['并发', '线程安全']
  },
  {
    id: '10',
    title: 'Java内存模型（JMM）是什么？',
    content: '描述Java内存模型的概念、主内存和工作内存的关系，以及volatile、synchronized等关键字在JMM中的作用。',
    category: 'jvm',
    difficulty: 'hard',
    answer: 'JMM定义了线程和主内存之间的抽象关系，规定了共享变量的访问规则。每个线程有自己的工作内存，共享变量存于主内存。需要保证原子性、可见性、有序性。volatile保证可见性和有序性，synchronized保证三者都有。',
    codeExample: `// volatile保证可见性和禁止指令重排序
private volatile boolean flag = false;

public void writer() {
    flag = true; // 写操作会立即刷新到主内存
}

public void reader() {
    if (flag) { // 读操作会从主内存重新读取
        // ...
    }
}`,
    tags: ['JVM', '并发']
  },
  {
    id: '11',
    title: 'Spring Boot自动配置原理是什么？',
    content: '详细解释Spring Boot的自动配置机制，包括@SpringBootApplication注解、@EnableAutoConfiguration、spring.factories文件等。',
    category: 'advanced',
    difficulty: 'hard',
    answer: 'Spring Boot自动配置通过@EnableAutoConfiguration注解，利用SpringFactoriesLoader加载META-INF/spring.factories文件中定义的自动配置类，根据@Conditional条件注解判断是否生效，最终将Bean注册到容器中。',
    codeExample: `// @SpringBootApplication包含了三个注解
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// 自定义自动配置
@Configuration
@ConditionalOnClass(SomeClass.class)
@EnableConfigurationProperties(MyProperties.class)
public class MyAutoConfiguration {
    @Bean
    @ConditionalOnMissingBean
    public MyBean myBean() {
        return new MyBean();
    }
}`,
    tags: ['Spring Boot', '自动配置']
  },
  {
    id: '12',
    title: '什么是微服务？微服务的优缺点是什么？',
    content: '解释微服务架构的概念、特点、与单体架构的区别，以及微服务的优缺点。',
    category: 'advanced',
    difficulty: 'medium',
    answer: '微服务是将应用拆分为多个小型、独立部署的服务，每个服务专注于单一业务功能，通过轻量级通信机制协作。优点：独立部署、技术栈灵活、易于扩展。缺点：运维复杂、分布式事务、服务调用开销。',
    codeExample: `// 简单的Spring Boot微服务
@SpringBootApplication
@RestController
public class UserService {
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        // 从数据库查询用户
        return new User(id, "张三");
    }
}

// 使用Feign调用其他微服务
@FeignClient(name = "order-service")
public interface OrderClient {
    @GetMapping("/orders/user/{userId}")
    List<Order> getOrdersByUserId(@PathVariable Long userId);
}`,
    tags: ['微服务', '架构设计']
  },
  {
    id: '13',
    title: 'Redis的数据结构有哪些？应用场景是什么？',
    content: '介绍Redis的主要数据结构及其应用场景，包括String、Hash、List、Set、Sorted Set等。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'Redis支持String（缓存、计数器）、Hash（对象存储）、List（消息队列、栈）、Set（去重、交集）、Sorted Set（排行榜）、HyperLogLog（基数统计）、Bitmap（用户签到）、Geo（地理位置）等数据结构。',
    codeExample: `// String - 缓存用户信息
set user:1 "{\"id\":1,\"name\":\"张三\"}"

// Hash - 存储购物车
hset cart:1 product:1001 2
hset cart:1 product:1002 1

// List - 消息队列
lpush queue:order "order001"

// Sorted Set - 排行榜
zadd leaderboard 100 "user1"
zadd leaderboard 200 "user2"`,
    tags: ['Redis', '缓存']
  },
  {
    id: '14',
    title: '什么是Spring Cloud？常用组件有哪些？',
    content: '介绍Spring Cloud的概念、作用以及常用的组件，如Eureka、Ribbon、Feign、Hystrix、Zuul/Gateway等。',
    category: 'advanced',
    difficulty: 'hard',
    answer: 'Spring Cloud是一套微服务开发工具集，提供服务发现（Eureka/Nacos）、负载均衡（Ribbon）、服务调用（Feign）、熔断器（Hystrix/Sentinel）、网关（Zuul/Gateway）、配置中心（Config）、链路追踪（Sleuth/Zipkin）等功能。',
    codeExample: `// 服务注册与发现
@EnableDiscoveryClient
@SpringBootApplication
public class ServiceApplication { }

// Feign客户端
@FeignClient("user-service")
public interface UserClient {
    @GetMapping("/users/{id}")
    User getUser(@PathVariable("id") Long id);
}

// 网关路由配置
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/users/**`,
    tags: ['Spring Cloud', '微服务']
  },
  {
    id: '15',
    title: 'MySQL索引原理及B+树为什么适合做索引？',
    content: '解释MySQL索引的底层数据结构，以及为什么InnoDB选择B+树而不是B树或红黑树。',
    category: 'advanced',
    difficulty: 'hard',
    answer: 'InnoDB使用B+树作为索引结构。B+树的优点：1)节点可以存储更多key，树更矮，IO次数少；2)查询性能稳定；3)叶子节点有链表，范围查询高效；4)全表扫描更快。相比B树，B+树只有叶子节点存数据，非叶子节点只存索引，内存利用率更高。',
    codeExample: `-- 创建索引
CREATE INDEX idx_username ON users(username);

-- 联合索引
CREATE INDEX idx_name_age ON users(name, age);

-- 查看索引
SHOW INDEX FROM users;

-- 使用EXPLAIN分析查询
EXPLAIN SELECT * FROM users WHERE username = '张三';`,
    tags: ['MySQL', '索引']
  },
  {
    id: '16',
    title: 'JVM垃圾回收机制和常用垃圾回收器',
    content: '详细解释JVM垃圾回收的原理、常用算法（标记清除、复制、标记整理、分代收集）以及常用GC器。',
    category: 'jvm',
    difficulty: 'hard',
    answer: 'JVM垃圾回收识别不再被引用的对象并回收内存。常用算法：标记清除（产生碎片）、复制（年轻代，无碎片但需额外空间）、标记整理（老年代）、分代收集（年轻代+老年代）。常用GC器：Serial、Parallel、CMS、G1、ZGC、Shenandoah。',
    codeExample: `// JVM参数配置
-XX:+UseG1GC           # 使用G1收集器
-XX:MaxGCPauseMillis=200 # 最大GC停顿时间
-XX:+HeapDumpOnOutOfMemoryError # OOM时dump堆
-Xms4g -Xmx4g         # 初始和最大堆大小

// 查看GC日志
-XX:+PrintGCDetails
-XX:+PrintGCDateStamps
-Xloggc:gc.log`,
    tags: ['JVM', 'GC']
  },
  {
    id: '17',
    title: '什么是分布式事务？解决方案有哪些？',
    content: '解释分布式事务的概念、问题，以及常见的解决方案如2PC、3PC、TCC、Saga、本地消息表、Seata等。',
    category: 'advanced',
    difficulty: 'hard',
    answer: '分布式事务是跨多个数据库或服务的事务，需要保证ACID特性。解决方案：2PC（两阶段提交）、3PC（三阶段）、TCC（Try-Confirm-Cancel）、Saga（长期事务）、本地消息表、Seata（AT/TCC/Saga模式）等。',
    codeExample: `// Seata AT模式示例
@GlobalTransactional
public void createOrder(Order order) {
    // 1. 扣库存
    inventoryService.deduct(order.getProductId(), order.getCount());
    // 2. 创建订单
    orderService.create(order);
    // 3. 扣余额
    accountService.debit(order.getUserId(), order.getAmount());
}

// TCC模式
public interface TccService {
    @TwoPhaseBusinessAction(name = "tccAction", commitMethod = "commit", rollbackMethod = "rollback")
    void try(BusinessActionContext context);
    void commit(BusinessActionContext context);
    void rollback(BusinessActionContext context);
}`,
    tags: ['分布式', '事务']
  },
  {
    id: '18',
    title: 'Kafka的架构和原理是什么？',
    content: '介绍Kafka的核心概念（Producer、Consumer、Broker、Topic、Partition、Offset）和架构原理。',
    category: 'advanced',
    difficulty: 'hard',
    answer: 'Kafka是分布式消息系统，采用发布-订阅模式。核心组件：Producer（生产者）、Consumer（消费者）、Broker（服务器）、Topic（主题）、Partition（分区）、Replica（副本）、Consumer Group（消费组）、Offset（偏移量）。特点：高吞吐、持久化、分布式。',
    codeExample: `// 生产者
Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

Producer<String, String> producer = new KafkaProducer<>(props);
producer.send(new ProducerRecord<>("topic", "key", "value"));

// 消费者
@KafkaListener(topics = "topic", groupId = "group")
public void listen(String message) {
    System.out.println("收到消息: " + message);
}`,
    tags: ['Kafka', '消息队列']
  },
  {
    id: '19',
    title: '如何保证接口的幂等性？',
    content: '解释幂等性的概念，以及常见的保证接口幂等性的方案（唯一索引、Token机制、悲观锁、乐观锁、分布式锁等）。',
    category: 'advanced',
    difficulty: 'medium',
    answer: '幂等性指同一请求多次执行产生的结果一致。解决方案：1)唯一索引（防止重复插入）；2)Token机制（防重复提交）；3)数据库乐观锁（version字段）；4)Redis分布式锁；5)状态机（状态只能单向变更）。',
    codeExample: `// 1. Token机制
@GetMapping("/token")
public String getToken() {
    String token = UUID.randomUUID().toString();
    redisTemplate.opsForValue().set(token, "1", 30, TimeUnit.SECONDS);
    return token;
}

@PostMapping("/order")
public String createOrder(@RequestHeader("token") String token, @RequestBody Order order) {
    Boolean exists = redisTemplate.delete(token);
    if (!exists) {
        return "请勿重复提交";
    }
    orderService.create(order);
    return "成功";
}

// 2. 乐观锁
@Update("UPDATE account SET balance = balance - #{amount}, version = version + 1 WHERE id = #{id} AND version = #{version}")
int deduct(@Param("id") Long id, @Param("amount") BigDecimal amount, @Param("version") Integer version);`,
    tags: ['幂等性', '高并发']
  },
  {
    id: '20',
    title: 'ThreadLocal的原理和内存泄漏问题',
    content: '解释ThreadLocal的工作原理、使用场景，以及为什么会产生内存泄漏，如何避免。',
    category: 'concurrent',
    difficulty: 'hard',
    answer: 'ThreadLocal提供线程本地变量，每个线程都有独立副本。原理：Thread内部有ThreadLocalMap，key是ThreadLocal对象（弱引用），value是线程本地值。内存泄漏原因：key是弱引用会被GC回收，但value是强引用，线程不结束value不会回收，需手动调用remove()。',
    codeExample: `// ThreadLocal使用
public class UserContext {
    private static final ThreadLocal<User> USER_THREAD_LOCAL = new ThreadLocal<>();
    
    public static void setUser(User user) {
        USER_THREAD_LOCAL.set(user);
    }
    
    public static User getUser() {
        return USER_THREAD_LOCAL.get();
    }
    
    public static void clear() {
        USER_THREAD_LOCAL.remove(); // 防止内存泄漏！
    }
}

// 在过滤器中使用
public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) {
    try {
        User user = getCurrentUser(request);
        UserContext.setUser(user);
        chain.doFilter(request, response);
    } finally {
        UserContext.clear(); // 必须清理！
    }
}`,
    tags: ['并发', 'ThreadLocal']
  },
  {
    id: '21',
    title: '什么是限流？常用的限流算法有哪些？',
    content: '解释限流的概念和作用，以及常见的限流算法（固定窗口、滑动窗口、漏桶、令牌桶）的实现原理。',
    category: 'advanced',
    difficulty: 'hard',
    answer: '限流是限制系统请求速率，防止过载。常用算法：1)固定窗口计数器（简单但有临界问题）；2)滑动窗口（更平滑）；3)漏桶（恒定速率处理）；4)令牌桶（允许突发流量）。常用实现：Guava RateLimiter、Redis + Lua脚本、Sentinel。',
    codeExample: `// Guava RateLimiter
RateLimiter limiter = RateLimiter.create(10.0); // 每秒10个令牌
if (limiter.tryAcquire()) {
    // 处理请求
}

// Redis + Lua 滑动窗口
local key = KEYS[1]
local window = tonumber(ARGV[1])
local limit = tonumber(ARGV[2])
local currentTime = tonumber(ARGV[3])

redis.call('ZREMRANGEBYSCORE', key, 0, currentTime - window)
local count = redis.call('ZCARD', key)
if count < limit then
    redis.call('ZADD', key, currentTime, currentTime)
    redis.call('EXPIRE', key, window + 1)
    return 1
else
    return 0
end`,
    tags: ['限流', '高并发']
  },
  {
    id: '22',
    title: 'Spring中的循环依赖问题及解决方案',
    content: '解释什么是循环依赖，Spring是如何解决循环依赖问题的（三级缓存）。',
    category: 'advanced',
    difficulty: 'hard',
    answer: '循环依赖是A依赖B，B又依赖A的情况。Spring通过三级缓存解决：1)一级缓存（singletonObjects）存完整Bean；2)二级缓存（earlySingletonObjects）存刚实例化的Bean；3)三级缓存（singletonFactories）存ObjectFactory。关键是在Bean完全初始化前就暴露出来让其他Bean注入。',
    codeExample: `// 循环依赖示例
@Service
public class A {
    @Autowired
    private B b;
}

@Service
public class B {
    @Autowired
    private A a;
}

// 三级缓存源码（DefaultSingletonBeanRegistry）
private final Map<String, Object> singletonObjects = new ConcurrentHashMap<>(256);
private final Map<String, Object> earlySingletonObjects = new HashMap<>(16);
private final Map<String, ObjectFactory<?>> singletonFactories = new HashMap<>(16);`,
    tags: ['Spring', '循环依赖']
  },
  {
    id: '23',
    title: '如何进行SQL优化？',
    content: '介绍SQL优化的常用方法和技巧，包括索引优化、SQL语句优化、表结构优化等。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'SQL优化方法：1)建立合适的索引（避免全表扫描）；2)避免SELECT *；3)使用JOIN代替子查询；4)避免在WHERE子句使用函数或表达式；5)使用LIMIT分页；6)EXPLAIN分析执行计划；7)读写分离；8)使用覆盖索引。',
    codeExample: `-- 不好的写法（索引失效）
SELECT * FROM users WHERE YEAR(create_time) = 2024;
SELECT * FROM users WHERE name LIKE '%张%';

-- 好的写法
SELECT * FROM users WHERE create_time >= '2024-01-01' AND create_time < '2025-01-01';
SELECT * FROM users WHERE name LIKE '张%';

-- 使用覆盖索引
CREATE INDEX idx_name_age ON users(name, age);
SELECT name, age FROM users WHERE name = '张三'; -- 不需要回表

-- EXPLAIN分析
EXPLAIN SELECT * FROM users WHERE id = 1;`,
    tags: ['SQL优化', 'MySQL']
  },
  {
    id: '24',
    title: '什么是ZooKeeper？有哪些应用场景？',
    content: '介绍ZooKeeper的概念、特点、数据结构，以及常见的应用场景（分布式锁、配置中心、服务发现、Leader选举）。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'ZooKeeper是分布式协调服务，提供类似文件系统的树形数据结构。特点：有序节点、临时节点、Watcher通知、数据一致性。应用场景：分布式锁、配置中心、服务注册发现、Leader选举、分布式队列。',
    codeExample: `// Curator实现分布式锁
InterProcessMutex lock = new InterProcessMutex(client, "/locks/order");
try {
    if (lock.acquire(10, TimeUnit.SECONDS)) {
        // 执行业务
    }
} finally {
    lock.release();
}

// 监听节点变化
client.getData().usingWatcher((CuratorWatcher) event -> {
    System.out.println("节点变化: " + event.getType());
}).forPath("/config");`,
    tags: ['ZooKeeper', '分布式协调']
  },
  {
    id: '25',
    title: '什么是CAP理论？BASE理论？',
    content: '解释CAP理论的三个要素（一致性、可用性、分区容错性），以及BASE理论（Basically Available、Soft state、Eventually consistent）。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'CAP理论：分布式系统中一致性（C）、可用性（A）、分区容错性（P）三者不可兼得，只能选两个。CP系统（HBase、MongoDB）优先保证一致性，AP系统（Cassandra、Eureka）优先保证可用性。BASE理论：基本可用、软状态、最终一致，是对CAP的折中。',
    codeExample: `// Redis保证最终一致性（BASE）
// 写入时先缓存，异步同步到数据库
@CachePut(value = "user", key = "#user.id")
public User update(User user) {
    userDao.update(user);
    // 异步消息通知其他节点
    messageQueue.send("user:update", user.getId());
    return user;
}

// 读取时先从缓存读
@Cacheable(value = "user", key = "#id")
public User getById(Long id) {
    return userDao.findById(id);
}`,
    tags: ['CAP', '分布式理论']
  },
  {
    id: '26',
    title: '什么是分库分表？如何实现？',
    content: '解释分库分表的原因、策略（水平分表、垂直分表、水平分库、垂直分库），以及常用中间件（ShardingSphere、MyCat）。',
    category: 'advanced',
    difficulty: 'hard',
    answer: '分库分表解决单库单表数据量过大的问题。策略：1)垂直分表（按列拆分）；2)水平分表（按行拆分，如哈希、范围分表）；3)垂直分库（按业务拆分库）；4)水平分库（数据分散到多个库）。常用中间件：ShardingSphere-JDBC/Proxy、MyCat。',
    codeExample: `// ShardingSphere配置
spring:
  shardingsphere:
    datasource:
      names: ds0,ds1
      ds0:
        jdbc-url: jdbc:mysql://localhost:3306/db0
        username: root
      ds1:
        jdbc-url: jdbc:mysql://localhost:3306/db1
        username: root
    sharding:
      tables:
        t_order:
          actual-data-nodes: ds\${0..1}.t_order_\${0..1}
          database-strategy:
            inline:
              sharding-column: user_id
              algorithm-expression: ds\${user_id % 2}
          table-strategy:
            inline:
              sharding-column: order_id
              algorithm-expression: t_order_\${order_id % 2}`,
    tags: ['分库分表', '数据库']
  },
  {
    id: '27',
    title: '什么是MySQL的事务隔离级别？',
    content: '介绍SQL标准的四个事务隔离级别（读未提交、读已提交、可重复读、串行化）以及InnoDB的默认隔离级别。',
    category: 'advanced',
    difficulty: 'medium',
    answer: '四个隔离级别：1)READ UNCOMMITTED（读未提交）；2)READ COMMITTED（读已提交，Oracle默认）；3)REPEATABLE READ（可重复读，MySQL默认）；4)SERIALIZABLE（串行化）。InnoDB默认REPEATABLE READ，通过MVCC和Next-Key Lock解决幻读问题。',
    codeExample: `-- 设置隔离级别
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- 查询当前隔离级别
SELECT @@tx_isolation;

-- MySQL 8.0+
SELECT @@transaction_isolation;

-- 开启事务
BEGIN;
-- 执行业务操作
UPDATE account SET balance = balance - 100 WHERE id = 1;
UPDATE account SET balance = balance + 100 WHERE id = 2;
-- 提交事务
COMMIT;`,
    tags: ['MySQL', '事务']
  },
  {
    id: '28',
    title: '什么是Nginx？如何配置负载均衡？',
    content: '介绍Nginx的功能和特点，以及如何配置Nginx实现反向代理和负载均衡。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'Nginx是高性能Web服务器和反向代理服务器。支持反向代理、负载均衡、静态资源服务、SSL/TLS、限流等。负载均衡策略：轮询（默认）、加权轮询、IP hash、least_conn、url_hash等。',
    codeExample: `# Nginx配置
http {
    upstream backend {
        server 192.168.1.10:8080 weight=3;
        server 192.168.1.11:8080 weight=2;
        server 192.168.1.12:8080 backup;
    }

    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://backend;
            proxy_set_header Host \$host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        }
    }
}`,
    tags: ['Nginx', '负载均衡']
  },
  {
    id: '29',
    title: '什么是Docker？Dockerfile常用指令？',
    content: '介绍Docker的概念、核心组件（镜像、容器、仓库），以及Dockerfile常用指令。',
    category: 'advanced',
    difficulty: 'easy',
    answer: 'Docker是容器化平台，将应用和依赖打包成容器。核心概念：Image（镜像）、Container（容器）、Repository（仓库）。Dockerfile常用指令：FROM、RUN、COPY、ADD、WORKDIR、EXPOSE、CMD、ENTRYPOINT、ENV、VOLUME等。',
    codeExample: `# Dockerfile示例
FROM openjdk:11-jre-slim
WORKDIR /app
COPY target/myapp.jar app.jar
EXPOSE 8080
ENV JAVA_OPTS="-Xmx512m"
ENTRYPOINT ["java", "-jar", "app.jar"]

# 构建镜像
docker build -t myapp:1.0 .

# 运行容器
docker run -d -p 8080:8080 --name myapp myapp:1.0

# Docker Compose
version: '3'
services:
  app:
    build: .
    ports:
      - "8080:8080"
  redis:
    image: redis:6
    ports:
      - "6379:6379"`,
    tags: ['Docker', '容器化']
  },
  {
    id: '30',
    title: '什么是Netty？核心组件有哪些？',
    content: '介绍Netty的概念、特点、应用场景，以及核心组件（EventLoop、Channel、ChannelPipeline、ChannelHandler等）。',
    category: 'advanced',
    difficulty: 'hard',
    answer: 'Netty是高性能异步事件驱动的网络框架。核心组件：1)EventLoop（事件循环，处理IO事件）；2)Channel（网络操作抽象）；3)ChannelPipeline（责任链模式）；4)ChannelHandler（业务逻辑处理）；5)ByteBuf（字节容器）。应用场景：RPC框架、游戏服务器、消息推送等。',
    codeExample: `// Netty服务器
ServerBootstrap bootstrap = new ServerBootstrap();
bootstrap.group(new NioEventLoopGroup(), new NioEventLoopGroup())
    .channel(NioServerSocketChannel.class)
    .childHandler(new ChannelInitializer<SocketChannel>() {
        @Override
        protected void initChannel(SocketChannel ch) {
            ch.pipeline()
                .addLast(new StringDecoder())
                .addLast(new StringEncoder())
                .addLast(new SimpleChannelInboundHandler<String>() {
                    @Override
                    protected void channelRead0(ChannelHandlerContext ctx, String msg) {
                        System.out.println("收到: " + msg);
                        ctx.writeAndFlush("收到你的消息");
                    }
                });
        }
    });
bootstrap.bind(8080).sync();`,
    tags: ['Netty', '网络编程']
  },
  {
    id: '31',
    title: '什么是MyBatis？#{}和${}的区别是什么？',
    content: '解释MyBatis的概念、特点，以及#{}和${}的区别、使用场景。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'MyBatis是持久层框架，避免JDBC代码。#{}是预编译处理，使用PreparedStatement，能防止SQL注入。${}是字符串替换，直接替换，有SQL注入风险。#{id} → ?，${table} → 直接替换。',
    codeExample: "<!-- #{}预编译，安全 -->\n<select id=\"getUser\" resultType=\"User\">\n    SELECT * FROM user WHERE id = #{id}\n</select>\n\n<!-- ${}字符串替换，需注意SQL注入 -->\n<select id=\"getUsers\" resultType=\"User\">\n    SELECT * FROM ${tableName}\n</select>\n\n<!-- 模糊查询 - 正确做法 -->\n<select id=\"searchUser\" resultType=\"User\">\n    SELECT * FROM user WHERE name LIKE CONCAT('%', #{keyword}, '%')\n</select>",
    tags: ['MyBatis', 'ORM']
  },
  {
    id: '32',
    title: '什么是RESTful API？设计原则是什么？',
    content: '解释RESTful API的概念、设计原则（资源、HTTP方法、状态码、URI设计等）。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'RESTful是基于REST架构风格的API设计。核心原则：1)资源用URI表示；2)用HTTP动词操作（GET查、POST增、PUT改、DELETE删）；3)无状态；4)用HTTP状态码；5)HATEOAS。',
    codeExample: `// RESTful API示例
GET    /users              # 获取用户列表
GET    /users/1            # 获取id为1的用户
POST   /users              # 创建新用户
PUT    /users/1            # 更新用户
DELETE /users/1            # 删除用户
GET    /users/1/orders     # 获取用户的订单列表
POST   /users/1/orders     # 为用户创建订单

// HTTP状态码
200 OK                    // 成功
201 Created               // 创建成功
400 Bad Request           // 请求参数错误
401 Unauthorized          // 未授权
404 Not Found             // 资源不存在
500 Internal Server Error // 服务器错误`,
    tags: ['RESTful', 'API设计']
  },
  {
    id: '33',
    title: '什么是Redis持久化？RDB和AOF的区别？',
    content: '解释Redis持久化的概念、RDB和AOF两种方式的原理、优缺点对比。',
    category: 'advanced',
    difficulty: 'hard',
    answer: 'Redis持久化将内存数据保存到磁盘。RDB是快照式，save/bgsave生成.rdb文件。AOF记录每次写命令，追加到.aof文件，支持重写。RDB快、文件小但可能丢数据。AOF更可靠、文件大。混合模式是推荐方案。',
    codeExample: `# RDB配置
save 900 1          # 900秒内1个修改
save 300 10         # 300秒内10个修改
rdbfilename dump.rdb

# AOF配置
appendonly yes
appendfsync everysec  # 每秒同步
no-appendfsync-on-rewrite yes

# 混合持久化（Redis 4.0+）
aof-use-rdb-preamble yes

# 命令
SAVE       # 同步保存
BGSAVE     # 后台保存
BGREWRITEAOF # AOF重写`,
    tags: ['Redis', '持久化']
  },
  {
    id: '34',
    title: '什么是缓存雪崩、缓存穿透、缓存击穿？如何解决？',
    content: '解释这三个缓存问题的概念、原因及解决方案。',
    category: 'advanced',
    difficulty: 'hard',
    answer: '缓存雪崩：大量key同时过期。解决：过期时间加随机值。缓存穿透：查不存在的数据。解决：布隆过滤器。缓存击穿：热点key过期。解决：互斥锁、永不过期。',
    codeExample: `// 互斥锁解决缓存击穿
public User getUser(Long id) {
    String key = "user:" + id;
    User user = redis.get(key);
    if (user != null) {
        return user;
    }
    String lockKey = "lock:user:" + id;
    if (redis.set(lockKey, "1", "NX", "EX", 10)) {
        try {
            user = db.getUser(id);
            if (user != null) {
                redis.set(key, user, 3600);
            }
            return user;
        } finally {
            redis.del(lockKey);
        }
    } else {
        Thread.sleep(100);
        return getUser(id);
    }
}

// 布隆过滤器
BloomFilter<Long> filter = BloomFilter.create(Funnels.longFunnel(), 1000000, 0.01);
filter.put(userId);
if (filter.mightContain(userId)) {
    // 查询缓存或数据库
}`,
    tags: ['缓存', 'Redis']
  },
  {
    id: '35',
    title: '什么是JVM类加载机制？双亲委派模型？',
    content: '解释JVM类加载过程、类加载器、双亲委派模型的原理和优势。',
    category: 'jvm',
    difficulty: 'hard',
    answer: '类加载过程：加载、验证、准备、解析、初始化。类加载器：Bootstrap、Extension、Application、Custom。双亲委派：先父后子加载。优势：避免重复加载、保证核心类安全。',
    codeExample: `// 类加载器层次
Bootstrap ClassLoader   // 加载JDK核心类
     ↑
Extension ClassLoader  // 加载扩展类
     ↑
Application ClassLoader // 加载应用类
     ↑
Custom ClassLoader

// 打破双亲委派（Tomcat等）
public class MyClassLoader extends ClassLoader {
    @Override
    protected Class<?> loadClass(String name, boolean resolve) throws ClassNotFoundException {
        // 自定义加载逻辑
    }
}

// 查看类加载器
ClassLoader loader = MyClass.class.getClassLoader();
System.out.println(loader);`,
    tags: ['JVM', '类加载']
  },
  {
    id: '36',
    title: '什么是Sentinel？有什么功能？',
    content: '介绍Sentinel的概念、主要功能（限流、熔断、降级）和使用场景。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'Sentinel是阿里的流量控制组件。功能：1)流量控制（QPS限流、并发线程数控制）；2)熔断降级（慢调用、异常比例、异常数）；3)系统保护。比Hystrix更强大。',
    codeExample: `// 定义资源
try (Entry entry = SphU.entry("resourceName")) {
    // 业务逻辑
} catch (BlockException ex) {
    // 被限流/熔断
}

// 注解方式
@SentinelResource(value = "hello", blockHandler = "handleBlock")
public String hello() {
    return "Hello";
}

public String handleBlock(BlockException ex) {
    return "被限流了";
}

// 配置规则
FlowRule rule = new FlowRule();
rule.setResource("resource");
rule.setGrade(RuleConstant.FLOW_GRADE_QPS);
rule.setCount(10); // 每秒10次
FlowRuleManager.loadRules(Collections.singletonList(rule));`,
    tags: ['Sentinel', '限流熔断']
  },
  {
    id: '37',
    title: '什么是设计模式？单例模式有几种写法？',
    content: '介绍设计模式概念，单例模式的多种实现方式（饿汉、懒汉、双重检查、枚举、静态内部类）。',
    category: 'oop',
    difficulty: 'medium',
    answer: '设计模式是问题解决方案的总结。单例模式：1)饿汉式（类加载初始化）；2)懒汉式（需要时创建，线程不安全）；3)双重检查（volatile + synchronized）；4)静态内部类（推荐）；5)枚举（最佳）。',
    codeExample: `// 1. 饿汉式
public class Singleton1 {
    private static final Singleton1 INSTANCE = new Singleton1();
    private Singleton1() {}
    public static Singleton1 getInstance() { return INSTANCE; }
}

// 2. 双重检查
public class Singleton2 {
    private static volatile Singleton2 INSTANCE;
    private Singleton2() {}
    public static Singleton2 getInstance() {
        if (INSTANCE == null) {
            synchronized (Singleton2.class) {
                if (INSTANCE == null) {
                    INSTANCE = new Singleton2();
                }
            }
        }
        return INSTANCE;
    }
}

// 3. 静态内部类（推荐）
public class Singleton3 {
    private Singleton3() {}
    private static class Holder {
        private static final Singleton3 INSTANCE = new Singleton3();
    }
    public static Singleton3 getInstance() {
        return Holder.INSTANCE;
    }
}

// 4. 枚举（最佳）
public enum Singleton4 {
    INSTANCE;
}`,
    tags: ['设计模式', '单例']
  },
  {
    id: '38',
    title: '什么是Nacos？服务注册与配置中心？',
    content: '介绍Nacos的功能、特点，以及如何实现服务注册发现和配置中心。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'Nacos是阿里开源的注册中心和配置中心。功能：1)服务发现（替代Eureka）；2)配置中心（替代Config）；3)DNS服务。支持AP和CP模式。',
    codeExample: `// 服务注册
@SpringBootApplication
@EnableDiscoveryClient
public class App { }

// 配置文件
spring:
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
      config:
        server-addr: localhost:8848
        file-extension: yaml

// 动态配置
@RefreshScope
@RestController
public class ConfigController {
    @Value("\${app.name}")
    private String appName;
}

// Nacos API
NamingService naming = NamingFactory.createNamingService("localhost:8848");
naming.registerInstance("serviceName", "127.0.0.1", 8080);
Instance instance = naming.selectOneHealthyInstance("serviceName");`,
    tags: ['Nacos', '微服务']
  },
  {
    id: '39',
    title: '什么是MQ？RabbitMQ的架构？',
    content: '介绍消息队列的概念、作用，RabbitMQ的核心组件和工作流程。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'MQ是消息中间件，解耦、异步、削峰。RabbitMQ架构：Producer → Exchange（交换机）→ Queue（队列）→ Consumer。交换机类型：direct、topic、fanout、headers。',
    codeExample: `// 简单生产者
ConnectionFactory factory = new ConnectionFactory();
factory.setHost("localhost");
Connection connection = factory.newConnection();
Channel channel = connection.createChannel();
channel.queueDeclare("queue", false, false, false, null);
channel.basicPublish("", "queue", null, "Hello".getBytes());

// 简单消费者
channel.basicConsume("queue", true, (tag, delivery) -> {
    String msg = new String(delivery.getBody());
    System.out.println("收到: " + msg);
}, tag -> {});

// Spring Boot
@RabbitListener(queues = "queue")
public void listen(String msg) {
    System.out.println("收到: " + msg);
}

@RabbitListener(bindings = @QueueBinding(
    value = @Queue("queue"),
    exchange = @Exchange(value = "exchange", type = "topic"),
    key = "routing.key"
))`,
    tags: ['RabbitMQ', '消息队列']
  },
  {
    id: '40',
    title: '什么是GitFlow工作流？常用Git命令？',
    content: '介绍GitFlow分支管理策略，以及常用Git命令。',
    category: 'basics',
    difficulty: 'easy',
    answer: 'GitFlow是分支管理模型：master（生产）、develop（开发）、feature（功能）、release（发布）、hotfix（热修复）。常用命令：clone、pull、push、add、commit、merge、rebase、stash。',
    codeExample: `# GitFlow流程
git checkout -b feature/new-feature develop  # 新建功能分支
# 开发完成
git checkout develop
git merge --no-ff feature/new-feature
# 准备发布
git checkout -b release/1.0 develop
# 修复bug后合并到master和develop
git checkout master
git merge --no-ff release/1.0
git tag -a 1.0
git checkout develop
git merge --no-ff release/1.0
# 热修复
git checkout -b hotfix/bug master
# 修复后合并到master和develop

# 常用命令
git clone repo
git pull origin main
git add .
git commit -m "message"
git push origin main
git branch new-branch
git checkout new-branch
git merge other-branch
git rebase main
git stash`,
    tags: ['Git', '版本控制']
  },
  {
    id: 'dp-1',
    title: '单例模式的实现方式有哪些？',
    content: '列举单例模式的几种常见实现方式，包括饿汉式、懒汉式、双重检查锁、静态内部类、枚举等，并分析各自的优缺点。',
    category: 'design-pattern',
    difficulty: 'easy',
    answer: '单例模式确保类只有一个实例。常见实现：1)饿汉式（线程安全，类加载时初始化）；2)懒汉式（延迟加载，需同步）；3)双重检查锁（延迟加载+高性能）；4)静态内部类（延迟加载+线程安全）；5)枚举（线程安全+防止反射破坏）。推荐使用枚举或静态内部类。',
    codeExample: `// 1. 饿汉式
public class Singleton1 {
    private static final Singleton1 INSTANCE = new Singleton1();
    private Singleton1() {}
    public static Singleton1 getInstance() { return INSTANCE; }
}

// 2. 懒汉式（线程安全）
public class Singleton2 {
    private static Singleton2 instance;
    private Singleton2() {}
    public static synchronized Singleton2 getInstance() {
        if (instance == null) {
            instance = new Singleton2();
        }
        return instance;
    }
}

// 3. 双重检查锁（推荐）
public class Singleton3 {
    private volatile static Singleton3 instance;
    private Singleton3() {}
    public static Singleton3 getInstance() {
        if (instance == null) {
            synchronized (Singleton3.class) {
                if (instance == null) {
                    instance = new Singleton3();
                }
            }
        }
        return instance;
    }
}

// 4. 静态内部类（推荐）
public class Singleton4 {
    private Singleton4() {}
    private static class Holder {
        private static final Singleton4 INSTANCE = new Singleton4();
    }
    public static Singleton4 getInstance() {
        return Holder.INSTANCE;
    }
}

// 5. 枚举（最佳实践）
public enum Singleton5 {
    INSTANCE;
    public void doSomething() { /* ... */ }
}`,
    tags: ['创建型', '单例模式']
  },
  {
    id: 'dp-2',
    title: '工厂模式的三种形式',
    content: '解释简单工厂、工厂方法和抽象工厂三种模式的区别、适用场景和优缺点。',
    category: 'design-pattern',
    difficulty: 'medium',
    answer: '工厂模式用于封装对象的创建过程。1)简单工厂：一个工厂类创建所有对象，违反开闭原则；2)工厂方法：每个产品有对应的工厂，符合开闭原则；3)抽象工厂：创建一组相关对象，解决产品族问题。Spring的BeanFactory就是抽象工厂模式的应用。',
    codeExample: `// 1. 简单工厂
public class CarFactory {
    public static Car createCar(String type) {
        switch (type) {
            case "Benz": return new Benz();
            case "BMW": return new BMW();
            default: return null;
        }
    }
}

// 2. 工厂方法
public interface CarFactory {
    Car createCar();
}
public class BenzFactory implements CarFactory {
    public Car createCar() { return new Benz(); }
}
public class BMWFactory implements CarFactory {
    public Car createCar() { return new BMW(); }
}

// 3. 抽象工厂 - 创建产品族
public interface AbstractFactory {
    Car createCar();
    Engine createEngine();
}
public class LuxuryFactory implements AbstractFactory {
    public Car createCar() { return new LuxuryCar(); }
    public Engine createEngine() { return new V8Engine(); }
}
public class EconomyFactory implements AbstractFactory {
    public Car createCar() { return new EconomyCar(); }
    public Engine createEngine() { return new I4Engine(); }
}`,
    tags: ['创建型', '工厂模式']
  },
  {
    id: 'dp-3',
    title: '建造者模式的应用场景',
    content: '解释建造者模式的设计思想，分析其适用场景，并举例说明在Java中的应用。',
    category: 'design-pattern',
    difficulty: 'medium',
    answer: '建造者模式将复杂对象的构建与表示分离，使同样的构建过程可以创建不同的表示。适用场景：1)对象有多个可选属性；2)对象创建过程复杂；3)需要生成不同表示的对象。Java中的StringBuilder、Lombok的@Builder注解都是建造者模式的应用。',
    codeExample: `// 建造者模式实现
public class User {
    private final String name;
    private final int age;
    private final String email;
    private final String phone;
    
    private User(Builder builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.email = builder.email;
        this.phone = builder.phone;
    }
    
    public static class Builder {
        private String name;
        private int age;
        private String email;
        private String phone;
        
        public Builder name(String name) { this.name = name; return this; }
        public Builder age(int age) { this.age = age; return this; }
        public Builder email(String email) { this.email = email; return this; }
        public Builder phone(String phone) { this.phone = phone; return this; }
        
        public User build() {
            if (name == null) throw new IllegalStateException("name is required");
            return new User(this);
        }
    }
}

// 使用
User user = new User.Builder()
    .name("张三")
    .age(28)
    .email("zhangsan@example.com")
    .phone("13800138000")
    .build();

// Lombok简化
@Builder
public class User {
    private String name;
    private int age;
    private String email;
}

// Java StringBuilder也是建造者模式
StringBuilder sb = new StringBuilder()
    .append("Hello")
    .append(" ")
    .append("World")
    .reverse();`,
    tags: ['创建型', '建造者模式']
  },
  {
    id: 'dp-4',
    title: '原型模式的深拷贝和浅拷贝',
    content: '解释原型模式的概念，区分浅拷贝和深拷贝，并说明如何实现深拷贝。',
    category: 'design-pattern',
    difficulty: 'medium',
    answer: '原型模式通过复制已有对象创建新对象，避免重复初始化。浅拷贝只复制基本类型和引用，不复制引用指向的对象。深拷贝会递归复制所有对象。实现方式：1)实现Cloneable接口并重写clone()方法；2)使用序列化/反序列化；3)手动递归复制。',
    codeExample: `// 浅拷贝
public class Person implements Cloneable {
    private String name;
    private Address address; // 引用类型
    
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone(); // 浅拷贝，address引用相同
    }
}

// 深拷贝 - 方式1：重写clone()
public class Person implements Cloneable {
    private String name;
    private Address address;
    
    @Override
    protected Object clone() throws CloneNotSupportedException {
        Person clone = (Person) super.clone();
        clone.address = (Address) address.clone(); // 递归拷贝
        return clone;
    }
}

// 深拷贝 - 方式2：序列化
public class Person implements Serializable {
    private String name;
    private Address address;
    
    public Person deepCopy() {
        try {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ObjectOutputStream oos = new ObjectOutputStream(baos);
            oos.writeObject(this);
            
            ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
            ObjectInputStream ois = new ObjectInputStream(bais);
            return (Person) ois.readObject();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}`,
    tags: ['创建型', '原型模式']
  },
  {
    id: 'dp-5',
    title: '适配器模式的两种形式',
    content: '解释类适配器和对象适配器的区别，分析各自的优缺点和适用场景。',
    category: 'design-pattern',
    difficulty: 'easy',
    answer: '适配器模式将一个类的接口转换成客户希望的另一个接口。类适配器使用继承，对象适配器使用组合。类适配器：优点是可以重写适配者的方法，缺点是Java只能单继承限制了灵活性。对象适配器：优点是更灵活、符合组合优于继承原则，缺点是不能重写适配者的方法。推荐使用对象适配器。',
    codeExample: `// 目标接口
public interface Target {
    void request();
}

// 适配者
public class Adaptee {
    public void specificRequest() {
        System.out.println("Adaptee specific request");
    }
}

// 1. 类适配器 - 使用继承
public class ClassAdapter extends Adaptee implements Target {
    @Override
    public void request() {
        specificRequest();
    }
}

// 2. 对象适配器 - 使用组合（推荐）
public class ObjectAdapter implements Target {
    private Adaptee adaptee;
    
    public ObjectAdapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }
    
    @Override
    public void request() {
        adaptee.specificRequest();
    }
}

// 使用
Target target1 = new ClassAdapter();
target1.request();

Target target2 = new ObjectAdapter(new Adaptee());
target2.request();

// Java中的实际应用
// Arrays.asList() 返回的List不支持add/remove
// Collections.synchronizedList() 也是适配器模式`,
    tags: ['结构型', '适配器模式']
  },
  {
    id: 'dp-6',
    title: '装饰器模式的应用',
    content: '解释装饰器模式的设计思想，举例说明其在Java中的实际应用（如IO流）。',
    category: 'design-pattern',
    difficulty: 'medium',
    answer: '装饰器模式动态地给对象添加额外功能，比继承更灵活。特点：1)装饰器和被装饰者实现相同接口；2)装饰器持有被装饰者引用；3)可以嵌套多个装饰器。Java IO流是典型应用：InputStream作为抽象组件，FileInputStream是具体组件，BufferedInputStream、DataInputStream是装饰器。',
    codeExample: `// 抽象组件
public interface Coffee {
    double cost();
    String description();
}

// 具体组件
public class SimpleCoffee implements Coffee {
    @Override
    public double cost() { return 5.0; }
    @Override
    public String description() { return "纯咖啡"; }
}

// 抽象装饰器
public abstract class CoffeeDecorator implements Coffee {
    protected Coffee decoratedCoffee;
    public CoffeeDecorator(Coffee coffee) {
        this.decoratedCoffee = coffee;
    }
}

// 具体装饰器
public class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee coffee) { super(coffee); }
    @Override
    public double cost() { return decoratedCoffee.cost() + 2.0; }
    @Override
    public String description() { return decoratedCoffee.description() + " + 牛奶"; }
}

public class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee coffee) { super(coffee); }
    @Override
    public double cost() { return decoratedCoffee.cost() + 1.0; }
    @Override
    public String description() { return decoratedCoffee.description() + " + 糖"; }
}

// 使用 - 嵌套装饰
Coffee coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
System.out.println(coffee.description()); // 纯咖啡 + 牛奶 + 糖
System.out.println(coffee.cost()); // 8.0

// Java IO中的装饰器模式
InputStream is = new FileInputStream("file.txt");
is = new BufferedInputStream(is);      // 添加缓冲
is = new DataInputStream(is);          // 添加数据读取功能`,
    tags: ['结构型', '装饰器模式']
  },
  {
    id: 'dp-7',
    title: '代理模式的三种形式',
    content: '解释静态代理、动态代理（JDK）和CGLIB代理的区别和适用场景。',
    category: 'design-pattern',
    difficulty: 'hard',
    answer: '代理模式为其他对象提供代理以控制访问。1)静态代理：手动编写代理类，不灵活；2)JDK动态代理：基于接口，运行时生成代理类，性能较好；3)CGLIB代理：基于继承，无需接口，性能略低。Spring AOP默认使用JDK动态代理，没有接口时使用CGLIB。',
    codeExample: `// 1. 静态代理
public interface UserService {
    void add();
}
public class UserServiceImpl implements UserService {
    public void add() { System.out.println("添加用户"); }
}
public class UserServiceProxy implements UserService {
    private UserService target;
    public UserServiceProxy(UserService target) { this.target = target; }
    public void add() {
        System.out.println("开始事务");
        target.add();
        System.out.println("提交事务");
    }
}

// 2. JDK动态代理
public class JDKProxy implements InvocationHandler {
    private Object target;
    public JDKProxy(Object target) { this.target = target; }
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println("前置增强");
        Object result = method.invoke(target, args);
        System.out.println("后置增强");
        return result;
    }
}
// 使用
UserService proxy = (UserService) Proxy.newProxyInstance(
    UserService.class.getClassLoader(),
    new Class[]{UserService.class},
    new JDKProxy(new UserServiceImpl())
);

// 3. CGLIB代理
public class CGLIBProxy implements MethodInterceptor {
    public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throws Throwable {
        System.out.println("前置增强");
        Object result = proxy.invokeSuper(obj, args);
        System.out.println("后置增强");
        return result;
    }
}
// 使用
Enhancer enhancer = new Enhancer();
enhancer.setSuperclass(UserServiceImpl.class);
enhancer.setCallback(new CGLIBProxy());
UserService proxy = (UserService) enhancer.create();`,
    tags: ['结构型', '代理模式', 'AOP']
  },
  {
    id: 'dp-8',
    title: '观察者模式的实现',
    content: '解释观察者模式的设计思想，说明其在Java中的应用（如JavaFX、Spring事件机制）。',
    category: 'design-pattern',
    difficulty: 'medium',
    answer: '观察者模式定义对象间一对多依赖，当主题状态改变时所有观察者自动收到通知。Java内置支持：Observable类和Observer接口（已过时）。现代应用：JavaFX的Property/Listener机制、Spring的ApplicationEventPublisher、Guava的EventBus。',
    codeExample: `// 自定义观察者模式
public interface Subject {
    void registerObserver(Observer observer);
    void removeObserver(Observer observer);
    void notifyObservers();
}

public interface Observer {
    void update(String message);
}

public class ConcreteSubject implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private String message;
    
    @Override
    public void registerObserver(Observer observer) {
        observers.add(observer);
    }
    
    @Override
    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }
    
    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(message);
        }
    }
    
    public void setMessage(String message) {
        this.message = message;
        notifyObservers();
    }
}

public class ConcreteObserver implements Observer {
    private String name;
    public ConcreteObserver(String name) { this.name = name; }
    @Override
    public void update(String message) {
        System.out.println(name + "收到消息: " + message);
    }
}

// 使用
Subject subject = new ConcreteSubject();
subject.registerObserver(new ConcreteObserver("张三"));
subject.registerObserver(new ConcreteObserver("李四"));
subject.setMessage("Hello World!");

// Spring事件机制
@Component
public class MyEventListener implements ApplicationListener<MyEvent> {
    @Override
    public void onApplicationEvent(MyEvent event) {
        System.out.println("收到事件: " + event.getMessage());
    }
}
// 发布事件
applicationEventPublisher.publishEvent(new MyEvent("hello"));`,
    tags: ['行为型', '观察者模式']
  },
  {
    id: 'dp-9',
    title: '策略模式的应用场景',
    content: '解释策略模式的设计思想，说明如何用策略模式消除大量的if-else语句。',
    category: 'design-pattern',
    difficulty: 'easy',
    answer: '策略模式定义一系列算法，封装每个算法，并使它们可以互换。策略模式让算法独立于使用它的客户。适用场景：1)有多种相似算法；2)算法需要动态切换；3)消除大量if-else分支。Java中的Comparator接口就是策略模式的应用。',
    codeExample: `// 策略接口
public interface PaymentStrategy {
    void pay(double amount);
}

// 具体策略
public class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;
    public CreditCardPayment(String cardNumber) { this.cardNumber = cardNumber; }
    @Override
    public void pay(double amount) {
        System.out.println("信用卡支付: " + amount + "元");
    }
}

public class WeChatPayment implements PaymentStrategy {
    private String openId;
    public WeChatPayment(String openId) { this.openId = openId; }
    @Override
    public void pay(double amount) {
        System.out.println("微信支付: " + amount + "元");
    }
}

public class AlipayPayment implements PaymentStrategy {
    private String account;
    public AlipayPayment(String account) { this.account = account; }
    @Override
    public void pay(double amount) {
        System.out.println("支付宝支付: " + amount + "元");
    }
}

// 上下文
public class ShoppingCart {
    private PaymentStrategy paymentStrategy;
    
    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.paymentStrategy = strategy;
    }
    
    public void checkout(double amount) {
        paymentStrategy.pay(amount);
    }
}

// 使用
ShoppingCart cart = new ShoppingCart();
cart.setPaymentStrategy(new WeChatPayment("openid123"));
cart.checkout(100.0);

// 消除if-else对比
// 传统方式（不推荐）
if (type.equals("wechat")) { /* ... */ }
else if (type.equals("alipay")) { /* ... */ }
else if (type.equals("credit")) { /* ... */ }

// 策略模式（推荐）
Map<String, PaymentStrategy> strategies = new HashMap<>();
strategies.put("wechat", new WeChatPayment(openId));
strategies.put("alipay", new AlipayPayment(account));
strategies.get(type).pay(amount);`,
    tags: ['行为型', '策略模式']
  },
  {
    id: 'dp-10',
    title: '模板方法模式的实现',
    content: '解释模板方法模式的设计思想，说明其在Spring框架中的应用。',
    category: 'design-pattern',
    difficulty: 'medium',
    answer: '模板方法模式定义算法骨架，将某些步骤延迟到子类实现。父类控制算法流程，子类实现具体步骤。特点：1)父类定义算法框架；2)子类实现抽象方法；3)钩子方法可选覆盖。Spring的AbstractApplicationContext的refresh()方法就是模板方法模式的典型应用。',
    codeExample: `// 抽象类定义模板方法
public abstract class AbstractGame {
    // 模板方法 - 定义算法骨架
    public final void play() {
        initialize();
        startPlay();
        endPlay();
    }
    
    protected abstract void initialize();
    protected abstract void startPlay();
    protected abstract void endPlay();
    
    // 钩子方法 - 可选覆盖
    protected void pause() {
        // 默认实现为空
    }
}

// 具体类实现步骤
public class Cricket extends AbstractGame {
    @Override
    protected void initialize() {
        System.out.println("板球游戏初始化");
    }
    
    @Override
    protected void startPlay() {
        System.out.println("板球游戏开始");
    }
    
    @Override
    protected void endPlay() {
        System.out.println("板球游戏结束");
    }
}

public class Football extends AbstractGame {
    @Override
    protected void initialize() {
        System.out.println("足球游戏初始化");
    }
    
    @Override
    protected void startPlay() {
        System.out.println("足球游戏开始");
    }
    
    @Override
    protected void endPlay() {
        System.out.println("足球游戏结束");
    }
    
    @Override
    protected void pause() {
        System.out.println("足球暂停");
    }
}

// 使用
AbstractGame game = new Cricket();
game.play();

// Spring中的应用
// AbstractApplicationContext.refresh()方法定义了容器初始化的模板
// 子类实现抽象方法 customizeContext()、refreshBeanFactory()等`,
    tags: ['行为型', '模板方法模式']
  },
  {
    id: 'dp-11',
    title: '责任链模式的应用',
    content: '解释责任链模式的设计思想，说明其在Spring Security中的应用。',
    category: 'design-pattern',
    difficulty: 'medium',
    answer: '责任链模式将请求沿着链传递，直到有一个处理者处理它。每个处理者可以选择处理请求或传递给下一个。适用场景：1)多个对象可以处理同一请求；2)请求处理者不明确；3)动态组合处理者。Spring Security的FilterChain、Servlet的Filter链都是责任链模式的应用。',
    codeExample: `// 抽象处理者
public abstract class Handler {
    protected Handler next;
    
    public void setNext(Handler next) {
        this.next = next;
    }
    
    public abstract void handleRequest(String request);
}

// 具体处理者
public class AuthenticationHandler extends Handler {
    @Override
    public void handleRequest(String request) {
        if (request.contains("auth")) {
            System.out.println("AuthenticationHandler处理请求");
        } else if (next != null) {
            next.handleRequest(request);
        }
    }
}

public class AuthorizationHandler extends Handler {
    @Override
    public void handleRequest(String request) {
        if (request.contains("authz")) {
            System.out.println("AuthorizationHandler处理请求");
        } else if (next != null) {
            next.handleRequest(request);
        }
    }
}

public class LoggingHandler extends Handler {
    @Override
    public void handleRequest(String request) {
        System.out.println("LoggingHandler记录日志");
        if (next != null) {
            next.handleRequest(request);
        }
    }
}

// 使用 - 构建责任链
Handler logger = new LoggingHandler();
Handler auth = new AuthenticationHandler();
Handler authz = new AuthorizationHandler();

logger.setNext(auth);
auth.setNext(authz);

logger.handleRequest("auth request");

// Spring Security中的责任链
// FilterChainProxy包含多个Filter，按顺序执行
// UsernamePasswordAuthenticationFilter -> BasicAuthenticationFilter -> ...`,
    tags: ['行为型', '责任链模式']
  },
  {
    id: 'dp-12',
    title: '设计模式在Spring框架中的应用',
    content: '列举Spring框架中使用的主要设计模式，并说明它们的具体应用场景。',
    category: 'design-pattern',
    difficulty: 'hard',
    answer: 'Spring框架广泛应用设计模式：1)工厂模式（BeanFactory、ApplicationContext）；2)单例模式（默认Bean作用域）；3)代理模式（AOP）；4)策略模式（Resource、TransactionDefinition）；5)模板方法模式（JdbcTemplate、AbstractApplicationContext）；6)观察者模式（ApplicationEvent）；7)责任链模式（FilterChainProxy）；8)适配器模式（HandlerAdapter）；9)装饰器模式（BeanWrapper）。',
    codeExample: `// 1. 工厂模式
ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
UserService service = context.getBean(UserService.class);

// 2. 单例模式
// @Scope("singleton") - 默认
@Service
public class UserService { /* ... */ }

// 3. 代理模式 - AOP
@Aspect
@Component
public class LogAspect {
    @Around("execution(* com.example.service.*.*(..))")
    public Object log(ProceedingJoinPoint pjp) throws Throwable {
        System.out.println("方法开始");
        Object result = pjp.proceed();
        System.out.println("方法结束");
        return result;
    }
}

// 4. 策略模式 - 事务传播行为
@Transactional(propagation = Propagation.REQUIRED)
public void method() { /* ... */ }

// 5. 模板方法模式 - JdbcTemplate
jdbcTemplate.query("SELECT * FROM users", (rs, rowNum) -> 
    new User(rs.getLong("id"), rs.getString("name"))
);

// 6. 观察者模式 - 事件
applicationEventPublisher.publishEvent(new MyEvent(this, "data"));

// 7. 责任链模式 - Filter链
// SecurityFilterChain

// 8. 适配器模式 - MVC HandlerAdapter
// RequestMappingHandlerAdapter`,
    tags: ['设计模式', 'Spring']
  },
  {
    id: 'ms-1',
    title: '什么是微服务架构？',
    content: '解释微服务架构的概念、特点，以及与单体架构的区别。',
    category: 'microservice',
    difficulty: 'easy',
    answer: '微服务架构是将应用拆分为多个小型、独立部署的服务。特点：1)服务独立部署、独立扩展；2)服务间通过API通信；3)每个服务专注单一业务；4)可使用不同技术栈。与单体架构对比：单体架构部署简单但扩展困难，微服务灵活但运维复杂。',
    codeExample: `// 单体架构示例 - 所有功能在一个应用中
@SpringBootApplication
public class MonolithApplication {
    // 用户模块
    @RestController
    class UserController { /* ... */ }
    
    // 订单模块
    @RestController
    class OrderController { /* ... */ }
    
    // 商品模块
    @RestController
    class ProductController { /* ... */ }
}

// 微服务架构示例 - 拆分为独立服务
// 用户服务（独立部署）
@SpringBootApplication
public class UserServiceApplication {
    @RestController
    class UserController {
        @GetMapping("/users/{id}")
        public User getUser(@PathVariable Long id) {
            return userService.findById(id);
        }
    }
}

// 订单服务（独立部署）
@SpringBootApplication
public class OrderServiceApplication {
    @RestController
    class OrderController {
        @PostMapping("/orders")
        public Order createOrder(@RequestBody OrderDTO dto) {
            // 通过Feign调用用户服务
            User user = userClient.getUser(dto.getUserId());
            return orderService.create(dto, user);
        }
    }
}

// 商品服务（独立部署）
@SpringBootApplication
public class ProductServiceApplication { /* ... */ }`,
    tags: ['微服务', '架构设计']
  },
  {
    id: 'ms-2',
    title: 'Spring Cloud核心组件有哪些？',
    content: '列举Spring Cloud的核心组件及其作用，包括服务注册发现、配置中心、负载均衡、服务调用、网关等。',
    category: 'microservice',
    difficulty: 'medium',
    answer: 'Spring Cloud核心组件：1)Eureka/Nacos（服务注册发现）；2)Config/Nacos Config（配置中心）；3)Ribbon/LoadBalancer（负载均衡）；4)Feign/OpenFeign（声明式服务调用）；5)Gateway/Zuul（API网关）；6)Hystrix/Sentinel（服务熔断降级）；7)Sleuth+Zipkin（链路追踪）。',
    codeExample: `// 1. Eureka服务注册中心
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}

// application.yml
server:
  port: 8761
eureka:
  client:
    register-with-eureka: false
    fetch-registry: false

// 2. 服务注册到Eureka
@SpringBootApplication
@EnableDiscoveryClient
public class UserServiceApplication { /* ... */ }

// application.yml
spring:
  application:
    name: user-service
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/

// 3. Feign声明式调用
@FeignClient(name = "user-service")
public interface UserClient {
    @GetMapping("/users/{id}")
    User getUser(@PathVariable("id") Long id);
}

@Service
public class OrderService {
    @Autowired
    private UserClient userClient;
    
    public Order createOrder(Long userId) {
        User user = userClient.getUser(userId); // 远程调用
        return new Order(user);
    }
}

// 4. Gateway网关配置
@SpringBootApplication
public class GatewayApplication { /* ... */ }

// application.yml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/api/users/**
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**`,
    tags: ['Spring Cloud', '服务治理']
  },
  {
    id: 'ms-3',
    title: '服务注册与发现的原理',
    content: '解释服务注册发现的工作原理，包括注册中心、服务提供者、服务消费者的交互流程。',
    category: 'microservice',
    difficulty: 'medium',
    answer: '服务注册发现流程：1)服务启动时向注册中心注册（发送服务名、IP、端口）；2)注册中心维护服务列表并定时心跳检测；3)服务消费者从注册中心获取服务列表；4)消费者通过负载均衡选择服务实例调用；5)服务下线时注册中心剔除。心跳机制保证服务列表实时更新。',
    codeExample: `// Eureka服务注册流程
// 1. 服务提供者注册
@RestController
@SpringBootApplication
@EnableDiscoveryClient
public class ProviderApplication {
    @Value("\${server.port}")
    private int port;
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello from port: " + port;
    }
    
    // 启动时自动注册到Eureka
    // spring.application.name=provider-service
    // eureka.client.service-url.defaultZone=http://localhost:8761/eureka
}

// 2. 服务消费者发现并调用
@SpringBootApplication
@EnableDiscoveryClient
public class ConsumerApplication {
    @Autowired
    private DiscoveryClient discoveryClient;
    
    @Autowired
    private LoadBalancer loadBalancer;
    
    @GetMapping("/invoke")
    public String invoke() {
        // 从注册中心获取服务实例列表
        List<ServiceInstance> instances = discoveryClient.getInstances("provider-service");
        
        // 负载均衡选择一个实例
        ServiceInstance instance = loadBalancer.choose(instances);
        
        // 调用服务
        String url = instance.getUri() + "/hello";
        return restTemplate.getForObject(url, String.class);
    }
}

// 3. Nacos注册中心配置（推荐）
spring:
  application:
    name: user-service
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
        namespace: public
        group: DEFAULT_GROUP`,
    tags: ['服务注册', 'Eureka', 'Nacos']
  },
  {
    id: 'ms-4',
    title: '负载均衡策略有哪些？',
    content: '解释客户端负载均衡和服务端负载均衡的区别，列举常见的负载均衡策略。',
    category: 'microservice',
    difficulty: 'medium',
    answer: '负载均衡分为客户端（Ribbon/LoadBalancer）和服务端（Nginx）。常见策略：1)轮询（RoundRobin）：依次调用；2)随机（Random）：随机选择；3)加权轮询：按权重分配；4)最少连接：选择连接数最少的服务；5)IP哈希：相同IP请求同一服务。Spring Cloud LoadBalancer默认轮询。',
    codeExample: `// Ribbon负载均衡配置（已废弃，使用Spring Cloud LoadBalancer）
// 1. 自定义负载均衡策略
@Configuration
public class LoadBalancerConfig {
    @Bean
    ReactorLoadBalancer<ServiceInstance> randomLoadBalancer(Environment environment, LoadBalancerClientFactory factory) {
        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME);
        return new RandomLoadBalancer(factory.getLazyProvider(name, ServiceInstanceListSupplier.class), name);
    }
}

// 2. 使用@LoadBalancerClient指定策略
@LoadBalancerClient(name = "user-service", configuration = LoadBalancerConfig.class)
public interface UserClient {
    @GetMapping("/users/{id}")
    User getUser(@PathVariable("id") Long id);
}

// 3. Nginx服务端负载均衡配置
upstream backend {
    # 轮询（默认）
    server 192.168.1.1:8080;
    server 192.168.1.2:8080;
    
    # 加权轮询
    server 192.168.1.3:8080 weight=3;
    server 192.168.1.4:8080 weight=1;
    
    # IP哈希
    ip_hash;
    server 192.168.1.5:8080;
    server 192.168.1.6:8080;
}

server {
    location /api/ {
        proxy_pass http://backend;
    }
}

// 4. 自定义负载均衡算法
public class WeightedLoadBalancer implements ReactorServiceInstanceLoadBalancer {
    private final List<ServiceInstance> instances;
    private final Map<String, Integer> weights;
    
    public Mono<Response<ServiceInstance>> choose(Request request) {
        // 根据权重选择实例
        int totalWeight = weights.values().stream().mapToInt(Integer::intValue).sum();
        int random = ThreadLocalRandom.current().nextInt(totalWeight);
        
        int current = 0;
        for (ServiceInstance instance : instances) {
            current += weights.get(instance.getInstanceId());
            if (random < current) {
                return Mono.just(new DefaultResponse(instance));
            }
        }
        return Mono.just(new DefaultResponse(instances.get(0)));
    }
}`,
    tags: ['负载均衡', 'Ribbon', 'Nginx']
  },
  {
    id: 'ms-5',
    title: '服务熔断与降级',
    content: '解释服务熔断、降级的概念，说明Sentinel/Hystrix的实现原理和使用方式。',
    category: 'microservice',
    difficulty: 'hard',
    answer: '熔断：当服务异常率达到阈值时，自动切断调用，防止雪崩效应。降级：服务不可用时返回兜底响应。Sentinel原理：1)定义资源；2)配置规则（QPS、线程数、响应时间）；3)触发规则时执行降级逻辑。状态转换：关闭→开启→半开→关闭。推荐使用Sentinel（阿里巴巴开源）。',
    codeExample: `// Sentinel熔断降级示例
// 1. 引入依赖
// <dependency>
//     <groupId>com.alibaba.cloud</groupId>
//     <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
// </dependency>

// 2. 定义资源并配置降级逻辑
@Service
public class UserService {
    @SentinelResource(
        value = "getUser",
        fallback = "getUserFallback",      // 降级方法
        blockHandler = "getUserBlockHandler" // 熔断方法
    )
    public User getUser(Long id) {
        // 可能失败的远程调用
        return userClient.getUser(id);
    }
    
    // 降级逻辑 - 业务异常时执行
    public User getUserFallback(Long id, Throwable ex) {
        log.error("获取用户失败，执行降级", ex);
        return new User(id, "默认用户", "default@example.com");
    }
    
    // 熔断逻辑 - 触发规则时执行
    public User getUserBlockHandler(Long id, BlockException ex) {
        log.warn("触发熔断规则", ex);
        return new User(id, "熔断用户", "blocked@example.com");
    }
}

// 3. 配置熔断规则
// application.yml
spring:
  cloud:
    sentinel:
      transport:
        dashboard: localhost:8080  # Sentinel控制台

// 4. 代码配置规则
@Configuration
public class SentinelConfig {
    @PostConstruct
    public void initRules() {
        // 熔断规则：异常比例超过50%时熔断
        DegradeRule degradeRule = new DegradeRule("getUser");
        degradeRule.setGrade(CircuitBreakerStrategy.ERROR_RATIO.getType());
        degradeRule.setCount(0.5);  // 异常比例阈值
        degradeRule.setTimeWindow(10);  // 熔断持续时间10秒
        degradeRule.setMinRequestAmount(5);  // 最小请求数
        
        DegradeRuleManager.loadDegradeRules(Collections.singletonList(degradeRule));
        
        // 流控规则：QPS限制
        FlowRule flowRule = new FlowRule("getUser");
        flowRule.setCount(10);  // 每秒最多10次
        flowRule.setGrade(RuleConstant.FLOW_GRADE_QPS);
        
        FlowRuleManager.loadRules(Collections.singletonList(flowRule));
    }
}

// 5. Hystrix示例（已停止维护）
@HystrixCommand(
    fallbackMethod = "getUserFallback",
    commandProperties = {
        @HystrixProperty(name = "circuitBreaker.requestVolumeThreshold", value = "10"),
        @HystrixProperty(name = "circuitBreaker.errorThresholdPercentage", value = "50"),
        @HystrixProperty(name = "circuitBreaker.sleepWindowInMilliseconds", value = "5000")
    }
)
public User getUser(Long id) {
    return userClient.getUser(id);
}`,
    tags: ['熔断降级', 'Sentinel', 'Hystrix']
  },
  {
    id: 'ms-6',
    title: '分布式事务解决方案',
    content: '解释分布式事务的问题，列举常见的解决方案（2PC、3PC、TCC、Saga、本地消息表、Seata）。',
    category: 'microservice',
    difficulty: 'hard',
    answer: '分布式事务保证跨服务数据一致性。解决方案：1)2PC（两阶段提交）：Prepare→Commit，强一致但阻塞；2)TCC（Try-Confirm-Cancel）：业务层面实现，最终一致；3)Saga：长事务拆分+补偿机制；4)本地消息表：异步确保；5)Seata：AT模式（自动补偿）、TCC模式、Saga模式。推荐使用Seata AT模式。',
    codeExample: `// Seata分布式事务示例
// 1. 引入依赖
// <dependency>
//     <groupId>io.seata</groupId>
//     <artifactId>seata-spring-boot-starter</artifactId>
//     <version>1.5.2</version>
// </dependency>

// 2. 配置Seata
// application.yml
seata:
  enabled: true
  tx-service-group: my_tx_group
  service:
    vgroup-mapping:
      my_tx_group: default
  registry:
    type: nacos
    nacos:
      server-addr: localhost:8848

// 3. AT模式 - 自动分布式事务
@Service
public class OrderService {
    @Autowired
    private OrderMapper orderMapper;
    
    @Autowired
    private StorageClient storageClient;
    
    @Autowired
    private AccountClient accountClient;
    
    @GlobalTransactional(name = "create-order", rollbackFor = Exception.class)
    public void createOrder(OrderDTO orderDTO) {
        // 创建订单（本地事务）
        orderMapper.insert(orderDTO);
        
        // 扣减库存（远程调用，Seata自动管理）
        storageClient.decrease(orderDTO.getProductId(), orderDTO.getCount());
        
        // 扣减余额（远程调用）
        accountClient.decrease(orderDTO.getUserId(), orderDTO.getAmount());
        
        // Seata自动生成undo_log，失败时自动回滚
    }
}

// 4. TCC模式 - 手动实现Try/Confirm/Cancel
@LocalTCC
public interface StorageTccService {
    @TwoPhaseBusinessAction(name = "prepareDecrease", commitMethod = "commit", rollbackMethod = "rollback")
    boolean prepareDecrease(@BusinessActionContextParameter(paramName = "productId") Long productId,
                            @BusinessActionContextParameter(paramName = "count") Integer count);
    
    boolean commit(BusinessActionContext context);
    
    boolean rollback(BusinessActionContext context);
}

// TCC实现
@Service
public class StorageTccServiceImpl implements StorageTccService {
    @Autowired
    private StorageMapper storageMapper;
    
    @Override
    public boolean prepareDecrease(Long productId, Integer count) {
        // Try阶段：预留库存（冻结）
        storageMapper.freezeStock(productId, count);
        return true;
    }
    
    @Override
    public boolean commit(BusinessActionContext context) {
        // Confirm阶段：真正扣减库存
        Long productId = context.getActionContext("productId");
        Integer count = context.getActionContext("count");
        storageMapper.decreaseFrozenStock(productId, count);
        return true;
    }
    
    @Override
    public boolean rollback(BusinessActionContext context) {
        // Cancel阶段：释放预留库存
        Long productId = context.getActionContext("productId");
        Integer count = context.getActionContext("count");
        storageMapper.releaseFrozenStock(productId, count);
        return true;
    }
}

// 5. 本地消息表方案
@Transactional
public void createOrder(OrderDTO orderDTO) {
    // 创建订单
    orderMapper.insert(orderDTO);
    
    // 写入本地消息表（同一事务）
    Message message = new Message();
    message.setBizId(orderDTO.getId());
    message.setTopic("order-created");
    message.setContent(JSON.toJSONString(orderDTO));
    message.setStatus("PENDING");
    messageMapper.insert(message);
}

// 定时任务扫描消息表并发送
@Scheduled(fixedDelay = 5000)
public void sendPendingMessages() {
    List<Message> messages = messageMapper.selectByStatus("PENDING");
    for (Message message : messages) {
        try {
            mqProducer.send(message.getTopic(), message.getContent());
            messageMapper.updateStatus(message.getId(), "SENT");
        } catch (Exception e) {
            // 发送失败，下次重试
        }
    }
}`,
    tags: ['分布式事务', 'Seata', 'TCC']
  },
  {
    id: 'ms-7',
    title: 'API网关的作用和实现',
    content: '解释API网关的核心功能，说明Spring Cloud Gateway的工作原理和配置方式。',
    category: 'microservice',
    difficulty: 'medium',
    answer: 'API网关是微服务入口，核心功能：1)路由转发；2)负载均衡；3)认证鉴权；4)限流熔断；5)日志监控；6)协议转换。Spring Cloud Gateway基于WebFlux，三大核心概念：Route（路由）、Predicate（断言）、Filter（过滤器）。支持动态路由、自定义过滤器。',
    codeExample: `// Spring Cloud Gateway配置
// 1. 基础路由配置
@SpringBootApplication
public class GatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }
}

// application.yml
spring:
  cloud:
    gateway:
      routes:
        # 用户服务路由
        - id: user-service
          uri: lb://user-service  # 负载均衡
          predicates:
            - Path=/api/users/**  # 路径匹配
            - Method=GET,POST     # 方法限制
          filters:
            - StripPrefix=1       # 去掉/api前缀
            - AddRequestHeader=X-Request-Id, \${value}
        
        # 订单服务路由
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**
            - After=2024-01-01T00:00:00+08:00  # 时间限制
          filters:
            - name: RequestRateLimiter  # 限流
              args:
                redis-rate-limiter.replenishRate: 10
                redis-rate-limiter.burstCapacity: 20
                key-resolver: "\${user.id}"

// 2. 自定义过滤器
@Component
public class AuthFilter implements GlobalFilter, Ordered {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();
        
        // 获取Token
        String token = request.getHeaders().getFirst("Authorization");
        if (token == null || !validateToken(token)) {
            ServerHttpResponse response = exchange.getResponse();
            response.setStatusCode(HttpStatus.UNAUTHORIZED);
            return response.writeWith(Mono.just(response.bufferFactory().wrap("未授权".getBytes())));
        }
        
        // 验证通过，继续执行
        return chain.filter(exchange);
    }
    
    @Override
    public int getOrder() {
        return -100;  // 优先级最高
    }
    
    private boolean validateToken(String token) {
        // JWT验证逻辑
        return JwtUtil.verify(token);
    }
}

// 3. 动态路由配置
@RestController
@RequestMapping("/routes")
public class RouteController {
    @Autowired
    private RouteDefinitionLocator routeDefinitionLocator;
    
    @Autowired
    private RouteDefinitionWriter routeDefinitionWriter;
    
    @PostMapping
    public Mono<Void> addRoute(@RequestBody RouteDefinition definition) {
        return routeDefinitionWriter.save(Mono.just(definition));
    }
    
    @DeleteMapping("/{id}")
    public Mono<Void> deleteRoute(@PathVariable String id) {
        return routeDefinitionWriter.delete(Mono.just(id));
    }
}

// 4. 跨域配置
@Configuration
public class CorsConfig {
    @Bean
    public CorsWebFilter corsWebFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("*");
        config.addAllowedMethod("*");
        config.addAllowedHeader("*");
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        
        return new CorsWebFilter(source);
    }
}`,
    tags: ['API网关', 'Gateway', '路由']
  },
  {
    id: 'ms-8',
    title: '分布式锁的实现方式',
    content: '解释分布式锁的作用，列举常见的实现方式（Redis、Zookeeper、数据库），并分析各自的优缺点。',
    category: 'microservice',
    difficulty: 'hard',
    answer: '分布式锁保证跨进程资源互斥。实现方式：1)Redis SETNX+过期时间（推荐Redlock算法）；2)Zookeeper临时顺序节点（CP强一致）；3)数据库唯一索引（简单但性能低）。Redis优点：性能高、实现简单；缺点：锁续期问题（需看门狗）、主从切换可能丢锁。推荐Redisson框架。',
    codeExample: `// Redis分布式锁实现
// 1. Redisson框架（推荐）
// <dependency>
//     <groupId>org.redisson</groupId>
//     <artifactId>redisson-spring-boot-starter</artifactId>
// </dependency>

@Configuration
public class RedissonConfig {
    @Bean
    public RedissonClient redissonClient() {
        Config config = new Config();
        config.useSingleServer()
            .setAddress("redis://localhost:6379")
            .setLockWatchdogTimeout(30000);  // 看门狗30秒
        return Redisson.create(config);
    }
}

@Service
public class OrderService {
    @Autowired
    private RedissonClient redissonClient;
    
    public String createOrder(Long productId) {
        // 获取分布式锁
        RLock lock = redissonClient.getLock("order:lock:" + productId);
        
        try {
            // 尝试获取锁，最多等待10秒，锁自动释放30秒
            boolean acquired = lock.tryLock(10, 30, TimeUnit.SECONDS);
            if (!acquired) {
                return "获取锁失败";
            }
            
            // 执行业务逻辑
            // 查库存、创建订单、扣库存...
            return "订单创建成功";
            
        } catch (InterruptedException e) {
            return "异常";
        } finally {
            // 释放锁（自动判断是否持有锁）
            if (lock.isHeldByCurrentThread()) {
                lock.unlock();
            }
        }
    }
}

// 2. Redis SETNX原生实现
public class RedisLock {
    @Autowired
    private StringRedisTemplate redisTemplate;
    
    public boolean tryLock(String key, String value, long expireTime) {
        // SET key value NX EX expireTime
        Boolean result = redisTemplate.opsForValue()
            .setIfAbsent(key, value, expireTime, TimeUnit.SECONDS);
        return result != null && result;
    }
    
    public void unlock(String key, String value) {
        // Lua脚本保证原子性：只有自己才能释放锁
        String script = "if redis.call('get', KEYS[1]) == ARGV[1] then " +
                        "   return redis.call('del', KEYS[1]) " +
                        "else " +
                        "   return 0 " +
                        "end";
        redisTemplate.execute(
            new DefaultRedisScript<>(script, Long.class),
            Collections.singletonList(key),
            value
        );
    }
    
    // 看门狗续期
    public void watchdog(String key, String value, long expireTime) {
        new Thread(() -> {
            while (true) {
                try {
                    Thread.sleep(expireTime / 3);
                    // 检查是否还持有锁
                    if (redisTemplate.opsForValue().get(key).equals(value)) {
                        redisTemplate.expire(key, expireTime, TimeUnit.SECONDS);
                    } else {
                        break;
                    }
                } catch (InterruptedException e) {
                    break;
                }
            }
        }).start();
    }
}

// 3. Zookeeper分布式锁
public class ZkLock {
    private final CuratorFramework client;
    
    public ZkLock(CuratorFramework client) {
        this.client = client;
    }
    
    public InterProcessMutex getLock(String path) {
        return new InterProcessMutex(client, path);
    }
    
    public void doWithLock(String path, Runnable task) throws Exception {
        InterProcessMutex lock = new InterProcessMutex(client, "/locks/" + path);
        
        if (lock.acquire(10, TimeUnit.SECONDS)) {
            try {
                task.run();
            } finally {
                lock.release();
            }
        }
    }
}`,
    tags: ['分布式锁', 'Redis', 'Redisson']
  },
  {
    id: 'ms-9',
    title: '分布式ID生成方案',
    content: '解释分布式ID的要求，列举常见的生成方案（UUID、数据库自增、Redis、Snowflake、Leaf）。',
    category: 'microservice',
    difficulty: 'medium',
    answer: '分布式ID要求：全局唯一、有序、高性能、可扩展。方案：1)UUID（无序、太长）；2)数据库自增（性能低、单点）；3)Redis INCR（性能高、依赖Redis）；4)Snowflake（Twitter雪花算法，64位：时间戳+机器ID+序列号）；5)Leaf（美团，号段模式+Snowflake）。推荐Snowflake或Leaf。',
    codeExample: `// Snowflake雪花算法实现
public class SnowflakeIdGenerator {
    // 起始时间戳（2024-01-01）
    private final long startTimestamp = 1704038400000L;
    
    // 机器ID占5位，最多32台机器
    private final long machineIdBits = 5L;
    private final long maxMachineId = ~(-1L << machineIdBits);  // 31
    
    // 序列号占12位，每毫秒最多4096个ID
    private final long sequenceBits = 12L;
    private final long maxSequence = ~(-1L << sequenceBits);  // 4095
    
    // 机器ID左移12位
    private final long machineIdShift = sequenceBits;
    // 时间戳左移17位
    private final long timestampShift = sequenceBits + machineIdBits;
    
    private long machineId;
    private long sequence = 0L;
    private long lastTimestamp = -1L;
    
    public SnowflakeIdGenerator(long machineId) {
        if (machineId > maxMachineId || machineId < 0) {
            throw new IllegalArgumentException("机器ID超出范围");
        }
        this.machineId = machineId;
    }
    
    public synchronized long nextId() {
        long currentTimestamp = System.currentTimeMillis();
        
        // 时间回拨处理
        if (currentTimestamp < lastTimestamp) {
            throw new RuntimeException("时钟回拨");
        }
        
        // 同一毫秒内
        if (currentTimestamp == lastTimestamp) {
            sequence = (sequence + 1) & maxSequence;
            if (sequence == 0) {
                // 序列号溢出，等待下一毫秒
                currentTimestamp = waitNextMillis(lastTimestamp);
            }
        } else {
            sequence = 0L;
        }
        
        lastTimestamp = currentTimestamp;
        
        // 组装ID：时间戳 | 机器ID | 序列号
        return ((currentTimestamp - startTimestamp) << timestampShift)
                | (machineId << machineIdShift)
                | sequence;
    }
    
    private long waitNextMillis(long lastTimestamp) {
        long timestamp = System.currentTimeMillis();
        while (timestamp <= lastTimestamp) {
            timestamp = System.currentTimeMillis();
        }
        return timestamp;
    }
}

// 使用示例
SnowflakeIdGenerator generator = new SnowflakeIdGenerator(1);
long id = generator.nextId();  // 例如：1234567890123456789

// Redis生成ID
@Service
public class RedisIdGenerator {
    @Autowired
    private StringRedisTemplate redisTemplate;
    
    public Long nextId(String key) {
        return redisTemplate.opsForValue().increment(key);
    }
    
    // 带日期前缀的ID（便于按日期统计）
    public String nextIdWithDate(String key) {
        String date = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        Long seq = redisTemplate.opsForValue().increment(key + ":" + date);
        return date + String.format("%06d", seq);
    }
}

// 数据库号段模式（Leaf）
CREATE TABLE leaf_alloc (
    biz_tag VARCHAR(64) PRIMARY KEY,
    max_id BIGINT NOT NULL,
    step INT NOT NULL,
    version INT NOT NULL
);

@Service
public class LeafIdGenerator {
    @Autowired
    private LeafAllocMapper leafAllocMapper;
    
    private final Map<String, SegmentBuffer> buffers = new ConcurrentHashMap<>();
    
    public Long nextId(String bizTag) {
        SegmentBuffer buffer = buffers.computeIfAbsent(bizTag, this::initBuffer);
        return buffer.nextId();
    }
    
    private SegmentBuffer initBuffer(String bizTag) {
        // 从数据库获取号段
        LeafAlloc alloc = leafAllocMapper.selectByBizTag(bizTag);
        leafAllocMapper.updateMaxId(bizTag, alloc.getStep(), alloc.getVersion());
        
        return new SegmentBuffer(alloc.getMaxId(), alloc.getStep());
    }
}`,
    tags: ['分布式ID', 'Snowflake', 'Leaf']
  },
  {
    id: 'ms-10',
    title: '消息队列在微服务中的应用',
    content: '解释消息队列在微服务中的作用（解耦、异步、削峰），对比RabbitMQ、Kafka、RocketMQ的特点。',
    category: 'microservice',
    difficulty: 'medium',
    answer: '消息队列作用：1)解耦：服务独立演进；2)异步：提升响应速度；3)削峰：应对流量高峰。对比：RabbitMQ（AMQP协议，可靠性高，适合业务消息）；Kafka（高吞吐、持久化、适合日志大数据）；RocketMQ（阿里开源，事务消息、顺序消息）。选择：可靠性选RabbitMQ，吞吐量选Kafka。',
    codeExample: `// RabbitMQ示例
// 1. 配置
@Configuration
public class RabbitMQConfig {
    @Bean
    public Queue orderQueue() {
        return new Queue("order.queue", true);
    }
    
    @Bean
    public DirectExchange orderExchange() {
        return new DirectExchange("order.exchange");
    }
    
    @Bean
    public Binding binding() {
        return BindingBuilder.bind(orderQueue())
            .to(orderExchange())
            .with("order.created");
    }
}

// 2. 生产者
@Service
public class OrderProducer {
    @Autowired
    private RabbitTemplate rabbitTemplate;
    
    public void sendOrderCreated(Order order) {
        rabbitTemplate.convertAndSend(
            "order.exchange",
            "order.created",
            order,
            message -> {
                message.getMessageProperties().setDeliveryMode(MessageDeliveryMode.PERSISTENT);
                return message;
            }
        );
    }
}

// 3. 消费者
@Component
@RabbitListener(queues = "order.queue")
public class OrderConsumer {
    @Autowired
    private InventoryService inventoryService;
    
    @RabbitHandler
    public void handleOrderCreated(Order order) {
        // 扣减库存
        inventoryService.decrease(order.getProductId(), order.getCount());
    }
}

// Kafka示例
// 1. 配置
@Configuration
public class KafkaConfig {
    @Bean
    public ProducerFactory<String, String> producerFactory() {
        Map<String, Object> config = new HashMap<>();
        config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        config.put(ProducerConfig.ACKS_CONFIG, "all");  // 确保可靠性
        return new DefaultKafkaProducerFactory<>(config);
    }
    
    @Bean
    public KafkaTemplate<String, String> kafkaTemplate() {
        return new KafkaTemplate<>(producerFactory());
    }
}

// 2. 生产者
@Service
public class LogProducer {
    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;
    
    public void sendLog(String topic, String message) {
        kafkaTemplate.send(topic, message)
            .addCallback(
                result -> log.info("发送成功"),
                ex -> log.error("发送失败", ex)
            );
    }
}

// 3. 消费者
@Component
public class LogConsumer {
    @KafkaListener(topics = "log-topic", groupId = "log-group")
    public void consumeLog(String message) {
        // 处理日志
        logService.save(message);
    }
    
    // 批量消费
    @KafkaListener(topics = "log-topic", batch = "true")
    public void consumeBatch(List<String> messages) {
        logService.batchSave(messages);
    }
}

// RocketMQ事务消息
@Service
public class OrderTransactionProducer {
    @Autowired
    private RocketMQTemplate rocketMQTemplate;
    
    public void sendOrderInTransaction(Order order) {
        rocketMQTemplate.sendMessageInTransaction(
            "order-group",
            MessageBuilder.withPayload(order).build(),
            null
        );
    }
}

@RocketMQTransactionListener(rocketMQTemplateBeanName = "rocketMQTemplate")
class OrderTransactionListener implements RocketMQLocalTransactionListener {
    @Override
    public RocketMQLocalTransactionState executeLocalTransaction(Message msg, Object arg) {
        try {
            // 执行本地事务
            orderService.createOrder(msg);
            return RocketMQLocalTransactionState.COMMIT;
        } catch (Exception e) {
            return RocketMQLocalTransactionState.ROLLBACK;
        }
    }
    
    @Override
    public RocketMQLocalTransactionState checkLocalTransaction(Message msg) {
        // 事务状态回查
        boolean exists = orderService.checkOrderExists(msg);
        return exists ? RocketMQLocalTransactionState.COMMIT : RocketMQLocalTransactionState.ROLLBACK;
    }
}`,
    tags: ['消息队列', 'RabbitMQ', 'Kafka']
  },
  {
    id: 'ms-11',
    title: '服务链路追踪',
    content: '解释链路追踪的作用，说明Spring Cloud Sleuth + Zipkin/SkyWalking的实现原理。',
    category: 'microservice',
    difficulty: 'medium',
    answer: '链路追踪用于排查分布式系统问题。核心概念：Trace（完整调用链）、Span（单个服务调用）。实现原理：1)请求入口生成TraceId；2)每个服务调用生成SpanId；3)通过HTTP Header传递TraceId/SpanId；4)异步上报到收集器。常用工具：Zipkin（Twitter）、SkyWalking（Apache，无侵入）、Jaeger（Uber）。',
    codeExample: `// Spring Cloud Sleuth + Zipkin配置
// 1. 引入依赖
// <dependency>
//     <groupId>org.springframework.cloud</groupId>
//     <artifactId>spring-cloud-starter-sleuth</artifactId>
// </dependency>
// <dependency>
//     <groupId>org.springframework.cloud</groupId>
//     <artifactId>spring-cloud-sleuth-zipkin</artifactId>
// </dependency>

// 2. 配置
// application.yml
spring:
  sleuth:
    sampler:
      probability: 1.0  # 采样率100%
  zipkin:
    base-url: http://localhost:9411
    sender:
      type: web  # 或kafka/rabbit

// 3. 自动生成TraceId/SpanId
// Sleuth自动在日志中添加：
// [user-service,trace-id,span-id,parent-span-id]
log.info("处理请求");  // 输出：[user-service,abc123,def456,null] 处理请求

// 4. 手动创建Span
@Service
public class UserService {
    @Autowired
    private Tracer tracer;
    
    public User getUser(Long id) {
        Span span = tracer.nextSpan().name("db-query");
        try (Tracer.SpanInScope ws = tracer.withSpan(span.start())) {
            return userRepository.findById(id);
        } finally {
            span.finish();
        }
    }
}

// 5. Baggage额外信息传递
// 设置Baggage（会传递到下游服务）
tracer.currentSpan().baggage().put("userId", "123");

// 在下游服务获取
String userId = tracer.currentSpan().baggage().get("userId");

// SkyWalking配置（无侵入）
// 1. Agent启动
// java -javaagent=/path/to/skywalking-agent.jar 
//      -Dskywalking.agent.service_name=user-service 
//      -Dskywalking.collector.backend_service=localhost:11800 
//      -jar app.jar

// 2. 自定义追踪
@Trace
public User getUser(Long id) {
    return userRepository.findById(id);
}

@Trace(operationName = "自定义操作")
@Tags({
    @Tag(key = "userId", value = "arg[0]"),
    @Tag(key = "result", value = "returnedObj.name")
})
public User getUser(Long id) {
    return userRepository.findById(id);
}

// 3. 手动埋点
public void customTrace() {
    AbstractSpan span = ContextManager.createLocalSpan("custom-operation");
    try {
        span.tag("key", "value");
        // 业务逻辑
    } catch (Exception e) {
        span.errorOccurred().log(e);
    } finally {
        ContextManager.stopSpan();
    }
}`,
    tags: ['链路追踪', 'Sleuth', 'Zipkin', 'SkyWalking']
  },
  {
    id: 'ms-12',
    title: '配置中心的作用和实现',
    content: '解释配置中心的作用，说明Spring Cloud Config/Nacos Config的工作原理。',
    category: 'microservice',
    difficulty: 'medium',
    answer: '配置中心统一管理微服务配置，支持动态更新。作用：1)配置集中管理；2)环境隔离（dev/test/prod）；3)动态刷新（无需重启）；4)版本管理。Nacos Config原理：1)服务启动从Nacos拉取配置；2)配置变更推送变更事件；3)应用监听事件刷新配置。推荐使用Nacos Config。',
    codeExample: `// Nacos配置中心示例
// 1. 引入依赖
// <dependency>
//     <groupId>com.alibaba.cloud</groupId>
//     <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
// </dependency>

// 2. bootstrap.yml配置（优先级高于application.yml）
spring:
  application:
    name: user-service
  profiles:
    active: dev
  cloud:
    nacos:
      config:
        server-addr: localhost:8848
        namespace: public
        group: DEFAULT_GROUP
        file-extension: yaml
        shared-configs:
          - data-id: common.yaml
            group: DEFAULT_GROUP
            refresh: true

// 3. Nacos配置文件
// user-service-dev.yaml
server:
  port: 8081
db:
  url: jdbc:mysql://localhost:3306/user_dev
  username: root
  password: root123

// 4. 动态刷新配置
@RestController
@RefreshScope  // 支持动态刷新
public class ConfigController {
    @Value("\${db.url}")
    private String dbUrl;
    
    @Value("\${custom.config}")
    private String customConfig;
    
    @GetMapping("/config")
    public String getConfig() {
        return "dbUrl=" + dbUrl + ", customConfig=" + customConfig;
    }
    
    // Nacos配置变更后，自动刷新，无需重启
}

// 5. 监听配置变更
@Component
public class ConfigChangeListener implements ApplicationListener<RefreshEvent> {
    @Override
    public void onApplicationEvent(RefreshEvent event) {
        log.info("配置已刷新: {}", event);
    }
}

// 6. 手动获取配置
@Service
public class ConfigService {
    @Autowired
    private ConfigService configService;
    
    public String getConfig(String dataId, String group) {
        return configService.getConfig(dataId, group, 5000);
    }
    
    public void listenConfig(String dataId, String group) {
        configService.addListener(dataId, group, new Listener() {
            @Override
            public void receiveConfigInfo(String configInfo) {
                log.info("收到配置变更: {}", configInfo);
                // 更新本地配置
            }
            
            @Override
            public Executor getExecutor() {
                return null;
            }
        });
    }
}

// Spring Cloud Config示例（Git存储）
// 1. 配置服务端
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication { /* ... */ }

// application.yml
spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/myorg/config-repo
          search-paths: '{application}'
          default-label: main

// 2. 客户端配置
// bootstrap.yml
spring:
  cloud:
    config:
      uri: http://localhost:8888
      name: user-service
      profile: dev
      label: main`,
    tags: ['配置中心', 'Nacos', '动态刷新']
  }
];
