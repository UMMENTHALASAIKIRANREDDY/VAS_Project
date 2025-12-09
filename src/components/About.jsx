const About = () => {
    const features = [
        { icon: '🎯', title: 'Expert Team', desc: 'Skilled professionals with years of experience' },
        { icon: '⚡', title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
        { icon: '💡', title: 'Creative Solutions', desc: 'Innovative approaches to every project' },
        { icon: '🤝', title: 'Client-Focused', desc: 'Your satisfaction is our priority' }
    ];

    return (
        <section id="about" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wide" data-aos="fade-up">
                        About VAS Agencies
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 text-gray-900" data-aos="fade-up" data-aos-delay="100">
                        Who We Are
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        We're a creative agency passionate about delivering exceptional results across interior design, video editing, and software testing.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-8 mb-20">
                    <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="zoom-in" data-aos-delay="100">
                        <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">500+</div>
                        <div className="text-gray-600">Projects Completed</div>
                    </div>
                    <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="zoom-in" data-aos-delay="200">
                        <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">300+</div>
                        <div className="text-gray-600">Happy Clients</div>
                    </div>
                    <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="zoom-in" data-aos-delay="300">
                        <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">5+</div>
                        <div className="text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="zoom-in" data-aos-delay="400">
                        <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">100%</div>
                        <div className="text-gray-600">Satisfaction Rate</div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
