import { 
  FaLaptopCode, 
  FaServer, 
  FaPaintBrush, 
  FaCogs 
} from 'react-icons/fa';

const InfoBlock = ({ icon: Icon, title, value }) => (
  <div className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="mt-6 text-xl font-bold text-center text-gray-800">{title}</h3>
    <p className="mt-4 text-lg font-semibold text-center text-blue-600">{value}</p>
  </div>
);

const InfoBlocks = () => {
  const blocks = [
    {
      icon: FaLaptopCode,
      title: "Développement digital",
      value: "20 équipes"
    },
    {
      icon: FaServer,
      title: "Infrastructure digital",
      value: "4 équipes"
    },
    {
      icon: FaPaintBrush,
      title: "Infographie",
      value: "12 équipes"
    },
    {
      icon: FaCogs,
      title: "Système de PIE",
      value: "3 équipes"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
            Nos Chiffres Clés
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {blocks.map((block, index) => (
            <InfoBlock key={index} {...block} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBlocks;