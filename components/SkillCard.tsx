import React, { useState } from 'react';
import { EliteSkill, Profession, Campaign } from '../types';

interface SkillCardProps {
  skill: EliteSkill;
  isCaptured: boolean;
  onToggleCapture: (id: string) => void;
}

const CARD_THEMES: Record<Profession, {
  border: string;
  hoverBorder: string;
  accentText: string;
  checkbox: string;
  mapBtn: string;
}> = {
  [Profession.RITUALIST]: {
    border: 'border-teal-900',
    hoverBorder: 'hover:border-teal-700',
    accentText: 'text-teal-500',
    checkbox: 'text-teal-600 focus:ring-teal-600',
    mapBtn: 'hover:bg-teal-900/40 text-teal-400 ring-teal-800'
  },
  [Profession.MONK]: {
    border: 'border-cyan-900',
    hoverBorder: 'hover:border-cyan-700',
    accentText: 'text-cyan-500',
    checkbox: 'text-cyan-600 focus:ring-cyan-600',
    mapBtn: 'hover:bg-cyan-900/40 text-cyan-400 ring-cyan-800'
  },
  [Profession.WARRIOR]: {
    border: 'border-orange-900',
    hoverBorder: 'hover:border-orange-700',
    accentText: 'text-orange-500',
    checkbox: 'text-orange-600 focus:ring-orange-600',
    mapBtn: 'hover:bg-orange-900/40 text-orange-400 ring-orange-800'
  },
  [Profession.RANGER]: {
    border: 'border-lime-900',
    hoverBorder: 'hover:border-lime-700',
    accentText: 'text-lime-500',
    checkbox: 'text-lime-600 focus:ring-lime-600',
    mapBtn: 'hover:bg-lime-900/40 text-lime-400 ring-lime-800'
  },
  [Profession.NECROMANCER]: {
    border: 'border-green-900',
    hoverBorder: 'hover:border-green-700',
    accentText: 'text-green-500',
    checkbox: 'text-green-600 focus:ring-green-600',
    mapBtn: 'hover:bg-green-900/40 text-green-400 ring-green-800'
  },
  [Profession.MESMER]: {
    border: 'border-purple-900',
    hoverBorder: 'hover:border-purple-700',
    accentText: 'text-purple-500',
    checkbox: 'text-purple-600 focus:ring-purple-600',
    mapBtn: 'hover:bg-purple-900/40 text-purple-400 ring-purple-800'
  },
  [Profession.ELEMENTALIST]: {
    border: 'border-red-900',
    hoverBorder: 'hover:border-red-700',
    accentText: 'text-red-500',
    checkbox: 'text-red-600 focus:ring-red-600',
    mapBtn: 'hover:bg-red-900/40 text-red-400 ring-red-800'
  },
  [Profession.ASSASSIN]: {
    border: 'border-fuchsia-900',
    hoverBorder: 'hover:border-fuchsia-700',
    accentText: 'text-fuchsia-500',
    checkbox: 'text-fuchsia-600 focus:ring-fuchsia-600',
    mapBtn: 'hover:bg-fuchsia-900/40 text-fuchsia-400 ring-fuchsia-800'
  },
  [Profession.PARAGON]: {
    border: 'border-yellow-900',
    hoverBorder: 'hover:border-yellow-700',
    accentText: 'text-yellow-500',
    checkbox: 'text-yellow-600 focus:ring-yellow-600',
    mapBtn: 'hover:bg-yellow-900/40 text-yellow-400 ring-yellow-800'
  },
  [Profession.DERVISH]: {
    border: 'border-indigo-900',
    hoverBorder: 'hover:border-indigo-700',
    accentText: 'text-indigo-500',
    checkbox: 'text-indigo-600 focus:ring-indigo-600',
    mapBtn: 'hover:bg-indigo-900/40 text-indigo-400 ring-indigo-800'
  },
};

