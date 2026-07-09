'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import ScrollFade from '@/components/ScrollFade';
import type { CatalogProduct } from '@/lib/catalog';

const ITEMS_PER_PAGE = 30;

// Curated display order for the "All Collections" view (featured sort).
// Products are matched by name prefix (case-insensitive).
const FEATURED_ORDER: string[] = [
  // ── Bracelets (Priority 1) ───────────────────────────────────────────────
  'Money Magnet Bracelet',
  'Triple Protection Bracelet',
  'Amethyst Bracelet',
  'Citrine Bracelet',
  'Black Tourmaline Bracelet',
  'Rose Quartz Bracelet',

  // ── Pyramids ─────────────────────────────────────────────────────────────
  'Lapis Lazuli Pyramid',
  'Lakshmi Pyramid',
  'Laxmi Aura Pyramid',
  'Seven Chakra Pyramid',
  'Black Tourmaline Pyramid',
  'Rose Quartz Pyramid',

  // ── Rings ─────────────────────────────────────────────────────────────────
  'Pyrite Ring',
  'Malachite Half Moon Ring',
  'Half Moon Malachite Ring',
  'Clear Quartz Dolphin Ring',
  'Moonstone Ring',
  'Black Onyx Ring',

  // ── Designer Pendants ─────────────────────────────────────────────────────
  'Silver Plated Evil Eye Pendant',
  'Hamsa Evil Eye Pendant',
  'Green Aventurine Pendant',
  'Amethyst Pendant',
  'Black Tourmaline Pendant',

  // ── Face Rollers ─────────────────────────────────────────────────────────
  'Green Jade Face Roller',
  'Opal Face Roller',
  'Tiger Eye Face Roller',
  'Rose Quartz Face Roller',
  'Amethyst Face Roller',

  // ── Malas ─────────────────────────────────────────────────────────────────
  'Karungali Mala',
  'Turquoise Mala',
  'Seven Chakra Mala',
  'Peridot Mala',
  'Black Tourmaline Mala',

  // ── Designer Bracelets ────────────────────────────────────────────────────
  'Natural Mother Of Pearl Shell Bracelet',
  'Natural Mother of Pearl',
  'Green Mother Of Pearl Shell Bracelet',
  'Earth-Tone Mother Of Pearl Bracelet',
  'Earth Tone Mother of Pearl',
  'Red Jasper Bracelet',
  'Seven Chakra Bracelet',

  // ── Trees (Home Decor) ────────────────────────────────────────────────────
  'Gomati Chakra + Rudraksh + Pearl + Seven Chakra tree',
  'Gomati Chakra + Rudraksha + Pearl + Seven Chakra Tree',
  'Rose Quartz Big Tree',
  'Citrine Small Tree',
  'Lapis Lazuli Small Tree',
  'Seven Chakra Tree',

  // ── Priority 2 (remaining popular items) ─────────────────────────────────
  'Pyrite Bracelet',
  'Tiger Eye Bracelet',
  'Green Aventurine Bracelet',
  'Seven Chakra + Om Mani Padme Hum Bracelet',
  'Rudraksha Bracelet',
  'Angel Aura Bracelet',
  'Clear Quartz Bracelet',
  'Moonstone Bracelet',
  'Smoky Quartz Bracelet',
  'Rhodonite Bracelet',
  'Kunzite Bracelet',
  'Malachite Bracelet',
  'Evil Eye Bracelet',
  'Golden Pyrite Bracelet',
  'Silver Evil Eye Pendant',
  'Lakshmi Pyramid',
  'Pyrite raw crystal',
  'Selenite Lamp',
  'Amethyst Water Bottle',
  'Rhodonite Tower',
  'Selenite Bowl',
  'Rock Crystal Pyramid',
  'Green Aventurine Face Roller & Gua Sha',
  'Amethyst Face Roller & Gua Sha',
  'Green Aventurine Gua Sha',
  'Swan Pair',
];

function featuredIndex(name: string): number {
  const n = name.toLowerCase();
  const idx = FEATURED_ORDER.findIndex((pn) => n.startsWith(pn.toLowerCase()));
  return idx === -1 ? FEATURED_ORDER.length : idx;
}

