import Groupe from '../components/Groupe';
import { motion } from 'framer-motion';

function Emploi() {
    const schedule = [
        { day: "Lundi", times: ["Mme. EL HARRAK CA", "Mme. EL HARRAK CA", "", ""] },
        { day: "Mardi", times: ["", "Mme. EL HAMRAOUI Labo1", "", ""] },
        { day: "Mercredi", times: ["", "", "Mme. FECHTALI C3", "Mme. BENJILANY Ref"] },
        { day: "Jeudi", times: ["", "", "", ""] },
        { day: "Vendredi", times: ["Mme. FIKRI A distance", "Mme. FIKRI A distance", "", ""] },
        { day: "Samedi", times: ["M. AIT OUJAA C1", "M. AIT OUJAA C1", "", ""] },
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700">
            <div className="container mx-auto px-4 py-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.5 }}
                >
                    <Groupe />
                </motion.div>

                <motion.div 
                    className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-blue-900/50">
                                    <th className="p-3 text-white font-semibold"></th>
                                    {["08:30 - 10:50", "11:10 - 13:30", "13:30 - 15:50", "16:10 - 18:30"].map((time, index) => (
                                        <th key={index} className="p-3 text-white font-semibold">
                                            {time.split(" - ").map((t, i) => (
                                                <span key={i}>
                                                    {t}
                                                    {i === 0 && <br />}
                                                </span>
                                            ))}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {schedule.map((day, index) => (
                                    <motion.tr 
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <td className="border border-blue-200/20 p-3 bg-blue-800/50 text-white font-bold">
                                            {day.day}
                                        </td>
                                        {day.times.map((time, idx) => (
                                            <td
                                                key={idx}
                                                className={`border border-blue-200/20 p-3 text-center transition-all duration-300 hover:transform hover:scale-105 ${
                                                    time.includes("distance") 
                                                        ? "bg-gray-800/50 text-white" 
                                                        : time 
                                                            ? "bg-blue-500/50 text-white" 
                                                            : "bg-white/5 text-gray-300"
                                                }`}
                                            >
                                                {time || "---"}
                                            </td>
                                        ))}
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <motion.div 
                        className="mt-6 flex flex-wrap justify-center gap-6 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {[
                            { color: "bg-blue-500/50", text: "Présentiel" },
                            { color: "bg-gray-800/50", text: "A distance" },
                            { color: "bg-yellow-600/50", text: "Absent" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                                <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Emploi;