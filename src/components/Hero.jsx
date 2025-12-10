const Hero = () => {
    return (
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 pt-20 pb-8 md:min-h-screen md:flex md:items-center md:pt-20 md:pb-0">
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="animate-slide-up text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3 md:mb-6">
                            Transforming{' '}
                            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block md:inline">
                                Spaces, Visuals
                            </span>{' '}
                            & Software Quality
                        </h1>

                        <p className="text-base sm:text-xl text-gray-600 mb-4 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Professional interior design, creative video editing, and comprehensive software testing services.
                            We bring excellence to every project.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-3 md:py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm md:text-base"
                            >
                                Get Started
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>

                            <a
                                href="https://wa.me/your-number"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 md:py-4 border-2 border-primary-600 text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300 text-sm md:text-base"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                WhatsApp Us
                            </a>
                        </div>

                        {/* Stats - Compact Row on Mobile */}
                        <div className="flex flex-row justify-center lg:justify-start gap-4 sm:gap-8 mt-6 md:mt-12 border-t border-gray-200 pt-6 md:border-none md:pt-0">
                            <div className="text-center lg:text-left">
                                <div className="text-2xl md:text-3xl font-bold text-primary-600">500+</div>
                                <div className="text-xs md:text-base text-gray-600">Projects</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl md:text-3xl font-bold text-primary-600">100+</div>
                                <div className="text-xs md:text-base text-gray-600">Clients</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl md:text-3xl font-bold text-primary-600">5+</div>
                                <div className="text-xs md:text-base text-gray-600">Years</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Hidden on very small mobile if desired, or simplified */}
                    <div className="relative animate-fade-in mt-8 lg:mt-0">
                        <div className="relative z-10 p-4">
                            {/* Service Cards Grid - Compact Grid */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-6">
                                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                                    <div className="text-3xl sm:text-5xl mb-2 sm:mb-3">🏠</div>
                                    <h3 className="font-bold text-sm sm:text-lg mb-1">Interior</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm hidden sm:block">3D models & planning</p>
                                </div>

                                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all sm:mt-8">
                                    <div className="text-3xl sm:text-5xl mb-2 sm:mb-3">🎬</div>
                                    <h3 className="font-bold text-sm sm:text-lg mb-1">Editing</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm hidden sm:block">Professional editing</p>
                                </div>

                                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all sm:-mt-4">
                                    <div className="text-3xl sm:text-5xl mb-2 sm:mb-3">💻</div>
                                    <h3 className="font-bold text-sm sm:text-lg mb-1">Testing</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm hidden sm:block">QA & API testing</p>
                                </div>

                                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                                    <div className="text-3xl sm:text-5xl mb-2 sm:mb-3">📸</div>
                                    <h3 className="font-bold text-sm sm:text-lg mb-1">Photos</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm hidden sm:block">Retouching & grading</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
