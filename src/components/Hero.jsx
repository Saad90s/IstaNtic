import YouTube from 'react-youtube';
import { motion } from 'framer-motion';
import Groupe from './Groupe';

const Hero = () => {
  const opts = {
    height: '320',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900">
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="absolute inset-0 bg-[url('./images/image_ista.png')] bg-cover bg-center opacity-20" />

      <div className="relative z-20 container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <motion.h1
            className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl drop-shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            Bienvenue à ISTA NTIC
          </motion.h1>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Groupe />
          </motion.div>

          <div className="mt-16 flex flex-col lg:flex-row justify-center items-center gap-8">
            <div className="lg:w-1/3 text-left p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-xl">
              <motion.h2
                className="text-3xl font-bold text-white mb-4"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Directrice de l'Établissement
              </motion.h2>
              <p className="text-lg text-gray-200">
                Wassima Akhrif est une leader passionnée et inspirante, dédiée à l'épanouissement de chaque élève. 
                Avec une vision innovante et un engagement fort pour l'excellence académique, elle crée un environnement 
                d'apprentissage inclusif et stimulant. Son approche empathique et collaborative renforce notre communauté 
                éducative, faisant d'elle une figure respectée et appréciée.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <YouTube
                  videoId="Ja4OcCpJXJQ"
                  opts={opts}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;