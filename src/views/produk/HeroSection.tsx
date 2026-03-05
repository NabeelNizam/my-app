const HeroSection = () => {
    return (
        <section className="bg-white py-24 px-8 border-b border-gray-100">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-semibold text-gray-900 mb-4">
                    Produk Kami
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                    Temukan produk terbaik untuk kebutuhanmu.
                </p>
                <div className="flex justify-center gap-3">
                    <button className="bg-gray-900 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
                        Lihat Produk
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                        Hubungi Kami
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;