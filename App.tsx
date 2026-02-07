import React, { useState, useEffect, useMemo } from 'react';
import { ELITE_SKILLS, PROFESSION_ICONS, ATTRIBUTE_ORDER } from './constants';
import { EliteSkill, Profession, Campaign } from './types';
import { SkillCard } from './components/SkillCard';

declare global {
  interface Window {
    kofiWidgetOverlay: any;
  }
}

// Active button styles per profession
const PROFESSION_STYLES: Record<Profession, string> = {
  [Profession.WARRIOR]: 'bg-orange-900 text-orange-100 ring-1 ring-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.3)]',
  [Profession.RANGER]: 'bg-lime-900 text-lime-100 ring-1 ring-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.3)]',
  [Profession.MONK]: 'bg-cyan-900 text-cyan-100 ring-1 ring-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.3)]',
  [Profession.NECROMANCER]: 'bg-green-900 text-green-100 ring-1 ring-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]',
  [Profession.MESMER]: 'bg-purple-900 text-purple-100 ring-1 ring-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]',
  [Profession.ELEMENTALIST]: 'bg-red-900 text-red-100 ring-1 ring-red-500 shadow-[0_0_10px_rgba(220,38,38,0.3)]',
  [Profession.ASSASSIN]: 'bg-fuchsia-900 text-fuchsia-100 ring-1 ring-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.3)]',
  [Profession.RITUALIST]: 'bg-teal-900 text-teal-100 ring-1 ring-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.3)]',
  [Profession.PARAGON]: 'bg-yellow-900 text-yellow-100 ring-1 ring-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.3)]',
  [Profession.DERVISH]: 'bg-indigo-900 text-indigo-100 ring-1 ring-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.3)]',
};

const PROFESSION_THEMES: Record<Profession, {
  bg: string;
  border: string;
  gradient: string;
  hoverBg: string;
  bullet: string;
  focusRing: string;
}> = {
  [Profession.WARRIOR]: {
    bg: 'bg-orange-900/40',
    border: 'border-orange-800',
    gradient: 'from-orange-800 to-orange-600',
    hoverBg: 'hover:bg-orange-900/30 hover:text-orange-400 hover:border-orange-500',
    bullet: 'bg-orange-600',
    focusRing: 'focus:ring-orange-500 focus:border-orange-500'
  },
  [Profession.RANGER]: {
    bg: 'bg-lime-900/40',
    border: 'border-lime-800',
    gradient: 'from-lime-800 to-lime-600',
    hoverBg: 'hover:bg-lime-900/30 hover:text-lime-400 hover:border-lime-500',
    bullet: 'bg-lime-600',
    focusRing: 'focus:ring-lime-500 focus:border-lime-500'
  },
  [Profession.MONK]: {
    bg: 'bg-cyan-900/40',
    border: 'border-cyan-800',
    gradient: 'from-cyan-800 to-cyan-600',
    hoverBg: 'hover:bg-cyan-900/30 hover:text-cyan-400 hover:border-cyan-500',
    bullet: 'bg-cyan-600',
    focusRing: 'focus:ring-cyan-500 focus:border-cyan-500'
  },
  [Profession.NECROMANCER]: {
    bg: 'bg-green-900/40',
    border: 'border-green-800',
    gradient: 'from-green-800 to-green-600',
    hoverBg: 'hover:bg-green-900/30 hover:text-green-400 hover:border-green-500',
    bullet: 'bg-green-600',
    focusRing: 'focus:ring-green-500 focus:border-green-500'
  },
  [Profession.MESMER]: {
    bg: 'bg-purple-900/40',
    border: 'border-purple-800',
    gradient: 'from-purple-800 to-purple-600',
    hoverBg: 'hover:bg-purple-900/30 hover:text-purple-400 hover:border-purple-500',
    bullet: 'bg-purple-600',
    focusRing: 'focus:ring-purple-500 focus:border-purple-500'
  },
  [Profession.ELEMENTALIST]: {
    bg: 'bg-red-900/40',
    border: 'border-red-800',
    gradient: 'from-red-800 to-red-600',
    hoverBg: 'hover:bg-red-900/30 hover:text-red-400 hover:border-red-500',
    bullet: 'bg-red-600',
    focusRing: 'focus:ring-red-500 focus:border-red-500'
  },
  [Profession.ASSASSIN]: {
    bg: 'bg-fuchsia-900/40',
    border: 'border-fuchsia-800',
    gradient: 'from-fuchsia-800 to-fuchsia-600',
    hoverBg: 'hover:bg-fuchsia-900/30 hover:text-fuchsia-400 hover:border-fuchsia-500',
    bullet: 'bg-fuchsia-600',
    focusRing: 'focus:ring-fuchsia-500 focus:border-fuchsia-500'
  },
  [Profession.RITUALIST]: {
    bg: 'bg-teal-900/40',
    border: 'border-teal-800',
    gradient: 'from-teal-800 to-teal-600',
    hoverBg: 'hover:bg-teal-900/30 hover:text-teal-400 hover:border-teal-500',
    bullet: 'bg-teal-600',
    focusRing: 'focus:ring-teal-500 focus:border-teal-500'
  },
  [Profession.PARAGON]: {
    bg: 'bg-yellow-900/40',
    border: 'border-yellow-800',
    gradient: 'from-yellow-800 to-yellow-600',
    hoverBg: 'hover:bg-yellow-900/30 hover:text-yellow-400 hover:border-yellow-500',
    bullet: 'bg-yellow-500',
    focusRing: 'focus:ring-yellow-500 focus:border-yellow-500'
  },
  [Profession.DERVISH]: {
    bg: 'bg-indigo-900/40',
    border: 'border-indigo-800',
    gradient: 'from-indigo-800 to-indigo-600',
    hoverBg: 'hover:bg-indigo-900/30 hover:text-indigo-400 hover:border-indigo-500',
    bullet: 'bg-indigo-600',
    focusRing: 'focus:ring-indigo-500 focus:border-indigo-500'
  },
};

