import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full border-t border-slate-200 dark:border-white/10 py-12 bg-slate-50 dark:bg-slate-950/50">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 via-primary to-emerald-400 text-white shadow-lg border border-white/20">
                            <span className="text-xl font-black">B</span>
                        </div>
                        <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Betelhem Hiluf</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        © {new Date().getFullYear()} Betelhem Hiluf. Built with passion and code.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
