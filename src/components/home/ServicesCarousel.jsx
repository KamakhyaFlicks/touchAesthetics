"use client"

import { useEffect, useRef, useState } from "react"
// import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Services data
const services = [
  {
    id: 1,
    title: "Facial Treatments",
    description: "Rejuvenate your skin with our premium facial treatments tailored to your skin type.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    title: "Hair Therapy",
    description: "Restore shine and health to your hair with our specialized therapy sessions.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    title: "Skin Consultation",
    description: "Get expert advice on your skin concerns from our certified dermatologists.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    title: "Anti-Aging Treatment",
    description: "Turn back the clock with our effective anti-aging treatments and procedures.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    title: "Hair Coloring",
    description: "Express yourself with our premium, gentle hair coloring services.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    title: "Acne Treatment",
    description: "Clear your skin with our specialized acne treatments and ongoing care.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 7,
    title: "Hair Extensions",
    description: "Add length and volume with our natural-looking hair extension services.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 8,
    title: "Spa Packages",
    description: "Indulge in our comprehensive spa packages for total relaxation and rejuvenation.",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const carouselRef = useRef(null)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Determine how many cards to show based on screen size
  const [cardsToShow, setCardsToShow] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1)
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2)
      } else {
        setCardsToShow(4)
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (carouselRef.current) {
      observer.observe(carouselRef.current)
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current)
      }
    }
  }, [])

  // Handle navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + cardsToShow >= services.length ? 0 : prevIndex + cardsToShow))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsToShow < 0 ? Math.max(0, services.length - cardsToShow) : prevIndex - cardsToShow,
    )
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }

    if (isRightSwipe) {
      prevSlide()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  // Calculate visible services
  const visibleServices = services.slice(currentIndex, currentIndex + cardsToShow)

  // If we don't have enough services to fill the view, add from the beginning
  if (visibleServices.length < cardsToShow) {
    const remaining = cardsToShow - visibleServices.length
    visibleServices.push(...services.slice(0, remaining))
  }

  return (
    <section ref={carouselRef} className="py-16 px-4 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-4">Our Services</h2>
          <p className="text-lg text-rose-600 max-w-2xl mx-auto">
            Discover our range of premium skin and hair treatments designed to enhance your natural beauty
          </p>
        </div>

        <div className="relative">
          {/* Carousel navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-white/80 hover:bg-white text-rose-600 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous services"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-white/80 hover:bg-white text-rose-600 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next services"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel container */}
          <div
            className={`transition-all duration-700 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-label="Services carousel"
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(0%)`,
                gap: "1.5rem",
              }}
            >
              {visibleServices.map((service, index) => (
                <div
                  key={`${service.id}-${index}`}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg h-80 group">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-800/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(services.length / cardsToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * cardsToShow)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / cardsToShow) === index ? "w-6 bg-rose-600" : "w-2 bg-rose-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            Explore More Services
          </button>
        </div>
      </div>
    </section>
  )
}
