function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="bg-white py-16 px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Latest Smartphones 2026
          </h1>
          <p className="text-gray-600">
            Discover the best mobile phones at unbeatable prices.
            Fast delivery and trusted brands.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg"
            alt="mobile"
            className="w-64"
          />
        </div>

      </section>


      {/* Featured Products */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Featured Mobiles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <img
              src="https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg"
              alt="phone"
              className="w-40 mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4 text-center">
              iPhone 15
            </h3>
            <p className="text-blue-600 text-center font-bold mt-2">
              ₹79,999
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <img
              src="https://m.media-amazon.com/images/I/71pWzhdJNwL._SL1500_.jpg"
              alt="phone"
              className="w-40 mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4 text-center">
              Samsung Galaxy S24
            </h3>
            <p className="text-blue-600 text-center font-bold mt-2">
              ₹69,999
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <img
              src="https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg"
              alt="phone"
              className="w-40 mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4 text-center">
              OnePlus 12
            </h3>
            <p className="text-blue-600 text-center font-bold mt-2">
              ₹59,999
            </p>
          </div>

        </div>
      </section>


      {/* Offer Section */}
      <section className="bg-blue-600 py-12 text-center text-white">
        <h2 className="text-2xl font-bold">
          🎉 Flat 20% Off on Selected Mobiles
        </h2>
        <p className="mt-2">
          Limited Time Offer. Hurry Up!
        </p>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center mt-10">
        <p>© 2026 MobileStore. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Home;