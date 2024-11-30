// components/OutsourceCard.tsx  

import { DollarSign, ArrowRightCircle, BarChart2, Users } from 'lucide-react';  

const features = [  
  {  
    icon: <DollarSign size={48} className="text-gray-700" />,  
    title: 'Cost Effective',  
  },  
  {  
    icon: <ArrowRightCircle size={48} className="text-gray-700" />,  
    title: 'Faster and Quality Services',  
  },  
  {  
    icon: <BarChart2 size={48} className="text-gray-700" />,  
    title: 'Focus on Core Business',  
  },  
  {  
    icon: <Users size={48} className="text-gray-700" />,  
    title: 'Access to a pool of expertise',  
  },  
];  

const OutsourceCard = () => {  
  return (  
    <div className="max-w-6xl mx-auto p-6 text-center">  
      <h2 className="text-2xl font-bold mb-6">Why outsource your non-core processes?</h2>  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">  
        {features.map((feature, index) => (  
          <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-md">  
            <div className="flex justify-center mb-3">{feature.icon}</div>  
            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default OutsourceCard;