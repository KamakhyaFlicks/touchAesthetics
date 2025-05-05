import { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.png"; // Adjust the path as necessary
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { FaSquareThreads } from "react-icons/fa6";


const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const currentFooter = footerRef.current;
    if (currentFooter) {
      observer.observe(currentFooter);
    }

    return () => {
      if (currentFooter) observer.unobserve(currentFooter);
    };
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
    // In a real application, you would send this to your backend
  };

  // Services data
  const services = [
    "Skin Care", "Anti-Aging", "Laser Treatments", 
    "Hair Restoration", "Body Contouring", "Dermal Fillers"
  ];

  // Social media icons (using appropriate tailwind classes instead of FontAwesome)
  const socialIcons = [
    { name: "Instagram", icon: <BsInstagram/>, link: "https://www.instagram.com/toucheaesthetics/"},
    { name: "Facebook", icon: <BsFacebook/>, link: "#" },
    { name: "Thread", icon: <FaSquareThreads/>, link:"https://www.threads.com/@toucheaesthetics" },
    { name: "YouTube", icon: <BsYoutube/>, link:"https://www.youtube.com/channel/UCwB4l3yV2IOEJvz75bf7onA" },
  ];

  return (
    <footer ref={footerRef} className="w-full bg-white border-t border-[#e9d5c9] pt-12 shadow-sm overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div 
            className={`space-y-4 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center w-45 h-20">
              <img src={logo} alt="Touché Aesthetics Logo" className="h-full " />
            </div>
            <p className="text-zinc-600 text-sm">
              Enhancing your natural beauty through advanced skin and hair treatments in a serene environment.
            </p>
            <div className="flex space-x-2">
              {socialIcons.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-900 hover:bg-gray-700 text-[#b08e75] text-white flex items-center justify-center transition-colors duration-300"
                  aria-label={platform.name}
                >
                  {platform.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2 - Services */}
          <div 
            className={`space-y-4 transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-zinc-800 font-serif text-base">Services</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-zinc-600 hover:text-[#b08e75] transition-colors duration-300 flex items-center"
                  >
                    <span className="text-xs mr-1">›</span> {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div 
            className={`space-y-4 transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-zinc-800 font-serif text-base">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mt-1 text-[#b08e75]">📍</span>
                <span className="ml-2 text-zinc-600">
                  South Extension Part-2, New Delhi
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-[#b08e75]">📞</span>
                <a href="tel:+919220546827" className="ml-2 text-zinc-600 hover:text-[#b08e75]">
                  +91 9220546827
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-[#b08e75]">✉️</span>
                <a href="mailto:toucheaesthetics@gmail.com" className="ml-2 text-zinc-600 hover:text-[#b08e75] truncate">
                  toucheaesthetics@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div 
            className={`space-y-4 transition-all duration-500 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-zinc-800 font-serif text-base">Subscribe</h3>
            <p className="text-zinc-600 text-sm">Stay updated with our special offers and skin care tips.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="px-3 py-2 border focus:outline-none focus:border-[#c8a287] bg-white text-sm flex-grow"
              />
              <button
                onClick={handleSubscribe}
                className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2  transition-colors duration-300 text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom bar with copyright */}
        <div 
          className={`mt-10 py-4 border-t border-[#e9d5c9] transition-all duration-500 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500">
            <p>© {currentYear} Touché Aesthetics. All rights reserved.</p>
            <div className="flex mt-2 md:mt-0 space-x-4">
              <a href="#" className="hover:text-[#b08e75] transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-[#b08e75] transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-[#b08e75] transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;