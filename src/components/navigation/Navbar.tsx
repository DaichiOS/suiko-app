'use client';

import { ConnectButton } from "@mysten/dapp-kit";
import { useNavigation } from "@/providers/navigation/NavigationContext";
import Image from "next/image";


const Navbar = () => {
  const { currentPage, navigate } = useNavigation();

  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-gray-800 text-gray-100 py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <Image src="/suiko.svg" alt="Suiko Logo" width={32} height={32} />
            <span className="text-xl font-bold bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9] bg-clip-text text-transparent">
              Suiko
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-end flex-1">
          <ul className="flex space-x-1 mr-1">
            <li>
              <button
                onClick={() => navigate("/")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === "/" 
                    ? "bg-[#ffa9f9]/20 text-[#fff7ad]" 
                    : "text-gray-400 hover:text-[#fff7ad] hover:bg-white/5"
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/wallet")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === "/wallet" 
                    ? "bg-[#ffa9f9]/20 text-[#fff7ad]" 
                    : "text-gray-400 hover:text-[#fff7ad] hover:bg-white/5"
                }`}
              >
                Wallet
              </button>
            </li>
          </ul>
          <ConnectButton />
        </div>
      </div>

    </nav>

  );
};

export default Navbar; 