const CATEGORY_PRIORITIES: Record<string, string[]> = {
  'bracelets-by-crystals': [
    'Money Magnet Bracelet',
    'Triple Protection Bracelet',
    'Amethyst Bracelet',
    'Citrine Bracelet',
    'Black Tourmaline Bracelet',
    'Rose Quartz Bracelet',
  ],
  'pyramids': [
    'Lapis Lazuli Pyramid',
    'Laxmi Aura Pyramid',
    'Lakshmi Pyramid',
    'Seven Chakra Pyramid',
    'Black Tourmaline Pyramid',
    'Rose Quartz Pyramid',
  ],
  'crystal-rings': [
    'Pyrite Ring',
    'Malachite Half Moon Ring',
    'Half Moon Malachite Ring',
    'Clear Quartz Dolphin Ring',
    'Moonstone Ring',
    'Black Onyx Ring',
  ],
  'designer-pendants': [
    'Silver Plated Evil Eye Pendant',
    'Hamsa Evil Eye Pendant',
    'Green Aventurine Pendant',
    'Amethyst Pendant',
    'Black Tourmaline Heart Pendant',
    'Black Tourmaline Pendant',
  ],
  'glow-essentials': [
    'Green Jade Face Roller',
    'Opal Face Roller',
    'Tiger Eye Face Roller',
    'Rose Quartz Face Roller',
    'Amethyst Face Roller',
  ],
  'malas': [
    'Karungali Mala',
    'Turquoise Mala',
    'Seven Chakra Beaded Mala',
    'Seven Chakra Mala',
    'Peridot Mala',
    'Black Tourmaline Mala',
  ],
  'designer-bracelets': [
    'Natural Mother Of Pearl Shell Bracelet',
    'Natural Mother of Pearl',
    'Green Mother Of Pearl Shell Bracelet',
    'Green Mother of Pearl',
    'Earth-Tone Mother Of Pearl Bracelet',
    'Earth Tone Mother of Pearl',
    'Red Jasper Bracelet',
    'Seven Chakra Bracelet',
  ],
  'home-decor': [
    'Gomati Chakra + Rudraksh + Pearl + Seven Chakra tree',
    'Gomati Chakra + Rudraksha + Pearl + Seven Chakra Tree',
    'Rose Quartz Big Tree',
    'Rose Quartz Tree',
    'Citrine Small Tree',
    'Citrine Tree',
    'Lapis Lazuli Small Tree',
    'Lapis Lazuli Tree',
    'Seven Chakra Tree',
  ]
};

function getCategoryPriorityIndex(activeCat: string, name: string): number {
  const priorities = CATEGORY_PRIORITIES[activeCat];
  if (!priorities) return 999;
  const n = name.toLowerCase().replace(/[\s-+()]/g, '');
  const idx = priorities.findIndex((pName) => {
    const pn = pName.toLowerCase().replace(/[\s-+()]/g, '');
    return n.includes(pn) || pn.includes(n);
  });
  return idx === -1 ? 999 : idx;
}

function getProductCategoryKey(p: CatalogProduct): string {
  const cat = (p.category || '').toLowerCase();
  const sub = (p.subcategory || '').toLowerCase();
  if (sub === 'designer bracelets') return 'designer-bracelets';
  if (sub === 'signature bracelets') return 'signature';
  if (sub === 'zodiac bracelets') return 'zodiac-bracelets';
  if (cat === 'bracelets') return 'bracelets-by-crystals';
  if (cat === 'malas') return 'malas';
  if (cat === 'pendants') return 'pendants';
  if (cat === 'designer-pendants') return 'designer-pendants';
  if (cat === 'silver-jewelry') return 'silver-jewelry';
  if (cat === 'jewellery') return 'jewellery';
  if (cat === 'anklets') return 'anklets';
  if (cat === 'glow-essentials') return 'glow-essentials';
  if (cat === 'crystal-towers') return 'crystal-towers';
  if (cat === 'pyramids') return 'pyramids';
  if (cat === 'raw-crystal') return 'raw-crystal';
  if (cat === 'gemstones') return 'gemstones';
  if (cat === 'rings') return 'crystal-rings';
  if (cat === 'home-decor') return 'home-decor';
  if (cat === 'spell-jars') return 'spell-jars';
  return 'view-all';
}

