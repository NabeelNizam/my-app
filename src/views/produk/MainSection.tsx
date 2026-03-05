const products = [
    {
        label: "A",
        name: "Produk A",
        desc: "Laptop gaming dengan performa tinggi dan desain premium untuk gaming experience terbaik.",
        price: "Rp 15.000.000",
    },
    {
        label: "B",
        name: "Produk B",
        desc: "Smartphone flagship dengan kamera profesional dan baterai tahan lama sepanjang hari.",
        price: "Rp 8.500.000",
    },
    {
        label: "C",
        name: "Produk C",
        desc: "Headphone wireless dengan noise cancelling aktif dan kualitas audio studio grade.",
        price: "Rp 2.500.000",
    },
];

const MainSection = () => {
    return (
        <section className="bg-white py-16 px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-900 mb-10 text-center">
                    Daftar Produk
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((p) => (
                        <div key={p.label} className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 transition-colors">
                            <div className="h-40 bg-gray-100 flex items-center justify-center">
                                <span className="text-3xl font-semibold text-gray-400">{p.label}</span>
                            </div>
                            <div className="p-5">
                                <h3 className="text-base font-semibold text-gray-900 mb-2">{p.name}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                    <span className="text-sm font-semibold text-gray-900">{p.price}</span>
                                    <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
                                        Beli
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainSection;