"use client"

import { useState, useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    form: false,
    info: false,
    map: false,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "General Inquiry",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" })

  // Create refs for each section
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)
  const mapRef = useRef(null)
  const emailFormRef = useRef()

  useEffect(() => {
    // Intersection observer for scroll animations
    const createObserver = (ref, section) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [section]: true,
            }))
          }
        },
        { threshold: 0.2 },
      )

      if (ref.current) observer.observe(ref.current)
      return observer
    }

    // Create observers for each section
    const heroObserver = createObserver(heroRef, "hero")
    const formObserver = createObserver(formRef, "form")
    const infoObserver = createObserver(infoRef, "info")
    const mapObserver = createObserver(mapRef, "map")

    return () => {
      // Clean up observers
      if (heroRef.current) heroObserver.unobserve(heroRef.current)
      if (formRef.current) formObserver.unobserve(formRef.current)
      if (infoRef.current) infoObserver.unobserve(infoRef.current)
      if (mapRef.current) mapObserver.unobserve(mapRef.current)
    }
  }, [])

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: false, message: "" })

    // Prepare template parameters for EmailJS
    const templateParams = {
      to_email: "cash.souravkr12@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      service: formData.service,
    }

    // Replace these with your actual EmailJS service ID, template ID, and public key
    emailjs
      .send("service_h2yiz34", "template_h6x2ulc", templateParams, "zB_bhd03Tc8V5OIFE")
      .then((response) => {
        console.log("Email sent successfully:", response)
        setSubmitStatus({
          success: true,
          message: "Message sent successfully!",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          service: "General Inquiry",
        })

        setIsSubmitting(false)
      })
      .catch((error) => {
        console.error("Failed to send email:", error)
        setSubmitStatus({
          success: false,
          message: "Failed to send message. Please try again.",
        })
        setIsSubmitting(false)
      })
  }

  // Services for dropdown
  const services = [
    "General Inquiry",
    "Skin Consultation",
    "Hair Treatment",
    "Cosmetic Procedure",
    "Medical Dermatology",
  ]

  // Contact info data
  const contactInfo = [
    {
      title: "Call",
      details: "+91 9220546827",
      icon: "☎",
    },
    {
      title: "Email",
      details: "toucheaesthetics0@gmail.com",
      icon: "✉",
    },
    {
      title: "Visit",
      details: "A/41, South Extension Part-2, New Delhi",
      icon: "📍",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section - Minimalistic */}
      <div ref={heroRef} className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className={`text-center transition-all duration-700 transform ${
              isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800  leading-tight">Get in Touch</h1>
            <div className="w-16 h-0.5 bg-zinc-200 mx-auto mb-4"></div>
            <p className="text-zinc-600 max-w-lg mx-auto">
              We're here to answer your questions and help you look and feel your best
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form - Clean and Minimal */}
      <div ref={formRef} className="py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Form */}
            <div
              className={`transition-all duration-700 transform ${
                isVisible.form ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800  leading-tight">Send a Message</h2>

              {submitStatus.message && (
                <div
                  className={`p-3 mb-4 text-sm ${
                    submitStatus.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form ref={emailFormRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-zinc-200 focus:outline-none focus:border-zinc-400"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-zinc-200 focus:outline-none focus:border-zinc-400"
                    placeholder="Email Address"
                    required
                  />

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-zinc-200 focus:outline-none focus:border-zinc-400"
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-zinc-200 focus:outline-none focus:border-zinc-400 bg-white"
                    required
                  >
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-zinc-200 focus:outline-none focus:border-zinc-400"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white transition-colors duration-300 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div
              ref={infoRef}
              className={`transition-all duration-700 transform ${
                isVisible.form ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800  leading-tight">Contact Information</h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`flex items-start transition-all duration-700 transform ${
                      isVisible.info ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: isVisible.info ? `${index * 150}ms` : "0ms" }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-zinc-100 text-zinc-600 mr-4">
                      <span>{info.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-zinc-800 mb-1">{info.title}</h3>
                      <p className="text-zinc-600">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-medium text-zinc-800 mb-3">Hours</h3>
                <div className="space-y-1 text-sm text-zinc-600">
                  <div className="flex justify-between">
                    <span>Mon - Sat</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section - Simple */}
      <div ref={mapRef} className="py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className={`transition-all duration-700 transform ${
              isVisible.map ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
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
  )
}
