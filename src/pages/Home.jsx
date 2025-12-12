import { Link } from 'react-router-dom';

const Home = () => {
    const services = [
        {
            title: 'Interior Design',
            icon: '🏠',
            description: 'Transform your living spaces with our premium 3D modeling and layout planning services.',
            link: '/interior-design',
            color: 'blue'
        },
        {
            title: 'Video Editing',
            icon: '🎬',
            description: 'Professional video production, event coverage, and cinematic storytelling.',
            link: '/video-editing',
            color: 'purple'
        },
        {
            title: 'Software Services',
            icon: '💻',
            description: 'Comprehensive QA testing and software solutions to ensure digital excellence.',
            link: '/software-services',
            color: 'emerald'
        },
    ];

    return (
        <div className="animate-fade-in overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-slate-900 border-b border-gray-800">
                {/* Abstract Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6" data-aos="fade-down">
                                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                                <span className="text-sky-300 text-sm font-medium tracking-wide">Innovating Since 2019</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight" data-aos="fade-up" data-aos-delay="100">
                                Designing <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Experiences.</span>
                            </h1>

                            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                                From stunning interior spaces to captivating video content and flawless software performance, VAS delivers excellence across every dimension.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="300">
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2"
                                >
                                    Start Your Project
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                                <div className="flex gap-4 sm:gap-8 px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm justify-center">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">2+</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider">Clients</div>
                                    </div>
                                    <div className="w-px bg-white/10"></div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">100%</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider">Success</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Visual */}
                        <div className="relative lg:h-[600px] hidden lg:block" data-aos="fade-left">
                            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                            <div className="glass-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md aspect-square rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent"></div>
                                <div className="p-12 h-full flex flex-col justify-between relative">
                                    <div className="flex justify-between items-start">
                                        <div className="p-4 bg-sky-500/20 rounded-2xl">
                                            <span className="text-4xl">🎨</span>
                                        </div>
                                        <div className="flex -space-x-4">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-12 h-12 rounded-full border-2 border-gray-800 bg-gray-700 flex items-center justify-center text-xs">
                                                    User
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                                        <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                                        <div className="h-32 w-full bg-gradient-to-r from-sky-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-white/5 mt-6">
                                            <span className="text-white/50 text-sm tracking-widest font-mono">DIGITAL EXCELLENCE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute top-20 right-20 p-4 bg-gray-800/80 backdrop-blur border border-gray-700 rounded-2xl shadow-xl animate-float-slow">
                                <span className="text-3xl">💻</span>
                            </div>
                            <div className="absolute bottom-40 left-10 p-4 bg-gray-800/80 backdrop-blur border border-gray-700 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                <span className="text-3xl">🎬</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm">What We Do</span>
                        <h2 className="text-4xl font-bold text-gray-900 mt-2">Premium Services</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                to={service.link}
                                className="group relative bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-sky-500/10 border border-gray-100 overflow-hidden"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-${service.color}-500/5 rounded-full blur-3xl group-hover:bg-${service.color}-500/10 transition-colors`}></div>

                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 flex items-center justify-center text-2xl mb-6 shadow-lg shadow-${service.color}-500/30 group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                                <div className={`flex items-center text-${service.color}-600 font-semibold group-hover:gap-2 transition-all`}>
                                    Explore Service
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission / Why Us */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center md:text-left">
                        {/* Decor */}
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px]"></div>
                        </div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Why Partner With <span className="text-sky-400">VAS</span>?
                                </h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    We bring a unique blend of creative artistry and technical precision to every project. Whether it's crafting the perfect living space or ensuring your software is bug-free, we deliver perfection.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { title: 'Expert Team', desc: 'Skilled professionals' },
                                        { title: 'Modern Tech', desc: 'Latest tools & stack' },
                                        { title: '24/7 Support', desc: 'Always available' },
                                        { title: 'Fast Delivery', desc: 'On-time execution' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 p-8 flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="text-6xl mb-4 block">🚀</span>
                                        <h3 className="text-2xl font-bold text-white">Let's Grow Together</h3>
                                        <Link to="/contact" className="inline-block mt-6 text-sky-400 hover:text-sky-300 font-medium">
                                            Get in touch &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
