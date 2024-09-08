import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { FaUser, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    subject: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showMessageBox, setShowMessageBox] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data for EmailJS
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      mobile: formData.mobile,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      from_name: `${formData.firstName} ${formData.lastName}`,
    };

    emailjs.send('service_5yapjfq', 'template_grwywf7', templateParams, 'YjnTWbAzuN2DGmqzR')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage('Message sent successfully!👍');
        setErrorMessage('');
        setFormData({
          firstName: '',
          lastName: '',
          mobile: '',
          email: '',
          subject: '',
          message: ''
        });
        setShowMessageBox(true);
      }, (err) => {
        console.log('FAILED...', err);
        setErrorMessage('Failed to send message. Please try again later.👎');
        setSuccessMessage('');
        setShowMessageBox(true);
      });
  };

  useEffect(() => {
    if (showMessageBox) {
      const timer = setTimeout(() => {
        setShowMessageBox(false);
      }, 3000); // Hide the message box after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showMessageBox]);

  return (
    <section className="container mx-auto p-4 font-sans text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-xl mb-8">I'd love to hear from you! Feel free to reach out with any questions or inquiries.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Information Section */}
        <div className="md:w-1/2 flex flex-col items-start space-y-4 p-4 max-w-xs">
          <div className="flex items-center space-x-3">
            <FaUser className="text-2xl text-gray-400" />
            <p className="text-lg text-gray-300">Anil Rathod</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-2xl text-gray-400" />
            <p className="text-lg text-gray-300">anilrathod.150198@gmail.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-2xl text-gray-400" />
            <p className="text-lg text-gray-300">At Post Pune, Maharashtra</p>
          </div>
        </div>
        {/* Form Section */}
        <div className="md:w-1/2 bg-gray-800 p-4 rounded-lg shadow-lg max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200" htmlFor="firstName">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="mt-1 p-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200" htmlFor="lastName">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="mt-1 p-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200" htmlFor="mobile">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="mt-1 p-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="mt-1 p-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="mt-1 p-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200" htmlFor="message">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="mt-1 p-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 mx-auto block">
              Submit
            </button>
            {showMessageBox && successMessage && (
              <div className="text-green-500 mt-4 border border-green-500 rounded-md p-3 relative max-w-md mx-auto bg-gray-900 animate-fadeIn">
                {successMessage}
                <span className="block w-full h-1 bg-green-500 absolute bottom-0 right-0 animate-slideOut"></span>
              </div>
            )}
            {showMessageBox && errorMessage && (
              <div className="text-red-500 mt-4 border border-red-500 rounded-md p-3 relative max-w-md mx-auto bg-gray-900 animate-fadeIn">
                {errorMessage}
                <span className="block w-full h-1 bg-red-500 absolute bottom-0 right-0 animate-slideOut"></span>
              </div>
            )}
          </form>
        </div>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideOut {
            from {
              width: 100%;
            }
            to {
              width: 0;
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out forwards;
          }

          .animate-slideOut {
            animation: slideOut 2s ease-in-out forwards;
          }
        `}
      </style>
    </section>
  );
}

export default Contact;
