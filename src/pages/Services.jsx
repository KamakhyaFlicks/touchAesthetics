import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

// Import your service data
import serviceData from "../data/services.json"; // Adjust the path as necessary

const ServiceCard = ({ id, title, description, image }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Format the title for URL
  const formattedTitle = title.toLowerCase().replace(/ /g, "-");

  return (
    <Link to={`/service/${formattedTitle}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.4, delay: id % 6 * 0.1 }}
        className="bg-pink-50 group flex flex-col h-[300px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-rose-200 hover:cursor-pointer"
      >
        <div className="w-full h-[180px] overflow-hidden">
          <img
            src={image || `/images/services/${formattedTitle}-1.jpg`}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-between p-4 flex-grow">
          <div>
            <h3 className="text-lg font-serif font-light mb-1 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-2 transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("skin");
  const [filteredServices, setFilteredServices] = useState([]);
  
  const categories = [
    { id: "skin", label: "Skin" },
    { id: "hair", label: "Hair" },
    { id: "laser", label: "Laser" },
    { id: "body", label: "Body" },
  ];

  useEffect(() => {
    const filtered = serviceData.filter(
      (service) => service.category === selectedCategory
    );
    setFilteredServices(filtered);
  }, [selectedCategory]);

  return (
    <section className="py-12 bg-white" id="services">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-light mb-3 text-gray-800"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-sm"
          >
            Explore our range of professional treatments designed to enhance your natural beauty
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex space-x-2 md:space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-1.5 rounded-full text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? "bg-rose-100 text-rose-800"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredServices.length > 0 ? (
                filteredServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    description={service.description}
                    image={service.descriptions?.[0]?.image}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-10 text-gray-500">
                  No services found in this category.
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;