export enum Profession {
  WARRIOR = 'Warrior',
  RANGER = 'Ranger',
  MONK = 'Monk',
  NECROMANCER = 'Necromancer',
  MESMER = 'Mesmer',
  ELEMENTALIST = 'Elementalist',
  ASSASSIN = 'Assassin',
  RITUALIST = 'Ritualist',
  PARAGON = 'Paragon',
  DERVISH = 'Dervish',
}

export enum Campaign {
  PROPHECIES = 'Prophecies',
  FACTIONS = 'Factions',
  NIGHTFALL = 'Nightfall',
  EOTN = 'Eye of the North',
  CORE = 'Core',
}

export enum Attribute {
  // Ritualist
  SPAWNING_POWER = 'Spawning Power',
  CHANNELING_MAGIC = 'Channeling Magic',
  COMMUNING = 'Communing',
  RESTORATION_MAGIC = 'Restoration Magic',
  
  // Monk
  DIVINE_FAVOR = 'Divine Favor',
  HEALING_PRAYERS = 'Healing Prayers',
  SMITING_PRAYERS = 'Smiting Prayers',
  PROTECTION_PRAYERS = 'Protection Prayers',

  // Warrior
  STRENGTH = 'Strength',
  AXE_MASTERY = 'Axe Mastery',
  HAMMER_MASTERY = 'Hammer Mastery',
  SWORDSMANSHIP = 'Swordsmanship',
  TACTICS = 'Tactics',

  // Ranger
  BEAST_MASTERY = 'Beast Mastery',
  EXPERTISE = 'Expertise',
  MARKSMANSHIP = 'Marksmanship',
  WILDERNESS_SURVIVAL = 'Wilderness Survival',

  // Necromancer
  BLOOD_MAGIC = 'Blood Magic',
  CURSES = 'Curses',
  DEATH_MAGIC = 'Death Magic',
  SOUL_REAPING = 'Soul Reaping',

  // Mesmer
  DOMINATION_MAGIC = 'Domination Magic',
  FAST_CASTING = 'Fast Casting',
  ILLUSION_MAGIC = 'Illusion Magic',
  INSPIRATION_MAGIC = 'Inspiration Magic',

  // Elementalist
  AIR_MAGIC = 'Air Magic',
  EARTH_MAGIC = 'Earth Magic',
  ENERGY_STORAGE = 'Energy Storage',
  FIRE_MAGIC = 'Fire Magic',
  WATER_MAGIC = 'Water Magic',

  // Assassin
  CRITICAL_STRIKES = 'Critical Strikes',
  DAGGER_MASTERY = 'Dagger Mastery',
  DEADLY_ARTS = 'Deadly Arts',
  SHADOW_ARTS = 'Shadow Arts',

  // Paragon
  COMMAND = 'Command',
  LEADERSHIP = 'Leadership',
  MOTIVATION = 'Motivation',
  SPEAR_MASTERY = 'Spear Mastery',

  // Dervish
  EARTH_PRAYERS = 'Earth Prayers',
  MYSTICISM = 'Mysticism',
  SCYTHE_MASTERY = 'Scythe Mastery',
  WIND_PRAYERS = 'Wind Prayers',

  // Other
  NO_ATTRIBUTE = 'No Attribute',
}

export interface BossLocation {
  name: string;
  area: string;
  wikiUrl?: string;
  mapUrl?: string;
}

export interface EliteSkill {
  id: string;
  name: string;
  profession: Profession;
  attribute: Attribute;
  campaigns: Campaign[];
  bosses: BossLocation[];
  description: string;
  iconUrl?: string;
  skillWikiUrl?: string;
}
