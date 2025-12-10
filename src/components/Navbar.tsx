"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Publications", href: "#publications" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-full pl-6 pr-6 py-2 shadow-2xl shadow-black/40">
                <div className="flex items-center justify-center">

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-slate-300 hover:text-white transition-colors text-sm font-semibold hover:bg-white/10 rounded-full"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden w-full justify-between items-center gap-4">
                        <span className="text-white font-bold text-sm">Menu</span>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="absolute top-full text-center left-4 right-4 mt-2 p-2 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-xl md:hidden"
                    >
                        <div className="flex flex-col space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
