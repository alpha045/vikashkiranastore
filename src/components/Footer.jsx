import { FaStore } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#10141f] border-t border-[#222b3d] py-3">
      <div className="max-w-4xl mx-auto px-3 flex flex-col md:flex-row justify-between items-center gap-4">

  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-[#22C7BE] flex items-center justify-center">
      <FaStore className="text-white text-lg" />
    </div>

    <h3 className="text-white font-semibold m-0">
      Smart Kirana Store
    </h3>
    </div>

        <p className="text-gray-400 text-sm">
          Made with ❤️ for India's Kirana Shops
        </p>

        <div className="flex gap-6">
          <a href="http://localhost:5173/login" className="text-gray-400 hover:text-white">
            Login
          </a>

          <a href="http://localhost:5173/register" className="text-gray-400 hover:text-white">
            Register
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;