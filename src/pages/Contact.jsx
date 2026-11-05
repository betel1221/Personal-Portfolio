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
        <section id="contact" className="py-10 sm:py-14">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Get In <span className="text-purple-600 dark:text-purple-400">Touch</span>
                    </h2>
                    <p className="mt-2 text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-normal">
                        Have a project, research idea, or collaboration in mind? Let's connect and build something impactful.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto items-start">
                    <div className="space-y-4">
                        {[
                            { icon: Mail, title: "Email", value: "betelhem453@gmail.com", href: "mailto:betelhem453@gmail.com" },
                            { icon: Phone, title: "Phone", value: "+251 965 008 723", href: "tel:+251965008723" },
                            { icon: MapPin, title: "Location", value: "Debre Berhan, Ethiopia", href: null },
                            { icon: MessageCircle, title: "Telegram", value: "@Betel1221", href: "https://t.me/Betel1221" }
                        ].map((info, i) => (
                            <div key={i} className="group flex gap-4 p-5 rounded-2xl border border-purple-100/90 dark:border-purple-500/15 bg-white/90 dark:bg-[#141026]/80 shadow-sm transition-all hover:border-purple-300">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border border-purple-200/50 dark:border-purple-500/20">
                                    <info.icon size={20} />
                                </div>
                                <div>
                                    <h3 className="text-xs font-medium text-slate-500 dark:text-purple-300">{info.title}</h3>
                                    {info.href ? (
                                        <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                            className="mt-0.5 text-base font-semibold text-slate-900 dark:text-white hover:text-purple-700 dark:hover:text-purple-300 transition-colors block">
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="mt-0.5 text-base font-semibold text-slate-900 dark:text-white">{info.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="rounded-2xl p-6 sm:p-8 space-y-4 border border-purple-100/90 dark:border-purple-500/15 bg-white/90 dark:bg-[#141026]/90 shadow-sm"
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-slate-700 dark:text-purple-200 ml-1">Name</label>
                                <input
                                    required
                                    name="from_name"
                                    className="w-full rounded-xl border border-purple-200/70 dark:border-purple-500/20 bg-white dark:bg-[#0b0914] px-4 py-2.5 text-slate-900 dark:text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all placeholder:text-slate-400 dark:placeholder:text-purple-300/40 text-sm"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-slate-700 dark:text-purple-200 ml-1">Email</label>
                                <input
                                    required
                                    name="from_email"
                                    type="email"
                                    className="w-full rounded-xl border border-purple-200/70 dark:border-purple-500/20 bg-white dark:bg-[#0b0914] px-4 py-2.5 text-slate-900 dark:text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all placeholder:text-slate-400 dark:placeholder:text-purple-300/40 text-sm"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-slate-700 dark:text-purple-200 ml-1">Message</label>
                            <textarea
                                required
                                name="message"
                                rows={4}
                                className="w-full rounded-xl border border-purple-200/70 dark:border-purple-500/20 bg-white dark:bg-[#0b0914] px-4 py-2.5 text-slate-900 dark:text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all placeholder:text-slate-400 dark:placeholder:text-purple-300/40 resize-none text-sm"
                                placeholder="Tell me about your project or research..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full rounded-xl bg-purple-600 hover:bg-purple-700 py-3 font-medium text-white transition-all text-sm shadow-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.01] active:scale-95'}`}
                        >
                            <span className="flex items-center justify-center gap-2">
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && <Send size={15} />}
                            </span>
                        </button>

                        {status === 'success' && (
                            <div className="flex items-center gap-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 p-3 text-purple-800 dark:text-purple-200 text-xs font-medium">
                                <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs">✓</span>
                                <span>Message sent successfully! I will get back to you soon.</span>
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="flex items-center gap-2.5 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-500/30 p-3 text-red-700 dark:text-red-300 text-xs font-medium">
                                <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs">✕</span>
                                <span>Failed to send. Please email me directly at betelhem453@gmail.com</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
