import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full border-t border-white/10 py-6">
            <div className="container mx-auto px-4 text-center text-sm text-foreground/60">
                <p>© {new Date().getFullYear()} Betelhem Hiluf. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
