import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="pt-20">
            <div className="container mx-auto px-6 py-8 sm:py-16 lg:px-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
            >
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed text-slate-700 dark:text-slate-400">
                            <p>
                                I am a dedicated 4th-year Software Engineering student with a strong passion for frontend development and building intelligent, data-driven applications.
                                Recently, I have been deeply immersed in AI-related projects, exploring how machine learning can enhance modern user experiences.
                            </p>
                            <p>
                                My journey in tech began with a curiosity for how things work on the web,
                                which has evolved into a focus on creating beautiful, performant, and intelligent web applications.
                                I'm committed to modular, accessible code and innovative problem-solving.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 grid gap-6 sm:grid-cols-2">
                        {[
                            {
                                title: "Technical Skills",
                                skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Git', 'Responsive Design', 'API Integration'],
                                iconClassName: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                            },
                            {
                                title: "Professional Skills",
                                skills: ['Content Creation', 'Communication', 'Teamwork', 'Problem Solving', 'Community Engagement', 'Adaptability'],
                                iconClassName: "bg-teal-500/15 text-teal-700 dark:text-teal-400"
                            }
                        ].map((section, idx) => (
                            <div key={idx} className="glass-card rounded-3xl p-8 space-y-6 border border-slate-200 dark:border-white/10">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{section.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {/* The instruction implies a change from 'section.skills.map(skill => ...)' to 'project.tech.map(t => ...)'
                                        and a new class structure for the tags.
                                        Since the data structure is still 'section.skills', I will apply the new tag styling to the existing skill mapping.
                                        The instruction also mentioned "improve tag contrast and border visibility",
                                        which the new class `text-[10px] font-black uppercase tracking-widest text-emerald-800 dark:text-primary px-2.5 py-1 bg-emerald-500/15 rounded-lg` achieves.
                                    */}
                                    {section.skills.map(skill => (
                                        <span key={skill} className="text-[10px] font-black uppercase tracking-widest text-emerald-800 dark:text-primary px-2.5 py-1 bg-emerald-500/15 rounded-lg">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
        </section>
    );
};

export default About;

