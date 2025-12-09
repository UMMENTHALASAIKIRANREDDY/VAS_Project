const SoftwareServices = () => {
    const services = [
        { icon: '🔍', title: 'Manual Testing', description: 'Comprehensive manual testing services', color: 'from-teal-500 to-cyan-600' },
        { icon: '🔗', title: 'API Testing', description: 'Thorough API reliability testing', color: 'from-cyan-500 to-teal-600' },
        { icon: '🤖', title: 'Automation Testing', description: 'Efficient automated test suites', color: 'from-teal-600 to-cyan-700' },
        { icon: '🐛', title: 'Bug Reporting', description: 'Detailed bug tracking and docs', color: 'from-teal-600 to-cyan-700' },
        { icon: '⚡', title: 'Performance Testing', description: 'Load and stress testing', color: 'from-cyan-600 to-teal-700' },
        { icon: '📱', title: 'Mobile Testing', description: 'iOS and Android app testing', color: 'from-teal-600 to-cyan-700' }
    ];

    const processSteps = [
        { num: '01', title: 'Requirement Analysis', desc: 'Understanding your testing needs', icon: '📋' },
        { num: '02', title: 'Test Planning', desc: 'Creating comprehensive strategies', icon: '📝' },
        { num: '03', title: 'Test Execution', desc: 'Running tests systematically', icon: '⚙️' },
        { num: '04', title: 'Reporting', desc: 'Detailed reports and insights', icon: '📊' }
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section with Side Design */}
            <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-teal-50 to-cyan-100 overflow-hidden pt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <div>
                            <div className="inline-block mb-6" data-aos="fade-up">
                                <span className="px-6 py-3 bg-white/90 backdrop-blur-sm text-teal-700 rounded-full text-sm font-semibold uppercase tracking-wide shadow-lg">
                                    Software Testing Services
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
                                Ensuring Software Quality
                            </h1>

                            <p className="text-xl text-gray-700 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                                Comprehensive software testing services to ensure your applications are bug-free, performant, and ready for production.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8" data-aos="fade-up" data-aos-delay="300">
                                <a
                                    href="/contact"
                                    className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    Get Started
                                </a>
                                <button className="px-8 py-4 bg-white border-2 border-teal-600 text-teal-600 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-300">
                                    View Services
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="400">
                                <div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">99%</div>
                                    <div className="text-gray-600">Bug Detection</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">500+</div>
                                    <div className="text-gray-600">Tests Run</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">24/7</div>
                                    <div className="text-gray-600">Support</div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Visual Design */}
                        <div className="relative" data-aos="fade-left">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 aspect-square flex items-center justify-center">
                                    <div className="text-7xl">💻</div>
                                </div>

                                <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 mt-0 sm:mt-12 aspect-square flex items-center justify-center">
                                    <div className="text-7xl">🔧</div>
                                </div>

                                <div className="bg-gradient-to-br from-cyan-400 to-teal-500 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 mt-4 sm:-mt-12 aspect-square flex items-center justify-center">
                                    <div className="text-7xl">⚡</div>
                                </div>

                                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 mt-4 sm:mt-0 aspect-square flex items-center justify-center">
                                    <div className="text-7xl">✅</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Staggered Grid */}
            <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-teal-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900" data-aos="fade-up">
                            Testing Services
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                            Comprehensive QA solutions for all your software needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`group bg-white rounded-2xl p-8 border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${index % 2 === 1 ? 'md:mt-8' : ''
                                    }`}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <div className={`h-1 w-12 bg-gradient-to-r ${service.color} rounded-full group-hover:w-full transition-all`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900" data-aos="fade-up">
                            Our QA Process
                        </h2>
                        <p className="text-gray-600 text-lg" data-aos="fade-up" data-aos-delay="100">
                            Systematic approach to ensure quality
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-300 transform -translate-y-1/2"></div>

                        <div className="grid md:grid-cols-4 gap-6 relative">
                            {processSteps.map((step, idx) => (
                                <div key={idx} className="relative" data-aos="fade-up" data-aos-delay={idx * 100}>
                                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-4 border-teal-200 hover:border-teal-400">
                                        <div className="text-7xl mb-4 text-center">{step.icon}</div>
                                        <div className="text-5xl font-bold text-teal-200 mb-3 text-center">{step.num}</div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">{step.title}</h3>
                                        <p className="text-gray-600 text-sm text-center leading-relaxed">{step.desc}</p>
                                    </div>

                                    {/* Arrow for desktop */}
                                    {idx < 3 && (
                                        <div className="hidden md:block absolute top-1/3 -right-3 transform -translate-y-1/2 z-10">
                                            <svg className="w-6 h-6 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-teal-600 to-cyan-600">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-7xl mb-6" data-aos="zoom-in">🚀</div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up">
                        Launch With Confidence
                    </h2>
                    <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Ensure your software is production-ready with our comprehensive quality assurance services.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-10 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Start Testing Today
                    </a>
                </div>
            </section>
        </div>
    );
};

export default SoftwareServices;
