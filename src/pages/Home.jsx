import React from 'react';
import { Github, Linkedin, Instagram, Send, Code2, Brain, Cpu, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    const techStack = [
        { 
            name: "AI & Deep Learning", 
            icon: Brain, 
            text: "Transformers, Attention Mechanisms, PyTorch, CNN, RNN, LSTM", 
            color: "text-purple-600 dark:text-purple-400",
            border: "group-hover:border-purple-500/50"
        },
        { 
            name: "Software Engineering", 
            icon: Code2, 
            text: "Python, Web Development, System Architecture & Clean Code", 
            color: "text-violet-600 dark:text-violet-400",
            border: "group-hover:border-violet-500/50"
        },
        { 
            name: "Tools & Platforms", 
            icon: Cpu, 
            text: "PyTorch, PostgreSQL, Odoo 17, n8n, Git, VS Code, PyCharm", 
            color: "text-fuchsia-600 dark:text-fuchsia-400",
            border: "group-hover:border-fuchsia-500/50"
        },
        { 
            name: "Data & Systems", 
            icon: Database, 
            text: "PostgreSQL, API Integrations, Intelligent Automated Workflows", 
            color: "text-indigo-600 dark:text-indigo-400",
            border: "group-hover:border-indigo-500/50"
        }
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 py-8 sm:py-16 lg:px-12">
            {/* Hero Section */}
            <div className="flex flex-col-reverse items-center justify-between gap-12 lg:gap-16 lg:flex-row">
                <div className="flex-1 space-y-7 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 mb-5 shadow-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600 dark:bg-purple-400"></span>
                            </span>
                            <span className="text-xs font-bold tracking-wider text-purple-700 dark:text-purple-300 uppercase">
                                Available for Projects & Research
                            </span>
                        </div>
                        <h1 className="text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
                            <span className="block text-slate-900 dark:text-white">Betelhem</span>
                            <span className="block text-gradient">Hiluf</span>
                        </h1>
                        <p className="mt-5 text-xl font-semibold text-slate-800 dark:text-slate-200 sm:text-2xl">
                            Software Engineering Student & <span className="text-purple-600 dark:text-purple-400">Full-Stack Developer</span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="max-w-2xl space-y-3 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300"
                    >
                        <p>
                            I am a Software Engineering student with a strong interest in Artificial Intelligence, Machine Learning, Deep Learning, and Software Development.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">
                            I enjoy understanding how technologies work, researching technical concepts, building practical projects, and exploring ways to solve real-world problems through intelligent software systems.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-5 lg:justify-start pt-2"
                    >
                        <a
                            href="/assets/resume.pdf"
                            download
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-purple-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-purple-700 hover:scale-105 active:scale-95 shadow-xl shadow-purple-600/30"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Download CV <Send size={18} />
                            </span>
                            <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-700 via-violet-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>

                        <div className="flex items-center gap-3">
                            {[
                                { icon: Github, href: "https://github.com/betel1221", label: "GitHub" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/betelhem-hiluf-b34214330", label: "LinkedIn" },
                                { icon: Instagram, href: "https://www.instagram.com/betel645", label: "Instagram" },
                                { icon: Send, href: "https://t.me/Betel1221", label: "Telegram" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-200/80 dark:border-purple-500/20 bg-white dark:bg-purple-950/30 text-slate-700 dark:text-slate-300 transition-all hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/40 hover:text-purple-600 dark:hover:text-purple-300 active:scale-90 shadow-sm"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    className="relative flex-1 flex justify-center"
                >
                    <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-[420px] sm:w-[420px]">
                        {/* Animated Outer Rings */}
                        <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-purple-400/30 dark:border-purple-500/30 pointer-events-none" />
                        <div className="absolute inset-5 animate-reverse-spin rounded-full border border-dashed border-violet-400/20 dark:border-violet-500/20 pointer-events-none" />
                        <div className="absolute inset-10 animate-spin-slow rounded-full border border-purple-300/20 dark:border-purple-400/10 pointer-events-none" />

                        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border-2 border-purple-100 dark:border-purple-500/25 glass-card p-4 shadow-2xl shadow-purple-900/15">
                            <img
                                src="/assets/profile.jpg"
                                alt="Betelhem Hiluf"
                                className="h-full w-full rounded-[2rem] object-cover transition-all duration-700 hover:scale-105"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/800x800?text=Betelhem+Hiluf';
                                    e.target.className = "h-full w-full rounded-2xl object-cover opacity-50 contrast-50";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Tech Stack Section */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-24 lg:mt-40"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
                        Core <span className="text-gradient">Expertise</span>
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
                        Combining intelligent machine learning architectures with full-stack software engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            className={`group relative glass-card p-8 rounded-3xl border border-purple-100/80 dark:border-purple-500/20 overflow-hidden transition-all hover:shadow-xl hover:shadow-purple-500/10 ${tech.border}`}
                        >
                            <div className={`mb-6 inline-flex p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 ${tech.color} transition-all group-hover:bg-purple-600 group-hover:text-white group-hover:scale-110`}>
                                <tech.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{tech.name}</h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                {tech.text}
                            </p>
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-600 to-violet-500 transition-all duration-300 group-hover:w-full" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            </div>
        </section>
    );
};

export default Home;
