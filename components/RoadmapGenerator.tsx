import React, { useState } from 'react';
import { Sparkles, Briefcase, CheckCircle2, DollarSign, Calendar } from 'lucide-react';
import { generateProjectScope } from '../services/geminiService';
import { ProjectScope } from '../types';

const ProjectScopeGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [scope, setScope] = useState<ProjectScope | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setScope(null);

    try {
      const result = await generateProjectScope(input);
      setScope(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Project Planner</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Not sure how to describe your project? Tell us what you need, and our AI will generate a professional project brief, estimated budget, and required skills to help you hire the right talent.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-2 mb-12 border border-gray-200 max-w-2xl mx-auto">
        <form onSubmit={handleGenerate} className="flex items-center">
          <div className="pl-4 text-green-600">
            <Sparkles className="w-6 h-6" />
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. I need a mobile app for food delivery..."
            className="flex-grow p-4 outline-none text-gray-700 placeholder-gray-400 bg-transparent text-lg"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className={`m-2 px-6 py-3 rounded-lg font-bold text-white transition-all ${
              loading || !input.trim()
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 shadow-md'
            }`}
          >
            {loading ? 'Analyzing...' : 'Draft Scope'}
          </button>
        </form>
      </div>

      {scope && (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-fade-in">
          <div className="bg-green-600 p-6 text-white">
             <h3 className="text-2xl font-bold">{scope.title}</h3>
             <p className="opacity-90 mt-2">{scope.overview}</p>
          </div>
          
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="flex items-center text-lg font-bold text-gray-800 mb-4">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                Key Deliverables
              </h4>
              <ul className="space-y-3 mb-8">
                {scope.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="flex items-center text-lg font-bold text-gray-800 mb-4">
                <Briefcase className="w-5 h-5 text-green-600 mr-2" />
                Skills Required
              </h4>
              <div className="flex flex-wrap gap-2">
                {scope.skillsRequired.map((skill, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 h-fit">
               <div className="mb-6">
                 <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Estimated Budget</span>
                 <div className="flex items-center text-2xl font-bold text-gray-900 mt-1">
                   <DollarSign className="w-6 h-6 text-green-600 mr-1" />
                   {scope.estimatedBudget}
                 </div>
               </div>
               
               <div>
                 <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Timeline</span>
                 <div className="flex items-center text-2xl font-bold text-gray-900 mt-1">
                   <Calendar className="w-6 h-6 text-green-600 mr-1" />
                   {scope.timeline}
                 </div>
               </div>

               <div className="mt-8 pt-6 border-t border-gray-200">
                 <button className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors">
                   Post This Project
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectScopeGenerator;