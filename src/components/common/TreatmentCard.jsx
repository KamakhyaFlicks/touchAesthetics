
import React, { useState } from "react";
import { Star, StarHalf, ArrowRight } from "lucide-react";



const TreatmentCard = ({ treatment, isVisible, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate star rating display
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-current text-amber-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-current text-amber-400" />);
    }

    return stars;
  };

  return (
    <div
      className={`relative overflow-hidden h-50 transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image layer */}
      <div className="absolute inset-0 w-full h-full bg-gray-100 transition-transform duration-500 ease-in-out">
        <img
          src={treatment.image}
          alt={treatment.alt}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          isHovered ? "opacity-40" : "opacity-0"
        }`}></div>
      </div>

      {/* Content overlay */}
      <div
        className={`absolute inset-0 flex flex-col justify-end p-4 text-white transition-all duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-lg font-medium mb-1">{treatment.title}</h3>
        <p className="text-sm mb-2">{treatment.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {renderStars(treatment.rating)}
            <span className="ml-1 text-xs">{treatment.rating}</span>
          </div>
          <button className="flex items-center text-xs font-medium bg-white text-gray-900 px-3 py-1 hover:bg-gray-100 transition-colors duration-300">
            Explore <ArrowRight className="w-3 h-3 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;