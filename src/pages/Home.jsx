import React from 'react';
import { Github, Linkedin, Instagram, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="container mx-auto px-6 py-12 sm:py-24 lg:px-12">
            <div className="flex flex-col-reverse items-center justify-between gap-16 lg:flex-row">
                <div className="flex-1 space-y-8 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h5 className="text-lg font-semibold tracking-wide text-primary uppercase">
                            Available for opportunities
                        </h5>
                        <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
                            <span className="block text-slate-900 dark:text-white">Betelhem</span>
                            <span className="block text-gradient">Hiluf</span>
                        </h1>
                        <p className="mt-6 text-xl font-medium text-slate-600 dark:text-slate-400 sm:text-2xl">
                            4th-year Software Engineering Student & <span className="text-slate-900 dark:text-white">Frontend Enthusiast</span>
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400"
                    >
                        I'm a 4th-year Software Engineering student at Debre Berhan University.
                        I specialize in building modular, accessible, and high-performance web applications
                        with a focus on clean code and exceptional user experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-6 lg:justify-start"
                    >
                        <a
                            href="/asset/Betelhem's resume.pdf"
                            download
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-10 py-4 text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/25"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Download Resume <Send size={18} />
                            </span>
                            <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-600 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>

                        <div className="flex items-center gap-3">
                            {[
                                { icon: Github, href: "https://github.com/betel1221" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/betelhem-hiluf-b34214330" },
                                { icon: Instagram, href: "https://www.instagram.com/betel645" },
                                { icon: Send, href: "https://t.me/Betel1221" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-slate-600 dark:text-slate-400 transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary active:scale-90"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    className="relative flex-1"
                >
                    <div className="relative mx-auto flex h-80 w-80 items-center justify-center sm:h-[450px] sm:w-[450px]">
                        {/* Animated Outer Rings */}
                        <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-primary/30" />
                        <div className="absolute inset-4 animate-reverse-spin rounded-full border border-dashed border-emerald-500/20" />

                        <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-slate-200 dark:border-white/10 glass-card p-3 shadow-2xl bg-white/10">
                            <img
                                src="/asset/new_pic.jpg"
                                alt="Betelhem Hiluf"
                                className="h-full w-full rounded-2xl object-cover transition-all duration-700 hover:scale-105"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/800x800?text=Profile+Image';
                                    e.target.className = "h-full w-full rounded-2xl object-cover opacity-50 contrast-50";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950/80 via-transparent to-transparent pointer-events-none opacity-40" />
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-6 top-1/4 glass-card rounded-2xl p-4 shadow-xl border border-primary/20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                                    <span className="font-bold">4</span>
                                </div>
                                <div className="text-xs font-bold text-slate-800 dark:text-white leading-tight">
                                    Year<br />Student
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </div>
    );
};


export default Home;
