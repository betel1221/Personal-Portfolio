import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Config ────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "abc123XYZ"
// ───────────────────────────────────────────────────────────────────

const Contact = () => {
    const formRef = useRef(null);
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="pt-20">
            <div className="container mx-auto px-6 py-8 sm:py-16 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Have a project, research idea, or collaboration in mind? Let's connect and build something extraordinary.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-5"
                    >
                        {[
                            { icon: Mail, title: "Email", value: "betelhem453@gmail.com", href: "mailto:betelhem453@gmail.com" },
                            { icon: Phone, title: "Phone", value: "+251 965 008 723", href: "tel:+251965008723" },
                            { icon: MapPin, title: "Location", value: "Debre Berhan, Ethiopia", href: null },
                            { icon: MessageCircle, title: "Telegram", value: "@Betel1221", href: "https://t.me/Betel1221" }
                        ].map((info, i) => (
                            <div key={i} className="group flex gap-5 p-6 sm:p-7 rounded-[2rem] border border-purple-100/80 dark:border-purple-500/20 bg-white dark:bg-[#130e26]/80 transition-all hover:border-purple-400/50 hover:shadow-lg shadow-sm">
                                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 transition-transform group-hover:scale-110 border border-purple-200/50 dark:border-purple-500/30">
                                    <info.icon size={26} />
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-purple-300">{info.title}</h3>
                                    {info.href ? (
                                        <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                            className="mt-1 text-lg sm:text-xl font-bold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors block">
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="mt-1 text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{info.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.form
                        ref={formRef}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="glass-card rounded-[2.5rem] p-8 sm:p-10 space-y-6 border border-purple-100/80 dark:border-purple-500/20 bg-white dark:bg-[#130e26]/90 shadow-2xl shadow-purple-900/10"
                    >
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-purple-200 ml-1">Name</label>
                                <input
                                    required
                                    name="from_name"
                                    className="w-full rounded-2xl border border-purple-200/80 dark:border-purple-500/30 bg-slate-50 dark:bg-[#090614] px-5 py-3.5 text-slate-900 dark:text-white outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-purple-300/40 text-sm"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-purple-200 ml-1">Email</label>
                                <input
                                    required
                                    name="from_email"
                                    type="email"
                                    className="w-full rounded-2xl border border-purple-200/80 dark:border-purple-500/30 bg-slate-50 dark:bg-[#090614] px-5 py-3.5 text-slate-900 dark:text-white outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-purple-300/40 text-sm"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-purple-200 ml-1">Message</label>
                            <textarea
                                required
                                name="message"
                                rows={5}
                                className="w-full rounded-2xl border border-purple-200/80 dark:border-purple-500/30 bg-slate-50 dark:bg-[#090614] px-5 py-3.5 text-slate-900 dark:text-white outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-purple-300/40 resize-none text-sm"
                                placeholder="Tell me about your project or research..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`group relative w-full overflow-hidden rounded-2xl bg-purple-600 py-4 font-bold uppercase tracking-[0.15em] text-white transition-all shadow-xl shadow-purple-600/30 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple-700 hover:scale-[1.01] active:scale-95'}`}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </span>
                            <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-700 via-violet-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
                        </button>

                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 p-4"
                            >
                                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">✓</div>
                                <p className="text-purple-700 dark:text-purple-300 font-bold text-sm">
                                    Message sent successfully! I will get back to you soon.
                                </p>
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 rounded-2xl bg-red-500/10 border border-red-500/20 p-4"
                            >
                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">✕</div>
                                <p className="text-red-600 dark:text-red-400 font-bold text-sm">
                                    Failed to send. Please email me directly at betelhem453@gmail.com
                                </p>
                            </motion.div>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
