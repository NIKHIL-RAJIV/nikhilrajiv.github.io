"use client";

import { motion } from "framer-motion";
import { Github, Code } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "SSRP Framework for Deepfake Detection",
            period: "Research Project",
            tech: ["Python", "Deep Learning", "Graph Transformer", "Computer Vision"],
            description: "Proposed a Self-Supervised Relational Pre-training (SSRP) framework to detect deepfakes by learning consistent relations between face and background.",
            points: [
                "Utilized a Graph Transformer-based approach for relational learning.",
                "Outperformed state-of-the-art methods in detecting high-quality deepfakes.",
                "Focused on cross-modal consistency for robust detection."
            ],
            github: "https://github.com/NIKHIL-RAJIV/Self-Supervised-Relational-Pre-training-SSRP-Framework-for-Deepfake-Detection"
        },
        {
            title: "MedAnomNet – Anomaly-Aware Medical Image Classifier",
            period: "Feb 2025 - May 2025",
            tech: ["PyTorch", "OpenCV", "ResNet50", "Autoencoders"],
            description: "Developed a hybrid deep learning model combining ResNet50 with CNN for disease classification and an SSIM-based autoencoder for anomaly detection.",
            points: [
                "Achieved 95.25% accuracy with only 234K parameters.",
                "Lightweight, explainable, and efficient system for early medical diagnosis.",
                "Trained on multi-modal datasets including MRI, CT, and X-ray scans."
            ],
            github: "", // Private Repo
            status: "Research Under Review"
        },
        {
            title: "Novel Biomarker Detection for Diabetic Nephropathy",
            period: "Dec 2024 - Jan 2025",
            tech: ["PyTorch", "ANN", "CNN", "Random Forest", "SMOTE"],
            description: "Identified novel biomarkers for diabetic nephropathy through advanced deep learning methods on gene expression datasets.",
            points: [
                "Identified key biomarkers using advanced feature selection techniques.",
                "Achieved 95% accuracy in early detection utilizing XGBoost and Random Forest classifiers."
            ],
            github: "https://github.com/NIKHIL-RAJIV/Novel-Biomarkers-detection-for-Diabetic-Nephropathy"
        },
        {
            title: "LungMNIST: Evaluating Lung Disease in Medical Imaging",
            period: "Oct 2024 - Nov 2024",
            tech: ["PyTorch", "CNN", "DNN", "KAN"],
            description: "Standardized 10,000+ chest X-rays into the MNIST format for research and education benchmarks.",
            points: [
                "Benchmarked DL models achieving up to 87% accuracy.",
                "Enhanced accessibility for lightweight model development in medical imaging."
            ],
            github: "https://github.com/NIKHIL-RAJIV/LungMNIST-Evaluating-Lung-Disease-in-Medical-Imaging"
        },
        {
            title: "Vehicle Counting and Classification Using Yolov8",
            period: "May 2024 - June 2024",
            tech: ["OpenCV", "Python", "NumPy", "YOLOv8"],
            description: "Developed an automated system for accurate real-time vehicle counting and classification in complex video streams.",
            points: [
                "Implemented object detection using YOLOv8 and tracking with a virtual counting line.",
                "Provided accurate real-time statistics and visual feedback.",
                "Robust performance in challenging environmental conditions."
            ],
            github: "https://github.com/NIKHIL-RAJIV/Vehicle-Counting-and-Classification-Using-Yolov8"
        },
        {
            title: "Fake Instagram Accounts Identifier using Random Forest",
            period: "Jan 2024 - Feb 2024",
            tech: ["Python", "Pandas", "Random Forest"],
            description: "Built a machine learning model to detect and flag fake Instagram accounts to enhance platform integrity.",
            points: [
                "Developed Random Forest classifiers with and without K-means clustering.",
                "Achieved 90% accuracy and 0.7175 ROC AUC without K-means.",
                "Achieved 89.17% accuracy and 0.9705 ROC AUC with K-means."
            ],
            github: "https://github.com/NIKHIL-RAJIV/Fake-Instagram-Accounts-Identifier-using-Random-Forest"
        },
        {
            title: "ChatSummarizer: Interactive File Chat",
            period: "Sept 2023 - Oct 2023",
            tech: ["NLTK", "Python"],
            description: "Addressed the need for efficient content summarization and information retrieval from uploaded files.",
            points: [
                "Developed an intelligent chatbot utilizing NLTK for natural language processing.",
                "Enabled users to upload documents and receive concise, accurate summaries.",
                "Improved information retrieval speed and accessibility."
            ],
            github: "https://github.com/NIKHIL-RAJIV/ChatSummarizer-Interactive-File-Chat"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white mb-12 text-center"
                >
                    Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 flex flex-col"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                                        <Code size={24} />
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">{project.period}</span>
                                        {project.github ? (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-white transition-colors"
                                                title="View on GitHub"
                                            >
                                                <Github size={18} />
                                            </a>
                                        ) : (project.status && (
                                            <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 uppercase tracking-wide">
                                                {project.status}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                                <div className="space-y-2 mb-6 flex-1">
                                    {project.points.map((point, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                            <p className="text-slate-300 text-xs">{point}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-medium px-2.5 py-1 bg-slate-900 text-indigo-300 rounded-md border border-slate-800">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
