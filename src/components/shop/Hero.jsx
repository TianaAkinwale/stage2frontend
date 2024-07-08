// src/shop/HeroSection.jsx
const Hero = () => {
  return (
    <section className="bg-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop for your original items for techies here at timbu</h1>
          <p className="text-lg text-gray-700 mb-6">Explore a wide range of gadgets and accessories that are perfect for tech enthusiasts.</p>
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none">
            Shop by category
          </button>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <img src="path-to-vr-goggles.jpg" alt="VR Goggles" className="w-full h-full object-cover rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
