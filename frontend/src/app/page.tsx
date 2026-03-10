export default function Home() {
  const products = [
    {
      id: 1,
      name: "Speckled Clay Mug",
      price: "$32",
      image: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3",
    },
    {
      id: 2,
      name: "Stoneware Bowl",
      price: "$28",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa",
    },
    {
      id: 3,
      name: "Rustic Coffee Mug",
      price: "$30",
      image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5E6D3] p-8">

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-16">

        <h1 className="text-5xl font-bold text-[#2E2E2E] mb-4">
          The Clay Garage
        </h1>

        <p className="text-lg text-gray-700 max-w-xl mb-8">
          Handmade pottery crafted with care. Discover unique mugs, bowls, and
          ceramics made in small batches.
        </p>

        <button className="bg-[#C76B3C] text-white px-6 py-3 rounded-lg text-lg hover:opacity-90 transition">
          Shop Pottery
        </button>

      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >

            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full object-cover"
            />

            <div className="p-4 text-left">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-[#C76B3C] font-bold">{product.price}</p>
            </div>

          </div>
        ))}

      </div>

    </main>
  );
}