import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "kuraz-docs-app",
        description: "A modern, responsive web app for document creation and management. Features include a dynamic sidebar, search, dark mode, custom Groq AI, live Markdown preview, and secure Firebase integration.",
        tech: ["JavaScript", "React", "Firebase"],
        github: "https://github.com/betel1221/kuraz-docs-app",
        link: "https://github.com/betel1221/kuraz-docs-app",
        image: "https://via.placeholder.com/600x400?text=Kuraz+Docs"
    },
    {
        title: "DBU-ai-tutor",
        description: "An AI-powered academic tutor and assistant for Debre Berhan University (DBU) students. Features include personalized course support, multi-modal chat (image & voice), and university-specific knowledge integration.",
        tech: ["JavaScript", "AI", "React"],
        github: "https://github.com/betel1221/DBU-ai-tutor",
        link: "https://github.com/betel1221/DBU-ai-tutor",
        image: "https://via.placeholder.com/600x400?text=DBU+AI+Tutor"
    },
    {
        title: "Crowd-funding",
        description: "A full-stack crowdfunding platform implementing user stories and functional requirements for creators, backers, and admins, including campaign management, payment handling, and secure backend APIs.",
        tech: ["JavaScript", "Node.js", "Fullstack"],
        github: "https://github.com/betel1221/Crowd-funding",
        link: "https://github.com/betel1221/Crowd-funding",
        image: "https://via.placeholder.com/600x400?text=Crowd+Funding"
    },
    {
        title: "Personal-Portfolio",
        description: "My first Personal Portfolio, successfully converted to a modern React + Tailwind v4 application.",
        tech: ["CSS", "React", "Tailwind"],
        github: "https://github.com/betel1221/Personal-Portfolio",
        link: "https://github.com/betel1221/Personal-Portfolio",
        image: "https://via.placeholder.com/600x400?text=Portfolio"
    },
    {
        title: "todo-app-react",
        description: "A simple and efficient task management application built with React.",
        tech: ["JavaScript", "React"],
        github: "https://github.com/betel1221/todo-app-react",
        link: "https://github.com/betel1221/todo-app-react",
        image: "https://via.placeholder.com/600x400?text=Todo+App"
    },
    {
        title: "anonymous-comment",
        description: "A web application allowing users to post anonymous comments securely.",
        tech: ["JavaScript", "Node.js"],
        github: "https://github.com/betel1221/anonymous-comment",
        link: "https://github.com/betel1221/anonymous-comment",
        image: "https://via.placeholder.com/600x400?text=Anonymous+Comment"
    }
];

const Works = () => {
    return (
        <div className="container mx-auto px-6 py-12 sm:py-24 lg:px-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    Selected <span className="text-gradient">Projects</span>
                </h2>
                <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
                    A showcase of my recent work, blending technical excellence with creative problem-solving.
                </p>
            </motion.div>

            <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 transition-all hover:border-primary/50 hover:bg-white dark:hover:bg-white/10 shadow-lg"
                    >
                        <div className="aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-white/5">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.src = `https://via.placeholder.com/800x500?text=${project.title}+Demo`;
                                    e.target.className = "h-full w-full object-cover opacity-60 contrast-75";
                                }}
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-primary px-2.5 py-1 bg-emerald-500/10 rounded-lg">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="mt-2 text-slate-600 dark:text-slate-400 line-clamp-2">{project.description}</p>

                            <div className="mt-8 flex items-center justify-between">
                                <div className="flex gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-200 transition-all hover:bg-primary hover:text-white">
                                        <Github size={18} />
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-200 transition-all hover:bg-emerald-600 hover:text-white">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Works;

