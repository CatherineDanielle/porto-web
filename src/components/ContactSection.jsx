import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    projectName: '',
    projectDetails: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Email must contain @ symbol';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.projectName.trim()) newErrors.projectName = 'Project name is required';
    if (!formData.projectDetails.trim()) newErrors.projectDetails = 'Project details are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await emailjs.send(
        'service_vz79kug',
        'template_4q2gzxg',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phoneNumber,
          project_name: formData.projectName,
          project_details: formData.projectDetails,
          project_time: new Date().toLocaleString(),
          to_email: 'cath.daniellee@gmail.com'
        },
        'aaPfxbDuziBTTMkij'
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          projectName: '',
          projectDetails: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#FFFAFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#A8C5D9] rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-['DM_Sans']">
              Contact me
            </h2>
            <p className="text-white/90 text-lg font-['DM_Sans']">
              Cultivating Connections: Reach Out And Connect With Me
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 font-['DM_Sans'] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 ${errors.name ? 'ring-2 ring-red-400' : ''}`} />
                {errors.name && <p className="text-red-200 text-sm mt-1 font-['DM_Sans']">{errors.name}</p>}
              </div>
              <div>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 font-['DM_Sans'] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 ${errors.email ? 'ring-2 ring-red-400' : ''}`} />
                {errors.email && <p className="text-red-200 text-sm mt-1 font-['DM_Sans']">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 font-['DM_Sans'] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 ${errors.phoneNumber ? 'ring-2 ring-red-400' : ''}`} />
                {errors.phoneNumber && <p className="text-red-200 text-sm mt-1 font-['DM_Sans']">{errors.phoneNumber}</p>}
              </div>
              <div>
                <input type="text" name="projectName" placeholder="Project Name" value={formData.projectName} onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 font-['DM_Sans'] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 ${errors.projectName ? 'ring-2 ring-red-400' : ''}`} />
                {errors.projectName && <p className="text-red-200 text-sm mt-1 font-['DM_Sans']">{errors.projectName}</p>}
              </div>
            </div>

            <div>
              <textarea name="projectDetails" placeholder="Project Details..." rows="6" value={formData.projectDetails} onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 font-['DM_Sans'] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 resize-none ${errors.projectDetails ? 'ring-2 ring-red-400' : ''}`} ></textarea>
              {errors.projectDetails && <p className="text-red-200 text-sm mt-1 font-['DM_Sans']">{errors.projectDetails}</p>}
            </div>

            <div className="flex justify-end">
              <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-['DM_Sans'] border border-white/30">
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send'
                )}
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="text-center">
                <p className="text-green-200 font-medium font-['DM_Sans']">
                  ✅ Message sent successfully! I'll get back to you soon!.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="text-center">
                <p className="text-red-200 font-medium font-['DM_Sans']">
                  ❌ Failed to send message. Please try again or contact me directly via whatsapp.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
