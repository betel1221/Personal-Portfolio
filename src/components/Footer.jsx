import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full border-t border-purple-100 dark:border-purple-500/20 py-12 bg-slate-50 dark:bg-[#090614]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-700 via-purple-600 to-violet-500 text-white shadow-lg shadow-purple-600/20 border border-purple-300/30">
                            <span className="text-xl font-black">B</span>
                        </div>
                        <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Betelhem Hiluf</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 font-medium text-center md:text-right">
                        © {new Date().getFullYear()} Betelhem Hiluf. Built with passion, intelligent systems & code.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
