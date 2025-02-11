'use client';

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-14">
      <div className="h-full flex items-center border-b border-white/5">
        <div className="max-w-4xl w-full mx-auto px-3">
          <div className="w-48">
            <Link href="/" className="flex items-center gap-3 group">
              <Image 
                src="/suiko.svg" 
                alt="Suiko Logo" 
                width={28} 
                height={28} 
                className="relative transform group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-lg font-medium text-white/70 group-hover:text-white/90 transition-colors">
                Suiko
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 