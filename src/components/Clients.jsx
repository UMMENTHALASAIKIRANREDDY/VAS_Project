const Clients = () => {
    const clients = [
        { name: 'Tech Corp', initial: 'T' },
        { name: 'Design Studio', initial: 'D' },
        { name: 'Enterprise Solutions', initial: 'E' },
        { name: 'Innovation Labs', initial: 'I' },
        { name: 'Global Systems', initial: 'G' },
        { name: 'Digital Agency', initial: 'DA' },
    ];

    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Trusted by <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Leading Brands</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Proud to work with amazing companies worldwide
                    </p>
                </div>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="text-3xl font-bold text-gray-300">{client.initial}</div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-gray-600 text-lg mb-6">
                        Join our growing list of satisfied clients
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Start Your Project
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Clients;
