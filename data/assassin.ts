import { EliteSkill, Profession, Campaign, Attribute } from '../types';

export const ASSASSIN_SKILLS: EliteSkill[] = [
  // --- Critical Strikes ---
  {
    id: 'sin-dark-apostasy',
    name: 'Dark Apostasy',
    profession: Profession.ASSASSIN,
    attribute: Attribute.CRITICAL_STRIKES,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Dark_Apostasy',
    bosses: [
      {
        name: 'Arius, Dark Apostle',
        area: "Rhea's Crater",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Arius,_Dark_Apostle',
        mapUrl: 'https://wiki.guildwars.com/images/8/87/Arius,_Dark_Apostle_map.jpg'
      },
      {
        name: 'Darkroot Entrop',
        area: 'Mourning Veil Falls',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Darkroot_Entrop',
        mapUrl: 'https://wiki.guildwars.com/images/5/54/Darkroot_Entrop_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (3...14...17 seconds.) Your critical hits remove an enchantment. Removal cost: lose 10...4...3 Energy or Dark Apostasy ends.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/ad/Dark_Apostasy.jpg/50px-Dark_Apostasy.jpg'
  },
  {
    id: 'sin-locusts-fury',
    name: "Locust's Fury",
    profession: Profession.ASSASSIN,
    attribute: Attribute.CRITICAL_STRIKES,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Locust%27s_Fury',
    bosses: [
      {
        name: 'Chkkr Locust Lord',
        area: "Melandru's Hope",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chkkr_Locust_Lord',
        mapUrl: 'https://wiki.guildwars.com/images/b/b2/Chkkr_Locust_Lord_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (10...30...35 seconds.) You have +50% chance to double strike. No effect unless you are wielding daggers.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/5d/Locust%27s_Fury.jpg/50px-Locust%27s_Fury.jpg'
  },
  {
    id: 'sin-palm-strike',
    name: 'Palm Strike',
    profession: Profession.ASSASSIN,
    attribute: Attribute.CRITICAL_STRIKES,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Palm_Strike',
    bosses: [
      {
        name: 'Kenshi Steelhand',
        area: 'Bukdek Byway',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kenshi_Steelhand',
        mapUrl: 'https://wiki.guildwars.com/images/0/0e/Kenshi_Steelhand_map.jpg'
      }
    ],
    description: 'Elite Touch Skill. Deals 10...54...65 damage and inflicts Crippled condition (1...4...5 second[s]). This skill counts as an off-hand attack.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/c/c5/Palm_Strike.jpg/50px-Palm_Strike.jpg'
  },
  {
    id: 'sin-seeping-wound',
    name: 'Seeping Wound',
    profession: Profession.ASSASSIN,
    attribute: Attribute.CRITICAL_STRIKES,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Seeping_Wound',
    bosses: [
      {
        name: 'Shreader Sharptongue',
        area: 'Xaquang Skyway',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shreader_Sharptongue',
        mapUrl: 'https://wiki.guildwars.com/images/4/44/Shreader_Sharptongue_map.jpg'
      }
    ],
    description: 'Elite Half Range Hex Spell. (1...6...7 second[s].) Target foe moves 33% slower. This foe takes 5...21...25 damage each second while suffering from a condition.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/96/Seeping_Wound.jpg/50px-Seeping_Wound.jpg'
  },
  {
    id: 'sin-shadow-theft',
    name: 'Shadow Theft',
    profession: Profession.ASSASSIN,
    attribute: Attribute.CRITICAL_STRIKES,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Shadow_Theft',
    bosses: [
      {
        name: 'Blade Ancient Syu-Shai',
        area: 'Raisu Palace (Explorable) - Requires Proof of Triumph',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Blade_Ancient_Syu-Shai',
        mapUrl: 'https://wiki.guildwars.com/images/9/96/Blade_Ancient_Syu-Shai_location.png'
      }
    ],
    description: "Elite Skill. Shadow Step to target foe. For 5...17...20 seconds that foe's attributes are reduced by 1...4...5 and your attributes are increased by 1...4...5. Counts as a Lead Attack. PvE Skill. Note that as a PvE-only skill, Elite Skill Tomes cannot be used to learn this skill.",
    iconUrl: 'https://wiki.guildwars.com/images/9/91/Shadow_Theft.jpg'
  },
  {
    id: 'sin-shattering-assault',
    name: 'Shattering Assault',
    profession: Profession.ASSASSIN,
    attribute: Attribute.CRITICAL_STRIKES,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Shattering_Assault',
    bosses: [
      {
        name: 'Achor the Bladed',
        area: 'Crystal Overlook',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Achor_the_Bladed',
        mapUrl: 'https://wiki.guildwars.com/images/5/5e/Achor_the_Bladed_map.jpg'
      },
      {
        name: 'The Hunter',
        area: 'Domain of Secrets (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Hunter'
      }
    ],
    description: 'Elite Dual Attack. Deals 5...41...50 damage. Removes one enchantment. Unblockable. Must follow an off-hand attack.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/d4/Shattering_Assault.jpg/50px-Shattering_Assault.jpg'
  },
  {
    id: 'sin-way-of-the-assassin',
    name: 'Way of the Assassin',
    profession: Profession.ASSASSIN,
    attribute: Attribute.CRITICAL_STRIKES,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Way_of_the_Assassin',
    bosses: [
      {
        name: 'Major Jeahr',
        area: 'Dejarin Estate',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Major_Jeahr',
        mapUrl: 'https://wiki.guildwars.com/images/5/56/Major_Jeahr_map.jpg'
      }
    ],
    description: 'Elite Stance. (20 seconds.) While wielding daggers, you attack 5...17...20% faster and have +5...29...35% chance to land a critical hit.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/7/74/Way_of_the_Assassin.jpg/50px-Way_of_the_Assassin.jpg'
  },

  // --- Dagger Mastery ---
  {
    id: 'sin-flashing-blades',
    name: 'Flashing Blades',
    profession: Profession.ASSASSIN,
    attribute: Attribute.DAGGER_MASTERY,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Flashing_Blades',
    bosses: [
      {
        name: 'Lou, of the Knives',
        area: 'Shenzun Tunnels',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lou,_of_the_Knives',
        mapUrl: 'https://wiki.guildwars.com/images/a/a8/Lou,_of_the_Knives_map.jpg'
      },
      {
        name: 'Waeng',
        area: 'The Undercity (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Waeng',
        mapUrl: 'https://wiki.guildwars.com/images/a/a9/Assist_the_Guards_map.jpg'
      }
    ],
    description: 'Elite Stance. (5...25...30 seconds.) You have 75% chance to block while attacking. Block effect: 5...17...20 damage to your attacker.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/38/Flashing_Blades.jpg/50px-Flashing_Blades.jpg'
  },
  {
    id: 'sin-foxs-promise',
    name: "Fox's Promise",
    profession: Profession.ASSASSIN,
    attribute: Attribute.DAGGER_MASTERY,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Fox%27s_Promise',
    bosses: [
      {
        name: 'Hanchor Trueblade',
        area: 'Holdings of Chokhin',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hanchor_Trueblade',
        mapUrl: 'https://wiki.guildwars.com/images/3/3f/Hanchor_Trueblade_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (5...17...20 seconds.) Your dagger attacks are unblockable. Ends the next time you fail to hit.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/ed/Fox%27s_Promise.jpg/50px-Fox%27s_Promise.jpg'
  },
  {
    id: 'sin-golden-skull-strike',
    name: 'Golden Skull Strike',
    profession: Profession.ASSASSIN,
    attribute: Attribute.DAGGER_MASTERY,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Golden_Skull_Strike',
    bosses: [
      {
        name: 'Ravager of Dreams',
        area: 'Depths of Madness',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ravager_of_Dreams',
        mapUrl: 'https://wiki.guildwars.com/images/f/fb/Ravager_of_Dreams_map.jpg'
      },
      {
        name: 'Pywatt the Swift',
        area: 'Alcazia Tangle',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Pywatt_the_Swift',
        mapUrl: 'https://wiki.guildwars.com/images/e/ec/Pywatt_the_Swift_map.jpg'
      },
      {
        name: 'Rake Blazeclaw',
        area: 'Quest only (EotN)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Rake_Blazeclaw',
        mapUrl: 'https://wiki.guildwars.com/images/1/18/Rake_Blazeclaw_map.jpg'
      }
    ],
    description: 'Elite Off-Hand Attack. Inflicts Dazed condition (1...4...5 seconds). No effect unless you are enchanted.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/0/05/Golden_Skull_Strike.jpg/50px-Golden_Skull_Strike.jpg'
  },
  {
    id: 'sin-moebius-strike',
    name: 'Moebius Strike',
    profession: Profession.ASSASSIN,
    attribute: Attribute.DAGGER_MASTERY,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Moebius_Strike',
    bosses: [
      {
        name: 'Bramble Everthorn',
        area: 'The Eternal Grove (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bramble_Everthorn',
        mapUrl: 'https://wiki.guildwars.com/images/2/2c/Bramble_Everthorn_map.jpg'
      }
    ],
    description: "Elite Off-Hand Attack. Deals +10...30...35 damage. Recharges all your other attack skills if target foe's Health is below 50%. Must follow a dual attack.",
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/49/Moebius_Strike.jpg/50px-Moebius_Strike.jpg'
  },
  {
    id: 'sin-temple-strike',
    name: 'Temple Strike',
    profession: Profession.ASSASSIN,
    attribute: Attribute.DAGGER_MASTERY,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Temple_Strike',
    bosses: [
      {
        name: "Assassin's Construct",
        area: 'Silent Surf, Sunjiang District',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Assassin%27s_Construct',
        mapUrl: "https://wiki.guildwars.com/images/d/d4/Assassin's_Construct_map.jpg"
      }
    ],
    description: 'Elite Off-Hand Attack. Interrupts a spell. Inflicts Dazed and Blindness conditions (1...8...10 seconds). Must follow a lead attack.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/9b/Temple_Strike.jpg/50px-Temple_Strike.jpg'
  },

  // --- Deadly Arts ---
  {
    id: 'sin-assassins-promise',
    name: "Assassin's Promise",
    profession: Profession.ASSASSIN,
    attribute: Attribute.DEADLY_ARTS,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Assassin%27s_Promise',
    bosses: [
      {
        name: 'Xuekao, the Deceptive',
        area: 'Pongmei Valley',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Xuekao,_the_Deceptive',
        mapUrl: 'https://wiki.guildwars.com/images/0/0c/Xuekao,_the_Deceptive_map.jpg'
      },
      {
        name: 'Rekoff Broodmother',
        area: 'Riven Earth',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Rekoff_Broodmother',
        mapUrl: 'https://wiki.guildwars.com/images/a/ab/Rekoff_Broodmother_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (5...13...15 seconds.) You gain 5...17...20 Energy and all your skills recharge if target foe dies.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/8/80/Assassin%27s_Promise.jpg/50px-Assassin%27s_Promise.jpg'
  },
  {
    id: 'sin-mark-of-insecurity',
    name: 'Mark of Insecurity',
    profession: Profession.ASSASSIN,
    attribute: Attribute.DEADLY_ARTS,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Mark_of_Insecurity',
    bosses: [
      {
        name: 'Chimor the Lightblooded',
        area: 'Nightfallen Jahai',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chimor_the_Lightblooded',
        mapUrl: 'https://wiki.guildwars.com/images/3/36/Chimor_the_Lightblooded_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (5...21...25 seconds.) Causes 1...3...3 Health degeneration. Enchantments and stances expire 30...70...80% faster on target foe. Disables your non-Assassin skills (10 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/2/24/Mark_of_Insecurity.jpg/50px-Mark_of_Insecurity.jpg'
  },
  {
    id: 'sin-shadow-prison',
    name: 'Shadow Prison',
    profession: Profession.ASSASSIN,
    attribute: Attribute.DEADLY_ARTS,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Shadow_Prison',
    bosses: [
      {
        name: 'Ardeh the Quick',
        area: "Joko's Domain",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ardeh_the_Quick',
        mapUrl: 'https://wiki.guildwars.com/images/b/b7/Ardeh_the_Quick_map.jpg'
      },
      {
        name: 'Xien',
        area: "Oola's Lab",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Xien'
      }
    ],
    description: 'Elite Hex Spell. Shadow Step to target foe. This foe moves 66% slower (1...6...7 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/7/7f/Shadow_Prison.jpg/50px-Shadow_Prison.jpg'
  },
  {
    id: 'sin-shroud-of-silence',
    name: 'Shroud of Silence',
    profession: Profession.ASSASSIN,
    attribute: Attribute.DEADLY_ARTS,
    campaigns: [Campaign.FACTIONS, Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Shroud_of_Silence',
    bosses: [
      {
        name: 'Bound Vizu',
        area: 'Tahnnakai Temple',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bound_Vizu',
        mapUrl: 'https://wiki.guildwars.com/images/3/37/Tahnnakai_Temple_map.jpg'
      },
      {
        name: 'Silent Ancient Onata',
        area: 'Raisu Palace and explorable',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Silent_Ancient_Onata',
        mapUrl: 'https://wiki.guildwars.com/images/5/50/Silent_Ancient_Onata_map.jpg'
      },
      {
        name: 'Bound Hao Li',
        area: 'Domain of Fear (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bound_Hao_Li',
        mapUrl: 'https://wiki.guildwars.com/images/3/3e/A_History_of_Violence_map.jpg'
      }
    ],
    description: 'Elite Touch Hex Spell. (1...5...6 second[s].) Target foe cannot cast spells. Your spells are disabled for 15 seconds.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/d0/Shroud_of_Silence.jpg/50px-Shroud_of_Silence.jpg'
  },
  {
    id: 'sin-siphon-strength',
    name: 'Siphon Strength',
    profession: Profession.ASSASSIN,
    attribute: Attribute.DEADLY_ARTS,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Siphon_Strength',
    bosses: [
      {
        name: 'Ssaresh Rattler',
        area: 'Maishang Hills',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ssaresh_Rattler',
        mapUrl: 'https://wiki.guildwars.com/images/0/05/Ssaresh_Rattler_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (5...17...20 seconds.) Target foe deals -5...41...50 attack damage. You have +50% chance to land a critical hit on this foe.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/6/64/Siphon_Strength.jpg/50px-Siphon_Strength.jpg'
  },
  {
    id: 'sin-way-of-the-empty-palm',
    name: 'Way of the Empty Palm',
    profession: Profession.ASSASSIN,
    attribute: Attribute.DEADLY_ARTS,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Way_of_the_Empty_Palm',
    bosses: [
      {
        name: 'Ilidus of the Empty Palm',
        area: 'Boreas Seabed (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ilidus_of_the_Empty_Palm',
        mapUrl: 'https://wiki.guildwars.com/images/a/a5/Ilidus_of_the_Empty_Palm_map.jpg'
      },
      {
        name: 'Senkai, Lord of the 1,000 Daggers Guild',
        area: 'Boreas Seabed (Explorable, Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Senkai,_Lord_of_the_1,000_Daggers_Guild',
        mapUrl: 'https://wiki.guildwars.com/images/3/39/Senkai,_Lord_of_the_1,000_Daggers_Guild_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (5...17...20 seconds.) Your off-hand and dual attacks cost no Energy.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/98/Way_of_the_Empty_Palm.jpg/50px-Way_of_the_Empty_Palm.jpg'
  },

  // --- Shadow Arts ---
  {
    id: 'sin-beguiling-haze',
    name: 'Beguiling Haze',
    profession: Profession.ASSASSIN,
    attribute: Attribute.SHADOW_ARTS,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Beguiling_Haze',
    bosses: [
      {
        name: 'Warden of Saprophytes',
        area: 'Ferndale (Before Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Warden_of_Saprophytes',
        mapUrl: 'https://wiki.guildwars.com/images/b/b3/Warden_of_Saprophytes_map.jpg'
      },
      {
        name: 'Falaharn Mistwarden',
        area: 'Morostav Trail',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Falaharn_Mistwarden',
        mapUrl: 'https://wiki.guildwars.com/images/d/d4/Falaharn_Mistwarden_map.jpg'
      },
      {
        name: 'Razorfang Hazeclaw',
        area: 'Gyala Hatchery (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Razorfang_Hazeclaw',
        mapUrl: 'https://wiki.guildwars.com/images/8/86/Razorfang_Hazeclaw_map.jpg'
      }
    ],
    description: 'Elite Spell. You Shadow Step to this foe. Inflicts Dazed condition (3...8...9 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/9b/Beguiling_Haze.jpg/50px-Beguiling_Haze.jpg'
  },
  {
    id: 'sin-hidden-caltrops',
    name: 'Hidden Caltrops',
    profession: Profession.ASSASSIN,
    attribute: Attribute.SHADOW_ARTS,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Hidden_Caltrops',
    bosses: [
      {
        name: 'Admiral Kaya',
        area: 'The Floodplain of Mahnkelon',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Admiral_Kaya',
        mapUrl: 'https://wiki.guildwars.com/images/b/b7/Admiral_Kaya_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (1...8...10 seconds.) Causes 50% slower movement. End effect: inflicts Crippled condition (1...12...15 seconds). Your non-Assassin skills are disabled (3 seconds.)',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/c/c2/Hidden_Caltrops.jpg/50px-Hidden_Caltrops.jpg'
  },
  {
    id: 'sin-shadow-form',
    name: 'Shadow Form',
    profession: Profession.ASSASSIN,
    attribute: Attribute.SHADOW_ARTS,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Shadow_Form',
    bosses: [
      {
        name: 'The Afflicted Soon Kim',
        area: 'Vizunah Square, Sunjiang District (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Soon_Kim',
        mapUrl: 'https://wiki.guildwars.com/images/a/a9/The_Afflicted_Soon_Kim_map.jpg'
      },
      {
        name: 'The Afflicted Senku',
        area: 'The Eternal Grove, Unwaking Waters',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Senku'
      },
      {
        name: 'The Afflicted Huu',
        area: "Dragon's Throat",
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Huu',
        mapUrl: 'https://wiki.guildwars.com/images/d/df/The_Afflicted_Huu_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (5...18...21 seconds.) Enemy spells cannot target you. Gain 5 damage reduction for each Assassin enchantment on you. You cannot deal more than 5...21...25 damage with a single skill or attack.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/e4/Shadow_Form.jpg/50px-Shadow_Form.jpg'
  },
  {
    id: 'sin-shadow-shroud',
    name: 'Shadow Shroud',
    profession: Profession.ASSASSIN,
    attribute: Attribute.SHADOW_ARTS,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Shadow_Shroud',
    bosses: [
      {
        name: 'Shrouded Oni',
        area: 'Unwaking Waters (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shrouded_Oni',
        mapUrl: 'https://wiki.guildwars.com/images/8/8f/Shrouded_Oni_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (3...8...9 seconds.) Target foe cannot be the target of enchantments.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/c/cf/Shadow_Shroud.jpg/50px-Shadow_Shroud.jpg'
  },

  // --- No Attribute ---
  {
    id: 'sin-assault-enchantments',
    name: 'Assault Enchantments',
    profession: Profession.ASSASSIN,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Assault_Enchantments',
    bosses: [
      {
        name: 'Faveo Aggredior',
        area: 'Nightfallen Jahai',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Faveo_Aggredior',
        mapUrl: 'https://wiki.guildwars.com/images/4/4f/Faveo_Aggredior_map.jpg'
      }
    ],
    description: 'Elite Skill. Removes all enchantments. Must follow a dual attack.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/d7/Assault_Enchantments.jpg/50px-Assault_Enchantments.jpg'
  },
  {
    id: 'sin-aura-of-displacement',
    name: 'Aura of Displacement',
    profession: Profession.ASSASSIN,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Aura_of_Displacement',
    bosses: [
      {
        name: 'Urkal the Ambusher',
        area: 'Ferndale',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Urkal_the_Ambusher',
        mapUrl: 'https://wiki.guildwars.com/images/d/df/Urkal_the_Ambusher_map.jpg'
      },
      {
        name: 'Maximole',
        area: 'Ferndale (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Maximole',
        mapUrl: 'https://wiki.guildwars.com/images/a/ad/Revolt_of_the_Dredge_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. Shadow Step to target foe. End effect: return to your original location.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/b9/Aura_of_Displacement.jpg/50px-Aura_of_Displacement.jpg'
  },
  {
    id: 'sin-shadow-meld',
    name: 'Shadow Meld',
    profession: Profession.ASSASSIN,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Shadow_Meld',
    bosses: [
      {
        name: 'Lunto Sharpfoot',
        area: 'Marga Coast',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lunto_Sharpfoot',
        mapUrl: 'https://wiki.guildwars.com/images/b/b5/Lunto_Sharpfoot_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. Shadow Step to target ally. End effect: return to your original location. Cannot self-target.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/10/Shadow_Meld.jpg/50px-Shadow_Meld.jpg'
  },
  {
    id: 'sin-wastrels-collapse',
    name: "Wastrel's Collapse",
    profession: Profession.ASSASSIN,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Wastrel%27s_Collapse',
    bosses: [
      {
        name: 'Jarimiya the Unmerciful',
        area: 'Vehtendi Valley',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jarimiya_the_Unmerciful',
        mapUrl: 'https://wiki.guildwars.com/images/5/51/Jarimiya_the_Unmerciful_map.jpg'
      }
    ],
    description: 'Elite Skill. Shadow Step to target foe. Causes knock-down if target foe is not using a skill. Disables your non-dagger attack skills (10 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/5e/Wastrel%27s_Collapse.jpg/50px-Wastrel%27s_Collapse.jpg'
  }
];