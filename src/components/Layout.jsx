import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-[#faf9fd] dark:bg-[#0b0914] font-sans text-slate-800 dark:text-slate-100 transition-colors duration-200 flex flex-col justify-between">
            {/* Background Mesh */}
            <div className="fixed inset-0 z-0 animated-mesh opacity-70 dark:opacity-30 pointer-events-none" />

            <Header />
            <main className="relative z-10 pt-20 sm:pt-24 flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
