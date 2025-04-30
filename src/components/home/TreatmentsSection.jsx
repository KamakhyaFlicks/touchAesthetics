import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.jpg";
import service3 from "../../assets/images/service3.jpg";
import service4 from "../../assets/images/service4.jpg";

export default function TreatmentsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const treatments = [
    {
      id: 1,
      title: "Skin Treatments",
      description: "Advanced facials and skin rejuvenation therapies to restore your natural glow and combat signs of aging.",
      rating: 4.9,
      image: service1,
      alt: "Skin treatment"
    },
    {
      id: 2,
      title: "Hair Solutions",
      description: "Comprehensive hair loss treatments and scalp therapies to promote healthy hair growth and restoration.",
      rating: 4.8,
      image: service2,
      alt: "Hair treatment"
    },
    {
      id: 3,
      title: "Laser Procedures",
      description: "Precision laser treatments for hair removal, skin resurfacing, and pigmentation correction with minimal downtime.",
      rating: 4.7,
      image: service3,
      alt: "Laser treatment"
    },
    {
      id: 4,
      title: "Body Therapies",
      description: "Targeted body contouring and cellulite reduction treatments to sculpt and tone your body naturally.",
      rating: 4.8,
      image: service4,
      alt: "Body treatment"
    }
  ];

  return (
    <section className="py-10 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center mb-12">
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800  leading-tight">Our Premium Treatments</h2>
          <p className="text-center text-gray-600 max-w-xl " data-aos="fade-right" data-aos-delay="100">
            Because your skin and hair deserve the best—our treatments are crafted to restore, rejuvenate, and reveal your natural beauty.
            </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {treatments.map((treatment, index) => (
            <TreatmentCard 
              key={treatment.id} 
              treatment={treatment} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TreatmentCard({ treatment, index, isVisible }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const animationDelay = `${index * 100}ms`;
  
  return (
    <div 
      className={`relative overflow-hidden h-44 shadow-sm transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={treatment.image} 
        alt={treatment.alt}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
      />
      
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="transform transition-transform duration-300" style={{ transform: isHovered ? 'translateY(0)' : 'translateY(20px)' }}>
          <h3 className="text-white text-sm font-medium mb-1">{treatment.title}</h3>
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-3 h-3 ${i < Math.floor(treatment.rating) ? 'text-yellow-400' : 'text-gray-400'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white text-xs ml-1">{treatment.rating}</span>
            </div>
          </div>
          <p className="text-white text-xs opacity-90 mb-2 line-clamp-2">{treatment.description}</p>
          <button className="text-xs text-white border border-white/30 px-3 py-1 hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}