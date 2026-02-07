import { EliteSkill, Profession, Campaign, Attribute } from '../types';

export const PARAGON_SKILLS: EliteSkill[] = [
  // --- Command ---
  {
    id: 'para-incoming',
    name: '"Incoming!"',
    profession: Profession.PARAGON,
    attribute: Attribute.COMMAND,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/%22Incoming!%22',
    bosses: [
      {
        name: 'Render',
        area: 'Forum Highlands (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Render',
        mapUrl: 'https://wiki.guildwars.com/images/9/9f/Render_map.jpg'
      },
      {
        name: 'Scratcher',
        area: 'Wilderness of Bahdza (Before Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Scratcher',
        mapUrl: 'https://wiki.guildwars.com/images/b/b9/Scratcher_map.jpg'
      },
      {
        name: 'Screecher',
        area: 'Wilderness of Bahdza (Before Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Screecher',
        mapUrl: 'https://wiki.guildwars.com/images/d/d9/Screecher_map.jpg'
      },
      {
        name: 'Kunan the Loudmouth',
        area: 'Wilderness of Bahdza (After Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Kunan_the_Loudmouth',
        mapUrl: 'https://wiki.guildwars.com/images/8/88/Kunan_the_Loudmouth_map.jpg'
      }
    ],
    description: 'Elite Shout. (4...9...10 seconds) Allies in earshot move 33% faster and gain 5...13...15 Health while moving.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/d/d5/%22Incoming!%22.jpg/50px-%22Incoming!%22.jpg'
  },
  {
    id: 'para-anthem-guidance',
    name: 'Anthem of Guidance',
    profession: Profession.PARAGON,
    attribute: Attribute.COMMAND,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Anthem_of_Guidance',
    bosses: [
      {
        name: 'Briahn the Chosen',
        area: 'The Mirror of Lyss',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Briahn_the_Chosen',
        mapUrl: 'https://wiki.guildwars.com/images/0/0c/Briahn_the_Chosen_map.jpg'
      },
      {
        name: 'Overseer Juntahk',
        area: 'The Mirror of Lyss (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Overseer_Juntahk'
      },
      {
        name: 'General Kumtash',
        area: 'Dzagonur Bastion',
        wikiUrl: 'https://wiki.guildwars.com/wiki/General_Kumtash',
        mapUrl: 'https://wiki.guildwars.com/images/1/14/Dzagonur_Bastion_map.jpg'
      },
      {
        name: 'Commander Chutal',
        area: 'Nundu Bay',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Commander_Chutal'
      },
      {
        name: 'Battlelord Turgar',
        area: 'Poisoned Outcrops (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Battlelord_Turgar',
        mapUrl: 'https://wiki.guildwars.com/images/6/64/The_Cold_Touch_of_the_Past.jpg'
      }
    ],
    description: 'Elite Chant. (10 seconds.) Party members in earshot are unblockable with their next attack skill.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/4e/Anthem_of_Guidance.jpg/50px-Anthem_of_Guidance.jpg'
  },
  {
    id: 'para-crippling-anthem',
    name: 'Crippling Anthem',
    profession: Profession.PARAGON,
    attribute: Attribute.COMMAND,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Crippling_Anthem',
    bosses: [
      {
        name: 'Lieutenant Mahrik',
        area: 'Cliffs of Dohjok (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lieutenant_Mahrik'
      },
      {
        name: 'Lieutenant Shagu',
        area: 'Barbarous Shore',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Lieutenant_Shagu',
        mapUrl: 'https://wiki.guildwars.com/images/9/92/Lieutenant_Shagu_map.jpg'
      }
    ],
    description: 'Elite Chant. (10 seconds.) Allies in earshot inflict Crippled condition (5...13...15 seconds) with their next attack skill.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/2/23/Crippling_Anthem.jpg/50px-Crippling_Anthem.jpg'
  },

  // --- Leadership ---
  {
    id: 'para-angelic-bond',
    name: 'Angelic Bond',
    profession: Profession.PARAGON,
    attribute: Attribute.LEADERSHIP,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Angelic_Bond',
    bosses: [
      {
        name: 'Shakor Firespear',
        area: 'Dasha Vestibule, The Hidden City of Ahdashim',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shakor_Firespear',
        mapUrl: 'https://wiki.guildwars.com/images/0/01/Shakor_Firespear_map.jpg'
      }
    ],
    description: 'Elite Skill. (10 seconds.) The next time an ally within earshot would take fatal damage, that damage is negated and that ally is healed for 20...164...200. Ends on other allies.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/6/6e/Angelic_Bond.jpg/50px-Angelic_Bond.jpg'
  },
  {
    id: 'para-anthem-of-fury',
    name: 'Anthem of Fury',
    profession: Profession.PARAGON,
    attribute: Attribute.LEADERSHIP,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Anthem_of_Fury',
    bosses: [
      {
        name: 'Oath of Profanity',
        area: 'Nightfallen Jahai',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Oath_of_Profanity',
        mapUrl: 'https://wiki.guildwars.com/images/9/99/Oath_of_Profanity_map.jpg'
      }
    ],
    description: 'Elite Chant. (10 seconds.) Party members in earshot gain 1...3...4 adrenaline with their next attack skill.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/4/49/Anthem_of_Fury.jpg/50px-Anthem_of_Fury.jpg'
  },
  {
    id: 'para-defensive-anthem',
    name: 'Defensive Anthem',
    profession: Profession.PARAGON,
    attribute: Attribute.LEADERSHIP,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Defensive_Anthem',
    bosses: [
      {
        name: 'Corporal Argon',
        area: 'Jahai Bluffs',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Corporal_Argon',
        mapUrl: 'https://wiki.guildwars.com/images/1/14/Corporal_Argon_map.jpg'
      }
    ],
    description: 'Elite Chant. (4...9...10 seconds.) Party members in earshot have 50% chance to block. Ends when hitting with an attack skill.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/58/Defensive_Anthem.jpg/50px-Defensive_Anthem.jpg'
  },
  {
    id: 'para-focused-anger',
    name: 'Focused Anger',
    profession: Profession.PARAGON,
    attribute: Attribute.LEADERSHIP,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Focused_Anger',
    bosses: [
      {
        name: 'Wandalz the Angry',
        area: 'Bahdok Caverns',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Wandalz_the_Angry',
        mapUrl: 'https://wiki.guildwars.com/images/f/fd/Wandalz_the_Angry_map.jpg'
      }
    ],
    description: 'Elite Skill. (45 seconds.) You gain 0...120...150% more adrenaline.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/c/c0/Focused_Anger.jpg/50px-Focused_Anger.jpg'
  },
  {
    id: 'para-heroic-refrain',
    name: 'Heroic Refrain',
    profession: Profession.PARAGON,
    attribute: Attribute.LEADERSHIP,
    campaigns: [Campaign.FACTIONS, Campaign.CORE],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Heroic_Refrain',
    bosses: [
      {
        name: 'Yoannh the Rebuilder',
        area: 'The Ruptured Heart (Requires Proof of Triumph)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Yoannh_the_Rebuilder',
        mapUrl: 'https://wiki.guildwars.com/images/5/50/Yoannh_the_Rebuilder_location.png'
      }
    ],
    description: 'Elite Echo. (3...13...15 seconds.) Target ally gains +1...3...3 to all attributes. Renewal: every time a chant or shout ends on this ally. Cannot target spirits. PvE Skill. Note that as a PvE-only skill, Elite Skill Tomes cannot be used to learn this skill.',
    iconUrl: 'https://wiki.guildwars.com/images/6/6e/Heroic_Refrain.jpg'
  },
  {
    id: 'para-soldiers-fury',
    name: "Soldier's Fury",
    profession: Profession.PARAGON,
    attribute: Attribute.LEADERSHIP,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Soldier%27s_Fury',
    bosses: [
      {
        name: 'Chakeh the Lonely',
        area: 'Gate of Desolation',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Chakeh_the_Lonely',
        mapUrl: 'https://wiki.guildwars.com/images/e/e9/Chakeh_the_Lonely_map.jpg'
      },
      {
        name: 'Arneh the Vigorous',
        area: "Joko's Domain",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Arneh_the_Vigorous',
        mapUrl: 'https://wiki.guildwars.com/images/8/88/Arneh_the_Vigorous_map.jpg'
      },
      {
        name: 'Vraxx the Condemned',
        area: 'Cathedral of Flames level 2',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Vraxx_the_Condemned',
        mapUrl: 'https://wiki.guildwars.com/images/2/25/Vraxx_the_Condemned_Cathedral_of_Flames.jpg'
      },
      {
        name: 'Sotanaht the Tomb Guardian',
        area: 'Vloxen Excavations level 3',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Sotanaht_the_Tomb_Guardian',
        mapUrl: 'https://wiki.guildwars.com/images/b/bb/Sotanaht_the_Tomb_Guardian_map.jpg'
      }
    ],
    description: 'Elite Echo. (10...30...35 seconds.) You attack 33% faster and gain 33% more adrenaline if under the effects of a shout or chant. You have -20 armor.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/c/ca/Soldier%27s_Fury.jpg/50px-Soldier%27s_Fury.jpg'
  },

  // --- Motivation ---
  {
    id: 'para-flesh-wound',
    name: "\"It's Just a Flesh Wound.\"",
    profession: Profession.PARAGON,
    attribute: Attribute.MOTIVATION,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/%22It%27s_Just_a_Flesh_Wound.%22',
    bosses: [
      {
        name: 'Churkeh the Defiant',
        area: 'The Alkali Pan',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Churkeh_the_Defiant',
        mapUrl: 'https://wiki.guildwars.com/images/4/46/Churkeh_the_Defiant_map.jpg'
      }
    ],
    description: 'Elite Shout. Remove all conditions from target ally. That ally moves 25% faster (1...8...10 second[s]) if a condition was removed. Cannot self-target.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/6/69/%22It%27s_Just_a_Flesh_Wound.%22.jpg/50px-%22It%27s_Just_a_Flesh_Wound.%22.jpg'
  },
  {
    id: 'para-power-is-yours',
    name: "\"The Power Is Yours!\"",
    profession: Profession.PARAGON,
    attribute: Attribute.MOTIVATION,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/%22The_Power_Is_Yours!%22',
    bosses: [
      {
        name: 'Tureksin the Delegator',
        area: 'The Ruptured Heart',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Tureksin_the_Delegator',
        mapUrl: 'https://wiki.guildwars.com/images/6/6b/Tureksin_the_Delegator_map.jpg'
      }
    ],
    description: 'Elite Shout. (3 seconds.) Allies within earshot gain 0...1...1 Energy regeneration.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/0/05/%22The_Power_Is_Yours%21%22.jpg/50px-%22The_Power_Is_Yours%21%22.jpg'
  },
  {
    id: 'para-song-purification',
    name: 'Song of Purification',
    profession: Profession.PARAGON,
    attribute: Attribute.MOTIVATION,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Song_of_Purification',
    bosses: [
      {
        name: 'Jishol Darksong',
        area: 'Resplendent Makuun',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jishol_Darksong',
        mapUrl: 'https://wiki.guildwars.com/images/8/81/Jishol_Darksong_map.jpg'
      },
      {
        name: 'Pehnsed the Loudmouth',
        area: 'Vehjin Mines',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Pehnsed_the_Loudmouth',
        mapUrl: 'https://wiki.guildwars.com/images/c/ce/Pehnsed_the_Loudmouth_map.jpg'
      }
    ],
    description: 'Elite Chant. (20 seconds.) Allies in earshot lose one condition with their next 1...5...6 skill[s].',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/5/57/Song_of_Purification.jpg/50px-Song_of_Purification.jpg'
  },
  {
    id: 'para-song-restoration',
    name: 'Song of Restoration',
    profession: Profession.PARAGON,
    attribute: Attribute.MOTIVATION,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Song_of_Restoration',
    bosses: [
      {
        name: 'Toshau Sharpspear',
        area: 'Garden of Seborhin',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Toshau_Sharpspear',
        mapUrl: 'https://wiki.guildwars.com/images/d/dc/Toshau_Sharpspear_map.jpg'
      },
      {
        name: 'Erasklion the Prolific',
        area: 'Heart of the Shiverpeaks',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Erasklion_the_Prolific',
        mapUrl: 'https://wiki.guildwars.com/images/3/39/Erasklion_the_Prolific_map.jpg'
      }
    ],
    description: 'Elite Chant. (10 seconds.) Party members in earshot gain 45...97...110 Health with their next skill.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/9b/Song_of_Restoration.jpg/50px-Song_of_Restoration.jpg'
  },

  // --- Spear Mastery ---
  {
    id: 'para-cruel-spear',
    name: 'Cruel Spear',
    profession: Profession.PARAGON,
    attribute: Attribute.SPEAR_MASTERY,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Cruel_Spear',
    bosses: [
      {
        name: 'Eshau Longspear',
        area: 'Arkjok Ward',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Eshau_Longspear',
        mapUrl: 'https://wiki.guildwars.com/images/a/a3/Eshau_Longspear_map.jpg'
      },
      {
        name: 'Yakun Trueshot',
        area: 'Moddok Crevice',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Yakun_Trueshot',
        mapUrl: 'https://wiki.guildwars.com/images/8/83/Yakun_Trueshot_map.jpg'
      },
      {
        name: 'Elder Nephilim',
        area: "Rragar's Menagerie",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Elder_Nephilim'
      }
    ],
    description: 'Elite Spear Attack. Deals +1...25...31 damage. Inflicts Deep Wound condition (5...17...20 seconds) if target is not moving.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/9/9b/Cruel_Spear.jpg/50px-Cruel_Spear.jpg'
  },
  {
    id: 'para-stunning-strike',
    name: 'Stunning Strike',
    profession: Profession.PARAGON,
    attribute: Attribute.SPEAR_MASTERY,
    campaigns: [Campaign.NIGHTFALL, Campaign.EOTN],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Stunning_Strike',
    bosses: [
      {
        name: 'Shrieker of Dread',
        area: 'Domain of Fear',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Shrieker_of_Dread',
        mapUrl: 'https://wiki.guildwars.com/images/9/97/Shrieker_of_Dread_map.jpg'
      },
      {
        name: 'Jadam Spearspinner',
        area: 'Warband of Brothers',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Jadam_Spearspinner',
        mapUrl: 'https://wiki.guildwars.com/images/d/d1/Jadam_Spearspinner_map.jpg'
      },
      {
        name: 'Spider Matriarch (Location 1)',
        area: "Arachni's Haunt",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Spider_Matriarch',
        mapUrl: 'https://wiki.guildwars.com/images/b/bc/Spider_Matriarch_Arachni%27s_Haunt.jpg'
      },
      {
        name: 'Spider Matriarch (Location 2)',
        area: "Arachni's Haunt",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Spider_Matriarch',
        mapUrl: 'https://wiki.guildwars.com/images/d/d0/Spider_Matriarch_Arachni%27s_Haunt2.jpg'
      },
      {
        name: 'Spider Matriarch (Location 3)',
        area: "Arachni's Haunt",
        wikiUrl: 'https://wiki.guildwars.com/wiki/Spider_Matriarch',
        mapUrl: 'https://wiki.guildwars.com/images/5/5e/Spider_Matriarch_Arachni%27s_Haunt3.jpg'
      },
      {
        name: 'Timberland Guardian',
        area: 'Magus Stones (Quest)',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Timberland_Guardian',
        mapUrl: 'https://wiki.guildwars.com/images/a/ab/Timberland_Guardian_Location.jpg'
      }
    ],
    description: 'Elite Spear Attack. Deals +5...25...30 damage. Inflicts Dazed condition (4...9...10 seconds) if target has a condition.',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/a/a6/Stunning_Strike.jpg/50px-Stunning_Strike.jpg'
  },

  // --- No Attribute ---
  {
    id: 'para-cautery-signet',
    name: 'Cautery Signet',
    profession: Profession.PARAGON,
    attribute: Attribute.NO_ATTRIBUTE,
    campaigns: [Campaign.NIGHTFALL],
    skillWikiUrl: 'https://wiki.guildwars.com/wiki/Cautery_Signet',
    bosses: [
      {
        name: 'Captain Lumanda',
        area: 'Consulate Docks',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Captain_Lumanda',
        mapUrl: 'https://wiki.guildwars.com/images/1/13/Captain_Lumanda_map.jpg'
      },
      {
        name: 'Corporal Luluh',
        area: 'Dejarin Estate',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Corporal_Luluh',
        mapUrl: 'https://wiki.guildwars.com/images/9/9d/Corporal_Luluh_map.jpg'
      },
      {
        name: 'Overseer Boktek',
        area: 'Kodonur Crossroads',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Overseer_Boktek',
        mapUrl: 'https://wiki.guildwars.com/images/c/cb/Kodonur_Crossroads_map.jpg'
      },
      {
        name: 'Colonel Kajo',
        area: 'Pogahn Passage',
        wikiUrl: 'https://wiki.guildwars.com/wiki/Colonel_Kajo'
      }
    ],
    description: 'Elite Signet. All party members lose all conditions. You begin Burning (one second for each condition removed).',
    iconUrl: 'https://wiki.guildwars.com/images/thumb/1/17/Cautery_Signet.jpg/50px-Cautery_Signet.jpg'
  }
];