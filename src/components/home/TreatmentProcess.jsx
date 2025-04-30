import { useEffect, useRef, useState } from "react";
import processimg from "../../assets/images/processimg.jpg";
const TreatmentProcess = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // Process steps data
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Personal skin analysis and treatment planning with our experts"
    },
    {
      number: "02",
      title: "Treatment",
      description: "Gentle, effective procedures using premium products and technology"
    },
    {
      number: "03",
      title: "Recovery",
      description: "Minimal downtime with personalized aftercare instructions"
    },
    {
      number: "04",
      title: "Results",
      description: "Visible improvements that enhance your natural beauty"
    }
  ];

  // Animation for process steps
  useEffect(() => {
    let interval;
    if (isVisible) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isVisible, steps.length]);

  // Intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-12 md:py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif font-light text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800 mb-6 leading-tight">
            Our Treatment Process
          </h2>
          <p className="text-md md:text-md lg:text-md xl:text-md text-center text-gray-900 max-w-xl mx-auto">
            A simple, effective approach to help you achieve your beauty goals
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Treatment Process Steps */}
          <div className="w-full md:w-3/5">
            <div className="relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out mb-6 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`flex items-start gap-4 p-4 ${
                      activeStep === index
                        ? "bg-gray-50"
                        : "bg-white"
                    } transition-colors duration-300`}
                  >
                    <div className="relative">
                      <div className="flex items-center justify-end w-10 h-10 ml-5">
                        <span className="text-xl text-gray-300 font-light">
                          {step.number}
                        </span>
                        <div
                          className={`absolute inset-1 border-t-4 ${
                            activeStep === index
                              ? "border-gray-400"
                              : "border-gray-200"
                          } transition-colors duration-300`}
                          style={{
                            width: "50%",
                            height: "50%",
                            top: "50%",
                            right: "25%",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif font-light text-gray-800 text-lg mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Progress indicator */}
              <div className="hidden md:block absolute left-5 top-0 h-full w-px bg-gray-200">
                <div
                  className="w-full bg-gray-400 transition-all duration-300 ease-linear"
                  style={{
                    height: `${((activeStep + 1) / steps.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div
            className={`w-full md:w-2/5 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative h-64 md:h-80">
              <img
                src={processimg}
                alt="Treatment process"
                className="w-full h-full object-cover shadow-sm"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-pink-50 rounded-full opacity-70"></div>
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gray-100 rounded-full opacity-60"></div>
              
              {/* Floating text */}
              <div
                className={`absolute bottom-4 left-4 bg-white/90 p-3 shadow-sm transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <p className="text-gray-800 text-xs font-medium">
                  <span className="text-pink-400">♥</span> Gentle & Effective Care
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentProcess;