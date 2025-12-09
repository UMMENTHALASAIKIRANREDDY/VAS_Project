const PageHero = ({ title, description, gradient = 'from-sky-500 to-indigo-600' }) => {
    return (
        <section className={`relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br ${gradient} overflow-hidden`}>
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                    {description}
                </p>
            </div>
        </section>
    );
};

export default PageHero;