export const SkillCard: React.FC<SkillCardProps> = ({ skill, isCaptured, onToggleCapture }) => {
  const [openMaps, setOpenMaps] = useState<Record<number, boolean>>({});

  const toggleMap = (index: number) => {
    setOpenMaps(prev => ({ ...prev, [index]: !prev[index] }));
  };
  
  const theme = CARD_THEMES[skill.profession] || CARD_THEMES[Profession.WARRIOR];
  const bgColor = isCaptured ? 'bg-[#151312]/80' : 'bg-[#1c1917]'; // Very dark stone

  const getCampaignColor = (campaign: Campaign) => {
    switch (campaign) {
      case Campaign.PROPHECIES: return 'bg-orange-950 text-orange-400 border border-orange-900/50';
      case Campaign.FACTIONS: return 'bg-teal-950 text-teal-400 border border-teal-900/50';
      case Campaign.NIGHTFALL: return 'bg-indigo-950 text-indigo-400 border border-indigo-900/50';
      case Campaign.EOTN: return 'bg-sky-950 text-sky-400 border border-sky-900/50';
      case Campaign.CORE: return 'bg-stone-800 text-stone-400 border border-stone-700';
      default: return 'bg-stone-800 text-stone-400';
    }
  };

  const getCampaignShortName = (campaign: Campaign) => {
    switch (campaign) {
      case Campaign.PROPHECIES: return 'Proph';
      case Campaign.FACTIONS: return 'Fact';
      case Campaign.NIGHTFALL: return 'NF';
      case Campaign.EOTN: return 'EotN';
      case Campaign.CORE: return 'Core';
      default: return campaign;
    }
  };

  return (
    <div 
      className={`relative group rounded-xl border-l-2 ${isCaptured ? 'border-green-600/50 opacity-60 grayscale-[0.5]' : theme.border} ${theme.hoverBorder} ${bgColor} p-4 shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1`}
    >
      <div className="flex justify-between items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0">
          {skill.iconUrl ? (
            <div className="relative">
              <img 
                src={skill.iconUrl} 
                alt={skill.name} 
                className={`w-12 h-12 rounded border ${isCaptured ? 'border-stone-700 opacity-70' : 'border-stone-600 shadow-md'} object-cover`}
                loading="lazy"
              />
              {!isCaptured && (
                <div className="absolute inset-0 rounded ring-1 ring-inset ring-white/10 pointer-events-none"></div>
              )}
            </div>
          ) : (
             <div className="w-12 h-12 rounded bg-stone-800 flex items-center justify-center text-xs text-stone-500 border border-stone-700">
               ?
             </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h3 className={`font-rpg text-[1.05rem] font-bold truncate ${isCaptured ? 'text-stone-500 line-through decoration-stone-700' : 'text-stone-200'}`}>
              {skill.name}
            </h3>
            {skill.skillWikiUrl && (
              <a 
                href={skill.skillWikiUrl}
                target="_blank"
                rel="noreferrer"
                className="text-stone-600 hover:text-stone-300 transition-colors"
                title="Open Skill on Wiki"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            <div className="flex flex-wrap gap-1 ml-auto sm:ml-1">
              {skill.campaigns.map((c) => (
                <span key={c} className={`text-[9px] px-1.5 py-0.5 rounded shadow-sm uppercase tracking-wider font-bold ${getCampaignColor(c)}`}>
                  {getCampaignShortName(c)}
                </span>
              ))}
            </div>
          </div>
          
          <p className="text-stone-500 text-[10px] font-mono mb-2.5 uppercase tracking-wide border-b border-stone-800/50 pb-1">
             {skill.attribute}
          </p>

          <p className="text-stone-400 text-xs mb-4 italic leading-relaxed opacity-90">
            {skill.description}
          </p>

          {/* Boss Locations List */}
          <div className="space-y-2">
             {skill.bosses.length > 0 ? (
                skill.bosses.map((boss, idx) => (
                  <div key={idx} className="bg-black/30 rounded border border-stone-800/50 overflow-hidden group/boss hover:border-stone-700/50 transition-colors">
                    <div className="p-2 flex justify-between items-center gap-2">
                       <div className="min-w-0 flex-1">
                          <div className={`text-xs font-bold truncate ${theme.accentText} transition-colors`}>
                            {boss.name}
                          </div>
                          <div className="text-[10px] text-stone-500 truncate">{boss.area}</div>
                       </div>
                       
                       <div className="flex items-center gap-1 opacity-60 group-hover/boss:opacity-100 transition-opacity">
                          {boss.wikiUrl && (
                             <a 
                               href={boss.wikiUrl} 
                               target="_blank" 
                               rel="noreferrer"
                               className="px-1.5 py-0.5 text-[9px] text-stone-400 hover:text-stone-200 bg-stone-800 hover:bg-stone-700 rounded transition-colors uppercase tracking-wide font-bold"
                               title="View Boss on Wiki"
                             >
                               Wiki
                             </a>
                          )}
                          {boss.mapUrl && (
                             <button 
                               onClick={() => toggleMap(idx)}
                               className={`px-1.5 py-0.5 text-[9px] flex items-center gap-1 bg-stone-800 rounded transition-colors uppercase tracking-wide font-bold ${theme.mapBtn} ${openMaps[idx] ? 'ring-1' : ''}`}
                               title="Toggle Map"
                             >
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                               </svg>
                               {openMaps[idx] ? 'Hide' : 'Map'}
                             </button>
                          )}
                       </div>
                    </div>
                    {/* Map Image Drawer */}
                    {openMaps[idx] && boss.mapUrl && (
                      <div className="border-t border-stone-800 bg-stone-950 p-2 animate-in slide-in-from-top-2 duration-200">
                        <img 
                          src={boss.mapUrl} 
                          alt={`Map location of ${boss.name}`} 
                          className="w-full rounded border border-stone-800 shadow-inner"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                ))
             ) : (
                <div className="text-xs text-stone-600 italic bg-black/20 p-2 rounded text-center border border-dashed border-stone-800">
                   PvE-Only Skill (Trainer)
                </div>
             )}
          </div>
        </div>

        <div className="flex flex-col items-center pt-1">
           {/* Capture Checkbox */}
          <label className="relative inline-flex items-center cursor-pointer hover:scale-110 transition-transform">
            <input 
              type="checkbox" 
              checked={isCaptured} 
              onChange={() => onToggleCapture(skill.id)}
              className={`w-5 h-5 rounded border-stone-600 bg-stone-800 ${theme.checkbox} focus:ring-offset-stone-900 transition-colors cursor-pointer`}
            />
          </label>
        </div>
      </div>
    </div>
  );
};