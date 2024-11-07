import { motion } from 'framer-motion';
import {  FaHistory,FaLightbulb, FaStar, FaHandshake } from 'react-icons/fa';

const Apropos = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const values = [
    { title: 'Innovation', icon: <FaLightbulb />, description: 'Nous repoussons les limites de la technologie pour créer des solutions uniques.' },
    { title: 'Excellence', icon: <FaStar />, description: 'Nous visons l\'excellence dans tout ce que nous faisons.' },
    { title: 'Collaboration', icon: <FaHandshake />, description: 'Nous croyons en la puissance du travail d\'équipe.' }
  ];

  const timeline = [
    { year: '2010', event: 'Fondation de l\'établissement' },
    { year: '2015', event: 'Lancement du programme de design' },
    { year: '2020', event: 'Expansion internationale' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Hero Section */}
      <motion.section 
        className="relative h-[60vh] flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-fixed" />
        <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
          <motion.h1 
            className="text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            À propos de Nous
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Découvrez notre engagement envers l'innovation digitale et le design.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Notre Mission</h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            Nous nous engageons à fournir des solutions digitales innovantes et à former la prochaine génération de leaders en design et technologie.
          </p>
        </div>
      </motion.section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center transform transition-all duration-300 hover:bg-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ y: -10 }}
            >
              <div className="text-4xl text-blue-400 mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Notre Histoire</h2>
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-white/10 backdrop-blur-md rounded-xl p-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 * index }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl">
                <FaHistory />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-semibold text-white">{item.year}</h3>
                <p className="text-gray-300 text-lg mt-2">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Apropos;