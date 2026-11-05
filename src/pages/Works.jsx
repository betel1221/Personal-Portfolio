import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, ZoomIn, Sparkles, ShieldCheck } from 'lucide-react';

import kuraz1 from '../assets/projects/kuraz1.png';
import kuraz2 from '../assets/projects/kuraz2.png';
import dbu1 from '../assets/projects/dbu1.png';
import dbu2 from '../assets/projects/dbu2.png';
import portfolio1 from '../assets/projects/portfolio1.png';
import hospital1 from '../assets/projects/hospital1.png';
import hospital2 from '../assets/projects/hospital2.png';

const projects = [
    {
        title: "DOCtransformer-Secure",
        subtitle: "Source Code Obfuscation Research",
        description: "Researching deep learning approaches to source code protection. Focuses on DeepObfusCode architecture & implementation, source code transformations, code potency & resilience, and model evaluation.",
        tech: ["Python", "Deep Learning", "Transformers", "PyTorch", "Code Security"],
        github: "https://github.com/betel1221",
        link: "https://github.com/betel1221",
        images: [],
        isResearch: true,
        status: "In Progress",
    },
    {
        title: "kuraz-docs-app",
        description: "A modern, responsive web app for document creation and management. Features include a dynamic sidebar, search, dark mode, custom Groq AI, live Markdown preview, and secure Firebase integration.",
        tech: ["JavaScript", "React", "Firebase", "Groq AI"],
        github: "https://github.com/betel1221/kuraz-docs-app",
        link: "https://poetic-praline-1dab23.netlify.app/",
        images: [kuraz1, kuraz2],
    },
    {
        title: "DBU-ai-tutor",
        description: "An AI-powered academic tutor and assistant for Debre Berhan University (DBU) students. Features include personalized course support, multi-modal chat (image & voice), and university-specific knowledge integration.",
        tech: ["Python", "AI / Multi-Modal", "React", "NLP"],
        github: "https://github.com/betel1221/DBU-ai-tutor",
        link: "https://dbu-ai-tutor.vercel.app/",
        images: [dbu2, dbu1],
    },
    {
        title: "Personal-Portfolio",
        description: "My personal portfolio — a modern React + Tailwind v4 application showcasing research, projects, technical skills, and experience with a cohesive purple aesthetic.",
        tech: ["React 19", "Tailwind CSS", "Framer Motion", "Vite"],
        github: "https://github.com/betel1221/Personal-Portfolio",
        link: "https://github.com/betel1221/Personal-Portfolio",
        images: [portfolio1],
    },
    {
        title: "Hospital-Management-System",
        description: "A comprehensive hospital management system designed to streamline patient records, appointments, staff management, and billing — improving operational efficiency for healthcare facilities.",
        tech: ["Python", "Database", "System Design"],
        github: "https://github.com/betel1221/Hospital-Management-System",
        link: "https://github.com/betel1221/Hospital-Management-System",
        images: [hospital1, hospital2],
    },
    {
        title: "Crowd-funding",
        description: "A full-stack crowdfunding platform implementing user stories and functional requirements for creators, backers, and admins, including campaign management, payment handling, and secure backend APIs.",
        tech: ["JavaScript", "Node.js", "Fullstack", "REST API"],
        github: "https://github.com/betel1221/Crowd-funding",
        link: "https://github.com/betel1221/Crowd-funding",
        images: [],
    },
    {
        title: "todo-app-react",
        description: "A simple and efficient task management application built with React, focusing on clean state management and responsive UI interactions.",
        tech: ["JavaScript", "React", "Tailwind"],
        github: "https://github.com/betel1221/todo-app-react",
        link: "https://github.com/betel1221/todo-app-react",
        images: [],
    },
    {
        title: "anonymous-comment",
        description: "A secure web application allowing users to post anonymous feedback and comments with verified moderation controls.",
        tech: ["JavaScript", "Node.js", "Express"],
        github: "https://github.com/betel1221/anonymous-comment",
        link: "https://github.com/betel1221/anonymous-comment",
        images: [],
    },
];

const gradientMap = [
    "from-purple-900/40 via-violet-900/30 to-indigo-950/40",
    "from-violet-900/40 via-fuchsia-900/30 to-purple-950/40",
    "from-purple-950/50 via-purple-900/30 to-slate-900/50",
    "from-indigo-950/50 via-violet-900/30 to-purple-900/40",
    "from-fuchsia-950/40 via-purple-900/30 to-violet-950/40",
    "from-violet-950/50 via-purple-900/40 to-indigo-900/30",
    "from-purple-900/35 via-violet-950/50 to-purple-950/40",
];

