import { EliteSkill, Profession, Campaign, Attribute } from '../types';

export const RITUALIST_SKILLS: EliteSkill[] = [
  // --- Channeling Magic ---
  {
    id: 'rit-caretaker',
    name: "Caretaker's Charge",
    profession: Profession.RITUALIST,
    attribute: Attribute.CHANNELING_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Caretaker%27s_Charge',
    bosses: [
      {
        name: 'Hautoh the Pilferer',
        area: 'Domain of Secrets',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hautoh_the_Pilferer',
        mapUrl: 'https://wiki.guildwars.com/images/b/b1/Hautoh_the_Pilferer_map.jpg'
      }
    ],
    description: 'Elite Spell. Deals 20...64...75 lightning damage. You gain 5 Energy and 5...41...50 Health if you are holding an item.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/ad/Caretaker%27s_Charge.jpg/50px-Caretaker%27s_Charge.jpg'
  },
  {
    id: 'rit-clamor',
    name: 'Clamor of Souls',
    profession: Profession.RITUALIST,
    attribute: Attribute.CHANNELING_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Clamor_of_Souls',
    bosses: [
      {
        name: 'The Pain Eater',
        area: 'Drazach Thicket',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Pain_Eater_(boss)',
        mapUrl: 'https://wiki.guildwars.com/images/0/0e/The_Pain_Eater_map.jpg'
      }
    ],
    description: 'Elite Spell. Deals 10...54...65 lightning damage to target and nearby foes. You gain 10 Energy if you are within earshot of a spirit or holding a bundle item.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/4d/Clamor_of_Souls.jpg/50px-Clamor_of_Souls.jpg'
  },
  {
    id: 'rit-glaive',
    name: 'Destructive Was Glaive',
    profession: Profession.RITUALIST,
    attribute: Attribute.CHANNELING_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Destructive_Was_Glaive',
    bosses: [
      {
        name: 'Lieutenant Kayin',
        area: 'Arkjok Ward',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lieutenant_Kayin',
        mapUrl: 'https://wiki.guildwars.com/images/7/79/Lieutenant_Kayin_map.jpg'
      }
    ],
    description: 'Elite Item Spell. (30...54...60 seconds.) Your Ritualist skills have 20% armor penetration. Drop effect: deals 15...71...85 lightning damage to all foes in the area.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/41/Destructive_Was_Glaive.jpg/50px-Destructive_Was_Glaive.jpg'
  },
  {
    id: 'rit-grasping',
    name: 'Grasping Was Kuurong',
    profession: Profession.RITUALIST,
    attribute: Attribute.CHANNELING_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Grasping_Was_Kuurong',
    bosses: [
      {
        name: 'Ssyn Coiled Grasp',
        area: 'Archipelagos',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ssyn_Coiled_Grasp',
        mapUrl: 'https://wiki.guildwars.com/images/8/82/Ssyn_Coiled_Grasp_map.jpg'
      }
    ],
    description: 'Elite Item Spell. (15...51...60 seconds.) Drop effect: deal 15...63...75 damage and knocks-down all nearby foes.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/f2/Grasping_Was_Kuurong.jpg/50px-Grasping_Was_Kuurong.jpg'
  },
  {
    id: 'rit-offering',
    name: 'Offering of Spirit',
    profession: Profession.RITUALIST,
    attribute: Attribute.CHANNELING_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Offering_of_Spirit',
    bosses: [
      {
        name: 'Shakahm the Summoner',
        area: 'Domain of Secrets',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shakahm_the_Summoner',
        mapUrl: 'https://wiki.guildwars.com/images/5/55/Shakahm_the_Summoner_map.jpg'
      }
    ],
    description: 'Elite Spell. You gain 8...15...17 Energy. You do not sacrifice Health if any spirits are within earshot.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/14/Offering_of_Spirit.jpg/50px-Offering_of_Spirit.jpg'
  },
  {
    id: 'rit-signet-spirits',
    name: 'Signet of Spirits',
    profession: Profession.RITUALIST,
    attribute: Attribute.CHANNELING_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Signet_of_Spirits',
    bosses: [
      {
        name: 'Wagg Spiritspeak',
        area: 'Ferndale',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Wagg_Spiritspeak',
        mapUrl: 'https://wiki.guildwars.com/images/f/fa/Wagg_Spiritspeak_map.jpg'
      }
    ],
    description: 'Elite Signet. Creates 3 level 1...10...12 spirits (60 second lifespan). These spirits deal 5...17...20 damage with attacks.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/f7/Signet_of_Spirits.jpg/50px-Signet_of_Spirits.jpg'
  },
  {
    id: 'rit-fury',
    name: 'Weapon of Fury',
    profession: Profession.RITUALIST,
    attribute: Attribute.CHANNELING_MAGIC,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Weapon_of_Fury',
    bosses: [
      {
        name: 'Podaltur the Angry',
        area: 'Dejarin Estate',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Podaltur_the_Angry',
        mapUrl: 'https://wiki.guildwars.com/images/4/4f/Podaltur_the_Angry_map.jpg'
      },
      {
        name: 'Bohdalz the Furious',
        area: 'Vehtendi Valley',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bohdalz_the_Furious',
        mapUrl: 'https://wiki.guildwars.com/images/e/e6/Bohdalz_the_Furious_map.jpg'
      },
      {
        name: 'Shock of Destruction',
        area: 'Arbor Bay (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shock_of_Destruction',
        mapUrl: 'https://wiki.guildwars.com/images/2/2a/Shock_of_Destruction_map.jpg'
      }
    ],
    description: 'Elite Weapon Spell. (5...17...20 seconds.) 5...41...50% more adrenaline gain and +1 Energy whenever target ally hits with an attack.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/2/2d/Weapon_of_Fury.jpg/50px-Weapon_of_Fury.jpg'
  },

  // --- Communing ---
  {
    id: 'rit-ghostly',
    name: 'Signet of Ghostly Might',
    profession: Profession.RITUALIST,
    attribute: Attribute.COMMUNING,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Signet_of_Ghostly_Might',
    bosses: [
      {
        name: 'Jedeh the Mighty',
        area: 'Crystal Overlook',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jedeh_the_Mighty',
        mapUrl: 'https://wiki.guildwars.com/images/a/a7/Jedeh_the_Mighty_map.jpg'
      }
    ],
    description: 'Elite Signet. (5...17...20 seconds.) All spirits you control within earshot attack 33% faster and deal +5...9...10 damage.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/bf/Signet_of_Ghostly_Might.jpg/50px-Signet_of_Ghostly_Might.jpg'
  },
  {
    id: 'rit-wanderlust',
    name: 'Wanderlust',
    profession: Profession.RITUALIST,
    attribute: Attribute.COMMUNING,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Wanderlust',
    bosses: [
      {
        name: 'Quansong Spiritspeak',
        area: 'Tahnnakai Temple (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Quansong_Spiritspeak',
        mapUrl: 'https://wiki.guildwars.com/images/f/f9/Quansong_Spiritspeak_map.jpg'
      }
    ],
    description: 'Elite Binding Ritual. Creates a level 1...10...12 spirit (30...54...60 second lifespan). Its attacks against stationary foes cause knock-down. Knock-down cost: this spirit loses 70...54...50 Health.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/c/cb/Wanderlust.jpg/50px-Wanderlust.jpg'
  },
  {
    id: 'rit-quickening',
    name: 'Weapon of Quickening',
    profession: Profession.RITUALIST,
    attribute: Attribute.COMMUNING,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Weapon_of_Quickening',
    bosses: [
      {
        name: 'The Afflicted Hakaru',
        area: 'Vizunah Square, Pongmei Valley',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Hakaru',
        mapUrl: 'https://wiki.guildwars.com/images/6/61/The_Afflicted_Hakaru_map.jpg'
      },
      {
        name: 'The Afflicted Mei',
        area: "Dragon's Throat",
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Mei',
        mapUrl: 'https://wiki.guildwars.com/images/f/fc/The_Afflicted_Mei_map.jpg'
      },
      {
        name: 'The Afflicted Xenxo',
        area: 'Unwaking Waters, The Eternal Grove',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Xenxo'
      }
    ],
    description: 'Elite Weapon Spell. (5...21...25 seconds.) Spells and binding rituals recharge 33% faster.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/7/78/Weapon_of_Quickening.jpg/50px-Weapon_of_Quickening.jpg'
  },

  // --- Restoration Magic ---
  {
    id: 'rit-xinrae',
    name: 'Defiant Was Xinrae',
    profession: Profession.RITUALIST,
    attribute: Attribute.RESTORATION_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Defiant_Was_Xinrae',
    bosses: [
      {
        name: 'Bound Kaolai',
        area: 'Tahnnakai Temple',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bound_Kaolai',
        mapUrl: 'https://wiki.guildwars.com/images/3/37/Tahnnakai_Temple_map.jpg'
      },
      {
        name: 'Defiant Ancient Sseer',
        area: 'Raisu Palace',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Defiant_Ancient_Sseer',
        mapUrl: 'https://wiki.guildwars.com/images/a/a1/Defiant_Ancient_Sseer_map.jpg'
      }
    ],
    description: 'Elite Item Spell. (15...51...60 seconds.) You cannot lose more than 20% of your max Health from a single hit. Drop effect: steal 5...41...50 Health from nearby foes.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/3c/Defiant_Was_Xinrae.jpg/50px-Defiant_Was_Xinrae.jpg'
  },
  {
    id: 'rit-preservation',
    name: 'Preservation',
    profession: Profession.RITUALIST,
    attribute: Attribute.RESTORATION_MAGIC,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Preservation',
    bosses: [
      {
        name: 'Flower Spiritgarden',
        area: 'The Eternal Grove (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Flower_Spiritgarden',
        mapUrl: 'https://wiki.guildwars.com/images/9/95/Flower_Spiritgarden_map.jpg'
      },
      {
        name: 'Soulwhisper, Elder Guardian',
        area: 'Gyala Hatchery (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Soulwhisper%2C_Elder_Guardian',
        mapUrl: 'https://wiki.guildwars.com/images/3/3e/Soulwhisper,_Elder_Guardian_map.jpg'
      },
      {
        name: 'Fozzy Yeoryios',
        area: 'Sacnoth Valley (EotN)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Fozzy_Yeoryios',
        mapUrl: 'https://wiki.guildwars.com/images/2/2e/Fozzy_Yeoryios_map.jpg'
      }
    ],
    description: 'Elite Binding Ritual. Creates a level 1...11...14 spirit (90 second lifespan). Every 4 seconds this spirit heals one non-spirit ally for 10...94...115.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/b9/Preservation.jpg/50px-Preservation.jpg'
  },
  {
    id: 'rit-spirit-light',
    name: 'Spirit Light Weapon',
    profession: Profession.RITUALIST,
    attribute: Attribute.RESTORATION_MAGIC,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Spirit_Light_Weapon',
    bosses: [
      {
        name: 'Chkkr Brightclaw',
        area: "Melandru's Hope",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chkkr_Brightclaw',
        mapUrl: 'https://wiki.guildwars.com/images/3/35/Chkkr_Brightclaw_map.jpg'
      },
      {
        name: 'Reesou the Wanderer',
        area: 'Alcazia Tangle (EotN)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Reesou_the_Wanderer',
        mapUrl: 'https://wiki.guildwars.com/images/d/dd/Reesou_the_Wanderer_Map.jpg'
      }
    ],
    description: 'Elite Weapon Spell. (10 seconds.) Target ally gains 1...12...15 Health each second. 1...12...15 more healing per second while within earshot of a spirit.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/a3/Spirit_Light_Weapon.jpg/50px-Spirit_Light_Weapon.jpg'
  },
  {
    id: 'rit-tranquil',
    name: 'Tranquil Was Tanasen',
    profession: Profession.RITUALIST,
    attribute: Attribute.RESTORATION_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Tranquil_Was_Tanasen',
    bosses: [
      {
        name: 'Orosen, Tranquil Acolyte',
        area: 'Xaquang Skyway',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Orosen%2C_Tranquil_Acolyte',
        mapUrl: 'https://wiki.guildwars.com/images/9/93/Orosen,_Tranquil_Acolyte_map.jpg'
      }
    ],
    description: 'Elite Item Spell. (5...17...20 seconds.) You have +10...22...25 armor. You cannot be interrupted.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/34/Tranquil_Was_Tanasen.jpg/50px-Tranquil_Was_Tanasen.jpg'
  },
  {
    id: 'rit-khanhei',
    name: 'Vengeful Was Khanhei',
    profession: Profession.RITUALIST,
    attribute: Attribute.RESTORATION_MAGIC,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Vengeful_Was_Khanhei',
    bosses: [
      {
        name: 'Bazzr Dustwing',
        area: 'Mourning Veil Falls',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bazzr_Dustwing',
        mapUrl: 'https://wiki.guildwars.com/images/0/0d/Bazzr_Dustwing_map.jpg'
      },
      {
        name: 'Delic the Vengeance Seeker',
        area: "Rhea's Crater",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Delic_the_Vengeance_Seeker',
        mapUrl: 'https://wiki.guildwars.com/images/7/7a/Delic_the_Vengeance_Seeker_map.jpg'
      }
    ],
    description: 'Elite Item Spell. (5...10...11 seconds.) You steal 5...29...35 Health from every foe that hits you with an attack.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/36/Vengeful_Was_Khanhei.jpg/50px-Vengeful_Was_Khanhei.jpg'
  },
  {
    id: 'rit-remedy',
    name: 'Weapon of Remedy',
    profession: Profession.RITUALIST,
    attribute: Attribute.RESTORATION_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Weapon_of_Remedy',
    bosses: [
      {
        name: 'Alem the Unclean',
        area: 'The Sulfurous Wastes',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Alem_the_Unclean',
        mapUrl: 'https://wiki.guildwars.com/images/2/26/Alem_the_Unclean_map.jpg'
      }
    ],
    description: 'Elite Weapon Spell. (8 seconds.) The next time target ally takes damage or life steal from a foe, this ally steals 15...63...75 Health from that foe and loses 1 condition.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/18/Weapon_of_Remedy.jpg/50px-Weapon_of_Remedy.jpg'
  },
  {
    id: 'rit-xinraes-wep',
    name: "Xinrae's Weapon",
    profession: Profession.RITUALIST,
    attribute: Attribute.RESTORATION_MAGIC,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Xinrae%27s_Weapon',
    bosses: [
      {
        name: 'Consort of Ruin',
        area: 'Depths of Madness',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Consort_of_Ruin',
        mapUrl: 'https://wiki.guildwars.com/images/9/9a/Consort_of_Ruin_map.jpg'
      }
    ],
    description: "Elite Weapon Spell. (8 seconds). The next time target ally takes damage from a foe, that damage is limited to 5% of target ally's max Health and that ally steals 20...68...80 Health from that foe.",
    iconUrl: 'https://wiki.guildwars.com/images/thumb/3/33/Xinrae%27s_Weapon.jpg/50px-Xinrae%27s_Weapon.jpg'
  },

  // --- Spawning Power ---
  {
    id: 'rit-attuned',
    name: 'Attuned Was Songkai',
    profession: Profession.RITUALIST,
    attribute: Attribute.SPAWNING_POWER,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Attuned_Was_Songkai',
    bosses: [
      {
        name: 'The Skill Eater',
        area: 'Drazach Thicket',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Skill_Eater_(boss)',
        mapUrl: 'https://wiki.guildwars.com/images/3/3a/The_Skill_Eater_(boss)_map.jpg'
      }
    ],
    description: 'Elite Item Spell. (45 seconds.) Your spells and binding rituals cost -5...41...50% of the base Energy.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/2/24/Attuned_Was_Songkai.jpg/50px-Attuned_Was_Songkai.jpg'
  },
  {
    id: 'rit-consume',
    name: 'Consume Soul',
    profession: Profession.RITUALIST,
    attribute: Attribute.SPAWNING_POWER,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Consume_Soul',
    bosses: [
      {
        name: 'Tomton Spiriteater',
        area: 'Mount Qinkai',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tomton_Spiriteater',
        mapUrl: 'https://wiki.guildwars.com/images/3/31/Tomton_Spiriteater_map.JPG'
      }
    ],
    description: 'Elite Spell. Steals 5...57...70 Health. Deal 25...105...125 damage to hostile summoned creatures within earshot of target foe.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/7/70/Consume_Soul.jpg/50px-Consume_Soul.jpg'
  },
  {
    id: 'rit-reclaim',
    name: 'Reclaim Essence',
    profession: Profession.RITUALIST,
    attribute: Attribute.SPAWNING_POWER,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Reclaim_Essence',
    bosses: [
      {
        name: 'Nehjab the Parched',
        area: 'Poisoned Outcrops',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Nehjab_the_Parched',
        mapUrl: 'https://wiki.guildwars.com/images/6/69/Nehjab_the_Parched_map.jpg'
      }
    ],
    description: 'Elite Spell. All of your Spirits die. If a Spirit dies in this way, you gain 5...17...20 Energy and all of your Binding Rituals are recharged.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/bb/Reclaim_Essence.jpg/50px-Reclaim_Essence.jpg'
  },
  {
    id: 'rit-lord',
    name: 'Ritual Lord',
    profession: Profession.RITUALIST,
    attribute: Attribute.SPAWNING_POWER,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Ritual_Lord',
    bosses: [
      {
        name: 'Spiritroot Mossbeard',
        area: 'The Eternal Grove (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Spiritroot_Mossbeard',
        mapUrl: 'https://wiki.guildwars.com/images/3/3c/Spiritroot_Mossbeard_map.jpg'
      },
      {
        name: 'Whispering Ritual Lord',
        area: 'Silent Surf',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Whispering_Ritual_Lord',
        mapUrl: 'https://wiki.guildwars.com/images/e/ed/Whispering_Ritual_Lord_map.jpg'
      },
      {
        name: 'Glacial Griffon',
        area: 'Cold as Ice (Quest, EotN)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Glacial_Griffon'
      }
    ],
    description: 'Elite Skill. (5...29...35 seconds.) You have +2...4...4 to all Ritualist attributes for your next skill. If that skill is a Binding Ritual, it recharges 10...50...60% faster and Ritual Lord recharges instantly.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/15/Ritual_Lord.jpg/50px-Ritual_Lord.jpg'
  },
  {
    id: 'rit-soul-twisting',
    name: 'Soul Twisting',
    profession: Profession.RITUALIST,
    attribute: Attribute.SPAWNING_POWER,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Soul_Twisting',
    bosses: [
      {
        name: "Ritualist's Construct",
        area: 'Sunjiang District, Morostav Trail',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ritualist%27s_Construct',
        mapUrl: "https://wiki.guildwars.com/images/a/a3/Ritualist's_Construct_map.jpg"
      },
      {
        name: 'Defiant Ancient Sseer',
        area: 'Raisu Palace (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Defiant_Ancient_Sseer',
        mapUrl: 'https://wiki.guildwars.com/images/a/a1/Defiant_Ancient_Sseer_map.jpg'
      }
    ],
    description: 'Elite Skill. (5...37...45 seconds.) Your Binding Rituals cost 15 less Energy (minimum 10) and recharge instantly. Ends after 1...3...3 Binding Ritual[s].',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/2/24/Soul_Twisting.jpg/50px-Soul_Twisting.jpg'
  },
  {
    id: 'rit-channeling',
    name: 'Spirit Channeling',
    profession: Profession.RITUALIST,
    attribute: Attribute.SPAWNING_POWER,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Spirit_Channeling',
    bosses: [
      {
        name: 'Cho, Spirit Empath',
        area: 'Shenzun Tunnels',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Cho%2C_Spirit_Empath',
        mapUrl: 'https://wiki.guildwars.com/images/a/ac/Cho,_Spirit_Empath_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (12 seconds.) You have +1...5...6 Energy regeneration. Initial effect: you gain 3...10...12 Energy if you are within earshot of a spirit.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/0/0b/Spirit_Channeling.jpg/50px-Spirit_Channeling.jpg'
  },
  {
    id: 'rit-spirits-strength',
    name: "Spirit's Strength",
    profession: Profession.RITUALIST,
    attribute: Attribute.SPAWNING_POWER,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Spirit%27s_Strength',
    bosses: [
      {
        name: 'Churahm, Spirit Warrior',
        area: 'Forum Highlands',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Churahm%2C_Spirit_Warrior',
        mapUrl: 'https://wiki.guildwars.com/images/4/45/Churahm,_Spirit_Warrior_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (15...51...60 seconds.) Your attacks deal +5...29...35 damage if you are under a weapon spell.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/f9/Spirit%27s_Strength.jpg/50px-Spirit%27s_Strength.jpg'
  },
  {
    id: 'rit-zeal',
    name: "Wielder's Zeal",
    profession: Profession.RITUALIST,
    attribute: Attribute.SPAWNING_POWER,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Wielder%27s_Zeal',
    bosses: [
      {
        name: 'Captain Alsin',
        area: 'Barbarous Shore',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Captain_Alsin',
        mapUrl: 'https://wiki.guildwars.com/images/4/40/Captain_Alsin_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (10...34...40 seconds.) You gain 1...4...5 Energy whenever you cast a weapon spell.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/47/Wielder%27s_Zeal.jpg/50px-Wielder%27s_Zeal.jpg'
  },
  {
    id: 'rit-three-forges',
    name: 'Weapons of Three Forges',
    profession: Profession.RITUALIST,
    attribute: Attribute.SPAWNING_POWER,
    campaigns: [Campaign.FACTIONS, Campaign.CORE],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Weapons_of_Three_Forges',
    bosses: [
      {
        name: 'Blade Ancient Syu-Shai',
        area: 'Raisu Palace (Explorable) - Requires Proof of Triumph',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Blade_Ancient_Syu-Shai',
        mapUrl: 'https://wiki.guildwars.com/images/9/96/Blade_Ancient_Syu-Shai_location.png'
      }
    ],
    description: 'Elite Weapon Spell. (3...17...20 seconds.) Allies in earshot gain the effect of a random Weapon Spell. Allied spirits are not affected. PvE Skill',
    iconUrl: 'https://wiki.guildwars.com/images/0/08/Weapons_of_Three_Forges.jpg'
  }
];