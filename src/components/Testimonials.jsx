const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Smith',
            role: 'CEO, Tech Solutions',
            content: 'VAS delivered exceptional software testing services. Their attention to detail and thorough QA process helped us launch bug-free products.',
            rating: 5,
            avatar: '👨‍💼',
            service: 'Software Testing'
        },
        {
            name: 'Sarah Johnson',
            role: 'Interior Designer',
            content: 'The 3D modeling and interior design services exceeded our expectations. Professional, creative, and delivered on time!',
            rating: 5,
            avatar: '👩‍💼',
            service: 'Interior Design'
        },
        {
            name: 'Michael Chen',
            role: 'Marketing Director',
            content: 'Outstanding video editing work! They transformed our raw footage into stunning promotional content that boosted our engagement significantly.',
            rating: 5,
            avatar: '👨‍💻',
            service: 'Video Editing'
        },
        {
            name: 'Emily Davis',
            role: 'Restaurant Owner',
            content: 'From initial consultation to final execution, the team was professional and creative. Our new interior design is simply amazing!',
            rating: 5,
            avatar: '👩‍🍳',
            service: 'Interior Design'
        }
    ];

    return (
        <section id="testimonials" className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-aos="fade-up">
                        What Our{' '}
                        <span className="bg-gradient-to-r from-sky-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Hear from our satisfied clients about their experience working with us
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Service Badge */}
                            <div className="absolute top-4 right-4">
                                <span className="px-3 py-1 bg-gradient-to-r from-sky-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                                    {testimonial.service}
                                </span>
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400 fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-700 mb-6 leading-relaxed italic">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-purple-600 rounded-full flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                                </div>
                            </div>

                            {/* Quote Mark */}
                            <div className="absolute bottom-4 right-4 text-6xl text-gray-200 font-serif leading-none">
                                "
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12" data-aos="fade-up">
                    <p className="text-gray-600 mb-4">Want to share your experience?</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-sky-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        Get In Touch
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
