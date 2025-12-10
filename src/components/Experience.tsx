"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white mb-12 text-center"
                >
                    Experience
                </motion.h2>

                <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        <div className="absolute -left-[9px] top-0 bg-slate-950 p-1">
                            <div className="bg-indigo-500 rounded-full w-4 h-4 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                        </div>

                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Full-Stack Developer Intern</h3>
                                    <p className="text-indigo-400">Auxilio Technologies</p>
                                </div>
                                <div className="text-right mt-2 md:mt-0">
                                    <span className="text-slate-400 text-sm block">Feb 2024 – July 2024</span>
                                    <span className="text-slate-500 text-xs text-right">Remote | Atlanta, USA</span>
                                </div>
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-slate-300">
                                <li>Developed a dynamic web application integrating SQL datasets to visualize battery performance metrics.</li>
                                <li>Built user-friendly interfaces with fast loading times using React, Next.js, and Tailwind CSS.</li>
                                <li>Optimized data pipelines, reducing battery data handling time by 80%.</li>
                            </ul>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {["React", "Next.js", "Tailwind CSS", "SQL"].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
