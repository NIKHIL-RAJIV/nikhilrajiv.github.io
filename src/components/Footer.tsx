const Footer = () => {
    return (
        <footer className="py-8 bg-slate-950 text-center text-slate-500 text-sm border-t border-slate-900">
            <p>&copy; {new Date().getFullYear()} Nikhil Rajiv. All rights reserved.</p>
            <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion</p>
        </footer>
    );
};

export default Footer;

