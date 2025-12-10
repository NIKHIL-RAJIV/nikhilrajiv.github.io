"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const Publications = () => {
    const publications = [
        {
            title: "Blockchain Approach for Real-Time Authentication in 6G Machine-to-Machine Communication",
            venue: "6G Networks and AI-Driven Cybersecurity, published by IGI Global",
            year: "2025",
            link: "https://www.igi-global.com/chapter/blockchain-approach-for-real-time-authentication-in-6g-machine-to-machine-communication/360219"
        },
        {
            title: "Blockchain-based IoT Computing Services in Medical Healthcare Solutions - A Thorough Review",
            venue: "Blockchain-Based Solutions for Accessibility in Smart Cities, published by IGI Global",
            year: "2024",
            link: "https://www.igi-global.com/chapter/blockchain-based-iot-computing-services-in-medical-healthcare-solutions/343360"
        }
    ];

    return (
        <section id="publications" className="py-20 bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white mb-12 text-center"
                >
                    Publications
                </motion.h2>

                <div className="space-y-6">
                    {publications.map((pub, index) => (
                        <motion.a
                            key={index}
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-colors block group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 mt-1 flex-shrink-0 group-hover:text-indigo-300 transition-colors">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2 leading-tight group-hover:text-indigo-400 transition-colors">
                                        &quot;{pub.title}&quot;
                                    </h3>
                                    <p className="text-slate-400">
                                        In <span className="italic">{pub.venue}</span>, {pub.year}.
                                    </p>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
