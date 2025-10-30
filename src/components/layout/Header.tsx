import React, { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-sm' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top bar with contact info */}
      <div className="bg-verde-pdf text-white py-2 px-4">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>(31) 99219-3857</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>alex.almeida.imob@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-verde-vibrante font-semibold animate-pulse">2ª Fase - Últimas Unidades!</span>
          </div>
        </div>
      </div>

     
    
    </header>
  );
};

export default Header;

