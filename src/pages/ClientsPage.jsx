const ClientsPage = () => {
    const clients = [
        { name: 'Tech Corp', initial: 'TC' },
        { name: 'Design Studio', initial: 'DS' },
        { name: 'Enterprise Solutions', initial: 'ES' },
        { name: 'Innovation Labs', initial: 'IL' },
        { name: 'Global Systems', initial: 'GS' },
        { name: 'Digital Agency', initial: 'DA' },
        { name: 'Creative Works', initial: 'CW' },
        { name: 'Business Pro', initial: 'BP' },
    ];

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
                                    Trusted Partners
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
                                Our Clients
                            </h1>

                            <p className="text-xl text-gray-700 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                                Trusted by leading companies worldwide to deliver exceptional results across all our services.
                            </p>

                            <div className="grid grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="300">
                                <div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">100+</div>
                                    <div className="text-gray-600 text-sm">Happy Clients</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">500+</div>
                                    <div className="text-gray-600 text-sm">Projects</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">98%</div>
                                    <div className="text-gray-600 text-sm">Satisfaction</div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Visual Design */}
                        <div className="relative" data-aos="fade-left">
                            <div className="grid grid-cols-3 gap-4">
                                {clients.slice(0, 9).map((client, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square bg-white rounded-xl flex items-center justify-center hover:shadow-xl transition-all hover:-translate-y-2 p-4"
                                    >
                                        <div className="text-2xl font-bold text-gray-300">{client.initial}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients Grid */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900" data-aos="fade-up">
                            Trusted By Industry Leaders
                        </h2>
                        <p className="text-gray-600 text-lg" data-aos="fade-up" data-aos-delay="100">
                            We're proud to work with amazing companies
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="aspect-square bg-gradient-to-br from-sky-50 to-indigo-50 rounded-2xl flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                            >
                                <div className="text-4xl font-bold text-gray-300">{client.initial}</div>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="bg-gradient-to-br from-sky-500 to-indigo-600 rounded-2xl p-8 text-white text-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="text-5xl font-bold mb-2">100+</div>
                            <div className="text-sky-100 text-lg">Happy Clients</div>
                        </div>
                        <div className="bg-gradient-to-br from-sky-500 to-indigo-600 rounded-2xl p-8 text-white text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="text-5xl font-bold mb-2">500+</div>
                            <div className="text-sky-100 text-lg">Projects Delivered</div>
                        </div>
                        <div className="bg-gradient-to-br from-sky-500 to-indigo-600 rounded-2xl p-8 text-white text-center" data-aos="fade-up" data-aos-delay="300">
                            <div className="text-5xl font-bold mb-2">98%</div>
                            <div className="text-sky-100 text-lg">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClientsPage;