// ── Modal with multi-image carousel ──────────────────────────────────────────
const DemoModal = ({ project, onClose }) => {
    const [current, setCurrent] = useState(0);
    const total = project.images.length;

    const prev = (e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + total) % total); };
    const next = (e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % total); };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: "spring", damping: 22, stiffness: 260 }}
                className="relative w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl border border-purple-500/20"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Title bar */}
                <div className="bg-[#120d24] px-6 py-3.5 flex items-center justify-between border-b border-purple-500/20">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                            <div className="w-3 h-3 rounded-full bg-purple-500/80" />
                        </div>
                        <span className="text-purple-200 text-sm font-semibold ml-2">{project.title} — Demo Preview</span>
                    </div>
                    <div className="flex items-center gap-3">
                        {total > 1 && (
                            <span className="text-purple-300 text-xs font-bold">{current + 1} / {total}</span>
                        )}
                        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10">
                            <X size={18} />
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="relative bg-[#090614]">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={current}
                            src={project.images[current]}
                            alt={`${project.title} screenshot ${current + 1}`}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.2 }}
                            className="w-full object-contain max-h-[75vh]"
                        />
                    </AnimatePresence>

                    {/* Prev / Next arrows */}
                    {total > 1 && (
                        <>
                            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 backdrop-blur-sm text-white rounded-full p-2.5 transition-all hover:scale-110">
                                <ChevronLeft size={22} />
                            </button>
                            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 backdrop-blur-sm text-white rounded-full p-2.5 transition-all hover:scale-110">
                                <ChevronRight size={22} />
                            </button>
                        </>
                    )}
                </div>

                {/* Dot indicators */}
                {total > 1 && (
                    <div className="bg-[#120d24] py-3 flex justify-center gap-2 border-t border-purple-500/20">
                        {project.images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                                className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-purple-600' : 'w-2 h-2 bg-slate-600 hover:bg-purple-400'}`}
                            />
                        ))}
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};

// ── Main Works component ──────────────────────────────────────────────────────
const Works = () => {
    const [activeModal, setActiveModal] = useState(null);

    return (
        <section id="works" className="pt-20">
            <div className="container mx-auto px-6 py-8 sm:py-16 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        Featured <span className="text-gradient">Projects & Research</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                        A showcase of technical research in AI/ML, source code protection, and practical full-stack web applications.
                    </p>
                </motion.div>

                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => {
                        const hasImages = project.images.length > 0;
                        const coverImage = hasImages ? project.images[0] : null;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06, duration: 0.5 }}
                                className={`group relative overflow-hidden rounded-[2.5rem] border ${
                                    project.isResearch 
                                        ? 'border-purple-400/60 dark:border-purple-500/50 shadow-xl shadow-purple-500/10' 
                                        : 'border-purple-100/80 dark:border-purple-500/20'
                                } bg-white dark:bg-[#130e26]/80 p-4 transition-all hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/15`}
                            >
                                {/* Thumbnail / placeholder */}
                                <div
                                    className={`aspect-[16/10] w-full overflow-hidden rounded-[2rem] relative ${hasImages ? 'cursor-pointer' : ''} ${!coverImage ? `bg-gradient-to-br ${gradientMap[index % gradientMap.length]}` : 'bg-slate-100 dark:bg-purple-950/30'}`}
                                    onClick={() => hasImages && setActiveModal(project)}
                                >
                                    {coverImage ? (
                                        <>
                                            <img
                                                src={coverImage}
                                                alt={project.title}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            {/* Hover overlay */}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-purple-600/60 backdrop-blur-sm rounded-full p-4 scale-75 group-hover:scale-100 text-white">
                                                    <ZoomIn size={24} />
                                                </div>
                                            </div>
                                            {/* Image count badge */}
                                            {project.images.length > 1 && (
                                                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-purple-200 text-xs font-bold px-2.5 py-1 rounded-full border border-purple-500/30">
                                                    {project.images.length} photos
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <div className="h-full w-full flex flex-col items-center justify-center gap-3 p-6 text-center">
                                            {project.isResearch ? (
                                                <>
                                                    <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-600 dark:text-purple-300 shadow-inner">
                                                        <ShieldCheck size={28} />
                                                    </div>
                                                    <div>
                                                        <span className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-widest block">
                                                            Deep Learning Research
                                                        </span>
                                                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                                                            DeepObfusCode Architecture
                                                        </span>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 dark:bg-purple-900/30 flex items-center justify-center text-xl font-black text-purple-600 dark:text-purple-300 border border-purple-300/30 dark:border-purple-500/30">
                                                        {project.title.slice(0, 2).toUpperCase()}
                                                    </div>
                                                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-widest uppercase">Full-Stack Solution</p>
                                                </>
                                            )}
                                        </div>
                                    )}

                                    {/* Status / Research Pill */}
                                    {project.isResearch && (
                                        <div className="absolute top-3 left-3 bg-purple-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                            {project.status}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 px-2.5 py-1 bg-purple-50 dark:bg-purple-950/50 rounded-lg border border-purple-200/60 dark:border-purple-500/30">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between pt-4 border-t border-purple-100/60 dark:border-purple-500/15">
                                        <div className="flex gap-3">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                                aria-label={`${project.title} GitHub`}
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 dark:bg-purple-950/40 text-slate-700 dark:text-purple-200 transition-all hover:bg-purple-600 hover:text-white hover:scale-105 border border-purple-200/50 dark:border-purple-500/30">
                                                <Github size={18} />
                                            </a>
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer"
                                                    aria-label={`${project.title} Live Preview`}
                                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 dark:bg-purple-950/40 text-slate-700 dark:text-purple-200 transition-all hover:bg-violet-600 hover:text-white hover:scale-105 border border-purple-200/50 dark:border-purple-500/30">
                                                    <ExternalLink size={18} />
                                                </a>
                                            )}
                                        </div>
                                        {hasImages && (
                                            <button
                                                onClick={() => setActiveModal(project)}
                                                className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                                            >
                                                View Demo →
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {activeModal && (
                    <DemoModal project={activeModal} onClose={() => setActiveModal(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Works;
