import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import logo from "../../assets/images/logo.png"; // Adjust the path as necessary
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = {
    "Skin Care Treatments": [
      "Botox",
      "Dermal Fillers",
      "Thread-lifts",
      "Removes Deep Wrinkles & Dark Rings",
      "Removes Acne Scars & Stretch Marks",
      "Overall Skin Rejuvenation"
    ],
    "Laser Treatments": [
      "Ablative Lasers",
      "Non-Ablative Lasers"
    ],
    "Anti-Ageing Treatments": [
      "Dermal Fillers",
      "Lasers For Skin Rejuvenation",
      "Chemical Peels",
      "Microdermabrasion"
    ]
  };

  return (
    <nav className="sticky top-0 w-full bg-white backdrop-blur-md border-b border-neutral-200 z-50 shadow-xl/10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 w-48">
            <img src={logo} className="w-full "/>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-neutral-900 hover:text-neutral-600 px-3 py-2 text-sm font-serif font-light transition-colors">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                className="font-serif font-light flex items-center text-neutral-900 hover:text-neutral-600 px-3 py-2 text-sm font-medium transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <ChevronDown className="ml-1 h-4 w-4 font-serif font-light" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-[500px] bg-white rounded-md shadow-lg p-4 z-20">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(services).map(([category, items]) => (
                      <div key={category} className="p-3">
                        <h3 className="font-medium text-neutral-900 mb-2">{category}</h3>
                        <ul className="space-y-2">
                          {items.map((item) => (
                            <li key={item}>
                              <a href="#" className="block text-sm text-neutral-600 hover:text-neutral-900">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/team" className="text-neutral-900 hover:text-neutral-600 px-3 py-2 text-sm font-medium transition-colors font-serif font-light">
              Doctors/Team
            </a>

            <a href="/contact" className="text-neutral-900 hover:text-neutral-600 px-3 py-2 text-sm font-medium transition-colors font-serif font-light">
              Contact
            </a>
            <a href="/about" className="text-neutral-900 hover:text-neutral-600 px-3 py-2 text-sm font-medium transition-colors font-serif font-light">
              About
            </a>
          </div>

          {/* Book Appointment Button */}
          <a href='/appointmentbooking'>

          <button
            className="hidden md:inline-flex bg-zinc-900 text-[white] font-serif font-light hover:bg-zinc-700 px-4 py-2 text-sm font-medium transition-colors cursor-pointer" 
          >
          
            Book Appointment
          </button>
          </a>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-200"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
          >
            Home
          </a>
          {Object.entries(services).map(([category, items]) => (
            <div key={category} className="px-3 py-2">
              <h3 className="text-sm font-medium text-neutral-900 mb-2">{category}</h3>
              <ul className="pl-4 space-y-1">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block text-sm text-neutral-600 hover:text-neutral-900 py-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <a
            href="/team"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
          >
            Doctors/Team
          </a>
          
          <a
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
          >
            Contact
          </a>
          <a
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
          >
            About
          </a>
          <div className="px-3 py-2">
            <a href='/appointmentbooking'>
            <button
              className="w-full bg-rose-100 text-rose-900 hover:bg-rose-200 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Book Appointment
            </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;