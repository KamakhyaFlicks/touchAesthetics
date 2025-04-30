"use client"

import { useEffect, useRef, useState } from "react"
import { FaHeartbeat } from "react-icons/fa"
import ourvision from "../../assets/images/ourvision.jpg"

function OurVision() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target) // Stop observing after it becomes visible
          }
        })
      },
      {
        threshold: 0.2, // Adjust threshold as needed
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left side - Vision image */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="relative max-w-md mx-auto lg:max-w-full">
              {/* Main image */}
              <div className="overflow-hidden shadow-lg">
                <img
                  src={ourvision || "/placeholder.svg"}
                  alt="Our Vision"
                  className="w-full h-[300px] md:h-[350px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 bg-zinc-100 rounded-full opacity-70"></div>
              <div className="absolute -z-10 -top-4 -right-4 w-28 h-28 bg-zinc-50 rounded-full opacity-80"></div>

              {/* Stats badge */}
              <div
                className={`absolute bottom-3 right-3 md:bottom-6 md:right-6 bg-white backdrop-blur-sm p-3 shadow-lg z-10 transition-all duration-1000 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-center gap-2">
                  <FaHeartbeat className="text-zinc-700 w-4 h-4" />
                  <span className="text-zinc-800 font-medium text-sm">10+ Years</span>
                </div>
                <p className="text-zinc-600 text-xs mt-1">Excellence in Skin Care</p>
              </div>
            </div>
          </div>

          {/* Right side - Vision text */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="mb-4">
              <h4 className="font-serif font-light text-zinc-500 font-medium mb-1 tracking-wider text-lg">OUR VISION</h4>
              <h2 className="font-serif font-light text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight">
                Elevating Natural Beauty
              </h2>

              <div className="w-16 h-1 bg-zinc-300 mb-4"></div>
            </div>

            <div className="space-y-4">
              <p
                className={`text-zinc-700 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Our vision is to transform the landscape of skin and hair care through science-backed treatments that
                honor your natural beauty. We believe in enhancing what makes you unique, not conforming to temporary
                trends.
              </p>

              <p
                className={`text-zinc-700 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                We strive to create a space where advanced treatments meet personalized care, where each client's
                journey is as unique as their skin and hair profile.
              </p>

              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="bg-zinc-50 p-3 shadow-sm">
                  <h3 className="text-zinc-800 font-medium text-base mb-1">Natural Results</h3>
                  <p className="text-zinc-600 text-xs">Enhancing your beauty, not changing it.</p>
                </div>

                <div className="bg-zinc-50 p-3 shadow-sm">
                  <h3 className="text-zinc-800 font-medium text-base mb-1">Innovation</h3>
                  <p className="text-zinc-600 text-xs">Cutting-edge science for optimal care.</p>
                </div>
              </div>

              <div
                className={`mt-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-2 shadow-sm hover:shadow transition-all duration-300 text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurVision
