import { Article } from "../types/article";

const exampleArticle: Article = {
    type: "doc",
    content: [
        {
            type: "heading",
            attrs: {
                level: 1
            },
            content: [
                {
                    type: "text",
                    text: "Introduction to System Design"
                }
            ]
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "System design is an important skill for building scalable applications. It involves understanding the architecture of a system and the interactions between components to create a well-functioning solution that handles real-world challenges, such as performance, scalability, and reliability."
                }
            ]
        },
        {
            type: "bulletList",
            content: [
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Designing the system architecture"
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Managing scalability"
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Handling distributed systems"
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Optimizing database usage"
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Implementing caching strategies"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            type: "heading",
            attrs: {
                level: 3
            },
            content: [
                {
                    type: "text",
                    text: "Key Concepts in System Design"
                }
            ]
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Several key concepts are fundamental to system design. These include load balancing, partitioning, replication, and the use of distributed databases to handle large-scale systems."
                }
            ]
        },
        {
            type: "orderedList",
            attrs: {
                start: 1
            },
            content: [
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Load Balancing: Distributing incoming traffic across multiple servers."
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Partitioning: Splitting data across different servers or databases to improve access speed."
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Replication: Duplicating data across different machines to ensure availability and redundancy."
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Caching: Storing frequently accessed data in memory to reduce database calls and speed up response times."
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Sharding: Splitting a large database into smaller, more manageable pieces."
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            type: "multipleChoice",
            attrs: {
                question: "New question",
                choices: [
                    "Option 1",
                    "Option 2",
                    "thi"
                ],
                correctAnswer: 2
            }
        },
        {
            type: "heading",
            attrs: {
                level: 2
            },
            content: [
                {
                    type: "text",
                    text: "Load Balancing Strategies"
                }
            ]
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Load balancing is essential to distribute traffic across multiple instances or servers. There are several strategies for load balancing, such as:"
                }
            ]
        },
        {
            type: "bulletList",
            content: [
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Round Robin: Requests are distributed sequentially to each server in the pool."
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Least Connections: Traffic is sent to the server with the least number of active connections."
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "IP Hash: Requests are routed based on the client's IP address, ensuring consistency in routing for the same user."
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            type: "heading",
            attrs: {
                level: 2
            },
            content: [
                {
                    type: "text",
                    text: "Database Partitioning & Sharding"
                }
            ]
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Partitioning and sharding are techniques used to handle large datasets across multiple machines, ensuring efficient access and distribution of data."
                }
            ]
        },
        {
            type: "heading",
            attrs: {
                level: 2
            },
            content: [
                {
                    type: "text",
                    text: "Scaling a Social Media Platform"
                }
            ]
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Let’s explore a real-world example of how a social media platform scaled its system to handle millions of users and requests per second."
                }
            ]
        },
        {
            type: "orderedList",
            attrs: {
                start: 1
            },
            content: [
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Step 1: Implement load balancers to distribute traffic across multiple servers."
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Step 2: Partition user data across different databases using sharding techniques."
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Step 3: Use caching systems like Redis to store frequently accessed data and reduce database calls."
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Step 4: Introduce a messaging queue (e.g., Kafka) for asynchronous task processing."
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            type: "codeBlock",
            attrs: {
                language: "javascript"
            },
            content: [
                {
                    type: "text",
                    text: "// Example of a load balancer configuration\nconst loadBalancer = new LoadBalancer({\n  strategy: 'round-robin',\n  servers: ['server1', 'server2', 'server3'],\n});\n\nloadBalancer.routeRequest(request);"
                }
            ]
        },
        {
            type: "blockquote",
            content: [
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "System design is not about building monolithic applications but crafting solutions that scale and evolve."
                        }
                    ]
                }
            ]
        },
        {
            type: "horizontalRule"
        },
        {
            type: "heading",
            attrs: {
                level: 2
            },
            content: [
                {
                    type: "text",
                    text: "Caching for Performance Opt"
                }
            ]
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Caching improves application performance by reducing the need for repeated database queries. It stores copies of frequently accessed data in memory, improving response times."
                }
            ]
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "hardBreak"
                }
            ]
        },
        {
            type: "bulletList",
            content: [
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Data caching: Stores application data in memory for fast access."
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Page caching: Stores entire rendered HTML pages to reduce server load."
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "listItem",
                    attrs: {
                        color: ""
                    },
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Content Delivery Networks (CDNs): Distributes static assets geographically to reduce latency."
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    title: "",
    description: "",
    id: "",
    createdAt: new Date(),
    updatedAt: new Date()
};

export default exampleArticle;
