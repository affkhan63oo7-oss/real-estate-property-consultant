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
    id: 'res-residential-properties',
    residenceNumber: 'Residential Properties',
    floor: 12,
    type: 'Residential Properties',
    tagline: 'Premium apartments, luxury flats, and modern residential homes in South Bopal, Ahmedabad.',
    price: 0,
    priceFormatted: 'Contact for Consultation',
    bedrooms: 3,
    bathrooms: 3,
    powderRooms: 1,
    interiorSqFt: 1650,
    exposure: 'East / Garden Facing',
    ceilingHeight: '10.5 FT',
    imageHero: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    description: 'Curated 2, 3, and 4 BHK residential apartments and contemporary flats situated in prime residential communities of South Bopal, Ahmedabad with superb natural light and ventilation.',
    keyFeatures: [
      'Prime residential locations in South Bopal, Ahmedabad',
      'Modern open-plan living, dining, and expansive balconies',
      'Proximity to top schools, shopping centers, and SP Ring Road',
      'Verified clear title documentation and compliance',
      'Dedicated property consultation by South Bopal Real Estate'
    ],
    location: 'South Bopal, Ahmedabad, Gujarat',
    category: 'Residential'
  },
  {
    id: 'res-bungalows-villas',
    residenceNumber: 'Bungalows / Villas',
    floor: 2,
    type: 'Bungalows / Villas',
    tagline: 'Exclusive private bungalows, luxury villas, and independent gated residences.',
    price: 0,
    priceFormatted: 'Contact for Consultation',
    bedrooms: 4,
    bathrooms: 5,
    powderRooms: 1,
    interiorSqFt: 3200,
    exteriorSqFt: 1800,
    exposure: 'North-East Corner',
    ceilingHeight: '11.5 FT',
    imageHero: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    description: 'Bespoke independent bungalows, duplex villas, and premium gated residences in South Bopal, Ahmedabad offering serene private gardens, superior privacy, and luxury finishes.',
    keyFeatures: [
      'Gated bungalow and villa communities with dedicated security',
      'Independent plot ownership with private landscaped gardens',
      'Easy connectivity to SP Ring Road and key Ahmedabad corridors',
      'Full legal due diligence and transparent documentation',
      'Consultation backed by Kishor Udhas'
    ],
    location: 'South Bopal, Ahmedabad, Gujarat',
    category: 'Residential'
  },
  {
    id: 'res-property-buying',
    residenceNumber: 'Property Buying',
    floor: 6,
    type: 'Property Buying',
    tagline: 'Expert end-to-end guidance for acquiring residential properties and bungalows.',
    price: 0,
    priceFormatted: 'Contact for Consultation',
    bedrooms: 3,
    bathrooms: 3,
    powderRooms: 1,
    interiorSqFt: 1850,
    exposure: 'Cross-Ventilated Garden View',
    ceilingHeight: '10.5 FT',
    imageHero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: 'Comprehensive property buying advisory assisting clients in discovering and purchasing verified residential properties, bungalows, and villas across South Bopal, Ahmedabad.',
    keyFeatures: [
      'Fair market valuations and transparent price discovery',
      'Targeted matching for buyers seeking quality homes and bungalows',
      'Complete guidance on deed registration, paperwork, and legal transfer',
      'Focused expertise in South Bopal, Ahmedabad, Gujarat',
      'Direct, personalized advisory from Kishor Udhas'
    ],
    location: 'South Bopal, Ahmedabad, Gujarat',
    category: 'Buy'
  },
  {
    id: 'res-property-selling',
    residenceNumber: 'Property Selling',
    floor: 5,
    type: 'Property Selling',
    tagline: 'Strategic marketing and premium representation for property sellers.',
    price: 0,
    priceFormatted: 'Contact for Consultation',
    bedrooms: 3,
    bathrooms: 3,
    powderRooms: 0,
    interiorSqFt: 1750,
    exposure: 'Prime Boulevard Exposure',
    ceilingHeight: '11 FT',
    imageHero: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'Dedicated property selling services connecting homeowners and sellers with qualified, serious buyers for residential properties and bungalows in South Bopal.',
    keyFeatures: [
      'Active network of genuine, pre-qualified buyers in South Bopal',
      'Accurate property valuation and strategic market positioning',
      'Complete assistance with documentation, NOCs, and deal closure',
      'Dedicated marketing across Ahmedabad real estate channels',
      'Professional representation by South Bopal Real Estate'
    ],
    location: 'South Bopal, Ahmedabad, Gujarat',
    category: 'Residential'
  },
  {
    id: 'res-property-renting',
    residenceNumber: 'Property Renting',
    floor: 8,
    type: 'Property Renting',
    tagline: 'Reliable residential leasing and rental solutions for tenants and owners.',
    price: 0,
    priceFormatted: 'Contact for Consultation',
    bedrooms: 3,
    bathrooms: 3,
    powderRooms: 0,
    interiorSqFt: 1550,
    exposure: 'West / Skyline Facing',
    ceilingHeight: '10 FT',
    imageHero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Comprehensive property renting services connecting verified tenants with premier residential flats, apartments, bungalows, and villas in South Bopal, Ahmedabad.',
    keyFeatures: [
      'Verified tenant profiling and thorough background screening',
      'Quick turnaround times for residential leasing and renting',
      'End-to-end rental agreement drafting and documentation guidance',
      'Extensive rental inventory in South Bopal, Ahmedabad',
      'Complete management support by South Bopal Real Estate'
    ],
    location: 'South Bopal, Ahmedabad, Gujarat',
    category: 'Rent'
  },
  {
    id: 'res-property-consultation',
    residenceNumber: 'Property Consultation',
    floor: 1,
    type: 'Property Consultation',
    tagline: 'Personalized real estate advisory and strategic consulting by Kishor Udhas.',
    price: 0,
    priceFormatted: 'Contact for Consultation',
    bedrooms: 0,
    bathrooms: 1,
    powderRooms: 0,
    interiorSqFt: 1200,
    exposure: 'SOBO Centre Executive Suite',
    ceilingHeight: '11 FT',
    imageHero: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    description: 'Personalized one-on-one property consultation with Kishor Udhas at D 382, SOBO Centre, providing transparent market analysis, valuation, and advisory for buyers, sellers, and investors in South Bopal.',
    keyFeatures: [
      'Direct one-on-one property consultation with Kishor Udhas',
      'In-depth local market intelligence in South Bopal, Ahmedabad',
      'Clear title verification, legal checks, and documentation advice',
      'Office consultation at D 382, SOBO Centre, South Bopal',
      'Objective, client-first advisory tailored to your exact property goals'
    ],
    location: 'South Bopal, Ahmedabad, Gujarat',
    category: 'Residential'
  }
];

