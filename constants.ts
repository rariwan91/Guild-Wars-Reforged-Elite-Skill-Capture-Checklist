import { EliteSkill, Profession, Attribute } from './types';
import { WARRIOR_SKILLS } from './data/warrior';
import { RANGER_SKILLS } from './data/ranger';
import { MONK_SKILLS } from './data/monk';
import { NECROMANCER_SKILLS } from './data/necromancer';
import { MESMER_SKILLS } from './data/mesmer';
import { ELEMENTALIST_SKILLS } from './data/elementalist';
import { ASSASSIN_SKILLS } from './data/assassin';
import { RITUALIST_SKILLS } from './data/ritualist';
import { PARAGON_SKILLS } from './data/paragon';
import { DERVISH_SKILLS } from './data/dervish';

export const PROFESSION_ICONS: Record<Profession, string> = {
  [Profession.WARRIOR]: 'https://wiki.guildwars.com/images/3/3b/Warrior-tango-icon-20.png',
  [Profession.RANGER]: 'https://wiki.guildwars.com/images/d/dc/Ranger-tango-icon-20.png',
  [Profession.MONK]: 'https://wiki.guildwars.com/images/f/f8/Monk-tango-icon-20.png',
  [Profession.NECROMANCER]: 'https://wiki.guildwars.com/images/7/7b/Necromancer-tango-icon-20.png',
  [Profession.MESMER]: 'https://wiki.guildwars.com/images/f/fb/Mesmer-tango-icon-20.png',
  [Profession.ELEMENTALIST]: 'https://wiki.guildwars.com/images/a/ab/Elementalist-tango-icon-20.png',
  [Profession.ASSASSIN]: 'https://wiki.guildwars.com/images/5/5f/Assassin-tango-icon-20.png',
  [Profession.RITUALIST]: 'https://wiki.guildwars.com/images/8/81/Ritualist-tango-icon-20.png',
  [Profession.PARAGON]: 'https://wiki.guildwars.com/images/5/55/Paragon-tango-icon-20.png',
  [Profession.DERVISH]: 'https://wiki.guildwars.com/images/3/3e/Dervish-tango-icon-20.png',
};

export const ATTRIBUTE_ORDER: Record<Profession, Attribute[]> = {
  [Profession.WARRIOR]: [Attribute.AXE_MASTERY, Attribute.HAMMER_MASTERY, Attribute.STRENGTH, Attribute.SWORDSMANSHIP, Attribute.TACTICS, Attribute.NO_ATTRIBUTE],
  [Profession.RANGER]: [Attribute.BEAST_MASTERY, Attribute.EXPERTISE, Attribute.MARKSMANSHIP, Attribute.WILDERNESS_SURVIVAL, Attribute.NO_ATTRIBUTE],
  [Profession.MONK]: [Attribute.DIVINE_FAVOR, Attribute.HEALING_PRAYERS, Attribute.PROTECTION_PRAYERS, Attribute.SMITING_PRAYERS, Attribute.NO_ATTRIBUTE],
  [Profession.NECROMANCER]: [Attribute.BLOOD_MAGIC, Attribute.CURSES, Attribute.DEATH_MAGIC, Attribute.SOUL_REAPING, Attribute.NO_ATTRIBUTE],
  [Profession.MESMER]: [Attribute.DOMINATION_MAGIC, Attribute.FAST_CASTING, Attribute.ILLUSION_MAGIC, Attribute.INSPIRATION_MAGIC, Attribute.NO_ATTRIBUTE],
  [Profession.ELEMENTALIST]: [Attribute.AIR_MAGIC, Attribute.EARTH_MAGIC, Attribute.ENERGY_STORAGE, Attribute.FIRE_MAGIC, Attribute.WATER_MAGIC, Attribute.NO_ATTRIBUTE],
  [Profession.ASSASSIN]: [Attribute.CRITICAL_STRIKES, Attribute.DAGGER_MASTERY, Attribute.DEADLY_ARTS, Attribute.SHADOW_ARTS, Attribute.NO_ATTRIBUTE],
  [Profession.RITUALIST]: [Attribute.CHANNELING_MAGIC, Attribute.COMMUNING, Attribute.RESTORATION_MAGIC, Attribute.SPAWNING_POWER],
  [Profession.PARAGON]: [Attribute.COMMAND, Attribute.LEADERSHIP, Attribute.MOTIVATION, Attribute.SPEAR_MASTERY, Attribute.NO_ATTRIBUTE],
  [Profession.DERVISH]: [Attribute.EARTH_PRAYERS, Attribute.MYSTICISM, Attribute.SCYTHE_MASTERY, Attribute.WIND_PRAYERS, Attribute.NO_ATTRIBUTE],
};

export const ELITE_SKILLS: EliteSkill[] = [
  ...WARRIOR_SKILLS,
  ...RANGER_SKILLS,
  ...MONK_SKILLS,
  ...NECROMANCER_SKILLS,
  ...MESMER_SKILLS,
  ...ELEMENTALIST_SKILLS,
  ...ASSASSIN_SKILLS,
  ...RITUALIST_SKILLS,
  ...PARAGON_SKILLS,
  ...DERVISH_SKILLS
];
