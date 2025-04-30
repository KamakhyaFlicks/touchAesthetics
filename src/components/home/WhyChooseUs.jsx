import { useEffect, useRef, useState } from "react"
import { Award, UserCheck, Lightbulb, Smile } from "lucide-react"
import WCU1 from "../../assets/images/WCU1.jpg"
import WCU2 from "../../assets/images/WCU2.jpg"
import WCU3 from "../../assets/images/WCU3.jpg"
import WCU4 from "../../assets/images/WCU4.jpg"

const WhyChooseUs = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          // Reset animation when out of view for repeat effect
          setIsVisible(false)
        }
      },
      {
        threshold: 0.15,
      },
    )

    const currentSection = sectionRef.current
    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  const reasons = [
    {
      icon: <Award className="w-6 h-6 text-zinc-600" />,
      title: "Expert Dermatologists",
      description:
        "Board-certified specialists with advanced training in aesthetic procedures.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-zinc-600" />,
      title: "Advanced Technology",
      description: "State-of-the-art equipment and premium products for optimal results.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-zinc-600" />,
      title: "Customized Care",
      description:
        "Personalized treatment plans tailored to your unique skin and hair needs.",
    },
    {
      icon: <Smile className="w-6 h-6 text-zinc-600" />,
      title: "Proven Results",
      description:
        "Thousands of satisfied clients with natural-looking, long-lasting outcomes.",
    },
  ]

  // Use placeholder images (replace with your actual image paths)
  const images = [
    WCU1,
    WCU2,
    WCU3,
    WCU4,
  ]

  return (
    <section ref={sectionRef} className="w-full bg-white py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-center text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800 mb-6 leading-tight">
            Why Choose Touche Aesthetics?
          </h2>
          <p className="text-sm md:text-lg text-zinc-600 text-base max-w-2xl mx-auto">
            Delhi's Premier Skin Specialist Clinic
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Reasons */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="h-full mt-1 bg-gray-50 p-2 shadow-sm">{reason.icon}</div>
                    <div>
                    
                      <h3 className="text-md md:text-lg lg:text-lg text-zinc-800 mb-1 font-serif font-light text-gray-800">{reason.title}</h3>
                      <p className="text-zinc-600 text-sm">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image Collage */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[400px] md:h-[450px]">
              {/* Decorative elements */}
              <div
                className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gray-100 rounded-full opacity-60 transition-all duration-1000 ${
                  isVisible ? "scale-100 opacity-60" : "scale-50 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              ></div>
              <div
                className={`absolute -top-8 -left-8 w-24 h-24 bg-gray-200 rounded-full opacity-40 transition-all duration-1000 ${
                  isVisible ? "scale-100 opacity-40" : "scale-50 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              ></div>

              {/* Top left image */}
              <div
                className={`absolute top-[5%] left-[2%] w-[45%] h-[45%] shadow-md overflow-hidden z-10 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 -translate-y-30 -translate-x-30"
                }`}
              >
                <img
                  src={images[0]}
                  alt="Skin treatment"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top right image */}
              <div
                className={`absolute top-[5%] right-[5%] w-[45%] h-[45%] shadow-md overflow-hidden z-10 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 -translate-y-30 translate-x-30"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <img
                  src={images[1]}
                  alt="Skin consultation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom left image */}
              <div
                className={`absolute bottom-[2%] left-[2%] w-[45%] h-[45%] shadow-md overflow-hidden z-10 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-30 -translate-x-30"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <img
                  src={images[2]}
                  alt="Skin care products"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom right image */}
              <div
                className={`absolute bottom-[2%] right-[5%] w-[45%] h-[45%] shadow-md overflow-hidden z-10 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-30 translate-x-30"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <img
                  src={images[3]}
                  alt="Skin care products"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div
                className={`absolute top-[-5%] right-[5%] bg-white shadow-sm px-3 py-2 z-40 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: "700ms" }}
              >
                <p className="text-zinc-800 font-medium text-xs">5000+ Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs