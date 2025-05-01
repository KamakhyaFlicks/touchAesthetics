import { useState, useEffect, useRef } from "react"
import doctor1 from "../assets/images/doctor1.jpg"
import doctor2 from "../assets/images/doctor2.jpg"
import doctor3 from "../assets/images/doctor3.jpg"
export default function Team() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    doctors: false,
    support: false,
    cta: false,
  })

  // Create refs for each section
  const heroRef = useRef(null)
  const doctorsRef = useRef(null)
  const supportRef = useRef(null)
  const ctaRef = useRef(null)

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
    const doctorsObserver = createObserver(doctorsRef, "doctors")
    const supportObserver = createObserver(supportRef, "support")
    const ctaObserver = createObserver(ctaRef, "cta")

    return () => {
      // Clean up observers
      if (heroRef.current) heroObserver.unobserve(heroRef.current)
      if (doctorsRef.current) doctorsObserver.unobserve(doctorsRef.current)
      if (supportRef.current) supportObserver.unobserve(supportRef.current)
      if (ctaRef.current) ctaObserver.unobserve(ctaRef.current)
    }
  }, [])

  // Doctors data
  const doctors = [
    {
      id: 1,
      name: "Dr. Subhanshu Singh Rajput",
      title: "Dermatologist & Founder",
      specialty: "Cosmetic Dermatology",
      experience:
        "15+ years of experience in advanced skin treatments and hair restoration. Board-certified with specialization from AIIMS.",
      image: doctor1,
    },
    {
      id: 2,
      name: "Dr. Hansraj Sharma",
      title: "Senior Dermatologist",
      specialty: "Medical Dermatology",
      experience:
        "12 years of expertise in treating complex skin conditions and inflammatory disorders. Fellowship in Clinical Dermatology.",
      image: doctor2,
    },
    {
      id: 3,
      name: "Dr. Lalit Kasana",
      title: "Hair Restoration Specialist",
      specialty: "Trichology",
      experience:
        "10+ years focused on hair loss treatments and transplantation procedures. Pioneer in PRP therapy for hair regrowth.",
      image: doctor3,
    },
  ]

  // Support team data
  const supportTeam = [
    {
      id: 1,
      name: "Riya Malhotra",
      title: "Clinical Coordinator",
      description: "Ensures seamless patient experience from consultation to treatment completion.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Aditya Kumar",
      title: "Senior Aesthetician",
      description: "Certified in advanced facial treatments and specialized skincare protocols.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Neha Gupta",
      title: "Patient Care Specialist",
      description: "Dedicated to providing personalized support throughout your treatment journey.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Rahul Verma",
      title: "Clinic Manager",
      description: "Oversees clinic operations to ensure the highest standards of care and service.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div ref={heroRef} className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className={`text-center transition-all duration-700 transform ${
              isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800  leading-tight">Our Expert Team</h1>
            <div className="w-16 h-0.5 bg-zinc-200 mx-auto mb-6"></div>
            <p className="text-zinc-600 max-w-lg mx-auto">
              Meet our team of specialized dermatologists and support staff dedicated to providing exceptional care for
              your skin and hair needs.
            </p>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <div ref={doctorsRef} className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`mb-10 transition-all duration-700 transform ${
              isVisible.doctors ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800  leading-tight">Medical Specialists</h2>
            <div className="w-12 h-0.5 bg-zinc-200 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10">
            {doctors.map((doctor, index) => (
              <div
                key={doctor.id}
                className={`bg-pink-50 transition-all duration-700 transform ${
                  isVisible.doctors ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: isVisible.doctors ? `${index * 100}ms` : "0ms" }}
              >
                <div className="bg-zinc-50 p-1">
                  <img
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-serif text-zinc-800">{doctor.name}</h3>
                  <p className="text-zinc-500 text-sm mb-1">{doctor.title}</p>
                  <p className="text-zinc-700 font-medium text-sm mb-2">{doctor.specialty}</p>
                  <p className="text-zinc-600 text-sm">{doctor.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Team Section */}
      <div ref={supportRef} className="py-12 md:py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`mb-10 transition-all duration-700 transform ${
              isVisible.support ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl font-serif font-light text-zinc-800 mb-2">Support Team</h2>
            <div className="w-12 h-0.5 bg-zinc-300 mb-4"></div>
            <p className="text-zinc-600 max-w-2xl">
              Our dedicated support staff ensures your experience is seamless from the moment you walk through our
              doors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTeam.map((member, index) => (
              <div
                key={member.id}
                className={`bg-white transition-all duration-700 transform ${
                  isVisible.support ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible.support ? `${index * 100}ms` : "0ms" }}
              >
                <div className="bg-zinc-100 p-1">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-48 object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-zinc-800 font-medium">{member.name}</h3>
                  <p className="text-zinc-500 text-sm mb-2">{member.title}</p>
                  <p className="text-zinc-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div ref={ctaRef} className="py-12 md:py-16 bg-white">
        <div
          className={`max-w-3xl mx-auto px-4 text-center transition-all duration-700 transform ${
            isVisible.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl md:text-2xl font-serif font-light text-zinc-800 mb-4">
            Schedule a Consultation With Our Experts
          </h3>
          <p className="text-zinc-600 mb-6 max-w-xl mx-auto">
            Our specialists are ready to provide personalized care for your unique skin and hair concerns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white transition-colors duration-300">
              Book an Appointment
            </button>
            <button className="px-6 py-2 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-800 transition-colors duration-300">
              Meet Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
