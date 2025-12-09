const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 pt-20">
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="animate-slide-up">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            Transforming{' '}
                            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Spaces, Visuals
                            </span>{' '}
                            & Software Quality
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Professional interior design, creative video editing, and comprehensive software testing services.
                            We bring excellence to every project.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                WhatsApp Us
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                            <div>
                                <div className="text-3xl font-bold text-primary-600">500+</div>
                                <div className="text-gray-600 mt-1">Projects</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600">100+</div>
                                <div className="text-gray-600 mt-1">Clients</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-600">5+</div>
                                <div className="text-gray-600 mt-1">Years</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative animate-fade-in">
                        <div className="relative z-10">
                            {/* Service Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                                    <div className="text-5xl mb-3">🏠</div>
                                    <h3 className="font-bold text-lg mb-2">Interior Design</h3>
                                    <p className="text-gray-600 text-sm">3D models & planning</p>
                                </div>

                                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 mt-0 sm:mt-8">
                                    <div className="text-5xl mb-3">🎬</div>
                                    <h3 className="font-bold text-lg mb-2">Video Editing</h3>
                                    <p className="text-gray-600 text-sm">Professional editing</p>
                                </div>

                                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 mt-4 sm:-mt-4">
                                    <div className="text-5xl mb-3">💻</div>
                                    <h3 className="font-bold text-lg mb-2">Software Testing</h3>
                                    <p className="text-gray-600 text-sm">QA & API testing</p>
                                </div>

                                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 mt-4">
                                    <div className="text-5xl mb-3">📸</div>
                                    <h3 className="font-bold text-lg mb-2">Photo Editing</h3>
                                    <p className="text-gray-600 text-sm">Retouching & grading</p>
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
