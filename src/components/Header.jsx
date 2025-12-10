import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Define theme colors for each route
    const getTheme = () => {
        const path = location.pathname;

        if (path.includes('interior-design')) {
            return {
                logoGradient: 'from-violet-600 to-purple-600',
                activeColor: 'text-violet-600',
                activeBg: 'bg-violet-50',
                hoverColor: 'hover:text-violet-600',
                activeUnderline: 'bg-violet-600',
                buttonGradient: 'from-violet-500 to-purple-600',
                buttonHover: 'hover:shadow-violet-500/50'
            };
        } else if (path.includes('video-editing')) {
            return {
                logoGradient: 'from-orange-600 to-red-600',
                activeColor: 'text-orange-600',
                activeBg: 'bg-orange-50',
                hoverColor: 'hover:text-orange-600',
                activeUnderline: 'bg-orange-600',
                buttonGradient: 'from-orange-500 to-red-600',
                buttonHover: 'hover:shadow-orange-500/50'
            };
        } else if (path.includes('software-services')) {
            return {
                logoGradient: 'from-teal-600 to-cyan-600',
                activeColor: 'text-teal-600',
                activeBg: 'bg-teal-50',
                hoverColor: 'hover:text-teal-600',
                activeUnderline: 'bg-teal-600',
                buttonGradient: 'from-teal-500 to-cyan-600',
                buttonHover: 'hover:shadow-teal-500/50'
            };
        }

        // Default theme (Home and other pages)
        return {
            logoGradient: 'from-blue-600 to-indigo-600',
            activeColor: 'text-blue-600',
            activeBg: 'bg-blue-50',
            hoverColor: 'hover:text-blue-600',
            activeUnderline: 'bg-blue-600',
            buttonGradient: 'from-blue-500 to-indigo-600',
            buttonHover: 'hover:shadow-blue-500/50'
        };
    };

    const theme = getTheme();

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Interior Design', path: '/interior-design' },
        { name: 'Video Editing', path: '/video-editing' },
        { name: 'Software Services', path: '/software-services' },
        { name: 'Clients', path: '/clients' },
        { name: 'Contact', path: '/contact' }
    ];

    const isActive = (path) => location.pathname === path;

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-white border-b border-gray-100'
            }`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
                <div className="flex items-center justify-between">
                    {/* Dynamic Logo */}
                    <Link
                        to="/"
                        className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${theme.logoGradient} bg-clip-text text-transparent transition-all duration-300 hover:scale-105`}
                    >
                        VAS
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`relative font-medium transition-colors ${isActive(item.path)
                                    ? theme.activeColor
                                    : `text-gray-700 ${theme.hoverColor}`
                                    }`}
                            >
                                {item.name}
                                {isActive(item.path) && (
                                    <span className={`absolute bottom-[-8px] left-0 right-0 h-0.5 ${theme.activeUnderline} rounded-full`}></span>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden lg:block">
                        <Link
                            to="/contact"
                            className={`px-6 py-2.5 bg-gradient-to-r ${theme.buttonGradient} text-white rounded-lg font-semibold hover:shadow-lg ${theme.buttonHover} hover:scale-105 transition-all duration-300`}
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Hamburger Only */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 z-[100] lg:hidden">
                        {/* Backdrop with blur */}
                        <div
                            className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
                            onClick={() => setIsMenuOpen(false)}
                        ></div>

                        {/* Menu Card */}
                        <div className="absolute top-4 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 animate-slide-down border border-gray-100">
                            {/* Header inside Menu */}
                            <div className="flex items-center justify-between mb-8">
                                <span className={`text-2xl font-bold bg-gradient-to-r ${theme.logoGradient} bg-clip-text text-transparent`}>
                                    VAS
                                </span>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors border border-gray-200"
                                >
                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Links */}
                            <div className="flex flex-col space-y-3">
                                {menuItems.map((item) => (
                                    <div key={item.name} className="group">
                                        <Link
                                            to={item.path}
                                            className={`block p-3 rounded-xl font-medium transition-all duration-200 ${isActive(item.path)
                                                ? `${theme.activeColor} ${theme.activeBg}`
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:pl-4'
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </div>
                                ))}

                                <div className="pt-6 mt-2 border-t border-gray-100">
                                    <Link
                                        to="/contact"
                                        className={`block w-full text-center py-3.5 px-6 bg-gradient-to-r ${theme.buttonGradient} text-white rounded-xl font-bold text-lg shadow-lg ${theme.buttonHover} active:scale-95 transition-all duration-300`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
