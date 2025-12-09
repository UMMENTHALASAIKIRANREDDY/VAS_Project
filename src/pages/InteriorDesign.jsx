const InteriorDesign = () => {
    const services = [
        {
            icon: '📐',
            title: '3D Modeling',
            description: 'Photorealistic 3D visualizations',
            features: ['Floor Plans', 'Walkthroughs', 'Virtual Tours']
        },
        {
            icon: '🍳',
            title: 'Modular Kitchen',
            description: 'Custom kitchen solutions',
            features: ['Smart Storage', 'Modern Design', 'Premium Materials']
        },
        {
            icon: '🏠',
            title: 'Space Planning',
            description: 'Optimized layouts',
            features: ['Efficient Use', 'Flow Design', 'Room Layouts']
        },
        {
            icon: '🎨',
            title: 'Material Selection',
            description: 'Expert color & finish guidance',
            features: ['Color Palettes', 'Textures', 'Finishes']
        },
        {
            icon: '💡',
            title: 'Lighting Design',
            description: 'Ambient & task lighting',
            features: ['LED Solutions', 'Smart Lighting', 'Mood Settings']
        },
        {
            icon: '🪑',
            title: 'Furniture Design',
            description: 'Custom furniture solutions',
            features: ['Bespoke Pieces', 'Space Saving', 'Modern Style']
        }
    ];

    const gallery = [
        { title: 'Modern Living Room', category: 'Residential' },
        { title: 'Luxury Bedroom', category: 'Residential' },
        { title: 'Contemporary Kitchen', category: 'Modular' },
        { title: 'Office Space', category: 'Commercial' }
    ];

    const process = [
        { num: '01', title: 'Consultation', desc: 'Understanding your vision and requirements', icon: '💬' },
        { num: '02', title: 'Concept Design', desc: 'Creating mood boards and initial designs', icon: '🎨' },
        { num: '03', title: '3D Visualization', desc: 'Photorealistic renders of your space', icon: '🖼️' },
        { num: '04', title: 'Execution', desc: 'Bringing the design to life', icon: '🔨' }
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section with Side Design */}
            <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-violet-50 to-purple-100 overflow-hidden pt-12">
                <div className="max-w-7xl mx-auto px-6 py-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <div>
                            <div className="inline-block mb-6" data-aos="fade-up">
                                <span className="px-6 py-3 bg-white/90 backdrop-blur-sm text-violet-700 rounded-full text-sm font-semibold uppercase tracking-wide shadow-lg">
                                    Interior Design Services
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
                                Transform Your Living Spaces
                            </h1>

                            <p className="text-xl text-gray-700 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                                From 3D modeling to complete space planning, we create stunning interiors that reflect your personality and enhance your lifestyle.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8" data-aos="fade-up" data-aos-delay="300">
                                <a
                                    href="/contact"
                                    className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    Start Your Project
                                </a>
                                <button className="px-8 py-4 bg-white border-2 border-violet-600 text-violet-600 rounded-xl font-semibold hover:bg-violet-50 transition-all duration-300">
                                    View Portfolio
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="400">
                                <div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">200+</div>
                                    <div className="text-gray-600">Projects Done</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">100%</div>
                                    <div className="text-gray-600">Satisfaction</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">5+</div>
                                    <div className="text-gray-600">Years Exp</div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Visual Design */}
                        <div className="relative" data-aos="fade-left">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 aspect-square flex flex-col items-center justify-center">
                                    <div className="text-7xl mb-4">📐</div>
                                    <h3 className="font-bold text-lg mb-2">3D Modeling</h3>
                                    <p className="text-sm text-gray-600">Photorealistic visuals</p>
                                </div>

                                <div className="bg-gradient-to-br from-violet-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 mt-8 aspect-square flex flex-col items-center justify-center">
                                    <div className="text-7xl mb-4">🎨</div>
                                    <h3 className="font-bold text-lg mb-2">Design</h3>
                                    <p className="text-sm text-violet-100">Expert styling</p>
                                </div>

                                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 -mt-8 aspect-square flex flex-col items-center justify-center">
                                    <div className="text-7xl mb-4">💡</div>
                                    <h3 className="font-bold text-lg mb-2">Lighting</h3>
                                    <p className="text-sm text-gray-600">Smart solutions</p>
                                </div>

                                <div className="bg-gradient-to-br from-violet-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 mt-8 aspect-square flex flex-col items-center justify-center">
                                    <div className="text-7xl mb-4">🪑</div>
                                    <h3 className="font-bold text-lg mb-2">Furniture</h3>
                                    <p className="text-sm text-white">Custom pieces</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Card Grid */}
            <section className="py-20 px-6 bg-gradient-to-b from-white to-violet-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" data-aos="fade-up">
                            Our Design Services
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                            Comprehensive interior design solutions from concept to completion
                        </p>
                    </div>

                    {/* Asymmetric Card Layout */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Large Card - Spans 2 columns */}
                        <div
                            className="md:col-span-2 md:row-span-2 group bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-10 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                            data-aos="fade-up"
                        >
                            <div className="absolute top-0 right-0 text-9xl opacity-10">{services[0].icon}</div>
                            <div className="relative z-10">
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{services[0].icon}</div>
                                <h3 className="text-3xl font-bold mb-4">{services[0].title}</h3>
                                <p className="text-violet-100 text-lg mb-6">{services[0].description}</p>
                                <ul className="space-y-3">
                                    {services[0].features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-white/90">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Regular Cards */}
                        {services.slice(1, 5).map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white/80 backdrop-blur-sm border-2 border-violet-100 rounded-2xl p-8 hover:border-violet-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 100}
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                                            <svg className="w-3 h-3 text-violet-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Last Card - Spans 2 columns on medium screens */}
                        <div
                            className="md:col-span-2 group bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <div className="flex items-center gap-6">
                                <div className="text-6xl group-hover:scale-110 transition-transform">{services[5].icon}</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2">{services[5].title}</h3>
                                    <p className="text-violet-100 mb-4">{services[5].description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {services[5].features.map((feature, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section with Parallax Cards */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" data-aos="fade-up">
                            Our Portfolio
                        </h2>
                        <p className="text-gray-600 text-lg" data-aos="fade-up" data-aos-delay="100">
                            Recent projects showcasing our expertise
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {gallery.map((item, index) => (
                            <div
                                key={index}
                                className="group relative aspect-[4/3] bg-gradient-to-br from-violet-200 to-purple-300 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                            >
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 group-hover:from-black/80 transition-all duration-300">
                                    <span className="inline-block px-4 py-2 bg-violet-600 text-white text-sm font-semibold rounded-full mb-3 w-fit">
                                        {item.category}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80 text-sm">View Project →</p>
                                </div>

                                {/* Icon Watermark */}
                                <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-10 group-hover:scale-110 transition-transform">
                                    🏠
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section - Horizontal Flow */}
            <section className="py-20 px-6 bg-gradient-to-br from-violet-50 to-purple-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" data-aos="fade-up">
                            Our Design Process
                        </h2>
                        <p className="text-gray-600 text-lg" data-aos="fade-up" data-aos-delay="100">
                            From concept to completion in 4 simple steps
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-violet-300 via-purple-400 to-violet-300 transform -translate-y-1/2"></div>

                        <div className="grid md:grid-cols-4 gap-6 relative">
                            {process.map((step, idx) => (
                                <div key={idx} className="relative" data-aos="fade-up" data-aos-delay={idx * 100}>
                                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-4 border-violet-200 hover:border-violet-400">
                                        <div className="text-7xl mb-4 text-center">{step.icon}</div>
                                        <div className="text-5xl font-bold text-violet-200 mb-3 text-center">{step.num}</div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">{step.title}</h3>
                                        <p className="text-gray-600 text-sm text-center leading-relaxed">{step.desc}</p>
                                    </div>

                                    {/* Arrow for desktop */}
                                    {idx < 3 && (
                                        <div className="hidden md:block absolute top-1/3 -right-3 transform -translate-y-1/2 z-10">
                                            <svg className="w-6 h-6 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
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
            <section className="py-20 px-6 bg-gradient-to-br from-violet-600 to-purple-600">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-7xl mb-6" data-aos="zoom-in">✨</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-violet-100 text-lg mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Let's create something extraordinary together. Get in touch to start your interior design journey.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-10 py-4 bg-white text-violet-600 rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Get Started Today
                    </a>
                </div>
            </section>
        </div>
    );
};

export default InteriorDesign;
