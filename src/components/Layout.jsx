import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-background-dark font-sans text-slate-200">
            {/* Background Mesh */}
            <div className="fixed inset-0 z-0 animated-mesh opacity-30 pointer-events-none" />

            <Header />
            <motion.main
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 pt-20"
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
};

export default Layout;
