import React, { useState } from 'react';
import { LayoutDashboard, Search, MessageSquare, Menu, X, Briefcase, User as UserIcon, LogOut } from 'lucide-react';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import ProjectScopeGenerator from './components/RoadmapGenerator'; // Using the repurposed component
import CommunityChat from './components/CommunityChat';
import Login from './components/Login';
import { MOCK_GIGS, MARKET_STATS, MOCK_USER } from './constants';
import { ViewState, ServiceCategory, User } from './types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const filteredGigs = selectedCategory === 'All' 
    ? MOCK_GIGS 
    : MOCK_GIGS.filter(s => s.category === selectedCategory);

  const handleLogin = () => {
    setCurrentUser(MOCK_USER);
    setView('home');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setView('home');
  };

  const NavItem = ({ target, label, icon: Icon }: { target: ViewState; label: string; icon: any }) => (
    <button
      onClick={() => {
        setView(target);
        setMobileMenuOpen(false);
      }}
      className={`flex items-center px-4 py-2 rounded-md transition-colors font-medium text-sm ${
        view === target 
          ? 'text-green-600 bg-green-50' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <Icon className="w-4 h-4 mr-2" />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 h-16">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setView('home')}
          >
            <div className="bg-green-600 text-white p-1.5 rounded font-bold text-lg tracking-tighter">WS</div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">WorkSphere</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            <NavItem target="home" label="Home" icon={LayoutDashboard} />
            <NavItem target="market" label="Find Work" icon={Search} />
            <NavItem target="planner" label="AI Planner" icon={Briefcase} />
            <NavItem target="profile" label="Support" icon={MessageSquare} />
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-3">
                 <div className="text-right hidden lg:block">
                   <div className="text-sm font-bold text-gray-900">{currentUser.name}</div>
                   <div className="text-xs text-gray-500 uppercase">{currentUser.role}</div>
                 </div>
                 <img src={currentUser.avatar} alt="Avatar" className="w-9 h-9 rounded-full border border-gray-200" />
                 <button onClick={handleLogout} className="text-gray-400 hover:text-red-500 p-2" title="Logout">
                   <LogOut className="w-5 h-5" />
                 </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={() => setView('login')}
                  className="text-gray-600 font-medium text-sm hover:text-gray-900 px-3 py-2"
                >
                  Log In
                </button>
                <button 
                  onClick={() => setView('login')}
                  className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-green-700 transition-colors shadow-sm"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-2 shadow-lg absolute w-full z-50">
            <NavItem target="home" label="Home" icon={LayoutDashboard} />
            <NavItem target="market" label="Find Work" icon={Search} />
            <NavItem target="planner" label="AI Planner" icon={Briefcase} />
            <div className="border-t border-gray-100 pt-2 mt-2">
              {currentUser ? (
                <button onClick={handleLogout} className="flex items-center w-full px-4 py-2 text-red-600 font-medium">
                  <LogOut className="w-4 h-4 mr-2" /> Logout
                </button>
              ) : (
                <button onClick={() => { setView('login'); setMobileMenuOpen(false); }} className="flex items-center w-full px-4 py-2 text-green-600 font-bold">
                  <UserIcon className="w-4 h-4 mr-2" /> Log In / Sign Up
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero onStart={() => setView('market')} />
            
            {/* Services Carousel */}
            <section className="py-16 container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Popular Services</h2>
                <button onClick={() => setView('market')} className="text-green-600 font-semibold hover:underline">View all</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {MOCK_GIGS.slice(0, 4).map(gig => (
                  <ServiceCard key={gig.id} gig={gig} />
                ))}
              </div>
            </section>

            {/* AI Feature Teaser */}
            <section className="py-20 bg-gray-900 text-white">
              <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <h2 className="text-4xl font-bold mb-6">Project planning, simplified.</h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Need to hire but don't know the technical details? Our Gemini-powered AI helps you draft a professional project scope, estimate budgets, and identify required skills in seconds.
                  </p>
                  <button 
                    onClick={() => setView('planner')}
                    className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                  >
                    Try AI Planner
                  </button>
                </div>
                <div className="md:w-1/2 bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="space-y-4">
                     <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-xs">AI</div>
                        <div className="bg-gray-700 p-3 rounded-lg text-sm text-gray-300 w-3/4">
                           Based on your request, you'll need a React developer with Stripe experience. Estimated budget: $2k-3k.
                        </div>
                     </div>
                     <div className="flex gap-3 justify-end">
                        <div className="bg-green-900/30 p-3 rounded-lg text-sm text-green-400 border border-green-900 w-2/3">
                           That sounds perfect. Add that to the job post!
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-600"></div>
                     </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {view === 'market' && (
          <div className="container mx-auto px-4 py-8">
             {/* Filters Header */}
             <div className="mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-6">Marketplace</h2>
               
               {/* Category Tabs */}
               <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar">
                  <button 
                    onClick={() => setSelectedCategory('All')}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors ${selectedCategory === 'All' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    All Categories
                  </button>
                  {Object.values(ServiceCategory).map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors ${selectedCategory === cat ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      {cat}
                    </button>
                  ))}
               </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Sidebar Stats (Desktop) */}
                <div className="hidden md:block col-span-1">
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm sticky top-24">
                    <h3 className="font-bold text-gray-900 mb-4">Market Demand</h3>
                    <div className="h-48 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={MARKET_STATS}>
                          <XAxis dataKey="name" hide />
                          <Tooltip cursor={{fill: '#f3f4f6'}} />
                          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                            {MARKET_STATS.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#16a34a' : '#22c55e'} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 text-xs text-gray-500">
                      Real-time demand for freelance services across categories.
                    </div>
                  </div>
                </div>

                {/* Gigs Grid */}
                <div className="col-span-1 md:col-span-3">
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredGigs.map(gig => (
                        <ServiceCard key={gig.id} gig={gig} />
                      ))}
                   </div>
                   {filteredGigs.length === 0 && (
                      <div className="text-center py-20 bg-gray-50 rounded-xl border-dashed border-2 border-gray-200">
                        <p className="text-gray-500">No services found in this category.</p>
                      </div>
                   )}
                </div>
             </div>
          </div>
        )}

        {view === 'planner' && (
          <div className="bg-gray-50 min-h-[calc(100vh-64px)] py-12 px-4">
             <ProjectScopeGenerator />
          </div>
        )}

        {view === 'profile' && (
           <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
              <div className="max-w-2xl w-full">
                 <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">WorkSphere Support</h2>
                 <CommunityChat />
              </div>
           </div>
        )}

        {view === 'login' && (
          <Login onLogin={handleLogin} />
        )}
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-green-600 text-white p-1 rounded font-bold">WS</div>
               <span className="text-lg font-bold text-white">WorkSphere</span>
            </div>
            <p>© 2024 WorkSphere International Ltd.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">For Clients</h4>
            <ul className="space-y-2">
              <li>How to Hire</li>
              <li>Project Planner</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">For Talent</h4>
            <ul className="space-y-2">
              <li>How to Find Work</li>
              <li>Direct Contracts</li>
              <li>Success Stories</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>Help & Support</li>
              <li>Trust & Safety</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;