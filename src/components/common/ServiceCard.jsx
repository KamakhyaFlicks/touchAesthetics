import React from 'react';
import { Star } from 'lucide-react';
import { Link } from "react-router-dom";


const ServiceCard = ({ id, title, description, rating, image }) => {

  const formattedTitle = title.toLowerCase().replace(/ /g, "-");
  return (
    <Link to={`/service/${formattedTitle}`}>

    
    <div 
      className="bg-pink-50 group flex flex-col h-[300px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-rose-200 hover:cursor-pointer "
      data-aos="fade-up"
      data-aos-delay={id * 100}
    >
      <div className="w-full h-[180px] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>

      <div className="flex flex-col justify-between p-4 flex-grow">
        <div>
          <h3 className="text-lg font-serif font-light mb-1  transition-colors duration-300">{title}</h3>
          <p className="text-sm text-gray-500 line-clamp-2 transition-colors duration-300">{description}</p>
        </div>
        {/* <div className="flex items-center mt-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-pink-300 fill-pink-200' : 'text-pink-300'}`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600 duration-300">{rating.toFixed(1)}</span>
        </div> */}
      </div>
    </div>
    </Link>
  );
};

export default ServiceCard;