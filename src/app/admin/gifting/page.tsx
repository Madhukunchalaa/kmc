import { connectMongoose } from '@/lib/mongoose';
import GiftingRecipient from '@/models/GiftingRecipient';
import GiftingAdmin from './GiftingAdmin';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Gifting Recipients · Admin' };

const DEFAULTS = [
  { key: 'partner',   label: 'Partner',         subtitle: 'Soulmate or lover',       icon: 'fa-solid fa-heart',              tagline: 'Crystals of love, deep connection & romance',              keywords: ['rose','love','heart','rhodonite','garnet','ruby','moonstone'],               fallback: 'bracelets', color: '#D95F7A', bg: 'rgba(217,95,122,0.12)',   order: 0 },
  { key: 'friend',    label: 'Best Friend',      subtitle: 'Your ride-or-die',        icon: 'fa-solid fa-user-group',         tagline: 'Joyful, vibrant crystals for a sparkling bond',            keywords: ['citrine','amethyst','seven chakra','happiness','joy','clear quartz'],        fallback: 'bracelets', color: '#C8956C', bg: 'rgba(200,149,108,0.12)', order: 1 },
  { key: 'family',    label: 'Family',           subtitle: 'Parents & loved ones',    icon: 'fa-solid fa-people-roof',        tagline: 'Protective, healing stones for the home',                  keywords: ['protection','black','obsidian','tourmaline','family','healing'],             fallback: 'bracelets', color: '#9B8940', bg: 'rgba(155,137,64,0.12)',  order: 2 },
  { key: 'brother',   label: 'Brother',          subtitle: 'Strong & grounded',       icon: 'fa-solid fa-shield-halved',      tagline: 'Grounding crystals for strength & confidence',              keywords: ['tiger','pyrite','onyx','hematite','triple protection','obsidian'],          fallback: 'bracelets', color: '#2E86AB', bg: 'rgba(46,134,171,0.12)',  order: 3 },
  { key: 'sister',    label: 'Sister',           subtitle: 'Radiant & free',          icon: 'fa-solid fa-star',               tagline: 'Feminine crystals for grace & intuition',                  keywords: ['moonstone','rose quartz','pink','amethyst','labradorite','angel'],          fallback: 'bracelets', color: '#C45FA0', bg: 'rgba(196,95,160,0.12)', order: 4 },
  { key: 'mother',    label: 'Mother',           subtitle: 'Nurturing & divine',      icon: 'fa-solid fa-hand-holding-heart', tagline: 'Loving crystals to honour the goddess in her',             keywords: ['rose quartz','moonstone','pink','nurturing','pearl','love','rose'],         fallback: 'bracelets', color: '#E8647A', bg: 'rgba(232,100,122,0.12)', order: 5 },
  { key: 'father',    label: 'Father',           subtitle: 'Strong & wise',           icon: 'fa-solid fa-mountain-sun',       tagline: 'Grounding stones for the pillar of the family',            keywords: ['tiger','pyrite','obsidian','hematite','strength','protection','black'],     fallback: 'bracelets', color: '#5D6D7E', bg: 'rgba(93,109,126,0.12)',  order: 6 },
  { key: 'colleague', label: 'Colleague',        subtitle: 'Success & clarity',       icon: 'fa-solid fa-briefcase',          tagline: 'Crystals for focus, abundance & career wins',              keywords: ['citrine','pyrite','green aventurine','success','abundance','clear quartz'], fallback: 'bracelets', color: '#1A8C6E', bg: 'rgba(26,140,110,0.12)',  order: 7 },
  { key: 'bride',     label: 'Bride / Wedding',  subtitle: 'New beginnings',          icon: 'fa-solid fa-ring',               tagline: 'Blessings for love, harmony & a beautiful union',          keywords: ['rose quartz','moonstone','pink','love','harmony','pearl','angel'],          fallback: 'bracelets', color: '#C45FA0', bg: 'rgba(196,95,160,0.12)', order: 8 },
  { key: 'teacher',   label: 'Teacher / Mentor', subtitle: 'Wisdom & guidance',       icon: 'fa-solid fa-graduation-cap',     tagline: 'Crystals of wisdom, clarity and calm energy',              keywords: ['amethyst','lapis','sodalite','clear quartz','wisdom','blue','labradorite'], fallback: 'bracelets', color: '#5B4FCF', bg: 'rgba(91,79,207,0.12)',  order: 9 },
  { key: 'self',      label: 'Yourself',         subtitle: 'You deserve it',          icon: 'fa-solid fa-spa',                tagline: 'Your soul picked this — trust the pull',                   keywords: [],                                                                          fallback: 'bracelets', color: '#27AE60', bg: 'rgba(39,174,96,0.12)',   order: 10 },
];

export default async function AdminGiftingPage() {
  await connectMongoose();

  // Seed defaults if DB is empty
  const count = await GiftingRecipient.countDocuments();
  if (count === 0) {
    await GiftingRecipient.insertMany(DEFAULTS);
  }

  const items = await GiftingRecipient.find({}).sort({ order: 1 }).lean();
  const serialized = items.map((i) => ({
    _id: String(i._id),
    key: i.key,
    label: i.label,
    subtitle: i.subtitle ?? '',
    icon: i.icon ?? 'fa-solid fa-gift',
    tagline: i.tagline ?? '',
    keywords: i.keywords ?? [],
    fallback: i.fallback ?? 'bracelets',
    color: i.color ?? '#C8956C',
    bg: i.bg ?? 'rgba(200,149,108,0.12)',
    order: i.order ?? 0,
  }));

  return <GiftingAdmin initialItems={serialized} />;
}
