import { EliteSkill, Profession, Campaign, Attribute } from '../types';

export const MESMER_SKILLS: EliteSkill[] = [
  // --- Domination Magic ---
  {
    id: 'mes-enchanters-conundrum',
    name: "Enchanter's Conundrum",
    profession: Profession.MESMER,
    attribute: Attribute.DOMINATION_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Enchanter%27s_Conundrum',
    bosses: [
      {
        name: 'Captain Chichor',
        area: 'Arkjok Ward',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Captain_Chichor',
        mapUrl: 'https://wiki.guildwars.com/images/c/cc/Captain_Chichor_map.jpg'
      },
      {
        name: 'Lieutenant Nali',
        area: 'Pogahn Passage',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lieutenant_Nali',
        mapUrl: 'https://wiki.guildwars.com/images/2/2c/Lieutenant_Nali_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. Causes 100...180...200% slower enchantment casting (10 seconds). Initial effect: deals 10...82...100 damage to target and adjacent foes if target foe is not enchanted.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/d1/Enchanter%27s_Conundrum.jpg/50px-Enchanter%27s_Conundrum.jpg'
  },
  {
    id: 'mes-energy-surge',
    name: 'Energy Surge',
    profession: Profession.MESMER,
    attribute: Attribute.DOMINATION_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Energy_Surge',
    bosses: [
      {
        name: 'Balasi the Arcane',
        area: 'Iron Mines of Moladune',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Balasi_the_Arcane',
        mapUrl: 'https://wiki.guildwars.com/images/2/2f/Iron_Mines_of_Moladune_boss_locations.jpg'
      },
      {
        name: 'Pantheras The Deceiver',
        area: 'Thunderhead Keep',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Pantheras_The_Deceiver'
      },
      {
        name: 'Melek the Virtuous',
        area: 'Ring of Fire',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Melek_the_Virtuous',
        mapUrl: 'https://wiki.guildwars.com/images/2/2a/Ring_of_Fire_Mursaat_Map.jpg'
      },
      {
        name: 'Mercia the Smug',
        area: "Abaddon's Mouth",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mercia_the_Smug',
        mapUrl: 'https://wiki.guildwars.com/images/a/ae/Abaddons_Mouth_Mursaat_and_Jade_Map.jpg'
      },
      {
        name: 'Mursaat Mesmer',
        area: 'Ice Floe',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mursaat_Mesmer_(boss)',
        mapUrl: 'https://wiki.guildwars.com/images/9/90/Mursaat_bosses_in_Ice_Floe_map.jpg'
      },
      {
        name: 'The Darkness',
        area: 'The Hall of Heroes (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Darkness'
      },
      {
        name: 'Milefaun Mindflayer',
        area: 'Arborstone, Mourning Veil Falls',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Milefaun_Mindflayer',
        mapUrl: 'https://wiki.guildwars.com/images/5/52/Milefaun_Mindflayer_map.jpg'
      },
      {
        name: 'Yammiron, Ether Lord',
        area: 'The Mirror of Lyss',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Yammiron,_Ether_Lord',
        mapUrl: 'https://wiki.guildwars.com/images/6/6b/Yammiron,_Ether_Lord_map.jpg'
      },
      {
        name: 'Yammirvu, Ether Guardian',
        area: 'The Hidden City of Ahdashim',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Yammirvu,_Ether_Guardian',
        mapUrl: 'https://wiki.guildwars.com/images/d/df/Yammirvu,_Ether_Guardian_map.jpg'
      }
    ],
    description: 'Elite Spell. Causes 1...8...10 Energy loss. Deals 9 damage to target and nearby foes for each point of Energy lost.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/f6/Energy_Surge.jpg/50px-Energy_Surge.jpg'
  },
  {
    id: 'mes-hex-eater-vortex',
    name: 'Hex Eater Vortex',
    profession: Profession.MESMER,
    attribute: Attribute.DOMINATION_MAGIC,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Hex_Eater_Vortex',
    bosses: [
      {
        name: 'Amind the Bitter',
        area: 'Gate of Desolation',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Amind_the_Bitter',
        mapUrl: 'https://wiki.guildwars.com/images/4/4d/Amind_the_Bitter_map.jpg'
      },
      {
        name: 'Shelkeh the Hungry',
        area: 'The Alkali Pan',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shelkeh_the_Hungry',
        mapUrl: 'https://wiki.guildwars.com/images/c/c1/Shelkeh_the_Hungry_map.jpg'
      },
      {
        name: 'Mind of Destruction',
        area: "Glint's Challenge",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mind_of_Destruction'
      }
    ],
    description: 'Elite Spell. Removes one hex from target ally. Removal effect: deals 30...78...90 damage and removes one enchantment from foes in the area of this ally.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/7/7e/Hex_Eater_Vortex.jpg/50px-Hex_Eater_Vortex.jpg'
  },
  {
    id: 'mes-panic',
    name: 'Panic',
    profession: Profession.MESMER,
    attribute: Attribute.DOMINATION_MAGIC,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Panic',
    bosses: [
      {
        name: 'Moles Quibus',
        area: "Hell's Precipice",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Moles_Quibus',
        mapUrl: 'https://wiki.guildwars.com/images/9/91/Hell%27s_Precipice_Titan_Boss_map.jpg'
      },
      {
        name: 'Mallus Funo',
        area: "Dragon's Gullet (Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mallus_Funo',
        mapUrl: 'https://wiki.guildwars.com/images/f/f1/The_Titan_Source_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. Also hexes foes near your target (1...8...10 second[s]). Interrupts all other nearby foes whenever a hexed foe successfully activates a skill.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/f7/Panic.jpg/50px-Panic.jpg'
  },
  {
    id: 'mes-power-block',
    name: 'Power Block',
    profession: Profession.MESMER,
    attribute: Attribute.DOMINATION_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Power_Block',
    bosses: [
      {
        name: "Lyssa's Cursed",
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lyssa%27s_Cursed',
        mapUrl: 'https://wiki.guildwars.com/images/a/ad/Perdition_Rock_Cursed_bosses_map.jpg'
      },
      {
        name: 'Faze Magekiller',
        area: 'Cathedral of Flames',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Faze_Magekiller',
        mapUrl: 'https://wiki.guildwars.com/images/9/99/Faze_Magekiller_Cathedral_of_Flames.jpg'
      },
      {
        name: 'Anmat the Trickster',
        area: 'Sacnoth Valley',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Anmat_the_Trickster',
        mapUrl: 'https://wiki.guildwars.com/images/b/be/Sacnoth_Valley_Charr_Bosses_map.jpg'
      },
      {
        name: 'Anmat the Trickster',
        area: 'Against the Charr (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Anmat_the_Trickster',
        mapUrl: 'https://wiki.guildwars.com/images/5/51/Against_the_Charr_map.jpg'
      }
    ],
    description: 'Elite Spell. If target foe is casting a spell or chant, that skill and all skills of the same attribute are disabled (1...10...12 seconds) and that skill is interrupted.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/5e/Power_Block.jpg/50px-Power_Block.jpg'
  },
  {
    id: 'mes-power-flux',
    name: 'Power Flux',
    profession: Profession.MESMER,
    attribute: Attribute.DOMINATION_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Power_Flux',
    bosses: [
      {
        name: 'Vision of Despair',
        area: 'Domain of Pain',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Vision_of_Despair',
        mapUrl: 'https://wiki.guildwars.com/images/f/f7/Vision_of_Despair_map.jpg'
      },
      {
        name: 'Demonic Fortune Teller',
        area: 'Domain of Fear (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Demonic_Fortune_Teller'
      }
    ],
    description: 'Elite Hex Spell. Interrupts a spell or chant. Interruption effect: -2 Energy degeneration (4...9...10 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/0/03/Power_Flux.jpg/50px-Power_Flux.jpg'
  },
  {
    id: 'mes-psychic-distraction',
    name: 'Psychic Distraction',
    profession: Profession.MESMER,
    attribute: Attribute.DOMINATION_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Psychic_Distraction',
    bosses: [
      {
        name: "Mesmer's Construct",
        area: 'Sunjiang District (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mesmer%27s_Construct',
        mapUrl: "https://wiki.guildwars.com/images/e/ed/Mesmer's_Construct_map.jpg"
      }
    ],
    description: 'Elite Spell. Interrupts a skill. Interruption effect: disables interrupted skill (+5...11...12 seconds). Your other skills are disabled (8 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/7/70/Psychic_Distraction.jpg/50px-Psychic_Distraction.jpg'
  },
  {
    id: 'mes-simple-thievery',
    name: 'Simple Thievery',
    profession: Profession.MESMER,
    attribute: Attribute.DOMINATION_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Simple_Thievery',
    bosses: [
      {
        name: 'Midshipman Morolah',
        area: 'Barbarous Shore',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Midshipman_Morolah',
        mapUrl: 'https://wiki.guildwars.com/images/7/79/Midshipman_Morolah_map.jpg'
      }
    ],
    description: 'Elite Spell. Interrupts an action. Interruption effect: If a skill was interrupted, that skill is disabled and Simple Thievery becomes that skill (5...17...20 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/11/Simple_Thievery.jpg/50px-Simple_Thievery.jpg'
  },
  {
    id: 'mes-visions-of-regret',
    name: 'Visions of Regret',
    profession: Profession.MESMER,
    attribute: Attribute.DOMINATION_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Visions_of_Regret',
    bosses: [
      {
        name: 'Korrub, Flame of Dreams',
        area: 'Wilderness of Bahdza (After Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Korrub,_Flame_of_Dreams',
        mapUrl: 'https://wiki.guildwars.com/images/7/7d/Korrub,_Flame_of_Dreams_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. Also hexes foes adjacent to target (10 seconds). These foes take 15...39...45 damage whenever they use a skill and 5...41...50 additional damage if not under the effects of another Mesmer hex.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/93/Visions_of_Regret.jpg/50px-Visions_of_Regret.jpg'
  },

  // --- Fast Casting ---
  {
    id: 'mes-arcane-languor',
    name: 'Arcane Languor',
    profession: Profession.MESMER,
    attribute: Attribute.FAST_CASTING,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Arcane_Languor',
    bosses: [
      {
        name: 'Arcane Ancient Phi',
        area: 'Raisu Palace',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Arcane_Ancient_Phi',
        mapUrl: 'https://wiki.guildwars.com/images/8/8c/Arcane_Ancient_Phi_map.jpg'
      },
      {
        name: 'Bound Kitah',
        area: 'Tahnnakai Temple',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bound_Kitah',
        mapUrl: 'https://wiki.guildwars.com/images/3/37/Tahnnakai_Temple_map.jpg'
      }
    ],
    description: "Elite Hex Spell. (1...8...10 second[s].) Target foe's spells cause 10 Overcast.",
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/d5/Arcane_Languor.jpg/50px-Arcane_Languor.jpg'
  },
  {
    id: 'mes-keystone-signet',
    name: 'Keystone Signet',
    profession: Profession.MESMER,
    attribute: Attribute.FAST_CASTING,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Keystone_Signet',
    bosses: [
      {
        name: 'Rune Ethercrash',
        area: 'Spearhead Peak',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Rune_Ethercrash',
        mapUrl: 'https://wiki.guildwars.com/images/f/fa/Rune_Ethercrash_map.jpg'
      }
    ],
    description: 'Elite Signet. (20 seconds.) Your next 0...5...6 signet[s] interrupt [sic] and deal 15...51...60 damage to other foes adjacent to your target. Initial Effect: [sic] recharges all of your other signets.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/31/Keystone_Signet.jpg/50px-Keystone_Signet.jpg'
  },
  {
    id: 'mes-mantra-of-recovery',
    name: 'Mantra of Recovery',
    profession: Profession.MESMER,
    attribute: Attribute.FAST_CASTING,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Mantra_of_Recovery',
    bosses: [
      {
        name: 'Ayassah Hess',
        area: 'Dunes of Despair',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ayassah_Hess',
        mapUrl: 'https://wiki.guildwars.com/images/c/cb/Dunes_of_Despair_random_boss_spawn_locations.jpg'
      },
      {
        name: 'Tiss Danssir',
        area: 'Elona Reach',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tiss_Danssir',
        mapUrl: 'https://wiki.guildwars.com/images/9/95/Custodian_Jenus_location.jpg'
      },
      {
        name: 'Goss Aleessh',
        area: 'Thirsty River',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Goss_Aleessh',
        mapUrl: 'https://wiki.guildwars.com/images/8/85/Goss_Aleessh_map.jpg'
      },
      {
        name: 'Mugra Swiftspell',
        area: 'Ferndale',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mugra_Swiftspell',
        mapUrl: 'https://wiki.guildwars.com/images/a/a6/Mugra_Swiftspell_map.jpg'
      },
      {
        name: 'Olunoss Windwalker',
        area: "Turai's Procession (After Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Olunoss_Windwalker',
        mapUrl: 'https://wiki.guildwars.com/images/c/cd/Olunoss_Windwalker_map.jpg'
      }
    ],
    description: 'Elite Stance. (5...17...20 seconds.) Your spells recharge 33% faster.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/0/00/Mantra_of_Recovery.jpg/50px-Mantra_of_Recovery.jpg'
  },
  {
    id: 'mes-psychic-instability',
    name: 'Psychic Instability',
    profession: Profession.MESMER,
    attribute: Attribute.FAST_CASTING,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Psychic_Instability',
    bosses: [
      {
        name: 'Chazek Plague Herder',
        area: 'Unwaking Waters (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chazek_Plague_Herder',
        mapUrl: 'https://wiki.guildwars.com/images/2/23/Chazek_Plague_Herder_map.jpg'
      }
    ],
    description: 'Elite Spell. Interrupts an action. Interruption effect: if the action is a skill, cause knockdown for 2...4...4 seconds on target foe and all nearby foes. 50% failure chance unless Fast Casting 5 or higher.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/db/Psychic_Instability.jpg/50px-Psychic_Instability.jpg'
  },
  {
    id: 'mes-stolen-speed',
    name: 'Stolen Speed',
    profession: Profession.MESMER,
    attribute: Attribute.FAST_CASTING,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Stolen_Speed',
    bosses: [
      {
        name: 'The Afflicted Meeka',
        area: "Dragon's Throat",
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Meeka',
        mapUrl: 'https://wiki.guildwars.com/images/6/64/The_Afflicted_Meeka_map.jpg'
      },
      {
        name: 'The Afflicted Li Yun',
        area: 'Vizunah Square, Shenzun Tunnels',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Li_Yun',
        mapUrl: 'https://wiki.guildwars.com/images/a/ab/The_Afflicted_Li_Yun_map.jpg'
      },
      {
        name: 'The Afflicted Hsin Jun',
        area: 'Unwaking Waters',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Hsin_Jun',
        mapUrl: 'https://wiki.guildwars.com/images/5/59/The_Afflicted_Hsin_Jun_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. Also hexes adjacent foes (1...8...10 seconds). Doubles spell casting time. Spells cast by you or your allies have -50% casting times.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/f0/Stolen_Speed.jpg/50px-Stolen_Speed.jpg'
  },
  {
    id: 'mes-symbols-of-inspiration',
    name: 'Symbols of Inspiration',
    profession: Profession.MESMER,
    attribute: Attribute.FAST_CASTING,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Symbols_of_Inspiration',
    bosses: [
      {
        name: 'Wieshur the Inspiring',
        area: 'Domain of Secrets',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Wieshur_the_Inspiring',
        mapUrl: 'https://wiki.guildwars.com/images/3/38/Wieshur_the_Inspiring_map.jpg'
      }
    ],
    description: 'Elite Skill. (1...25...31 seconds.) This skill becomes the Elite of target foe. Elite spells you cast use your Fast Casting attribute instead of their normal attributes.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/a4/Symbols_of_Inspiration.jpg/50px-Symbols_of_Inspiration.jpg'
  },
  {
    id: 'mes-time-ward',
    name: 'Time Ward',
    profession: Profession.MESMER,
    attribute: Attribute.FAST_CASTING,
    campaigns: [Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Time_Ward',
    bosses: [
      {
        name: 'Fureyst Sharpsight',
        area: 'Sacnoth Valley (Requires Proof of Triumph)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Fureyst_Sharpsight',
        mapUrl: 'https://wiki.guildwars.com/images/1/10/Fureyst_Sharpsight_location.png'
      }
    ],
    description: 'Elite Ward Spell. (3...13...15 seconds.) Allies in this ward cast spells 15...19...20% faster and recharge skills 15...19...20% faster. Allied spirits are not affected. PvE Skill. Note that as a PvE-only skill, Elite Skill Tomes cannot be used to learn this skill.',
    iconUrl: 'https://wiki.guildwars.com/images/9/90/Time_Ward.jpg'
  },

  // --- Illusion Magic ---
  {
    id: 'mes-air-of-disenchantment',
    name: 'Air of Disenchantment',
    profession: Profession.MESMER,
    attribute: Attribute.ILLUSION_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Air_of_Disenchantment',
    bosses: [
      {
        name: 'Hojanukun Mindstealer',
        area: 'Garden of Seborhin',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hojanukun_Mindstealer',
        mapUrl: 'https://wiki.guildwars.com/images/f/f6/Hojanukun_Mindstealer_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. Also hexes foes near your target (5...17...20 seconds). Remove one enchantment from target and nearby foes. Enchantments expire 150...270...300% faster on those foes.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/8/89/Air_of_Disenchantment.jpg/50px-Air_of_Disenchantment.jpg'
  },
  {
    id: 'mes-crippling-anguish',
    name: 'Crippling Anguish',
    profession: Profession.MESMER,
    attribute: Attribute.ILLUSION_MAGIC,
    campaigns: [Campaign.CORE, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Crippling_Anguish',
    bosses: [
      {
        name: 'Barl Stormsiege',
        area: 'Frozen Forest',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Barl_Stormsiege',
        mapUrl: 'https://wiki.guildwars.com/images/f/fe/Frozen_Forest_Stone_Summit_bosses_map.jpg'
      },
      {
        name: 'Erzek Runebreaker',
        area: "Lornar's Pass",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Erzek_Runebreaker'
      },
      {
        name: 'Fuury Stonewrath',
        area: 'Thunderhead Keep',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Fuury_Stonewrath',
        mapUrl: 'https://wiki.guildwars.com/images/5/58/THK_Dwarf_Boss_Map.jpg'
      },
      {
        name: 'Garbok Handsmasher',
        area: "Sorrow's Furnace",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Garbok_Handsmasher',
        mapUrl: 'https://wiki.guildwars.com/images/1/1f/Sorrow%27s_Furnace_map.jpg'
      },
      {
        name: 'Gorrel Rockmolder',
        area: "Grenth's Footprint",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Gorrel_Rockmolder',
        mapUrl: 'https://wiki.guildwars.com/images/f/fe/Grenth%27s_Footprint_bosses_map.jpg'
      },
      {
        name: 'Hierophant Morlog',
        area: "Sorrow's Furnace (Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hierophant_Morlog'
      },
      {
        name: 'Jonar Stonebender',
        area: 'Ice Caves of Sorrow',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jonar_Stonebender',
        mapUrl: 'https://wiki.guildwars.com/images/6/6c/Jonar_Stonebender_map.jpg'
      },
      {
        name: 'Korvald Willcrusher',
        area: "Sorrow's Furnace",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Korvald_Willcrusher'
      },
      {
        name: 'Yxthoshth',
        area: 'Salt Flats (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Yxthoshth',
        mapUrl: 'https://wiki.guildwars.com/images/d/d2/Yxthoshth_location.jpg'
      },
      {
        name: 'Bezzr Wingstorm',
        area: 'Drazach Thicket',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bezzr_Wingstorm',
        mapUrl: 'https://wiki.guildwars.com/images/4/44/Bezzr_Wingstorm_map.jpg'
      },
      {
        name: 'Eshim Mindclouder',
        area: 'Sunward Marches',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Eshim_Mindclouder',
        mapUrl: 'https://wiki.guildwars.com/images/e/e7/Eshim_Mindclouder_map.jpg'
      },
      {
        name: 'Yamesh Mindclouder',
        area: 'Vehtendi Valley',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Yamesh_Mindclouder',
        mapUrl: 'https://wiki.guildwars.com/images/0/0a/Yamesh_Mindclouder_map.jpg'
      },
      {
        name: 'Veturni Mindsquall',
        area: 'Magus Stones',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Veturni_Mindsquall',
        mapUrl: 'https://wiki.guildwars.com/images/4/4a/Veturni_Mindquall_Location.jpg'
      },
      {
        name: 'Alitta Guilebloom',
        area: 'Arbor Bay',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Alitta_Guilebloom',
        mapUrl: 'https://wiki.guildwars.com/images/d/da/Alitta_Guilebloom_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (5...17...20 seconds.) Target foe moves and attacks 50% slower and has -1...7...8 Health degeneration.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/e4/Crippling_Anguish.jpg/50px-Crippling_Anguish.jpg'
  },
  {
    id: 'mes-fevered-dreams',
    name: 'Fevered Dreams',
    profession: Profession.MESMER,
    attribute: Attribute.ILLUSION_MAGIC,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Fevered_Dreams',
    bosses: [
      {
        name: 'Plexus Shadowhook',
        area: "Abaddon's Mouth",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Plexus_Shadowhook',
        mapUrl: 'https://wiki.guildwars.com/images/f/ff/Abaddon%27s_Mouth_Dryder_Boss_Map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (10...22...25 seconds.) Foes in the area also have any new conditions that target foe acquires. Inflicts Dazed on target foe (1...3...3 second[s]) if that foe has two or more conditions.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/7/72/Fevered_Dreams.jpg/50px-Fevered_Dreams.jpg'
  },
  {
    id: 'mes-illusionary-weaponry',
    name: 'Illusionary Weaponry',
    profession: Profession.MESMER,
    attribute: Attribute.ILLUSION_MAGIC,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Illusionary_Weaponry',
    bosses: [
      {
        name: 'Didn Hopestealer',
        area: 'Snake Dance',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Didn_Hopestealer',
        mapUrl: 'https://wiki.guildwars.com/images/0/0e/Spawn_points_of_nightmare_bosses_in_Snake_Dance.jpg'
      },
      {
        name: 'Seear Windlash',
        area: 'Talus Chute',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Seear_Windlash',
        mapUrl: 'https://wiki.guildwars.com/images/a/a5/Seear_Windlash_map.jpg'
      },
      {
        name: 'Digo Murkstalker',
        area: 'Iron Mines of Moladune',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Digo_Murkstalker',
        mapUrl: 'https://wiki.guildwars.com/images/9/9a/Digo_Murkstalker_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (30 seconds.) Deals 8...34...40 damage to foes in place of other damage or effects from melee attacks. You have +5 armor for each equipped Illusion Magic skill. Your melee attacks neither hit nor fail to hit.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/ab/Illusionary_Weaponry.jpg/50px-Illusionary_Weaponry.jpg'
  },
  {
    id: 'mes-ineptitude',
    name: 'Ineptitude',
    profession: Profession.MESMER,
    attribute: Attribute.ILLUSION_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Ineptitude',
    bosses: [
      {
        name: 'Wyt Sharpfeather',
        area: 'Mineral Springs',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Wyt_Sharpfeather',
        mapUrl: 'https://wiki.guildwars.com/images/6/65/Mineral_Springs_Avicara_bosses_map.jpg'
      },
      {
        name: 'Kemil the Inept',
        area: 'Alcazia Tangle',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kemil_the_Inept',
        mapUrl: 'https://wiki.guildwars.com/images/8/8c/Kemil_the_Inept_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (4 seconds.) Also hexes foes adjacent to target. Deals 30...114...135 damage. Inflicts Blindness condition (10 seconds). No effect unless hexed foe attacks.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/6/6d/Ineptitude.jpg/50px-Ineptitude.jpg'
  },
  {
    id: 'mes-migraine',
    name: 'Migraine',
    profession: Profession.MESMER,
    attribute: Attribute.ILLUSION_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Migraine',
    bosses: [
      {
        name: 'Pytt Spitespew',
        area: 'Ring of Fire',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Pytt_Spitespew',
        mapUrl: 'https://wiki.guildwars.com/images/5/5f/Pytt_Spitespew_map.jpg'
      },
      {
        name: 'Wilderm Wrathspew',
        area: 'Verdant Cascades',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Wilderm_Wrathspew',
        mapUrl: 'https://wiki.guildwars.com/images/6/68/Wilderm_Wrathspew_Location.jpg'
      },
      {
        name: 'Waray Skullflayer',
        area: 'Sparkfly Swamp',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Waray_Skullflayer',
        mapUrl: 'https://wiki.guildwars.com/images/f/fc/Waray_Skullflayer_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (5...17...20 seconds.) Causes -1...7...8 Health degeneration and doubles skill activation time.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/ad/Migraine.jpg/50px-Migraine.jpg'
  },
  {
    id: 'mes-recurring-insecurity',
    name: 'Recurring Insecurity',
    profession: Profession.MESMER,
    attribute: Attribute.ILLUSION_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Recurring_Insecurity',
    bosses: [
      {
        name: 'Xisni Dream Haunt',
        area: 'Mourning Veil Falls',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Xisni_Dream_Haunt',
        mapUrl: 'https://wiki.guildwars.com/images/4/4c/Xisni_Dream_Haunt_map.jpg'
      },
      {
        name: 'Talous the Mad',
        area: "Rhea's Crater",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Talous_the_Mad',
        mapUrl: 'https://wiki.guildwars.com/images/0/0b/Talous_the_Mad_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (10 seconds.) Causes -1...4...5 Health degeneration. Renewal: if target foe has another hex when Recurring Insecurity would end.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/42/Recurring_Insecurity.jpg/50px-Recurring_Insecurity.jpg'
  },
  {
    id: 'mes-shared-burden',
    name: 'Shared Burden',
    profession: Profession.MESMER,
    attribute: Attribute.ILLUSION_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Shared_Burden',
    bosses: [
      {
        name: 'Deeproot Sorrow',
        area: 'Mourning Veil Falls',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Deeproot_Sorrow',
        mapUrl: 'https://wiki.guildwars.com/images/4/45/Deeproot_Sorrow_map.jpg'
      },
      {
        name: 'Kenrii Sea Sorrow',
        area: 'Silent Surf',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kenrii_Sea_Sorrow',
        mapUrl: 'https://wiki.guildwars.com/images/9/91/Kenrii_Sea_Sorrow_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. Also hexes foes in the area of your target (5...17...20 seconds). These foes attack, cast spells, and move 50% slower.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/7/72/Shared_Burden.jpg/50px-Shared_Burden.jpg'
  },
  {
    id: 'mes-signet-of-illusions',
    name: 'Signet of Illusions',
    profession: Profession.MESMER,
    attribute: Attribute.ILLUSION_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Signet_of_Illusions',
    bosses: [
      {
        name: 'Shepherd of Dementia',
        area: 'Nightfallen Jahai',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shepherd_of_Dementia',
        mapUrl: 'https://wiki.guildwars.com/images/b/bb/Shepherd_of_Dementia_map.jpg'
      }
    ],
    description: 'Elite Signet. Your next 1...3...3 spell[s] use your Illusion attribute instead of its normal attribute.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/1f/Signet_of_Illusions.jpg/50px-Signet_of_Illusions.jpg'
  },

  // --- Inspiration Magic ---
  {
    id: 'mes-energy-drain',
    name: 'Energy Drain',
    profession: Profession.MESMER,
    attribute: Attribute.INSPIRATION_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Energy_Drain',
    bosses: [
      {
        name: 'Gambol Headrainer',
        area: 'Ice Floe',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Gambol_Headrainer',
        mapUrl: 'https://wiki.guildwars.com/images/4/43/Imp_bosses_in_Ice_Floe_map.jpg'
      },
      {
        name: 'Sniik Hungrymind',
        area: "Spearhead Peak",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sniik_Hungrymind',
        mapUrl: 'https://wiki.guildwars.com/images/7/72/Sniik_Hungrymind_Spearhead_Peak_map.jpg'
      },
      {
        name: 'Sniik Hungrymind',
        area: "Witman's Folly",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sniik_Hungrymind',
        mapUrl: 'https://wiki.guildwars.com/images/9/99/Witmansimpbosses.jpg'
      },
      {
        name: 'Druul the Untamed',
        area: "Dragon's Gullet (Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Druul_the_Untamed',
        mapUrl: 'https://wiki.guildwars.com/images/0/0c/Druul_the_Untamed_Location.jpg'
      },
      {
        name: 'Siska Scalewand',
        area: 'Archipelagos',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Siska_Scalewand',
        mapUrl: 'https://wiki.guildwars.com/images/0/09/Siska_Scalewand_map.jpg'
      },
      {
        name: 'Rual, Stealer of Hope',
        area: 'The Ruptured Heart',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Rual,_Stealer_of_Hope',
        mapUrl: 'https://wiki.guildwars.com/images/f/fa/Rual,_Stealer_of_Hope_map.jpg'
      }
    ],
    description: 'Elite Spell. Causes 2...8...9 Energy loss. You gain 3 Energy for each point of Energy lost.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/8/8c/Energy_Drain.jpg/50px-Energy_Drain.jpg'
  },
  {
    id: 'mes-extend-conditions',
    name: 'Extend Conditions',
    profession: Profession.MESMER,
    attribute: Attribute.INSPIRATION_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Extend_Conditions',
    bosses: [
      {
        name: 'Neoli the Contagious',
        area: 'Marga Coast',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Neoli_the_Contagious',
        mapUrl: 'https://wiki.guildwars.com/images/0/00/Neoli_the_Contagious_map.jpg'
      }
    ],
    description: 'Elite Spell. Spread all conditions from target foe to foes near your target. Those [sic] durations of those conditions are increased by 5...81...100% (maximum 30 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/59/Extend_Conditions.jpg/50px-Extend_Conditions.jpg'
  },
  {
    id: 'mes-lyssas-aura',
    name: "Lyssa's Aura",
    profession: Profession.MESMER,
    attribute: Attribute.INSPIRATION_MAGIC,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Lyssa%27s_Aura',
    bosses: [
      {
        name: 'Hai Jii',
        area: 'Nahpui Quarter',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hai_Jii',
        mapUrl: 'https://wiki.guildwars.com/images/b/b7/Hai_Jii_map.jpg'
      },
      {
        name: 'Nulfastu Earthbound',
        area: 'Drakkar Lake',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Nulfastu_Earthbound',
        mapUrl: 'https://wiki.guildwars.com/images/6/6c/Nulfastu_Earthbound_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (10 seconds.) You have +0...4...5 Energy regeneration. Renewal: every time you cast a spell on an enemy.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/c/c1/Lyssa%27s_Aura.jpg/50px-Lyssa%27s_Aura.jpg'
  },
  {
    id: 'mes-mantra-of-recall',
    name: 'Mantra of Recall',
    profession: Profession.MESMER,
    attribute: Attribute.INSPIRATION_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Mantra_of_Recall',
    bosses: [
      {
        name: 'Facet of Chaos',
        area: "The Dragon's Lair",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Chaos',
        mapUrl: 'https://wiki.guildwars.com/images/f/f6/Facet_of_Chaos_map.jpg'
      },
      {
        name: 'Featherclaw',
        area: 'Snake Dance',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Featherclaw',
        mapUrl: 'https://wiki.guildwars.com/images/9/91/Snake_Dance_Griffon_Boss_map.jpg'
      },
      {
        name: 'Facet of Illusions',
        area: 'Magus Stones, Varajar Fells (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Illusions',
        mapUrl: 'https://wiki.guildwars.com/images/6/66/Facet_of_Illusions_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (20 seconds.) End effect: you gain 10...22...25 Energy.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/a0/Mantra_of_Recall.jpg/50px-Mantra_of_Recall.jpg'
  },
  {
    id: 'mes-power-leech',
    name: 'Power Leech',
    profession: Profession.MESMER,
    attribute: Attribute.INSPIRATION_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Power_Leech',
    bosses: [
      {
        name: 'Seaguard Hala',
        area: 'Boreas Seabed',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Seaguard_Hala'
      }
    ],
    description: 'Elite Hex Spell. Interrupt a spell or a chant. Interruption effect: steal 5...13...15 Energy whenever target foe casts a spell (10 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/b8/Power_Leech.jpg/50px-Power_Leech.jpg'
  },
  {
    id: 'mes-tease',
    name: 'Tease',
    profession: Profession.MESMER,
    attribute: Attribute.INSPIRATION_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Tease',
    bosses: [
      {
        name: 'Makdeh the Aggravating',
        area: 'Yatendi Canyons',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Makdeh_the_Aggravating',
        mapUrl: 'https://wiki.guildwars.com/images/d/d6/Makdeh_the_Aggravating_map.jpg'
      }
    ],
    description: 'Elite Spell. Interrupts a skill. Interruption effect: also interrupts other foes in the area, and you steal 0...4...5 Energy from all foes in the area.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/5d/Tease.jpg/50px-Tease.jpg'
  },

  // --- No Attribute ---
  {
    id: 'mes-echo',
    name: 'Echo',
    profession: Profession.MESMER,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.CORE, Campaign.FACTIONS, Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Echo',
    bosses: [
      {
        name: 'Rwek Khawl Mawl',
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Rwek_Khawl_Mawl',
        mapUrl: 'https://wiki.guildwars.com/images/6/60/Perdition_Rock_Hydra_and_Ettin_bosses_map.jpg'
      },
      {
        name: 'Mohby Windbeak',
        area: 'Gyala Hatchery (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mohby_Windbeak',
        mapUrl: 'https://wiki.guildwars.com/images/c/c3/Mohby_Windbeak_Location.jpg'
      },
      {
        name: 'The Time Eater',
        area: 'The Eternal Grove (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Time_Eater_(boss)',
        mapUrl: 'https://wiki.guildwars.com/images/c/c3/The_Time_Eater_map.jpg'
      },
      {
        name: 'Eshwe the Insane',
        area: "Joko's Domain",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Eshwe_the_Insane',
        mapUrl: 'https://wiki.guildwars.com/images/9/97/Eshwe_the_Insane_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (30 seconds.) Echo becomes the next skill you use (30 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/a0/Echo.jpg/50px-Echo.jpg'
  },
  {
    id: 'mes-expel-hexes',
    name: 'Expel Hexes',
    profession: Profession.MESMER,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Expel_Hexes',
    bosses: [
      {
        name: 'Jin, the Purifier',
        area: 'Bukdek Byway',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jin,_the_Purifier',
        mapUrl: 'https://wiki.guildwars.com/images/2/2f/Jin,_the_Purifier_map.jpg'
      }
    ],
    description: 'Elite Spell. Removes 2 hexes from target ally.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/44/Expel_Hexes.jpg/50px-Expel_Hexes.jpg'
  },
  {
    id: 'mes-shatter-storm',
    name: 'Shatter Storm',
    profession: Profession.MESMER,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Shatter_Storm',
    bosses: [
      {
        name: 'Mina Shatter Storm',
        area: 'The Undercity',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mina_Shatter_Storm',
        mapUrl: 'https://wiki.guildwars.com/images/e/e8/Mina_Shatter_Storm_map.jpg'
      }
    ],
    description: 'Elite Spell. Removes all enchantments. Removal cost: Shatter Storm is disabled for +7 seconds for each enchantment removed.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/5e/Shatter_Storm.jpg/50px-Shatter_Storm.jpg'
  },
  {
    id: 'mes-signet-of-midnight',
    name: 'Signet of Midnight',
    profession: Profession.MESMER,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Signet_of_Midnight',
    bosses: [
      {
        name: 'Malus Phasmatis',
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Malus_Phasmatis',
        mapUrl: 'https://wiki.guildwars.com/images/a/ad/Perdition_Rock_Cursed_bosses_map.jpg'
      }
    ],
    description: 'Elite Touch Signet. (15 seconds.) Inflicts Blindness condition. You suffer from Blindness (15 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/eb/Signet_of_Midnight.jpg/50px-Signet_of_Midnight.jpg'
  }
];