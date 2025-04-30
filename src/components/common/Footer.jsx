"use client"

import { useEffect, useRef, useState } from "react"
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaChevronRight
} from "react-icons/fa"

import logo from "../../assets/images/logo.png"

const Footer = () => {
  const footerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          // Reset animation when out of view for repeat effect
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px" // Trigger a bit before the footer is fully in view
      }
    )

    const currentFooter = footerRef.current
    if (currentFooter) {
      observer.observe(currentFooter)
    }

    return () => {
      if (currentFooter) {
        observer.unobserve(currentFooter)
      }
    }
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer ref={footerRef} className="w-full bg-[white] border-t border-[#e9d5c9] pt-16 overflow-hidden shadow-xl/10">
      {/* Top section with columns */}
      <div className="w-full mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Column 1 - About */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6">
              <a href="/" className="inline-block">
                <div className="w-50 flex items-center">
                    <img src={logo} alt="touche Aesthetics" className="w-full mr-3" />
                </div>
              </a>
            </div>
            
            <p className="text-zinc-900 mb-6">
              Dedicated to enhancing your natural beauty through advanced skin and hair treatments in a serene, professional environment.
            </p>
            
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-[#f3e8e0] hover:bg-[#c8a287] text-[#b08e75] hover:text-white flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-[#f3e8e0] hover:bg-[#c8a287] text-[#b08e75] hover:text-white flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-[#f3e8e0] hover:bg-[#c8a287] text-[#b08e75] hover:text-white flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-[#f3e8e0] hover:bg-[#c8a287] text-[#b08e75] hover:text-white flex items-center justify-center transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={16} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-zinc-800 font-serif font-light text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Services", "Our Doctors", "Book Appointment", "Contact Us", "Blog", "FAQs"].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-zinc-600 hover:text-gray-900 transition-colors duration-300 flex items-center"
                  >
                    <FaChevronRight className="mr-2 text-xs text-zinc-600 hover:text-gray-900 " />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Services */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="text-zinc-800 font-serif font-light text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Skin Care Treatments", 
                "Anti-Aging Solutions", 
                "Laser Treatments", 
                "Hair Restoration", 
                "Body Contouring", 
                "Dermal Fillers", 
                "Botox Treatment", 
                "Chemical Peels"
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-zinc-600 hover:text-gray-900  transition-colors duration-300 flex items-center"
                  >
                    <FaChevronRight className="mr-2 text-xs text-zinc-600 hover:text-gray-900 " />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="text-zinc-800 font-serif font-light text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1.5">
                  <FaMapMarkerAlt className="text-zinc-600 hover:text-gray-900 " />
                </div>
                <span className="ml-3 text-zinc-600 hover:text-gray-900 ">
                  A/41, South Extension Part-2, New Delhi - 110049, India
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-zinc-600 hover:text-gray-900 " />
                <a href="tel:+919220546827" className="ml-3 text-zinc-600 hover:text-gray-900 transition-colors duration-300">
                +91 9220546827
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-zinc-600 hover:text-gray-900 " />
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=toucheaesthetics0@gmail.com&su=Appointment%20Booking&body=Hello%20Team%2C%20I%20am%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 text-zinc-600 hover:text-gray-900  transition-colors duration-300"
                >
                  toucheaesthetics0@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <div className="mt-1.5">
                  <FaClock className="text-zinc-600 hover:text-gray-900 " />
                </div>
                <div className="ml-3">
                  <p className="text-zinc-600 hover:text-gray-900 ">Mon - Fri: 10:00 AM - 8:00 PM</p>
                  <p className="text-zinc-600 hover:text-gray-900 ">Sat - Sun: 10:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div 
          className={`mt-16 bg-white/70 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-xl/10 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-[#b08e75] font-medium text-xl mb-2">Stay Updated</h3>
              <p className="text-[#7d6e63]">
                Subscribe to our newsletter for special offers and skin care tips.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-md border border-[#e9d5c9] focus:outline-none focus:border-[#c8a287] bg-white min-w-0 w-full sm:w-64"
                  required
                />
                <button 
                  type="submit"
                  className="bg-[#c8a287] hover:bg-[#b08e75] text-white px-6 py-3 rounded-md transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar with copyright */}
      <div 
        className={`mt-16 py-6 border-t border-[#e9d5c9] transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1000ms" }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-[#7d6e63] text-sm mb-4 md:mb-0">
              &copy; {currentYear} Touch Aesthetics. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#7d6e63]">
              <a href="#" className="hover:text-[#c8a287] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-[#c8a287] transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-[#c8a287] transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer