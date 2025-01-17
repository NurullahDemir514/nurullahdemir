import React from 'react';

const codeSnippets = [
    "function optimize() { return performance++ }",
    "const future = async () => await dreams.achieve()",
    "if (coffee.isEmpty()) { developer.refill() }",
    "while (alive) { keepLearning() }",
    "try { life.live() } catch (e) { life.learn() }",
    "git commit -m 'Fixed bugs in production'",
    "const success = hardWork.map(dream => reality)",
    "npm install future-skills",
    "class Developer extends Human { constructor() { super() } }",
    "export const happiness = () => code.compile()",
    "docker run -d life/goals:latest",
    "for (let i = 1; i <= infinity; i++) { improve() }",
    "sudo apt-get install success",
    "const bugs = 99; while (bugs > 0) { fixBug() }",
    "import { Success } from 'hard-work'",
];

const CodeAnimation: React.FC = () => {
    return (
        <div className="code-rain-container">
            {Array.from({ length: 35 }).map((_, i) => (
                <div
                    key={i}
                    className="code-line"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 15}s`,
                        fontSize: `${Math.random() * (14 - 10) + 10}px`,
                        opacity: Math.random() * 0.4 + 0.1,
                        transform: `rotate(${Math.random() * 10 - 5}deg)`,
                    }}
                >
                    {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
                </div>
            ))}
        </div>
    );
};

export default CodeAnimation; 