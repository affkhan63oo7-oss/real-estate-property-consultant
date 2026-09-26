export interface TowerResidence {
  id: string;
  residenceNumber: string;
  floor: number;
  type: string;
  tagline: string;
  price: number;
  priceFormatted: string;
  bedrooms: number;
  bathrooms: number;
  powderRooms: number;
  interiorSqFt: number;
  exteriorSqFt?: number;
  exposure: string;
  ceilingHeight: string;
  imageHero: string;
  imageDetail: string;
  floorPlanUrl: string;
  description: string;
  keyFeatures: string[];
  location?: string;
  category?: 'Buy' | 'Rent' | 'Commercial' | 'Residential';
}

export interface BusinessService {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  scope: string;
  image: string;
  featurePoints: string[];
}

export const TOWER_RESIDENCES: TowerResidence[] = [
  {
    id: 'res-kandivali-3bhk',
    residenceNumber: '3 BHK Premium Residence',
    floor: 18,
    type: 'Residential Property for Sale',
    tagline: 'Well-ventilated high-floor residence with open city views in Kandivali East.',
    price: 24500000,
    priceFormatted: '₹2.45 Cr',
    bedrooms: 3,
    bathrooms: 3,
    powderRooms: 0,
    interiorSqFt: 1180,
    exposure: 'East / North Facing',
    ceilingHeight: '10 FT',
    imageHero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    description: 'A spacious 3 BHK residential layout situated on an upper floor with ample natural light, cross-ventilation, and unobstructed views. Located in a prime residential pocket of Kandivali East with direct access to local conveniences, schools, and transit links.',
    keyFeatures: [
      'Prime residential location in Kandivali East, Mumbai',
      'Spacious living-dining layout with dedicated balcony space',
      'Master bedroom with ensuite bathroom and wardrobe niche',
      'Gated residential society with 24/7 security and elevators',
      'Assistance with verified property paperwork and bank loan coordination'
    ],
    location: 'Kandivali East, Mumbai',
    category: 'Buy'
  },
  {
    id: 'res-kandivali-2bhk',
    residenceNumber: '2 BHK Modern Apartment',
    floor: 12,
    type: 'Residential Property for Sale',
    tagline: 'Thoughtfully designed 2 BHK home ideal for families seeking connectivity and comfort.',
    price: 16500000,
    priceFormatted: '₹1.65 Cr',
    bedrooms: 2,
    bathrooms: 2,
    powderRooms: 0,
    interiorSqFt: 780,
    exposure: 'North / West Facing',
    ceilingHeight: '10 FT',
    imageHero: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Efficiently planned 2 BHK flat offering comfortable living areas, modern kitchen platform, and peaceful residential surroundings in Kandivali East. Close to Western Express Highway and Western Line suburban railway.',
    keyFeatures: [
      'Proximity to Western Express Highway and metro station',
      'Well-lit bedrooms with vitrified flooring throughout',
      'Modular kitchen setup with piped gas provision',
      'Reserved covered parking space and visitor parking',
      'Transparent title verification and property consultation'
    ],
    location: 'Kandivali East, Mumbai',
    category: 'Buy'
  },
  {
    id: 'res-kandivali-4bhk',
    residenceNumber: '4 BHK Luxury Deck Residence',
    floor: 24,
    type: 'Residential Property for Sale',
    tagline: 'Expansive family residence featuring panoramic green vistas and premium layout.',
    price: 39500000,
    priceFormatted: '₹3.95 Cr',
    bedrooms: 4,
    bathrooms: 4,
    powderRooms: 1,
    interiorSqFt: 1850,
    exposure: 'East / South Panoramic',
    ceilingHeight: '11 FT',
    imageHero: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'Generously proportioned 4 BHK residence offering large living spaces, dedicated dining zone, and open decks framing views toward the Sanjay Gandhi National Park greens and the Mumbai city skyline.',
    keyFeatures: [
      'High-floor configuration with expansive wide-deck balcony',
      'Four ensuite bedrooms with private bath suites',
      'Modern modular kitchen with adjoining utility and service area',
      'Clubhouse, fitness center, and landscaped garden amenities',
      'Full guidance on legal evaluation and ownership transfer'
    ],
    location: 'Kandivali East, Mumbai',
    category: 'Buy'
  },
  {
    id: 'res-comm-office',
    residenceNumber: 'Commercial Office Space',
    floor: 7,
    type: 'Commercial Real Estate',
    tagline: 'Prime commercial office space suited for corporate setups, clinics, or consultancies.',
    price: 21000000,
    priceFormatted: '₹2.10 Cr',
    bedrooms: 0,
    bathrooms: 2,
    powderRooms: 0,
    interiorSqFt: 950,
    exposure: 'Main Road Frontage',
    ceilingHeight: '12 FT',
    imageHero: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: 'Strategic commercial unit situated in a well-connected commercial complex in Kandivali East. Features open floor-plate flexibility, high ceiling clearance, power backup, and prominent road visibility.',
    keyFeatures: [
      'Prominent business commercial hub in Kandivali East',
      'Suitable for corporate office, consultancy, IT, or healthcare clinic',
      '24/7 building access with multiple high-speed elevators',
      'Close to metro corridor and public transport nodes',
      'Dedicated commercial leasing & sale advisory support'
    ],
    location: 'Kandivali East, Mumbai',
    category: 'Commercial'
  },
  {
    id: 'res-rental-2bhk',
    residenceNumber: '2 BHK Rental Residence',
    floor: 9,
    type: 'Property Rental / Lease',
    tagline: 'Semi-furnished 2 BHK apartment available for immediate family or corporate lease.',
    price: 45000,
    priceFormatted: '₹45,000 / month',
    bedrooms: 2,
    bathrooms: 2,
    powderRooms: 0,
    interiorSqFt: 720,
    exposure: 'Garden Facing',
    ceilingHeight: '10 FT',
    imageHero: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    description: 'Well-maintained rental apartment in an established gated community in Kandivali East. Comes with essential woodwork, modular kitchen, safety grills, and pleasant internal garden exposure.',
    keyFeatures: [
      'Ready to move in with essential fittings and wardrobes',
      'Peaceful society environment with children play zone',
      'Convenient access to local markets, banks, and schools',
      'Assistance with police verification, agreement, and registration',
      'Rental management support for both tenants and landlords'
    ],
    location: 'Kandivali East, Mumbai',
    category: 'Rent'
  }
];

