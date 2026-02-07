import { EliteSkill, Profession, Campaign, Attribute } from '../types';

export const DERVISH_SKILLS: EliteSkill[] = [
  // --- Earth Prayers ---
  {
    id: 'derv-ebon-dust-aura',
    name: 'Ebon Dust Aura',
    profession: Profession.DERVISH,
    attribute: Attribute.EARTH_PRAYERS,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Ebon_Dust_Aura',
    bosses: [
      {
        name: 'Shezel Slowreaper',
        area: 'The Mirror of Lyss',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shezel_Slowreaper',
        mapUrl: 'https://wiki.guildwars.com/images/5/57/Shezel_Slowreaper_location.jpg'
      },
      {
        name: 'Brynn Earthporter',
        area: 'Sparkfly Swamp',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Brynn_Earthporter',
        mapUrl: 'https://wiki.guildwars.com/images/0/05/Brynn_Earthporter_map.jpg'
      }
    ],
    description: 'Elite Flash Enchantment Spell. (30 seconds.) Deal +3...25...30 earth damage with your melee attacks. Initial Effect: Blinds nearby foes for 1...6...7 second[s]. End Effect: removes Blindness. No effect unless wielding an earth weapon.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/39/Ebon_Dust_Aura.jpg/50px-Ebon_Dust_Aura.jpg'
  },
  {
    id: 'derv-vow-of-strength',
    name: 'Vow of Strength',
    profession: Profession.DERVISH,
    attribute: Attribute.EARTH_PRAYERS,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Vow_of_Strength',
    bosses: [
      {
        name: 'Captain Mhedi',
        area: 'Barbarous Shore',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Captain_Mhedi',
        mapUrl: 'https://wiki.guildwars.com/images/3/38/Captain_Mhedi_map.jpg'
      },
      {
        name: 'Ensign Jahan',
        area: 'Cliffs of Dohjok (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ensign_Jahan'
      }
    ],
    description: 'Elite Enchantment Spell. (15 seconds.) When you attack with a scythe, deals 10...22...25 slashing damage to adjacent foes.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/b9/Vow_of_Strength.jpg/50px-Vow_of_Strength.jpg'
  },

  // --- Mysticism ---
  {
    id: 'derv-arcane-zeal',
    name: 'Arcane Zeal',
    profession: Profession.DERVISH,
    attribute: Attribute.MYSTICISM,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Arcane_Zeal',
    bosses: [
      {
        name: 'Zealot Sheoli',
        area: 'Nundu Bay',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Zealot_Sheoli',
        mapUrl: 'https://wiki.guildwars.com/images/e/ec/Zealot_Sheoli_map.jpg'
      },
      {
        name: 'Zealous Amarantha',
        area: 'Nightfallen Jahai (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Zealous_Amarantha',
        mapUrl: 'https://wiki.guildwars.com/images/7/7e/Zealous_Amarantha_map.jpg'
      },
      {
        name: 'Fahralon the Zealous',
        area: 'Domain of Pain',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Fahralon_the_Zealous',
        mapUrl: 'https://wiki.guildwars.com/images/5/59/Fahralon_the_Zealous_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (10 seconds.) You gain 2 Energy (maximum 2...6...7) for each enchantment on you whenever you cast a spell.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/ad/Arcane_Zeal.jpg/50px-Arcane_Zeal.jpg'
  },
  {
    id: 'derv-avatar-of-balthazar',
    name: 'Avatar of Balthazar',
    profession: Profession.DERVISH,
    attribute: Attribute.MYSTICISM,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Avatar_of_Balthazar',
    bosses: [
      {
        name: 'Acolyte of Balthazar',
        area: 'Jahai Bluffs',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Acolyte_of_Balthazar',
        mapUrl: 'https://wiki.guildwars.com/images/c/c2/Acolyte_of_Balthazar_map.jpg'
      }
    ],
    description: 'Elite Form. (10...74...90 seconds.) You gain +20 armor against physical damage, you gain adrenaline 25% faster, your attacks deal holy damage, you inflict Burning (1...3...3 second[s]) on nearby foes whenever you lose a Dervish enchantment. This skill is disabled for 45 seconds.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/93/Avatar_of_Balthazar.jpg/50px-Avatar_of_Balthazar.jpg'
  },
  {
    id: 'derv-avatar-of-dwayna',
    name: 'Avatar of Dwayna',
    profession: Profession.DERVISH,
    attribute: Attribute.MYSTICISM,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Avatar_of_Dwayna',
    bosses: [
      {
        name: 'Acolyte of Dwayna',
        area: 'Dejarin Estate',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Acolyte_of_Dwayna',
        mapUrl: 'https://wiki.guildwars.com/images/9/9e/Acolyte_of_Dwayna_map.jpg'
      }
    ],
    description: 'Elite Form. (10...74...90 seconds.) You deal holy damage. Whenever you use a Dervish attack skill, you lose 1 hex. Heal allies in earshot for 5...41...50 Health when you lose a Dervish enchantment. This skill is disabled for 45 seconds.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/e0/Avatar_of_Dwayna.jpg/50px-Avatar_of_Dwayna.jpg'
  },
  {
    id: 'derv-avatar-of-grenth',
    name: 'Avatar of Grenth',
    profession: Profession.DERVISH,
    attribute: Attribute.MYSTICISM,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Avatar_of_Grenth',
    bosses: [
      {
        name: 'Acolyte of Grenth',
        area: 'Arkjok Ward',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Acolyte_of_Grenth',
        mapUrl: 'https://wiki.guildwars.com/images/4/4f/Acolyte_of_Grenth_map.jpg'
      }
    ],
    description: 'Elite Form. (10...74...90 seconds.) Your scythe attacks deal dark damage and steal 0...10...12 Health. You are immune to Disease. Apply Disease to all adjacent foes (3 seconds) when you lose a Dervish enchantment. This skill is disabled for 45 seconds.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/13/Avatar_of_Grenth.jpg/50px-Avatar_of_Grenth.jpg'
  },
  {
    id: 'derv-avatar-of-lyssa',
    name: 'Avatar of Lyssa',
    profession: Profession.DERVISH,
    attribute: Attribute.MYSTICISM,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Avatar_of_Lyssa',
    bosses: [
      {
        name: 'Acolyte of Lyssa',
        area: 'Sunward Marches',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Acolyte_of_Lyssa',
        mapUrl: 'https://wiki.guildwars.com/images/6/65/Acolyte_of_Lyssa_map.jpg'
      }
    ],
    description: 'Elite Form. (10...74...90 seconds.) Your Dervish enchantments recharge 50% faster and deal chaos damage with attacks. Steal 1 Energy from nearby foes when you lose a Dervish enchantment. This skill is disabled for 45 seconds.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/e5/Avatar_of_Lyssa.jpg/50px-Avatar_of_Lyssa.jpg'
  },
  {
    id: 'derv-avatar-of-melandru',
    name: 'Avatar of Melandru',
    profession: Profession.DERVISH,
    attribute: Attribute.MYSTICISM,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Avatar_of_Melandru',
    bosses: [
      {
        name: 'Acolyte of Melandru',
        area: 'Marga Coast',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Acolyte_of_Melandru',
        mapUrl: 'https://wiki.guildwars.com/images/7/75/Acolyte_of_Melandru_map.jpg'
      }
    ],
    description: 'Elite Form. (10...74...90 seconds.) You have +150 maximum Health, +30 elemental armor, and your attacks deal earth damage. Cure 1 condition from all party members in earshot whenever you lose a Dervish enchantment. This skill is disabled for 45 seconds.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/ff/Avatar_of_Melandru.jpg/50px-Avatar_of_Melandru.jpg'
  },
  {
    id: 'derv-pious-renewal',
    name: 'Pious Renewal',
    profession: Profession.DERVISH,
    attribute: Attribute.MYSTICISM,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Pious_Renewal',
    bosses: [
      {
        name: 'Corporal Suli',
        area: 'Yatendi Canyons',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Corporal_Suli',
        mapUrl: 'https://wiki.guildwars.com/images/3/30/Corporal_Suli_map.jpg'
      },
      {
        name: 'Taskmaster Suli',
        area: 'Kodonur Crossroads',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Taskmaster_Suli',
        mapUrl: 'https://wiki.guildwars.com/images/1/12/Taskmaster_suli_map.jpg'
      },
      {
        name: 'Captain Denduru',
        area: 'Consulate Docks',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Captain_Denduru',
        mapUrl: 'https://wiki.guildwars.com/images/8/8b/Captain_Denduru_map.jpg'
      },
      {
        name: 'Facet of Spirit',
        area: 'Arbor Bay, Varajar Fells (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Spirit'
      }
    ],
    description: 'Elite Flash Enchantment Spell. (8 seconds.) End Effect: recharges itself and you gain 0...4...5 Energy and 0...24...30 Health.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/36/Pious_Renewal.jpg/50px-Pious_Renewal.jpg'
  },
  {
    id: 'derv-vow-revolution',
    name: 'Vow of Revolution',
    profession: Profession.DERVISH,
    attribute: Attribute.MYSTICISM,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Vow_of_Revolution',
    bosses: [
      {
        name: 'Yoannh the Rebuilder',
        area: 'The Ruptured Heart (Requires Proof of Triumph)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Yoannh_the_Rebuilder',
        mapUrl: 'https://wiki.guildwars.com/images/5/50/Yoannh_the_Rebuilder_location.png'
      }
    ],
    description: 'Elite Enchantment Spell. (3...9...10 seconds.) Gain +1...4...5 energy regeneration. Renewal: whenever you use a non-Dervish skill. PvE Skill. Note that as a PvE-only skill, Elite Skill Tomes cannot be used to learn this skill.',
    iconUrl: 'https://wiki.guildwars.com/images/4/48/Vow_of_Revolution.jpg'
  },
  {
    id: 'derv-vow-of-silence',
    name: 'Vow of Silence',
    profession: Profession.DERVISH,
    attribute: Attribute.MYSTICISM,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Vow_of_Silence',
    bosses: [
      {
        name: 'Vahlen the Silent',
        area: 'The Sulfurous Wastes',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Vahlen_the_Silent',
        mapUrl: 'https://wiki.guildwars.com/images/9/98/Vahlen_the_Silent_map.jpg'
      },
      {
        name: 'Water Lord',
        area: 'The Hidden City of Ahdashim (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Water_Lord',
        mapUrl: 'https://wiki.guildwars.com/images/a/af/Water_Lord_map.jpg'
      },
      {
        name: 'Chundu the Meek',
        area: 'Gate of Desolation',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chundu_the_Meek',
        mapUrl: 'https://wiki.guildwars.com/images/8/8f/Chundu_the_Meek_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (5...9...10 seconds.) Spells cannot target you. You cannot cast spells.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/f6/Vow_of_Silence.jpg/50px-Vow_of_Silence.jpg'
  },

  // --- Scythe Mastery ---
  {
    id: 'derv-reapers-sweep',
    name: "Reaper's Sweep",
    profession: Profession.DERVISH,
    attribute: Attribute.SCYTHE_MASTERY,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Reaper%27s_Sweep',
    bosses: [
      {
        name: 'Dabineh Deathbringer',
        area: 'Sunward Marches',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Dabineh_Deathbringer',
        mapUrl: 'https://wiki.guildwars.com/images/1/14/Dabineh_Deathbringer_map.jpg'
      },
      {
        name: 'Asterius the Mighty',
        area: 'Varajar Fells',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Asterius_the_Mighty',
        mapUrl: 'https://wiki.guildwars.com/images/a/af/Asterius_the_Mighty_map.jpg'
      }
    ],
    description: 'Elite Scythe Attack. (3...13...15 seconds.) Cause Cripple. Lose 1 Dervish enchantment. Removal Effect: cause knockdown for 2...3...3 seconds.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/e6/Reaper%27s_Sweep.jpg/50px-Reaper%27s_Sweep.jpg'
  },
  {
    id: 'derv-wounding-strike',
    name: 'Wounding Strike',
    profession: Profession.DERVISH,
    attribute: Attribute.SCYTHE_MASTERY,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Wounding_Strike',
    bosses: [
      {
        name: 'Marobeh Sharptail',
        area: 'Vehjin Mines',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Marobeh_Sharptail',
        mapUrl: 'https://wiki.guildwars.com/images/3/3c/Marobeh_Sharptail_map.jpg'
      },
      {
        name: 'Taameh the Frigid',
        area: 'Bjora Marches',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Taameh_the_Frigid',
        mapUrl: 'https://wiki.guildwars.com/images/a/a3/Taameh_the_Frigid_map.jpg'
      },
      {
        name: 'Reaper of Destruction (Level 1)',
        area: "Raven's Point",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Reaper_of_Destruction',
        mapUrl: 'https://wiki.guildwars.com/images/1/1b/Reaper_of_Destruction_level_1_map.jpg'
      },
      {
        name: 'Reaper of Destruction (Level 2)',
        area: "Raven's Point",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Reaper_of_Destruction',
        mapUrl: 'https://wiki.guildwars.com/images/d/df/Reaper_of_Destruction_level_2_map.jpg'
      }
    ],
    description: 'Elite Scythe Attack. Deals +5...17...20 damage and inflicts Bleeding condition (5...17...20 seconds). Remove 1 Dervish enchantment. Removal Effect: inflicts Deep Wound condition (5...17...20 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/35/Wounding_Strike.jpg/50px-Wounding_Strike.jpg'
  },

  // --- Wind Prayers ---
  {
    id: 'derv-grenths-grasp',
    name: "Grenth's Grasp",
    profession: Profession.DERVISH,
    attribute: Attribute.WIND_PRAYERS,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Grenth%27s_Grasp',
    bosses: [
      {
        name: 'Bubahl Icehands',
        area: 'Marga Coast',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bubahl_Icehands',
        mapUrl: 'https://wiki.guildwars.com/images/5/53/Bubahl_Icehands_map.jpg'
      },
      {
        name: 'Lord Yama the Vengeful',
        area: 'The Floodplain of Mahnkelon (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lord_Yama_the_Vengeful'
      }
    ],
    description: 'Elite Flash Enchantment Spell. (20 seconds.) Inflicts Crippled (1...9...11 second[s]) with your attack skills and transfer 1...3...3 condition. No effect unless wielding a cold weapon.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/4a/Grenth%27s_Grasp.jpg/50px-Grenth%27s_Grasp.jpg'
  },
  {
    id: 'derv-onslaught',
    name: 'Onslaught',
    profession: Profession.DERVISH,
    attribute: Attribute.WIND_PRAYERS,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Onslaught',
    bosses: [
      {
        name: 'Onslaught of Terror',
        area: 'Nightfallen Jahai',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Onslaught_of_Terror',
        mapUrl: 'https://wiki.guildwars.com/images/8/82/Onslaught_of_Terror_map.jpg'
      },
      {
        name: 'Emissary of Dhuum',
        area: 'Nightfallen Jahai (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Emissary_of_Dhuum_(dervish)',
        mapUrl: 'https://wiki.guildwars.com/images/2/22/They_Only_Come_Out_at_Night_map.jpg'
      },
      {
        name: 'Myish, Lady of the Lake',
        area: 'Drakkar Lake',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Myish,_Lady_of_the_Lake',
        mapUrl: 'https://wiki.guildwars.com/images/7/7a/Myish,_Lady_of_the_Lake_map.jpg'
      },
      {
        name: 'Avatar of Destruction',
        area: "Destruction's Depths",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Avatar_of_Destruction_(dervish)'
      }
    ],
    description: 'Elite Flash Enchantment Spell. (3...13...15 seconds.) You attack, move and gain adrenaline 25% faster.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/d8/Onslaught.jpg/50px-Onslaught.jpg'
  },
  {
    id: 'derv-zealous-vow',
    name: 'Zealous Vow',
    profession: Profession.DERVISH,
    attribute: Attribute.WIND_PRAYERS,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Zealous_Vow',
    bosses: [
      {
        name: 'Sehlon, Beautiful Water',
        area: 'Bahdok Caverns',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sehlon,_Beautiful_Water',
        mapUrl: 'https://wiki.guildwars.com/images/6/64/Sehlon,_Beautiful_Water_map.jpg'
      },
      {
        name: 'Hajok Earthguardian',
        area: 'Dasha Vestibule',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hajok_Earthguardian_(Djinn)',
        mapUrl: 'https://wiki.guildwars.com/images/0/09/Hajok_Earthguardian_(Djinn)_map.jpg'
      },
      {
        name: 'Leilon, Tranquil Water',
        area: 'The Hidden City of Ahdashim',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Leilon,_Tranquil_Water',
        mapUrl: 'https://wiki.guildwars.com/images/0/06/Leilon,_Tranquil_Water_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (20 seconds.) You gain 1...5...6 Energy each time you hit with an attack. You have -3 Energy regeneration.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/0/03/Zealous_Vow.jpg/50px-Zealous_Vow.jpg'
  }
];