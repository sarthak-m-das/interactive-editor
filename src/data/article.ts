import { BlockType } from '../types/block';
import { Article } from '../types/article';

const exampleArticle: Article = {
  id: 'article123',
  title: 'Understanding System Design Patterns',
  blocks: [
    {
      id: 'block1',
      type: BlockType.Heading,
      content: {
        level: 1,
        text: 'Introduction to System Design',
      },
    },
    {
      id: 'block2',
      type: BlockType.Text,
      content: {
        text: '<p>System design is an important skill for building scalable applications. It involves understanding the architecture of a system and the interactions between components to create a well-functioning solution that handles real-world challenges, such as performance, scalability, and reliability.</p>',
      },
    },
    {
      id: 'block3',
      type: BlockType.Image,
      content: {
        url: 'https://media.geeksforgeeks.org/wp-content/uploads/20240430132028/What-is-System-Design.webp',
        altText: 'System Architecture Diagram',
      },
    },
    {
      id: 'block4',
      type: BlockType.List,
      content: {
        listType: 'unordered',
        items: [
          'Designing the system architecture',
          'Managing scalability',
          'Handling distributed systems',
          'Optimizing database usage',
          'Implementing caching strategies',
        ],
      },
    },
    {
      id: 'block5',
      type: BlockType.Heading,
      content: {
        level: 3,
        text: 'Key Concepts in System Design',
      },
    },
    {
      id: 'block6',
      type: BlockType.Text,
      content: {
        text: '<p>Several key concepts are fundamental to system design. These include load balancing, partitioning, replication, and the use of distributed databases to handle large-scale systems.</p>',
      },
    },
    {
      id: 'block7',
      type: BlockType.List,
      content: {
        listType: 'ordered',
        items: [
          'Load Balancing: Distributing incoming traffic across multiple servers.',
          'Partitioning: Splitting data across different servers or databases to improve access speed.',
          'Replication: Duplicating data across different machines to ensure availability and redundancy.',
          'Caching: Storing frequently accessed data in memory to reduce database calls and speed up response times.',
          'Sharding: Splitting a large database into smaller, more manageable pieces.',
        ],
      },
    },
    {
      id: 'block8',
      type: BlockType.Heading,
      content: {
        level: 2,
        text: 'Load Balancing Strategies',
      },
    },
    {
      id: 'block9',
      type: BlockType.Text,
      content: {
        text: '<p>Load balancing is essential to distribute traffic across multiple instances or servers. There are several strategies for load balancing, such as:</p>',
      },
    },
    {
      id: 'block10',
      type: BlockType.List,
      content: {
        listType: 'unordered',
        items: [
          'Round Robin: Requests are distributed sequentially to each server in the pool.',
          'Least Connections: Traffic is sent to the server with the least number of active connections.',
          'IP Hash: Requests are routed based on the client\'s IP address, ensuring consistency in routing for the same user.',
        ],
      },
    },
    {
      id: 'block11',
      type: BlockType.Heading,
      content: {
        level: 2,
        text: 'Database Partitioning & Sharding',
      },
    },
    {
      id: 'block12',
      type: BlockType.Text,
      content: {
        text: '<p>Partitioning and sharding are techniques used to handle large datasets across multiple machines, ensuring efficient access and distribution of data.</p>',
      },
    },
    {
      id: 'block13',
      type: BlockType.Image,
      content: {
        url: 'https://example.com/database-sharding.png',
        altText: 'Database Sharding Example',
      },
    },
    {
      id: 'block14',
      type: BlockType.Heading,
      content: {
        level: 2,
        text: 'Scaling a Social Media Platform',
      },
    },
    {
      id: 'block15',
      type: BlockType.Text,
      content: {
        text: '<p>Let’s explore a real-world example of how a social media platform scaled its system to handle millions of users and requests per second.</p>',
      },
    },
    {
      id: 'block16',
      type: BlockType.List,
      content: {
        listType: 'ordered',
        items: [
          'Step 1: Implement load balancers to distribute traffic across multiple servers.',
          'Step 2: Partition user data across different databases using sharding techniques.',
          'Step 3: Use caching systems like Redis to store frequently accessed data and reduce database calls.',
          'Step 4: Introduce a messaging queue (e.g., Kafka) for asynchronous task processing.',
        ],
      },
    },
    {
      id: 'block17',
      type: BlockType.CodeSnippet,
      content: {
        language: 'javascript',
        code: `// Example of a load balancer configuration
const loadBalancer = new LoadBalancer({
  strategy: 'round-robin',
  servers: ['server1', 'server2', 'server3'],
});

loadBalancer.routeRequest(request);`,
      },
    },
    {
      id: 'block18',
      type: BlockType.Blockquote,
      content: {
        text: 'System design is not about building monolithic applications but crafting solutions that scale and evolve.',
      },
    },
    {
      id: 'block19',
      type: BlockType.HorizontalRule,
      content: {},
    },
    {
      id: 'block20',
      type: BlockType.MultipleChoice,
      content: {
        question: 'Which of the following is a common load balancing strategy?',
        choices: [
          { id: '1', text: 'Sharding' },
          { id: '2', text: 'Round Robin' },
          { id: '3', text: 'Caching' },
        ],
        correctAnswerId: '2',
      },
    },
    {
      id: 'block21',
      type: BlockType.Heading,
      content: {
        level: 2,
        text: 'Caching for Performance Opt',
      },
    },
    {
      id: 'block22',
      type: BlockType.Text,
      content: {
        text: '<p>Caching improves application performance by reducing the need for repeated database queries. It stores copies of frequently accessed data in memory, improving response times.</p>',
      },
    },
    {
      id: 'block23',
      type: BlockType.HardBreak,
      content: {},
    },
    {
      id: 'block24',
      type: BlockType.List,
      content: {
        listType: 'unordered',
        items: [
          'Data caching: Stores application data in memory for fast access.',
          'Page caching: Stores entire rendered HTML pages to reduce server load.',
          'Content Delivery Networks (CDNs): Distributes static assets geographically to reduce latency.',
        ],
      },
    },
  ],
  createdAt: new Date(),
  updatedAt: new Date(),
  authorId: 'author123',
};

export default exampleArticle;
