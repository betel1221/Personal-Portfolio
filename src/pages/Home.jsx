import React from 'react';
import { Github, Linkedin, Instagram, Send, Code2, Layout as LayoutIcon, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    const techStack = [
        { name: "Frontend", icon: LayoutIcon, text: "React, Next.js, Vite", color: "text-blue-500" },
        { name: "Styling", icon: Globe, text: "Tailwind CSS, Framer Motion", color: "text-emerald-500" },
        { name: "Backend", icon: Cpu, text: "Node.js, Express, MongoDB", color: "text-purple-500" },
        { name: "Languages", icon: Code2, text: "JavaScript, TypeScript, Python", color: "text-orange-500" }
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 py-8 sm:py-16 lg:px-12">
            {/* Hero Section */}
            <div className="flex flex-col-reverse items-center justify-between gap-16 lg:flex-row">
                <div className="flex-1 space-y-8 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            <h5 className="text-sm font-bold tracking-widest text-primary uppercase">
                                Available for new projects
                            </h5>
                        </div>
                        <h1 className="text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
                            <span className="block text-slate-900 dark:text-white">Betelhem</span>
                            <span className="block text-gradient">Hiluf</span>
                        </h1>
                        <p className="mt-6 text-xl font-medium text-slate-700 dark:text-slate-400 sm:text-2xl">
                            4th-year Software Engineering Student & <span className="text-slate-900 dark:text-white">Full-Stack Developer</span>
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-400"
                    >
                        I’m a software engineering student at DB University with a passion for building web apps and exploring AI. I love turning ideas into clean, easy-to-use digital tools. I also create tech content because I'm big on clear communication and sharing what I learn as I grow as a developer.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-6 lg:justify-start"
                    >
                        <a
                            href="/assets/resume.pdf"
                            download
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-10 py-4 text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/25"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Download CV <Send size={18} />
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
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-400 transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary active:scale-90 shadow-sm"
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
                    className="relative flex-1"
                >
                    <div className="relative mx-auto flex h-80 w-80 items-center justify-center sm:h-[450px] sm:w-[450px]">
                        {/* Animated Outer Rings */}
                        <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-primary/30" />
                        <div className="absolute inset-6 animate-reverse-spin rounded-full border border-dashed border-emerald-500/20" />
                        <div className="absolute inset-12 animate-spin-slow rounded-full border border-primary/10" />

                        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border-2 border-slate-200 dark:border-white/10 glass-card p-4 shadow-2xl">
                            <img
                                src="/assets/profile.jpg"
                                alt="Betelhem Hiluf"
                                className="h-full w-full rounded-[2rem] object-cover transition-all duration-700 hover:scale-110"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/800x800?text=Betelhem+Hiluf';
                                    e.target.className = "h-full w-full rounded-2xl object-cover opacity-50 contrast-50";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 dark:from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 top-1/4 glass-card rounded-2xl p-4 shadow-2xl border border-primary/20 backdrop-blur-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                                    <span className="text-lg font-bold">4</span>
                                </div>
                                <div className="text-xs font-bold text-slate-800 dark:text-white leading-tight uppercase tracking-wider">
                                    Year<br />S.E Student
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-8 bottom-1/4 glass-card rounded-2xl p-4 shadow-2xl border border-emerald-500/20 backdrop-blur-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-500">
                                    <Cpu size={20} />
                                </div>
                                <div className="text-xs font-bold text-slate-800 dark:text-white leading-tight uppercase tracking-wider">
                                    AI<br />Enthusiast
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Tech Stack Section */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-32 lg:mt-48"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Core Expertise</h2>
                    <p className="mt-4 text-slate-700 dark:text-slate-400 max-w-2xl mx-auto">
                        Combining technical skills with creative design to build exceptional digital products.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="group relative glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden"
                        >
                            <div className={`mb-6 inline-flex p-4 rounded-2xl bg-slate-50 dark:bg-white/5 ${tech.color} transition-colors group-hover:bg-primary group-hover:text-white`}>
                                <tech.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{tech.name}</h3>
                            <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed">
                                {tech.text}
                            </p>
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            </div>
        </section>
    );
};

export default Home;
