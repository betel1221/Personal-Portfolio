import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const certs = [
    {
        title: "Full Stack Web Development",
        issuer: "Coursera / Meta",
        date: "2024",
        description: "Comprehensive program covering frontend and backend technologies."
    },
    {
        title: "Software Engineering Fundamentals",
        issuer: "Debre Berhan University",
        date: "2023",
        description: "Core concepts of software development and system design."
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
                <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Recognition of my commitment to continuous learning and professional development.
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
                        className="group flex flex-col gap-6 p-8 rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 transition-all hover:bg-emerald-50 shadow-md dark:hover:bg-white/10 sm:flex-row sm:items-center"
                    >
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-primary transition-transform group-hover:scale-110">
                            <Award size={32} />
                        </div>
                        <div className="flex-grow space-y-2">
                            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white">{cert.title}</h3>
                                <span className="w-fit rounded-lg bg-slate-100 dark:bg-white/5 px-3 py-1 text-xs font-bold text-slate-500 underline decoration-primary decoration-2 underline-offset-4">
                                    {cert.date}
                                </span>
                            </div>
                            <p className="font-bold text-emerald-600 dark:text-primary">{cert.issuer}</p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{cert.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
