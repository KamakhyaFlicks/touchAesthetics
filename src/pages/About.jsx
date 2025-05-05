import { useState, useEffect, useRef } from "react"
import contact from "../assets/images/contact.jpg"
import CEO from "../assets/images/CEO.jpg";

export default function About() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    story: false,
    mission: false,
    values: false,
    achievements: false,
    testimonials: false,
  })

  // Create refs for each section
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const missionRef = useRef(null)
  const valuesRef = useRef(null)
  const achievementsRef = useRef(null)
  const testimonialsRef = useRef(null)

  useEffect(() => {
    // Intersection observer for scroll animations
    const createObserver = (ref, section) => {
      const observer = new IntersectionObserver(
        (entries) => {
          setIsVisible((prev) => ({
            ...prev,
            [section]: entries[0].isIntersecting,
          }))
        },
        { threshold: 0.2 },
      )

      if (ref.current) observer.observe(ref.current)
      return observer
    }

    // Create observers for each section
    const heroObserver = createObserver(heroRef, "hero")
    const storyObserver = createObserver(storyRef, "story")
    const missionObserver = createObserver(missionRef, "mission")
    const valuesObserver = createObserver(valuesRef, "values")
    const achievementsObserver = createObserver(achievementsRef, "achievements")
    const testimonialsObserver = createObserver(testimonialsRef, "testimonials")

    return () => {
      // Clean up observers
      if (heroRef.current) heroObserver.unobserve(heroRef.current)
      if (storyRef.current) storyObserver.unobserve(storyRef.current)
      if (missionRef.current) missionObserver.unobserve(missionRef.current)
      if (valuesRef.current) valuesObserver.unobserve(valuesRef.current)
      if (achievementsRef.current) achievementsObserver.unobserve(achievementsRef.current)
      if (testimonialsRef.current) testimonialsObserver.unobserve(testimonialsRef.current)
    }
  }, [])

  // Values data
  const values = [
    {
      id: 1,
      title: "Excellence",
      description: "Advanced technologies and proven methods for optimal results.",
      icon: "✦",
    },
    {
      id: 2,
      title: "Personalization",
      description: "Tailored approaches for your specific concerns and goals.",
      icon: "✦",
    },
    {
      id: 3,
      title: "Trust",
      description: "Building relationships based on honesty and consistent results.",
      icon: "✦",
    },
    {
      id: 4,
      title: "Innovation",
      description: "Incorporating the latest advancements in dermatology.",
      icon: "✦",
    },
  ]

  // Achievements data
  const achievements = [
    {
      id: 1,
      number: "15+",
      label: "Years of Excellence",
    },
    {
      id: 2,
      number: "25K+",
      label: "Satisfied Patients",
    },
    {
      id: 3,
      number: "12",
      label: "Expert Specialists",
    },
    {
      id: 4,
      number: "8",
      label: "Locations Nationwide",
    },
  ]

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote:
        "The personalized care I received transformed my skin completely. Their team took the time to understand my concerns and created a treatment plan that truly worked.",
      author: "Priya M.",
      location: "Delhi",
    },
    {
      id: 2,
      quote:
        "After struggling with hair loss for years, I finally found a solution. Their expertise and advanced treatments have given me my confidence back.",
      author: "Arjun S.",
      location: "Mumbai",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section - Minimalistic */}
      <div ref={heroRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`text-center transition-all duration-700 transform ${
              isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800  leading-tight">About Us</h1>
            <div className="w-16 h-0.5 bg-zinc-200 mx-auto mb-6"></div>
            <p className="text-zinc-600 max-w-lg mx-auto">
              Transforming lives through advanced dermatology and personalized care since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div ref={storyRef} className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div
              className={` transition-all duration-700 transform ${
                isVisible.story ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <img
                src={CEO}
                alt="Our clinic founder"
                className="w-full shadow-md object-cover"
              />
            </div>
            <div
              className={`transition-all duration-700 transform ${
                isVisible.story ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800  leading-tight">Our Story</h2>
              <div className="w-12 h-0.5 bg-zinc-300 mb-4"></div>
              <p className="text-zinc-600 mb-4">
                Founded in 2010 by Dr. Subhanshu Singh Rajput, our clinic began as a small practice with a powerful
                vision: to combine medical expertise with a personalized approach to skincare.
              </p>
              <p className="text-zinc-600">
                Today, we've grown to multiple locations across India, but our commitment remains the same: providing
                exceptional care that helps our patients feel confident in their skin.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div ref={missionRef} className="py-12 md:py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`transition-all duration-700 transform ${
                isVisible.mission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible.mission ? "200ms" : "0ms" }}
            >
              <h3 className="text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800  leading-tight">Our Mission</h3>
              <div className="w-12 h-0.5 bg-zinc-300 mb-4"></div>
              <p className="text-zinc-600">
                To provide accessible, comprehensive, and personalized dermatological care that enhances our patients'
                quality of life. We strive to solve skin and hair concerns with evidence-based treatments.
              </p>
            </div>

            <div
              className={`transition-all duration-700 transform ${
                isVisible.mission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible.mission ? "400ms" : "0ms" }}
            >
              <h3 className="text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800  leading-tight">Our Vision</h3>
              <div className="w-12 h-0.5 bg-zinc-300 mb-4"></div>
              <p className="text-zinc-600">
                To be India's most trusted dermatology practice, known for our exceptional medical expertise, innovative
                treatments, and holistic approach to skin and hair health.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div ref={valuesRef} className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`text-center mb-8 transition-all duration-700 transform ${
              isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800  leading-tight">Our Values</h2>
            <div className="w-12 h-0.5 bg-zinc-300 mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.id}
                className={`bg-zinc-50 p-5 transition-all duration-700 transform ${
                  isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible.values ? `${index * 150}ms` : "0ms" }}
              >
                <div className="flex items-center justify-center w-8 h-8 bg-zinc-200 text-zinc-600 mb-3 mx-auto">
                  <span>{value.icon}</span>
                </div>
                <h3 className="text-center text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-serif font-light text-gray-800 mb-3 mt-3 leading-tight text-zinc-800 font-serif font-light text-gray-800  leading-tight">{value.title}</h3>
                <p className="text-zinc-600 text-sm text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div ref={achievementsRef} className="py-12 md:py-16 bg-zinc-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <div
                key={item.id}
                className={`text-center transition-all duration-700 transform ${
                  isVisible.achievements ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: isVisible.achievements ? `${index * 150}ms` : "0ms" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{item.number}</div>
                <div className="text-sm text-zinc-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div ref={testimonialsRef} className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`text-center mb-8 transition-all duration-700 transform ${
              isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800 leading-tight">What Our Patients Say</h2>
            <div className="w-12 h-0.5 bg-zinc-300 mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-zinc-50 p-6 transition-all duration-700 transform ${
                  isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible.testimonials ? `${index * 200}ms` : "0ms" }}
              >
                <p className="text-zinc-600 mb-4 text-md md:text-sm">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-zinc-200 mr-3"></div>
                  <div>
                    <div className="font-medium text-zinc-800 text-sm">{testimonial.author}</div>
                    <div className="text-xs text-zinc-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 md:py-16 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800  leading-tight">Begin Your Transformation Journey</h3>
          <p className="text-zinc-600 mb-6 max-w-xl mx-auto">
            Book a consultation with our experts and discover personalized solutions for your skin and hair concerns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/appointmentbooking" >

            <button className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white transition-colors duration-300 hover:cursor-pointer">
              Book a Consultation
            </button>
            </a>
            <a href="/contact" >
            <button className="px-6 py-2 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-800 transition-colors duration-300 hover:cursor-pointer">
              Contact Us
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
