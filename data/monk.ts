import { EliteSkill, Profession, Campaign, Attribute } from '../types';

export const MONK_SKILLS: EliteSkill[] = [
  // --- Divine Favor ---
  {
    id: 'monk-blessed',
    name: 'Blessed Light',
    profession: Profession.MONK,
    attribute: Attribute.DIVINE_FAVOR,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Blessed_Light',
    bosses: [
      {
        name: 'Amalek the Unmerciful',
        area: 'Watchtower Coast',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Amalek_the_Unmerciful',
        mapUrl: 'https://wiki.guildwars.com/images/9/91/Amalek_the_Unmerciful_map.jpg'
      },
      {
        name: 'Ssuns, Blessed of Dwayna',
        area: 'Archipelagos',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ssuns%2C_Blessed_of_Dwayna',
        mapUrl: 'https://wiki.guildwars.com/images/5/56/Ssuns,_Blessed_of_Dwayna_map.jpg'
      }
    ],
    description: 'Elite Spell. Heals for 10...114...140. Removes one condition and one hex.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/40/Blessed_Light.jpg/50px-Blessed_Light.jpg'
  },
  {
    id: 'monk-boon',
    name: 'Boon Signet',
    profession: Profession.MONK,
    attribute: Attribute.DIVINE_FAVOR,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Boon_Signet',
    bosses: [
      {
        name: 'Mungri Magicbox',
        area: 'Ferndale',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mungri_Magicbox',
        mapUrl: 'https://wiki.guildwars.com/images/f/f1/Mungri_Magicbox_map.jpg'
      }
    ],
    description: 'Elite Signet. Heals for 20...68...80. Your next Healing or Protection Prayer [sic] spell that targets an ally heals for +20...84...100 Health.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/a7/Boon_Signet.jpg/50px-Boon_Signet.jpg'
  },
  {
    id: 'monk-healer-boon',
    name: "Healer's Boon",
    profession: Profession.MONK,
    attribute: Attribute.DIVINE_FAVOR,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Healer%27s_Boon',
    bosses: [
      {
        name: 'Josinq the Whisperer',
        area: 'Resplendent Makuun',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Josinq_the_Whisperer',
        mapUrl: 'https://wiki.guildwars.com/images/1/13/Josinq_the_Whisperer_Map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (10...46...55 seconds.) Healing Prayers spells cast 50% faster and heal for 50% more.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/f6/Healer%27s_Boon.jpg/50px-Healer%27s_Boon.jpg'
  },
  {
    id: 'monk-strike',
    name: 'Judgment Strike',
    profession: Profession.MONK,
    attribute: Attribute.DIVINE_FAVOR,
    campaigns: [Campaign.NIGHTFALL, Campaign.CORE],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Judgment_Strike',
    bosses: [
      {
        name: 'Yoannh the Rebuilder',
        area: 'The Ruptured Heart (Requires Proof of Triumph)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Yoannh_the_Rebuilder',
        mapUrl: 'https://wiki.guildwars.com/images/5/50/Yoannh_the_Rebuilder_location.png'
      }
    ],
    description: 'Elite Melee Attack. Attacks target and adjacent foes for +13...27...30 Holy damage. Causes knock down on attacking foes. PvE Skill',
    iconUrl: 'https://wiki.guildwars.com/images/6/63/Judgment_Strike.jpg'
  },
  {
    id: 'monk-peace',
    name: 'Peace and Harmony',
    profession: Profession.MONK,
    attribute: Attribute.DIVINE_FAVOR,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Peace_and_Harmony',
    bosses: [
      {
        name: 'Marnta Doomspeaker',
        area: 'Snake Dance',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Marnta_Doomspeaker',
        mapUrl: 'https://wiki.guildwars.com/images/2/2a/Marnta_Doomspeaker_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. Target ally loses 0...7...9 condition[s] and hex[es]. Conditions and hexes expire 90% faster on that ally (1...3...3 second[s]). Disables your Smiting Prayers (20 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/f7/Peace_and_Harmony.jpg/50px-Peace_and_Harmony.jpg'
  },
  {
    id: 'monk-scribe',
    name: "Scribe's Insight",
    profession: Profession.MONK,
    attribute: Attribute.DIVINE_FAVOR,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Scribe%27s_Insight',
    bosses: [
      {
        name: 'Ajamahn, Servant of the Sands',
        area: 'Crystal Overlook',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ajamahn%2C_Servant_of_the_Sands',
        mapUrl: 'https://wiki.guildwars.com/images/f/f6/Ajamahn,_Servant_of_the_Sands_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (10...30...35 seconds.) You gain 3 Energy whenever you use a signet.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/c/c6/Scribe%27s_Insight.jpg/50px-Scribe%27s_Insight.jpg'
  },
  {
    id: 'monk-spellbreaker',
    name: 'Spell Breaker',
    profession: Profession.MONK,
    attribute: Attribute.DIVINE_FAVOR,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL, Campaign.CORE],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Spell_Breaker',
    bosses: [
      {
        name: 'Raptorhawk',
        area: 'Snake Dance',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Raptorhawk',
        mapUrl: 'https://wiki.guildwars.com/images/9/91/Snake_Dance_Griffon_Boss_map.jpg'
      },
      {
        name: 'Bound Karei',
        area: 'Tahnnakai Temple',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bound_Karei',
        mapUrl: 'https://wiki.guildwars.com/images/3/37/Tahnnakai_Temple_map.jpg'
      },
      {
        name: 'Untouched Ancient Ky',
        area: 'Raisu Palace',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Untouched_Ancient_Ky',
        mapUrl: 'https://wiki.guildwars.com/images/b/b2/Untouched_Ancient_Ky_map.jpg'
      },
      {
        name: 'Priest Zein Zuu',
        area: 'Nundu Bay',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Priest_Zein_Zuu'
      },
      {
        name: 'Preceptor Zunark',
        area: 'Vehjin Mines (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Preceptor_Zunark',
        mapUrl: 'https://wiki.guildwars.com/images/a/a6/Preceptor_Zunark_map.jpg'
      },
      {
        name: 'Topo the Protector',
        area: 'Depths of Madness',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Topo_the_Protector',
        mapUrl: 'https://wiki.guildwars.com/images/0/08/Topo_the_Protector_map.jpg'
      },
      {
        name: 'General Nimtak',
        area: 'Dzagonur Bastion',
        wikiUrl: 'https://wiki.guildwars.com/wiki/General_Nimtak',
        mapUrl: 'https://wiki.guildwars.com/images/1/14/Dzagonur_Bastion_map.jpg'
      },
      {
        name: 'Zadukar the Blessed',
        area: "Joko's Domain (Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Zadukar_the_Blessed',
        mapUrl: 'https://wiki.guildwars.com/images/5/52/A_deals_a_deal_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (5...15...17 seconds.) Target ally cannot be the target of enemy spells.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/0/08/Spell_Breaker.jpg/50px-Spell_Breaker.jpg'
  },
  {
    id: 'monk-unyielding',
    name: 'Unyielding Aura',
    profession: Profession.MONK,
    attribute: Attribute.DIVINE_FAVOR,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Unyielding_Aura',
    bosses: [
      {
        name: 'Ipillo Wupwup',
        area: "Witman's Folly",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ipillo_Wupwup',
        mapUrl: 'https://wiki.guildwars.com/images/3/38/Witman%27s_Folly_Grawl_bosses_map.jpg'
      },
      {
        name: 'Kaia Wupwup',
        area: 'Spearhead Peak',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kaia_Wupwup',
        mapUrl: 'https://wiki.guildwars.com/images/f/f7/Spearhead_Peak_Grawl_bosses_map.jpg'
      },
      {
        name: 'Kaia Wupwup',
        area: 'Talus Chute',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kaia_Wupwup',
        mapUrl: 'https://wiki.guildwars.com/images/0/09/Talus_Chute_Grawl_bosses_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. Your Monk spells heal for +15...51...60%. End effect: a random other party member is resurrected with full Health and Energy and teleported to your location.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/e6/Unyielding_Aura.jpg/50px-Unyielding_Aura.jpg'
  },
  {
    id: 'monk-withdraw',
    name: 'Withdraw Hexes',
    profession: Profession.MONK,
    attribute: Attribute.DIVINE_FAVOR,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Withdraw_Hexes',
    bosses: [
      {
        name: 'Hukhrah Earthslove',
        area: 'Mount Qinkai',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hukhrah_Earthslove',
        mapUrl: 'https://wiki.guildwars.com/images/e/e2/Hukhrah_Earthslove_Map.jpg'
      },
      {
        name: 'Kaykitt Hidemender',
        area: 'Verdant Cascades (EotN)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kaykitt_Hidemender',
        mapUrl: 'https://wiki.guildwars.com/images/0/0a/Kaykitt_Hidemender_map.jpg'
      }
    ],
    description: 'Elite Spell. Removes all hexes. Also affects adjacent allies. Removal cost: +20...8...5 seconds recharge for each hex removed.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/8/85/Withdraw_Hexes.jpg/50px-Withdraw_Hexes.jpg'
  },

  // --- Healing Prayers ---
  {
    id: 'monk-glimmer',
    name: 'Glimmer of Light',
    profession: Profession.MONK,
    attribute: Attribute.HEALING_PRAYERS,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Glimmer_of_Light',
    bosses: [
      {
        name: 'Chiossen, Soothing Breeze',
        area: "Turai's Procession",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chiossen%2C_Soothing_Breeze',
        mapUrl: 'https://wiki.guildwars.com/images/f/fa/Chiossen,_Soothing_Breeze_map.jpg'
      }
    ],
    description: 'Elite Spell. Heals for 10...94...115.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/e8/Glimmer_of_Light.jpg/50px-Glimmer_of_Light.jpg'
  },
  {
    id: 'monk-covenant',
    name: "Healer's Covenant",
    profession: Profession.MONK,
    attribute: Attribute.HEALING_PRAYERS,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Healer%27s_Covenant',
    bosses: [
      {
        name: 'Bringer of Deceit',
        area: 'Domain of Pain',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bringer_of_Deceit',
        mapUrl: 'https://wiki.guildwars.com/images/2/2b/Bringer_of_Deceit_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. Your Healing Prayers spells cost 1...3...3 less Energy. These spells heal for 25% less.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/9c/Healer%27s_Covenant.jpg/50px-Healer%27s_Covenant.jpg'
  },
  {
    id: 'monk-burst',
    name: 'Healing Burst',
    profession: Profession.MONK,
    attribute: Attribute.HEALING_PRAYERS,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Healing_Burst',
    bosses: [
      {
        name: 'The Scar Eater',
        area: 'The Eternal Grove (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Scar_Eater_(boss)',
        mapUrl: 'https://wiki.guildwars.com/images/3/3a/The_Scar_Eater_map.jpg'
      },
      {
        name: 'Incetol, Devout of Depths',
        area: "Rhea's Crater",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Incetol%2C_Devout_of_Depths',
        mapUrl: 'https://wiki.guildwars.com/images/e/e1/Incetol,_Devout_of_Depths_map.jpg'
      }
    ],
    description: 'Elite Spell. Heals for 10...130...160. Party members in earshot of your target gain Health equal to the Divine Favor bonus. Disables your Smiting Prayers (20 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/6/6d/Healing_Burst.jpg/50px-Healing_Burst.jpg'
  },
  {
    id: 'monk-healing-hands',
    name: 'Healing Hands',
    profession: Profession.MONK,
    attribute: Attribute.HEALING_PRAYERS,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Healing_Hands',
    bosses: [
      {
        name: 'Rull Browbeater',
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Rull_Browbeater',
        mapUrl: 'https://wiki.guildwars.com/images/6/60/Perdition_Rock_Hydra_and_Ettin_bosses_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (10 seconds.) Heals for 5...29...35 whenever target takes damage.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/0/0b/Healing_Hands.jpg/50px-Healing_Hands.jpg'
  },
  {
    id: 'monk-healing-light',
    name: 'Healing Light',
    profession: Profession.MONK,
    attribute: Attribute.HEALING_PRAYERS,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Healing_Light',
    bosses: [
      {
        name: 'KaySey Stormray',
        area: 'Archipelagos',
        wikiUrl: 'https://wiki.guildwars.com/wiki/KaySey_Stormray',
        mapUrl: 'https://wiki.guildwars.com/images/7/77/KaySey_Stormray_map.jpg'
      },
      {
        name: 'Elmohr Snowmender',
        area: 'Blood Washes Blood (EotN)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Elmohr_Snowmender',
        mapUrl: 'https://wiki.guildwars.com/images/9/96/Elmohr_Snowmender_map.jpg'
      }
    ],
    description: 'Elite Spell. Heals for 40...88...100. You gain 1...3...3 Energy if target ally is enchanted.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/45/Healing_Light.jpg/50px-Healing_Light.jpg'
  },
  {
    id: 'monk-deliverance',
    name: 'Light of Deliverance',
    profession: Profession.MONK,
    attribute: Attribute.HEALING_PRAYERS,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Light_of_Deliverance',
    bosses: [
      {
        name: 'Chidehkir, Light of the Blind',
        area: 'Marga Coast',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chidehkir%2C_Light_of_the_Blind',
        mapUrl: 'https://wiki.guildwars.com/images/c/c0/Chidehkir,_Light_of_the_Blind_map.jpg'
      },
      {
        name: 'Kehmak the Tranquil',
        area: 'Moddok Crevice',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kehmak_the_Tranquil',
        mapUrl: 'https://wiki.guildwars.com/images/6/64/Kehmak_the_Tranquil_Location.png'
      }
    ],
    description: 'Elite Spell. Heals entire party for 5...57...70.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/1f/Light_of_Deliverance.jpg/50px-Light_of_Deliverance.jpg'
  },
  {
    id: 'monk-word-healing',
    name: 'Word of Healing',
    profession: Profession.MONK,
    attribute: Attribute.HEALING_PRAYERS,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL, Campaign.EOTN, Campaign.CORE],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Word_of_Healing',
    bosses: [
      {
        name: 'Priest of Menzies',
        area: 'Fissure of Woe',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Priest_of_Menzies',
        mapUrl: 'https://wiki.guildwars.com/images/5/51/Army_of_Darkness_map.jpg'
      },
      {
        name: 'Dassk Arossyss',
        area: 'Dunes of Despair',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Dassk_Arossyss',
        mapUrl: 'https://wiki.guildwars.com/images/c/cb/Dunes_of_Despair_random_boss_spawn_locations.jpg'
      },
      {
        name: 'Wissper Inssani',
        area: 'Elona Reach',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Wissper_Inssani',
        mapUrl: 'https://wiki.guildwars.com/images/9/95/Custodian_Jenus_location.jpg'
      },
      {
        name: 'Josso Essher',
        area: 'Thirsty River',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Josso_Essher',
        mapUrl: 'https://wiki.guildwars.com/images/9/96/Josso_Essher_map.jpg'
      },
      {
        name: 'Ziinfaun Lifeforce',
        area: 'Xaquang Skyway',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ziinfaun_Lifeforce',
        mapUrl: 'https://wiki.guildwars.com/images/8/88/Ziinfaun_Lifeforce_map.jpg'
      },
      {
        name: 'Hahan, Faithful Protector',
        area: 'Garden of Seborhin',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hahan%2C_Faithful_Protector',
        mapUrl: 'https://wiki.guildwars.com/images/e/e3/Hahan%2C_Faithful_Protector_map.jpg'
      },
      {
        name: 'Flannuss Broadwing',
        area: 'Arbor Bay (EotN)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Flannuss_Broadwing',
        mapUrl: 'https://wiki.guildwars.com/images/a/ad/Flannuss_Broadwing_map.png'
      }
    ],
    description: 'Elite Spell. Heals for 5...81...100. Heals for 30...98...115 more if target ally is below 50% Health.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/17/Word_of_Healing.jpg/50px-Word_of_Healing.jpg'
  },

  // --- Protection Prayers ---
  {
    id: 'monk-air',
    name: 'Air of Enchantment',
    profession: Profession.MONK,
    attribute: Attribute.PROTECTION_PRAYERS,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Air_of_Enchantment',
    bosses: [
      {
        name: 'Jayne Forestlight',
        area: 'The Eternal Grove (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jayne_Forestlight',
        mapUrl: 'https://wiki.guildwars.com/images/6/64/Jayne_Forestlight_map.jpg'
      },
      {
        name: 'Miella Lightwing',
        area: 'Silent Surf',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Miella_Lightwing',
        mapUrl: 'https://wiki.guildwars.com/images/e/ef/Miella_Lightwing_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (4...9...10 seconds.) Enchantments cast on target ally cost 5 less Energy (minimum 1 Energy). Cannot self-target.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/bb/Air_of_Enchantment.jpg/50px-Air_of_Enchantment.jpg'
  },
  {
    id: 'monk-amity',
    name: 'Amity',
    profession: Profession.MONK,
    attribute: Attribute.PROTECTION_PRAYERS,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Amity',
    bosses: [
      {
        name: 'Pravus Obsideo',
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Pravus_Obsideo',
        mapUrl: 'https://wiki.guildwars.com/images/a/ad/Perdition_Rock_Cursed_bosses_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (4...10...12 seconds.) Foes adjacent to you cannot attack. Ends on any foes that take damage.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/ee/Amity.jpg/50px-Amity.jpg'
  },
  {
    id: 'monk-aura-faith',
    name: 'Aura of Faith',
    profession: Profession.MONK,
    attribute: Attribute.PROTECTION_PRAYERS,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Aura_of_Faith',
    bosses: [
      {
        name: 'Demetrios the Enduring',
        area: 'Thunderhead Keep',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Demetrios_the_Enduring'
      },
      {
        name: 'Mursaat Monk',
        area: 'Ice Floe',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mursaat_Monk_(boss)',
        mapUrl: 'https://wiki.guildwars.com/images/d/de/Mursaat_Monk_(boss)_map.jpg'
      },
      {
        name: 'Coventina the Matron',
        area: 'Ring of Fire',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Coventina_the_Matron',
        mapUrl: 'https://wiki.guildwars.com/images/2/2a/Ring_of_Fire_Mursaat_Map.jpg'
      },
      {
        name: 'Willa the Unpleasant',
        area: "Abaddon's Mouth",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Willa_the_Unpleasant',
        mapUrl: 'https://wiki.guildwars.com/images/a/ae/Abaddons_Mouth_Mursaat_and_Jade_Map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (3 seconds.) Target ally gains 50...90...100% more Health when healed and takes 5...41...50% less damage.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/f/f7/Aura_of_Faith.jpg/50px-Aura_of_Faith.jpg'
  },
  {
    id: 'monk-divert',
    name: 'Divert Hexes',
    profession: Profession.MONK,
    attribute: Attribute.PROTECTION_PRAYERS,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Divert_Hexes',
    bosses: [
      {
        name: 'Amiresh the Pious',
        area: 'The Alkali Pan',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Amiresh_the_Pious',
        mapUrl: 'https://wiki.guildwars.com/images/4/41/Amiresh_the_Pious_map.jpg'
      }
    ],
    description: 'Elite Spell. Removes 1...3...3 hex[es]. For each hex removed, target ally loses one condition and gains 15...63...75 Health.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/e7/Divert_Hexes.jpg/50px-Divert_Hexes.jpg'
  },
  {
    id: 'monk-life-barrier',
    name: 'Life Barrier',
    profession: Profession.MONK,
    attribute: Attribute.PROTECTION_PRAYERS,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Life_Barrier',
    bosses: [
      {
        name: 'Esnhal Hardwood',
        area: 'Frozen Forest',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Esnhal_Hardwood',
        mapUrl: 'https://wiki.guildwars.com/images/c/c2/Frozen_Forest_Pinesoul_boss_locations.jpg'
      },
      {
        name: 'Quickroot',
        area: "Lornar's Pass",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Quickroot',
        mapUrl: 'https://wiki.guildwars.com/images/6/66/Lornar%27s_Pass_Pinesoul_boss_locations.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. Reduces damage by 20...44...50%. Cannot self-target. If your Health is below 50% when target takes damage, Life Barrier ends.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/c/ca/Life_Barrier.jpg/50px-Life_Barrier.jpg'
  },
  {
    id: 'monk-sheath',
    name: 'Life Sheath',
    profession: Profession.MONK,
    attribute: Attribute.PROTECTION_PRAYERS,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Life_Sheath',
    bosses: [
      {
        name: 'Seaguard Gita',
        area: 'Boreas Seabed',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Seaguard_Gita'
      },
      {
        name: "Monk's Construct",
        area: 'Sunjiang District',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Monk%27s_Construct',
        mapUrl: "https://wiki.guildwars.com/images/1/18/Monk's_Construct_map.jpg"
      },
      {
        name: 'Chaelse Flameshielder',
        area: 'Grothmar Wardowns (EotN)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chaelse_Flameshielder',
        mapUrl: 'https://wiki.guildwars.com/images/a/ae/Chaelse_Flameshielder_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (8 seconds.) Converts the next incoming damage or life steal (maximum 20...84...100) to healing. Initial effect: Removes 0...2...2 condition[s].',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/de/Life_Sheath.jpg/50px-Life_Sheath.jpg'
  },
  {
    id: 'monk-mark',
    name: 'Mark of Protection',
    profession: Profession.MONK,
    attribute: Attribute.PROTECTION_PRAYERS,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Mark_of_Protection',
    bosses: [
      {
        name: 'Kepkhet Marrowfeast',
        area: "Prophet's Path",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kepkhet_Marrowfeast',
        mapUrl: 'https://wiki.guildwars.com/images/0/06/Kepkhet_Marrowfeast_map.jpg'
      },
      {
        name: 'Darda Goldenchief',
        area: 'Ice Caves of Sorrow',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Darda_Goldenchief',
        mapUrl: 'https://wiki.guildwars.com/images/c/cc/Ice_Caves_of_Sorrow_map.jpg'
      },
      {
        name: 'Lokar Icemender',
        area: 'Iron Mines of Moladune',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lokar_Icemender',
        mapUrl: 'https://wiki.guildwars.com/images/9/97/Iron_Mines_of_Moladune_warrior_boss_spawn_locations.jpg'
      },
      {
        name: 'Bolis Hillshaker',
        area: 'Thunderhead Keep',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Bolis_Hillshaker',
        mapUrl: 'https://wiki.guildwars.com/images/5/58/THK_Dwarf_Boss_Map.jpg'
      },
      {
        name: 'Wroth Yakslapper',
        area: "Grenth's Footprint",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Wroth_Yakslapper',
        mapUrl: 'https://wiki.guildwars.com/images/f/fe/Grenth%27s_Footprint_bosses_map.jpg'
      },
      {
        name: 'Mesqul Ironhealer',
        area: 'Frozen Forest',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Mesqul_Ironhealer',
        mapUrl: 'https://wiki.guildwars.com/images/f/fe/Frozen_Forest_Stone_Summit_bosses_map.jpg'
      },
      {
        name: 'Gulnar Irontoe',
        area: "Sorrow's Furnace (Quest)",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Gulnar_Irontoe'
      }
    ],
    description: 'Elite Enchantment Spell. (10 seconds.) Converts incoming damage to healing (maximum 6...49...60). All your Protection Prayers are disabled (5 seconds).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/1b/Mark_of_Protection.jpg/50px-Mark_of_Protection.jpg'
  },
  {
    id: 'monk-restore-condition',
    name: 'Restore Condition',
    profession: Profession.MONK,
    attribute: Attribute.PROTECTION_PRAYERS,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Restore_Condition',
    bosses: [
      {
        name: 'Spindle Agonyvein',
        area: "Abaddon's Mouth",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Spindle_Agonyvein',
        mapUrl: 'https://wiki.guildwars.com/images/f/ff/Abaddon%27s_Mouth_Dryder_Boss_Map.jpg'
      }
    ],
    description: 'Elite Spell. Removes all conditions. Removal effect: heals for 10...58...70 for each condition removed. Cannot self-target.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/ac/Restore_Condition.jpg/50px-Restore_Condition.jpg'
  },
  {
    id: 'monk-shield-deflection',
    name: 'Shield of Deflection',
    profession: Profession.MONK,
    attribute: Attribute.PROTECTION_PRAYERS,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Shield_of_Deflection',
    bosses: [
      {
        name: 'Grun Galesurge',
        area: 'Ring of Fire',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Grun_Galesurge',
        mapUrl: 'https://wiki.guildwars.com/images/a/ae/Grun_Galesurge_Location_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (3...9...10 seconds.) 75% chance to block. +15...27...30 armor.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/1a/Shield_of_Deflection.jpg/50px-Shield_of_Deflection.jpg'
  },
  {
    id: 'monk-shield-regen',
    name: 'Shield of Regeneration',
    profession: Profession.MONK,
    attribute: Attribute.PROTECTION_PRAYERS,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL, Campaign.EOTN, Campaign.CORE],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Shield_of_Regeneration',
    bosses: [
      {
        name: 'Facet of Light',
        area: "The Dragon's Lair",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Light',
        mapUrl: 'https://wiki.guildwars.com/images/5/5a/Facet_of_Light_map.jpg'
      },
      {
        name: 'Meril Stoneweaver',
        area: 'Arborstone (Explorable)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Meril_Stoneweaver',
        mapUrl: 'https://wiki.guildwars.com/images/7/71/Meril_Stoneweaver_map.jpg'
      },
      {
        name: 'Ennsa Stoneweaver',
        area: 'Altrumm Ruins',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Ennsa_Stoneweaver',
        mapUrl: 'https://wiki.guildwars.com/images/a/a7/Ennsa_Stoneweaver_map.jpg'
      },
      {
        name: 'Banor Greenbranch',
        area: 'Holdings of Chokhin',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Banor_Greenbranch',
        mapUrl: 'https://wiki.guildwars.com/images/4/44/Banor_Greenbranch_map.jpg'
      },
      {
        name: 'Horai Wingshielder',
        area: 'Dalada Uplands (EotN)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Horai_Wingshielder',
        mapUrl: 'https://wiki.guildwars.com/images/3/36/Horai_Wingshielder_Location.jpg'
      },
      {
        name: 'Facet of Existence',
        area: 'Riven Earth (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Existence',
        mapUrl: 'https://wiki.guildwars.com/images/9/97/Image-Facet_of_Existence_map1.jpg'
      },
      {
        name: 'Facet of Existence',
        area: 'Riven Earth (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Existence',
        mapUrl: 'https://wiki.guildwars.com/images/8/85/Image-Facet_of_Existance_map2.jpg'
      },
      {
        name: 'Facet of Existence',
        area: 'Riven Earth (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Facet_of_Existence',
        mapUrl: 'https://wiki.guildwars.com/images/a/a7/Facet_of_Existance_map1.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (5...11...13 seconds.) +3...9...10 Health regeneration and +40 armor.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/eb/Shield_of_Regeneration.jpg/50px-Shield_of_Regeneration.jpg'
  },
  {
    id: 'monk-benediction',
    name: 'Zealous Benediction',
    profession: Profession.MONK,
    attribute: Attribute.PROTECTION_PRAYERS,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Zealous_Benediction',
    bosses: [
      {
        name: 'Taskmaster Sadi-Belai',
        area: 'Kodonur Crossroads',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Taskmaster_Sadi-Belai',
        mapUrl: 'https://wiki.guildwars.com/images/0/0a/Taskmaster_Sadi-Belai_map.jpg'
      },
      {
        name: 'Commander Sadi-Belai',
        area: 'Forum Highlands',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Commander_Sadi-Belai',
        mapUrl: 'https://wiki.guildwars.com/images/b/b9/Commander_Sadi-Belai_map.jpg'
      }
    ],
    description: 'Elite Spell. Heals for 30...150...180. You gain 7 Energy if target ally was below 50% Health.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/ea/Zealous_Benediction.jpg/50px-Zealous_Benediction.jpg'
  },

  // --- Smiting Prayers ---
  {
    id: 'monk-pendulum',
    name: "Balthazar's Pendulum",
    profession: Profession.MONK,
    attribute: Attribute.SMITING_PRAYERS,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Balthazar%27s_Pendulum',
    bosses: [
      {
        name: 'Riseh the Harmless',
        area: 'Bahdok Caverns',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Riseh_the_Harmless',
        mapUrl: 'https://wiki.guildwars.com/images/c/c2/Riseh_the_Harmless_map.jpg'
      },
      {
        name: 'Captain Shehnahr',
        area: 'Cliffs of Dohjok (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Captain_Shehnahr',
        mapUrl: 'https://wiki.guildwars.com/images/b/bf/A_Land_of_Heroes_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (5...9...10 seconds.) Causes knock-down to the next foe attempting to knock-down target ally.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/ec/Balthazar%27s_Pendulum.jpg/50px-Balthazar%27s_Pendulum.jpg'
  },
  {
    id: 'monk-defender',
    name: "Defender's Zeal",
    profession: Profession.MONK,
    attribute: Attribute.SMITING_PRAYERS,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Defender%27s_Zeal',
    bosses: [
      {
        name: 'Flame of Fervor',
        area: 'Domain of Fear',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Flame_of_Fervor',
        mapUrl: 'https://wiki.guildwars.com/images/8/80/Flame_of_Fervor_map.jpg'
      }
    ],
    description: 'Elite Hex Spell. (5...21...25 seconds.) You gain 2 Energy whenever target foe hits with an attack.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/b/b8/Defender%27s_Zeal.jpg/50px-Defender%27s_Zeal.jpg'
  },
  {
    id: 'monk-ray-judg',
    name: 'Ray of Judgment',
    profession: Profession.MONK,
    attribute: Attribute.SMITING_PRAYERS,
    campaigns: [Campaign.FACTIONS, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Ray_of_Judgment',
    bosses: [
      {
        name: 'The Afflicted Miju',
        area: 'The Undercity, Vizunah Square',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Miju',
        mapUrl: 'https://wiki.guildwars.com/images/d/d0/The_Afflicted_Miju_map.jpg'
      },
      {
        name: 'The Afflicted Cho',
        area: "Dragon's Throat",
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Cho',
        mapUrl: 'https://wiki.guildwars.com/images/c/cf/The_Afflicted_Cho_map.jpg'
      },
      {
        name: 'The Afflicted Jingme',
        area: 'Unwaking Waters',
        wikiUrl: 'https://wiki.guildwars.com/wiki/The_Afflicted_Jingme',
        mapUrl: 'https://wiki.guildwars.com/images/d/d4/Afflicted_Jingme_map.jpg'
      },
      {
        name: 'Gorlos Skinflayer',
        area: 'Heart of the Shiverpeaks (EotN)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Gorlos_Skinflayer',
        mapUrl: 'https://wiki.guildwars.com/images/5/56/Gorlos_skinflayer_Location.jpg'
      }
    ],
    description: "Elite Spell. Deals 5...37...45 holy damage and inflicts Burning (1...3...3 second[s]) every second (5 seconds). Hits foes adjacent to target's initial location.",
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/e4/Ray_of_Judgment.jpg/50px-Ray_of_Judgment.jpg'
  },
  {
    id: 'monk-shield-judg',
    name: 'Shield of Judgment',
    profession: Profession.MONK,
    attribute: Attribute.SMITING_PRAYERS,
    campaigns: [Campaign.PROPHECIES],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Shield_of_Judgment',
    bosses: [
      {
        name: 'Myd Springclaw',
        area: 'Mineral Springs',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Myd_Springclaw',
        mapUrl: 'https://wiki.guildwars.com/images/6/65/Mineral_Springs_Avicara_bosses_map.jpg'
      }
    ],
    description: 'Elite Enchantment Spell. (8...18...20 seconds.) Deals 5...41...50 holy damage to foes attacking [sic] target ally. Causes knock-down.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/e/e8/Shield_of_Judgment.jpg/50px-Shield_of_Judgment.jpg'
  },
  {
    id: 'monk-signet-judg',
    name: 'Signet of Judgment',
    profession: Profession.MONK,
    attribute: Attribute.SMITING_PRAYERS,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.NIGHTFALL, Campaign.CORE],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Signet_of_Judgment',
    bosses: [
      {
        name: 'Balt Duskstrider',
        area: 'Iron Mines of Moladune',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Balt_Duskstrider',
        mapUrl: 'https://wiki.guildwars.com/images/9/9a/Digo_Murkstalker_map.jpg'
      },
      {
        name: 'Fawl Driftstalker',
        area: 'Snake Dance',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Fawl_Driftstalker',
        mapUrl: 'https://wiki.guildwars.com/images/0/0e/Spawn_points_of_nightmare_bosses_in_Snake_Dance.jpg'
      },
      {
        name: 'Frostbite',
        area: 'Ice Floe & Talus Chute',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Frostbite',
        mapUrl: 'https://wiki.guildwars.com/images/c/c2/Frostbite_map.jpg'
      },
      {
        name: 'Kaijun Don',
        area: 'Nahpui Quarter',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kaijun_Don',
        mapUrl: 'https://wiki.guildwars.com/images/4/4a/Kaijun_Don_map.jpg'
      },
      {
        name: 'Scourgewind, Elder Guardian',
        area: 'Silent Surf',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Scourgewind%2C_Elder_Guardian',
        mapUrl: 'https://wiki.guildwars.com/images/0/0b/Scourgewind,_Elder_Guardian_map.jpg'
      },
      {
        name: 'Hamlen the Fallen',
        area: 'The Ruptured Heart',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Hamlen_the_Fallen',
        mapUrl: 'https://wiki.guildwars.com/images/5/57/Hamlen_the_Fallen_map.jpg'
      },
      {
        name: 'Rukkassa',
        area: 'Nightfallen Jahai',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Rukkassa',
        mapUrl: 'https://wiki.guildwars.com/images/a/aa/Rukkassa_map.jpg'
      }
    ],
    description: 'Elite Signet. Knocks down target. Deals 15...63...75 holy damage to target and adjacent foes.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/aa/Signet_of_Judgment.jpg/50px-Signet_of_Judgment.jpg'
  },
  {
    id: 'monk-censure',
    name: 'Word of Censure',
    profession: Profession.MONK,
    attribute: Attribute.SMITING_PRAYERS,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Word_of_Censure',
    bosses: [
      {
        name: 'Shen, the Magistrate',
        area: 'Wajjun Bazaar',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shen%2C_the_Magistrate',
        mapUrl: 'https://wiki.guildwars.com/images/0/03/Shen%2C_the_Magistrate_Map.jpg'
      },
      {
        name: 'Quufu',
        area: 'Wajjun Bazaar (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Quufu',
        mapUrl: 'https://wiki.guildwars.com/images/5/53/Straight_to_the_Top_map.jpg'
      }
    ],
    description: 'Elite Spell. Deals 30...110...130 holy damage. +20 recharge time if target foe is below 50% Health.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/6/6b/Word_of_Censure.jpg/50px-Word_of_Censure.jpg'
  },

  // --- No Attribute ---
  {
    id: 'monk-empathic',
    name: 'Empathic Removal',
    profession: Profession.MONK,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.FACTIONS],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Empathic_Removal',
    bosses: [
      {
        name: 'Byzzr Wingmender',
        area: "Melandru's Hope",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Byzzr_Wingmender',
        mapUrl: 'https://wiki.guildwars.com/images/6/67/Byzzr_Wingmender_map.jpg'
      }
    ],
    description: 'Elite Spell. Removes one condition and hex from target ally and yourself, and heals for 50. Cannot self-target.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/2/20/Empathic_Removal.jpg/50px-Empathic_Removal.jpg'
  },
  {
    id: 'monk-martyr',
    name: 'Martyr',
    profession: Profession.MONK,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.PROPHECIES, Campaign.FACTIONS, Campaign.CORE],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Martyr',
    bosses: [
      {
        name: "Dwayna's Cursed",
        area: 'Perdition Rock',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Dwayna%27s_Cursed',
        mapUrl: "https://wiki.guildwars.com/images/a/ad/Perdition_Rock_Cursed_bosses_map.jpg"
      },
      {
        name: 'Am Fah Leader',
        area: 'The Undercity (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Am_Fah_Leader',
        mapUrl: 'https://wiki.guildwars.com/images/a/a4/Capturing_the_Orrian_Tome_quest_map.jpg'
      },
      {
        name: 'Rien, the Martyr',
        area: 'Shenzun Tunnels',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Rien%2C_the_Martyr',
        mapUrl: 'https://wiki.guildwars.com/images/8/84/Rien,_the_Martyr_map.jpg'
      },
      {
        name: 'Dunshek the Purifier',
        area: 'The Shattered Ravines',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Dunshek_the_Purifier',
        mapUrl: 'https://wiki.guildwars.com/images/4/48/Dunshek_the_Purifier_map.jpg'
      }
    ],
    description: 'Elite Spell. Transfer all conditions from all allies to you.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/a9/Martyr.jpg/50px-Martyr.jpg'
  },
  {
    id: 'monk-signet-removal',
    name: 'Signet of Removal',
    profession: Profession.MONK,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Signet_of_Removal',
    bosses: [
      {
        name: 'Commander Noss',
        area: 'The Floodplain of Mahnkelon',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Commander_Noss',
        mapUrl: 'https://wiki.guildwars.com/images/7/7d/Commander_Noss_map.jpg'
      }
    ],
    description: 'Elite Signet. Removes one hex and one condition. No effect unless target ally is enchanted.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/af/Signet_of_Removal.jpg/50px-Signet_of_Removal.jpg'
  }
];