import { EliteSkill, Profession, Campaign, Attribute } from '../types';

export const RANGER_SKILLS: EliteSkill[] = [
  // --- Beast Mastery ---
  {
    id: 'ranger-enraged-lunge',
    name: 'Enraged Lunge',
    profession: Profession.RANGER,
    attribute: Attribute.BEAST_MASTERY,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Enraged_Lunge',
    bosses: [
      {
        name: 'Royen Beastkeeper',
        area: 'Nahpui Quarter (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Royen_Beastkeeper',
        mapUrl: 'https://wiki.guildwars.com/images/a/a0/Royen_Beastkeeper_map.jpg'
      },
      {
        name: 'Ashlyn Spiderfriend',
        area: 'Magus Stones',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ashlyn_Spiderfriend',
        mapUrl: 'https://wiki.guildwars.com/images/9/96/Ashlyn_Spiderfriend_Location.JPG'
      }
    ],
    description: 'Elite Pet Attack. Inflicts Deep Wound condition (5...17...20 seconds) and deals +10...42...50 damage.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/43/Enraged_Lunge.jpg/50px-Enraged_Lunge.jpg'
  },
  {
    id: 'ranger-ferocious-strike',
    name: 'Ferocious Strike',
    profession: Profession.RANGER,
    attribute: Attribute.BEAST_MASTERY,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Ferocious_Strike',
    bosses: [
      {
        name: 'Thul The Bull',
        area: 'Spearhead Peak',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Thul_The_Bull',
        mapUrl: 'https://wiki.guildwars.com/images/b/bd/Thul_The_Bull_Location_map.jpg'
      },
      {
        name: 'Milodestus the Wrangler',
        area: 'Boreas Seabed (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Milodestus_the_Wrangler',
        mapUrl: 'https://wiki.guildwars.com/images/5/52/Milodestus_the_Wrangler_map.jpg'
      },
      {
        name: 'Bolten Largebelly',
        area: 'Forum Highlands',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bolten_Largebelly',
        mapUrl: 'https://wiki.guildwars.com/images/6/61/Bolten_Largebelly_map.jpg'
      },
      {
        name: 'Dzabel Land Guardian',
        area: 'The Floodplain of Mahnkelon',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Dzabel_Land_Guardian',
        mapUrl: 'https://wiki.guildwars.com/images/f/f4/Dzabel_Land_Guardian_map.jpg'
      }
    ],
    description: 'Elite Pet Attack. Deals +13...25...28 damage. You gain adrenaline and 3...9...10 energy.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/5e/Ferocious_Strike.jpg/50px-Ferocious_Strike.jpg'
  },
  {
    id: 'ranger-heal-as-one',
    name: 'Heal as One',
    profession: Profession.RANGER,
    attribute: Attribute.BEAST_MASTERY,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Heal_as_One',
    bosses: [
      {
        name: 'Salke Fur Friend',
        area: "Melandru's Hope",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Salke_Fur_Friend',
        mapUrl: 'https://wiki.guildwars.com/images/9/90/Salke_Fur_Friend_map.jpg'
      }
    ],
    description: "Elite Skill. (15 seconds.) Your pet's attacks steal 1...16...20 Health. Initial effect: heals you and your pet for 20...87...104; resurrects your pet (50% Health) if dead. If you have this equipped, your pet will travel with you.",
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/97/Heal_as_One.jpg/50px-Heal_as_One.jpg'
  },
  {
    id: 'ranger-lacerate',
    name: 'Lacerate',
    profession: Profession.RANGER,
    attribute: Attribute.BEAST_MASTERY,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Lacerate',
    bosses: [
      {
        name: 'Ryver Mossplanter',
        area: 'Arborstone (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ryver_Mossplanter',
        mapUrl: 'https://wiki.guildwars.com/images/e/e3/Ryver_Mossplanter_map.jpg'
      }
    ],
    description: 'Elite Nature Ritual. Creates a level 1...8...10 spirit (30...198...240 second lifespan). Bleeding creatures in range have -2 Health degeneration. End effect: Inflicts Bleeding condition (5...21...25 seconds) on creatures in range that have less than 90% health. Does not affect spirits.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/fa/Lacerate.jpg/50px-Lacerate.jpg'
  },
  {
    id: 'ranger-rampage-as-one',
    name: 'Rampage as One',
    profession: Profession.RANGER,
    attribute: Attribute.BEAST_MASTERY,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Rampage_as_One',
    bosses: [
      {
        name: 'Tundoss the Destroyer',
        area: 'Jahai Bluffs',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tundoss_the_Destroyer',
        mapUrl: 'https://wiki.guildwars.com/images/5/59/Tundoss_the_Destroyer_map.jpg'
      }
    ],
    description: 'Elite Skill. (3...13...15 seconds.) You and your pet attack 33% faster and move 25% faster. No effect unless your pet is alive.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/2/25/Rampage_as_One.jpg/50px-Rampage_as_One.jpg'
  },
  {
    id: 'ranger-strike-as-one',
    name: 'Strike as One',
    profession: Profession.RANGER,
    attribute: Attribute.BEAST_MASTERY,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Strike_as_One',
    bosses: [
      {
        name: 'Sergeant Behnwa',
        area: "Turai's Procession",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sergeant_Behnwa',
        mapUrl: 'https://wiki.guildwars.com/images/5/56/Sergeant_Behnwa_map.jpg'
      }
    ],
    description: 'Elite Shout. Your animal companion instantly moves to your target and inflicts Bleeding (5...13...15 seconds) with its next attack. The next time you hit with an attack, you inflict Crippled condition (5...13...15 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/43/Strike_as_One.jpg/50px-Strike_as_One.jpg'
  },

  // --- Expertise ---
  {
    id: 'ranger-archers-signet',
    name: "Archer's Signet",
    profession: Profession.RANGER,
    attribute: Attribute.EXPERTISE,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Archer%27s_Signet',
    bosses: [
      {
        name: 'Nundak The Archer',
        area: "Melandru's Hope",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Nundak_The_Archer',
        mapUrl: 'https://wiki.guildwars.com/images/4/46/Nundak_The_Archer_map.jpg'
      }
    ],
    description: 'Elite Signet. (1...19...24 second[s].) Conditions you apply while wielding a bow last 100% longer.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/b2/Archer%27s_Signet.jpg/50px-Archer%27s_Signet.jpg'
  },
  {
    id: 'ranger-escape',
    name: 'Escape',
    profession: Profession.RANGER,
    attribute: Attribute.EXPERTISE,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Escape',
    bosses: [
      {
        name: 'Whuup Buumbuul',
        area: 'Talus Chute',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Whuup_Buumbuul',
        mapUrl: 'https://wiki.guildwars.com/images/6/6f/Talus_Chute_troll_boss_spawn_locations.jpg'
      },
      {
        name: 'Whuup Buumbuul',
        area: 'Snake Dance',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Whuup_Buumbuul',
        mapUrl: 'https://wiki.guildwars.com/images/e/ec/Snake_Dance_troll_boss_spawn_locations.jpg'
      },
      {
        name: 'Stsou Swiftscale',
        area: 'Maishang Hills',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Stsou_Swiftscale',
        mapUrl: 'https://wiki.guildwars.com/images/6/68/Stsou_Swiftscale_map.jpg'
      },
      {
        name: 'Tenezel the Quick',
        area: 'Holdings of Chokhin',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tenezel_the_Quick',
        mapUrl: 'https://wiki.guildwars.com/images/a/ac/Tenezel_the_Quick_map.jpg'
      },
      {
        name: 'Tenshek Roundbody',
        area: 'The Hidden City of Ahdashim',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tenshek_Roundbody',
        mapUrl: 'https://wiki.guildwars.com/images/5/57/Tenshek_Roundbody_map.jpg'
      }
    ],
    description: 'Elite Stance. (1...7...8 second[s].) You move 33% faster and have 75% chance to block.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/a2/Escape.jpg/50px-Escape.jpg'
  },
  {
    id: 'ranger-experts-dexterity',
    name: "Expert's Dexterity",
    profession: Profession.RANGER,
    attribute: Attribute.EXPERTISE,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Expert%27s_Dexterity',
    bosses: [
      {
        name: 'Bansheh, Gatherer of Branches',
        area: 'Resplendent Makuun',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bansheh,_Gatherer_of_Branches',
        mapUrl: 'https://wiki.guildwars.com/images/5/5f/Bansheh,_Gatherer_of_Branches_map.jpg'
      }
    ],
    description: 'Elite Stance. (1...16...20 second[s].) You attack 33% faster and you gain +2 to your Marksmanship attribute.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/58/Expert%27s_Dexterity.jpg/50px-Expert%27s_Dexterity.jpg'
  },
  {
    id: 'ranger-glass-arrows',
    name: 'Glass Arrows',
    profession: Profession.RANGER,
    attribute: Attribute.EXPERTISE,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Glass_Arrows',
    bosses: [
      {
        name: 'Nandet, Glass Weaver',
        area: 'Morostav Trail',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Nandet,_Glass_Weaver',
        mapUrl: 'https://wiki.guildwars.com/images/e/ef/Nandet,_Glass_Weaver_map.jpg'
      },
      {
        name: 'Lorelle Jade Cutter',
        area: "Rhea's Crater",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lorelle_Jade_Cutter',
        mapUrl: 'https://wiki.guildwars.com/images/5/55/Lorelle_Jade_Cutter_map.jpg'
      },
      {
        name: 'Petraj the Evasive',
        area: 'Verdant Cascades',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Petraj_the_Evasive',
        mapUrl: 'https://wiki.guildwars.com/images/a/af/Petraj_the_Evasive_Location_map.jpg'
      }
    ],
    description: 'Elite Preparation. (10...30...35 seconds.) Your arrows deal +5...17...20 damage. Inflicts Bleeding condition if blocked (10...18...20 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/3a/Glass_Arrows.jpg/50px-Glass_Arrows.jpg'
  },
  {
    id: 'ranger-infuriating-heat',
    name: 'Infuriating Heat',
    profession: Profession.RANGER,
    attribute: Attribute.EXPERTISE,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Infuriating_Heat',
    bosses: [
      {
        name: 'Colonel Custo',
        area: 'Dejarin Estate',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Colonel_Custo',
        mapUrl: 'https://wiki.guildwars.com/images/3/32/Colonel_Custo_map.jpg'
      },
      {
        name: 'Captain Kuruk',
        area: "Turai's Procession (Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Captain_Kuruk'
      }
    ],
    description: 'Elite Nature Ritual. Creates a level 1...8...10 spirit (30...102...120 second lifespan). Doubles adrenaline gain for creatures in range.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/bb/Infuriating_Heat.jpg/50px-Infuriating_Heat.jpg'
  },
  {
    id: 'ranger-marksmans-wager',
    name: "Marksman's Wager",
    profession: Profession.RANGER,
    attribute: Attribute.EXPERTISE,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Marksman%27s_Wager',
    bosses: [
      {
        name: 'Custodian Jenus',
        area: 'Elona Reach',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Custodian_Jenus',
        mapUrl: 'https://wiki.guildwars.com/images/9/95/Custodian_Jenus_location.jpg'
      },
      {
        name: 'Custodian Kora',
        area: 'Dunes of Despair',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Custodian_Kora',
        mapUrl: 'https://wiki.guildwars.com/images/c/cb/Dunes_of_Despair_random_boss_spawn_locations.jpg'
      },
      {
        name: 'Custodian Phebus',
        area: 'Thirsty River',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Custodian_Phebus',
        mapUrl: 'https://wiki.guildwars.com/images/3/33/Custodian_Phebus_map.jpg'
      }
    ],
    description: 'Elite Preparation. (18 seconds.) Gain 5...9...10 Energy whenever your arrows hit. Lose 10 Energy whenever your arrows fail to hit.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/50/Marksman%27s_Wager.jpg/50px-Marksman%27s_Wager.jpg'
  },
  {
    id: 'ranger-oath-shot',
    name: 'Oath Shot',
    profession: Profession.RANGER,
    attribute: Attribute.EXPERTISE,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Oath_Shot',
    bosses: [
      {
        name: 'Jade Bow',
        area: 'Ice Floe',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jade_Bow_(boss)',
        mapUrl: 'https://wiki.guildwars.com/images/9/90/Mursaat_bosses_in_Ice_Floe_map.jpg'
      },
      {
        name: 'Hilios the Dutiful',
        area: 'Iron Mines of Moladune',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hilios_the_Dutiful',
        mapUrl: 'https://wiki.guildwars.com/images/2/2f/Iron_Mines_of_Moladune_boss_locations.jpg'
      },
      {
        name: 'Perfected Cloak',
        area: 'Thunderhead Keep',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Perfected_Cloak'
      },
      {
        name: 'Cairn the Troubling',
        area: 'Ring of Fire',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Cairn_the_Troubling',
        mapUrl: 'https://wiki.guildwars.com/images/2/2a/Ring_of_Fire_Mursaat_Map.jpg'
      },
      {
        name: 'Cairn the Relentless',
        area: "Abaddon's Mouth",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Cairn_the_Relentless',
        mapUrl: 'https://wiki.guildwars.com/images/a/ae/Abaddons_Mouth_Mursaat_and_Jade_Map.jpg'
      }
    ],
    description: 'Elite Bow Attack. Recharges all skills except Oath Shot if it hits. Disables all skills if it misses (10...5...4 seconds). 50% miss chance unless Expertise 8 or higher.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/b6/Oath_Shot.jpg/50px-Oath_Shot.jpg'
  },
  {
    id: 'ranger-practiced-stance',
    name: 'Practiced Stance',
    profession: Profession.RANGER,
    attribute: Attribute.EXPERTISE,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Practiced_Stance',
    bosses: [
      {
        name: 'Ryk Arrowwing',
        area: 'Mineral Springs',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ryk_Arrowwing',
        mapUrl: 'https://wiki.guildwars.com/images/6/65/Mineral_Springs_Avicara_bosses_map.jpg'
      }
    ],
    description: 'Elite Stance. (20...32...35 seconds.) Your preparations recharge 50% faster and last 30...246...300% longer.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/ae/Practiced_Stance.jpg/50px-Practiced_Stance.jpg'
  },
  {
    id: 'ranger-together-as-one',
    name: '"Together as One!"',
    profession: Profession.RANGER,
    attribute: Attribute.EXPERTISE,
    campaigns: [Campaign.CORE, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/%22Together_as_One!%22',
    bosses: [
      {
        name: 'Fureyst Sharpsight',
        area: 'Sacnoth Valley (Requires Proof of Triumph)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Fureyst_Sharpsight',
        mapUrl: 'https://wiki.guildwars.com/images/1/10/Fureyst_Sharpsight_location.png'
      }
    ],
    description: 'Elite Shout. (3...13...15 seconds.) All party members near you or your pet deal +5...13...15 damage [sic] and gain +1...6...7 Health regeneration. PvE Skill. Note: Cannot be unlocked with Elite Skill Tomes.',
    iconUrl: 'https://wiki.guildwars.com/images/f/ff/"Together_as_One%21".jpg'
  },
  {
    id: 'ranger-trappers-focus',
    name: "Trapper's Focus",
    profession: Profession.RANGER,
    attribute: Attribute.EXPERTISE,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Trapper%27s_Focus',
    bosses: [
      {
        name: 'Chehbaba Roottripper',
        area: 'Mount Qinkai',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chehbaba_Roottripper',
        mapUrl: 'https://wiki.guildwars.com/images/c/c4/Chehbaba_Roottripper_map.jpg'
      }
    ],
    description: 'Elite Preparation. (12...22...24 seconds.) Your trap skills are no longer easy to interrupt. You gain +0...2...2 to your Wilderness Survival attribute.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/7/7c/Trapper%27s_Focus.jpg/50px-Trapper%27s_Focus.jpg'
  },

  // --- Marksmanship ---
  {
    id: 'ranger-barrage',
    name: 'Barrage',
    profession: Profession.RANGER,
    attribute: Attribute.MARKSMANSHIP,
    campaigns: [Campaign.CORE, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Barrage',
    bosses: [
      {
        name: 'Markis',
        area: 'Iron Mines of Moladune',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Markis',
        mapUrl: 'https://wiki.guildwars.com/images/b/b4/Markis_map.jpg'
      },
      {
        name: 'Snyk the Hundred Tongue',
        area: "Abaddon's Mouth",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Snyk_the_Hundred_Tongue',
        mapUrl: 'https://wiki.guildwars.com/images/9/91/Snyk_the_Hundred_Tongue_map.jpg'
      },
      {
        name: 'Aurora',
        area: 'Boreas Seabed',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Aurora'
      },
      {
        name: 'Chkkr Thousand Tail',
        area: 'Drazach Thicket',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chkkr_Thousand_Tail',
        mapUrl: 'https://wiki.guildwars.com/images/7/73/Chkkr_Thousand_Tail_map.jpg'
      },
      {
        name: 'Commander Kubeh',
        area: 'Arkjok Ward (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Commander_Kubeh',
        mapUrl: 'https://wiki.guildwars.com/images/3/3f/Commander_Kubeh_map.jpg'
      },
      {
        name: 'Bearer of Misfortune',
        area: 'Domain of Pain',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bearer_of_Misfortune',
        mapUrl: 'https://wiki.guildwars.com/images/a/a7/Bearer_of_Misfortune_map.jpg'
      },
      {
        name: 'Docu Kindleshot',
        area: 'Bjora Marches (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Docu_Kindleshot',
        mapUrl: 'https://wiki.guildwars.com/images/6/66/Docu_Kindleshot_map.jpg'
      },
      {
        name: 'Groknar Weazlewortz',
        area: 'Grothmar Wardowns (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Groknar_Weazlewortz',
        mapUrl: 'https://wiki.guildwars.com/images/5/51/Against_the_Charr_map.jpg'
      },
      {
        name: 'Storm of Destruction',
        area: 'Riven Earth',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Storm_of_Destruction',
        mapUrl: 'https://wiki.guildwars.com/images/3/36/Storm_of_Destruction_map.jpg'
      }
    ],
    description: 'Elite Bow Attack. Deals +5...17...20 damage. Hits 5 foes adjacent to your target. All your preparations are removed.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/93/Barrage.jpg/50px-Barrage.jpg'
  },
  {
    id: 'ranger-broad-head-arrow',
    name: 'Broad Head Arrow',
    profession: Profession.RANGER,
    attribute: Attribute.MARKSMANSHIP,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Broad_Head_Arrow',
    bosses: [
      {
        name: 'The Afflicted Huan',
        area: 'Vizunah Square, Sunjiang District (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Huan_(ranger)',
        mapUrl: 'https://wiki.guildwars.com/images/b/ba/The_Afflicted_Huan_%28Ranger%29_map.jpg'
      },
      {
        name: 'The Afflicted Susei',
        area: "Dragon's Throat",
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Susei',
        mapUrl: 'https://wiki.guildwars.com/images/7/73/The_Afflicted_Susei_map.jpg'
      },
      {
        name: 'Daeman',
        area: 'Boreas Seabed',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Daeman'
      },
      {
        name: 'The Afflicted Pana',
        area: 'Unwaking Waters',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Pana'
      }
    ],
    description: 'Elite Bow Attack. Slow moving arrow. Interrupts a spell. Inflicts Dazed condition (5...17...20 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/51/Broad_Head_Arrow.jpg/50px-Broad_Head_Arrow.jpg'
  },
  {
    id: 'ranger-burning-arrow',
    name: 'Burning Arrow',
    profession: Profession.RANGER,
    attribute: Attribute.MARKSMANSHIP,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Burning_Arrow',
    bosses: [
      {
        name: 'Admiral Chiggen',
        area: 'Marga Coast',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Admiral_Chiggen',
        mapUrl: 'https://wiki.guildwars.com/images/d/d7/Admiral_Chiggen_map.jpg'
      },
      {
        name: 'Charr Warden',
        area: "Rragar's Menagerie (Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Charr_Warden',
        mapUrl: 'https://wiki.guildwars.com/images/5/54/Charr_Warden_map.jpg'
      }
    ],
    description: 'Elite Bow Attack. Deals +10...26...30 damage. Inflicts Burning condition (1...6...7 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/da/Burning_Arrow.jpg/50px-Burning_Arrow.jpg'
  },
  {
    id: 'ranger-crippling-shot',
    name: 'Crippling Shot',
    profession: Profession.RANGER,
    attribute: Attribute.MARKSMANSHIP,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Crippling_Shot',
    bosses: [
      {
        name: "Melandru's Cursed",
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Melandru%27s_Cursed',
        mapUrl: "https://wiki.guildwars.com/images/a/ad/Perdition_Rock_Cursed_bosses_map.jpg"
      },
      {
        name: 'Koren Wildrunner',
        area: 'Drakkar Lake',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Koren_Wildrunner',
        mapUrl: 'https://wiki.guildwars.com/images/b/ba/Koren_Wildrunner_map.jpg'
      },
      {
        name: 'Gallow Nooseknitter',
        area: 'Riven Earth',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Gallow_Nooseknitter',
        mapUrl: 'https://wiki.guildwars.com/images/e/ed/Gallow_Nooseknitter_Map_1.2.jpg'
      },
      {
        name: 'Brood Warden',
        area: "Arachni's Haunt",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Brood_Warden',
        mapUrl: 'https://wiki.guildwars.com/images/b/ba/Brood_Warden_map.jpg'
      }
    ],
    description: 'Elite Bow Attack. Unblockable. Inflicts Crippled condition (1...9...11 second[s]).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/da/Crippling_Shot.jpg/50px-Crippling_Shot.jpg'
  },
  {
    id: 'ranger-melandrus-shot',
    name: "Melandru's Shot",
    profession: Profession.RANGER,
    attribute: Attribute.MARKSMANSHIP,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Melandru%27s_Shot',
    bosses: [
      {
        name: 'Razortongue Frothspit',
        area: 'Archipelagos',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Razortongue_Frothspit',
        mapUrl: 'https://wiki.guildwars.com/images/7/7a/Razortongue_Frothspit_map.jpg'
      }
    ],
    description: 'Elite Bow Attack. Inflicts Bleeding (5...21...25 seconds). Deals +10...22...25 damage and inflicts Crippled (5...13...15 seconds) if target foe was moving or knocked down.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/ac/Melandru%27s_Shot.jpg/50px-Melandru%27s_Shot.jpg'
  },
  {
    id: 'ranger-prepared-shot',
    name: 'Prepared Shot',
    profession: Profession.RANGER,
    attribute: Attribute.MARKSMANSHIP,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Prepared_Shot',
    bosses: [
      {
        name: 'Seed of Suffering',
        area: 'Domain of Fear',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Seed_of_Suffering',
        mapUrl: 'https://wiki.guildwars.com/images/2/27/Seed_of_Suffering_map.jpg'
      },
      {
        name: 'Johon the Oxflinger',
        area: 'Ice Cliff Chasms',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Johon_the_Oxflinger',
        mapUrl: 'https://wiki.guildwars.com/images/6/65/Johon_the_Oxflinger_map.jpg'
      }
    ],
    description: 'Elite Bow Attack. Deals +10...22...25 damage. You gain 1...7...9 Energy if you have a preparation active.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/3d/Prepared_Shot.jpg/50px-Prepared_Shot.jpg'
  },
  {
    id: 'ranger-punishing-shot',
    name: 'Punishing Shot',
    profession: Profession.RANGER,
    attribute: Attribute.MARKSMANSHIP,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Punishing_Shot',
    bosses: [
      {
        name: 'Thul Boulderrain',
        area: 'Snake Dance',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Thul_Boulderrain',
        mapUrl: 'https://wiki.guildwars.com/images/1/14/Snake_Dance_giant_boss_locations.jpg'
      }
    ],
    description: 'Elite Bow Attack. Deals +10...18...20 damage. Interrupts an action.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/96/Punishing_Shot.jpg/50px-Punishing_Shot.jpg'
  },

  // --- Wilderness Survival ---
  {
    id: 'ranger-equinox',
    name: 'Equinox',
    profession: Profession.RANGER,
    attribute: Attribute.WILDERNESS_SURVIVAL,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Equinox',
    bosses: [
      {
        name: "Ranger's Construct",
        area: 'Sunjiang District (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ranger%27s_Construct',
        mapUrl: "https://wiki.guildwars.com/images/f/f6/Ranger's_Construct_map.jpg"
      }
    ],
    description: 'Elite Nature Ritual. Creates a level 1...8...10 spirit (30...198...240 second lifespan). Overcast-causing spells cast within range cause an additional 10 Overcast.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/db/Equinox.jpg/50px-Equinox.jpg'
  },
  {
    id: 'ranger-famine',
    name: 'Famine',
    profession: Profession.RANGER,
    attribute: Attribute.WILDERNESS_SURVIVAL,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Famine',
    bosses: [
      {
        name: 'Bound Zojun',
        area: 'Tahnnakai Temple',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bound_Zojun',
        mapUrl: 'https://wiki.guildwars.com/images/3/37/Tahnnakai_Temple_map.jpg'
      },
      {
        name: 'Famished Ancient Brrne',
        area: 'Raisu Palace (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Famished_Ancient_Brrne',
        mapUrl: 'https://wiki.guildwars.com/images/8/8f/Famished_Ancient_Brrne_map.jpg'
      }
    ],
    description: 'Elite Nature Ritual. Creates a level 1...8...10 spirit (30...150...180 lifespan). Deals 20...60...70 damage to creatures in range that reach 0 energy. Does not affect spirits.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/d4/Famine.jpg/50px-Famine.jpg'
  },
  {
    id: 'ranger-greater-conflagration',
    name: 'Greater Conflagration',
    profession: Profession.RANGER,
    attribute: Attribute.WILDERNESS_SURVIVAL,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Greater_Conflagration',
    bosses: [
      {
        name: 'Valetudo Rubor',
        area: "Hell's Precipice",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Valetudo_Rubor',
        mapUrl: 'https://wiki.guildwars.com/images/9/91/Hell%27s_Precipice_Titan_Boss_map.jpg'
      },
      {
        name: 'Staggh the Fervid',
        area: "Dragon's Gullet (Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Staggh_the_Fervid',
        mapUrl: 'https://wiki.guildwars.com/images/8/8d/Staggh_the_Fervid_DG_map.jpg'
      }
    ],
    description: 'Elite Nature Ritual. Creates a level 1...8...10 spirit (30...198...240 second lifespan). Converts physical damage to fire damage for creatures in range. Does not affect spirits.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/50/Greater_Conflagration.jpg/50px-Greater_Conflagration.jpg'
  },
  {
    id: 'ranger-incendiary-arrows',
    name: 'Incendiary Arrows',
    profession: Profession.RANGER,
    attribute: Attribute.WILDERNESS_SURVIVAL,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Incendiary_Arrows',
    bosses: [
      {
        name: 'Casses Flameweb',
        area: 'Ring of Fire',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Casses_Flameweb',
        mapUrl: 'https://wiki.guildwars.com/images/9/9b/Casses_Flameweb_map.jpg'
      }
    ],
    description: 'Elite Bow Attack. Hits 2 foes near your target and inflicts burning (1...3...3 second[s]).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/90/Incendiary_Arrows.jpg/50px-Incendiary_Arrows.jpg'
  },
  {
    id: 'ranger-melandrus-arrows',
    name: "Melandru's Arrows",
    profession: Profession.RANGER,
    attribute: Attribute.WILDERNESS_SURVIVAL,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Melandru%27s_Arrows',
    bosses: [
      {
        name: 'Resnar Mountainsight',
        area: 'Frozen Forest',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Resnar_Mountainsight',
        mapUrl: 'https://wiki.guildwars.com/images/f/fe/Frozen_Forest_Stone_Summit_bosses_map.jpg'
      },
      {
        name: 'Gargash Thornbeard',
        area: "Grenth's Footprint",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Gargash_Thornbeard',
        mapUrl: 'https://wiki.guildwars.com/images/f/fe/Grenth%27s_Footprint_bosses_map.jpg'
      },
      {
        name: 'Ulhar Stonehound',
        area: 'Thunderhead Keep',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ulhar_Stonehound',
        mapUrl: 'https://wiki.guildwars.com/images/5/58/THK_Dwarf_Boss_Map.jpg'
      },
      {
        name: 'Drago Stoneherder',
        area: "Sorrow's Furnace",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Drago_Stoneherder',
        mapUrl: 'https://wiki.guildwars.com/images/1/1f/Sorrow%27s_Furnace_map.jpg'
      },
      {
        name: 'Graygore Boulderbeard',
        area: "Sorrow's Furnace",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Graygore_Boulderbeard'
      },
      {
        name: 'Tarnok Forgerunner',
        area: "Sorrow's Furnace",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tarnok_Forgerunner',
        mapUrl: 'https://wiki.guildwars.com/images/1/1f/Sorrow%27s_Furnace_map.jpg'
      },
      {
        name: 'Taskmaster Larn',
        area: "Attack on Jalis's Camp (Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Taskmaster_Larn'
      }
    ],
    description: 'Elite Preparation. (18 seconds.) Your arrows inflict Bleeding condition (3...21...25 seconds) and deal +8...24...28 damage to enchanted foes.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/45/Melandru%27s_Arrows.jpg/50px-Melandru%27s_Arrows.jpg'
  },
  {
    id: 'ranger-melandrus-resilience',
    name: "Melandru's Resilience",
    profession: Profession.RANGER,
    attribute: Attribute.WILDERNESS_SURVIVAL,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Melandru%27s_Resilience',
    bosses: [
      {
        name: 'Facet of Nature',
        area: "The Dragon's Lair",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Nature',
        mapUrl: 'https://wiki.guildwars.com/images/f/f1/Facet_of_Nature_map.jpg'
      },
      {
        name: 'Facet of Creation',
        area: 'Alcazia Tangle (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Creation',
        mapUrl: 'https://wiki.guildwars.com/images/2/28/Facet_of_Creation_1.jpg'
      },
      {
        name: 'Facet of Creation',
        area: 'Verdant Cascades (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Creation',
        mapUrl: 'https://wiki.guildwars.com/images/2/26/Facet_of_Creation_2.jpg'
      },
      {
        name: 'Facet of Creation',
        area: 'Varajar Fells (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Creation',
        mapUrl: 'https://wiki.guildwars.com/images/0/0e/Facet_of_Creation_3.jpg'
      }
    ],
    description: 'Elite Stance. (8...18...20 seconds.) You have +4 Health regeneration and +1 Energy regeneration for each condition and hex on you.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/b0/Melandru%27s_Resilience.jpg/50px-Melandru%27s_Resilience.jpg'
  },
  {
    id: 'ranger-poison-arrow',
    name: 'Poison Arrow',
    profession: Profession.RANGER,
    attribute: Attribute.WILDERNESS_SURVIVAL,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Poison_Arrow',
    bosses: [
      {
        name: 'Kekona Pippip',
        area: 'Spearhead Peak',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kekona_Pippip',
        mapUrl: 'https://wiki.guildwars.com/images/f/f7/Spearhead_Peak_Grawl_bosses_map.jpg'
      },
      {
        name: 'Kekona Pippip',
        area: 'Talus Chute',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kekona_Pippip',
        mapUrl: 'https://wiki.guildwars.com/images/0/09/Talus_Chute_Grawl_bosses_map.jpg'
      },
      {
        name: 'Salani Pippip',
        area: "Witman's Folly",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Salani_Pippip',
        mapUrl: 'https://wiki.guildwars.com/images/3/38/Witman%27s_Folly_Grawl_bosses_map.jpg'
      },
      {
        name: 'Zalnax',
        area: 'Vloxen Excavations (Location 1)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Zalnax',
        mapUrl: 'https://wiki.guildwars.com/images/f/f4/Zalnax_map1.jpg'
      },
      {
        name: 'Zalnax',
        area: 'Vloxen Excavations (Location 2)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Zalnax',
        mapUrl: 'https://wiki.guildwars.com/images/0/0a/Zalnax_map2.jpg'
      }
    ],
    description: 'Elite Bow Attack. Inflicts Poisoned condition. (5...17...20)',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/fd/Poison_Arrow.jpg/50px-Poison_Arrow.jpg'
  },
  {
    id: 'ranger-quicksand',
    name: 'Quicksand',
    profession: Profession.RANGER,
    attribute: Attribute.WILDERNESS_SURVIVAL,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Quicksand',
    bosses: [
      {
        name: 'Koahm the Weary',
        area: 'The Shattered Ravines',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Koahm_the_Weary',
        mapUrl: 'https://wiki.guildwars.com/images/8/8a/Koahm_the_Weary_map.jpg'
      },
      {
        name: 'Commander Yamji',
        area: 'The Alkali Pan (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Commander_Yamji',
        mapUrl: 'https://wiki.guildwars.com/images/b/bc/Commander_Yamji_map.jpg'
      }
    ],
    description: 'Elite Nature Ritual. Creates a level 1...8...10 spirit (30...150...180 second lifespan). Creatures lose 1 Energy each time they attack or use a skill. Does not affect spirits.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/9a/Quicksand.jpg/50px-Quicksand.jpg'
  },
  {
    id: 'ranger-scavengers-focus',
    name: "Scavenger's Focus",
    profession: Profession.RANGER,
    attribute: Attribute.WILDERNESS_SURVIVAL,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Scavenger%27s_Focus',
    bosses: [
      {
        name: 'Rendabi Deatheater',
        area: 'The Ruptured Heart',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Rendabi_Deatheater',
        mapUrl: 'https://wiki.guildwars.com/images/3/3b/Rendabi_Deatheater_map.jpg'
      },
      {
        name: 'Beastmaster Korg',
        area: "Rragar's Menagerie",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Beastmaster_Korg',
        mapUrl: 'https://wiki.guildwars.com/images/f/f5/Beastmaster_Korg_map.jpg'
      }
    ],
    description: 'Elite Skill. (10 seconds). You gain 3...10...12 Energy if you strike a foe who has a condition.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/c/c2/Scavenger%27s_Focus.jpg/50px-Scavenger%27s_Focus.jpg'
  },
  {
    id: 'ranger-smoke-trap',
    name: 'Smoke Trap',
    profession: Profession.RANGER,
    attribute: Attribute.WILDERNESS_SURVIVAL,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Smoke_Trap',
    bosses: [
      {
        name: 'Uhiwi the Smoky',
        area: 'The Shattered Ravines',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Uhiwi_the_Smoky',
        mapUrl: 'https://wiki.guildwars.com/images/3/37/Uhiwi_the_Smoky_map.jpg'
      },
      {
        name: 'Veldrunner Centaur',
        area: 'Kodonur Crossroads',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Veldrunner_Centaur_(boss)',
        mapUrl: 'https://wiki.guildwars.com/images/2/27/Veldrunner_Centaur_(boss)_map.jpg'
      }
    ],
    description: 'Elite Trap. (90 seconds.) Inflicts Blinded and Dazed conditions (5...9...10 seconds) to nearby foes. Easily interrupted.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/f5/Smoke_Trap.jpg/50px-Smoke_Trap.jpg'
  },
  {
    id: 'ranger-spike-trap',
    name: 'Spike Trap',
    profession: Profession.RANGER,
    attribute: Attribute.WILDERNESS_SURVIVAL,
    campaigns: [Campaign.CORE],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Spike_Trap',
    bosses: [
      {
        name: 'Vulg Painbrain',
        area: 'Ring of Fire',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Vulg_Painbrain',
        mapUrl: 'https://wiki.guildwars.com/images/7/7a/Vulg_Painbrain_Location_map.jpg'
      },
      {
        name: 'Meynsang the Sadistic',
        area: 'Pongmei Valley',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Meynsang_the_Sadistic',
        mapUrl: 'https://wiki.guildwars.com/images/6/61/Meynsang_the_Sadistic_map.jpg'
      },
      {
        name: 'Vah the Crafty',
        area: 'The Alkali Pan',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Vah_the_Crafty',
        mapUrl: 'https://wiki.guildwars.com/images/4/4f/Vah_the_Crafty_map.jpg'
      }
    ],
    description: 'Elite Trap. (90 seconds.) Affects nearby foes. Every second, (for 2 seconds), this trap deals 10...34...40 piercing damage, causes knockdown, and inflicts Crippled condition (3...21...25 seconds). Easily interrupted.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/1a/Spike_Trap.jpg/50px-Spike_Trap.jpg'
  },

  // --- No Attribute ---
  {
    id: 'ranger-magebane-shot',
    name: 'Magebane Shot',
    profession: Profession.RANGER,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Magebane_Shot',
    bosses: [
      {
        name: 'Saushali the Frustrating',
        area: 'The Shattered Ravines',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Saushali_the_Frustrating',
        mapUrl: 'https://wiki.guildwars.com/images/1/1d/Saushali_the_Frustrating_map.jpg'
      },
      {
        name: "Abaddon's Adjutant",
        area: 'Nightfallen Jahai (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Abaddon%27s_Adjutant',
        mapUrl: "https://wiki.guildwars.com/images/2/22/They_Only_Come_Out_at_Night_map.jpg"
      }
    ],
    description: 'Elite Bow Attack. Interrupts an action. Interruption effect: an interrupted spell is disabled for +10 seconds. Unblockable.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/7/70/Magebane_Shot.jpg/50px-Magebane_Shot.jpg'
  },
  {
    id: 'ranger-quick-shot',
    name: 'Quick Shot',
    profession: Profession.RANGER,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.CORE],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Quick_Shot',
    bosses: [
      {
        name: 'Maxine Coldstone',
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Maxine_Coldstone',
        mapUrl: 'https://wiki.guildwars.com/images/c/c8/Perdition_Rock_Harn_and_Maxine_Coldstone_map.jpg'
      },
      {
        name: 'Inallay Splintercall',
        area: 'Morostav Trail',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Inallay_Splintercall',
        mapUrl: 'https://wiki.guildwars.com/images/6/68/Inallay_Splintercall_map.jpg'
      },
      {
        name: 'Razorjaw Longspine',
        area: 'Silent Surf',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Razorjaw_Longspine',
        mapUrl: 'https://wiki.guildwars.com/images/0/08/Razorjaw_Longspine_map.jpg'
      },
      {
        name: 'Zelnehlun Fastfoot',
        area: 'The Floodplain of Mahnkelon',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Zelnehlun_Fastfoot',
        mapUrl: 'https://wiki.guildwars.com/images/5/5c/Zelnehlun_Fastfoot_map.jpg'
      }
    ],
    description: 'Elite Bow Attack. You shoot an arrow that moves twice as fast.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/9a/Quick_Shot.jpg/50px-Quick_Shot.jpg'
  },
  {
    id: 'ranger-together-as-one',
    name: '"Together as One!"',
    profession: Profession.RANGER,
    attribute: Attribute.EXPERTISE,
    campaigns: [Campaign.CORE, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/%22Together_as_One!%22',
    bosses: [
      {
        name: 'Fureyst Sharpsight',
        area: 'Sacnoth Valley (Requires Proof of Triumph)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Fureyst_Sharpsight',
        mapUrl: 'https://wiki.guildwars.com/images/1/10/Fureyst_Sharpsight_location.png'
      }
    ],
    description: 'Elite Shout. (3...13...15 seconds.) All party members near you or your pet deal +5...13...15 damage [sic] and gain +1...6...7 Health regeneration. PvE Skill. Note: Cannot be unlocked with Elite Skill Tomes.',
    iconUrl: 'https://wiki.guildwars.com/images/f/ff/"Together_as_One%21".jpg'
  }
];