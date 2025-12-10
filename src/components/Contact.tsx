"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                    <p className="text-slate-400 mb-10 text-lg">
                        I am currently looking for full-time opportunities in AI/ML engineering.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                        <a
                            href="mailto:nikhilrajiv580@gmail.com"
                            className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/25"
                        >
                            <Mail size={20} />
                            Say Hello
                        </a>
                    </div>

                    <div className="flex justify-center gap-8">
                        <a
                            href="https://github.com/NIKHIL-RAJIV"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-2 group"
                        >
                            <div className="p-3 bg-slate-800 rounded-full group-hover:bg-slate-700 transition-colors">
                                <Github size={24} />
                            </div>
                            <span className="text-sm">GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nikhil-rajiv/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-2 group"
                        >
                            <div className="p-3 bg-slate-800 rounded-full group-hover:bg-slate-700 transition-colors">
                                <Linkedin size={24} />
                            </div>
                            <span className="text-sm">LinkedIn</span>
                        </a>
                        <a
                            href="mailto:nikhilrajiv580@gmail.com"
                            className="text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-2 group"
                        >
                            <div className="p-3 bg-slate-800 rounded-full group-hover:bg-slate-700 transition-colors">
                                <Mail size={24} />
                            </div>
                            <span className="text-sm">Email</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
