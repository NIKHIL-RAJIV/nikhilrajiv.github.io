"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-xl shadow-black/20">
                        <p className="text-lg text-slate-300 leading-relaxed">
                            I engineer AI systems that diagnose diseases and automate complex vision tasks. Currently bridging the gap between state-of-the-art Deep Learning research and deployable medical applications.
                        </p>
                        <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                            I don't just train models; I build scalable, efficient pipelines that solve real-world problems. My focus is on Computer Vision, Generative AI, and reliable ML infrastructure.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
