import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function AppointmentBooking() {
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("zB_bhd03Tc8V5OIFE");
  }, []);

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

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [animate, setAnimate] = useState(false);

  // Trigger entrance animation
  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Prepare the template parameters
    const templateParams = {
      to_email: "toucheaesthetics0@gmail.com",
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      treatment: formData.treatmentType === 'facial' ? 'Facial Treatment' :
                formData.treatmentType === 'hairSpa' ? 'Hair Spa' :
                formData.treatmentType === 'massage' ? 'Relaxing Massage' :
                formData.treatmentType === 'manicure' ? 'Manicure & Pedicure' :
                formData.treatmentType === 'skinConsultation' ? 'Skin Consultation' :
                formData.treatmentType === 'hairConsultation' ? 'Hair Consultation' : '',
      date: formData.date,
      time: formData.time,
      notes: formData.notes,
    };

    try {
      const result = await emailjs.send(
        'service_fcjpgu8',
        'template_b43pjzm',
        templateParams
      );
      
      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
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
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
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

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 flex items-center justify-center">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
      
      <div className={`w-full max-w-4xl bg-white shadow sm:rounded ${animate ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Brief Info */}
          <div className={`md:w-1/3 p-6 bg-pink-50 ${animate ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif font-light text-gray-800 mb-6 leading-tight text-zinc-800 font-serif font-light text-gray-800  leading-tight mb-6">Book Your Treatment</h1>
            
            <div className="space-y-4 mb-6">
              {treatments.map((treatment, index) => (
                <div 
                  key={treatment.id} 
                  className={`flex items-center ${animate ? 'animate-fadeIn' : 'opacity-0'}`} 
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-800">{treatment.name}</span>
                </div>
              ))}
            </div>
            
            <div className={`text-gray-900 text-sm mt-auto ${animate ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
              <p>Need assistance?</p>
              <p className="font-medium">(+91) 9220546827</p>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="md:w-2/3 p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`${animate ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '350ms' }}>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none transition-all"
                  />
                </div>
                <div className={`${animate ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`${animate ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '450ms' }}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none transition-all"
                  />
                </div>
                <div className={`${animate ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className={`${animate ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '550ms' }}>
                <label htmlFor="treatmentType" className="block text-sm font-medium text-gray-600 mb-1">Treatment</label>
                <select
                  id="treatmentType"
                  name="treatmentType"
                  value={formData.treatmentType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none transition-all"
                >
                  <option value="">Select a treatment</option>
                  {treatments.map(treatment => (
                    <option key={treatment.id} value={treatment.id}>{treatment.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`${animate ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-600 mb-1">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none transition-all"
                  />
                </div>
                <div className={`${animate ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '650ms' }}>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-600 mb-1">Time</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none transition-all"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className={`${animate ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '700ms' }}>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-600 mb-1">Notes (optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none transition-all"
                  placeholder="Any special requests..."
                />
              </div>
              
              <div className={`flex items-start ${animate ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '750ms' }}>
                <div className="flex items-center h-5">
                  <input
                    id="agreement"
                    name="agreement"
                    type="checkbox"
                    checked={formData.agreement}
                    onChange={handleChange}
                    required
                    className="h-4 w-4 text-gray-600 focus:ring-gray-300 border-gray-300"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="agreement" className="text-xs text-gray-500">
                    I understand that a 24-hour cancellation notice is required
                  </label>
                </div>
              </div>
              
              <div className={`${animate ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`w-full ${loading ? 'bg-gray-900' : 'bg-gray-900 hover:bg-gray-5s00'} text-white px-4 py-2 transition-colors duration-200 ease-in-out mt-2`}
                >
                  {loading ? 'Processing...' : 'Book Appointment'}
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <div className="text-center p-3 text-sm text-green-600 bg-green-50 mt-4">
                  Your appointment has been scheduled. We'll be in touch shortly.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-center p-3 text-sm text-red-600 bg-red-50 mt-4">
                  There was an error scheduling your appointment. Please try again.
                </div>
              )}
              
              <p className="text-center text-xs text-gray-500 mt-4 opacity-70">
                We'll confirm your appointment within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}