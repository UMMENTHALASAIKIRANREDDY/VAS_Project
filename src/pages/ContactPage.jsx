import { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Interior Design',
        message: ''
    });

    const [submitAction, setSubmitAction] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Destructure form data
        const { name, email, service, message } = formData;

        if (submitAction === 'whatsapp') {
            // --- WhatsApp Logic ---
            const phoneNumber = "916305790865"; // User's WhatsApp number with country code
            const whatsappMessage = `*New Inquiry via Website* %0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Service:* ${service}%0A*Message:* ${message}`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
            window.open(whatsappUrl, '_blank');
        } else if (submitAction === 'email') {
            // --- Email Logic (Mailto) ---
            const mailToLink = `mailto:saikiranreddy7547@gmail.com?subject=New Enquiry from ${name} - ${service}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AService: ${service}%0D%0AMessage: ${message}`;
            window.location.href = mailToLink;
        }

        // Reset form (optional)
        setFormData({
            name: '',
            email: '',
            service: 'Interior Design',
            message: ''
        });
        setSubmitAction(null);
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
            <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden pt-0">
                <div className="max-w-7xl mx-auto px-6 py-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left - Content */}
                        <div>
                            <div className="inline-block mb-4" data-aos="fade-up">
                                <span className="px-6 py-2 bg-white/90 backdrop-blur-sm text-slate-700 rounded-full text-xs font-semibold uppercase tracking-wide shadow-lg">
                                    Get In Touch
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-aos="fade-up" data-aos-delay="100">
                                Contact Us
                            </h1>

                            <div className="text-lg text-gray-700 mb-6 leading-relaxed space-y-1 font-medium" data-aos="fade-up" data-aos-delay="200">
                                <p className="text-slate-900">“Where Design Meets Technology”</p>
                                <p className="text-slate-700">“Creative Spaces. Reliable Software.”</p>
                                <p className="text-slate-600">“Designing Experiences. Testing Excellence.”</p>
                            </div>

                            <div className="flex gap-4 mb-6" data-aos="fade-up" data-aos-delay="300">
                                <a href="#contact-form" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all text-sm">
                                    Send Message
                                </a>
                            </div>
                        </div>

                        {/* Right - Visual Design */}
                        <div className="relative" data-aos="fade-left">
                            <div className="grid grid-cols-2 gap-4">
                                {/* Email Card */}
                                <div className="bg-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 aspect-square flex flex-col items-center justify-center">
                                    <div className="text-5xl mb-3">📧</div>
                                    <h3 className="font-bold text-base mb-1">Email Us</h3>
                                    <p className="text-xs text-gray-600 text-center break-all">saikiranreddy7547@gmail.com</p>
                                </div>

                                {/* Phone Card */}
                                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-4 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 mt-6 aspect-square flex flex-col items-center justify-center">
                                    <div className="text-5xl mb-3">📱</div>
                                    <h3 className="font-bold text-base mb-1">Call Us</h3>
                                    <p className="text-xs text-blue-100">+91 6305790865</p>
                                </div>

                                {/* Location Card */}
                                <div className="bg-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 -mt-6 aspect-square flex flex-col items-center justify-center">
                                    <div className="text-5xl mb-3">📍</div>
                                    <h3 className="font-bold text-base mb-1">Visit</h3>
                                    <p className="text-xs text-gray-600">Hyderabad, India</p>
                                </div>

                                {/* WhatsApp Card */}
                                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 aspect-square flex flex-col items-center justify-center">
                                    <div className="text-5xl mb-3">💬</div>
                                    <h3 className="font-bold text-base mb-1">Chat</h3>
                                    <p className="text-xs text-green-100">WhatsApp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-10 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">
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
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                                            className="w-full px-4 py-3 text-left bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium text-gray-700 flex justify-between items-center transition-all hover:border-sky-400"
                                        >
                                            <span className={!formData.service ? 'text-gray-400' : ''}>
                                                {formData.service || 'Select a Service'}
                                            </span>
                                            <svg
                                                className={`w-5 h-5 text-sky-600 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* Custom Options List */}
                                        <div
                                            className={`absolute z-20 w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 origin-top transform ${isDropdownOpen ? 'max-h-60 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}`}
                                        >
                                            {['Interior Design', 'Video Editing', 'Software Services', 'Other'].map((option) => (
                                                <div
                                                    key={option}
                                                    onClick={() => {
                                                        setFormData({ ...formData, service: option });
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className={`px-4 py-3 cursor-pointer hover:bg-sky-50 transition-colors flex items-center justify-between ${formData.service === option ? 'bg-sky-50 text-sky-700 font-semibold' : 'text-gray-700'
                                                        }`}
                                                >
                                                    {option}
                                                    {formData.service === option && (
                                                        <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
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

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <button
                                        type="submit"
                                        onClick={() => setSubmitAction('email')}
                                        className="w-full px-6 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Send Email
                                    </button>
                                    <button
                                        type="submit"
                                        onClick={() => setSubmitAction('whatsapp')}
                                        className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        WhatsApp
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
