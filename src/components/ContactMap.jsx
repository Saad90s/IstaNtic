import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMap = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({
          prenom: '',
          nom: '',
          email: '',
          telephone: '',
          message: '',
        });
      }, (err) => {
        console.error('FAILED...', err);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            <span className="block">Contactez-nous</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Nous sommes là pour vous aider et répondre à vos questions
          </p>
        </div>

        {/* Contact Information Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">
            Nos Coordonnées
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="flex-shrink-0">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Adresse</h3>
                <p className="text-gray-600">Rue Assendiane, Rabat Hay-Riad</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="flex-shrink-0">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Téléphone</h3>
                <p className="text-gray-600">+212 5 39 72 66 34</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="flex-shrink-0">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">elaissaoui007@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://maps.app.goo.gl/UCK22YVGoTDX38nX9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Voir sur Google Maps
            </a>
          </div>
        </div>

        {/* Map Container */}
        <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.8653067562024!2d-5.376220424378092!3d35.57241623260177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b4251c1b949cd%3A0x54288d41d037d135!2sGroupe%20Scolaire%20La%20Base!5e0!3m2!1sfr!2sma!4v1699228439069!5m2!1sfr!2sma"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;