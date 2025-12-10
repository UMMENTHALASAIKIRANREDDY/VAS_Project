import { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Interior Design',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Destructure form data
        const { name, email, service, message } = formData;

        // --- WhatsApp Logic ---
        const phoneNumber = "916305790865"; // User's WhatsApp number with country code
        const whatsappMessage = `*New Inquiry via Website* %0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Service:* ${service}%0A*Message:* ${message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        // --- Email Logic (Mailto) ---
        const mailToLink = `mailto:saikiranreddy7547@gmail.com?subject=New Enquiry from ${name} - ${service}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AService: ${service}%0D%0AMessage: ${message}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        // Trigger Email Client
        // Using a small timeout to ensure the browser processes the window.open first
        setTimeout(() => {
            window.location.href = mailToLink;
        }, 500);

        // Reset form (optional)
        setFormData({
            name: '',
            email: '',
            service: 'Interior Design',
            message: ''
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Section with Side Design */}
            <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden pt-0">
                <div className="max-w-7xl mx-auto px-6 py-16 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <div>
                            <div className="inline-block mb-6" data-aos="fade-up">
                                <span className="px-6 py-3 bg-white/90 backdrop-blur-sm text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wide shadow-lg">
                                    Get In Touch
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
                                Contact Us
                            </h1>

                            <p className="text-xl text-gray-700 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                                Have a project in mind? Let's discuss how we can help bring your vision to life.
                            </p>

                            <div className="flex gap-4 mb-8" data-aos="fade-up" data-aos-delay="300">
                                <a href="#contact-form" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all">
                                    Send Message
                                </a>
                                <a href="https://wa.me/6305790865" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all">
                                    WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Right - Visual Design */}
                        <div className="relative" data-aos="fade-left">
                            <div className="grid grid-cols-2 gap-6">
                                {/* Email Card */}
                                <div className="bg-white rounded-3xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 aspect-square flex flex-col items-center justify-center">
                                    <div className="text-7xl mb-4">📧</div>
                                    <h3 className="font-bold text-lg mb-2">Email Us</h3>
                                    <p className="text-sm text-gray-600 text-center break-all">saikiranreddy7547@gmail.com</p>
                                </div>

                                {/* Phone Card */}
                                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 mt-8 aspect-square flex flex-col items-center justify-center">
                                    <div className="text-7xl mb-4">📱</div>
                                    <h3 className="font-bold text-lg mb-2">Call Us</h3>
                                    <p className="text-sm text-blue-100">+91 6305790865</p>
                                </div>

                                {/* Location Card */}
                                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 -mt-8 aspect-square flex flex-col items-center justify-center">
                                    <div className="text-7xl mb-4">📍</div>
                                    <h3 className="font-bold text-lg mb-2">Visit</h3>
                                    <p className="text-sm text-gray-600">Hyderabad, India</p>
                                </div>

                                {/* WhatsApp Card */}
                                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 aspect-square flex flex-col items-center justify-center">
                                    <div className="text-7xl mb-4">💬</div>
                                    <h3 className="font-bold text-lg mb-2">Chat</h3>
                                    <p className="text-sm text-green-100">WhatsApp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div data-aos="fade-right">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">
                                Get In Touch
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="100">
                                    <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                                        <p className="text-gray-600">contact@vas.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
                                    <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                        <p className="text-gray-600">+91 6305790865</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
                                    <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Location</h3>
                                        <p className="text-gray-600">Hyderabad, India</p>
                                    </div>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="400">
                                    <a
                                        href="https://wa.me/your-number"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all mt-4"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        WhatsApp Us
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div id="contact-form" className="bg-gradient-to-br from-sky-50 to-indigo-50 rounded-2xl p-8" data-aos="fade-left">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    >
                                        <option>Interior Design</option>
                                        <option>Video Editing</option>
                                        <option>Software Services</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                        placeholder="Tell us about your project..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
