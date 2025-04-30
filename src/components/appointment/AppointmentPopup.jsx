import { useState, useEffect } from 'react';

export default function AppointmentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    treatmentType: '',
    date: '',
    time: '',
    notes: '',
    agreement: false
  });
  
  const [formVisible, setFormVisible] = useState({
    personalInfo: false,
    appointmentDetails: false,
    finalDetails: false
  });

  // Open popup after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Start animation sequence for form sections
      animateFormSections();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  // Animate form sections sequentially
  const animateFormSections = () => {
    setTimeout(() => setFormVisible(prev => ({ ...prev, personalInfo: true })), 400);
    setTimeout(() => setFormVisible(prev => ({ ...prev, appointmentDetails: true })), 800);
    setTimeout(() => setFormVisible(prev => ({ ...prev, finalDetails: true })), 1200);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Appointment request submitted! We will contact you to confirm your booking.');
    setIsOpen(false);
  };
  
  const closePopup = () => {
    setIsOpen(false);
  };

  const treatments = [
    { id: 'facial', name: 'Facial Treatment' },
    { id: 'hairSpa', name: 'Hair Spa' },
    { id: 'massage', name: 'Relaxing Massage' },
    { id: 'manicure', name: 'Manicure & Pedicure' },
    { id: 'skinConsultation', name: 'Skin Consultation' },
    { id: 'hairConsultation', name: 'Hair Consultation' }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed m-auto inset-0 bg-white/20 backdrop-blur-2xl border-white/10 z-50 flex items-center justify-center p-2 transition-opacity duration-300 overflow-y-auto">
      <div className="relative max-w-4xl w-full m-auto bg-white rounded-xl shadow-2xl overflow-hidden animate-fadeIn my-2 max-h-full">
        <button 
          onClick={closePopup}
          className="sticky right-4 top-4 float-right text-orange-800 hover:text-orange-600 z-10 p-1 bg-white bg-opacity-80 rounded-full"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <div className="flex flex-col md:flex-row max-h-screen md:max-h-[90vh] overflow-auto">
          {/* Left Column */}
          <div className="md:w-2/5 bg-gradient-to-br from-yellow-50 to-orange-100 p-6 lg:p-8 flex flex-col justify-center animate-slideLeft">
            <div className="mb-4">
              <h1 className="text-2xl lg:text-3xl font-bold text-orange-800">Radiance</h1>
              <p className="text-orange-700 mt-2">Luxury skin & hair treatments tailored just for you</p>
            </div>
            
            <div className="mt-4 lg:mt-6">
              <h3 className="text-lg lg:text-xl font-semibold text-orange-800 mb-3">Book Now & Get 20% Off</h3>
              <ul className="space-y-2 lg:space-y-3">
                {treatments.slice(0, 4).map(treatment => (
                  <li key={treatment.id} className="flex items-center">
                    <span className="h-5 w-5 lg:h-6 lg:w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 lg:mr-3 flex-shrink-0">
                      <svg className="h-3 w-3 lg:h-4 lg:w-4 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-sm lg:text-base text-orange-700">{treatment.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6 lg:mt-8 text-orange-700">
              <p className="text-xs lg:text-sm">Limited time offer - Book now!</p>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="md:w-3/5 p-6 lg:p-8 pb-10">
            <div className="mb-4 lg:mb-6 animate-fadeIn">
              <h2 className="text-xl lg:text-2xl font-bold text-orange-800">Book Your Appointment</h2>
              <p className="text-orange-600 text-sm lg:text-base">Schedule your treatment session</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Personal Information Section */}
              <div className={`transition-all duration-500 transform ${formVisible.personalInfo ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-3 lg:mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs lg:text-sm font-medium text-orange-700">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-orange-100 rounded-md shadow-sm focus:outline-none focus:ring-orange-300 focus:border-orange-300 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs lg:text-sm font-medium text-orange-700">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-orange-100 rounded-md shadow-sm focus:outline-none focus:ring-orange-300 focus:border-orange-300 text-sm"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-3 lg:mb-4">
                  <div>
                    <label htmlFor="email" className="block text-xs lg:text-sm font-medium text-orange-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-orange-100 rounded-md shadow-sm focus:outline-none focus:ring-orange-300 focus:border-orange-300 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs lg:text-sm font-medium text-orange-700">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-orange-100 rounded-md shadow-sm focus:outline-none focus:ring-orange-300 focus:border-orange-300 text-sm"
                    />
                  </div>
                </div>
              </div>
              
              {/* Appointment Details Section */}
              <div className={`transition-all duration-500 transform ${formVisible.appointmentDetails ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'}`}>
                <div className="mb-3 lg:mb-4">
                  <label htmlFor="treatmentType" className="block text-xs lg:text-sm font-medium text-orange-700">Treatment Type</label>
                  <select
                    id="treatmentType"
                    name="treatmentType"
                    value={formData.treatmentType}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-orange-100 rounded-md shadow-sm focus:outline-none focus:ring-orange-300 focus:border-orange-300 text-sm"
                  >
                    <option value="">Select a treatment</option>
                    {treatments.map(treatment => (
                      <option key={treatment.id} value={treatment.id}>{treatment.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-3 lg:mb-4">
                  <div>
                    <label htmlFor="date" className="block text-xs lg:text-sm font-medium text-orange-700">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-orange-100 rounded-md shadow-sm focus:outline-none focus:ring-orange-300 focus:border-orange-300 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-xs lg:text-sm font-medium text-orange-700">Preferred Time</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-orange-100 rounded-md shadow-sm focus:outline-none focus:ring-orange-300 focus:border-orange-300 text-sm"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Final Details Section */}
              <div className={`transition-all duration-500 transform ${formVisible.finalDetails ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'}`}>
                <div className="mb-3 lg:mb-4">
                  <label htmlFor="notes" className="block text-xs lg:text-sm font-medium text-orange-700">Special Requests / Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={2}
                    className="mt-1 block w-full px-3 py-2 border border-orange-100 rounded-md shadow-sm focus:outline-none focus:ring-orange-300 focus:border-orange-300 text-sm"
                    placeholder="Tell us about any special requirements..."
                  />
                </div>
                
                <div className="mb-4 lg:mb-6">
                  <div className="flex items-start">
                    <input
                      id="agreement"
                      name="agreement"
                      type="checkbox"
                      checked={formData.agreement}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 mt-1 text-orange-400 focus:ring-orange-300 border-orange-200 rounded"
                    />
                    <label htmlFor="agreement" className="ml-2 block text-xs lg:text-sm text-orange-600">
                      I understand that a 24-hour cancellation notice is required
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium py-2 lg:py-3 px-4 rounded-md shadow transition duration-150 ease-in-out animate-pulse"
                >
                  Book Appointment
                </button>
                
                <p className="mt-3 lg:mt-4 text-center text-xs lg:text-sm text-orange-600">
                  We'll confirm your appointment within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// For proper animations, add these to your global styles or Tailwind config
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideLeft {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out forwards;
  }
  
  .animate-slideLeft {
    animation: slideLeft 0.8s ease-out forwards;
  }
  
  .animate-pulse {
    animation: pulse 2s infinite;
  }
`;
document.head.appendChild(style);