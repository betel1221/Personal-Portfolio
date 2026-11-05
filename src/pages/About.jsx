import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Wrench, Users, BookOpen } from 'lucide-react';

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
            ],
            accent: "from-purple-500 to-indigo-500"
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
            ],
            accent: "from-violet-500 to-purple-500"
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
            ],
            accent: "from-fuchsia-500 to-pink-500"
        }
    ];

    return (
        <section id="about" className="pt-20">
            <div className="container mx-auto px-6 py-8 sm:py-16 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto space-y-12"
                >
                    <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
                        {/* Narrative Column */}
                        <div className="lg:w-1/2 space-y-6">
                            <div>
                                <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                                    About <span className="text-gradient">Me</span>
                                </h2>
                                <p className="mt-3 text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                                    Engineering Intelligence & Scalable Software
                                </p>
                            </div>

                            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-200">
                                <p>
                                    I am a Software Engineering student passionate about Artificial Intelligence, Machine Learning, Deep Learning, and Software Development. I am deeply interested in technical research, exploring foundational architectures, and building intelligent software solutions.
                                </p>
                                <p>
                                    My current focus is developing my knowledge and practical experience in AI/ML, Natural Language Processing, Computer Vision, and intelligent software systems. I enjoy understanding how technologies work, researching technical concepts, building practical projects, and exploring ways to solve real-world problems through technology.
                                </p>
                            </div>

                            {/* Community Experience Card */}
                            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-purple-200/80 dark:border-purple-500/20 hover:border-purple-400/50 transition-all space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400">
                                        <Users size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                            Techtonic Tribe
                                        </h3>
                                        <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">
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
                        <div className="lg:w-1/2 space-y-6">
                            {skillCategories.map((category, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="glass-card rounded-3xl p-6 sm:p-7 space-y-4 border border-purple-100/80 dark:border-purple-500/20 hover:border-purple-400/40 transition-all shadow-sm"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400">
                                            <category.icon size={20} />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                            {category.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-200 border border-purple-200/70 dark:border-purple-500/30 transition-all hover:scale-105"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

