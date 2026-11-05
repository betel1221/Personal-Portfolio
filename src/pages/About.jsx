import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Wrench, Users } from 'lucide-react';

const About = () => {
    const skillCategories = [
        {
            title: "AI & Deep Learning",
            icon: Brain,
            skills: [
                'Transformers',
                'Attention Mechanisms',
                'Deep Learning',
                'Machine Learning',
                'CNN',
                'RNN',
                'LSTM',
                'GRU'
            ]
        },
        {
            title: "Programming & Web",
            icon: Code2,
            skills: [
                'Python',
                'JavaScript',
                'React',
                'Tailwind CSS',
                'HTML5 & CSS3',
                'Full-Stack Architecture'
            ]
        },
        {
            title: "Tools & Platforms",
            icon: Wrench,
            skills: [
                'PyTorch',
                'PostgreSQL',
                'Odoo 17',
                'n8n AI Integration',
                'Git & GitHub',
                'VS Code',
                'PyCharm'
            ]
        }
    ];

    return (
        <section id="about" className="pt-16 pb-12">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
                        {/* Narrative Column */}
                        <div className="lg:w-1/2 space-y-5">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                                    About <span className="text-purple-600 dark:text-purple-400">Me</span>
                                </h2>
                                <p className="mt-2 text-sm font-medium text-purple-700 dark:text-purple-300">
                                    Engineering Intelligence & Scalable Software
                                </p>
                            </div>

                            <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                                <p>
                                    I am a Software Engineering student passionate about Artificial Intelligence, Machine Learning, Deep Learning, and Software Development. I am deeply interested in technical research, exploring foundational architectures, and building intelligent software solutions.
                                </p>
                                <p>
                                    My current focus is developing my knowledge and practical experience in AI/ML, Natural Language Processing, Computer Vision, and intelligent software systems. I enjoy understanding how technologies work, researching technical concepts, building practical projects, and exploring ways to solve real-world problems through technology.
                                </p>
                            </div>

                            {/* Community Experience Card */}
                            <div className="rounded-2xl p-6 border border-purple-100/90 dark:border-purple-500/20 bg-white/90 dark:bg-[#141026]/80 shadow-sm space-y-2.5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
                                        <Users size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                                            Techtonic Tribe
                                        </h3>
                                        <p className="text-xs font-medium text-purple-700 dark:text-purple-300">
                                            Debre Birhan University • Community Experience
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                    Active technology community involvement, technical content creation, graphic design, event coordination, and promoting technology education.
                                </p>
                            </div>
                        </div>

                        {/* Skills Grid Column */}
                        <div className="lg:w-1/2 space-y-4">
                            {skillCategories.map((category, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-2xl p-6 space-y-3.5 border border-purple-100/90 dark:border-purple-500/15 bg-white/90 dark:bg-[#141026]/70 shadow-sm"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
                                            <category.icon size={18} />
                                        </div>
                                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                                            {category.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs font-medium px-2.5 py-1 rounded-lg bg-purple-50/80 dark:bg-purple-950/40 text-purple-800 dark:text-purple-200 border border-purple-200/50 dark:border-purple-500/20"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