const CATEGORIES: { key: string; label: string; icon: string }[] = [
  { key: 'all',                   label: 'All Collections',       icon: 'fa-solid fa-gem' },
  // --- Client Preferred Sequence ---
  { key: 'bracelets-by-crystals', label: 'Bracelets',             icon: 'fa-solid fa-circle-notch' },
  { key: 'pyramids',              label: 'Pyramids',              icon: 'fa-solid fa-play' },
  { key: 'crystal-rings',         label: 'Crystal Rings',         icon: 'fa-solid fa-ring' },
  { key: 'designer-pendants',     label: 'Designer Pendants',     icon: 'fa-solid fa-star' },
  { key: 'glow-essentials',       label: 'Glow Essentials',       icon: 'fa-solid fa-spa' },
  { key: 'malas',                 label: 'Malas',                 icon: 'fa-solid fa-om' },
  { key: 'designer-bracelets',    label: 'Designer Bracelets',    icon: 'fa-solid fa-wand-magic-sparkles' },
  { key: 'home-decor',            label: 'Home Decor',            icon: 'fa-solid fa-house' },
  // --- Other Categories ---
  { key: 'signature',             label: 'Signature Crystals',    icon: 'fa-solid fa-crown' },
  { key: 'spell-jars',            label: 'Spell Jars',            icon: 'fa-solid fa-jar' },
  { key: 'zodiac-bracelets',      label: 'Zodiac Bracelets',      icon: 'fa-solid fa-star-and-crescent' },
  { key: 'pendants',              label: 'Pendants',              icon: 'fa-solid fa-gem' },
  { key: 'silver-jewelry',        label: 'Silver Jewelry',        icon: 'fa-solid fa-ring' },
  { key: 'jewellery',             label: 'Jewellery',             icon: 'fa-solid fa-gem' },
  { key: 'anklets',               label: 'Anklets',               icon: 'fa-solid fa-link' },
  { key: 'crystal-towers',        label: 'Crystal Towers',        icon: 'fa-solid fa-mountain' },
  { key: 'raw-crystal',           label: 'Raw Crystals',          icon: 'fa-solid fa-cubes' },
  { key: 'gemstones',             label: 'Gemstones',             icon: 'fa-solid fa-gem' },
];

const STATIC_CATEGORY_IMAGES: Record<string, string> = {
  'view-all': '/categories/all.png',
  'designer-bracelets': '/categories/designer-bracelets.png',
  'signature': '/categories/signature.png',
  'spell-jars': '/categories/spell-jars.png',
  'bracelets-by-crystals': '/categories/bracelets.png',
  'malas': '/categories/malas.png',
  'pendants': '/categories/pendants.png',
  'designer-pendants': '/categories/designer-pendants.png',
  'silver-jewelry': '/categories/silver-jewelry.png',
  'anklets': '/categories/anklets.png',
  'glow-essentials': '/categories/glow-essentials.png',
  'crystal-towers': '/categories/crystal-towers.png',
  'pyramids': '/categories/pyramids.png',
  'raw-crystal': '/categories/raw-crystal.png',
  'gemstones': '/categories/gemstones.webp',
  'jewellery': '/categories/jewellery.webp',
  'zodiac-bracelets': '/categories/zodiac.webp',
  'crystal-rings': '/categories/crystal-rings.png',
  'home-decor': '/categories/home-decor.png',
};

const SORTS = [
  { key: 'featured', label: 'Featured' },
  { key: 'price-asc', label: 'Price: Low → High' },
  { key: 'price-desc', label: 'Price: High → Low' },
  { key: 'name', label: 'Name (A–Z)' },
];

// Shared category → product matcher (mirrors the filter switch below) so the
// per-category rows on the Collections landing use identical grouping rules.
function matchesCategory(p: CatalogProduct, catKey: string): boolean {
  const sub = (p.subcategory || '').toLowerCase();
  const cat = (p.category || '').toLowerCase();
  switch (catKey) {
    case 'bracelets-by-crystals': return cat === 'bracelets' && sub !== 'designer bracelets' && sub !== 'signature bracelets' && sub !== 'zodiac bracelets';
    case 'zodiac-bracelets':      return cat === 'bracelets' && sub === 'zodiac bracelets';
    case 'designer-bracelets':    return sub === 'designer bracelets';
    case 'signature':             return sub === 'signature bracelets';
    case 'malas':                 return cat === 'malas';
    case 'pendants':              return cat === 'pendants';
    case 'designer-pendants':     return cat === 'designer-pendants';
    case 'silver-jewelry':        return cat === 'silver-jewelry' && sub === 'rudraksha';
    case 'jewellery':             return cat === 'jewellery';
    case 'gemstones':             return cat === 'gemstones';
    case 'anklets':               return cat === 'anklets';
    case 'glow-essentials':       return cat === 'glow-essentials';
    case 'crystal-towers':        return cat === 'crystal-towers';
    case 'pyramids':              return cat === 'pyramids';
    case 'raw-crystal':           return cat === 'raw-crystal';
    case 'crystal-rings':         return cat === 'rings';
    case 'home-decor':            return cat === 'home-decor';
    case 'spell-jars':            return cat === 'spell-jars';
    default:                      return false;
  }
}

// Reshape DB product to the legacy { id, ... } shape ProductCard expects.
function toLegacy(p: CatalogProduct) {
  return {
    id: p.slug,
    name: p.name,
    category: p.category,
    subcategory: p.subcategory,
    price: p.price,
    originalPrice: p.originalPrice,
    image: p.image,
    badge: p.badge,
    desc: p.desc,
    chakras: p.chakras,
  };
}

export default function ShopFilters({ products, categoryImages = {}, categoryRows = {} }: { products: CatalogProduct[]; categoryImages?: Record<string, string>; categoryRows?: Record<string, string[]> }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCat = searchParams.get('category') || 'all';
  const [sort, setSort] = useState('featured');
  const [query, setQuery] = useState(searchParams.get('intent') || searchParams.get('search') || '');
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const isLoaded = useRef(false);

  // Reset to page 1 whenever category, sort, or search query changes
  useEffect(() => {
    Promise.resolve().then(() => {
      setCurrentPage(1);
    });
  }, [activeCat, sort, query]);

  // Capture the saved page ONCE during render — before any effect can overwrite it,
  // and stable across React StrictMode's dev double-mount.
  const savedPageRef = useRef<number | null>(null);
  if (savedPageRef.current === null) {
    savedPageRef.current = typeof window !== 'undefined'
      ? (Number(sessionStorage.getItem('last_shop_page')) || 1)
      : 1;
  }

  // On mount, restore that page (e.g. after opening a product and hitting Back).
  // Deferred via a macrotask so it lands AFTER the "reset to page 1" microtask and wins.
  useEffect(() => {
    const saved = savedPageRef.current || 1;
    if (saved > 1) {
      const id = setTimeout(() => setCurrentPage(saved), 0);
      return () => clearTimeout(id);
    }
  }, []);

  // Persist the current page so it survives navigating to a product and back.
  useEffect(() => {
    sessionStorage.setItem('last_shop_page', String(currentPage));
  }, [currentPage]);

  // Load from sessionStorage on mount if URL does not have overrides
  useEffect(() => {
    if (isLoaded.current) {
      const hasIntent = searchParams.has('intent');
      const hasSearch = searchParams.has('search');
      if (!hasIntent && !hasSearch) {
        setQuery('');
      } else {
        setQuery(searchParams.get('intent') || searchParams.get('search') || '');
      }
      return;
    }
    isLoaded.current = true;

    const hasCategory = searchParams.has('category');
    const hasIntent = searchParams.has('intent');
    const hasSearch = searchParams.has('search');

    if (!hasCategory) {
      const storedCat = sessionStorage.getItem('last_shop_category');
      if (storedCat && storedCat !== 'all') {
        router.replace(`/shop?category=${storedCat}`, { scroll: false });
      }
    }
    const storedSort = sessionStorage.getItem('last_shop_sort');
    if (storedSort) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSort(storedSort);
    }
    if (hasIntent || hasSearch) {
      setQuery(searchParams.get('intent') || searchParams.get('search') || '');
    } else {
      if (!hasCategory) {
        const storedQuery = sessionStorage.getItem('last_shop_query');
        if (storedQuery) {
          setQuery(storedQuery);
        }
      } else {
        setQuery('');
      }
    }
  }, [searchParams, router, activeCat]);

  // Persist category, sort, and query to sessionStorage when they change
  useEffect(() => {
    sessionStorage.setItem('last_shop_category', activeCat);
  }, [activeCat]);

  useEffect(() => {
    sessionStorage.setItem('last_shop_sort', sort);
  }, [sort]);

  useEffect(() => {
    sessionStorage.setItem('last_shop_query', query);
  }, [query]);

  const filtered = useMemo(() => {
    const norm = (s: string | undefined) => (s || '').toLowerCase();

    // Show the full catalog; each tab narrows by category / subcategory.
    let list = [...products];

    // "view-all" tab: show one product per unique name (no duplicates)
    if (activeCat === 'view-all') {
      const seen = new Set<string>();
      list = list.filter((p) => {
        const key = p.name.toLowerCase().trim();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }

    if (activeCat !== 'all' && activeCat !== 'view-all') {
      list = products.filter((p) => {
        const sub = norm(p.subcategory);
        const cat = norm(p.category);
        switch (activeCat) {
          case 'bracelets-by-crystals': return cat === 'bracelets' && sub !== 'designer bracelets' && sub !== 'signature bracelets' && sub !== 'zodiac bracelets';
          case 'zodiac-bracelets':      return cat === 'bracelets' && sub === 'zodiac bracelets';
          case 'designer-bracelets':    return sub === 'designer bracelets';
          case 'signature':             return sub === 'signature bracelets';
          case 'malas':                 return cat === 'malas';
          case 'pendants':              return cat === 'pendants';
          case 'designer-pendants':     return cat === 'designer-pendants';
          case 'silver-jewelry':        return cat === 'silver-jewelry' && sub === 'rudraksha';
          case 'jewellery':             return cat === 'jewellery';
          case 'gemstones':             return cat === 'gemstones';
          case 'anklets':               return cat === 'anklets';
          case 'glow-essentials':       return cat === 'glow-essentials';
          case 'crystal-towers':        return cat === 'crystal-towers';
          case 'pyramids':              return cat === 'pyramids';
          case 'raw-crystal':           return cat === 'raw-crystal';
          case 'designer-crystals':     return cat === 'designer-crystals';
          case 'crystal-rings':         return cat === 'rings';
          case 'home-decor':            return cat === 'home-decor';
          case 'spell-jars':            return cat === 'spell-jars';
          default:                      return false;
        }
      });
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        (p.desc ?? '').toLowerCase().includes(q),
      );
    }
    switch (sort) {
      case 'price-asc':  list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'name':       list.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'featured':
        // On "All Collections" apply curated priority order; other categories apply category-specific priorities.
        if (activeCat === 'all' || activeCat === 'view-all') {
          list.sort((a, b) => featuredIndex(a.name) - featuredIndex(b.name));
        } else {
          list.sort((a, b) => getCategoryPriorityIndex(activeCat, a.name) - getCategoryPriorityIndex(activeCat, b.name));
        }
        break;
    }
    return list;
  }, [products, activeCat, sort, query]);

  const isViewAll = activeCat === 'view-all';

  const viewAllData = useMemo(() => {
    if (!isViewAll) return { shownOnPage1: [], shownOnPage2: [], remainingProducts: [], page1FullCategories: [], page1IncompleteProducts: [], page2FullCategories: [], page2IncompleteProducts: [] };

    // Get all active categories with matching products sorted by priority
    const activeCats = CATEGORIES.filter((c) => c.key !== 'all' && c.key !== 'view-all')
      .map((c) => {
        const catProducts = filtered.filter((p) => matchesCategory(p, c.key))
          .sort((a, b) => getCategoryPriorityIndex(c.key, a.name) - getCategoryPriorityIndex(c.key, b.name));
        return { category: c, products: catProducts };
      })
      .filter((item) => item.products.length > 0);

    // --- Page 1 Categories ---
    const page1Full = activeCats.filter((item) => item.products.length >= 5);
    const page1Incomplete = activeCats.filter((item) => item.products.length < 5);

    const p1Shown: CatalogProduct[] = [];
    page1Full.forEach(({ products }) => {
      p1Shown.push(...products.slice(0, 5));
    });
    
    const p1IncompleteProds: CatalogProduct[] = [];
    page1Incomplete.forEach(({ products }) => {
      p1IncompleteProds.push(...products);
    });
    p1Shown.push(...p1IncompleteProds);

    // --- Page 2 Categories ---
    // Extract products in index range 5 to 10 for each category
    const page2Cats = activeCats
      .map(({ category, products }) => ({
        category,
        productsRange: products.slice(5, 10),
      }))
      .filter((item) => item.productsRange.length > 0);

    const page2Full = page2Cats.filter((item) => item.productsRange.length >= 5);
    const page2Incomplete = page2Cats.filter((item) => item.productsRange.length < 5);

    const p2Shown: CatalogProduct[] = [];
    page2Full.forEach(({ productsRange }) => {
      p2Shown.push(...productsRange);
    });

    const p2IncompleteProds: CatalogProduct[] = [];
    page2Incomplete.forEach(({ productsRange }) => {
      p2IncompleteProds.push(...productsRange);
    });
    p2Shown.push(...p2IncompleteProds);

    // --- Remaining Products (Page 3 onwards) ---
    const allShown = [...p1Shown, ...p2Shown];
    const remaining = filtered.filter((p) => !allShown.some((sp) => sp.slug === p.slug));

    return { 
      shownOnPage1: p1Shown, 
      shownOnPage2: p2Shown,
      remainingProducts: remaining, 
      page1FullCategories: page1Full, 
      page1IncompleteProducts: p1IncompleteProds,
      page2FullCategories: page2Full,
      page2IncompleteProducts: p2IncompleteProds
    };
  }, [filtered, isViewAll]);

  const totalPages = useMemo(() => {
    if (isViewAll) {
      return 2 + Math.ceil(viewAllData.remainingProducts.length / ITEMS_PER_PAGE);
    }
    return Math.ceil(filtered.length / ITEMS_PER_PAGE);
  }, [filtered, isViewAll, viewAllData.remainingProducts.length]);

  const paginatedProducts = useMemo(() => {
    if (isViewAll) {
      if (currentPage === 1) {
        return viewAllData.shownOnPage1;
      }
      if (currentPage === 2) {
        return viewAllData.shownOnPage2;
      }
      const start = (currentPage - 3) * ITEMS_PER_PAGE;
      return viewAllData.remainingProducts.slice(start, start + ITEMS_PER_PAGE);
    }
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage, isViewAll, viewAllData]);


  const CARDS = useMemo(() => {
    return [
      { key: 'view-all', label: 'All Products', icon: 'fa-solid fa-gem' },
      ...CATEGORIES.filter((c) => c.key !== 'all'),
    ];
  }, []);

  const getCategoryImage = (catKey: string): string => {
    if (categoryImages[catKey]) return categoryImages[catKey];
    if (STATIC_CATEGORY_IMAGES[catKey]) {
      return STATIC_CATEGORY_IMAGES[catKey];
    }
    // Dynamic fallback for categories without static images (like rings and home-decor)
    const list = products.filter((p) => {
      const sub = (p.subcategory || '').toLowerCase();
      const cat = (p.category || '').toLowerCase();
      switch (catKey) {
        case 'crystal-rings':         return cat === 'rings';
        case 'home-decor':            return cat === 'home-decor';
        case 'jewellery':             return cat === 'jewellery';
        case 'zodiac-bracelets':      return cat === 'bracelets' && sub === 'zodiac bracelets';
        default:                      return false;
      }
    });
    return list[0]?.image || '/crystal-hero.webp';
  };

  if (activeCat === 'all') {
    return (
      <div style={{ width: '100%' }}>
        <h4 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.35rem',
          color: '#ffffff',
          fontWeight: 700,
          margin: '0 0 24px 0',
          paddingBottom: '12px',
          borderBottom: '2px solid rgba(200, 149, 108, 0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          letterSpacing: '0.04em'
        }}>
          <i className="fa-solid fa-gem" style={{ color: 'var(--primary,#C8956C)', fontSize: '1.15rem' }}></i>
          Explore Our Collections
        </h4>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          marginTop: '20px'
        }}>
          {CARDS.map((c) => {
            const img = getCategoryImage(c.key);
            return (
              <div
                key={c.key}
                onClick={() => {
                  setQuery('');
                  router.replace(`/shop?category=${c.key}`, { scroll: true });
                }}
                className="category-card-premium"
                style={{
                  position: 'relative',
                  aspectRatio: '3 / 4',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(200, 149, 108, 0.15)',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                }}
              >
                {/* Background Image */}
                <img
                  src={img}
                  alt={c.label}
                  className="category-card-bg-img"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    zIndex: 1,
                  }}
                />
                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(12, 4, 2, 0.95) 0%, rgba(12, 4, 2, 0.45) 45%, transparent 100%)',
                  zIndex: 2,
                  pointerEvents: 'none',
                }} />
                {/* Icon Badging (top right) */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFEFA6',
                  zIndex: 3,
                }}>
                  <i className={c.icon} style={{ fontSize: '0.95rem' }}></i>
                </div>
                {/* Content (bottom) */}
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  padding: '24px 20px',
                  zIndex: 3,
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    color: '#fff',
                    fontWeight: 700,
                    margin: '0 0 6px 0',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                  }}>{c.label}</h3>
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--primary, #C8956C)',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    Explore Collection <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem', transition: 'transform 0.3s' }}></i>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const activeCategoryObj = CARDS.find((c) => c.key === activeCat);
  const pageTitle = activeCategoryObj ? activeCategoryObj.label : 'Collection';

  return (
    <div style={{ width: '100%' }}>
      {/* Category Header with Back Button */}
      <div style={{ marginBottom: '28px' }}>
        <button
          onClick={() => {
            setQuery('');
            router.replace('/shop', { scroll: true });
          }}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.65)',
            fontSize: '0.85rem',
            cursor: 'pointer',
            padding: '0',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '12px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary,#C8956C)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
        >
          <i className="fa-solid fa-arrow-left" style={{ fontSize: '0.78rem' }}></i> Back to Collections
        </button>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '2rem',
          color: '#fff',
          fontWeight: 700,
          margin: 0,
          letterSpacing: '0.02em',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <i className={activeCategoryObj?.icon || 'fa-solid fa-gem'} style={{ color: 'var(--primary,#C8956C)', fontSize: '1.4rem' }}></i>
          {pageTitle}
        </h2>
      </div>

      {/* Main Catalog Column */}
      <div style={{ width: '100%', minWidth: 0 }}>
        <div className="row g-3 align-items-center mb-4">
          <div className="col-md-8">
            <div style={{ position: 'relative' }}>
              <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', top: '50%', left: '14px', transform: 'translateY(-50%)', color: '#999' }}></i>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search crystals, e.g. amethyst, mala, sagittarius..."
                className="newsletter-input"
                style={{ width: '100%', paddingLeft: '40px' }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="newsletter-input" style={{ width: '100%' }}>
              {SORTS.map((s) => <option key={s.key} value={s.key}>Sort: {s.label}</option>)}
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-5">
            <p className="section-subtitle">No crystals match your search. Try a different keyword.</p>
            <button className="btn-outline-custom mt-3" onClick={() => { setQuery(''); router.replace('/shop', { scroll: false }); }}>
              <i className="fa-solid fa-rotate-right"></i><span>Reset Filters</span>
            </button>
          </div>
        ) : (activeCat === 'view-all' && currentPage === 1) ? (
          <div>
            {/* 1. Full Categories: Render each category on its own row of 5 */}
            {viewAllData.page1FullCategories.map(({ category: c, products: catProducts }) => {
              const rowProducts = catProducts
                .sort((a, b) => getCategoryPriorityIndex(c.key, a.name) - getCategoryPriorityIndex(c.key, b.name))
                .slice(0, 5);

              return (
                <div key={c.key} style={{ marginBottom: '24px' }}>
                  <div className="shop-products-grid">
                    {rowProducts.map((p, idx) => (
                      <ScrollFade key={p.slug} delay={Math.min(idx, 5) * 40}>
                        <ProductCard product={toLegacy(p)} />
                      </ScrollFade>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* 2. Incomplete Products: Merge all categories with < 5 items into a single continuous grid */}
            {viewAllData.page1IncompleteProducts.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <div className="shop-products-grid">
                  {viewAllData.page1IncompleteProducts.map((p, idx) => (
                    <ScrollFade key={p.slug} delay={Math.min(idx, 5) * 40}>
                      <ProductCard product={toLegacy(p)} />
                    </ScrollFade>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (activeCat === 'view-all' && currentPage === 2) ? (
          <div>
            {/* 1. Full Categories: Render each category on its own row of 5 (next 5 products) */}
            {viewAllData.page2FullCategories.map(({ category: c, productsRange }) => {
              return (
                <div key={c.key} style={{ marginBottom: '24px' }}>
                  <div className="shop-products-grid">
                    {productsRange.map((p, idx) => (
                      <ScrollFade key={p.slug} delay={Math.min(idx, 5) * 40}>
                        <ProductCard product={toLegacy(p)} />
                      </ScrollFade>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* 2. Incomplete Products: Merge all categories with < 5 items left into a single continuous grid */}
            {viewAllData.page2IncompleteProducts.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <div className="shop-products-grid">
                  {viewAllData.page2IncompleteProducts.map((p, idx) => (
                    <ScrollFade key={p.slug} delay={Math.min(idx, 5) * 40}>
                      <ProductCard product={toLegacy(p)} />
                    </ScrollFade>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="shop-products-grid">
            {paginatedProducts.map((p, idx) => (
              <ScrollFade key={p.id} delay={Math.min(idx, 6) * 50}>
                <ProductCard product={toLegacy(p)} />
              </ScrollFade>
            ))}
          </div>
        )}

        {/* Circular Premium Pagination Controls */}
        {totalPages > 1 && (
          <>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              marginTop: 40,
              paddingTop: 24,
              borderTop: '1px solid rgba(200, 149, 108, 0.12)'
            }}>
            {/* Prev Button */}
            <button
              onClick={() => goToPage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 38,
                height: 38,
                borderRadius: '50%',
                border: '1px solid rgba(200, 149, 108, 0.25)',
                background: '#fff',
                color: currentPage === 1 ? '#ccc' : 'var(--primary)',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
              }}
              className="pagination-arrow-btn"
            >
              <i className="fa-solid fa-chevron-left" style={{ fontSize: '0.78rem' }}></i>
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNum = idx + 1;
              const isVisible = 
                totalPages <= 6 || 
                pageNum === 1 || 
                pageNum === totalPages || 
                Math.abs(pageNum - currentPage) <= 1;

              if (!isVisible) {
                if (pageNum === 2 || pageNum === totalPages - 1) {
                  return <span key={pageNum} style={{ color: '#aaa', padding: '0 4px', fontSize: '0.85rem' }}>...</span>;
                }
                return null;
              }

              const active = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    border: active ? 'none' : '1px solid rgba(200, 149, 108, 0.18)',
                    background: active 
                      ? 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)' 
                      : '#fff',
                    color: active ? '#fff' : 'var(--text-light, #7A5C4A)',
                    fontWeight: active ? 700 : 600,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: active ? '0 4px 12px rgba(200, 149, 108, 0.25)' : 'none',
                  }}
                  className="pagination-num-btn"
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 38,
                height: 38,
                borderRadius: '50%',
                border: '1px solid rgba(200, 149, 108, 0.25)',
                background: '#fff',
                color: currentPage === totalPages ? '#ccc' : 'var(--primary)',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
              }}
              className="pagination-arrow-btn"
            >
              <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.78rem' }}></i>
            </button>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link href="/crystal-strength" className="btn-celestial-guide">
              <i className="fa-solid fa-book-open"></i>
              <span>Not sure which crystal? Read the guide</span>
            </Link>
          </div>
          </>
        )}

        <p className="text-center mt-4" style={{ color: 'var(--text-light,#777)', fontSize: '0.88rem' }}>
          Showing {filtered.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1}&ndash;{Math.min(currentPage * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} crystals.
        </p>
      </div>
    </div>
  );
}
