import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Send, Code2, Brain, Cpu, Database, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    const techStack = [
        { 
            name: "AI & Deep Learning", 
            icon: Brain, 
            text: "Transformers, Attention Mechanisms, PyTorch, CNN, RNN, LSTM", 
            color: "text-purple-600 dark:text-purple-400"
        },
        { 
            name: "Software Engineering", 
            icon: Code2, 
            text: "Python, Web Development, System Architecture & Clean Code", 
            color: "text-purple-600 dark:text-purple-400"
        },
        { 
            name: "Tools & Platforms", 
            icon: Cpu, 
            text: "PyTorch, PostgreSQL, Odoo 17, n8n, Git, VS Code, PyCharm", 
            color: "text-purple-600 dark:text-purple-400"
        },
        { 
            name: "Data & Systems", 
            icon: Database, 
            text: "PostgreSQL, API Integrations, Intelligent Automated Workflows", 
            color: "text-purple-600 dark:text-purple-400"
        }
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-4 pb-16">
            <div className="container mx-auto px-6 lg:px-12">
            {/* Hero Section */}
            <div className="flex flex-col-reverse items-center justify-between gap-12 lg:gap-16 lg:flex-row">
                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-500/20 mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600 dark:bg-purple-400"></span>
                            </span>
                            <span className="text-xs font-medium text-purple-700 dark:text-purple-300">
                                Available for Projects & Research
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                            <span>Betelhem </span>
                            <span className="text-purple-600 dark:text-purple-400">Hiluf</span>
                        </h1>
                        <p className="mt-3 text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200">
                            Software Engineering Student & Full-Stack Developer
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="max-w-2xl space-y-3 text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal"
                    >
                        <p>
                            I am a Software Engineering student with a strong interest in Artificial Intelligence, Machine Learning, Deep Learning, and Software Development.
                        </p>
                        <p>
                            I enjoy understanding how technologies work, researching technical concepts, building practical projects, and exploring ways to solve real-world problems through intelligent software systems.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex flex-wrap items-center justify-center gap-4 lg:justify-start pt-2"
                    >
                        <a
                            href="/assets/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:scale-[1.02] active:scale-95"
                        >
                            <span>Download CV</span>
                            <Send size={16} />
                        </a>

                        <div className="flex items-center gap-2.5">
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
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-200/70 dark:border-purple-500/20 bg-white dark:bg-purple-950/30 text-slate-600 dark:text-slate-300 transition-all hover:border-purple-400 hover:text-purple-700 dark:hover:text-purple-300 active:scale-95 shadow-sm"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative flex-1 flex justify-center"
                >
                    <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-[380px] sm:w-[380px]">
                        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-purple-200/80 dark:border-purple-500/20 bg-white/80 dark:bg-[#141026]/80 p-3 shadow-lg shadow-purple-900/5">
                            <img
                                src="/assets/profile.jpg"
                                alt="Betelhem Hiluf"
                                className="h-full w-full rounded-2xl object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/800x800?text=Betelhem+Hiluf';
                                    e.target.className = "h-full w-full rounded-2xl object-cover opacity-50 contrast-50";
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Tech Stack Section */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-20 lg:mt-32"
            >
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                        Core Expertise
                    </h2>
                    <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
                        Specialized focus in intelligent architectures, deep learning, and software development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl border border-purple-100/90 dark:border-purple-500/15 bg-white/90 dark:bg-[#141026]/70 shadow-sm transition-all hover:border-purple-300 hover:shadow-md"
                        >
                            <div className="mb-4 inline-flex p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
                                <tech.icon size={22} />
                            </div>
                            <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1.5">{tech.name}</h3>
                            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                                {tech.text}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Quick Navigation Cards */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-16 pt-10 border-t border-purple-100 dark:border-purple-500/15"
            >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Link
                        to="/about"
                        className="group flex flex-col justify-between p-5 rounded-2xl border border-purple-100/90 dark:border-purple-500/15 bg-white/90 dark:bg-[#141026]/70 hover:border-purple-300 shadow-sm transition-all hover:scale-[1.01]"
                    >
                        <div>
                            <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">Background</span>
                            <h3 className="text-base font-semibold text-slate-900 dark:text-white mt-1">About & Skills</h3>
                            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Explore my journey, research focus, and technical toolkit.</p>
                        </div>
                        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                            Read About Me <ArrowRight size={13} />
                        </span>
                    </Link>

                    <Link
                        to="/projects"
                        className="group flex flex-col justify-between p-5 rounded-2xl border border-purple-100/90 dark:border-purple-500/15 bg-white/90 dark:bg-[#141026]/70 hover:border-purple-300 shadow-sm transition-all hover:scale-[1.01]"
                    >
                        <div>
                            <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">Portfolio</span>
                            <h3 className="text-base font-semibold text-slate-900 dark:text-white mt-1">Projects & Research</h3>
                            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Discover DOCtransformer-Secure, AI systems, and apps.</p>
                        </div>
                        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                            View All Projects <ArrowRight size={13} />
                        </span>
                    </Link>

                    <Link
                        to="/contact"
                        className="group flex flex-col justify-between p-5 rounded-2xl border border-purple-100/90 dark:border-purple-500/15 bg-white/90 dark:bg-[#141026]/70 hover:border-purple-300 shadow-sm transition-all hover:scale-[1.01]"
                    >
                        <div>
                            <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">Collaboration</span>
                            <h3 className="text-base font-semibold text-slate-900 dark:text-white mt-1">Get In Touch</h3>
                            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Send a message or connect directly on Telegram or Email.</p>
                        </div>
                        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                            Start Conversation <ArrowRight size={13} />
                        </span>
                    </Link>
                </div>
            </motion.div>
            </div>
        </section>
    );
};

export default Home;