export const PANORAMA_VIEWS = [
  {
    id: 'day',
    label: 'Morning Light',
    time: '09:30 AM',
    headline: 'Western Suburbs Daylight & Connectivity',
    description: 'Expansive vistas stretching across Kandivali East and Mumbai’s western corridor, framed by lush foliage and thriving neighborhoods.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2200&q=90'
  },
  {
    id: 'dusk',
    label: 'Golden Hour',
    time: '06:15 PM',
    headline: 'Warm Sunset Over Mumbai Skyline',
    description: 'Sunlight casts an amber glow across residential towers and arterial highways connecting Kandivali East to the wider metropolis.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2200&q=90'
  },
  {
    id: 'night',
    label: 'Evening Citylights',
    time: '09:45 PM',
    headline: 'Metropolitan Illumination & Community Life',
    description: 'The vibrant evening rhythm of Mumbai comes alive with illuminated transit arteries, neighborhood avenues, and calm residential enclaves.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90'
  }
];

export const SERVICES_DATA: BusinessService[] = [
  {
    id: 'service-1',
    title: 'Residential Property Buying',
    subtitle: 'Service 01 • Buying Assistance',
    category: 'Residential Buying',
    description: 'Assistance for clients looking to find and evaluate residential properties based on their requirements, location preferences and budget.',
    scope: 'Requirement Assessment • Property Scouting • Price Evaluation',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Careful analysis of client budget, configuration, and preferred localities',
      'Shortlisting verified residential options across Kandivali East and Mumbai',
      'Objective evaluation of carpet areas, builder reputation, and layout efficiency',
      'Assistance with property visits and negotiation support'
    ]
  },
  {
    id: 'service-2',
    title: 'Residential Property Selling',
    subtitle: 'Service 02 • Selling Assistance',
    category: 'Residential Selling',
    description: 'Property selling assistance for owners looking to present and market their property to potential buyers.',
    scope: 'Property Valuation • Strategic Presentation • Qualified Buyer Reach',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Realistic market evaluation based on current Mumbai property trends',
      'Preparation and clear presentation of property highlights',
      'Direct outreach to genuine, pre-screened prospective buyers',
      'Guidance through documentation, agreement drafting, and closing procedures'
    ]
  },
  {
    id: 'service-3',
    title: 'Property Rentals',
    subtitle: 'Service 03 • Leasing & Tenancy',
    category: 'Rental Assistance',
    description: 'Assistance with residential and rental property requirements for clients looking to find suitable properties.',
    scope: 'Tenant Matching • Lease Agreements • Property Handover',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Helping tenants discover verified homes that fit their lifestyle needs',
      'Assisting landlords in securing reliable, verified tenants',
      'Coordination of leave-and-license agreements and registration',
      'Smooth move-in and handover guidance'
    ]
  },
  {
    id: 'service-4',
    title: 'Commercial Real Estate',
    subtitle: 'Service 04 • Commercial Support',
    category: 'Commercial Property',
    description: 'Support for clients exploring commercial property opportunities and requirements.',
    scope: 'Office Spaces • Retail Outlets • Commercial Investment',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Support for commercial office spaces, clinics, and business consultancies',
      'Evaluation of footfall, frontage, connectivity, and commercial zoning',
      'Commercial purchase and leasing negotiation assistance',
      'Understanding of business requirements and practical workspace planning'
    ]
  },
  {
    id: 'service-5',
    title: 'Property Management',
    subtitle: 'Service 05 • Asset Care',
    category: 'Property Management',
    description: 'Property-related management assistance for owners who need support with their real-estate assets.',
    scope: 'Tenancy Oversight • Asset Coordination • Owner Peace of Mind',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Support for non-resident and outstation property owners',
      'Tenancy management, agreement renewals, and tenant coordination',
      'Periodic inspection support and asset maintenance monitoring',
      'Dedicated point of contact for property-related matters'
    ]
  },
  {
    id: 'service-6',
    title: 'Real Estate Marketing',
    subtitle: 'Service 06 • Targeted Marketing',
    category: 'Property Marketing',
    description: 'Property marketing support designed to present properties clearly to potential buyers and tenants.',
    scope: 'Clear Presentation • Targeted Outreach • Honest Communication',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Clear, honest photography and accurate property feature articulation',
      'Direct distribution across active buyer and investor networks in Mumbai',
      'Transparent communication without exaggerated marketing claims',
      'Highlighting actual location advantages and real living amenities'
    ]
  },
  {
    id: 'service-7',
    title: 'Property Consultation',
    subtitle: 'Service 07 • Advisory Guidance',
    category: 'Personalised Advisory',
    description: 'Personalised guidance for clients evaluating property options and making real-estate decisions.',
    scope: 'One-on-One Advisory • Market Insight • Goal Alignment',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'One-on-one consultation with Dishank Asija for individual property questions',
      'Objective analysis of market conditions in Kandivali East and Mumbai',
      'Balancing budget considerations with long-term lifestyle and family goals',
      'Unbiased advice focused solely on client best interests'
    ]
  }
];

