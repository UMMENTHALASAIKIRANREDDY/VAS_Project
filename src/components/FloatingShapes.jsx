const FloatingShapes = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Floating Circle 1 */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-float"></div>

            {/* Floating Circle 2 */}
            <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl animate-float-delayed"></div>

            {/* Floating Circle 3 */}
            <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-pink-300/30 to-orange-300/30 rounded-full blur-3xl animate-float-slow"></div>

            {/* Floating Circle 4 */}
            <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-gradient-to-br from-green-300/30 to-emerald-300/30 rounded-full blur-3xl animate-float"></div>

            {/* Small floating dots */}
            <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-purple-400/50 rounded-full animate-float"></div>
            <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-pink-400/50 rounded-full animate-float-delayed"></div>
            <div className="absolute bottom-1/3 left-2/3 w-5 h-5 bg-blue-400/50 rounded-full animate-float-slow"></div>
        </div>
    );
};

export default FloatingShapes;
