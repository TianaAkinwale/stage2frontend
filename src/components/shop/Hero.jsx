
const Hero = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-50 p-6 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-full h-full bg-blue-100 rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Shop for your original items for techies here at <span className="text-blue-500">timbu</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Providing the best tech gadgets and accessories, with exceptional customer service. Enjoy our wide range of products and special offers.
            </p>
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none">
              Shop by Category
            </button>
          </div>
        </div>
        <img src="path-to-goggles-image.jpg" alt="Goggles" className="absolute top-16 right-16 w-96 h-auto" />
        <div className="absolute top-10 right-40 w-6 h-6 bg-yellow-300 rounded-full"></div>
        <div className="absolute top-20 right-80 w-4 h-4 bg-blue-300 rounded-full"></div>
        <div className="absolute top-32 right-56 w-8 h-8 bg-orange-400 rounded-full"></div>
      </header>
    </div>
  );
};

export default Hero;