export const NEIGHBORHOOD_DESTINATIONS = [
  {
    name: 'Western Express Highway (WEH)',
    category: 'Arterial Highway',
    distance: '5 Minutes',
    desc: 'Direct north-south arterial transit spine connecting Kandivali East to Mumbai International Airport, Bandra-Kurla Complex (BKC), and South Mumbai.'
  },
  {
    name: 'Kandivali Railway Station',
    category: 'Suburban Rail',
    distance: '7 Minutes',
    desc: 'Key Western Railway suburban hub with regular fast and slow train access throughout Mumbai’s rail corridor.'
  },
  {
    name: 'Metro Line 7 & Line 2A',
    category: 'Metro Transit',
    distance: '4 Minutes',
    desc: 'Rapid elevated transit network connecting Dahisar, Kandivali, Andheri, and interchanging with Line 1 for East-West cross connectivity.'
  },
  {
    name: 'Growel’s 101 Mall',
    category: 'Retail & Dining',
    distance: '5 Minutes',
    desc: 'Major shopping, dining, entertainment, and department retail center serving residents across Kandivali East.'
  },
  {
    name: 'Thakur Village & Lokhandwala',
    category: 'Civic & Commercial Hub',
    distance: 'Within Vicinity',
    desc: 'Established residential townships featuring reputed schools, healthcare centers, banks, sports clubs, and business avenues.'
  },
  {
    name: 'Sanjay Gandhi National Park',
    category: 'Green Reserve',
    distance: '10 Minutes',
    desc: 'Expansive natural protected forest and green reserve flanking eastern Kandivali, offering clean air and scenic vistas.'
  }
];