export const PANORAMA_VIEWS = [
  {
    id: 'day',
    label: 'Morning Light',
    time: '09:30 AM',
    headline: 'South Bopal Daylight & Growth',
    description: 'Expansive vistas stretching across South Bopal and Ahmedabad’s thriving western growth corridor, framed by modern residential enclaves and green avenues.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2200&q=90'
  },
  {
    id: 'dusk',
    label: 'Golden Hour',
    time: '06:15 PM',
    headline: 'Warm Sunset Over South Bopal Skyline',
    description: 'Golden sunlight illuminates the lively avenues, modern residential communities, and arterial boulevards connecting South Bopal to the SP Ring Road.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2200&q=90'
  },
  {
    id: 'night',
    label: 'Evening Citylights',
    time: '09:45 PM',
    headline: 'Vibrant South Bopal & Ahmedabad Cityscapes',
    description: 'The energetic evening atmosphere comes alive with illuminated commercial destinations like SOBO Centre and tranquil residential enclaves.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90'
  }
];

export const SERVICES_DATA: BusinessService[] = [
  {
    id: 'service-1',
    title: 'Property Buying',
    subtitle: 'Service 01 • Property Buying',
    category: 'Property Buying',
    description: 'End-to-end guidance and advisory for discovering and purchasing verified residential properties, modern flats, bungalows, and villas in South Bopal, Ahmedabad.',
    scope: 'Residential Properties • Bungalows • Villas • Acquisition',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Carefully curated properties across South Bopal, Ahmedabad',
      'Realistic property valuations and buyer-first price negotiation',
      'Transparent verification of title deeds, society NOCs, and municipal records',
      'Direct, dedicated advisory from Kishor Udhas'
    ]
  },
  {
    id: 'service-2',
    title: 'Property Selling',
    subtitle: 'Service 02 • Property Selling',
    category: 'Property Selling',
    description: 'Professional property selling service connecting homeowners and sellers with qualified, serious buyers for residential properties, bungalows, and villas in South Bopal.',
    scope: 'Seller Representation • Property Marketing • Deal Closures',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Targeted matching for serious and verified buyers',
      'Accurate market pricing and strategic positioning',
      'Seamless paperwork, NOC assistance, and transaction closure',
      'Dedicated marketing across South Bopal, Ahmedabad'
    ]
  },
  {
    id: 'service-3',
    title: 'Property Renting',
    subtitle: 'Service 03 • Property Renting',
    category: 'Property Renting',
    description: 'Professional rental and leasing solutions connecting verified tenants with quality residential flats, apartments, bungalows, and villas across South Bopal, Ahmedabad.',
    scope: 'Residential Rentals • Leasing • Tenancy Agreements',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Verified tenant screening and swift occupancy solutions',
      'Comprehensive rental inventory of residential properties and bungalows',
      'Assistance with legal rent agreements and documentation',
      'Complete rental management by South Bopal Real Estate'
    ]
  },
  {
    id: 'service-4',
    title: 'Residential Properties',
    subtitle: 'Service 04 • Residential Properties',
    category: 'Residential Properties',
    description: 'Curated 2, 3, and 4 BHK premium apartments and modern flats situated in prime residential communities of South Bopal, Ahmedabad with excellent light and ventilation.',
    scope: 'Apartments • Flats • Residential Homes • Gated Enclaves',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Prime residential locations in South Bopal growth corridors',
      'Modern open-plan living, dining, and expansive balconies',
      'Proximity to top schools, supermarkets, and SP Ring Road',
      'Dedicated property consultation by South Bopal Real Estate'
    ]
  },
  {
    id: 'service-5',
    title: 'Bungalows / Villas',
    subtitle: 'Service 05 • Bungalows / Villas',
    category: 'Bungalows / Villas',
    description: 'Bespoke independent bungalows, duplex villas, and premium gated residences in South Bopal, Ahmedabad offering serene private gardens and superior privacy.',
    scope: 'Independent Bungalows • Luxury Villas • Private Gardens',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Gated bungalow and villa communities with dedicated security',
      'Independent plot ownership with private garden space',
      'Easy connectivity to SP Ring Road and SG Highway',
      'Consultation backed by Kishor Udhas'
    ]
  },
  {
    id: 'service-6',
    title: 'Property Consultation',
    subtitle: 'Service 06 • Property Consultation',
    category: 'Property Consultation',
    description: 'Strategic one-on-one consultation led by Kishor Udhas — providing objective market analysis, property valuation, legal documentation guidance, and tailored property solutions.',
    scope: 'Advisory • Valuation • Due Diligence • Investment Planning',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Direct, personalized property consultation with Kishor Udhas',
      'Deep insights into South Bopal and Ahmedabad property dynamics',
      'Clear verification of documentation, approvals, and titles',
      'In-person advisory at D 382, SOBO Centre, South Bopal'
    ]
  }
];

