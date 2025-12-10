"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Skills = () => {
    // Initial static stats (will be updated by API)
    const [stats, setStats] = useState({
        solved: 46,
        easy: 23,
        medium: 15,
        hard: 8
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('https://leetcode-stats-api.herokuapp.com/nikhilrajiv580');
                const data = await response.json();
                if (data.status === 'success') {
                    setStats({
                        solved: data.totalSolved,
                        easy: data.easySolved,
                        medium: data.mediumSolved,
                        hard: data.hardSolved
                    });
                }
            } catch (error) {
                console.error("Failed to fetch LeetCode stats", error);
            }
        };
        fetchStats();
    }, []);

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Python", "JavaScript", "SQL", "TypeScript"]
        },
        {
            title: "AI / ML Libraries",
            skills: ["PyTorch", "TensorFlow", "OpenCV", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"]
        },
        {
            title: "Web & Tools",
            skills: ["React", "Next.js", "Git", "GitHub", "Docker", "Ubuntu Linux", "VS Code", "Jupyter"]
        }
    ];

    const certificates = [
        { name: "Introduction to Programming with R (CS50)", link: "https://certificates.cs50.io/d03052a9-67dc-4e41-bbe0-654e9294b9e6.pdf?size=letter" },
        { name: "Machine Learning Specialization (Coursera)", link: "https://www.coursera.org/account/accomplishments/specialization/certificate/J9A0HMG5G7CT" },
        { name: "Python Data Structures & Algorithms + LEETCODE Exercises (Udemy)", link: "https://www.udemy.com/certificate/UC-88bae093-c74b-4530-9ad2-919451bbf684/" }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white mb-12 text-center"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/50 p-6 rounded-xl border border-slate-800"
                        >
                            <h3 className="text-xl font-semibold text-white mb-6 text-center">{category.title}</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700 hover:border-indigo-500 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* LeetCode Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <a
                        href="https://leetcode.com/u/nikhilrajiv580/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/80 transition-all group"
                    >
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">Problem Solving (LeetCode)</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-amber-500 transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                                <span className="block text-2xl font-bold text-white">{stats.solved}</span>
                                <span className="text-xs text-slate-500">Solved</span>
                            </div>
                            <div className="p-4 bg-slate-950 rounded-xl border border-teal-500/20">
                                <span className="block text-2xl font-bold text-teal-400">{stats.easy}</span>
                                <span className="text-xs text-slate-500">Easy</span>
                            </div>
                            <div className="p-4 bg-slate-950 rounded-xl border border-amber-500/20">
                                <span className="block text-2xl font-bold text-amber-400">{stats.medium}</span>
                                <span className="text-xs text-slate-500">Medium</span>
                            </div>
                            <div className="p-4 bg-slate-950 rounded-xl border border-rose-500/20">
                                <span className="block text-2xl font-bold text-rose-400">{stats.hard}</span>
                                <span className="text-xs text-slate-500">Hard</span>
                            </div>
                        </div>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-indigo-900/20 to-violet-900/20 p-8 rounded-2xl border border-indigo-500/20"
                >
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {certificates.map((cert, index) => (
                            <a
                                key={index}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-900 px-4 py-2 rounded-full border border-slate-700 text-slate-300 flex items-center gap-2 hover:bg-slate-800 hover:text-white hover:border-indigo-500 transition-all"
                            >
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                {cert.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
