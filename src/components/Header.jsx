import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved ? saved === 'dark' : false; // Clean light mode default
    });
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 15);

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
            className={`fixed top-0 z-50 w-full transition-all duration-200 ${
                isScrolled
                    ? 'h-16 border-b border-purple-100/80 dark:border-purple-500/15 bg-[#faf9fd]/90 dark:bg-[#0b0914]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(124,58,237,0.03)]'
                    : 'h-20 bg-transparent'
            }`}
        >
            <div className="container mx-auto flex h-full items-center justify-between px-6 lg:px-12">
                {/* Brand Logo */}
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => scrollToSection('home')}
                        className="group flex items-center gap-3 text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-white shadow-sm transition-all duration-200 group-hover:scale-105 border border-purple-300/30">
                            <span className="text-base font-bold">B</span>
                        </div>
                        <span className="hidden sm:block text-slate-800 dark:text-slate-100 font-semibold tracking-tight text-base">
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
                            className={`relative text-sm font-medium transition-colors py-1 ${
                                activeSection === link.id
                                    ? 'text-purple-700 dark:text-purple-300 font-semibold'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300'
                            }`}
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-purple-600 dark:bg-purple-400 rounded-full"
                                />
                            )}
                        </button>
                    ))}

                    <div className="h-4 w-px bg-purple-200/80 dark:bg-purple-500/20 mx-1" />

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="rounded-xl p-2 hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-colors text-slate-600 dark:text-purple-200 hover:text-purple-700 dark:hover:text-purple-300 border border-transparent hover:border-purple-200/60 dark:hover:border-purple-500/30"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    {/* CTA Button */}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-700 text-white shadow-sm transition-all hover:scale-[1.02] active:scale-95"
                    >
                        <span>Let's Talk</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </nav>

                {/* Mobile Menu Controls */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="rounded-xl p-2 hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-colors text-slate-600 dark:text-purple-200"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/40 focus:outline-none"
                        aria-label="Open menu"
                    >
                        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
                        transition={{ duration: 0.2 }}
                        className="md:hidden border-b border-purple-100 dark:border-purple-500/20 bg-[#faf9fd]/98 dark:bg-[#0b0914]/98 backdrop-blur-lg shadow-xl"
                    >
                        <div className="space-y-1 px-6 pb-6 pt-3">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`block w-full text-left rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                                        activeSection === link.id
                                            ? 'bg-purple-100/60 dark:bg-purple-950/60 text-purple-800 dark:text-purple-200 font-semibold'
                                            : 'text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-700'
                                    }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                            <div className="pt-2">
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="w-full text-center py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-xs shadow-sm"
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
