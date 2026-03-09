
export default function Home() {
  return (
   <main className="min-h-screen bg-[#F5E6D3] flex flex-col items-center justify-center text-center p-8">
    {/* Title */}
    <h1 className="text-5xl font-bold text-[#2E2E2E] mb-4">
      The Clay Garage
    </h1>

    {/* SubTitle */}
    <p className="text-lg text-gray-700 max-w-xl mb-8">
      Handmade pottery crafted with care. Discover unique mugs, bowls,
      and ceramics made in small batches.
    </p>

    {/*Shop button*/}
    <button className="bg-[#C76B3C] text-white px-6 py-3 rounded-lg text-lg hover:opacity-90 transition">
      Shop Pottery
    </button>

   </main>
  );
}
