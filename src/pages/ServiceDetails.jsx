import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft } from "lucide-react";

// Import your service data
import serviceData from "../data/services.json";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Reusable section title component
const ServiceDetailSection = ({ title, subtitle, centered = false, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className={centered ? "text-center" : ""}
    >
      <h2 className="text-2xl md:text-3xl font-serif font-light mb-3 text-gray-800">
        {title}
      </h2>
      <p className="text-gray-600 max-w-3xl">
        {subtitle}
      </p>
    </motion.div>
  );
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the service by title in the URL (convert to lowercase and replace spaces with hyphens)
    const formattedServiceId = serviceId.toLowerCase().replace(/-/g, " ");
    const foundService = serviceData.find(
      (s) => s.title.toLowerCase() === formattedServiceId
    );

    if (foundService) {
      setService(foundService);
    }
    setLoading(false);
  }, [serviceId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-300"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-serif mb-4">Service not found</h2>
        <Link
          to="/services"
          className="inline-flex items-center text-rose-600 hover:text-rose-800 transition-colors"
        >
          <ChevronLeft size={18} />
          <span>Back to all services</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="relative bg-rose-50 py-16 md:py-24"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <Link
            to="/services"
            className="inline-flex items-center text-rose-600 hover:text-rose-800 transition-colors mb-6"
          >
            <ChevronLeft size={18} />
            <span>Back to all services</span>
          </Link>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-800 mb-4">
                {service.title}
              </h1>
              <p className="text-gray-600 md:text-lg mb-6">
                {service.description}
              </p>
              {service.category && (
                <div className="inline-block bg-rose-100 px-3 py-1 rounded-full text-sm text-rose-800">
                  {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 lg:w-2/5 aspect-[4/3] overflow-hidden rounded-lg shadow-md">
              <img
                src={service.descriptions[0].image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits with images */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <ServiceDetailSection
            title="Treatment Benefits"
            subtitle="Discover how our treatment can help you"
            delay={0.2}
          />

          <div className="space-y-16 md:space-y-24 mt-12">
            {service.descriptions.map((item, index) => (
              <BenefitItem 
                key={index} 
                item={item} 
                index={index} 
                serviceName={service.title} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <ServiceDetailSection
            title="Our Treatment Process"
            subtitle="What to expect during your treatment"
            delay={0.3}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {service.process.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <ServiceDetailSection
            title="Ready to Experience the Difference?"
            subtitle="Book your consultation today and take the first step towards transformation"
            centered={true}
            delay={0.4}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full transition-colors duration-300 shadow-sm hover:shadow-md">
              Book Appointment
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Extracted BenefitItem component to fix Hook ordering issues
const BenefitItem = ({ item, index, serviceName }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  // Alternate layout for even/odd items
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 md:gap-12 items-center`}
    >
      <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-lg shadow-md">
        <img
          src={item.image}
          alt={`${serviceName} benefit ${index + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      
      <div className="w-full md:w-1/2">
        <div className="w-12 h-1 bg-rose-200 mb-6"></div>
        <p className="text-gray-700 md:text-lg">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

// Extracted ProcessStep component to fix Hook ordering issues
const ProcessStep = ({ step, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-800 font-serif text-lg mb-4">
        {index + 1}
      </div>
      <p className="text-gray-700">{step}</p>
    </motion.div>
  );
};

export default ServiceDetails;