export const NEIGHBORHOOD_DESTINATIONS = [
  {
    name: 'SOBO Centre',
    category: 'Prominent Commercial Landmark',
    distance: 'Direct Location',
    desc: 'Premier commercial and retail landmark in South Bopal housing South Bopal Real Estate at D 382.'
  },
  {
    name: 'South Bopal Boulevard',
    category: 'Key Area Corridor',
    distance: '1 Minute',
    desc: 'Thriving arterial avenue with prime residential communities, retail amenities, and dining in South Bopal.'
  },
  {
    name: 'SP Ring Road (Sardar Patel Ring Road)',
    category: 'Arterial Transit Spine',
    distance: '3 Minutes',
    desc: 'Vital ring highway providing seamless rapid connectivity across South Bopal, SG Highway, and greater Ahmedabad.'
  },
  {
    name: 'Western Ahmedabad Residential Hub',
    category: 'Premium Living Corridor',
    distance: '5 Minutes',
    desc: 'Rapidly growing residential sector known for luxury apartments, bungalows, premier schools, and clubs.'
  },
  {
    name: 'SG Highway (Sarkhej-Gandhinagar)',
    category: 'Major Business Corridor',
    distance: '10 Minutes',
    desc: 'Ahmedabad’s premier commercial avenue with corporate headquarters, upscale shopping destinations, and hospitals.'
  },
  {
    name: 'Ahmedabad City Core Link',
    category: 'Connected City Hub',
    distance: 'Key Transit Link',
    desc: 'Direct transit connectivity linking South Bopal to established commercial and cultural centers across Ahmedabad.'
  }
];
