"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
    const education = [
        {
            degree: "M.Tech in Artificial Intelligence",
            institution: "Amrita Vishwa Vidyapeetham - Coimbatore",
            period: "2025 - Present",
            details: "Focus on Deep Learning, Computer Vision, and Neural Networks."
        },
        {
            degree: "B.Tech in Electronics and Computer Engineering",
            institution: "Amrita Vishwa Vidyapeetham - Amritapuri, Kerala",
            period: "2021 - 2025",
            details: "CGPA: 7.31. Foundation in Electronics and Computing."
        }
    ];

    return (
        <section id="education" className="py-20 bg-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white mb-12 text-center"
                >
                    Education
                </motion.h2>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                                        <GraduationCap size={24} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                                </div>
                                <span className="text-slate-400 text-sm mt-2 md:mt-0 bg-slate-800 px-3 py-1 rounded-full">{edu.period}</span>
                            </div>
                            <div className="ml-0 md:ml-14">
                                <p className="text-indigo-300 mb-2">{edu.institution}</p>
                                <p className="text-slate-400 text-sm">{edu.details}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
