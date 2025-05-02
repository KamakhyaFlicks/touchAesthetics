import React from 'react'
import Banner from '../components/home/Banner'
// import WhyChooseUs from '../components/home/WhyChooseUs'
import OurVision from '../components/home/OurVision'
// import AppointmentPopup from '../components/appointment/AppointmentPopup'
// import ServicesCarousel from '../components/home/ServicesCarousel'
import TreatmentsSection from '../components/home/TreatmentsSection'
import ServicesSection from '../components/home/ServicesSection'
import TreatmentProcess from '../components/home/TreatmentProcess'
import ServiceDetails from './ServiceDetails'
// import Services from './Services'
// import ServicesSection from '../components/home/ServicesPreview'
function Home() {
  return (
    <>
        <div className='relative overflow-hidden w-full'>
            <Banner/>
            <TreatmentsSection/>
            <ServicesSection/>
            <TreatmentProcess/>
            {/* <WhyChooseUs/> */}
            <OurVision/>
            <h2 className="text-center text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mt-10 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800 leading-tight">Our Location</h2>
            {/* <AppointmentPopup/> */}
            <div className="py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className={"opacity-100 translate-y-0"}
          >
            <div className="h-64 md:h-80 bg-zinc-100 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2536889184513!2d77.21822397549395!3d28.566396175557184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce329e911b6db%3A0x195d4775acfaa380!2sTOUCHE%20AESTHETICS!5e0!3m2!1sen!2sin!4v1714487066345!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              ></iframe>
            </div>

            <div className="flex justify-center mt-6">
              <a
                href="https://www.google.co.in/maps/place/TOUCHE+AESTHETICS/@28.5665661,77.218044,16.11z/data=!4m6!3m5!1s0x390ce329e911b6db:0x195d4775acfaa380!8m2!3d28.5663962!4d77.2208124!16s%2Fg%2F11x11_9dkc?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm transition-colors duration-300"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Home