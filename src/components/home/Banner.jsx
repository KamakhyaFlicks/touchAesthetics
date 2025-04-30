import { useEffect, useRef, useState } from "react"
import banner1 from "../../assets/images/banner1.jpg"
const Banner = () => {
  const bannerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1,
      },
    )

    const currentBanner = bannerRef.current
    if (currentBanner) {
      observer.observe(currentBanner)
    }

    return () => {
      if (currentBanner) {
        observer.unobserve(currentBanner)
      }
    }
  }, [])

  return (
    <section
      ref={bannerRef}
      className="w-full bg-white py-8 overflow-hidden"
    >
      <div className="container w-full mx-auto px-4 ">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div
            className={`w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800 mb-6 leading-tight">
              Discover Your Natural Beauty
            </h2>

            <p className="text-zinc-600 mb-4 text-sm leading-relaxed">
              At Touche Aesthetics, we enhance your natural beauty through advanced treatments tailored to
              your unique needs with our team of certified dermatologists and specialists.
            </p>

            <div
              className={`transition-all duration-1000 delay-300 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
            <a href="/appointmentbooking">

              <button className="bg-zinc-900 hover:bg-zinc-700 text-white px-6 py-2 transition-colors duration-300 text-sm font-serif font-light hover:cursor-pointer">
                Book an Appointment
              </button>
            </a>
            </div>
          </div>

          {/* Image */}
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 delay-150 ease-out  ${
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-10 scale-95"
            }`}
          >
            <div className="relative overflow-hidden shadow-md h-74 ">
              <img
                src={banner1}
                alt="Skin care specialist with patient"
                className="w-full h-full shadow-xl/10 border-neutral-200 max-h-74 object-cover "
              />

              {/* Decorative elements - smaller and more subtle */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gray-100 rounded-full opacity-60"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gray-200 rounded-full opacity-40"></div>

              {/* Floating badge - simplified */}
              <div
                className={`absolute top-4 right-4 bg-white px-3 py-2 shadow-sm transition-all duration-1000 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                }`}
              >
                <p className="text-zinc-800 font-medium text-xs">Certified Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner