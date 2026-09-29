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
    id: 'res-apartments-flats',
    residenceNumber: 'Apartments & Flats',
    floor: 14,
    type: 'Apartments & Flats',
    tagline: 'Contemporary high-rise apartments and premium flats in South Bopal & Shela.',
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
    description: 'Curated 2, 3, and 4 BHK premium apartments and modern flats situated in prime residential communities of South Bopal, Shela, and Ghuma with superb natural light and ventilation.',
    keyFeatures: [
      'Prime locations in South Bopal & Shela growth belts',
      'Modern open-plan living, dining, and expansive balconies',
      'Proximity to top schools, supermarkets, and SP Ring Road',
      'Verified clear title documentation and compliance',
      'Dedicated property consultation by The Real Realty'
    ],
    location: 'South Bopal & Shela, Ahmedabad',
    category: 'Residential'
  },
  {
    id: 'res-villas-houses',
    residenceNumber: 'Villas & Independent Houses',
    floor: 2,
    type: 'Villas & Independent Houses',
    tagline: 'Exclusive private villas and independent gated homes in Bopal & Shilaj.',
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
    description: 'Bespoke independent bungalows, duplex villas, and premium houses in Bopal, Shilaj, and Shantipura offering serene private gardens and superior privacy.',
    keyFeatures: [
      'Gated villa communities with dedicated security and clubhouse',
      'Independent plot ownership with private garden space',
      'Easy connectivity to SP Ring Road and SG Highway',
      'Full legal due diligence and transparent documentation',
      'Consultation backed by The Real Realty advisory team'
    ],
    location: 'Bopal & Shilaj, Ahmedabad',
    category: 'Residential'
  },
  {
    id: 'res-commercial-properties',
    residenceNumber: 'Commercial Properties',
    floor: 3,
    type: 'Commercial Properties',
    tagline: 'Prime retail showrooms, corporate offices, and business spaces on South Bopal Road.',
    price: 0,
    priceFormatted: 'Contact for Consultation',
    bedrooms: 0,
    bathrooms: 2,
    powderRooms: 0,
    interiorSqFt: 1450,
    exposure: 'Main South Bopal Road Frontage',
    ceilingHeight: '12 FT',
    imageHero: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'High-visibility commercial units, premium office spaces, and ground-floor retail showrooms in SBTS (South Bopal Trade Centre) and leading business corridors of Ahmedabad.',
    keyFeatures: [
      'High footfall arterial frontage near Aaryan Gloria & SBTS',
      'Ideal for corporate firms, clinics, retail showrooms, and consultancies',
      'Ample basement and visitor parking infrastructure',
      'Clear commercial title verification and transparent lease/sale terms',
      'In-person advisory at Shop 208, SBTS, South Bopal'
    ],
    location: 'South Bopal & Bopal, Ahmedabad',
    category: 'Commercial'
  },
  {
    id: 'res-rental-properties',
    residenceNumber: 'Rental Properties',
    floor: 8,
    type: 'Rental Properties',
    tagline: 'High-yield residential rentals and premium commercial leases across Ahmedabad.',
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
    description: 'Comprehensive rental brokerage connecting verified tenants with premier residential flats, independent homes, and commercial units in Bopal, South Bopal, and Ghuma.',
    keyFeatures: [
      'Verified tenant profiling and background screening',
      'Quick turnaround times for residential and commercial leasing',
      'End-to-end rental agreement drafting and police verification guidance',
      'Rental options across Bopal, South Bopal, Shela, and Maninagar',
      'Complete management support by The Real Realty'
    ],
    location: 'Bopal, South Bopal & Ghuma, Ahmedabad',
    category: 'Rent'
  },
  {
    id: 'res-residential-buying-selling',
    residenceNumber: 'Residential Buying & Selling',
    floor: 6,
    type: 'Residential Property',
    tagline: 'Expert facilitation for buying and selling residential properties across Ahmedabad.',
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
    description: 'End-to-end buying and selling services for flats, luxury apartments, and residential homes in Shela, Shantipura, Shilaj, and Ahmedabad’s top neighborhoods.',
    keyFeatures: [
      'Fair market valuations and transparent price discovery',
      'Targeted matching for buyers and serious sellers',
      'Complete guidance on deed registration, loans, and legal transfer',
      'Active deals in Shela, South Bopal, Ghuma, and Shantipura',
      'Consultation from licensed experts established in 2022'
    ],
    location: 'Shela & Shantipura, Ahmedabad',
    category: 'Buy'
  },
  {
    id: 'res-commercial-dealing',
    residenceNumber: 'Commercial Property Dealing',
    floor: 5,
    type: 'Commercial Properties',
    tagline: 'Specialized commercial property transactions and brokerage across Ahmedabad.',
    price: 0,
    priceFormatted: 'Contact for Consultation',
    bedrooms: 0,
    bathrooms: 2,
    powderRooms: 0,
    interiorSqFt: 2200,
    exposure: 'High-Visibility Commercial Corridor',
    ceilingHeight: '12 FT',
    imageHero: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    description: 'Strategic commercial property dealing, office acquisition, and retail showroom brokerage across Bopal, South Bopal, and Maninagar.',
    keyFeatures: [
      'Commercial property dealing in South Bopal, Bopal & Maninagar',
      'Thorough due diligence on title deeds and municipal clearances',
      'Expert deal structuring for retail investors and corporate occupiers',
      'Direct access to prominent trade hubs including SBTS',
      'The Real Realty "Born to Consult" advisory commitment'
    ],
    location: 'Maninagar & Bopal, Ahmedabad',
    category: 'Commercial'
  }
];

export const PANORAMA_VIEWS = [
  {
    id: 'day',
    label: 'Morning Light',
    time: '09:30 AM',
    headline: 'Ahmedabad & South Bopal Daylight & Growth',
    description: 'Expansive vistas stretching across South Bopal, Shela, and Ahmedabad’s thriving western growth corridor, framed by modern towers and open green landscapes.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2200&q=90'
  },
  {
    id: 'dusk',
    label: 'Golden Hour',
    time: '06:15 PM',
    headline: 'Warm Sunset Over Bopal & Shela Skyline',
    description: 'Golden sunlight illuminates the lively avenues, modern residential towers, and arterial boulevards connecting South Bopal Road to the SP Ring Road.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2200&q=90'
  },
  {
    id: 'night',
    label: 'Evening Citylights',
    time: '09:45 PM',
    headline: 'Vibrant Ahmedabad Cityscapes & Trade Hubs',
    description: 'The energetic evening atmosphere of Ahmedabad comes alive with illuminated shopping hubs, trade centers like SBTS, and tranquil residential enclaves.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90'
  }
];

export const SERVICES_DATA: BusinessService[] = [
  {
    id: 'service-1',
    title: 'Residential Property Buying & Selling',
    subtitle: 'Category 01 • Residential Realty',
    category: 'Residential Buying & Selling',
    description: 'End-to-end buying and selling solutions for apartments, flats, luxury villas, and independent houses across Bopal, South Bopal, Shela, and Ahmedabad.',
    scope: 'Apartments • Flats • Villas • Independent Houses',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Carefully curated listings across South Bopal, Shela, Ghuma & Shilaj',
      'Realistic property valuations and buyer-seller matchmaking',
      'Transparent verification of title deeds, society NOCs, and municipal records',
      'Direct, client-first advisory from The Real Realty consultants'
    ]
  },
  {
    id: 'service-2',
    title: 'Commercial Property Buying & Selling',
    subtitle: 'Category 02 • Commercial Real Estate',
    category: 'Commercial Buying & Selling',
    description: 'Strategic acquisition and sale of premium commercial properties, office spaces, retail showrooms, and corporate premises in high-growth corridors.',
    scope: 'Offices • Showrooms • Commercial Complexes • Retail Hubs',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Prime properties at SBTS (South Bopal Trade Centre) & key corridors',
      'High-traffic commercial frontage suited for retail and enterprise suites',
      'Rigorous title due diligence, zoning checks, and documentation',
      'Strategic advisory tailored to business growth and high rental yields'
    ]
  },
  {
    id: 'service-3',
    title: 'Property Rentals',
    subtitle: 'Category 03 • Rental & Leasing Services',
    category: 'Property Rentals',
    description: 'Professional rental and leasing solutions catering to residential tenants, homeowners, corporate relocations, and commercial business occupiers.',
    scope: 'Residential Rentals • Commercial Leasing • Tenancy Agreements',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Verified tenant screening and swift occupancy solutions',
      'Comprehensive rental inventory of flats, apartments, and villas',
      'Assistance with legal rent agreements and police verification formalities',
      'Serving Bopal, South Bopal, Ghuma, Shela, Shilaj, and Maninagar'
    ]
  },
  {
    id: 'service-4',
    title: 'Property Consultation',
    subtitle: 'Category 04 • Strategic Consultation',
    category: 'Property Consultation',
    description: 'Expert consultation true to our motto "Born to Consult" — providing objective market analysis, property appraisal, and tailored advisory.',
    scope: 'Advisory • Market Analysis • Investment Planning • Due Diligence',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      '"Born to Consult" dedication to authentic, client-first property guidance',
      'Deep insights into Ahmedabad’s fastest-appreciating residential corridors',
      'Comprehensive evaluation of legal paperwork, approvals, and titles',
      'Personalized property strategies for home buyers and seasoned investors'
    ]
  },
  {
    id: 'service-5',
    title: 'Property Dealing / Agency Services',
    subtitle: 'Category 05 • Agency & Brokerage',
    category: 'Property Dealing / Agency',
    description: 'Full-service real estate agency and property dealing backed by integrity, local market mastery, and an established track record since 2022.',
    scope: 'Agency Representation • Deal Structuring • Registration Assistance',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Trusted property agency established in 2022 in Ahmedabad',
      'Headquartered at Shop No. 208, SBTS, South Bopal Road, Bopal',
      'Active coverage: Bopal, South Bopal, Ghuma, Shela, Shantipura, Shilaj, Maninagar',
      'Seamless coordination from initial inquiry to final property handover'
    ]
  }
];

export const NEIGHBORHOOD_DESTINATIONS = [
  {
    name: 'SBTS (South Bopal Trade Centre)',
    category: 'Prominent Commercial Hub',
    distance: 'Direct Location',
    desc: 'Premier commercial landmark on South Bopal Road housing The Real Realty at Shop No. 208, near Aaryan Gloria.'
  },
  {
    name: 'Aaryan Gloria Landmark',
    category: 'Key Area Landmark',
    distance: '1 Minute',
    desc: 'Renowned residential and commercial landmark situated on South Bopal Road in immediate proximity to our office.'
  },
  {
    name: 'SP Ring Road (Sardar Patel Ring Road)',
    category: 'Arterial Transit Spine',
    distance: '3 Minutes',
    desc: 'Vital ring highway providing seamless rapid connectivity across Bopal, Shela, Shilaj, SG Highway, and Ahmedabad.'
  },
  {
    name: 'Shela & Ghuma Residential Belt',
    category: 'Premium Living Corridor',
    distance: '5 Minutes',
    desc: 'Rapidly growing residential sector known for luxury apartments, villas, premier international schools, and clubs.'
  },
  {
    name: 'SG Highway (Sarkhej-Gandhinagar)',
    category: 'Major Business Corridor',
    distance: '10 Minutes',
    desc: 'Ahmedabad’s premier commercial avenue with corporate headquarters, upscale shopping destinations, and hospitals.'
  },
  {
    name: 'Maninagar & Eastern Ahmedabad Link',
    category: 'Connected City Hub',
    distance: 'Key Transit Link',
    desc: 'Direct transit connectivity linking western growth corridors to established cultural and business hubs in Maninagar.'
  }
];
