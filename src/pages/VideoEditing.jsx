import { Link } from 'react-router-dom';

const VideoEditing = () => {
    const services = [
        { icon: '📸', title: 'Photo Retouching', description: 'Professional photo editing and retouching', size: 'large' },
        { icon: '🎥', title: 'Event Videos', description: 'Cinematic event coverage and editing', size: 'medium' },
        { icon: '🎬', title: 'Promotional Videos', description: 'Engaging promotional content', size: 'medium' },
        { icon: '🌈', title: 'Color Grading', description: 'Professional color correction', size: 'small' },
        { icon: '✨', title: 'Motion Graphics', description: 'Eye-catching animations', size: 'small' },
        { icon: '🎵', title: 'Audio Enhancement', description: 'Crystal-clear audio mixing', size: 'medium' }
    ];

    const stats = [
        { number: '500+', label: 'Videos Edited', icon: '🎥' },
        { number: '1000+', label: 'Photos Retouched', icon: '📸' },
        { number: '100%', label: 'Client Satisfaction', icon: '⭐' }
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section with Side Design */}
            <section className="relative md:min-h-[80vh] flex bg-gradient-to-br from-orange-50 to-red-100 overflow-hidden pt-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <div>
                            <div className="inline-block mb-6" data-aos="fade-up">
                                <span className="px-6 py-3 bg-white/90 backdrop-blur-sm text-orange-700 rounded-full text-sm font-semibold uppercase tracking-wide shadow-lg">
                                    Video & Photo Editing
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
                                Elevate Your Visual Content
                            </h1>

                            <p className="text-xl text-gray-700 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                                From stunning photo retouching to cinematic video production, we transform your raw content into captivating visual stories that engage and inspire.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8" data-aos="fade-up" data-aos-delay="300">
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    Get Started
                                </Link>
                                <button
                                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 bg-white border-2 border-orange-600 text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300"
                                >
                                    View Portfolio
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="400">
                                <div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">500+</div>
                                    <div className="text-gray-600">Videos Edited</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">1000+</div>
                                    <div className="text-gray-600">Photos Done</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">100%</div>
                                    <div className="text-gray-600">Satisfaction</div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Visual Design */}
                        <div className="relative" data-aos="fade-left">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="group bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 aspect-square flex flex-col items-center justify-center relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-white transition-all duration-500 ease-out z-0"></div>
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">🎥</div>
                                        <h3 className="font-bold text-lg text-white group-hover:text-orange-900 transition-colors">Video Editing</h3>
                                    </div>
                                </div>

                                <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 mt-0 sm:mt-12 aspect-square flex flex-col items-center justify-center relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-br from-orange-500 to-red-600 transition-all duration-500 ease-out z-0"></div>
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">📸</div>
                                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-white transition-colors">Photo Retouching</h3>
                                    </div>
                                </div>

                                <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 mt-4 sm:-mt-12 aspect-square flex flex-col items-center justify-center relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-br from-orange-500 to-red-600 transition-all duration-500 ease-out z-0"></div>
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">🎬</div>
                                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-white transition-colors">Production</h3>
                                    </div>
                                </div>

                                <div className="group bg-gradient-to-br from-red-400 to-orange-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 mt-4 sm:mt-0 aspect-square flex flex-col items-center justify-center relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-white transition-all duration-500 ease-out z-0"></div>
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">✨</div>
                                        <h3 className="font-bold text-lg text-white group-hover:text-red-900 transition-colors">Effects</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Bento Box Layout */}
            <section id="services" className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-orange-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900" data-aos="fade-up">
                            Our Editing Services
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                            Comprehensive video and photo editing solutions for every need
                        </p>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="grid md:grid-cols-4 md:grid-rows-3 gap-6">
                        {/* Large Card - Photo Retouching */}
                        <div
                            className="md:col-span-2 md:row-span-2 group relative bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-10 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                            data-aos="fade-up"
                        >
                            <div className="absolute top-0 right-0 text-9xl opacity-10">📸</div>
                            <div className="relative z-10">
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">📸</div>
                                <h3 className="text-3xl font-bold mb-4">Photo Retouching</h3>
                                <p className="text-orange-100 text-lg mb-6">Professional photo editing and enhancement for stunning visuals</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">Portrait Enhancement</span>
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">Background Removal</span>
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">Color Correction</span>
                                </div>
                            </div>
                        </div>

                        {/* Medium Cards */}
                        <div className="md:col-span-2 group bg-white border-2 border-orange-100 rounded-2xl p-8 hover:border-orange-300 hover:shadow-xl transition-all hover:-translate-y-2 hover:border-transparent relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                            <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-br from-orange-500 to-red-600 transition-all duration-500 ease-out z-0"></div>
                            <div className="relative z-10">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎥</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors">Event Videos</h3>
                                <p className="text-gray-600 text-sm group-hover:text-orange-100 transition-colors">Cinematic coverage and editing for weddings, corporate events, and special occasions</p>
                            </div>
                        </div>

                        <div className="md:col-span-2 group bg-white border-2 border-orange-100 rounded-2xl p-8 hover:border-orange-300 hover:shadow-xl transition-all hover:-translate-y-2 hover:border-transparent relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                            <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-br from-orange-500 to-red-600 transition-all duration-500 ease-out z-0"></div>
                            <div className="relative z-10">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎬</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors">Promotional Videos</h3>
                                <p className="text-gray-600 text-sm group-hover:text-orange-100 transition-colors">Engaging promotional content for marketing campaigns and social media</p>
                            </div>
                        </div>

                        {/* Small Cards */}
                        <div className="group bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl p-6 text-white hover:shadow-xl transition-all hover:-translate-y-2" data-aos="fade-up" data-aos-delay="300">
                            <div className="text-4xl mb-3">🌈</div>
                            <h3 className="text-lg font-bold mb-2">Color Grading</h3>
                            <p className="text-sm text-orange-100">Professional correction</p>
                        </div>

                        <div className="group bg-white border-2 border-orange-100 rounded-2xl p-6 hover:border-orange-300 hover:shadow-xl transition-all hover:-translate-y-2 hover:border-transparent relative overflow-hidden" data-aos="fade-up" data-aos-delay="400">
                            <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-br from-orange-500 to-red-600 transition-all duration-500 ease-out z-0"></div>
                            <div className="relative z-10">
                                <div className="text-4xl mb-3">✨</div>
                                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">Motion Graphics</h3>
                                <p className="text-sm text-gray-600 group-hover:text-orange-100 transition-colors">Eye-catching animations</p>
                            </div>
                        </div>

                        <div className="md:col-span-2 group bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white hover:shadow-xl transition-all hover:-translate-y-2" data-aos="fade-up" data-aos-delay="500">
                            <div className="flex items-center gap-4">
                                <div className="text-5xl group-hover:scale-110 transition-transform">🎵</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Audio Enhancement</h3>
                                    <p className="text-orange-100 text-sm">Crystal-clear audio mixing and mastering</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" data-aos="fade-up">
                            Why Choose Our Services
                        </h2>
                        <p className="text-gray-600 text-lg" data-aos="fade-up" data-aos-delay="100">
                            Experience, expertise, and exceptional results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
                            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg">
                                ⚡
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Fast Turnaround</h3>
                            <p className="text-gray-600">Quick delivery without compromising on quality. Get your edited content in 24-48 hours.</p>
                        </div>

                        <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
                            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg">
                                🎯
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Professional Quality</h3>
                            <p className="text-gray-600">Industry-standard tools and techniques for cinema-grade results every time.</p>
                        </div>

                        <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
                            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg">
                                💰
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Affordable Pricing</h3>
                            <p className="text-gray-600">Competitive rates with flexible packages to suit every budget and need.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-orange-600 to-red-600 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div data-aos="fade-up">
                            <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
                            <div className="text-orange-100 uppercase tracking-wide">Videos Edited</div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="100">
                            <div className="text-5xl md:text-6xl font-bold mb-2">1000+</div>
                            <div className="text-orange-100 uppercase tracking-wide">Photos Enhanced</div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <div className="text-5xl md:text-6xl font-bold mb-2">100%</div>
                            <div className="text-orange-100 uppercase tracking-wide">Satisfaction Rate</div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300">
                            <div className="text-5xl md:text-6xl font-bold mb-2">24hr</div>
                            <div className="text-orange-100 uppercase tracking-wide">Fast Delivery</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-7xl mb-6" data-aos="zoom-in">🎬</div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
                        Ready to Create Something Amazing?
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Let's bring your creative vision to life. Contact us today to discuss your project and get a free quote.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-10 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Start Your Project Today
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default VideoEditing;
