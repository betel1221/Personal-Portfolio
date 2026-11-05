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
        <section className="py-10 sm:py-14">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 dark:bg-purple-950/60 text-purple-800 dark:text-purple-200 text-xs font-medium border border-purple-200 dark:border-purple-800/40 mb-3">
                        Verified Credentials
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Achievements & <span className="text-gradient">Certifications</span>
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Recognition of my commitment to continuous learning, software engineering, and professional development.
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-6 max-w-3xl mx-auto">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="group flex flex-col gap-5 p-6 rounded-2xl border border-purple-200/70 dark:border-purple-500/20 bg-white dark:bg-[#110d22] transition-all hover:border-purple-300 dark:hover:border-purple-500/40 shadow-sm sm:flex-row sm:items-center"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 border border-purple-200/60 dark:border-purple-500/30">
                                <Award size={24} />
                            </div>
                            <div className="flex-grow space-y-1.5">
                                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cert.title}</h3>
                                    <span className="w-fit rounded-md bg-purple-50 dark:bg-purple-950/50 px-2.5 py-0.5 text-xs font-medium text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-500/30">
                                        {cert.date}
                                    </span>
                                </div>
                                <p className="text-xs font-medium text-purple-700 dark:text-purple-300">{cert.issuer}</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{cert.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
