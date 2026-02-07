import { EliteSkill, Profession, Campaign, Attribute } from '../types';

export const ELEMENTALIST_SKILLS: EliteSkill[] = [
  // --- Air Magic ---
  {
    id: 'ele-blinding-surge',
    name: 'Blinding Surge',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.AIR_MAGIC,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Blinding_Surge',
    bosses: [
      {
        name: 'Moteh Thundershooter',
        area: 'Wilderness of Bahdza',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Moteh_Thundershooter',
        mapUrl: 'https://wiki.guildwars.com/images/f/f9/Moteh_Thundershooter_map.jpg'
      },
      {
        name: 'Cursed Brigand',
        area: 'Shards of Orr',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Cursed_Brigand'
      }
    ],
    description: 'Elite Spell. Deals 5...41...50 lightning damage. Inflicts Blindness condition (3...7...8 seconds) on target and adjacent foes. 25% armor penetration. If target was attacking, also hits adjacent foes and deals 50% more damage.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/a4/Blinding_Surge.jpg/50px-Blinding_Surge.jpg'
  },
  {
    id: 'ele-glimmering-mark',
    name: 'Glimmering Mark',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.AIR_MAGIC,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Glimmering_Mark',
    bosses: [
      {
        name: 'Edibbo Kepkep',
        area: 'Spearhead Peak',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Edibbo_Kepkep',
        mapUrl: 'https://wiki.guildwars.com/images/f/f7/Spearhead_Peak_Grawl_bosses_map.jpg'
      },
      {
        name: 'Edibbo Kepkep',
        area: 'Talus Chute',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Edibbo_Kepkep',
        mapUrl: 'https://wiki.guildwars.com/images/0/09/Talus_Chute_Grawl_bosses_map.jpg'
      },
      {
        name: 'Alana Kepkep',
        area: "Witman's Folly",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Alana_Kepkep',
        mapUrl: 'https://wiki.guildwars.com/images/3/38/Witman%27s_Folly_Grawl_bosses_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (10 seconds.) Deals 5...21...25 damage each second to target and adjacent foes. Inflicts Blindness [sic] on foes using attack skills. Ends if you use a skill that targets this foe.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/8/82/Glimmering_Mark.jpg/50px-Glimmering_Mark.jpg'
  },
  {
    id: 'ele-gust',
    name: 'Gust',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.AIR_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Gust',
    bosses: [
      {
        name: 'Rahse Windcatcher',
        area: 'Mourning Veil Falls',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Rahse_Windcatcher',
        mapUrl: 'https://wiki.guildwars.com/images/8/8c/Rahse_Windcatcher_map.jpg'
      },
      {
        name: 'Amadis, Wind of the Sea',
        area: 'Silent Surf',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Amadis,_Wind_of_the_Sea',
        mapUrl: 'https://wiki.guildwars.com/images/b/bc/Amadis,_Wind_of_the_Sea_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (5...10...11 seconds.) You and target ally move 33% faster. Initial effect: Foes near you and target ally are struck for 15...59...70 cold damage. Attacking or moving foes are knocked down.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/a1/Gust.jpg/50px-Gust.jpg'
  },
  {
    id: 'ele-invoke-lightning',
    name: 'Invoke Lightning',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.AIR_MAGIC,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Invoke_Lightning',
    bosses: [
      {
        name: 'Lushivahr the Invoker',
        area: 'Yatendi Canyons',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lushivahr_the_Invoker',
        mapUrl: 'https://wiki.guildwars.com/images/0/02/Lushivahr_the_Invoker_map.jpg'
      },
      {
        name: 'Scribe Wensal',
        area: 'Nundu Bay',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Scribe_Wensal'
      },
      {
        name: 'General Tirraj',
        area: 'Dzagonur Bastion',
        wikiUrl: 'https://wiki.guildwars.com/wiki/General_Tirraj',
        mapUrl: 'https://wiki.guildwars.com/images/1/14/Dzagonur_Bastion_map.jpg'
      },
      {
        name: 'Curator Kali',
        area: 'Gate of Madness',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Curator_Kali',
        mapUrl: 'https://wiki.guildwars.com/images/f/fb/Curator_Kali_map.jpg'
      },
      {
        name: 'Tanmahk the Arcane',
        area: 'The Sulfurous Wastes (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tanmahk_the_Arcane',
        mapUrl: 'https://wiki.guildwars.com/images/c/c7/A_Show_of_Force_map.jpg'
      },
      {
        name: 'Margonite Portal Mage',
        area: 'The Shadow Nexus',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Margonite_Portal_Mage'
      },
      {
        name: 'Shadow Spawn',
        area: "Raven's Point (Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shadow_Spawn',
        mapUrl: 'https://wiki.guildwars.com/images/1/17/Shadows_in_the_Night_Map.jpg'
      }
    ],
    description: 'Elite Spell. Deals 10...74...90 lightning damage. Hits two foes near target. 25% armor penetration.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/93/Invoke_Lightning.jpg/50px-Invoke_Lightning.jpg'
  },
  {
    id: 'ele-lightning-surge',
    name: 'Lightning Surge',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.AIR_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Lightning_Surge',
    bosses: [
      {
        name: 'Facet of Elements',
        area: "The Dragon's Lair",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Elements',
        mapUrl: 'https://wiki.guildwars.com/images/d/d6/Facet_of_Elements_map.jpg'
      },
      {
        name: 'Tahmu',
        area: 'Nahpui Quarter',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tahmu',
        mapUrl: 'https://wiki.guildwars.com/images/6/60/Tahmu_map.jpg'
      },
      {
        name: 'Sarss, Stormscale',
        area: 'Maishang Hills',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sarss,_Stormscale',
        mapUrl: 'https://wiki.guildwars.com/images/7/75/Sarss,_Stormscale_map.jpg'
      },
      {
        name: 'Zephyr Hedger',
        area: 'Arkjok Ward (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Zephyr_Hedger',
        mapUrl: 'https://wiki.guildwars.com/images/f/fd/Zephyr_Hedger_map.jpg'
      },
      {
        name: 'Birneh Skybringer',
        area: 'Sunward Marches',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Birneh_Skybringer',
        mapUrl: 'https://wiki.guildwars.com/images/0/0f/Birneh_Skybringer_map.jpg'
      },
      {
        name: 'Setikor Fireflower',
        area: 'Holdings of Chokhin',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Setikor_Fireflower',
        mapUrl: 'https://wiki.guildwars.com/images/9/94/Setikor_Fireflower_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (3 seconds.) End effect: deals 14...83...100 lightning damage, causes knock-down, and inflicts Cracked Armor (5...17...20 seconds). 25% armor penetration.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/a1/Lightning_Surge.jpg/50px-Lightning_Surge.jpg'
  },
  {
    id: 'ele-mind-shock',
    name: 'Mind Shock',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.AIR_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Mind_Shock',
    bosses: [
      {
        name: 'Old Red Claw',
        area: 'Snake Dance',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Old_Red_Claw',
        mapUrl: 'https://wiki.guildwars.com/images/9/91/Snake_Dance_Griffon_Boss_map.jpg'
      },
      {
        name: 'Edielh Shockhunter',
        area: 'Jaga Moraine',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Edielh_Shockhunter',
        mapUrl: 'https://wiki.guildwars.com/images/8/81/Ediehl_Shockhunter_map.jpg'
      }
    ],
    description: 'Elite Spell. Deals 10...42...50 lightning damage. If you have more Energy than target foe, deals +10...42...50 lightning damage and causes knockdown. 25% armor penetration.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/2/29/Mind_Shock.jpg/50px-Mind_Shock.jpg'
  },
  {
    id: 'ele-ride-the-lightning',
    name: 'Ride the Lightning',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.AIR_MAGIC,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Ride_the_Lightning',
    bosses: [
      {
        name: 'Kunvie Firewing',
        area: 'Unwaking Waters (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kunvie_Firewing',
        mapUrl: 'https://wiki.guildwars.com/images/f/fb/Kunvie_Firewing_map.jpg'
      },
      {
        name: 'Thraexis Thundermaw',
        area: 'Grothmar Wardowns',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Thraexis_Thundermaw',
        mapUrl: 'https://wiki.guildwars.com/images/7/7f/Thraexis_Thundermaw_map.jpg'
      }
    ],
    description: 'Elite Spell. Deals 10...58...70 lightning damage. 25% armor penetration. Blinds all adjacent foes (1...4...5 second[s]). You instantly move to your target. May target allies.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/fc/Ride_the_Lightning.jpg/50px-Ride_the_Lightning.jpg'
  },
  {
    id: 'ele-thunderclap',
    name: 'Thunderclap',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.AIR_MAGIC,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Thunderclap',
    bosses: [
      {
        name: 'Chrysos the Magnetic',
        area: 'Thunderhead Keep',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chrysos_the_Magnetic'
      },
      {
        name: 'Kratos the Foul',
        area: 'Iron Mines of Moladune',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kratos_the_Foul',
        mapUrl: 'https://wiki.guildwars.com/images/2/2f/Iron_Mines_of_Moladune_boss_locations.jpg'
      },
      {
        name: 'Mursaat Elementalist',
        area: 'Ice Floe',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mursaat_Elementalist_(boss)',
        mapUrl: 'https://wiki.guildwars.com/images/9/90/Mursaat_bosses_in_Ice_Floe_map.jpg'
      },
      {
        name: 'The Inquisitor',
        area: 'Iron Mines of Moladune',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Inquisitor'
      },
      {
        name: 'Maida the Ill Tempered',
        area: 'Ring of Fire',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Maida_the_Ill_Tempered',
        mapUrl: 'https://wiki.guildwars.com/images/2/2a/Ring_of_Fire_Mursaat_Map.jpg'
      },
      {
        name: 'Optimus Caliph',
        area: "Abaddon's Mouth",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Optimus_Caliph',
        mapUrl: 'https://wiki.guildwars.com/images/a/ae/Abaddons_Mouth_Mursaat_and_Jade_Map.jpg'
      }
    ],
    description: 'Elite Spell. Deals 10...42...50 lightning damage. Also strikes adjacent foes. Inflicts Cracked Armor and Weakness (5...17...20 seconds). Causes interrupt. 25% armor penetration.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/bc/Thunderclap.jpg/50px-Thunderclap.jpg'
  },

  // --- Earth Magic ---
  {
    id: 'ele-obsidian-flesh',
    name: 'Obsidian Flesh',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.EARTH_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Obsidian_Flesh',
    bosses: [
      {
        name: 'Harn Coldstone',
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Harn_Coldstone',
        mapUrl: 'https://wiki.guildwars.com/images/c/c8/Perdition_Rock_Harn_and_Maxine_Coldstone_map.jpg'
      },
      {
        name: 'Bizzr Ironshell',
        area: 'Mourning Veil Falls',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bizzr_Ironshell',
        mapUrl: 'https://wiki.guildwars.com/images/1/1f/Bizzr_Ironshell_map.jpg'
      },
      {
        name: 'Whyk Steelshell',
        area: 'Gyala Hatchery (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Whyk_Steelshell',
        mapUrl: 'https://wiki.guildwars.com/images/c/c2/Whyk_Steelshell_map.jpg'
      },
      {
        name: 'Shekoss the Stony',
        area: "Joko's Domain",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shekoss_the_Stony',
        mapUrl: 'https://wiki.guildwars.com/images/0/09/Shekoss_the_Stony_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (8...18...20 seconds.) You have +20 armor and enemy spells cannot target you. You cannot attack and have -2 energy degeneration.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/c/c2/Obsidian_Flesh.jpg/50px-Obsidian_Flesh.jpg'
  },
  {
    id: 'ele-sandstorm',
    name: 'Sandstorm',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.EARTH_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Sandstorm',
    bosses: [
      {
        name: 'The Drought',
        area: 'Rilohn Refuge',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Drought'
      },
      {
        name: 'Droajam, Mage of the Sands',
        area: 'Poisoned Outcrops',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Droajam,_Mage_of_the_Sands',
        mapUrl: 'https://wiki.guildwars.com/images/2/29/Droajam,_Mage_of_the_Sands_map.jpg'
      }
    ],
    description: "Elite Spell. Deals 10...26...30 earth damage each second (10 seconds). Hits foes near target foe's initial location. Hits attacking foes for 10...26...30 more earth damage each second.",
    iconUrl: 'https://wiki.guildwars.com/images/thumb/7/75/Sandstorm.jpg/50px-Sandstorm.jpg'
  },
  {
    id: 'ele-shockwave',
    name: 'Shockwave',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.EARTH_MAGIC,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Shockwave',
    bosses: [
      {
        name: 'Arbor Earthcall',
        area: 'Morostav Trail',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Arbor_Earthcall',
        mapUrl: 'https://wiki.guildwars.com/images/c/c6/Arbor_Earthcall_map.jpg'
      },
      {
        name: 'Bahnba Shockfoot',
        area: 'Gyala Hatchery (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bahnba_Shockfoot',
        mapUrl: 'https://wiki.guildwars.com/images/b/b4/Bahnba_Shockfoot_map.jpg'
      },
      {
        name: 'Azukhan Stonewrath',
        area: 'Altrumm Ruins',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Azukhan_Stonewrath',
        mapUrl: 'https://wiki.guildwars.com/images/3/33/Azukhan_Stonewrath_Map.jpg'
      },
      {
        name: 'Zarnas Stonewrath',
        area: 'Arborstone (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Zarnas_Stonewrath',
        mapUrl: 'https://wiki.guildwars.com/images/8/8a/Zarnas_Stonewrath_map.jpg'
      },
      {
        name: 'Ssissth the Leviathan',
        area: 'Jaga Moraine',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ssissth_the_Leviathan',
        mapUrl: 'https://wiki.guildwars.com/images/2/21/Ssissth_the_Leviathan_map.jpg'
      },
      {
        name: 'Joffs the Mitigator',
        area: 'Riven Earth',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Joffs_the_Mitigator',
        mapUrl: 'https://wiki.guildwars.com/images/5/50/Joffs_the_Mitigator_map.jpg'
      }
    ],
    description: 'Elite Spell. Foes in the area take 15...51...60 earth damage and are Weakened (1...8...10 second[s]). Nearby foes also take +15...51...60 earth damage and have Cracked Armor (1...8...10 second[s]). Adjacent foes also take +15...51...60 earth damage and are Blinded (1...8...10 second[s]).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/18/Shockwave.jpg/50px-Shockwave.jpg'
  },
  {
    id: 'ele-stone-sheath',
    name: 'Stone Sheath',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.EARTH_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Stone_Sheath',
    bosses: [
      {
        name: 'Joknang Earthturner',
        area: 'Bahdok Caverns',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Joknang_Earthturner',
        mapUrl: 'https://wiki.guildwars.com/images/2/20/Joknang_Earthturner_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (5...17...20 seconds.) Gives you and target ally +1...24...30 armor and immunity to critical hits. Initial effect: Foes near you and target ally are struck for 15...59...70 earth damage and are Weakened (5...17...20 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/9e/Stone_Sheath.jpg/50px-Stone_Sheath.jpg'
  },
  {
    id: 'ele-unsteady-ground',
    name: 'Unsteady Ground',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.EARTH_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Unsteady_Ground',
    bosses: [
      {
        name: 'Seacrash, Elder Guardian',
        area: 'Maishang Hills',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Seacrash,_Elder_Guardian',
        mapUrl: 'https://wiki.guildwars.com/images/d/d9/Seacrash,_Elder_Guardian_map.jpg'
      }
    ],
    description: "Elite Spell. Deals 10...34...40 earth damage each second (5 seconds) and causes knock-down to attacking foes. Hits foes near target's initial location.",
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/bf/Unsteady_Ground.jpg/50px-Unsteady_Ground.jpg'
  },

  // --- Energy Storage ---
  {
    id: 'ele-elemental-attunement',
    name: 'Elemental Attunement',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.ENERGY_STORAGE,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Elemental_Attunement',
    bosses: [
      {
        name: 'Geckokaru Earthwind',
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Geckokaru_Earthwind',
        mapUrl: 'https://wiki.guildwars.com/images/7/73/Perdition_Rock_Drake_bosses_map.jpg'
      },
      {
        name: 'Chung, the Attuned',
        area: 'Bukdek Byway (Quest), The Undercity',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chung,_the_Attuned',
        mapUrl: 'https://wiki.guildwars.com/images/b/b0/Chung,_the_Attuned_map.jpg'
      },
      {
        name: 'Bosun Mohrti',
        area: 'Marga Coast',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bosun_Mohrti',
        mapUrl: 'https://wiki.guildwars.com/images/5/5d/Bosun_Mohrti_map.jpg'
      },
      {
        name: 'Flame Guardian',
        area: "Oola's Lab",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Flame_Guardian_(golem)'
      }
    ],
    description: 'Elite Enchantment Spell. (25...53...60 seconds.) Your elemental attributes are increased by +1...2...2. You gain 50% of the Energy cost of any Air, Earth, Fire, and Water Magic skills you use.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/34/Elemental_Attunement.jpg/50px-Elemental_Attunement.jpg'
  },
  {
    id: 'ele-energy-boon',
    name: 'Energy Boon',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.ENERGY_STORAGE,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Energy_Boon',
    bosses: [
      {
        name: 'Tarlok Evermind',
        area: 'Ferndale',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tarlok_Evermind',
        mapUrl: 'https://wiki.guildwars.com/images/9/99/Tarlok_Evermind_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (36...55...60 seconds.) Maximum Health for you and target ally is increased by 1...3...3 for each point of maximum Energy. Initial effect: Both gain 1...10...12 Energy. You gain +1 Energy for every 2 points of Energy Storage.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/0/00/Energy_Boon.jpg/50px-Energy_Boon.jpg'
  },
  {
    id: 'ele-ether-prism',
    name: 'Ether Prism',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.ENERGY_STORAGE,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Ether_Prism',
    bosses: [
      {
        name: 'Mekir the Prismatic',
        area: 'Poisoned Outcrops',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mekir_the_Prismatic',
        mapUrl: 'https://wiki.guildwars.com/images/b/b6/Mekir_the_Prismatic_map.jpg'
      },
      {
        name: 'Tortureweb Dryder',
        area: 'Gate of Pain',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tortureweb_Dryder_(boss)',
        mapUrl: 'https://wiki.guildwars.com/images/f/fe/Gate_of_Pain_map.jpg'
      }
    ],
    description: 'Elite Skill. (3 seconds.) All damage you take is reduced by 75%. End effect: gain 5...17...20 Energy.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/39/Ether_Prism.jpg/50px-Ether_Prism.jpg'
  },
  {
    id: 'ele-ether-prodigy',
    name: 'Ether Prodigy',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.ENERGY_STORAGE,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Ether_Prodigy',
    bosses: [
      {
        name: 'Jyth Sprayburst',
        area: 'Ring of Fire',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jyth_Sprayburst',
        mapUrl: 'https://wiki.guildwars.com/images/4/47/Jyth_Sprayburst_map.jpg'
      },
      {
        name: 'Hierophant Burntsoul',
        area: 'Assault on the Stronghold',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hierophant_Burntsoul',
        mapUrl: 'https://wiki.guildwars.com/images/7/74/Assault_on_the_Stronghold_map.jpg'
      },
      {
        name: 'Tyndir Flamecaller',
        area: 'Cathedral of Flames level 2',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tyndir_Flamecaller',
        mapUrl: 'https://wiki.guildwars.com/images/a/a9/Tynder_Flamecaller_Cathedral_of_Flames.jpg'
      },
      {
        name: 'Straut Flamebourne',
        area: 'Sacnoth Valley (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Straut_Flamebourne',
        mapUrl: 'https://wiki.guildwars.com/images/4/4e/Fire_and_Pain.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (8...18...20 seconds.) You have +6 Energy regeneration. End effect: lose 2 Health for each point of Energy you have. Lose all enchantments.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/30/Ether_Prodigy.jpg/50px-Ether_Prodigy.jpg'
  },
  {
    id: 'ele-ether-renewal',
    name: 'Ether Renewal',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.ENERGY_STORAGE,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Ether_Renewal',
    bosses: [
      {
        name: 'Cyss Gresshla',
        area: 'Dunes of Despair',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Cyss_Gresshla',
        mapUrl: 'https://wiki.guildwars.com/images/c/cb/Dunes_of_Despair_random_boss_spawn_locations.jpg'
      },
      {
        name: 'Issah Sshay',
        area: 'Thirsty River',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Issah_Sshay',
        mapUrl: 'https://wiki.guildwars.com/images/3/37/Issah_Sshay_map.jpg'
      },
      {
        name: 'Vassa Ssiss',
        area: 'Elona Reach',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Vassa_Ssiss',
        mapUrl: 'https://wiki.guildwars.com/images/9/95/Custodian_Jenus_location.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (5...17...20 seconds.) Each time you cast a spell, you gain 1...3...4 Energy and 5...17...20 Health for each enchantment on you.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/97/Ether_Renewal.jpg/50px-Ether_Renewal.jpg'
  },
  {
    id: 'ele-glyph-of-energy',
    name: 'Glyph of Energy',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.ENERGY_STORAGE,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Glyph_of_Energy',
    bosses: [
      {
        name: 'Hyl Thunderwing',
        area: 'Mineral Springs',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hyl_Thunderwing',
        mapUrl: 'https://wiki.guildwars.com/images/6/65/Mineral_Springs_Avicara_bosses_map.jpg'
      }
    ],
    description: 'Elite Glyph. Your next 1...3...3 spell[s] do[es] not cause Overcast and cost[s] 10...22...25 less Energy. Gain 1...2...2 to all elemental attributes.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/c/c1/Glyph_of_Energy.jpg/50px-Glyph_of_Energy.jpg'
  },
  {
    id: 'ele-master-of-magic',
    name: 'Master of Magic',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.ENERGY_STORAGE,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Master_of_Magic',
    bosses: [
      {
        name: 'Captain Mwende',
        area: 'Consulate Docks',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Captain_Mwende',
        mapUrl: 'https://wiki.guildwars.com/images/7/73/Captain_Mwende_map.jpg'
      },
      {
        name: 'Admiral Kantoh',
        area: 'Jahai Bluffs',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Admiral_Kantoh',
        mapUrl: 'https://wiki.guildwars.com/images/1/13/Admiral_Kantoh_map.jpg'
      },
      {
        name: 'Captain Nebo',
        area: 'Pogahn Passage',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Captain_Nebo',
        mapUrl: 'https://wiki.guildwars.com/images/3/3e/Pogahn_Passage_map.jpg'
      },
      {
        name: 'Hajok Earthguardian',
        area: 'Yatendi Canyons',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hajok_Earthguardian_(Insect)',
        mapUrl: 'https://wiki.guildwars.com/images/4/49/Hajok_Earthguardian_(Insect)_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (1...49...61 second[s]). Your elemental attributes are set to 8...13...14 and elemental spells return 30% of their Energy cost.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/35/Master_of_Magic.jpg/50px-Master_of_Magic.jpg'
  },
  {
    id: 'ele-over-the-limit',
    name: 'Over the Limit',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.ENERGY_STORAGE,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Over_the_Limit',
    bosses: [
      {
        name: "Abaddon's Cursed",
        area: 'Perdition Rock (Requires Proof of Triumph)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Abaddon%27s_Cursed',
        mapUrl: 'https://wiki.guildwars.com/images/3/35/Abaddon%27s_Cursed_location.png'
      }
    ],
    description: 'Elite Enchantment Spell. Spells cast 15...19...20% faster and recharge 15...43...50% faster. Continuously gain Overcast while active. PvE Skill. Note that as a PvE-only skill, Elite Skill Tomes cannot be used to learn this skill.',
    iconUrl: 'https://wiki.guildwars.com/images/5/5a/Over_the_Limit.jpg'
  },

  // --- Fire Magic ---
  {
    id: 'ele-double-dragon',
    name: 'Double Dragon',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.FIRE_MAGIC,
    campaigns: [Campaign.FACTIONS, Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Double_Dragon',
    bosses: [
      {
        name: 'Lale the Vindictive',
        area: 'The Undercity',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lale_the_Vindictive',
        mapUrl: 'https://wiki.guildwars.com/images/e/e4/Chasing_Zenmai_map_2.jpg'
      },
      {
        name: "Lian, Dragon's Petal",
        area: 'Wajjun Bazaar',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lian,_Dragon%27s_Petal',
        mapUrl: "https://wiki.guildwars.com/images/f/fe/Lian,_Dragon's_Petal_map.jpg"
      },
      {
        name: 'The Fury',
        area: 'The Foundry of Failed Creations',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Fury',
        mapUrl: 'https://wiki.guildwars.com/images/c/ce/The_Foundry_of_Failed_Creations_map2.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (8 seconds.) Enchants you and target ally. Adjacent foes take 5...25...30 fire damage each second. Skills that target a foe also inflict Burning (0...2...3 second[s]).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/7/7a/Double_Dragon.jpg/50px-Double_Dragon.jpg'
  },
  {
    id: 'ele-mind-blast',
    name: 'Mind Blast',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.FIRE_MAGIC,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Mind_Blast',
    bosses: [
      {
        name: 'Exuro Flatus',
        area: 'Domain of Secrets',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Exuro_Flatus',
        mapUrl: 'https://wiki.guildwars.com/images/8/84/Exuro_Flatus_map.jpg'
      },
      {
        name: 'Kakei Stormcaller',
        area: 'Blood Washes Blood',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kakei_Stormcaller',
        mapUrl: 'https://wiki.guildwars.com/images/f/f4/Kakei_Stormcaller_map.jpg'
      },
      {
        name: 'Scorch Maulclaw',
        area: 'Dalada Uplands (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Scorch_Maulclaw'
      }
    ],
    description: 'Elite Spell. Deals 15...51...60 fire damage. You gain 1...7...8 Energy if you have more Energy than target foe.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/3d/Mind_Blast.jpg/50px-Mind_Blast.jpg'
  },
  {
    id: 'ele-mind-burn',
    name: 'Mind Burn',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.FIRE_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Mind_Burn',
    bosses: [
      {
        name: 'Scelus Prosum',
        area: "Hell's Precipice",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Scelus_Prosum',
        mapUrl: 'https://wiki.guildwars.com/images/9/91/Hell%27s_Precipice_Titan_Boss_map.jpg'
      },
      {
        name: 'The Afflicted Kam',
        area: 'Vizunah Square, Shenzun Tunnels',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Kam',
        mapUrl: 'https://wiki.guildwars.com/images/a/a1/The_Afflicted_Kam_map.jpg'
      },
      {
        name: 'The Afflicted Rasa',
        area: "Dragon's Throat",
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Rasa',
        mapUrl: 'https://wiki.guildwars.com/images/f/f7/The_Afflicted_Rasa_map.jpg'
      },
      {
        name: 'Argo',
        area: 'Boreas Seabed',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Argo'
      },
      {
        name: 'The Afflicted Shen',
        area: 'Unwaking Waters',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Shen'
      },
      {
        name: 'Kormab, Burning Heart',
        area: 'Resplendent Makuun',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kormab,_Burning_Heart',
        mapUrl: 'https://wiki.guildwars.com/images/4/49/Kormab%2C_Burning_Heart_map1.jpg'
      },
      {
        name: 'Fire Lord',
        area: 'The Hidden City of Ahdashim (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Fire_Lord',
        mapUrl: 'https://wiki.guildwars.com/images/6/6b/Fire_Lord_map.jpg'
      },
      {
        name: 'Ignis Cruor',
        area: 'Domain of Secrets (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ignis_Cruor',
        mapUrl: 'https://wiki.guildwars.com/images/3/35/Ignis_Cruor_map.jpg'
      }
    ],
    description: 'Elite Spell. Deals 15...51...60 fire damage. If you have more energy than target foe, deals 15...51...60 more fire damage and inflicts Burning (1...8...10 second[s]). Also hits adjacent foes.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/4f/Mind_Burn.jpg/50px-Mind_Burn.jpg'
  },
  {
    id: 'ele-savannah-heat',
    name: 'Savannah Heat',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.FIRE_MAGIC,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Savannah_Heat',
    bosses: [
      {
        name: 'Hajkor, Mystic Flame',
        area: 'The Sulfurous Wastes',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hajkor,_Mystic_Flame',
        mapUrl: 'https://wiki.guildwars.com/images/1/1f/Hajkor,_Mystic_Flame_map.jpg'
      },
      {
        name: 'Lok The Mischievous',
        area: "Arachni's Haunt",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lok_The_Mischievous',
        mapUrl: 'https://wiki.guildwars.com/images/5/5a/Lok_The_Mischievous_Arachni%27s_Haunt_Level_1.jpg'
      },
      {
        name: 'Regent of Flame',
        area: 'Catacombs of Kathandrax',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Regent_of_Flame',
        mapUrl: 'https://wiki.guildwars.com/images/b/bb/Regent_of_Flame_map.jpg'
      },
      {
        name: 'Magmus',
        area: 'Heart of the Shiverpeaks level 3',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Magmus',
        mapUrl: 'https://wiki.guildwars.com/images/0/0e/Magmus_map.jpg'
      }
    ],
    description: 'Elite Spell. Deals 5...17...20 fire damage for each second since casting this spell (5 seconds). Hits foes near target\'s initial location.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/50/Savannah_Heat.jpg/50px-Savannah_Heat.jpg'
  },
  {
    id: 'ele-searing-flames',
    name: 'Searing Flames',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.FIRE_MAGIC,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Searing_Flames',
    bosses: [
      {
        name: 'Kormab, Burning Heart',
        area: 'Dasha Vestibule',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kormab,_Burning_Heart',
        mapUrl: 'https://wiki.guildwars.com/images/d/da/Kormab%2C_Burning_Heart_Dasha_Vestibule_map.jpg'
      },
      {
        name: 'Korr, Living Flame',
        area: "Turai's Procession",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Korr,_Living_Flame',
        mapUrl: 'https://wiki.guildwars.com/images/c/c8/Korr,_Living_Flame_map.jpg'
      },
      {
        name: 'Korshek the Immolated',
        area: 'Forum Highlands',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Korshek_the_Immolated',
        mapUrl: 'https://wiki.guildwars.com/images/b/b2/Korshek_the_Immolated_map.jpg'
      },
      {
        name: 'Borrguus Blisterbark',
        area: 'Sacnoth Valley',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Borrguus_Blisterbark',
        mapUrl: 'https://wiki.guildwars.com/images/c/c3/File_Sacnoth_Valley_%28Borgguus_Blisterbark%29_Map.jpg'
      }
    ],
    description: 'Elite Spell. Hits foes near your target. Deals 10...82...100 fire damage to foes already Burning. Inflicts Burning condition (1...6...7 seconds) to foes not Burning.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/39/Searing_Flames.jpg/50px-Searing_Flames.jpg'
  },
  {
    id: 'ele-star-burst',
    name: 'Star Burst',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.FIRE_MAGIC,
    campaigns: [Campaign.FACTIONS, Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Star_Burst',
    bosses: [
      {
        name: 'Bound Teinai',
        area: 'Tahnnakai Temple',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bound_Teinai',
        mapUrl: 'https://wiki.guildwars.com/images/3/37/Tahnnakai_Temple_map.jpg'
      },
      {
        name: 'Star Ancient Koosun',
        area: 'Raisu Palace',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Star_Ancient_Koosun',
        mapUrl: 'https://wiki.guildwars.com/images/f/f3/Star_Ancient_Koosun_map.jpg'
      },
      {
        name: 'Bound Kaichen',
        area: 'Domain of Fear (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bound_Kaichen',
        mapUrl: 'https://wiki.guildwars.com/images/3/3e/A_History_of_Violence_map.jpg'
      }
    ],
    description: 'Elite Touch Spell. Deals 7...91...112 fire damage. Inflicts Burning (1...3...4 seconds). [sic] Gain 2 Energy for each foe struck. Also hits foes in the area.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/5a/Star_Burst.jpg/50px-Star_Burst.jpg'
  },

  // --- Water Magic ---
  {
    id: 'ele-icy-shackles',
    name: 'Icy Shackles',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.WATER_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Icy_Shackles',
    bosses: [
      {
        name: 'Lonolun Waterwalker',
        area: 'Issnur Isles',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lonolun_Waterwalker',
        mapUrl: 'https://wiki.guildwars.com/images/3/36/Lonolun_Waterwalker_map.jpg'
      },
      {
        name: 'Buhon Icelord',
        area: 'The Floodplain of Mahnkelon',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Buhon_Icelord',
        mapUrl: 'https://wiki.guildwars.com/images/8/80/Buhon_Icelord_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (1...8...10 second[s].) Target foe moves 66% slower. This foe moves 90% slower if enchanted.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/d1/Icy_Shackles.jpg/50px-Icy_Shackles.jpg'
  },
  {
    id: 'ele-mind-freeze',
    name: 'Mind Freeze',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.WATER_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Mind_Freeze',
    bosses: [
      {
        name: 'Skitt Skizzle',
        area: 'Ice Floe',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Skitt_Skizzle',
        mapUrl: 'https://wiki.guildwars.com/images/4/43/Imp_bosses_in_Ice_Floe_map.jpg'
      },
      {
        name: 'Maak Frostfriend',
        area: "Spearhead Peak",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Maak_Frostfriend',
        mapUrl: 'https://wiki.guildwars.com/images/d/de/Maak_Frostfriend_Spearhead_Peak_map.jpg'
      },
      {
        name: 'Maak Frostfriend',
        area: "Witman's Folly",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Maak_Frostfriend',
        mapUrl: 'https://wiki.guildwars.com/images/9/99/Witmansimpbosses.jpg'
      },
      {
        name: 'Baubao Wavewrath',
        area: 'The Undercity',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Baubao_Wavewrath',
        mapUrl: 'https://wiki.guildwars.com/images/4/4e/Baubao_Wavewrath_map.jpg'
      },
      {
        name: 'Storm of Anguish',
        area: 'Domain of Fear',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Storm_of_Anguish',
        mapUrl: 'https://wiki.guildwars.com/images/f/f4/Storm_of_Anguish_map.jpg'
      },
      {
        name: 'Dazehl Brainfreezer',
        area: 'Varajar Fells',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Dazehl_Brainfreezer',
        mapUrl: 'https://wiki.guildwars.com/images/1/19/Dazehl_Brainfreezer_map.jpg'
      },
      {
        name: 'Lord Glacius the Eternal',
        area: 'Bjora Marches',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lord_Glacius_the_Eternal',
        mapUrl: 'https://wiki.guildwars.com/images/2/2c/Lord_Glacius_the_Eternal_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. Deals 10...50...60 cold damage. If you have more Energy than target foe, deals +10...50...60 cold damage and causes 90% slower movement (1...4...5 second[s]).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/be/Mind_Freeze.jpg/50px-Mind_Freeze.jpg'
  },
  {
    id: 'ele-mirror-of-ice',
    name: 'Mirror of Ice',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.WATER_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Mirror_of_Ice',
    bosses: [
      {
        name: "Elemental's Construct",
        area: 'Sunjiang District and explorable',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Elemental%27s_Construct',
        mapUrl: "https://wiki.guildwars.com/images/6/67/Elemental's_Construct_map.jpg"
      }
    ],
    description: 'Elite Hex Spell. Deals 15...59...70 cold damage and slows foes by 66% (2...5...6 seconds). Hits foes near you and target ally. Recharges 50% faster if it hits a foe hexed with Water Magic.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/33/Mirror_of_Ice.jpg/50px-Mirror_of_Ice.jpg'
  },
  {
    id: 'ele-mist-form',
    name: 'Mist Form',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.WATER_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Mist_Form',
    bosses: [
      {
        name: 'Eidolon',
        area: "Iron Mines of Moladune, Ring of Fire, Abaddon's Mouth",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Eidolon'
      },
      {
        name: 'Ice Beast',
        area: 'Mineral Springs',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ice_Beast',
        mapUrl: 'https://wiki.guildwars.com/images/8/88/Ice_Beast_map.jpg'
      },
      {
        name: 'Sala Chillbringer',
        area: 'Snake Dance',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sala_Chillbringer',
        mapUrl: 'https://wiki.guildwars.com/images/0/0e/Spawn_points_of_nightmare_bosses_in_Snake_Dance.jpg'
      },
      {
        name: 'Brrrr Windburn',
        area: 'Talus Chute',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Brrrr_Windburn',
        mapUrl: 'https://wiki.guildwars.com/images/3/37/Brrrr_Windburn_map.jpg'
      },
      {
        name: 'Drikard the Foggy',
        area: 'Dalada Uplands',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Drikard_the_Foggy',
        mapUrl: 'https://wiki.guildwars.com/images/2/22/Drikard_The_Foggy_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (10...38...45 seconds.) Take 33% less damage from foes hexed with Water Magic. Heals non-spirit allies in earshot for 50...210...250% of the energy cost of your elemental spells.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/f3/Mist_Form.jpg/50px-Mist_Form.jpg'
  },
  {
    id: 'ele-shatterstone',
    name: 'Shatterstone',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.WATER_MAGIC,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Shatterstone',
    bosses: [
      {
        name: 'The Ancient',
        area: 'Arborstone',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Ancient',
        mapUrl: 'https://wiki.guildwars.com/images/e/ee/Arborstone_map.jpg'
      },
      {
        name: 'Wiseroot Shatterstone',
        area: 'The Eternal Grove explorable',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Wiseroot_Shatterstone',
        mapUrl: 'https://wiki.guildwars.com/images/3/31/Wiseroot_Shatterstone_map.jpg'
      },
      {
        name: 'Wavecrest Stonebreak',
        area: "Rhea's Crater",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Wavecrest_Stonebreak',
        mapUrl: 'https://wiki.guildwars.com/images/1/10/Wavecrest_Stonebreak_map.jpg'
      },
      {
        name: 'Whiteout',
        area: 'Jaga Moraine',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Whiteout',
        mapUrl: 'https://wiki.guildwars.com/images/6/68/White_Out_map.jpg'
      },
      {
        name: 'Fragment of Antiquities',
        area: 'Sepulchre of Dragrimmar',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Fragment_of_Antiquities',
        mapUrl: 'https://wiki.guildwars.com/images/3/3a/Fragment_of_Antiquities_map.jpg'
      },
      {
        name: 'Regent of Ice',
        area: 'Sepulchre of Dragrimmar level 1',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Regent_of_Ice'
      },
      {
        name: 'Ancient Vaettir',
        area: "Raven's Point level 1 and 2",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ancient_Vaettir'
      }
    ],
    description: 'Elite Hex Spell. (3 seconds.) Initial effect: deals 25...85...100 cold damage. End effect: deals 25...85...100 cold damage to target and all nearby foes.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/36/Shatterstone.jpg/50px-Shatterstone.jpg'
  },
  {
    id: 'ele-ward-against-harm',
    name: 'Ward Against Harm',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.WATER_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Ward_Against_Harm',
    bosses: [
      {
        name: 'Arkhel Havenwood',
        area: 'Frozen Forest',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Arkhel_Havenwood',
        mapUrl: 'https://wiki.guildwars.com/images/c/c2/Frozen_Forest_Pinesoul_boss_locations.jpg'
      },
      {
        name: 'Frazar Frostfur',
        area: 'Against the Charr',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Frazar_Frostfur',
        mapUrl: 'https://wiki.guildwars.com/images/5/51/Against_the_Charr_map.jpg'
      },
      {
        name: 'Spafrod Iceblood',
        area: 'Sacnoth Valley',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Spafrod_Iceblood',
        mapUrl: 'https://wiki.guildwars.com/images/b/be/Sacnoth_Valley_Charr_Bosses_map.jpg'
      },
      {
        name: 'Torch Harrowkeeper',
        area: 'Grothmar Wardowns (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Torch_Harrowkeeper',
        mapUrl: 'https://wiki.guildwars.com/images/7/7c/Be_Very%2C_Very_Quiet..._map.jpg'
      }
    ],
    description: 'Elite Ward Spell. (5...13...15 seconds.) Allies in this ward have +1...3...3 Health regeneration, +12...22...24 armor, and +12...22...24 additional armor against elemental damage. Spirits are unaffected. This spell is disabled for 20 seconds.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/3f/Ward_Against_Harm.jpg/50px-Ward_Against_Harm.jpg'
  },
  {
    id: 'ele-water-trident',
    name: 'Water Trident',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.WATER_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Water_Trident',
    bosses: [
      {
        name: 'Berg Frozenfist',
        area: 'Ice Caves of Sorrow',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Berg_Frozenfist',
        mapUrl: 'https://wiki.guildwars.com/images/c/cc/Ice_Caves_of_Sorrow_map.jpg'
      },
      {
        name: 'Boreal Kubeclaw',
        area: 'Frozen Forest',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Boreal_Kubeclaw',
        mapUrl: 'https://wiki.guildwars.com/images/f/fe/Frozen_Forest_Stone_Summit_bosses_map.jpg'
      },
      {
        name: 'Chunk Clumpfoot',
        area: "Lornar's Pass",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chunk_Clumpfoot',
        mapUrl: 'https://wiki.guildwars.com/images/b/b6/Chunk_Clumpfoot_map.jpg'
      },
      {
        name: 'Flint Fleshcleaver',
        area: "Grenth's Footprint",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Flint_Fleshcleaver',
        mapUrl: 'https://wiki.guildwars.com/images/f/fe/Grenth%27s_Footprint_bosses_map.jpg'
      },
      {
        name: 'The Judge',
        area: 'Thunderhead Keep',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Judge',
        mapUrl: 'https://wiki.guildwars.com/images/5/58/THK_Dwarf_Boss_Map.jpg'
      },
      {
        name: 'Elsnil Frigidheart',
        area: 'Ice Cliff Chasms',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Elsnil_Frigidheart',
        mapUrl: 'https://wiki.guildwars.com/images/e/ec/Elsnil_Frigidheart_map.jpg'
      },
      {
        name: 'Gloop',
        area: 'Ooze Pit',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Gloop',
        mapUrl: 'https://wiki.guildwars.com/images/a/a8/Watch_it_Jiggle_map.jpg'
      }
    ],
    description: 'Elite Spell. Fast Projectile: deals 10...74...90 cold damage and knocks-down moving foes. Shoots 2 additional projectiles at adjacent foes.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/ee/Water_Trident.jpg/50px-Water_Trident.jpg'
  },

  // --- No Attribute ---
  {
    id: 'ele-glyph-of-renewal',
    name: 'Glyph of Renewal',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Glyph_of_Renewal',
    bosses: [
      {
        name: 'Nayl Klaw Tuthan',
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Nayl_Klaw_Tuthan',
        mapUrl: 'https://wiki.guildwars.com/images/6/60/Perdition_Rock_Hydra_and_Ettin_bosses_map.jpg'
      }
    ],
    description: 'Elite Glyph. (15 seconds.) Your next spell recharges instantly.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/8/8a/Glyph_of_Renewal.jpg/50px-Glyph_of_Renewal.jpg'
  },
  {
    id: 'ele-second-wind',
    name: 'Second Wind',
    profession: Profession.ELEMENTALIST,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Second_Wind',
    bosses: [
      {
        name: 'Snapjaw Windshell',
        area: 'Archipelagos',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Snapjaw_Windshell',
        mapUrl: 'https://wiki.guildwars.com/images/9/92/Snapjaw_Windshell_map.jpg'
      }
    ],
    description: 'Elite Spell. You gain 1 Energy and 5 Health for each point of Overcast. You lose all enchantments.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/f9/Second_Wind.jpg/50px-Second_Wind.jpg'
  }
];