import React from 'react';
import { Star, Heart, Clock } from 'lucide-react';
import { ServiceGig } from '../types';

interface ServiceCardProps {
  gig: ServiceGig;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ gig }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col h-full group cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={gig.image} 
          alt={gig.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-red-500 transition-colors">
          <Heart className="w-4 h-4" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <span className="text-white text-xs font-bold bg-green-500 px-2 py-0.5 rounded-sm">
            {gig.category}
          </span>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center mb-3">
          <img src={gig.sellerAvatar} alt={gig.sellerName} className="w-8 h-8 rounded-full mr-2 border border-gray-200" />
          <div>
            <h4 className="text-sm font-bold text-gray-900">{gig.sellerName}</h4>
            <span className="text-xs text-gray-500 block">{gig.sellerLevel}</span>
          </div>
        </div>

        <h3 className="font-medium text-gray-800 line-clamp-2 mb-2 hover:text-green-600 transition-colors">{gig.title}</h3>
        
        <div className="flex items-center text-amber-500 text-sm font-bold mb-4">
          <Star className="w-4 h-4 fill-current mr-1" />
          {gig.rating}
          <span className="text-gray-400 font-normal ml-1">({gig.reviews})</span>
        </div>
        
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
           <div className="flex items-center text-xs text-gray-500">
             <Clock className="w-3 h-3 mr-1" />
             {gig.deliveryTime}
           </div>
           <div className="text-right">
             <span className="text-xs text-gray-500 uppercase">Starting at</span>
             <div className="text-lg font-bold text-gray-900">${gig.price}</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;