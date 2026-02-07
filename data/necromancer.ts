import { EliteSkill, Profession, Campaign, Attribute } from '../types';

export const NECROMANCER_SKILLS: EliteSkill[] = [
  // --- Blood Magic ---
  {
    id: 'necro-blood-is-power',
    name: 'Blood is Power',
    profession: Profession.NECROMANCER,
    attribute: Attribute.BLOOD_MAGIC,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Blood_is_Power',
    bosses: [
      {
        name: 'Cry Darkday',
        area: 'Snake Dance',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Cry_Darkday',
        mapUrl: 'https://wiki.guildwars.com/images/2/2a/Marnta_Doomspeaker_map.jpg'
      },
      {
        name: "Chan the Dragon's Blood",
        area: 'The Undercity',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chan_the_Dragon%27s_Blood',
        mapUrl: "https://wiki.guildwars.com/images/4/40/Chan_the_Dragon's_Blood_map.jpg"
      },
      {
        name: 'Overseer Haubeh',
        area: 'Kodonur Crossroads',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Overseer_Haubeh',
        mapUrl: 'https://wiki.guildwars.com/images/c/cb/Kodonur_Crossroads_map.jpg'
      },
      {
        name: 'Taskmaster Vanahk',
        area: 'Kodonur Crossroads',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Taskmaster_Vanahk',
        mapUrl: 'https://wiki.guildwars.com/images/7/75/Taskmaster_Vanahk_map.jpg'
      },
      {
        name: 'Lieutenant Vanahk',
        area: 'Yatendi Canyons',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lieutenant_Vanahk',
        mapUrl: 'https://wiki.guildwars.com/images/f/f1/Lieutenant_Vanahk_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (10 seconds.) +3...5...6 Energy regeneration. Cannot self-target.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/2/28/Blood_is_Power.jpg/50px-Blood_is_Power.jpg'
  },
  {
    id: 'necro-cultists-fervor',
    name: "Cultist's Fervor",
    profession: Profession.NECROMANCER,
    attribute: Attribute.BLOOD_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Cultist%27s_Fervor',
    bosses: [
      {
        name: 'Cultist Milthuran',
        area: "Rhea's Crater",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Cultist_Milthuran',
        mapUrl: 'https://wiki.guildwars.com/images/f/f3/Cultist_Milthuran_map.jpg'
      },
      {
        name: 'Cultist Rajazan',
        area: 'Unwaking Waters (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Cultist_Rajazan',
        mapUrl: 'https://wiki.guildwars.com/images/f/f6/Cultist_Rajazan_map.jpg'
      },
      {
        name: 'Kyril Oathwarden',
        area: 'Morostav Trail',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kyril_Oathwarden',
        mapUrl: 'https://wiki.guildwars.com/images/1/1a/Kyril_Oathwarden_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (5 seconds plus 3 seconds more for every rank of Soul Reaping.) Your Necromancer spells cost 1...5...6 less Energy. You suffer from Bleeding (10 seconds) each time you cast a Necromancer spell.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/bc/Cultist%27s_Fervor.jpg/50px-Cultist%27s_Fervor.jpg'
  },
  {
    id: 'necro-life-transfer',
    name: 'Life Transfer',
    profession: Profession.NECROMANCER,
    attribute: Attribute.BLOOD_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Life_Transfer',
    bosses: [
      {
        name: 'Mursaat Necromancer',
        area: 'Ice Floe',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mursaat_Necromancer_(boss)',
        mapUrl: 'https://wiki.guildwars.com/images/9/90/Mursaat_bosses_in_Ice_Floe_map.jpg'
      },
      {
        name: 'Feodor the Baneful',
        area: 'Iron Mines of Moladune',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Feodor_the_Baneful',
        mapUrl: 'https://wiki.guildwars.com/images/2/2f/Iron_Mines_of_Moladune_boss_locations.jpg'
      },
      {
        name: 'Argyris the Scoundrel',
        area: 'Thunderhead Keep',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Argyris_the_Scoundrel',
        mapUrl: 'https://wiki.guildwars.com/images/5/58/THK_Dwarf_Boss_Map.jpg'
      },
      {
        name: 'Odelyn the Displeased',
        area: 'Ring of Fire',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Odelyn_the_Displeased',
        mapUrl: 'https://wiki.guildwars.com/images/2/2a/Ring_of_Fire_Mursaat_Map.jpg'
      },
      {
        name: 'Sarlic the Judge',
        area: "Abaddon's Mouth",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sarlic_the_Judge',
        mapUrl: 'https://wiki.guildwars.com/images/a/ae/Abaddons_Mouth_Mursaat_and_Jade_Map.jpg'
      },
      {
        name: 'Lugg the Malignant',
        area: "Dragon's Gullet (Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lugg_the_Malignant',
        mapUrl: 'https://wiki.guildwars.com/images/f/f3/Lugg_the_Malignant.jpg'
      },
      {
        name: 'Katye Bloodburner',
        area: 'Sacnoth Valley',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Katye_Bloodburner',
        mapUrl: 'https://wiki.guildwars.com/images/b/be/Sacnoth_Valley_Charr_Bosses_map.jpg'
      },
      {
        name: 'The Keeper',
        area: 'Cathedral of Flames',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Keeper',
        mapUrl: 'https://wiki.guildwars.com/images/f/f9/The_Keeper_map.jpg'
      },
      {
        name: 'Tanto the Grim',
        area: 'Varajar Fells (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tanto_the_Grim',
        mapUrl: 'https://wiki.guildwars.com/images/2/23/Haunted_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. Also hexes foes adjacent to target (6...11...12 second). Causes -3...7...8 Health degeneration. You have +3...7...8 Health regeneration.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/49/Life_Transfer.jpg/50px-Life_Transfer.jpg'
  },
  {
    id: 'necro-offering-of-blood',
    name: 'Offering of Blood',
    profession: Profession.NECROMANCER,
    attribute: Attribute.BLOOD_MAGIC,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Offering_of_Blood',
    bosses: [
      {
        name: 'Tonfor Copperblood',
        area: "Lornar's Pass",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tonfor_Copperblood',
        mapUrl: 'https://wiki.guildwars.com/images/0/04/Tonfor_Copperblood_map.jpg'
      },
      {
        name: 'Jollen Steelblight',
        area: 'Frozen Forest',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jollen_Steelblight',
        mapUrl: 'https://wiki.guildwars.com/images/f/fe/Frozen_Forest_Stone_Summit_bosses_map.jpg'
      },
      {
        name: 'Morgriff Shadestone',
        area: "Grenth's Footprint",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Morgriff_Shadestone',
        mapUrl: 'https://wiki.guildwars.com/images/f/fe/Grenth%27s_Footprint_bosses_map.jpg'
      },
      {
        name: 'Hormak Ironcurse',
        area: 'Ice Caves of Sorrow',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hormak_Ironcurse',
        mapUrl: 'https://wiki.guildwars.com/images/e/e4/Hormak_Ironcurse_map.jpg'
      },
      {
        name: 'Riine Windrot',
        area: 'Thunderhead Keep',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Riine_Windrot',
        mapUrl: 'https://wiki.guildwars.com/images/5/58/THK_Dwarf_Boss_Map.jpg'
      }
    ],
    description: 'Elite Spell. You gain 8...18...20 Energy.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/e6/Offering_of_Blood.jpg/50px-Offering_of_Blood.jpg'
  },
  {
    id: 'necro-order-of-the-vampire',
    name: 'Order of the Vampire',
    profession: Profession.NECROMANCER,
    attribute: Attribute.BLOOD_MAGIC,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Order_of_the_Vampire',
    bosses: [
      {
        name: 'Byssha Hisst',
        area: 'Dunes of Despair',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Byssha_Hisst',
        mapUrl: 'https://wiki.guildwars.com/images/c/cb/Dunes_of_Despair_random_boss_spawn_locations.jpg'
      },
      {
        name: 'Uussh Visshta',
        area: 'Elona Reach',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Uussh_Visshta',
        mapUrl: 'https://wiki.guildwars.com/images/9/95/Custodian_Jenus_location.jpg'
      },
      {
        name: 'Hessper Sasso',
        area: 'Thirsty River',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hessper_Sasso',
        mapUrl: 'https://wiki.guildwars.com/images/3/39/Hessper_Sasso_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. Enchants all party members (5 seconds.) These party members steal 3...13...16 Health with each physical damage attack. Party members under another Necromancer enchantment are not affected.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/39/Order_of_the_Vampire.jpg/50px-Order_of_the_Vampire.jpg'
  },
  {
    id: 'necro-ravenous-gaze',
    name: 'Ravenous Gaze',
    profession: Profession.NECROMANCER,
    attribute: Attribute.BLOOD_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Ravenous_Gaze',
    bosses: [
      {
        name: "Moa'vu'Kaal",
        area: 'Issnur Isles (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Moa%27vu%27Kaal',
        mapUrl: "https://wiki.guildwars.com/images/3/3f/Moa'vu'Kaal_map.jpg"
      },
      {
        name: 'Shelboh the Ravenous',
        area: 'Jahai Bluffs',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shelboh_the_Ravenous',
        mapUrl: 'https://wiki.guildwars.com/images/d/d3/Shelboh_the_Ravenous_map.jpg'
      }
    ],
    description: 'Elite Spell. Deals 15...27...30 damage and steals 15...27...30 Health from target and nearby foes.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/40/Ravenous_Gaze.jpg/50px-Ravenous_Gaze.jpg'
  },
  {
    id: 'necro-signet-of-suffering',
    name: 'Signet of Suffering',
    profession: Profession.NECROMANCER,
    attribute: Attribute.BLOOD_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Signet_of_Suffering',
    bosses: [
      {
        name: 'Fondalz the Spiteful',
        area: 'Poisoned Outcrops',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Fondalz_the_Spiteful',
        mapUrl: 'https://wiki.guildwars.com/images/1/1c/Fondalz_the_Spiteful_map.jpg'
      },
      {
        name: 'Nehmak the Unpleasant',
        area: 'Gate of Desolation',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Nehmak_the_Unpleasant',
        mapUrl: 'https://wiki.guildwars.com/images/d/d1/Nehmak_the_Unpleasant_map.jpg'
      }
    ],
    description: 'Elite Signet. You Bleed for 6 seconds. Applies Bleeding (2...13...16 seconds) to the target of your next Necromancer skill.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/e8/Signet_of_Suffering.jpg/50px-Signet_of_Suffering.jpg'
  },
  {
    id: 'necro-soul-leech',
    name: 'Soul Leech',
    profession: Profession.NECROMANCER,
    attribute: Attribute.BLOOD_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Soul_Leech',
    bosses: [
      {
        name: 'Goss Darkweb',
        area: "Abaddon's Mouth",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Goss_Darkweb',
        mapUrl: 'https://wiki.guildwars.com/images/f/ff/Abaddon%27s_Mouth_Dryder_Boss_Map.jpg'
      },
      {
        name: 'Flesh of Destruction',
        area: "Glint's Challenge",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Flesh_of_Destruction'
      }
    ],
    description: 'Elite Hex Spell. (10 seconds.) Steal 16...67...80 Health whenever target foe casts a spell.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/0/0b/Soul_Leech.jpg/50px-Soul_Leech.jpg'
  },
  {
    id: 'necro-spoil-victor',
    name: 'Spoil Victor',
    profession: Profession.NECROMANCER,
    attribute: Attribute.BLOOD_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Spoil_Victor',
    bosses: [
      {
        name: 'Foalcrest Darkwish',
        area: 'Mourning Veil Falls',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Foalcrest_Darkwish',
        mapUrl: 'https://wiki.guildwars.com/images/d/d5/Foalcrest_Darkwish_map.jpg'
      },
      {
        name: 'Sourbeak Rotshell',
        area: 'Silent Surf',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sourbeak_Rotshell',
        mapUrl: 'https://wiki.guildwars.com/images/8/86/Sourbeak_Rotshell_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (3...13...15 seconds.) Causes 25...85...100 Health loss whenever target foe attacks or casts spells on a creature with less Health.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/7/76/Spoil_Victor.jpg/50px-Spoil_Victor.jpg'
  },
  {
    id: 'necro-vampiric-spirit',
    name: 'Vampiric Spirit',
    profession: Profession.NECROMANCER,
    attribute: Attribute.BLOOD_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Vampiric_Spirit',
    bosses: [
      {
        name: 'Dark Fang',
        area: 'Arborstone',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Dark_Fang',
        mapUrl: 'https://wiki.guildwars.com/images/e/ee/Arborstone_map.jpg'
      },
      {
        name: 'Kaswa Webstrider',
        area: 'Arborstone (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kaswa_Webstrider',
        mapUrl: 'https://wiki.guildwars.com/images/8/87/Kaswa_Webstrider_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. Steal 5...41...50 Health from target foe. You have +5...9...10 Health regeneration (10 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/51/Vampiric_Spirit.jpg/50px-Vampiric_Spirit.jpg'
  },
  {
    id: 'necro-well-of-power',
    name: 'Well of Power',
    profession: Profession.NECROMANCER,
    attribute: Attribute.BLOOD_MAGIC,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Well_of_Power',
    bosses: [
      {
        name: 'Nhy Darkclaw',
        area: 'Mineral Springs',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Nhy_Darkclaw',
        mapUrl: 'https://wiki.guildwars.com/images/6/65/Mineral_Springs_Avicara_bosses_map.jpg'
      }
    ],
    description: 'Elite Well Spell. (8...18...20 seconds.) Allies in this well have +1...5...6 Health regeneration and +2 Energy regeneration. Exploits a fresh corpse.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/7/74/Well_of_Power.jpg/50px-Well_of_Power.jpg'
  },

  // --- Curses ---
  {
    id: 'necro-corrupt-enchantment',
    name: 'Corrupt Enchantment',
    profession: Profession.NECROMANCER,
    attribute: Attribute.CURSES,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Corrupt_Enchantment',
    bosses: [
      {
        name: 'Hauseh the Defiler',
        area: 'The Sulfurous Wastes (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hauseh_the_Defiler',
        mapUrl: 'https://wiki.guildwars.com/images/c/c7/A_Show_of_Force_map.jpg'
      },
      {
        name: 'Razakel',
        area: 'Domain of Secrets (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Razakel',
        mapUrl: 'https://wiki.guildwars.com/images/1/14/Blueprint_of_the_Fall_map.jpg'
      },
      {
        name: 'Rebirther Jirath',
        area: 'The Ruptured Heart (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Rebirther_Jirath',
        mapUrl: 'https://wiki.guildwars.com/images/5/51/A_Tasty_Morsel_map.jpg'
      },
      {
        name: 'Tain the Corrupter',
        area: 'Yatendi Canyons',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tain_the_Corrupter',
        mapUrl: 'https://wiki.guildwars.com/images/3/38/Tain_the_Corrupter_map.jpg'
      },
      {
        name: 'Torment Weaver',
        area: "Turai's Procession (Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Torment_Weaver',
        mapUrl: 'https://wiki.guildwars.com/images/0/07/Torment_Weaver_map.jpg'
      },
      {
        name: "Murakai's Steward",
        area: 'Cathedral of Flames',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Murakai%27s_Steward',
        mapUrl: 'https://wiki.guildwars.com/images/e/ee/Murakai%27s_Steward_Cathedral_of_Flames.jpg'
      }
    ],
    description: 'Elite Hex Spell. Removes one enchantment from target foe. Removal effect: -1...7...8 Health degeneration (10 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/bd/Corrupt_Enchantment.jpg/50px-Corrupt_Enchantment.jpg'
  },
  {
    id: 'necro-depravity',
    name: 'Depravity',
    profession: Profession.NECROMANCER,
    attribute: Attribute.CURSES,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Depravity',
    bosses: [
        {
            name: 'Modti Darkflower',
            area: 'Arkjok Ward',
            wikiUrl: 'https://wiki.guildwars.com/wiki/Modti_Darkflower',
            mapUrl: 'https://wiki.guildwars.com/images/a/a8/Modti_Darkflower_map.jpg'
        }
    ],
    description: 'Elite Hex Spell. (5...17...20 seconds.) Causes 1...4...5 Energy loss whenever target foe casts a spell. One foe near your target also loses Energy.',
    iconUrl: 'https://wiki.guildwars.com/images/a/ae/Depravity.jpg'
  },
  {
    id: 'necro-feast-of-corruption',
    name: 'Feast of Corruption',
    profession: Profession.NECROMANCER,
    attribute: Attribute.CURSES,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Feast_of_Corruption',
    bosses: [
      {
        name: 'Maw the Mountain Heart',
        area: "Dreadnought's Drift, Mineral Springs, Grenth's Footprint, Snake Dance",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Maw_the_Mountain_Heart',
        mapUrl: 'https://wiki.guildwars.com/images/9/97/Maw_the_Mountain_Heart_map.jpg'
      }
    ],
    description: 'Elite Spell. Deals 16...67...80 damage to target and adjacent foes. Steal 8...34...40 Health from each hexed foe.',
    iconUrl: 'https://wiki.guildwars.com/images/4/47/Feast_of_Corruption.jpg'
  },
  {
    id: 'necro-lingering-curse',
    name: 'Lingering Curse',
    profession: Profession.NECROMANCER,
    attribute: Attribute.CURSES,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Lingering_Curse',
    bosses: [
      {
        name: "Grenth's Cursed",
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Grenth%27s_Cursed',
        mapUrl: 'https://wiki.guildwars.com/images/a/ad/Perdition_Rock_Cursed_bosses_map.jpg'
      },
      {
        name: 'Craw Stonereap',
        area: 'Arborstone (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Craw_Stonereap',
        mapUrl: 'https://wiki.guildwars.com/images/9/99/Craw_Stonereap_map.jpg'
      },
      {
        name: 'Creo Vulnero',
        area: 'Domain of Secrets',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Creo_Vulnero',
        mapUrl: 'https://wiki.guildwars.com/images/3/39/Creo_Vulnero_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (6...25...30 seconds.) Target and nearby foes have -0...2...3 Health degeneration and receive 20% less benefit from healing.',
    iconUrl: 'https://wiki.guildwars.com/images/a/a6/Lingering_Curse.jpg'
  },
  {
    id: 'necro-order-of-apostasy',
    name: 'Order of Apostasy',
    profession: Profession.NECROMANCER,
    attribute: Attribute.CURSES,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Order_of_Apostasy',
    bosses: [
      {
        name: 'The Afflicted Huan',
        area: 'The Undercity',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Huan_(necromancer)',
        mapUrl: 'https://wiki.guildwars.com/images/2/21/The_Afflicted_Huan_(necromancer)_map.jpg'
      },
      {
        name: 'The Afflicted Xi',
        area: "Dragon's Throat",
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Xi',
        mapUrl: 'https://wiki.guildwars.com/images/e/e4/The_Afflicted_Xi_map.jpg'
      },
      {
        name: 'The Afflicted Lau',
        area: 'Unwaking Waters',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Lau'
      },
      {
        name: 'The Afflicted Thu',
        area: 'Vizunah Square',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Thu'
      }
    ],
    description: 'Elite Enchantment Spell. Enchants all party members (5 seconds). These party members remove one enchantment when they deal physical damage. Removal cost: for each Monk enchantment, you lose 10...4...3% maximum Health.',
    iconUrl: 'https://wiki.guildwars.com/images/9/91/Order_of_Apostasy.jpg'
  },
  {
    id: 'necro-pain-of-disenchantment',
    name: 'Pain of Disenchantment',
    profession: Profession.NECROMANCER,
    attribute: Attribute.CURSES,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Pain_of_Disenchantment',
    bosses: [
      {
        name: 'Nehpek the Remorseless',
        area: 'Vehjin Mines',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Nehpek_the_Remorseless',
        mapUrl: 'https://wiki.guildwars.com/images/4/44/Nehpek_the_Remorseless_map.jpg'
      }
    ],
    description: 'Elite Spell. Target foe loses 1...3...3 enchantment[s]. Removal effect: that foe and all adjacent foes lose 10...82...100 Health.',
    iconUrl: 'https://wiki.guildwars.com/images/1/11/Pain_of_Disenchantment.jpg'
  },
  {
    id: 'necro-plague-signet',
    name: 'Plague Signet',
    profession: Profession.NECROMANCER,
    attribute: Attribute.CURSES,
    campaigns: [Campaign.CORE],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Plague_Signet',
    bosses: [
      {
        name: 'Allobo Dimdim',
        area: 'Spearhead Peak',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Allobo_Dimdim',
        mapUrl: 'https://wiki.guildwars.com/images/f/f7/Spearhead_Peak_Grawl_bosses_map.jpg'
      },
      {
        name: 'Allobo Dimdim',
        area: 'Talus Chute',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Allobo_Dimdim',
        mapUrl: 'https://wiki.guildwars.com/images/0/09/Talus_Chute_Grawl_bosses_map.jpg'
      },
      {
        name: 'Karobo Dimdim',
        area: "Witman's Folly",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Karobo_Dimdim',
        mapUrl: 'https://wiki.guildwars.com/images/3/38/Witman%27s_Folly_Grawl_bosses_map.jpg'
      },
      {
        name: 'Hargg Plaguebinder',
        area: 'Ferndale',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hargg_Plaguebinder',
        mapUrl: 'https://wiki.guildwars.com/images/a/ad/Hargg_Plaguebinder_map.jpg'
      },
      {
        name: 'Wioli the Infectious',
        area: 'Crystal Overlook',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Wioli_the_Infectious',
        mapUrl: 'https://wiki.guildwars.com/images/b/bc/Wioli_the_Infectious_map.jpg'
      },
      {
        name: 'Bredyss Longstride',
        area: 'Magus Stones',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bredyss_Longstride',
        mapUrl: 'https://wiki.guildwars.com/images/a/ae/Bredyss_Longstride_Location.jpg'
      }
    ],
    description: 'Elite Signet. Transfers all conditions with 100...180...200% of their remaining durations from yourself to target foe. 50% failure chance unless Curses 5 or more.',
    iconUrl: 'https://wiki.guildwars.com/images/b/b1/Plague_Signet.jpg'
  },
  {
    id: 'necro-soul-bind',
    name: 'Soul Bind',
    profession: Profession.NECROMANCER,
    attribute: Attribute.CURSES,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Soul_Bind',
    bosses: [
      {
        name: "Necromancer's Construct",
        area: 'Sunjiang District and explorable',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Necromancer%27s_Construct',
        mapUrl: "https://wiki.guildwars.com/images/d/dd/Necromancer's_Construct_map.jpg"
      }
    ],
    description: 'Elite Hex Spell. (30 seconds.) Every time target foe is healed, the healer takes 20...68...80 damage. Ends if target is suffering from a Smiting Prayers hex.',
    iconUrl: 'https://wiki.guildwars.com/images/6/6c/Soul_Bind.jpg'
  },
  {
    id: 'necro-spiteful-spirit',
    name: 'Spiteful Spirit',
    profession: Profession.NECROMANCER,
    attribute: Attribute.CURSES,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Spiteful_Spirit',
    bosses: [
      {
        name: 'Sapph Blacktracker',
        area: 'Snake Dance',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sapph_Blacktracker',
        mapUrl: 'https://wiki.guildwars.com/images/0/0e/Spawn_points_of_nightmare_bosses_in_Snake_Dance.jpg'
      },
      {
        name: 'Nighh SpineChill',
        area: 'Talus Chute',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Nighh_SpineChill',
        mapUrl: 'https://wiki.guildwars.com/images/0/0c/Nighh_SpineChill_map.jpg'
      },
      {
        name: 'Ceru Gloomrunner',
        area: 'Iron Mines of Moladune',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ceru_Gloomrunner',
        mapUrl: 'https://wiki.guildwars.com/images/9/9a/Digo_Murkstalker_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (8...18...20 seconds.) Deals 5...29...35 damage to target and adjacent foes whenever this foe attacks or uses a skill.',
    iconUrl: 'https://wiki.guildwars.com/images/0/00/Spiteful_Spirit.jpg'
  },
  {
    id: 'necro-weaken-knees',
    name: 'Weaken Knees',
    profession: Profession.NECROMANCER,
    attribute: Attribute.CURSES,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Weaken_Knees',
    bosses: [
      {
        name: 'Froth Stonereap',
        area: 'Altrumm Ruins',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Froth_Stonereap',
        mapUrl: 'https://wiki.guildwars.com/images/5/50/Froth_Stonereap_map.jpg'
      },
      {
        name: 'Rot Foulbelly',
        area: "Melandru's Hope",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Rot_Foulbelly',
        mapUrl: 'https://wiki.guildwars.com/images/b/b4/Rot_Foulbelly_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (1...13...16 second[s].) Target foe has -1...3...4 Health degeneration and takes 5...9...10 damage while moving.',
    iconUrl: 'https://wiki.guildwars.com/images/6/6b/Weaken_Knees.jpg'
  },
  {
    id: 'necro-wither',
    name: 'Wither',
    profession: Profession.NECROMANCER,
    attribute: Attribute.CURSES,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Wither',
    bosses: [
      {
        name: 'Ignis Effigia',
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ignis_Effigia',
        mapUrl: 'https://wiki.guildwars.com/images/a/ad/Perdition_Rock_Cursed_bosses_map.jpg'
      },
      {
        name: 'Evirso Sectus',
        area: "Mineral Springs (Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Evirso_Sectus',
        mapUrl: 'https://wiki.guildwars.com/images/f/f9/Evirso_Sectus_location.jpg'
      },
      {
        name: 'Ludo Ossidi',
        area: "Dragon's Gullet (Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ludo_Ossidi',
        mapUrl: 'https://wiki.guildwars.com/images/f/f1/The_Titan_Source_map.jpg'
      },
      {
        name: 'Mentanl Arobo',
        area: 'North Kryta Province (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mentanl_Arobo',
        mapUrl: 'https://wiki.guildwars.com/images/9/96/Ascalon_Settlement_Map.jpg'
      },
      {
        name: 'Desnas Hubor',
        area: 'Tangle Root (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Desnas_Hubor',
        mapUrl: 'https://wiki.guildwars.com/images/f/fa/Desnas_Hubor_location_map.jpg'
      }
    ],
    description: "Elite Hex Spell. (5...29...35 seconds.) Causes -2...4...4 Health degeneration and -1 Energy degeneration. Deals 15...63...75 damage if target foe's Energy drops to 0. Ends if this foe's Energy drops to 0.",
    iconUrl: 'https://wiki.guildwars.com/images/a/a0/Wither.jpg'
  },

  // --- Death Magic ---
  {
    id: 'necro-animate-flesh-golem',
    name: 'Animate Flesh Golem',
    profession: Profession.NECROMANCER,
    attribute: Attribute.DEATH_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Animate_Flesh_Golem',
    bosses: [
      {
        name: 'Ghial the Bone Dancer',
        area: 'Xaquang Skyway',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ghial_the_Bone_Dancer',
        mapUrl: 'https://wiki.guildwars.com/images/a/af/Ghial_the_Bone_Dancer_map.jpg'
      }
    ],
    description: 'Elite Spell. Creates a level 3...21...25 flesh golem which leaves a fresh corpse when it dies. Exploits a fresh corpse. You can have only one flesh golem at a time.',
    iconUrl: 'https://wiki.guildwars.com/images/7/71/Animate_Flesh_Golem.jpg'
  },
  {
    id: 'necro-aura-of-the-lich',
    name: 'Aura of the Lich',
    profession: Profession.NECROMANCER,
    attribute: Attribute.DEATH_MAGIC,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Aura_of_the_Lich',
    bosses: [
      {
        name: 'Maligo Libens',
        area: 'Hell\'s Precipice',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Maligo_Libens',
        mapUrl: 'https://wiki.guildwars.com/images/9/91/Hell%27s_Precipice_Titan_Boss_map.jpg'
      },
      {
        name: 'Cerris',
        area: 'Nebo Terrace (War in Kryta)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Cerris',
        mapUrl: 'https://wiki.guildwars.com/images/0/05/Cerris_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. Exploit all corpses in earshot. Animates a level 1...14...17 bone horror, plus one for each exploited corpse. You have +1 Death Magic (5...37...45 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/5/5e/Aura_of_the_Lich.jpg'
  },
  {
    id: 'necro-contagion',
    name: 'Contagion',
    profession: Profession.NECROMANCER,
    attribute: Attribute.DEATH_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Contagion',
    bosses: [
      {
        name: 'Terob Roundback',
        area: 'The Floodplain of Mahnkelon',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Terob_Roundback',
        mapUrl: 'https://wiki.guildwars.com/images/1/17/Terob_Roundback_map.jpg'
      },
      {
        name: 'Brokk Ripsnort',
        area: 'Wilderness of Bahdza (before quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Brokk_Ripsnort',
        mapUrl: 'https://wiki.guildwars.com/images/a/a1/Extinction_map.jpg'
      },
      {
        name: 'Harrk Facestab',
        area: 'Forum Highlands (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Harrk_Facestab',
        mapUrl: 'https://wiki.guildwars.com/images/4/40/Harrk_Facestab_map.jpg'
      },
      {
        name: 'Mabah Heardheart',
        area: 'Garden of Seborhin',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mabah_Heardheart',
        mapUrl: 'https://wiki.guildwars.com/images/0/09/Mabah_Heardheart_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (60 seconds.) Whenever you gain a condition, all foes in the area gain that same condition. You sacrifice 10...6...5% maximum Health each time this happens.',
    iconUrl: 'https://wiki.guildwars.com/images/1/14/Contagion.jpg'
  },
  {
    id: 'necro-discord',
    name: 'Discord',
    profession: Profession.NECROMANCER,
    attribute: Attribute.DEATH_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Discord',
    bosses: [
      {
        name: 'Sessk, Woe Spreader',
        area: 'Maishang Hills',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sessk,_Woe_Spreader',
        mapUrl: 'https://wiki.guildwars.com/images/2/2a/Sessk,_Woe_Spreader_map.jpg'
      },
      {
        name: 'Xiriss Stickleback',
        area: 'Archipelagos (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Xiriss_Stickleback',
        mapUrl: 'https://wiki.guildwars.com/images/1/19/Xiriss_Stickleback_map.jpg'
      }
    ],
    description: 'Elite Spell. Deals 30...94...110 damage. No effect unless target foe has a condition and is either hexed or enchanted.',
    iconUrl: 'https://wiki.guildwars.com/images/6/64/Discord.jpg'
  },
  {
    id: 'necro-jagged-bones',
    name: 'Jagged Bones',
    profession: Profession.NECROMANCER,
    attribute: Attribute.DEATH_MAGIC,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Jagged_Bones',
    bosses: [
      {
        name: 'Master of Misery',
        area: 'Depths of Madness',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Master_of_Misery',
        mapUrl: 'https://wiki.guildwars.com/images/b/b2/Master_of_Misery_map.jpg'
      },
      {
        name: 'Shadow of Fear',
        area: 'Nightfallen Jahai (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shadow_of_Fear_(boss)',
        mapUrl: 'https://wiki.guildwars.com/images/1/1a/Breaking_the_Broken.jpg'
      },
      {
        name: 'Emissary of Dhuum',
        area: 'Nightfallen Jahai (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Emissary_of_Dhuum_(necromancer)',
        mapUrl: 'https://wiki.guildwars.com/images/1/12/Emissary_of_Dhuum_(necromancer)_map.jpg'
      },
      {
        name: 'Avarr the Fallen',
        area: 'Jaga Moraine',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Avarr_the_Fallen',
        mapUrl: 'https://wiki.guildwars.com/images/0/02/Avarr_the_Fallen_map.jpg'
      },
      {
        name: 'Taskmaster Bellok',
        area: 'Vloxen Excavations level 2',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Taskmaster_Bellok'
      },
      {
        name: 'The Master',
        area: 'Cathedral of Flames',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Master',
        mapUrl: 'https://wiki.guildwars.com/images/f/f0/The_Master_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (60 seconds.) When target undead servant dies, it is replaced by a level 0...12...15 jagged horror that inflicts Bleeding with attacks.',
    iconUrl: 'https://wiki.guildwars.com/images/8/85/Jagged_Bones.jpg'
  },
  {
    id: 'necro-order-of-undeath',
    name: 'Order of Undeath',
    profession: Profession.NECROMANCER,
    attribute: Attribute.DEATH_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Order_of_Undeath',
    bosses: [
      {
        name: 'Bohdabi the Destructive',
        area: 'The Sulfurous Wastes',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bohdabi_the_Destructive',
        mapUrl: 'https://wiki.guildwars.com/images/4/47/Bohdabi_the_Destructive_map.jpg'
      }
    ],
    description: 'Elite Spell. (5 seconds.) Your undead servants deal +3...13...16 damage. You lose 2% of your maximum Health whenever your servants hit.',
    iconUrl: 'https://wiki.guildwars.com/images/6/6e/Order_of_Undeath.jpg'
  },
  {
    id: 'necro-tainted-flesh',
    name: 'Tainted Flesh',
    profession: Profession.NECROMANCER,
    attribute: Attribute.DEATH_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Tainted_Flesh',
    bosses: [
      {
        name: 'Dosakaru Fevertouch',
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Dosakaru_Fevertouch',
        mapUrl: 'https://wiki.guildwars.com/images/7/73/Perdition_Rock_Drake_bosses_map.jpg'
      },
      {
        name: 'Konrru, Tainted Stone',
        area: 'Morostav Trail',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Konrru,_Tainted_Stone',
        mapUrl: 'https://wiki.guildwars.com/images/1/16/Konrru,_Tainted_Stone_map.jpg'
      },
      {
        name: 'Lukrker Foulfist',
        area: 'Gyala Hatchery explorable',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lukrker_Foulfist',
        mapUrl: 'https://wiki.guildwars.com/images/b/b1/Lukrker_Foulfist_map.jpg'
      },
      {
        name: 'Jerneh Nightbringer',
        area: 'The Floodplain of Mahnkelon',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jerneh_Nightbringer',
        mapUrl: 'https://wiki.guildwars.com/images/3/31/Jerneh_Nightbringer_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (20...39...44 seconds.) Foes who hit target ally in melee become Diseased (3...13...15 seconds); this ally is immune to Disease.',
    iconUrl: 'https://wiki.guildwars.com/images/2/26/Tainted_Flesh.jpg'
  },
  {
    id: 'necro-toxic-chill',
    name: 'Toxic Chill',
    profession: Profession.NECROMANCER,
    attribute: Attribute.DEATH_MAGIC,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Toxic_Chill',
    bosses: [
      {
        name: 'Eshekibeh Longneck',
        area: 'Wilderness of Bahdza',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Eshekibeh_Longneck',
        mapUrl: 'https://wiki.guildwars.com/images/d/dc/Eshekibeh_Longneck_map.jpg'
      },
      {
        name: 'Jacado the Putrid',
        area: 'Heart of the Shiverpeaks',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jacado_the_Putrid',
        mapUrl: 'https://wiki.guildwars.com/images/e/e1/Jacado_The_Putrid_map.jpeg'
      },
      {
        name: 'Flesheater',
        area: "Rragar's Menagerie",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Flesheater',
        mapUrl: 'https://wiki.guildwars.com/images/d/d2/Flesheater_map.jpg'
      }
    ],
    description: 'Elite Spell. Deals 15...63...75 cold damage. Inflicts Poisoned condition (10...22...25 seconds) if target foe is hexed or enchanted.',
    iconUrl: 'https://wiki.guildwars.com/images/d/d4/Toxic_Chill.jpg'
  },
  {
    id: 'necro-virulence',
    name: 'Virulence',
    profession: Profession.NECROMANCER,
    attribute: Attribute.DEATH_MAGIC,
    campaigns: [Campaign.PROPHECIES, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Virulence',
    bosses: [
      {
        name: 'Unthet Rotwood',
        area: 'Frozen Forest',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Unthet_Rotwood',
        mapUrl: 'https://wiki.guildwars.com/images/c/c2/Frozen_Forest_Pinesoul_boss_locations.jpg'
      },
      {
        name: 'Jacado the Putrid',
        area: 'Heart of the Shiverpeaks',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jacado_the_Putrid',
        mapUrl: 'https://wiki.guildwars.com/images/e/e1/Jacado_The_Putrid_map.jpeg'
      }
    ],
    description: 'Elite Spell. Inflicts Disease, Poison, and Weakness conditions (3...13...15 seconds). No effect unless this foe already had a condition.',
    iconUrl: 'https://wiki.guildwars.com/images/4/4a/Virulence.jpg'
  },

  // --- Soul Reaping ---
  {
    id: 'necro-icy-veins',
    name: 'Icy Veins',
    profession: Profession.NECROMANCER,
    attribute: Attribute.SOUL_REAPING,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Icy_Veins',
    bosses: [
      {
        name: 'Bazzr Icewing',
        area: 'Drazach Thicket',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bazzr_Icewing',
        mapUrl: 'https://wiki.guildwars.com/images/2/20/Bazzr_Icewing_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (10...30...35 seconds.) Deals 20...92...110 cold damage to nearby foes if target foe dies. Initial effect: deals 10...74...90 cold damage.',
    iconUrl: 'https://wiki.guildwars.com/images/8/89/Icy_Veins.jpg'
  },
  {
    id: 'necro-reapers-mark',
    name: "Reaper's Mark",
    profession: Profession.NECROMANCER,
    attribute: Attribute.SOUL_REAPING,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Reaper%27s_Mark',
    bosses: [
      {
        name: 'Commander Sehden',
        area: 'Bahdok Caverns',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Commander_Sehden',
        mapUrl: 'https://wiki.guildwars.com/images/0/03/Commander_Sehden_map.jpg'
      },
      {
        name: 'Midshipman Beraidun',
        area: 'Cliffs of Dohjok (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Midshipman_Beraidun'
      },
      {
        name: 'Rend Ragemauler',
        area: 'Sacnoth Valley (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Rend_Ragemauler'
      },
      {
        name: 'Vyrrgis the Pestilent',
        area: 'Sacnoth Valley (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Vyrrgis_the_Pestilent'
      }
    ],
    description: 'Elite Hex Spell. (30 seconds.) Causes -1...4...5 Health degeneration. You gain 5...13...15 Energy if target foe dies while suffering from this hex.',
    iconUrl: 'https://wiki.guildwars.com/images/c/c8/Reaper%27s_Mark.jpg'
  },
  {
    id: 'necro-soul-taker',
    name: 'Soul Taker',
    profession: Profession.NECROMANCER,
    attribute: Attribute.SOUL_REAPING,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Soul_Taker',
    bosses: [
      {
        name: "Abaddon's Cursed",
        area: 'Perdition Rock (Requires Proof of Triumph)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Abaddon%27s_Cursed',
        mapUrl: 'https://wiki.guildwars.com/images/3/35/Abaddon%27s_Cursed_location.png'
      }
    ],
    description: 'Elite Enchantment Spell. (3...25...30 seconds.) Attacks deal +15...19...20 damage and sacrifice 15...19...20 health. PvE Skill. Note: Cannot be unlocked with Elite Skill Tomes.',
    iconUrl: 'https://wiki.guildwars.com/images/4/4e/Soul_Taker.jpg'
  },
  {
    id: 'necro-wail-of-doom',
    name: 'Wail of Doom',
    profession: Profession.NECROMANCER,
    attribute: Attribute.SOUL_REAPING,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Wail_of_Doom',
    bosses: [
      {
        name: 'Bound Naku',
        area: 'Tahnnakai Temple',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bound_Naku',
        mapUrl: 'https://wiki.guildwars.com/images/3/37/Tahnnakai_Temple_map.jpg'
      },
      {
        name: 'Doomed Ancient Kkraz',
        area: 'Raisu Palace and explorable',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Doomed_Ancient_Kkraz',
        mapUrl: 'https://wiki.guildwars.com/images/4/49/Doomed_Ancient_Kkraz_map.jpg'
      }
    ],
    description: "Elite Hex Spell. (1...3...4 second[s].) Target foe's attributes are 0.",
    iconUrl: 'https://wiki.guildwars.com/images/d/d8/Wail_of_Doom.jpg'
  },

  // --- No Attribute ---
  {
    id: 'necro-grenths-balance',
    name: "Grenth's Balance",
    profession: Profession.NECROMANCER,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.CORE, Campaign.FACTIONS, Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Grenth%27s_Balance',
    bosses: [
      {
        name: 'Facet of Darkness',
        area: "The Dragon's Lair",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Darkness',
        mapUrl: 'https://wiki.guildwars.com/images/a/a3/Facet_of_Darkness_map.jpg'
      },
      {
        name: 'Mragga',
        area: 'Frozen Forest (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mragga',
        mapUrl: 'https://wiki.guildwars.com/images/d/d1/Mragga_map.jpg'
      },
      {
        name: 'Grentchus Magnus',
        area: 'Quest only (Wintersday)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Grentchus_Magnus'
      },
      {
        name: 'Kuonghsang',
        area: 'Nahpui Quarter',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kuonghsang',
        mapUrl: 'https://wiki.guildwars.com/images/9/94/Kuonghsang_map.jpg'
      },
      {
        name: 'Armind the Balancer',
        area: 'Bahdok Caverns',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Armind_the_Balancer',
        mapUrl: 'https://wiki.guildwars.com/images/b/bc/Armind_the_Balancer_map.jpg'
      },
      {
        name: 'Facet of Death',
        area: 'Sparkfly Swamp',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Death',
        mapUrl: 'https://wiki.guildwars.com/images/b/b5/Facet_of_Death_map5.jpg'
      },
      {
        name: 'Facet of Death',
        area: 'Verdant Cascades (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Death',
        mapUrl: 'https://wiki.guildwars.com/images/b/b2/The_Cipher_of_Grenth_map_2.jpg'
      },
      {
        name: 'Facet of Death',
        area: 'Varajar Fells (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Death',
        mapUrl: 'https://wiki.guildwars.com/images/a/af/Facet_of_Death_map4.jpg'
      },
      {
        name: 'Facet of Death',
        area: 'Sacnoth Valley (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Death',
        mapUrl: 'https://wiki.guildwars.com/images/8/89/Facet_of_Death_possible_locations.jpg'
      }
    ],
    description: 'Elite Spell. You gain Health equal to half the difference between you and target, and this foe loses an equal amount. If this foe has less Health than you, you lose Health equal to half the difference.',
    iconUrl: 'https://wiki.guildwars.com/images/5/5e/Grenth%27s_Balance.jpg'
  }
];