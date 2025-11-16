import React, { useState, useTransition } from 'react';

// Define types for our data
interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
    authorId: number;
    date: string;
}

interface Comment {
    id: number;
    postId: number;
    userId: number;
    content: string;
    date: string;
}

// Mock database data
const mockDatabase = {
    users: [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            role: "Developer"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            role: "Designer"
        },
        {
            id: 3,
            name: "Bob Johnson",
            email: "bob@example.com",
            role: "Manager"
        },
        {
            id: 4,
            name: "Alice Brown",
            email: "alice@example.com",
            role: "Developer"
        },
        {
            id: 5,
            name: "Charlie Wilson",
            email: "charlie@example.com",
            role: "Tester"
        }
    ],
    posts: [
        {
            id: 1,
            title: "Introduction to React Hooks",
            content: "React Hooks are a powerful feature that allow you to use state and other React features without writing a class.",
            authorId: 1,
            date: "2023-01-15"
        },
        {
            id: 2,
            title: "Understanding JavaScript Closures",
            content: "Closures are an important concept in JavaScript that allow functions to have private variables.",
            authorId: 2,
            date: "2023-02-20"
        },
        {
            id: 3,
            title: "CSS Grid vs Flexbox",
            content: "Both CSS Grid and Flexbox are powerful layout systems, but they serve different purposes.",
            authorId: 4,
            date: "2023-03-10"
        },
        {
            id: 4,
            title: "TypeScript Best Practices",
            content: "TypeScript enhances JavaScript by adding types to the language, helping catch errors early.",
            authorId: 1,
            date: "2023-04-05"
        },
        {
            id: 5,
            title: "State Management in React",
            content: "Managing state effectively is crucial for building scalable React applications.",
            authorId: 4,
            date: "2023-05-12"
        }
    ],
    comments: [
        {
            id: 1,
            postId: 1,
            userId: 2,
            content: "Great introduction! Helped me understand hooks better.",
            date: "2023-01-16"
        },
        {
            id: 2,
            postId: 1,
            userId: 3,
            content: "Looking forward to more examples with useTransition.",
            date: "2023-01-17"
        },
        {
            id: 3,
            postId: 2,
            userId: 1,
            content: "Closures can be tricky, but this explanation helped a lot.",
            date: "2023-02-22"
        }
    ]
};

const UseTransitionDemo: React.FC = () => {
    const [isPending, startTransition] = useTransition();
    const [activeTab, setActiveTab] = useState<'users' | 'posts' | 'comments'>('users');
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    // Fetch data from mock database
    const fetchData = (tab: string) => {
        setLoading(true);

        // Simulate network delay
        setTimeout(() => {
            startTransition(() => {
                switch (tab) {
                    case 'users':
                        setData(mockDatabase.users);
                        break;
                    case 'posts':
                        setData(mockDatabase.posts);
                        break;
                    case 'comments':
                        setData(mockDatabase.comments);
                        break;
                    default:
                        setData([]);
                }
                setLoading(false);
            });
        }, 800);
    };

    const handleTabChange = (tab: 'users' | 'posts' | 'comments') => {
        setActiveTab(tab);
        fetchData(tab);
    };

    // Initial data load
    React.useEffect(() => {
        fetchData('users');
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>useTransition Hook with JSON Data Demo</h1>

            <div style={{ marginBottom: '20px' }}>
                <button
                    onClick={() => handleTabChange('users')}
                    style={{
                        padding: '10px 20px',
                        margin: '0 5px',
                        backgroundColor: activeTab === 'users' ? '#007bff' : '#f8f9fa',
                        color: activeTab === 'users' ? 'white' : 'black',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Users
                </button>

                <button
                    onClick={() => handleTabChange('posts')}
                    style={{
                        padding: '10px 20px',
                        margin: '0 5px',
                        backgroundColor: activeTab === 'posts' ? '#007bff' : '#f8f9fa',
                        color: activeTab === 'posts' ? 'white' : 'black',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Posts
                </button>

                <button
                    onClick={() => handleTabChange('comments')}
                    style={{
                        padding: '10px 20px',
                        margin: '0 5px',
                        backgroundColor: activeTab === 'comments' ? '#007bff' : '#f8f9fa',
                        color: activeTab === 'comments' ? 'white' : 'black',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Comments
                </button>
            </div>

            {(isPending || loading) && (
                <div style={{
                    padding: '10px',
                    backgroundColor: '#fff3cd',
                    color: '#856404',
                    border: '1px solid #ffeaa7',
                    borderRadius: '4px',
                    marginBottom: '20px'
                }}>
                    Loading {activeTab} data...
                </div>
            )}

            <div>
                <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                {activeTab === 'users' && (
                    <ul>
                        {data.map((item: User) => (
                            <li key={item.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #eee', borderRadius: '4px' }}>
                                <strong>{item.name}</strong> ({item.role})<br />
                                Email: {item.email}
                            </li>
                        ))}
                    </ul>
                )}

                {activeTab === 'posts' && (
                    <div>
                        {data.map((item: Post) => (
                            <div key={item.id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '4px' }}>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <small>Date: {item.date}</small>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'comments' && (
                    <ul>
                        {data.map((item: Comment) => (
                            <li key={item.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #eee', borderRadius: '4px' }}>
                                "{item.content}"<br />
                                <small>Post ID: {item.postId} | Date: {item.date}</small>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                <h3>How useTransition works here:</h3>
                <ul>
                    <li>Tab switching is immediate (high priority)</li>
                    <li>Data loading is deferred (low priority) via <code>startTransition</code></li>
                    <li>UI remains responsive during data loading</li>
                    <li><code>isPending</code> indicates when transition is in progress</li>
                    <li>Data is fetched from mock database simulating a JSON file</li>
                </ul>
            </div>
        </div>
    );
};

export default UseTransitionDemo;