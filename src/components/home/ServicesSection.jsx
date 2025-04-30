import React, { useEffect } from 'react';
import ServiceCard from "../common/ServiceCard"
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    id: 1,
    title: 'Hydrafacial Treatment',
    description: 'Deep cleansing facial that removes impurities while hydrating the skin.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Keratin Hair Treatment',
    description: 'Smoothing treatment that reduces frizz and adds shine to damaged hair.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Microdermabrasion',
    description: 'Exfoliating treatment that reveals fresher, younger-looking skin.',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Hair Color & Highlights',
    description: 'Custom color services to enhance your natural beauty.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1469&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Chemical Peel',
    description: 'Skin resurfacing treatment that improves texture and tone.',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    title: 'Scalp Treatment',
    description: 'Therapeutic massage and treatment for a healthier scalp and hair.',
    rating: 4.7,
    image: 'https://cdn.pixabay.com/photo/2021/06/24/12/26/hair-6361059_1280.jpg'
  },
  {
    id: 7,
    title: 'LED Light Therapy',
    description: 'Non-invasive treatment that promotes collagen production and reduces inflammation.',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Brazilian Blowout',
    description: 'Professional smoothing treatment that eliminates frizz for up to 12 weeks.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1469&auto=format&fit=crop'
  }
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className=" py-16 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className='m-auto'>
            <h2 className=" text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800 leading-tight w-full mb-2 text-center" data-aos="fade-right">Our Best Services</h2>
            <p className="text-center text-gray-600 max-w-xl" data-aos="fade-right" data-aos-delay="100">
              Discover our premium treatments tailored to enhance your natural beauty and wellness
            </p>
            
          </div>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              rating={service.rating}
              image={service.image}
            />
          ))}
          <button 
            className="absolute right-1 -bottom-10 mt-4 md:mt-0 flex items-center gap-2 group hover:opacity-80 transition-all duration-300"
            data-aos="fade-left"
          >
            <span className="font-serif font-light">Explore More</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 " />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;