const App: React.FC = () => {
  // Persistence for Skills
  const [capturedIds, setCapturedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('gw1-captured-skills');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (e) {
      console.warn('Failed to load from local storage:', e);
      return new Set();
    }
  });

  // UI State
  const [activeTab, setActiveTab] = useState<Profession>(Profession.WARRIOR);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCampaigns, setSelectedCampaigns] = useState<Set<Campaign>>(new Set());
  
  // Save skills on change
  useEffect(() => {
    try {
      localStorage.setItem('gw1-captured-skills', JSON.stringify(Array.from(capturedIds)));
    } catch (e) {
      console.warn('Failed to save to local storage:', e);
    }
  }, [capturedIds]);

  // Immediate Ko-fi Widget
  useEffect(() => {
    const initKofi = () => {
      if (typeof window.kofiWidgetOverlay !== 'undefined') {
        const existing = document.getElementById('kofi-widget-overlay-container');
        if (!existing) {
          try {
            window.kofiWidgetOverlay.draw('rariwan_gine', {
              'type': 'floating-chat',
              'floating-chat.donateButton.text': 'Support me',
              'floating-chat.donateButton.background-color': '#ea580c',
              'floating-chat.donateButton.text-color': '#fff'
            });
          } catch (e) {
            console.error('Failed to draw Ko-fi widget', e);
          }
        }
        return true;
      }
      return false;
    };

    // Try immediately
    if (!initKofi()) {
      // If script hasn't loaded yet, poll for it
      const interval = setInterval(() => {
        if (initKofi()) {
          clearInterval(interval);
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, []);

  const toggleCapture = (id: string) => {
    setCapturedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setCapturedIds(new Set());
    }
  };

  const toggleCampaignFilter = (campaign: Campaign) => {
    setSelectedCampaigns(prev => {
      const next = new Set(prev);
      if (next.has(campaign)) {
        next.delete(campaign);
      } else {
        next.add(campaign);
      }
      return next;
    });
  };

  // 1. Filter skills based on tab, search, and campaigns
  const filteredSkills = useMemo(() => {
    return ELITE_SKILLS.filter(skill => {
      const matchesProfession = skill.profession === activeTab;
      
      const matchesSearch = 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.attribute.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.bosses.some(b => 
           b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           b.area.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCampaign = 
        selectedCampaigns.size === 0 || 
        skill.campaigns.some(c => selectedCampaigns.has(c));

      return matchesProfession && matchesSearch && matchesCampaign;
    });
  }, [activeTab, searchQuery, selectedCampaigns]);

  // 2. Group filtered skills by attribute and sort
  const groupedSkills = useMemo(() => {
    const tempGroups: Record<string, EliteSkill[]> = {};
    
    // Group skills
    filteredSkills.forEach(skill => {
        if (!tempGroups[skill.attribute]) {
            tempGroups[skill.attribute] = [];
        }
        tempGroups[skill.attribute].push(skill);
    });

    // Create sorted groups object (Attributes sorted alphabetically)
    const sortedGroups: Record<string, EliteSkill[]> = {};
    
    // Helper to sort skills alphabetically ignoring quotes and special chars
    const sortSkills = (skills: EliteSkill[]) => {
      return skills.sort((a, b) => {
        const nameA = a.name.replace(/[^a-zA-Z0-9 ]/g, "");
        const nameB = b.name.replace(/[^a-zA-Z0-9 ]/g, "");
        return nameA.localeCompare(nameB);
      });
    };

    const attributeOrder = ATTRIBUTE_ORDER[activeTab] || [];

    // Add attributes in explicit order
    attributeOrder.forEach(attr => {
        if (tempGroups[attr]) {
            sortedGroups[attr] = sortSkills(tempGroups[attr]);
        }
    });

    // Catch any loose attributes not in order list
    Object.keys(tempGroups).forEach(attr => {
       if (!sortedGroups[attr]) {
           sortedGroups[attr] = sortSkills(tempGroups[attr]);
       }
    });

    return sortedGroups;
  }, [filteredSkills, activeTab]);

  const progress = useMemo(() => {
    const total = ELITE_SKILLS.filter(s => s.profession === activeTab).length;
    const captured = ELITE_SKILLS.filter(s => s.profession === activeTab && capturedIds.has(s.id)).length;
    return { total, captured, percentage: total === 0 ? 0 : Math.round((captured / total) * 100) };
  }, [activeTab, capturedIds]);

  const campaignFilters = [
    { label: 'Prophecies', value: Campaign.PROPHECIES, color: 'border-orange-600 text-orange-400 bg-orange-950/40' },
    { label: 'Factions', value: Campaign.FACTIONS, color: 'border-teal-600 text-teal-400 bg-teal-950/40' },
    { label: 'Nightfall', value: Campaign.NIGHTFALL, color: 'border-indigo-600 text-indigo-400 bg-indigo-950/40' },
    { label: 'EotN', value: Campaign.EOTN, color: 'border-sky-600 text-sky-400 bg-sky-950/40' },
    { label: 'Core', value: Campaign.CORE, color: 'border-stone-500 text-stone-300 bg-stone-800' },
  ];

  // Helper for scroll IDs
  const toId = (str: string) => str.replace(/\s+/g, '-').toLowerCase();

  const theme = PROFESSION_THEMES[activeTab] || PROFESSION_THEMES[Profession.WARRIOR];

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-200 pb-20 selection:bg-orange-900 selection:text-orange-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#1c1917]/95 backdrop-blur-md border-b border-stone-800 shadow-lg shadow-black/20">
        <div className="max-w-[1600px] mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex items-center gap-6">
             {/* Logo Section */}
             <div className="flex items-center gap-4 animate-in fade-in duration-500">
                <img 
                  src="logo.png"
                  alt="Guild Wars Reforged" 
                  className="h-14 md:h-16 w-auto object-contain hover:brightness-110 transition-all drop-shadow-md" 
                />
             </div>
             
             {/* Vertical Divider */}
             <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-stone-700 to-transparent"></div>
             
             {/* Site Title */}
             <div className="hidden md:flex flex-col justify-center">
               <h1 className="font-rpg text-xl lg:text-2xl font-bold text-stone-200 tracking-wider leading-none">
                 Elite Skill
               </h1>
               <span className="font-rpg text-sm lg:text-base text-stone-500 tracking-[0.3em] font-bold uppercase leading-none mt-1">
                 Capture Checklist
               </span>
             </div>
          </div>
          
          <div className="flex gap-2 bg-stone-900/80 p-1.5 rounded-lg overflow-x-auto border border-stone-800 max-w-full">
            {Object.values(Profession).map((prof) => (
              <button 
                key={prof}
                onClick={() => setActiveTab(prof)}
                className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeTab === prof
                    ? PROFESSION_STYLES[prof]
                    : 'text-stone-500 hover:text-stone-300 hover:bg-stone-800'
                }`}
              >
                <img src={PROFESSION_ICONS[prof]} alt={prof} className="w-5 h-5 drop-shadow-sm filter brightness-110" />
                {prof}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Container with Sidebar */}
      <div className="max-w-[1600px] mx-auto px-4 py-8 flex items-start gap-8">
        
        {/* Sticky Sidebar Navigation (Desktop) */}
        <aside className="hidden lg:block w-64 sticky top-32 shrink-0 space-y-1">
          <div className="px-3 py-2 text-xs font-bold text-stone-500 uppercase tracking-wider mb-2 border-b border-stone-800/50">
            Attributes
          </div>
          {Object.keys(groupedSkills).map(attr => (
            <button
              key={attr}
              onClick={() => {
                const element = document.getElementById(toId(attr));
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-all duration-200 border-l-2 border-transparent text-stone-400 ${theme.hoverBg}`}
            >
              {attr}
            </button>
          ))}
          {Object.keys(groupedSkills).length === 0 && (
             <div className="px-3 text-sm text-stone-600 italic">No skills found</div>
          )}
        </aside>

        {/* Content Area */}
        <main className="flex-1 min-w-0">
          
          {/* Progress & Search */}
          <div className="mb-8 space-y-6">
            <div className={`p-6 rounded-xl border ${theme.border} ${theme.bg} shadow-xl backdrop-blur-sm`}>
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-3">
                  {/* Profession Icon in Header */}
                  <img 
                    src={PROFESSION_ICONS[activeTab]} 
                    alt={activeTab} 
                    className="w-10 h-10 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  />
                  <div>
                    <h2 className="text-2xl font-rpg text-stone-100 drop-shadow-md">
                      {activeTab} Mastery
                    </h2>
                    <div className="text-xs text-stone-400 mt-1 uppercase tracking-wider">
                      Elite Skill Checklist
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold font-rpg text-stone-200">
                    {progress.captured} <span className="text-stone-500 text-xl">/ {progress.total}</span>
                  </span>
                  {progress.captured > 0 && (
                    <button 
                      onClick={resetProgress}
                      className="block text-[10px] text-red-500/70 hover:text-red-400 transition-colors uppercase tracking-widest mt-1 ml-auto"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
              
              <div className="w-full bg-black/40 rounded-full h-3 overflow-hidden border border-black/20">
                <div 
                  className={`h-full transition-all duration-700 ease-out bg-gradient-to-r ${theme.gradient} shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
                  style={{ width: `${progress.percentage}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-stone-500 group-focus-within:text-orange-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  placeholder={`Search ${activeTab} skills, attributes, bosses...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`block w-full pl-10 pr-3 py-3 border border-stone-800 rounded-lg leading-5 bg-stone-900/80 placeholder-stone-600 focus:outline-none focus:ring-2 sm:text-sm text-stone-200 transition-all shadow-inner ${theme.focusRing}`}
                />
              </div>

              {/* Expansion Filters */}
              <div className="flex flex-wrap gap-2">
                {campaignFilters.map((filter) => {
                   const isSelected = selectedCampaigns.has(filter.value);
                   return (
                     <button
                       key={filter.value}
                       onClick={() => toggleCampaignFilter(filter.value)}
                       className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded border transition-all duration-200 
                         ${isSelected 
                           ? `${filter.color} border-current shadow-[0_0_8px_rgba(0,0,0,0.3)]` 
                           : 'border-stone-800 bg-stone-900 text-stone-600 hover:border-stone-700 hover:text-stone-400'
                         }`}
                     >
                       {filter.label}
                     </button>
                   );
                })}
                {selectedCampaigns.size > 0 && (
                  <button 
                    onClick={() => setSelectedCampaigns(new Set())}
                    className="px-3 py-1.5 text-xs text-stone-500 hover:text-orange-400 underline decoration-stone-800 hover:decoration-orange-400 transition-all ml-auto"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Grouped Skill Grid */}
          <div className="space-y-12">
            {Object.entries(groupedSkills).map(([attribute, skills]: [string, EliteSkill[]]) => {
               if (skills.length === 0) return null;
               const sectionId = toId(attribute);
               
               return (
                 <div 
                   key={attribute} 
                   id={sectionId}
                   className="animate-in fade-in slide-in-from-bottom-4 duration-700 scroll-mt-28"
                 >
                    <div className="flex items-center gap-3 mb-5 border-b border-stone-800 pb-2">
                      <div className={`w-1.5 h-6 rounded-sm ${theme.bullet}`}></div>
                      <h3 className="text-xl font-rpg text-stone-300">
                        {attribute} 
                      </h3>
                      <span className="text-xs text-stone-600 font-mono mt-1">[{skills.length}]</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {skills.map(skill => (
                        <SkillCard 
                          key={skill.id} 
                          skill={skill} 
                          isCaptured={capturedIds.has(skill.id)}
                          onToggleCapture={toggleCapture}
                        />
                      ))}
                    </div>
                 </div>
               )
            })}
            
            {filteredSkills.length === 0 && (
              <div className="py-16 text-center text-stone-600 border border-dashed border-stone-800 rounded-xl bg-stone-900/20">
                <p>No skills found matching your criteria.</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Footer / Disclaimer */}
      <footer className="max-w-[1600px] mx-auto px-4 text-center text-stone-700 text-xs pb-10 pt-10 border-t border-stone-900 mt-10">
        <p className="mb-2 uppercase tracking-widest font-bold opacity-50">Guild Wars Reforged</p>
        <p>Guild Wars is a trademark of NCSOFT Corporation. This is a fan-made tool.</p>
      </footer>
    </div>
  );
};

export default App;