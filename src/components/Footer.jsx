import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full border-t border-purple-200/60 dark:border-purple-500/20 py-8 bg-[#faf9fd] dark:bg-[#090614]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-600 text-white shadow-sm font-semibold text-sm">
                            <span>B</span>
                        </div>
                        <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">Betelhem Hiluf</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 text-center md:text-right">
                        © {new Date().getFullYear()} Betelhem Hiluf. Built with modern web standards and intelligent software design.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
