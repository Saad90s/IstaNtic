import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn } from 'react-icons/fi';

// Assurez-vous que les images sont importées correctement
import image1 from '../images/image_ista.png';
import image2 from '../images/image_ista.png';
import image3 from '../images/image_ista.png';
import image4 from '../images/image_ista.png';
import image5 from '../images/image_ista.png';
import image6 from '../images/image_ista.png';

Modal.setAppElement('#root');

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    { src: image1, title: 'Campus ISTA', description: 'Vue du campus principal' },
    { src: image2, title: 'Laboratoire', description: 'Salle informatique moderne' },
    { src: image3, title: 'Bibliothèque', description: 'Espace de travail' },
    { src: image4, title: 'Amphithéâtre', description: 'Salle de conférence' },
    { src: image5, title: 'Cafétéria', description: 'Espace de détente' },
    { src: image6, title: 'Terrain Sport', description: 'Activités sportives' }
  ];

  useEffect(() => {
    // Préchargement des images
    Promise.all(
      images.map(image => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image.src;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    ).then(() => setIsLoading(false));
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4 text-gray-800"
        >
          Notre Galerie
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Découvrez notre établissement à travers cette sélection de photos
        </motion.p>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative group rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                  
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="absolute top-4 right-4 p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/40 transition-all duration-300"
                  >
                    <FiZoomIn className="w-5 h-5 text-white" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <AnimatePresence>
          {selectedImage && (
            <Modal
              isOpen={!!selectedImage}
              onRequestClose={() => setSelectedImage(null)}
              className="modal-content"
              overlayClassName="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
              closeTimeoutMS={300}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                  <p className="text-white/90">{selectedImage.description}</p>
                </div>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/40 transition-all duration-300"
                >
                  <FiX className="w-6 h-6 text-white" />
                </button>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;