import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved ? saved === 'dark' : true;
    });
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Accurate Scroll Spy with offset
            const sections = ['home', 'about', 'works', 'contact'];
            const scrollPos = window.scrollY + 160;

            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.offsetTop <= scrollPos) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'works' },
        { name: 'Contact', id: 'contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                isScrolled
                    ? 'h-16 glass-card border-b border-purple-200/60 dark:border-purple-500/20 bg-white/85 dark:bg-[#090614]/85 backdrop-blur-xl shadow-sm'
                    : 'h-20 bg-transparent'
            }`}
        >
            <div className="container mx-auto flex h-full items-center justify-between px-6 lg:px-12">
                {/* Brand Logo */}
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => scrollToSection('home')}
                        className="group flex items-center gap-3 text-xl font-bold tracking-tight text-slate-900 dark:text-white"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-700 via-purple-600 to-violet-500 text-white shadow-lg shadow-purple-600/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-purple-600/50 border border-purple-300/30">
                            <span className="text-xl font-black">B</span>
                        </div>
                        <span className="hidden sm:block text-slate-900 dark:text-white font-black tracking-tight text-lg">
                            Betelhem Hiluf
                        </span>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:items-center md:gap-7">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`relative text-sm font-semibold transition-colors py-1 ${
                                activeSection === link.id
                                    ? 'text-purple-600 dark:text-purple-300'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300'
                            }`}
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-purple-600 to-violet-500 rounded-full"
                                />
                            )}
                        </button>
                    ))}

                    <div className="h-4 w-px bg-purple-200 dark:bg-purple-500/20 mx-1" />

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="rounded-full p-2.5 hover:bg-purple-500/10 transition-colors text-slate-700 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-300"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
                    </button>

                    {/* CTA Button */}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-600/25 transition-all hover:scale-105 active:scale-95"
                    >
                        <span>Let's Talk</span>
                        <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </nav>

                {/* Mobile Menu Controls */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="rounded-full p-2 hover:bg-purple-500/10 transition-colors text-slate-700 dark:text-purple-200"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex items-center justify-center rounded-xl p-2 text-slate-900 dark:text-white hover:bg-purple-500/10 focus:outline-none"
                        aria-label="Open menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden glass-card overflow-hidden border-b border-purple-200/80 dark:border-purple-500/20 bg-white/95 dark:bg-[#090614]/95 shadow-2xl"
                    >
                        <div className="space-y-1.5 px-6 pb-6 pt-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`block w-full text-left rounded-2xl px-4 py-3 text-base font-semibold transition-all ${
                                        activeSection === link.id
                                            ? 'bg-purple-500/15 text-purple-700 dark:text-purple-300 font-bold'
                                            : 'text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600'
                                    }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                            <div className="pt-2">
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="w-full text-center py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-lg shadow-purple-600/30"
                                >
                                    Let's Talk
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
