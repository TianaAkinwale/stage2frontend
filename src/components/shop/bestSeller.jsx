// src/shop/BestSellerSection.jsx
const BestSellerSection = () => {
  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Seller</h2>
        <div className="bg-blue-500 p-6 rounded-lg shadow-md text-center text-white">
          <h3 className="text-2xl font-semibold mb-2">BOOOMTOWN HEAD PHONES SERIES 7.6</h3>
          <p className="text-lg mb-4">GET IT 10% OFF THE ACTUAL PRICE IF YOU ORDER TODAY</p>
          <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-md shadow-md hover:bg-gray-100 focus:outline-none">
            Shop now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
