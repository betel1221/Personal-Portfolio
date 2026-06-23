import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

import kuraz1 from '../assets/projects/kuraz1.png';
import kuraz2 from '../assets/projects/kuraz2.png';
import dbu1 from '../assets/projects/dbu1.png';
import dbu2 from '../assets/projects/dbu2.png';
import portfolio1 from '../assets/projects/portfolio1.png';
import hospital1 from '../assets/projects/hospital1.png';
import hospital2 from '../assets/projects/hospital2.png';

const projects = [
    {
        title: "kuraz-docs-app",
        description: "A modern, responsive web app for document creation and management. Features include a dynamic sidebar, search, dark mode, custom Groq AI, live Markdown preview, and secure Firebase integration.",
        tech: ["JavaScript", "React", "Firebase"],
        github: "https://github.com/betel1221/kuraz-docs-app",
        link: "https://poetic-praline-1dab23.netlify.app/",
        images: [kuraz1, kuraz2],
    },
    {
        title: "DBU-ai-tutor",
        description: "An AI-powered academic tutor and assistant for Debre Berhan University (DBU) students. Features include personalized course support, multi-modal chat (image & voice), and university-specific knowledge integration.",
        tech: ["JavaScript", "AI", "React"],
        github: "https://github.com/betel1221/DBU-ai-tutor",
        link: "https://dbu-ai-tutor.vercel.app/",
        images: [dbu2, dbu1],
    },
    {
        title: "Personal-Portfolio",
        description: "My personal portfolio — a modern React + Tailwind v4 application showcasing my projects, skills, and experience.",
        tech: ["CSS", "React", "Tailwind"],
        github: "https://github.com/betel1221/Personal-Portfolio",
        link: "https://github.com/betel1221/Personal-Portfolio",
        images: [portfolio1],
    },
    {
        title: "Crowd-funding",
        description: "A full-stack crowdfunding platform implementing user stories and functional requirements for creators, backers, and admins, including campaign management, payment handling, and secure backend APIs.",
        tech: ["JavaScript", "Node.js", "Fullstack"],
        github: "https://github.com/betel1221/Crowd-funding",
        link: "https://github.com/betel1221/Crowd-funding",
        images: [],
    },
    {
        title: "Hospital-Management-System",
        description: "A comprehensive hospital management system designed to streamline patient records, appointments, staff management, and billing — improving operational efficiency for healthcare facilities.",
        tech: ["Python", "Database", "Fullstack"],
        github: "https://github.com/betel1221/Hospital-Management-System",
        link: "https://github.com/betel1221/Hospital-Management-System",
        images: [hospital1, hospital2],
    },
    {
        title: "todo-app-react",
        description: "A simple and efficient task management application built with React.",
        tech: ["JavaScript", "React"],
        github: "https://github.com/betel1221/todo-app-react",
        link: "https://github.com/betel1221/todo-app-react",
        images: [],
    },
    {
        title: "anonymous-comment",
        description: "A web application allowing users to post anonymous comments securely.",
        tech: ["JavaScript", "Node.js"],
        github: "https://github.com/betel1221/anonymous-comment",
        link: "https://github.com/betel1221/anonymous-comment",
        images: [],
    },
];

const gradientMap = [
    "from-emerald-500/20 to-teal-500/20",
    "from-violet-500/20 to-indigo-500/20",
    "from-orange-500/20 to-rose-500/20",
    "from-cyan-500/20 to-blue-500/20",
    "from-lime-500/20 to-emerald-500/20",
    "from-pink-500/20 to-purple-500/20",
    "from-teal-500/20 to-cyan-500/20",
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
                className="relative w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Title bar */}
                <div className="bg-slate-900 px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500" />
                        </div>
                        <span className="text-slate-400 text-sm font-medium ml-2">{project.title} — Demo Preview</span>
                    </div>
                    <div className="flex items-center gap-3">
                        {total > 1 && (
                            <span className="text-slate-500 text-xs font-bold">{current + 1} / {total}</span>
                        )}
                        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10">
                            <X size={18} />
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="relative bg-slate-950">
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
                    <div className="bg-slate-900 py-3 flex justify-center gap-2">
                        {project.images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                                className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'}`}
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
                        Selected <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="mt-6 text-xl text-slate-700 dark:text-slate-400 max-w-2xl">
                        A showcase of my recent work, blending technical excellence with creative problem-solving.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => {
                        const hasImages = project.images.length > 0;
                        const coverImage = hasImages ? project.images[0] : null;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 transition-all hover:border-primary/50 dark:hover:bg-white/10 shadow-lg"
                            >
                                {/* Thumbnail / placeholder */}
                                <div
                                    className={`aspect-[16/10] w-full overflow-hidden rounded-[2rem] relative ${hasImages ? 'cursor-pointer' : ''} ${!coverImage ? `bg-gradient-to-br ${gradientMap[index % gradientMap.length]}` : 'bg-slate-100 dark:bg-white/5'}`}
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
                                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/20 backdrop-blur-sm rounded-full p-4 scale-75 group-hover:scale-100">
                                                    <ZoomIn size={26} className="text-white" />
                                                </div>
                                            </div>
                                            {/* Image count badge */}
                                            {project.images.length > 1 && (
                                                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
                                                    {project.images.length} photos
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <div className="h-full w-full flex flex-col items-center justify-center gap-3">
                                            <div className="w-16 h-16 rounded-2xl bg-white/20 dark:bg-white/10 flex items-center justify-center text-2xl font-black text-slate-700 dark:text-white border border-white/20">
                                                {project.title.slice(0, 2).toUpperCase()}
                                            </div>
                                            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-widest uppercase">Demo coming soon</p>
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[10px] font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-400 px-2.5 py-1 bg-emerald-500/15 rounded-lg">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="mt-4 text-2xl font-bold font-sans text-black dark:text-white group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                                    <p className="mt-2 text-slate-700 dark:text-slate-400 line-clamp-2">{project.description}</p>

                                    <div className="mt-8 flex items-center justify-between">
                                        <div className="flex gap-4">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-200 transition-all hover:bg-primary hover:text-white">
                                                <Github size={18} />
                                            </a>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-200 transition-all hover:bg-emerald-600 hover:text-white">
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                        {hasImages && (
                                            <button
                                                onClick={() => setActiveModal(project)}
                                                className="text-xs font-bold uppercase tracking-widest text-primary hover:text-emerald-500 transition-colors"
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
