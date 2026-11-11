// Central settings for the whole site. Edit this file to change basics.

export const site = {
  name: 'CurioCanine',
  tagline: 'Positive dog training, brain games and enrichment',
  description:
    'Practical, reward-based ideas for dog training, brain games and daily enrichment, written for dog owners everywhere.',
  language: 'en',

  // Your public contact email. Leave empty until you have one.
  // While empty, the Contact page shows a short "being set up" message.
  contactEmail: '',

  // The ClickBank affiliate link for Brain Training for Dogs.
  // Leave empty until you have your real affiliate link from ClickBank.
  // While empty, NO buy/visit button is shown anywhere on the site.
  affiliateUrl: '',

  // Date shown on the policy pages.
  policiesUpdated: 'November 11, 2026',
};

export const primaryNav = [
  { label: 'Guides', href: '/guides/' },
  { label: 'Dog Training', href: '/dog-training/' },
  { label: 'Brain Games', href: '/brain-games/' },
  { label: 'Dog Enrichment', href: '/dog-enrichment/' },
  { label: 'Puppy Training', href: '/puppy-training/' },
  { label: 'Product Reviews', href: '/product-reviews/' },
  { label: 'Enrichment Planner', href: '/enrichment-planner/' },
];

export const footerNav = [
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Affiliate Disclosure', href: '/affiliate-disclosure/' },
];

export const categories = {
  'dog-training': { label: 'Dog Training', href: '/dog-training/' },
  'brain-games': { label: 'Brain Games', href: '/brain-games/' },
  'dog-enrichment': { label: 'Dog Enrichment', href: '/dog-enrichment/' },
  'puppy-training': { label: 'Puppy Training', href: '/puppy-training/' },
} as const;

export type CategoryKey = keyof typeof categories;
