import React from 'react';
import { Search, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative bg-white text-slate-900 pt-16 pb-20 lg:pt-24 lg:pb-32 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-bold mb-6 uppercase tracking-wide">
             #1 Marketplace for Top Talent
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-gray-900">
            How work <br/>
            <span className="text-green-600">should work</span>
          </h1>
          
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">
            Forget the old rules. You can have the best people. Right now. Right here. Access global talent and automated project planning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-grow max-w-md">
              <input 
                 type="text" 
                 placeholder="Search for any service..." 
                 className="w-full h-14 pl-5 pr-12 rounded-lg border-2 border-gray-300 focus:border-green-600 focus:ring-0 outline-none text-lg transition-colors"
              />
              <button 
                onClick={onStart}
                className="absolute right-2 top-2 h-10 w-10 bg-green-600 rounded-md flex items-center justify-center text-white hover:bg-green-700 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
             <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1.5 text-gray-400" /> Trusted by top firms</span>
             <span className="hidden sm:inline-block">Payment Protection</span>
             <span className="hidden sm:inline-block">24/7 Support</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden lg:block">
           <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-[2rem] transform rotate-2 opacity-50"></div>
           <img 
             src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
             alt="Freelancers working" 
             className="relative rounded-[1.5rem] shadow-2xl w-full object-cover h-[500px]"
           />
           
           {/* Floating Badge */}
           <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex -space-x-2">
                 <img className="w-10 h-10 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="" />
                 <img className="w-10 h-10 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="" />
                 <img className="w-10 h-10 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mark" alt="" />
              </div>
              <div>
                 <div className="font-bold text-gray-900">4.9/5 Stars</div>
                 <div className="text-xs text-gray-500">from 1M+ clients</div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;