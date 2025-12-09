const Contact = () => {
    return (
        <section id="contact" className="py-12 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wide" data-aos="fade-up">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 text-gray-900" data-aos="fade-up" data-aos-delay="100">
                        Contact Us
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        Have a project in mind? Let's discuss how we can help bring your vision to life.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div data-aos="fade-right">
                        <h3 className="text-2xl font-bold mb-8 text-gray-900">Get in Touch</h3>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                                    📧
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-gray-900">Email</h4>
                                    <a href="mailto:vasagencies01@gmail.com" className="text-blue-600 hover:underline">
                                        vasagencies01@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                                    📱
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-gray-900">Phone</h4>
                                    <a href="tel:+919000065111" className="text-blue-600 hover:underline block">
                                        +91 9000065111
                                    </a>
                                    <a href="tel:+919010062111" className="text-blue-600 hover:underline block">
                                        +91 9010062111
                                    </a>
                                </div>
                            </div>

                            {/* WhatsApp CTA */}
                            <a
                                href="https://wa.me/919000065111"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl font-semibold hover:shadow-xl transition-all hover:scale-105"
                            >
                                <span className="text-3xl">💬</span>
                                <span>Chat on WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div data-aos="fade-left">
                        <div className="bg-white p-8 rounded-3xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h3>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="+91 1234567890"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
