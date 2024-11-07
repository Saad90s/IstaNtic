import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PremierAnne = [
    'INFO101', 'INFO102', 'INFO103', 'INFO104', 'INFO105',
    'DEV101', 'DEV102', 'DEV103', 'DEV104', 'DEV105',
    'DEV106', 'DEV107', 'DEV108', 'DEV109', 'DEV110',
    'DEV111', 'DEV112', 'DEV113', 'DEV114'
];

const DeuxiemeAnne = [
    'DEV201', 'DEV202', 'DEV203', 'DEV204', 'DEV205',
    'DEV206', 'DEV207', 'DEV208', 'DEV209',
    'INFO201', 'INFO202'
];

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Groupe = () => {
    const [selectedFirstYear, setSelectedFirstYear] = useState('');
    const [selectedSecondYear, setSelectedSecondYear] = useState('');

    return (
            <div className="max-w-7xl mx-auto">
                <motion.p
                    className="mt-8 max-w-2xl mx-auto text-2xl text-gray-100 font-semibold drop-shadow-md text-center mb-5"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Consultez les emplois de temps
                </motion.p>

                
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        {/* Premier Année Selector */}
                        <div className="w-full sm:w-64 relative">
                            <select
                                value={selectedFirstYear}
                                onChange={(e) => setSelectedFirstYear(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white border-2 border-white/30 
                                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                                       appearance-none cursor-pointer transition-all duration-300 hover:bg-white/20
                                       shadow-lg"
                            >
                                <option value="" className="bg-blue-900 text-white">1ère année</option>
                                {PremierAnne.map((item1) => (
                                    <option key={item1} value={item1} className="bg-blue-900 text-white">
                                        {item1}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Deuxième Année Selector */}
                        <div className="w-full sm:w-64 relative">
                            <select
                                value={selectedSecondYear}
                                onChange={(e) => setSelectedSecondYear(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white border-2 border-white/30 
                                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                                       appearance-none cursor-pointer transition-all duration-300 hover:bg-white/20
                                       shadow-lg"
                            >
                                <option value="" className="bg-blue-900 text-white">2ème année</option>
                                {DeuxiemeAnne.map((item2) => (
                                    <option key={item2} value={item2} className="bg-blue-900 text-white">
                                        {item2}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    
            </div>
    );
};

export default Groupe;