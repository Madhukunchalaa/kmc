export interface CrystalGuide {
  name: string;
  keyword: string;
  desc: string;
  gradient: string;
  emoji: string;
  image: string;
  tags: string[];
  chakras: string[];
}

export const crystals: CrystalGuide[] = [
  {
    name: 'Amethyst',
    keyword: 'Relaxation & Meditation',
    desc: 'A natural stress reliever that encourages inner strength. Amethyst calms the mind and deepens meditation.',
    gradient: 'linear-gradient(135deg,#9B59B6,#6C3483)',
    emoji: '🔮',
    image: '/images/crystals/amethyst.png',
    tags: ['Peace', 'Clarity', 'Protection'],
    chakras: ['Third Eye', 'Crown'],
  },
  {
    name: 'Rose Quartz',
    keyword: 'Love & Emotional Healing',
    desc: 'The stone of unconditional love. Opens the heart chakra, promoting self-love, compassion and peace.',
    gradient: 'linear-gradient(135deg,#F48FB1,#E91E8C)',
    emoji: '🩷',
    image: '/images/crystals/rosequartz.png',
    tags: ['Love', 'Harmony', 'Healing'],
    chakras: ['Heart'],
  },
  {
    name: 'Citrine',
    keyword: 'Abundance & Confidence',
    desc: 'The merchant\'s stone — Citrine draws prosperity, sharpens willpower and brightens your aura.',
    gradient: 'linear-gradient(135deg,#FFD27F,#E59500)',
    emoji: '💛',
    image: '/images/crystals/citrine.png',
    tags: ['Wealth', 'Joy', 'Success'],
    chakras: ['Solar Plexus', 'Sacral'],
  },
  {
    name: 'Black Tourmaline',
    keyword: 'Protection & Grounding',
    desc: 'A powerful shield against negative energies and EMFs. Grounds you firmly into the present moment.',
    gradient: 'linear-gradient(135deg,#444,#111)',
    emoji: '🖤',
    image: '/images/crystals/blacktourmaline.png',
    tags: ['Shielding', 'Stability', 'Detox'],
    chakras: ['Root'],
  },
  {
    name: 'Clear Quartz',
    keyword: 'Amplification & Clarity',
    desc: 'The master healer. Amplifies any intention you set and clears mental fog with crystalline brightness.',
    gradient: 'linear-gradient(135deg,#F5F7FA,#B8C6DB)',
    emoji: '💎',
    image: '/images/crystals/clearquartz.png',
    tags: ['Amplify', 'Focus', 'Cleansing'],
    chakras: ['Crown', 'All chakras'],
  },
  {
    name: 'Selenite',
    keyword: 'Cleansing & High Vibration',
    desc: 'A self-cleansing crystal that purifies your aura and the energy of any other stones placed near it.',
    gradient: 'linear-gradient(135deg,#FFFFFF,#E0E7FF)',
    emoji: '🤍',
    image: '/images/crystals/selenite.png',
    tags: ['Cleanse', 'Light', 'Angelic'],
    chakras: ['Crown'],
  },
  {
    name: 'Tiger\'s Eye',
    keyword: 'Courage & Willpower',
    desc: 'A grounding stone that sharpens focus, restores confidence and turns hesitation into bold action.',
    gradient: 'linear-gradient(135deg,#C68642,#5C3317)',
    emoji: '🐯',
    image: '/images/crystals/tigerseye.png',
    tags: ['Courage', 'Drive', 'Focus'],
    chakras: ['Solar Plexus', 'Sacral'],
  },
  {
    name: 'Green Aventurine',
    keyword: 'Luck & Opportunity',
    desc: 'Known as the stone of opportunity — Green Aventurine attracts new chances and softens the heart.',
    gradient: 'linear-gradient(135deg,#A8E063,#1E8449)',
    emoji: '🍀',
    image: '/images/crystals/greenaventurine.png',
    tags: ['Luck', 'Growth', 'Heart'],
    chakras: ['Heart'],
  },
  {
    name: 'Lapis Lazuli',
    keyword: 'Truth & Inner Wisdom',
    desc: 'A royal stone of self-knowledge and honest expression. Sharpens intuition and clears the throat chakra.',
    gradient: 'linear-gradient(135deg,#1E3A8A,#0F1F4D)',
    emoji: '🔷',
    image: '/images/crystals/lapislazuli.png',
    tags: ['Truth', 'Wisdom', 'Voice'],
    chakras: ['Throat', 'Third Eye'],
  },
];

export interface QuizQuestion {
  question: string;
  options: { label: string; value: string }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'What do you most need right now?',
    options: [
      { label: 'Peace & calm', value: 'peace' },
      { label: 'Love & connection', value: 'love' },
      { label: 'Money & confidence', value: 'money' },
      { label: 'Protection & grounding', value: 'protection' },
    ],
  },
  {
    question: 'How do you feel most days?',
    options: [
      { label: 'Anxious or scattered', value: 'peace' },
      { label: 'Lonely or heart-heavy', value: 'love' },
      { label: 'Stuck or low energy', value: 'money' },
      { label: 'Drained by others\' energy', value: 'protection' },
    ],
  },
  {
    question: 'Which colour calls to you today?',
    options: [
      { label: 'Soft purple / white', value: 'peace' },
      { label: 'Pink / pale rose', value: 'love' },
      { label: 'Golden yellow', value: 'money' },
      { label: 'Deep black / grey', value: 'protection' },
    ],
  },
];

export const QUIZ_RESULTS: Record<string, { crystal: string; reason: string }> = {
  peace: {
    crystal: 'Amethyst',
    reason: 'Amethyst is your stone — a gentle anchor for an overstimulated mind, perfect for meditation and sleep.',
  },
  love: {
    crystal: 'Rose Quartz',
    reason: 'Rose Quartz is your stone — the heart-healer, opening you to self-love, compassion and tender connection.',
  },
  money: {
    crystal: 'Citrine',
    reason: 'Citrine is your stone — the merchant\'s crystal of abundance, drive and sunny confidence.',
  },
  protection: {
    crystal: 'Black Tourmaline',
    reason: 'Black Tourmaline is your stone — a shield against draining energies and a steady root back to your power.',
  },
};
