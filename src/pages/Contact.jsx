import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
          >
            Contactez Nous
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Vous avez des questions ? Contactez nous pour obtenir plus d'information sur l'école, 
            le programme et les conditions d'admission.
          </motion.p>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 space-y-8 relative overflow-hidden"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-20 -mt-20 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full -ml-16 -mb-16 opacity-50"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="group">
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <FaUser className="mr-2 text-blue-500" />
                Prénom
              </label>
              <input
                id="prenom"
                type="text"
                name="prenom"
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/80"
                required
              />
            </div>

            <div className="group">
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <FaUser className="mr-2 text-blue-500" />
                Nom
              </label>
              <input
                id="nom"
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/80"
                required
              />
            </div>

            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-blue-500" />
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/80"
                required
              />
            </div>

            <div className="group">
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <FaPhone className="mr-2 text-blue-500" />
                Téléphone
              </label>
              <input
                id="telephone"
                type="tel"
                name="telephone"
                placeholder="Votre numéro"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/80"
                required
              />
            </div>
          </div>

          <div className="relative z-10">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <FaPaperPlane className="mr-2 text-blue-500" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/80 resize-none"
              required
            ></textarea>
          </div>

          <div className="flex justify-center relative z-10">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl
                       hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                       transform transition duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center">
                <FaPaperPlane className="mr-2" />
                Envoyer le message
              </span>
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;