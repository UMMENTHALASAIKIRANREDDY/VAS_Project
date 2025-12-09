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
                hoverColor: 'hover:text-violet-600',
                activeUnderline: 'bg-violet-600',
                buttonGradient: 'from-violet-500 to-purple-600',
                buttonHover: 'hover:shadow-violet-500/50'
            };
        } else if (path.includes('video-editing')) {
            return {
                logoGradient: 'from-orange-600 to-red-600',
                activeColor: 'text-orange-600',
                hoverColor: 'hover:text-orange-600',
                activeUnderline: 'bg-orange-600',
                buttonGradient: 'from-orange-500 to-red-600',
                buttonHover: 'hover:shadow-orange-500/50'
            };
        } else if (path.includes('software-services')) {
            return {
                logoGradient: 'from-teal-600 to-cyan-600',
                activeColor: 'text-teal-600',
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

                    {/* Dynamic CTA Button */}
                    <div className="hidden lg:block">
                        <Link
                            to="/contact"
                            className={`px-6 py-2.5 bg-gradient-to-r ${theme.buttonGradient} text-white rounded-lg font-semibold hover:shadow-lg ${theme.buttonHover} hover:scale-105 transition-all duration-300`}
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 animate-slide-down">
                        <div className="flex flex-col space-y-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${isActive(item.path)
                                        ? `${theme.activeColor} bg-gray-50`
                                        : `text-gray-700 ${theme.hoverColor} hover:bg-gray-50`
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className={`block mt-4 text-center px-6 py-3 bg-gradient-to-r ${theme.buttonGradient} text-white rounded-lg font-semibold shadow-md`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
