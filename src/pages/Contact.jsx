import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Config ────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com/ and create a FREE account
// 2. Add an Email Service (Gmail → connect your betelhem453@gmail.com)
// 3. Create an Email Template with these variables:
//    {{from_name}}, {{from_email}}, {{message}}
// 4. Copy your Service ID, Template ID, and Public Key below
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
                    <p className="mt-6 text-xl text-slate-700 dark:text-slate-400 max-w-2xl mx-auto">
                        Have an idea or a project in mind? Let's build something extraordinary together.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {[
                            { icon: Mail, title: "Email", value: "betelhem453@gmail.com", color: "text-emerald-600 dark:text-primary", href: "mailto:betelhem453@gmail.com" },
                            { icon: Phone, title: "Phone", value: "0965008723", color: "text-teal-600 dark:text-secondary", href: "tel:+251965008723" },
                            { icon: MapPin, title: "Location", value: "Debre Berhan, Ethiopia", color: "text-emerald-400", href: null },
                            { icon: MessageCircle, title: "Telegram", value: "@Betel1221", color: "text-emerald-500", href: "https://t.me/Betel1221" }
                        ].map((info, i) => (
                            <div key={i} className="group flex gap-6 p-8 rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 transition-all hover:bg-emerald-50 dark:hover:bg-white/10 shadow-md">
                                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5 transition-transform group-hover:scale-110 ${info.color}`}>
                                    <info.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-500">{info.title}</h3>
                                    {info.href ? (
                                        <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                            className="mt-1 text-xl font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">{info.value}</p>
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
                        className="glass-card rounded-[2.5rem] p-8 sm:p-12 space-y-8 border border-slate-200 dark:border-white/10 shadow-2xl"
                    >
                        <div className="grid gap-8 sm:grid-cols-2">
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Name</label>
                                <input
                                    required
                                    name="from_name"
                                    className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-primary/50 transition-all placeholder:text-slate-400"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
                                <input
                                    required
                                    name="from_email"
                                    type="email"
                                    className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-primary/50 transition-all placeholder:text-slate-400"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                            <textarea
                                required
                                name="message"
                                rows={5}
                                className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-primary/50 transition-all placeholder:text-slate-400 resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`group relative w-full overflow-hidden rounded-2xl bg-primary py-5 font-black uppercase tracking-[0.2em] text-white transition-all shadow-2xl shadow-primary/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-95'}`}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </span>
                            <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-600 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
                        </button>

                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-4"
                            >
                                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">✓</div>
                                <p className="text-emerald-600 dark:text-emerald-400 font-bold">
                                    Message sent! I'll get back to you soon.
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
                                <p className="text-red-600 dark:text-red-400 font-bold">
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
