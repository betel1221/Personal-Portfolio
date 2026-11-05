import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const certs = [
    {
        title: "Full Stack Web Development",
        issuer: "Coursera / Meta",
        date: "2024",
        description: "Comprehensive program covering modern frontend, backend technologies, and system architecture."
    },
    {
        title: "Software Engineering Fundamentals",
        issuer: "Debre Berhan University",
        date: "2023",
        description: "Core concepts of software development, object-oriented design, algorithms, and system design."
    }
];

const Certificates = () => {
    return (
        <div className="container mx-auto px-6 py-12 sm:py-24 lg:px-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    Achievements & <span className="text-gradient">Certifications</span>
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    Recognition of my commitment to continuous learning, software engineering, and professional development.
                </p>
            </motion.div>

            <div className="mt-16 grid gap-8 max-w-4xl mx-auto">
                {certs.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group flex flex-col gap-6 p-8 rounded-[2rem] border border-purple-100/80 dark:border-purple-500/20 bg-white dark:bg-[#130e26]/80 transition-all hover:border-purple-400/50 shadow-md sm:flex-row sm:items-center"
                    >
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 transition-transform group-hover:scale-110 border border-purple-300/30">
                            <Award size={32} />
                        </div>
                        <div className="flex-grow space-y-2">
                            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white">{cert.title}</h3>
                                <span className="w-fit rounded-lg bg-purple-50 dark:bg-purple-950/50 px-3 py-1 text-xs font-bold text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-500/30">
                                    {cert.date}
                                </span>
                            </div>
                            <p className="font-bold text-purple-600 dark:text-purple-400">{cert.issuer}</p>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">{cert.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
