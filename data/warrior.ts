import { EliteSkill, Profession, Campaign, Attribute } from '../types';

export const WARRIOR_SKILLS: EliteSkill[] = [
  // --- Axe Mastery ---
  {
    id: 'war-cleave',
    name: 'Cleave',
    profession: Profession.WARRIOR,
    attribute: Attribute.AXE_MASTERY,
    campaigns: [Campaign.CORE, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Cleave',
    bosses: [
      {
        name: 'Arlak Stoneleaf',
        area: 'Ice Caves of Sorrow',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Arlak_Stoneleaf',
        mapUrl: 'https://wiki.guildwars.com/images/a/a9/Arlak_Stoneleaf_map.jpg'
      },
      {
        name: 'Gornar Bellybreaker',
        area: 'Thunderhead Keep',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Gornar_Bellybreaker',
        mapUrl: 'https://wiki.guildwars.com/images/5/58/THK_Dwarf_Boss_Map.jpg'
      },
      {
        name: 'Linka Goldensteel',
        area: 'Frozen Forest',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Linka_Goldensteel',
        mapUrl: 'https://wiki.guildwars.com/images/f/fe/Frozen_Forest_Stone_Summit_bosses_map.jpg'
      },
      {
        name: 'Marika Granitehand',
        area: 'Iron Mines of Moladune',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Marika_Granitehand',
        mapUrl: 'https://wiki.guildwars.com/images/9/97/Iron_Mines_of_Moladune_warrior_boss_spawn_locations.jpg'
      },
      {
        name: 'Virag Bladestone',
        area: 'Ice Caves of Sorrow',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Virag_Bladestone',
        mapUrl: 'https://wiki.guildwars.com/images/c/cc/Ice_Caves_of_Sorrow_map.jpg'
      },
      {
        name: 'Chkkr Ironclaw',
        area: 'Mourning Veil Falls',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chkkr_Ironclaw',
        mapUrl: 'https://wiki.guildwars.com/images/4/46/Chkkr_Ironclaw_map.jpg'
      },
      {
        name: 'Razorfin Fleshrend',
        area: "Rhea's Crater",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Razorfin_Fleshrend',
        mapUrl: 'https://wiki.guildwars.com/images/3/3b/Razorfin_Fleshrend_map.jpg'
      },
      {
        name: 'Chor the Bladed',
        area: 'Marga Coast',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chor_the_Bladed',
        mapUrl: 'https://wiki.guildwars.com/images/1/10/Chor_the_Bladed_map.jpg'
      },
      {
        name: 'Ranshek, Carrion Eater',
        area: 'Moddok Crevice',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ranshek,_Carrion_Eater',
        mapUrl: 'https://wiki.guildwars.com/images/6/64/Kehmak_the_Tranquil_Location.png'
      },
      {
        name: 'Dvalinn Stonebreaker',
        area: 'Drakkar Lake (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Dvalinn_Stonebreaker',
        mapUrl: 'https://wiki.guildwars.com/images/1/1f/In_the_Service_of_Revenge_map.jpg'
      }
    ],
    description: 'Elite Axe Attack. Deals +10...26...30 damage.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/f9/Cleave.jpg/50px-Cleave.jpg'
  },
  {
    id: 'war-decapitate',
    name: 'Decapitate',
    profession: Profession.WARRIOR,
    attribute: Attribute.AXE_MASTERY,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Decapitate',
    bosses: [
      {
        name: 'Robah Hardback',
        area: 'The Floodplain of Mahnkelon',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Robah_Hardback',
        mapUrl: 'https://wiki.guildwars.com/images/3/39/Robah_Hardback_map.jpg'
      }
    ],
    description: 'Elite Axe Attack. Deals +5...41...50 damage. Inflicts Deep Wound condition (5...17...20 seconds). Automatic critical hit. You lose all adrenaline and Energy.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/98/Decapitate.jpg/50px-Decapitate.jpg'
  },
  {
    id: 'war-eviscerate',
    name: 'Eviscerate',
    profession: Profession.WARRIOR,
    attribute: Attribute.AXE_MASTERY,
    campaigns: [Campaign.CORE, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Eviscerate',
    bosses: [
      {
        name: 'Tortitudo Probo',
        area: "Hell's Precipice",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tortitudo_Probo',
        mapUrl: 'https://wiki.guildwars.com/images/9/91/Hell%27s_Precipice_Titan_Boss_map.jpg'
      },
      {
        name: 'Tanzit Razorstone',
        area: "Sorrow's Furnace",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tanzit_Razorstone',
        mapUrl: 'https://wiki.guildwars.com/images/1/1f/Sorrow%27s_Furnace_map.jpg'
      },
      {
        name: 'Lissah the Packleader',
        area: 'Bjora Marches',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lissah_the_Packleader',
        mapUrl: 'https://wiki.guildwars.com/images/f/fe/Lissah_the_Packleader_map.jpg'
      },
      {
        name: 'Shons the Pretender',
        area: 'Sacnoth Valley',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shons_the_Pretender',
        mapUrl: 'https://wiki.guildwars.com/images/b/b0/Shons_the_Pretender_map.jpg'
      },
      {
        name: 'Tenagg Flametroller',
        area: 'Blood Washes Blood (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tenagg_Flametroller',
        mapUrl: 'https://wiki.guildwars.com/images/d/d7/Tenagg_Flametroller_map.jpg'
      },
      {
        name: 'Charr Prison Guard',
        area: 'Warband of Brothers (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Charr_Prison_Guard_(boss)'
      },
      {
        name: 'The Enforcer',
        area: "Rragar's Menagerie (Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Enforcer',
        mapUrl: 'https://wiki.guildwars.com/images/3/3d/The_Enforcer_map.jpg'
      },
      {
        name: 'Gordam Griefgiver',
        area: 'Against the Charr (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Gordam_Griefgiver',
        mapUrl: 'https://wiki.guildwars.com/images/5/51/Against_the_Charr_map.jpg'
      }
    ],
    description: 'Elite Axe Attack. Deals +1...25...31 damage. Inflicts Deep Wound condition (5...17...20 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/30/Eviscerate.jpg/50px-Eviscerate.jpg'
  },
  {
    id: 'war-triple-chop',
    name: 'Triple Chop',
    profession: Profession.WARRIOR,
    attribute: Attribute.AXE_MASTERY,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Triple_Chop',
    bosses: [
      {
        name: 'Wing, Three Blade',
        area: 'Bukdek Byway',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Wing,_Three_Blade',
        mapUrl: 'https://wiki.guildwars.com/images/0/0d/Wing,_Three_Blade_map.jpg'
      }
    ],
    description: 'Elite Axe Attack. Deals +10...34...40 damage. Also hits adjacent foes.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/a5/Triple_Chop.jpg/50px-Triple_Chop.jpg'
  },
  {
    id: 'war-whirling-axe',
    name: 'Whirling Axe',
    profession: Profession.WARRIOR,
    attribute: Attribute.AXE_MASTERY,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Whirling_Axe',
    bosses: [
      {
        name: 'Geoffer Pain Bringer',
        area: 'Boreas Seabed (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Geoffer_Pain_Bringer',
        mapUrl: 'https://wiki.guildwars.com/images/3/35/Geoffer_Pain_Bringer_map.jpg'
      }
    ],
    description: 'Elite Axe Attack. Deals +5...17...20 damage and removes a stance. Unblockable.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/1b/Whirling_Axe.jpg/50px-Whirling_Axe.jpg'
  },

  // --- Hammer Mastery ---
  {
    id: 'war-backbreaker',
    name: 'Backbreaker',
    profession: Profession.WARRIOR,
    attribute: Attribute.HAMMER_MASTERY,
    campaigns: [Campaign.CORE, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Backbreaker',
    bosses: [
      {
        name: 'Ferk Mallet',
        area: 'Ring of Fire',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ferk_Mallet',
        mapUrl: 'https://wiki.guildwars.com/images/6/6c/Ferk_Mallet_Location_map.jpg'
      },
      {
        name: 'Hodat the Tumbler',
        area: 'Dalada Uplands',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hodat_the_Tumbler',
        mapUrl: 'https://wiki.guildwars.com/images/e/e0/Hodat_the_Tumbler_map.jpg'
      },
      {
        name: 'Crystal Ettin',
        area: 'Bloodstone Caves',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Crystal_Ettin'
      },
      {
        name: 'Paranoia Ettin',
        area: 'Bloodstone Caves',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Paranoia_Ettin'
      }
    ],
    description: 'Elite Hammer Attack. Deals +1...16...20 damage. Causes knockdown. Knockdown lasts 4 seconds with Strength 8 or higher.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/c/c1/Backbreaker.jpg/50px-Backbreaker.jpg'
  },
  {
    id: 'war-devastating-hammer',
    name: 'Devastating Hammer',
    profession: Profession.WARRIOR,
    attribute: Attribute.HAMMER_MASTERY,
    campaigns: [Campaign.CORE, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Devastating_Hammer',
    bosses: [
      {
        name: 'Jade Armor',
        area: 'Ice Floe',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jade_Armor_(boss)',
        mapUrl: 'https://wiki.guildwars.com/images/0/05/Jade_Armor_(boss)_map.jpg'
      },
      {
        name: 'Martigris the Stalwart',
        area: 'Iron Mines of Moladune',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Martigris_the_Stalwart',
        mapUrl: 'https://wiki.guildwars.com/images/2/2f/Iron_Mines_of_Moladune_boss_locations.jpg'
      },
      {
        name: 'Perfected Armor',
        area: 'Thunderhead Keep',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Perfected_Armor',
        mapUrl: 'https://wiki.guildwars.com/images/8/8f/Perfected_Armor_map.jpg'
      },
      {
        name: 'Cairn the Smug',
        area: 'Ring of Fire',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Cairn_the_Smug',
        mapUrl: 'https://wiki.guildwars.com/images/2/2a/Ring_of_Fire_Mursaat_Map.jpg'
      },
      {
        name: 'Cairn the Destroyer',
        area: "Abaddon's Mouth",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Cairn_the_Destroyer',
        mapUrl: 'https://wiki.guildwars.com/images/a/ae/Abaddons_Mouth_Mursaat_and_Jade_Map.jpg'
      },
      {
        name: 'Sentasi, the Jade Maul',
        area: 'Silent Surf',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sentasi,_the_Jade_Maul',
        mapUrl: 'https://wiki.guildwars.com/images/7/70/Sentasi%2C_The_Jade_Maul_map.jpg'
      },
      {
        name: 'Tembarr Treefall',
        area: 'The Eternal Grove (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tembarr_Treefall',
        mapUrl: 'https://wiki.guildwars.com/images/d/d5/Tembarr_Treefall_map.jpg'
      },
      {
        name: 'Churrta the Rock',
        area: 'Jahai Bluffs',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Churrta_the_Rock',
        mapUrl: 'https://wiki.guildwars.com/images/e/e7/Churrta_the_Rock_map.jpg'
      },
      {
        name: 'Krak Flamewhip',
        area: 'Jaga Moraine (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Krak_Flamewhip',
        mapUrl: 'https://wiki.guildwars.com/images/4/45/Krak%27s_Cavalry_map.jpg'
      },
      {
        name: 'Inscribed Ettin',
        area: 'Finding Gadd (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Inscribed_Ettin'
      },
      {
        name: 'Inscribed Sentry',
        area: 'Finding the Bloodstone (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Inscribed_Sentry'
      },
      {
        name: 'Hand of Destruction',
        area: "Glint's Challenge",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hand_of_Destruction'
      }
    ],
    description: 'Elite Hammer Attack. Causes knock-down. Inflicts Weakness condition (5...17...20 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/3a/Devastating_Hammer.jpg/50px-Devastating_Hammer.jpg'
  },
  {
    id: 'war-earth-shaker',
    name: 'Earth Shaker',
    profession: Profession.WARRIOR,
    attribute: Attribute.HAMMER_MASTERY,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Earth_Shaker',
    bosses: [
      {
        name: 'Kor Stonewrath',
        area: 'Snake Dance',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kor_Stonewrath',
        mapUrl: 'https://wiki.guildwars.com/images/1/14/Snake_Dance_giant_boss_locations.jpg'
      },
      {
        name: 'Jormungand',
        area: 'Bjora Marches',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jormungand',
        mapUrl: 'https://wiki.guildwars.com/images/3/31/Jormungand_in_Bjora_Marches.jpg'
      },
      {
        name: 'Jormungand',
        area: 'Norrhart Domains',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jormungand',
        mapUrl: 'https://wiki.guildwars.com/images/5/58/Jormungand_in_Norrhart_Domains.jpg'
      },
      {
        name: 'Jormungand',
        area: 'Drakkar Lake, Varajar Fells',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jormungand'
      }
    ],
    description: 'Elite Hammer Attack. Knocks down target and adjacent foes. 50% failure chance unless Hammer Mastery is 5 or more.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/ac/Earth_Shaker.jpg/50px-Earth_Shaker.jpg'
  },
  {
    id: 'war-enraged-smash',
    name: 'Enraged Smash',
    profession: Profession.WARRIOR,
    attribute: Attribute.HAMMER_MASTERY,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Enraged_Smash',
    bosses: [
      {
        name: 'Afflicted Guardsman Chun',
        area: 'Bukdek Byway (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Afflicted_Guardsman_Chun',
        mapUrl: 'https://wiki.guildwars.com/images/5/51/Afflicted_Guardsman_Chun_map.jpg'
      },
      {
        name: 'Drinkmaster Tahnu',
        area: 'Bukdek Byway (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Drinkmaster_Tahnu'
      },
      {
        name: 'The Afflicted Ako',
        area: "Vizunah Square, Shadow's Passage",
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Ako',
        mapUrl: 'https://wiki.guildwars.com/images/8/87/The_Afflicted_Ako_map.jpg'
      },
      {
        name: 'The Afflicted Maaka',
        area: 'Unwaking Waters, The Eternal Grove',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Maaka'
      },
      {
        name: 'The Afflicted Tamaya',
        area: "Dragon's Throat",
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Tamaya',
        mapUrl: 'https://wiki.guildwars.com/images/1/17/The_Afflicted_Tamaya_map.jpg'
      }
    ],
    description: 'Elite Hammer Attack. Gives you 1...3...4 strike[s] of adrenaline if you hit. Deals +10...34...40 damage and causes knockdown if target foe was moving.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/a6/Enraged_Smash.jpg/50px-Enraged_Smash.jpg'
  },
  {
    id: 'war-forceful-blow',
    name: 'Forceful Blow',
    profession: Profession.WARRIOR,
    attribute: Attribute.HAMMER_MASTERY,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Forceful_Blow',
    bosses: [
      {
        name: 'Stone Judge',
        area: 'Arborstone',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Stone_Judge',
        mapUrl: 'https://wiki.guildwars.com/images/e/ee/Arborstone_map.jpg'
      },
      {
        name: 'Mahr Stonebreaker',
        area: 'Arborstone (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mahr_Stonebreaker',
        mapUrl: 'https://wiki.guildwars.com/images/b/bc/Mahr_Stonebreaker_map.jpg'
      },
      {
        name: 'Dorn Stonebreaker',
        area: 'Altrumm Ruins',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Dorn_Stonebreaker',
        mapUrl: 'https://wiki.guildwars.com/images/5/58/Dorn_Stonebreaker_map.jpg'
      },
      {
        name: 'Ignus the Eternal',
        area: 'Sacnoth Valley (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ignus_the_Eternal'
      }
    ],
    description: "Elite Hammer Attack. Deals +10...26...30 damage. Remove target foe's stance. Inflicts Weakness condition (5...17...20 seconds). Unblockable.",
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/b0/Forceful_Blow.jpg/50px-Forceful_Blow.jpg'
  },
  {
    id: 'war-magehunters-smash',
    name: "Magehunter's Smash",
    profession: Profession.WARRIOR,
    attribute: Attribute.HAMMER_MASTERY,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Magehunter%27s_Smash',
    bosses: [
      {
        name: 'Grabthar the Overbearing',
        area: 'Forum Highlands',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Grabthar_the_Overbearing',
        mapUrl: 'https://wiki.guildwars.com/images/8/8a/Grabthar_the_Overbearing_map.jpg'
      },
      {
        name: 'General Doriah',
        area: 'Dzagonur Bastion',
        wikiUrl: 'https://wiki.guildwars.com/wiki/General_Doriah',
        mapUrl: 'https://wiki.guildwars.com/images/1/14/Dzagonur_Bastion_map.jpg'
      },
      {
        name: 'Dupek the Mighty',
        area: 'The Sulfurous Wastes (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Dupek_the_Mighty',
        mapUrl: 'https://wiki.guildwars.com/images/c/c7/A_Show_of_Force_map.jpg'
      },
      {
        name: 'Champion Puran',
        area: 'Gate of Madness',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Champion_Puran',
        mapUrl: 'https://wiki.guildwars.com/images/4/4d/Champion_Puran_location.jpg'
      }
    ],
    description: 'Elite Hammer Attack. Causes knock-down. Unblockable if target foe is enchanted.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/11/Magehunter%27s_Smash.jpg/50px-Magehunter%27s_Smash.jpg'
  },

  // --- Strength ---
  {
    id: 'war-battle-rage',
    name: 'Battle Rage',
    profession: Profession.WARRIOR,
    attribute: Attribute.STRENGTH,
    campaigns: [Campaign.CORE, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Battle_Rage',
    bosses: [
      {
        name: 'Smukk Foombool',
        area: 'Snake Dance',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Smukk_Foombool',
        mapUrl: 'https://wiki.guildwars.com/images/e/ec/Snake_Dance_troll_boss_spawn_locations.jpg'
      },
      {
        name: 'Krogg Shmush',
        area: 'Talus Chute',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Krogg_Shmush',
        mapUrl: 'https://wiki.guildwars.com/images/6/6f/Talus_Chute_troll_boss_spawn_locations.jpg'
      },
      {
        name: 'Arrahhsh Mountainclub',
        area: 'Pongmei Valley',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Arrahhsh_Mountainclub',
        mapUrl: 'https://wiki.guildwars.com/images/9/9a/Arrahhsh_Mountainclub_map.jpg'
      },
      {
        name: 'Saevio Proelium',
        area: 'Domain of Pain',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Saevio_Proelium',
        mapUrl: 'https://wiki.guildwars.com/images/f/ff/Saevio_Proelium_map.jpg'
      },
      {
        name: 'Cobleri Arronn',
        area: 'Sacnoth Valley',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Cobleri_Arronn',
        mapUrl: 'https://wiki.guildwars.com/images/b/b2/Cobleri_Arronn_map.jpg'
      }
    ],
    description: 'Elite Stance. (5...17...20 seconds.) You move 33% faster and gain double adrenaline from your attacks. Ends if you use any non-adrenal skills.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/dd/Battle_Rage.jpg/50px-Battle_Rage.jpg'
  },
  {
    id: 'war-bulls-charge',
    name: "Bull's Charge",
    profession: Profession.WARRIOR,
    attribute: Attribute.STRENGTH,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Bull%27s_Charge',
    bosses: [
      {
        name: 'Skintekaru Manshredder',
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Skintekaru_Manshredder',
        mapUrl: 'https://wiki.guildwars.com/images/7/73/Perdition_Rock_Drake_bosses_map.jpg'
      },
      {
        name: 'Grognard Gravelhead',
        area: "Sorrow's Furnace",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Grognard_Gravelhead',
        mapUrl: 'https://wiki.guildwars.com/images/a/a2/Grognard_Gravelhead_map.jpg'
      }
    ],
    description: "Elite Stance. (5...10...11 seconds.) You move 33% faster. Causes knock-down if you hit a moving foe in melee. Ends if you use a skill.",
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/fb/Bull%27s_Charge.jpg/50px-Bull%27s_Charge.jpg'
  },
  {
    id: 'war-charging-strike',
    name: 'Charging Strike',
    profession: Profession.WARRIOR,
    attribute: Attribute.STRENGTH,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Charging_Strike',
    bosses: [
      {
        name: 'Riktund the Vicious',
        area: 'The Mirror of Lyss (not during quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Riktund_the_Vicious',
        mapUrl: 'https://wiki.guildwars.com/images/6/66/Riktund_the_Vicious_map.jpg'
      }
    ],
    description: 'Elite Stance. (1...8...10 second[s].) You move 33% faster and deal +10...74...90 damage with your next melee hit. Ends when you hit or if you use a skill.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/ad/Charging_Strike.jpg/50px-Charging_Strike.jpg'
  },
  {
    id: 'war-defy-pain',
    name: 'Defy Pain',
    profession: Profession.WARRIOR,
    attribute: Attribute.STRENGTH,
    campaigns: [Campaign.CORE, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Defy_Pain',
    bosses: [
      {
        name: 'Obrhit Barkwood',
        area: 'Frozen Forest',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Obrhit_Barkwood',
        mapUrl: 'https://wiki.guildwars.com/images/c/c2/Frozen_Forest_Pinesoul_boss_locations.jpg'
      },
      {
        name: 'Clobberhusk',
        area: "Lornar's Pass",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Clobberhusk',
        mapUrl: 'https://wiki.guildwars.com/images/6/66/Lornar%27s_Pass_Pinesoul_boss_locations.jpg'
      }
    ],
    description: 'Elite Skill. (20 seconds.) You have +90...258...300 maximum Health, +20 armor, and take 1...8...10 less damage.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/16/Defy_Pain.jpg/50px-Defy_Pain.jpg'
  },
  {
    id: 'war-dwarven-battle-stance',
    name: 'Dwarven Battle Stance',
    profession: Profession.WARRIOR,
    attribute: Attribute.STRENGTH,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Dwarven_Battle_Stance',
    bosses: [
      {
        name: 'Malinon Threshammer',
        area: "Sorrow's Furnace",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Malinon_Threshammer'
      },
      {
        name: 'Slonak Copperbark',
        area: 'Iron Mines of Moladune',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Slonak_Copperbark',
        mapUrl: 'https://wiki.guildwars.com/images/9/97/Iron_Mines_of_Moladune_warrior_boss_spawn_locations.jpg'
      },
      {
        name: 'Thorgall Bludgeonhammer',
        area: "Grenth's Footprint",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Thorgall_Bludgeonhammer',
        mapUrl: 'https://wiki.guildwars.com/images/f/fe/Grenth%27s_Footprint_bosses_map.jpg'
      },
      {
        name: 'Taskmaster Durgon',
        area: 'Vloxen Excavations',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Taskmaster_Durgon'
      }
    ],
    description: 'Elite Stance. (5...10...11 seconds.) You attack 33% faster, you gain +40 armor, and your attack skills interrupt actions. No effect unless you have a hammer equipped.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/b9/Dwarven_Battle_Stance.jpg/50px-Dwarven_Battle_Stance.jpg'
  },
  {
    id: 'war-flourish',
    name: 'Flourish',
    profession: Profession.WARRIOR,
    attribute: Attribute.STRENGTH,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Flourish',
    bosses: [
      {
        name: 'Syr Honorcrest',
        area: 'Mineral Springs',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Syr_Honorcrest',
        mapUrl: 'https://wiki.guildwars.com/images/6/65/Mineral_Springs_Avicara_bosses_map.jpg'
      },
      {
        name: 'Heart of Destruction',
        area: "Glint's Challenge",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Heart_of_Destruction'
      }
    ],
    description: 'Elite Skill. Recharges your attack skills. You gain 2...6...7 Energy for each skill recharged.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/97/Flourish.jpg/50px-Flourish.jpg'
  },
  {
    id: 'war-headbutt',
    name: 'Headbutt',
    profession: Profession.WARRIOR,
    attribute: Attribute.STRENGTH,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Headbutt',
    bosses: [
      {
        name: 'Enadiz the Hardheaded',
        area: 'Arkjok Ward',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Enadiz_the_Hardheaded',
        mapUrl: 'https://wiki.guildwars.com/images/a/a9/Enadiz_the_Hardheaded_map.jpg'
      },
      {
        name: 'Molotov Rocktail',
        area: 'Dalada Uplands',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Molotov_Rocktail',
        mapUrl: 'https://wiki.guildwars.com/images/2/2b/Molotov_Rocktail_map.jpg'
      },
      {
        name: 'Ancient Ooze',
        area: 'Ooze Pit',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ancient_Ooze'
      }
    ],
    description: 'Elite Touch Skill. Deals 40...88...100 damage. You are Dazed (5 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/6/64/Headbutt.jpg/50px-Headbutt.jpg'
  },
  {
    id: 'war-magehunter-strike',
    name: 'Magehunter Strike',
    profession: Profession.WARRIOR,
    attribute: Attribute.STRENGTH,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Magehunter_Strike',
    bosses: [
      {
        name: 'Captain Kavaka',
        area: 'Consulate Docks',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Captain_Kavaka',
        mapUrl: 'https://wiki.guildwars.com/images/4/4c/Captain_Kavaka_map.jpg'
      },
      {
        name: 'Colonel Chaklin',
        area: 'Dejarin Estate',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Colonel_Chaklin',
        mapUrl: 'https://wiki.guildwars.com/images/c/c6/Colonel_Chaklin_map.jpg'
      },
      {
        name: 'Executioner Vekil',
        area: 'Pogahn Passage',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Executioner_Vekil'
      }
    ],
    description: 'Elite Melee Attack. Deals +5...17...20 damage. Unblockable if target foe is enchanted.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/6/69/Magehunter_Strike.jpg/50px-Magehunter_Strike.jpg'
  },
  {
    id: 'war-primal-rage',
    name: 'Primal Rage',
    profession: Profession.WARRIOR,
    attribute: Attribute.STRENGTH,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Primal_Rage',
    bosses: [
      {
        name: 'Strongroot Tanglebranch',
        area: 'Morostav Trail',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Strongroot_Tanglebranch',
        mapUrl: 'https://wiki.guildwars.com/images/8/82/Strongroot_Tanglebranch_map.jpg'
      },
      {
        name: 'Reefclaw Ragebound',
        area: 'Gyala Hatchery (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Reefclaw_Ragebound',
        mapUrl: 'https://wiki.guildwars.com/images/c/c8/Reefclaw_Ragebound_Location.jpg'
      }
    ],
    description: 'Elite Stance. (1...12...15 second[s].) You attack 33% faster and move 25% faster. You take double damage.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/d8/Primal_Rage.jpg/50px-Primal_Rage.jpg'
  },
  {
    id: 'war-rage-of-the-ntouka',
    name: 'Rage of the Ntouka',
    profession: Profession.WARRIOR,
    attribute: Attribute.STRENGTH,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Rage_of_the_Ntouka',
    bosses: [
      {
        name: 'Onwan, Lord of the Ntouka',
        area: 'Arkjok Ward',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Onwan,_Lord_of_the_Ntouka',
        mapUrl: 'https://wiki.guildwars.com/images/d/d5/Onwan,_Lord_of_the_Ntouka_map.jpg'
      }
    ],
    description: 'Elite Skill. You gain 1...6...7 adrenaline. For 8 seconds, adrenal skills have a 3 second recharge when used.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/11/Rage_of_the_Ntouka.jpg/50px-Rage_of_the_Ntouka.jpg'
  },
  {
    id: 'war-seven-weapons',
    name: 'Seven Weapons Stance',
    profession: Profession.WARRIOR,
    attribute: Attribute.STRENGTH,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Seven_Weapons_Stance',
    bosses: [
      {
        name: 'Blade Ancient Syu-Shai',
        area: 'Raisu Palace (Explorable) - Requires Proof of Triumph',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Blade_Ancient_Syu-Shai',
        mapUrl: 'https://wiki.guildwars.com/images/9/96/Blade_Ancient_Syu-Shai_location.png'
      }
    ],
    description: 'Elite Stance. (3...17...20 seconds.) Weapon attributes are increased by +1...12...15. You attack 33% faster. PvE Skill. Note: Cannot be unlocked with Elite Skill Tomes.',
    iconUrl: 'https://wiki.guildwars.com/images/d/d7/Seven_Weapons_Stance.jpg'
  },
  {
    id: 'war-warriors-endurance',
    name: "Warrior's Endurance",
    profession: Profession.WARRIOR,
    attribute: Attribute.STRENGTH,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Warrior%27s_Endurance',
    bosses: [
      {
        name: 'Custodian Dellus',
        area: 'Elona Reach',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Custodian_Dellus',
        mapUrl: 'https://wiki.guildwars.com/images/9/95/Custodian_Jenus_location.jpg'
      },
      {
        name: 'Custodian Fidius',
        area: 'Dunes of Despair',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Custodian_Fidius',
        mapUrl: 'https://wiki.guildwars.com/images/c/cb/Dunes_of_Despair_random_boss_spawn_locations.jpg'
      },
      {
        name: 'Custodian Hulgar',
        area: 'Thirsty River',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Custodian_Hulgar',
        mapUrl: 'https://wiki.guildwars.com/images/4/4d/Custodian_Hulgar_Location.jpg'
      }
    ],
    description: 'Elite Skill. (5...29...35 seconds.) You gain 3 Energy each time you hit with a melee attack. No Energy gain if you have more than 10...22...25 Energy.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/c/c2/Warrior%27s_Endurance.jpg/50px-Warrior%27s_Endurance.jpg'
  },

  // --- Swordsmanship ---
  {
    id: 'war-crippling-slash',
    name: 'Crippling Slash',
    profession: Profession.WARRIOR,
    attribute: Attribute.SWORDSMANSHIP,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Crippling_Slash',
    bosses: [
      {
        name: 'Mahto Sharptooth',
        area: 'Sunward Marches',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mahto_Sharptooth',
        mapUrl: 'https://wiki.guildwars.com/images/4/40/Mahto_Sharptooth_map.jpg'
      },
      {
        name: 'Fenrir',
        area: 'Norrhart Domains',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Fenrir',
        mapUrl: 'https://wiki.guildwars.com/images/f/fd/Fenrir_map.jpg'
      },
      {
        name: 'Mobrin, Lord of the Marsh',
        area: 'Sparkfly Swamp',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mobrin,_Lord_of_the_Marsh',
        mapUrl: 'https://wiki.guildwars.com/images/f/f9/Mobrin_map.jpg'
      }
    ],
    description: 'Elite Sword Attack. Inflicts Crippled condition (5...13...15 seconds) and Bleeding condition (10...22...25 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/93/Crippling_Slash.jpg/50px-Crippling_Slash.jpg'
  },
  {
    id: 'war-dragon-slash',
    name: 'Dragon Slash',
    profession: Profession.WARRIOR,
    attribute: Attribute.SWORDSMANSHIP,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Dragon_Slash',
    bosses: [
      {
        name: 'Seaguard Eli',
        area: 'Boreas Seabed',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Seaguard_Eli'
      },
      {
        name: "Sskai, Dragon's Birth",
        area: 'Boreas Seabed (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sskai,_Dragon%27s_Birth',
        mapUrl: "https://wiki.guildwars.com/images/4/47/Sskai,_Dragon's_Birth_map.jpg"
      },
      {
        name: 'Byndliss Flamecrown',
        area: 'Magus Stones',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Byndliss_Flamecrown',
        mapUrl: 'https://wiki.guildwars.com/images/c/c1/FlamecrownMap.jpg'
      }
    ],
    description: 'Elite Sword Attack. Deals +10...34...40 damage. You gain 1...4...5 strike[s] of adrenaline if it hits.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/6/6a/Dragon_Slash.jpg/50px-Dragon_Slash.jpg'
  },
  {
    id: 'war-hundred-blades',
    name: 'Hundred Blades',
    profession: Profession.WARRIOR,
    attribute: Attribute.SWORDSMANSHIP,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Hundred_Blades',
    bosses: [
      {
        name: 'Undead Prince Rurik',
        area: "Hell's Precipice",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Undead_Prince_Rurik'
      },
      {
        name: "Warrior's Construct",
        area: 'Sunjiang District',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Warrior%27s_Construct',
        mapUrl: "https://wiki.guildwars.com/images/5/50/Warrior's_Construct_map.jpg"
      },
      {
        name: 'Reaper of Agony',
        area: 'Depths of Madness',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Reaper_of_Agony',
        mapUrl: 'https://wiki.guildwars.com/images/0/07/Reaper_of_Agony_map.jpg'
      },
      {
        name: 'Blade of Corruption',
        area: 'Nightfallen Jahai (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Blade_of_Corruption_(boss)',
        mapUrl: 'https://wiki.guildwars.com/images/1/1a/Breaking_the_Broken.jpg'
      }
    ],
    description: 'Elite Skill. (15 seconds.) Deals 10...22...25 slashing damage to all adjacent foes whenever you attack with a sword.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/6/63/Hundred_Blades.jpg/50px-Hundred_Blades.jpg'
  },
  {
    id: 'war-quivering-blade',
    name: 'Quivering Blade',
    profession: Profession.WARRIOR,
    attribute: Attribute.SWORDSMANSHIP,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Quivering_Blade',
    bosses: [
      {
        name: 'Sun, the Quivering',
        area: 'Wajjun Bazaar',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sun,_the_Quivering',
        mapUrl: 'https://wiki.guildwars.com/images/4/43/Sun,_the_Quivering_map.jpg'
      }
    ],
    description: 'Elite Sword Attack. Deals +10...34...40 damage. Inflicts Dazed condition (5 seconds) if target foe was moving.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/8/8f/Quivering_Blade.jpg/50px-Quivering_Blade.jpg'
  },

  // --- Tactics ---
  {
    id: 'war-charge',
    name: '"Charge!"',
    profession: Profession.WARRIOR,
    attribute: Attribute.TACTICS,
    campaigns: [Campaign.CORE],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/%22Charge!%22',
    bosses: [
      {
        name: "Balthazar's Cursed",
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Balthazar%27s_Cursed',
        mapUrl: "https://wiki.guildwars.com/images/a/ad/Perdition_Rock_Cursed_bosses_map.jpg"
      },
      {
        name: 'Jacqui The Reaver',
        area: 'Gyala Hatchery (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jacqui_The_Reaver',
        mapUrl: 'https://wiki.guildwars.com/images/e/ee/Jacqui_The_Reaver_map.jpg'
      },
      {
        name: 'Merki The Reaver',
        area: 'Unwaking Waters (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Merki_The_Reaver',
        mapUrl: 'https://wiki.guildwars.com/images/e/e8/Merki_The_Reaver_map.jpg'
      },
      {
        name: 'Sunreach Warmaker',
        area: 'Morostav Trail',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sunreach_Warmaker',
        mapUrl: 'https://wiki.guildwars.com/images/8/85/Sunreach_Warmaker_map.jpg'
      },
      {
        name: 'Shak-Jarin the Justicebringer',
        area: 'Vehjin Mines',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shak-Jarin_the_Justicebringer',
        mapUrl: 'https://wiki.guildwars.com/images/d/dc/Shak-Jarin_the_Justicebringer_map.jpg'
      }
    ],
    description: 'Elite Shout. (5...11...13 seconds.) Allies in earshot move 33% faster. Initial effect: these allies lose the Crippled condition.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/32/%22Charge%21%22.jpg/50px-%22Charge%21%22.jpg'
  },
  {
    id: 'war-victory-is-mine',
    name: '"Victory Is Mine!"',
    profession: Profession.WARRIOR,
    attribute: Attribute.TACTICS,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/%22Victory_Is_Mine!%22',
    bosses: [
      {
        name: 'Jono Yawpyawl',
        area: 'Talus Chute, Spearhead Peak',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jono_Yawpyawl',
        mapUrl: 'https://wiki.guildwars.com/images/0/09/Talus_Chute_Grawl_bosses_map.jpg'
      },
      {
        name: 'Sakalo Yawpyawl',
        area: "Witman's Folly",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sakalo_Yawpyawl',
        mapUrl: 'https://wiki.guildwars.com/images/3/38/Witman%27s_Folly_Grawl_bosses_map.jpg'
      }
    ],
    description: 'Elite Shout. You gain 10...56...68 Health and 3...6...7 Energy for each condition on target foe.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/0/0b/%22Victory_Is_Mine%21%22.jpg/50px-%22Victory_Is_Mine%21%22.jpg'
  },
  {
    id: 'war-auspicious-parry',
    name: 'Auspicious Parry',
    profession: Profession.WARRIOR,
    attribute: Attribute.TACTICS,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Auspicious_Parry',
    bosses: [
      {
        name: 'Bound Jaizhanju',
        area: 'Tahnnakai Temple',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bound_Jaizhanju',
        mapUrl: 'https://wiki.guildwars.com/images/3/37/Tahnnakai_Temple_map.jpg'
      },
      {
        name: 'Sword Ancient Kai',
        area: 'Raisu Palace',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sword_Ancient_Kai',
        mapUrl: 'https://wiki.guildwars.com/images/7/75/Sword_Ancient_Kai_map.jpg'
      },
      {
        name: 'Bound Tiendi',
        area: 'Domain of Fear (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bound_Tiendi',
        mapUrl: 'https://wiki.guildwars.com/images/3/3e/A_History_of_Violence_map.jpg'
      }
    ],
    description: 'Elite Stance. (8 seconds.) Blocks one attack. End effect: you gain 1...3...4 strike[s] of adrenaline.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/0/09/Auspicious_Parry.jpg/50px-Auspicious_Parry.jpg'
  },
  {
    id: 'war-gladiators-defense',
    name: "Gladiator's Defense",
    profession: Profession.WARRIOR,
    attribute: Attribute.TACTICS,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Gladiator%27s_Defense',
    bosses: [
      {
        name: 'Facet of Strength',
        area: "The Dragon's Lair",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Strength',
        mapUrl: 'https://wiki.guildwars.com/images/1/1a/Facet_of_Strength_map.jpg'
      },
      {
        name: 'Facet of Destruction',
        area: 'Verdant Cascades, Varajar Fells (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Destruction'
      }
    ],
    description: 'Elite Stance. (5...10...11 seconds.) You have 75% chance to block. Your attacker takes 5...29...35 damage whenever you block a melee attack this way.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/8/8e/Gladiator%27s_Defense.jpg/50px-Gladiator%27s_Defense.jpg'
  },
  {
    id: 'war-shove',
    name: 'Shove',
    profession: Profession.WARRIOR,
    attribute: Attribute.TACTICS,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Shove',
    bosses: [
      {
        name: 'Tarnen the Bully',
        area: 'Ferndale',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tarnen_the_Bully',
        mapUrl: 'https://wiki.guildwars.com/images/0/03/Tarnen_the_Bully_map.jpg'
      }
    ],
    description: "Elite Touch Skill. Causes knockdown. Initial effect: ends foe's stance and deals 15...63...75 damage if target foe is moving.",
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/bb/Shove.jpg/50px-Shove.jpg'
  },
  {
    id: 'war-soldiers-stance',
    name: "Soldier's Stance",
    profession: Profession.WARRIOR,
    attribute: Attribute.TACTICS,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Soldier%27s_Stance',
    bosses: [
      {
        name: 'Avah the Crafty',
        area: 'Gate of Desolation',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Avah_the_Crafty',
        mapUrl: 'https://wiki.guildwars.com/images/2/29/Avah_the_Crafty_map.jpg'
      },
      {
        name: 'Keht the Fierce',
        area: "Joko's Domain",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Keht_the_Fierce',
        mapUrl: 'https://wiki.guildwars.com/images/1/18/Keht_the_Fierce_map.jpg'
      }
    ],
    description: 'Elite Stance. (5...13...15 seconds.) You have a 75% chance to block. You attack 33% faster while under the effects of a chant or shout.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/1b/Soldier%27s_Stance.jpg/50px-Soldier%27s_Stance.jpg'
  },
  {
    id: 'war-steady-stance',
    name: 'Steady Stance',
    profession: Profession.WARRIOR,
    attribute: Attribute.TACTICS,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Steady_Stance',
    bosses: [
      {
        name: 'Chumab the Prideful',
        area: 'Vehtendi Valley',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chumab_the_Prideful',
        mapUrl: 'https://wiki.guildwars.com/images/2/2a/Chumab_the_Prideful_map.jpg'
      },
      {
        name: 'Skomay Bonehewer',
        area: 'Magus Stones',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Skomay_Bonehewer',
        mapUrl: 'https://wiki.guildwars.com/images/8/80/Skomay_Bonehewer_map_1.jpg'
      }
    ],
    description: 'Elite Stance. (10 seconds.) The next time you would be knocked-down, you gain 1...3...3 adrenaline and 1...6...7 Energy instead.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/47/Steady_Stance.jpg/50px-Steady_Stance.jpg'
  },

  // --- No Attribute ---
  {
    id: 'war-coward',
    name: '"Coward!"',
    profession: Profession.WARRIOR,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/%22Coward!%22',
    bosses: [
      {
        name: 'Kayali the Brave',
        area: 'Mount Qinkai',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kayali_the_Brave',
        mapUrl: 'https://wiki.guildwars.com/images/8/88/Kayali_the_Brave_map.jpg'
      }
    ],
    description: 'Elite Shout. Causes knock-down if target foe is moving.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/9c/%22Coward%21%22.jpg/50px-%22Coward%21%22.jpg'
  },
  {
    id: 'war-all-alone',
    name: '"You\'re All Alone!"',
    profession: Profession.WARRIOR,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/%22You%27re_All_Alone!%22',
    bosses: [
      {
        name: 'Commander Wahli',
        area: 'Barbarous Shore',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Commander_Wahli',
        mapUrl: 'https://wiki.guildwars.com/images/8/80/Commander_Wahli_map.jpg'
      },
      {
        name: 'Commander Bahreht',
        area: 'Cliffs of Dohjok (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Commander_Bahreht'
      }
    ],
    description: 'Elite Shout. Inflicts Cripple and Weakness conditions (8 seconds). No effect if target foe is near one of its allies.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/f1/%22You%27re_All_Alone%21%22.jpg/50px-%22You%27re_All_Alone%21%22.jpg'
  },
  {
    id: 'war-skull-crack',
    name: 'Skull Crack',
    profession: Profession.WARRIOR,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.CORE, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Skull_Crack',
    bosses: [
      {
        name: 'Hail Blackice',
        area: 'Spearhead Peak',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hail_Blackice',
        mapUrl: 'https://wiki.guildwars.com/images/f/fa/Rune_Ethercrash_map.jpg'
      },
      {
        name: 'Hail Blackice',
        area: 'Copperhammer Mines',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hail_Blackice',
        mapUrl: 'https://wiki.guildwars.com/images/f/f7/Hail_Blackice_Location_map.jpg'
      },
      {
        name: 'Baglorag Grumblesnort',
        area: 'Norrhart Domains',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Baglorag_Grumblesnort',
        mapUrl: 'https://wiki.guildwars.com/images/f/fa/Baglorag_Grumblesnort_map.jpg'
      },
      {
        name: 'Chieftain Ulgrimar Gnash',
        area: 'Drakkar Lake (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chieftain_Ulgrimar_Gnash',
        mapUrl: 'https://wiki.guildwars.com/images/b/ba/The_Big_Unfriendly_Jotun_map.jpg'
      },
      {
        name: 'Havok-kin',
        area: 'Darkrime Delves',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Havok-kin',
        mapUrl: 'https://wiki.guildwars.com/images/2/24/Havok-kin_map.jpg'
      },
      {
        name: 'Grelk Icelash',
        area: 'Darkrime Delves',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Grelk_Icelash',
        mapUrl: 'https://wiki.guildwars.com/images/3/39/Grelk_Icelash_map.jpg'
      }
    ],
    description: 'Elite Melee Attack. Interrupts an action. Inflicts Dazed condition (10 seconds) if target is casting a spell.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/c/c2/Skull_Crack.jpg/50px-Skull_Crack.jpg'
  }
];