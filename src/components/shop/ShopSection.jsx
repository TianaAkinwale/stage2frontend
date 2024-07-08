// src/shop/ShopSection.jsx
const ShopSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Shop</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="path-to-product1.jpg" alt="Product 1" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-lg font-semibold text-gray-900">Product 1</h3>
            <p className="text-gray-700">Description of product 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="path-to-product2.jpg" alt="Product 2" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-lg font-semibold text-gray-900">Product 2</h3>
            <p className="text-gray-700">Description of product 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="path-to-product3.jpg" alt="Product 3" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-lg font-semibold text-gray-900">Product 3</h3>
            <p className="text-gray-700">Description of product 3.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="path-to-product4.jpg" alt="Product 4" className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-lg font-semibold text-gray-900">Product 4</h3>
            <p className="text-gray-700">Description of product 4.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
