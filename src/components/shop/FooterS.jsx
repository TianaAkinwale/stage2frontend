// src/shop/FooterSection.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
        <p className="mb-4">Join our email for upcoming news about new gadgets</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md mb-4 w-full max-w-md mx-auto"
        />
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none">
          Sign up for news
        </button>
      </div>
    </footer>
  );
};

export default Footer;
