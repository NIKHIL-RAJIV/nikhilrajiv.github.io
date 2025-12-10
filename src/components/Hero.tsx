"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Code } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    {/* You can add a profile image here if available */}
                    {/* <div className="relative w-32 h-32 rounded-full bg-slate-800 overflow-hidden border-2 border-slate-700">
                <img src="/profile.jpg" alt="Nikhil Rajiv" className="object-cover w-full h-full" />
            </div> */}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                    Nikhil <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Rajiv</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl"
                >
                    M.Tech AI | Computer Vision & Deep Learning | Research-oriented Engineer
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-slate-500 mb-10 max-w-2xl"
                >
                    Building intelligent systems that bridge the gap between research and real-world application.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <a
                        href="https://drive.google.com/file/d/1nV1_HO8e_aNy-cRWqHuzvP7ppqXnXA6R/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-slate-200 transition-colors"
                    >
                        <Download size={20} /> Resume
                    </a>
                    <a
                        href="https://leetcode.com/u/nikhilrajiv580/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20"
                    >
                        <Code size={20} /> LeetCode
                    </a>
                    <a
                        href="https://github.com/NIKHIL-RAJIV"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-colors border border-slate-700"
                    >
                        <Github size={20} /> GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nikhil-rajiv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
                    >
                        <Linkedin size={20} /> LinkedIn
                    </a>
                </motion.div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};

export default Hero;
