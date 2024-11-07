import { motion } from 'framer-motion';

function Annonce() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const scheduleData = [
        {
            days: "Du Lundi au Jeudi",
            times: [
                { period: "Matin", time: "10h50 à 11h10" },
                { period: "Après-midi", time: "15h50 à 16h10" }
            ]
        },
        {
            days: "Vendredi",
            times: [
                { period: "Matin", time: "10h25 à 10h35" },
                { period: "Après-midi", time: "16h25 à 16h35" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Note aux Stagiaires
                    </h1>
                    <p className="text-xl text-blue-200">
                        Les stagiaires sont priés de prendre note des horaires de récréation suivants :
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {scheduleData.map((schedule, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.2 }}
                            className="bg-white/5 rounded-xl p-6 backdrop-blur-sm"
                        >
                            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                                {schedule.days}
                            </h2>
                            <div className="space-y-4">
                                {schedule.times.map((timeSlot, idx) => (
                                    <div 
                                        key={idx}
                                        className="flex justify-between items-center text-white/90 hover:text-white transition-colors duration-300"
                                    >
                                        <span className="font-medium">{timeSlot.period} :</span>
                                        <span className="bg-blue-500/20 px-4 py-1 rounded-full">
                                            {timeSlot.time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 text-center space-y-4"
                >
                    <p className="text-white text-lg">
                        Merci de respecter ces horaires.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-white/90">
                        <svg 
                            className="w-6 h-6 text-red-400" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                        >
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">
                            Rue Assendiane, Rabat Hay-Riad
                        </span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Annonce;