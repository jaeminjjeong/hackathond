import React from 'react';
import { Star, Users } from 'lucide-react';
import { ServiceGig } from '../types';

interface SkillCardProps {
  skill: ServiceGig;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={skill.image} 
          alt={skill.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-indigo-600">
          {skill.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-slate-800 line-clamp-1">{skill.title}</h3>
          <div className="flex items-center text-amber-500 text-sm font-medium">
            <Star className="w-4 h-4 fill-current mr-1" />
            {skill.rating}
          </div>
        </div>
        
        <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">{skill.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs mr-2">
              {skill.sellerName.charAt(0)}
            </div>
            <span className="text-xs font-medium text-slate-700">{skill.sellerName}</span>
          </div>
          <div className="flex items-center text-slate-400 text-xs">
            <Users className="w-3 h-3 mr-1" />
            {skill.reviews}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;