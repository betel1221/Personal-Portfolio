import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Added framer-motion imports

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

            // Scroll Spy Logic
            const sections = ['home', 'about', 'works', 'contact'];
            const currentSection = sections.find(id => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) setActiveSection(currentSection);
        };
        window.addEventListener('scroll', handleScroll);
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
        { name: 'Works', id: 'works' },
        { name: 'Contact', id: 'contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'h-16 glass-card border-b border-primary/20' : 'h-20 bg-transparent'}`}>
            <div className="container mx-auto flex h-full items-center justify-between px-6 lg:px-12">
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => scrollToSection('home')}
                        className="group flex items-center gap-3 text-xl font-bold tracking-tight text-slate-900 dark:text-white"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 via-primary to-emerald-400 text-white shadow-lg shadow-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/50 border border-white/20">
                            <span className="text-xl font-black">B</span>
                        </div>
                        <span className="hidden sm:block text-slate-900 dark:text-white font-black tracking-tight">Betelhem Hiluf</span>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:items-center md:gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`relative text-sm font-medium transition-colors hover:text-emerald-500 ${activeSection === link.id ? 'text-primary' : 'text-slate-600 dark:text-slate-400'
                                }`}
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                                />
                            )}
                        </button>
                    ))}
                    <div className="h-4 w-px bg-slate-200 dark:bg-white/10 mx-2" />
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="rounded-full p-2.5 hover:bg-primary/10 transition-colors text-slate-600 dark:text-slate-400 hover:text-emerald-500"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </nav>

                {/* Mobile menu button */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="rounded-full p-2 hover:bg-primary/10 transition-colors text-slate-600 dark:text-slate-400"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex items-center justify-center rounded-xl p-2 text-slate-900 dark:text-white hover:bg-primary/10 focus:outline-none"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-card overflow-hidden border-t border-primary/10"
                    >
                        <div className="space-y-1 px-4 pb-6 pt-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`block w-full text-left rounded-xl px-4 py-3 text-base font-medium transition-colors ${activeSection === link.id
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-emerald-500'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
