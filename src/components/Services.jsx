const Services = () => {
    const services = [
        {
            title: 'Interior Design',
            description: 'Transform your space with our expert interior design services',
            icon: '🏠',
            features: [
                '3D Modeling & Visualization',
                'Modular Kitchen Design',
                'Space Planning & Layout',
                'Material Selection',
                'Project Management'
            ],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Image & Video Editing',
            description: 'Professional editing services for all your creative needs',
            icon: '🎬',
            features: [
                'Photo Retouching',
                'Event Video Editing',
                'Promotional Videos',
                'Color Grading',
                'Motion Graphics'
            ],
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Software Testing',
            description: 'Comprehensive QA services to ensure flawless software',
            icon: '💻',
            features: [
                'Manual Testing',
                'API Testing',
                'Automation Testing',
                'Bug Reporting',
                'Performance Testing'
            ],
            color: 'from-green-500 to-emerald-500'
        },
    ];

    return (
        <section id="services" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Our <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Comprehensive solutions tailored to meet your specific needs
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-gray-900">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-6">
                                {service.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                                        <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all`}>
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
