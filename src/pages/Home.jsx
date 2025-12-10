import { Link } from 'react-router-dom';

const Home = () => {
    const services = [
        {
            title: 'Interior Design',
            icon: '🏠',
            description: '3D models, modular kitchen, layout planning',
            link: '/interior-design',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Video Editing',
            icon: '🎬',
            description: 'Photo retouching, event editing, promo videos',
            link: '/video-editing',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Software Services',
            icon: '💻',
            description: 'Manual testing, API testing, QA',
            link: '/software-services',
            gradient: 'from-green-500 to-emerald-500'
        },
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative min-h-[auto] md:min-h-screen flex flex-col md:block md:flex-row items-center bg-white overflow-hidden pb-8 md:pt-0 md:pb-0">
                {/* Curved Blob Background - Hidden on mobile or adjusted */}
                <div className="absolute right-0 top-0 w-full md:w-[55%] h-full opacity-10 md:opacity-100 pointer-events-none">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                            d="M 30,0 Q 20,50 30,100 L 100,100 L 100,0 Z"
                            fill="url(#blueGradient)"
                        />
                        <defs>
                            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#0EA5E9', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#0284C7', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Floating Icons - Hidden on small mobile to prevent clutter */}
                    <div className="absolute inset-0 flex items-center justify-center hidden sm:flex">
                        <div className="grid grid-cols-2 gap-12 p-12">
                            <div className="text-white/30 text-8xl animate-float" data-aos="fade-left" data-aos-delay="200">🏢</div>
                            <div className="text-white/30 text-8xl animate-float" data-aos="fade-left" data-aos-delay="400" style={{ animationDelay: '0.5s' }}>☁️</div>
                            <div className="text-white/30 text-8xl animate-float" data-aos="fade-left" data-aos-delay="600" style={{ animationDelay: '1s' }}>💻</div>
                            <div className="text-white/30 text-8xl animate-float" data-aos="fade-left" data-aos-delay="800" style={{ animationDelay: '1.5s' }}>🎬</div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full md:flex md:items-center md:h-screen">
                    <div className="max-w-2xl text-center md:text-left pt-4 md:pt-0">
                        <div className="inline-block mb-4 md:mb-6" data-aos="fade-up">
                            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs md:text-sm font-medium uppercase tracking-wide">
                                Started our journey in 2025
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
                            <span className="text-gray-900">Transforming</span>{' '}
                            <span className="text-sky-600 block md:inline">Spaces, Visuals</span>{' '}
                            <span className="text-gray-900">&</span>{' '}
                            <span className="text-gray-900 block md:inline">Software Quality</span>
                        </h1>

                        <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0" data-aos="fade-up" data-aos-delay="200">
                            Securely deliver exceptional results in interior design, image & video editing,
                            and comprehensive software testing with our professional solutions.
                        </p>

                        <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center md:justify-start">
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                Get Started
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16">
                            <div data-aos="zoom-in" data-aos-delay="400">
                                <div className="text-2xl md:text-5xl font-bold text-sky-600 mb-1 md:mb-2">2+</div>
                                <div className="text-xs md:text-base text-gray-600">Happy Customers</div>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="500">
                                <div className="text-2xl md:text-5xl font-bold text-sky-600 mb-1 md:mb-2">3</div>
                                <div className="text-xs md:text-base text-gray-600">Services</div>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="600">
                                <div className="text-2xl md:text-5xl font-bold text-sky-600 mb-1 md:mb-2">2019</div>
                                <div className="text-xs md:text-base text-gray-600">Founded</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900" data-aos="fade-up">
                            Our Services
                        </h2>
                        <p className="text-gray-600 text-lg" data-aos="fade-up" data-aos-delay="100">
                            Comprehensive solutions tailored to your needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                to={service.link}
                                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 mb-6">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-sky-600 font-semibold">
                                    Learn More
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                                Why Choose <span className="text-sky-600">VAS</span>?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We combine creativity, technology, and expertise to deliver exceptional results.
                                Our team is dedicated to transforming your vision into reality with precision and care.
                            </p>

                            <div className="space-y-4">
                                {['Professional Excellence', 'On-Time Delivery', 'Customer Satisfaction', 'Innovative Solutions'].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3" data-aos="fade-up" data-aos-delay={idx * 100}>
                                        <div className="flex-shrink-0 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative" data-aos="fade-left">
                            <div className="aspect-square bg-gradient-to-br from-sky-100 to-indigo-100 rounded-3xl p-12 flex items-center justify-center shadow-xl">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🎯</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                                    <p className="text-gray-600">Delivering excellence in every project we undertake</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
