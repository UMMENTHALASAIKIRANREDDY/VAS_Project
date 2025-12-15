import { Link } from 'react-router-dom';

const Home = () => {
    const services = [
        {
            title: 'Interior Design',
            icon: '🏠',
            description: 'Transform your living spaces with our premium 3D modeling and layout planning services.',
            link: '/interior-design',
            styles: {
                hoverGradient: 'hover:from-blue-500 hover:to-blue-600',
                shadow: 'hover:shadow-blue-500/30',
                blurBg: 'bg-blue-500/5',
                iconBg: 'from-blue-500 to-blue-600',
                iconShadow: 'shadow-blue-500/30',
                iconTextHover: 'group-hover:text-blue-600'
            }
        },
        {
            title: 'Video Editing',
            icon: '🎬',
            description: 'Professional video production, event coverage, and cinematic storytelling.',
            link: '/video-editing',
            styles: {
                hoverGradient: 'hover:from-purple-500 hover:to-purple-600',
                shadow: 'hover:shadow-purple-500/30',
                blurBg: 'bg-purple-500/5',
                iconBg: 'from-purple-500 to-purple-600',
                iconShadow: 'shadow-purple-500/30',
                iconTextHover: 'group-hover:text-purple-600'
            }
        },
        {
            title: 'Software Services',
            icon: '💻',
            description: 'Comprehensive QA testing and software solutions to ensure digital excellence.',
            link: '/software-services',
            styles: {
                hoverGradient: 'hover:from-emerald-500 hover:to-emerald-600',
                shadow: 'hover:shadow-emerald-500/30',
                blurBg: 'bg-emerald-500/5',
                iconBg: 'from-emerald-500 to-emerald-600',
                iconShadow: 'shadow-emerald-500/30',
                iconTextHover: 'group-hover:text-emerald-600'
            }
        },
    ];

    return (
        <div className="animate-fade-in overflow-hidden font-sans">
            {/* Simple & Neat Hero Section */}
            <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left: Content */}
                        <div className="text-center lg:text-left" data-aos="fade-up">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600/90 text-sm font-medium mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                Welcome to VAS
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                                Creative Spaces & <br />
                                <span className="text-indigo-600">Digital Solutions</span>
                            </h1>

                            <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                We combine artistic vision with technical expertise. From premium interior design to software excellence, we bring your ideas to life.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    to="/contact"
                                    className="px-8 py-3.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
                                >
                                    Start a Project
                                </Link>
                                <a
                                    href="#services"
                                    className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all"
                                >
                                    View Services
                                </a>
                            </div>

                            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-500">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-sm font-medium">Verified Experts</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span className="text-sm font-medium">On-time Delivery</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Modern Image Card */}
                        <div className="relative" data-aos="fade-left">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10 bg-slate-100">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                                    alt="Modern Office Design"
                                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                {/* Glass box overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                                    <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-2xl flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xl">
                                            ✨
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">Design & Logic</p>
                                            <p className="text-white/80 text-xs">Crafting experiences that matter</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative background circle */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-10 opacity-60"></div>
                            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 px-4 bg-gray-50">
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
                                className={`group relative bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-gray-200/50 hover:shadow-2xl ${service.styles.shadow} border border-gray-100 overflow-hidden hover:border-transparent`}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className={`absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-br ${service.styles.iconBg} transition-all duration-500 ease-out z-0`}></div>

                                <div className="relative z-10">
                                    <div className={`absolute top-0 right-0 w-32 h-32 ${service.styles.blurBg} rounded-full blur-3xl group-hover:bg-white/10 transition-colors`}></div>

                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.styles.iconBg} flex items-center justify-center text-2xl mb-6 shadow-lg ${service.styles.iconShadow} group-hover:scale-110 transition-transform duration-300 group-hover:from-white group-hover:to-white ${service.styles.iconTextHover}`}>
                                        {service.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white/90 transition-colors">{service.description}</p>

                                    <div className={`flex items-center text-black font-semibold group-hover:gap-2 transition-all group-hover:text-white`}>
                                        Explore Service
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </div>
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
