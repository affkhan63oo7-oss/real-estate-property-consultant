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
    id: 'res-plots-hinjawadi',
    residenceNumber: 'Residential Land & Plots',
    floor: 1,
    type: 'Residential Land & Plots',
    tagline: 'Clear-title residential plots in rapidly growing sectors of Hinjawadi & Marunji.',
    price: 0,
    priceFormatted: 'Contact for Pricing',
    bedrooms: 0,
    bathrooms: 0,
    powderRooms: 0,
    interiorSqFt: 1500,
    exposure: 'Road Facing / Corner Plots',
    ceilingHeight: 'Open Plot',
    imageHero: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    description: 'Well-demarcated residential land and plot options located in prime growth pockets of Hinjawadi and Marunji with direct road connectivity and planned utility access.',
    keyFeatures: [
      'Located in Hinjawadi & Marunji growth sector',
      'Clear demarcation and direct access road',
      'Suitable for independent home or residential construction',
      'Proximity to Hinjawadi IT Park and Marunji Road',
      'Dedicated property facilitation by Future Construction'
    ],
    location: 'Hinjawadi & Marunji, Pune',
    category: 'Residential'
  },
  {
    id: 'res-comm-plots',
    residenceNumber: 'Commercial Plots',
    floor: 1,
    type: 'Commercial Plots',
    tagline: 'High-visibility commercial plots suitable for enterprise development and businesses.',
    price: 0,
    priceFormatted: 'Contact for Pricing',
    bedrooms: 0,
    bathrooms: 0,
    powderRooms: 0,
    interiorSqFt: 2400,
    exposure: 'Main Road Frontage',
    ceilingHeight: 'Commercial Zone',
    imageHero: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: 'Strategically positioned commercial plots offering high footfall, arterial road visibility, and multi-purpose business potential along the Marunji and Hinjawadi corridors.',
    keyFeatures: [
      'Prominent road frontage in Hinjawadi / Marunji',
      'High commercial viability and footfall potential',
      'Direct connectivity to Pune-Mumbai transit arteries',
      'Clear title documentation and plot verification',
      'Advisory and site coordination by Future Construction'
    ],
    location: 'Hinjawadi, Pune',
    category: 'Commercial'
  },
  {
    id: 'res-residential-prop',
    residenceNumber: 'Residential Property',
    floor: 12,
    type: 'Residential Property',
    tagline: 'Carefully curated residential properties designed for modern family living in Pune.',
    price: 0,
    priceFormatted: 'Contact for Pricing',
    bedrooms: 3,
    bathrooms: 3,
    powderRooms: 0,
    interiorSqFt: 1250,
    exposure: 'East / North Facing',
    ceilingHeight: '10 FT',
    imageHero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Thoughtfully configured residential properties featuring optimal room proportions, cross-ventilation, and peaceful neighborhood settings in Pune and Hinjawadi.',
    keyFeatures: [
      'Quality construction standards with modern layouts',
      'Well-separated living, dining, and private bedroom zones',
      'Balcony exposure with expansive natural lighting',
      'Convenient access to Hinjawadi IT Park, schools, and conveniences',
      'End-to-end guidance from Future Construction team'
    ],
    location: 'Hinjawadi, Pune',
    category: 'Residential'
  },
  {
    id: 'res-commercial-prop',
    residenceNumber: 'Commercial Property',
    floor: 4,
    type: 'Commercial Property',
    tagline: 'Modern commercial premises and workspaces tailored for corporate and business operations.',
    price: 0,
    priceFormatted: 'Contact for Pricing',
    bedrooms: 0,
    bathrooms: 2,
    powderRooms: 0,
    interiorSqFt: 1100,
    exposure: 'Arterial Frontage',
    ceilingHeight: '12 FT',
    imageHero: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'Flexible commercial spaces situated in active business corridors of Pune, Hinjawadi, and Narhe. Engineered for corporate offices, retail, and commercial ventures.',
    keyFeatures: [
      'Prime business location in Pune / Hinjawadi / Narhe',
      'Open floor-plate design for modular workspace layouts',
      'High footfall and arterial connectivity',
      'Ample parking provision and essential commercial utilities',
      'Assistance throughout inspection and agreement stages'
    ],
    location: 'Pune & Narhe',
    category: 'Commercial'
  },
  {
    id: 'res-land-development',
    residenceNumber: 'Land Property & Property Development',
    floor: 1,
    type: 'Property Development',
    tagline: 'Comprehensive land acquisition, parcel planning, and property development solutions in Pune.',
    price: 0,
    priceFormatted: 'Contact for Pricing',
    bedrooms: 0,
    bathrooms: 0,
    powderRooms: 0,
    interiorSqFt: 5000,
    exposure: 'Strategic Growth Sector',
    ceilingHeight: 'Development Parcel',
    imageHero: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    description: 'End-to-end property development and land property services by Future Construction. Focused on parcel planning, boundary demarcation, and development execution in Pune, Marunji, and Narhe.',
    keyFeatures: [
      'Active land development in Pune, Marunji, Hinjawadi, and Narhe',
      'Systematic parcel planning and boundary demarcation',
      'Clear paperwork and title transparency',
      'Backed by verified 4.0/5 Google review track record',
      'Direct developer consultation at Sakhare Complex, Hinjawadi'
    ],
    location: 'Marunji & Pune',
    category: 'Residential'
  }
];

export const PANORAMA_VIEWS = [
  {
    id: 'day',
    label: 'Morning Light',
    time: '09:30 AM',
    headline: 'Pune & Hinjawadi Daylight & Growth',
    description: 'Expansive vistas stretching across Hinjawadi, Marunji, and Pune’s western development corridor, framed by open green landscapes and active infrastructure.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2200&q=90'
  },
  {
    id: 'dusk',
    label: 'Golden Hour',
    time: '06:15 PM',
    headline: 'Warm Sunset Over Hinjawadi Skyline',
    description: 'Golden sunlight illuminates the tech corridors, open residential plots, and arterial roads connecting Marunji and Hinjawadi to Pune city.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2200&q=90'
  },
  {
    id: 'night',
    label: 'Evening Citylights',
    time: '09:45 PM',
    headline: 'Vibrant Tech Hub & Living Corridors',
    description: 'The energetic evening atmosphere of Pune and Hinjawadi comes alive with illuminated transit arteries, business hubs, and tranquil residential zones.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90'
  }
];

export const SERVICES_DATA: BusinessService[] = [
  {
    id: 'service-1',
    title: 'Residential Land & Plots',
    subtitle: 'Category 01 • Land & Plots',
    category: 'Residential Land & Plots',
    description: 'Verified residential plots and land options across growing residential localities in Hinjawadi, Marunji, and Pune.',
    scope: 'Plot Scouting • Demarcation • Title Verification',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Carefully surveyed plots with clear access roads',
      'Verified land records in Pune and Marunji',
      'Assistance with boundary demarcation and documentation',
      'Direct developer advisory from Future Construction'
    ]
  },
  {
    id: 'service-2',
    title: 'Commercial Plots',
    subtitle: 'Category 02 • Enterprise Land',
    category: 'Commercial Plots',
    description: 'Prime commercial land and plot parcels along high-traffic roads and business zones in Hinjawadi and Pune.',
    scope: 'Commercial Zoning • Arterial Frontage • High Footfall',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Prominent road visibility on Marunji Road & Hinjawadi corridors',
      'Suitable for retail, corporate hubs, and commercial ventures',
      'Clear title evaluation and transparent paperwork',
      'Strategic growth potential in expanding Pune business belts'
    ]
  },
  {
    id: 'service-3',
    title: 'Residential Property',
    subtitle: 'Category 03 • Living Spaces',
    category: 'Residential Property',
    description: 'Quality residential homes and family living options across Pune, Hinjawadi, and Marunji.',
    scope: 'Family Living • Modern Layouts • Convenient Access',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Carefully planned residences with natural lighting and airflow',
      'Proximity to IT parks, educational institutions, and healthcare',
      'Transparent buying assistance and paperwork coordination',
      'Personalised consultation based on your family requirements'
    ]
  },
  {
    id: 'service-4',
    title: 'Commercial Property',
    subtitle: 'Category 04 • Business Spaces',
    category: 'Commercial Property',
    description: 'Commercial workspaces, office suites, and retail premises across Pune, Hinjawadi, and Narhe.',
    scope: 'Office Spaces • Retail Outlets • Enterprise Units',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Modern commercial units designed for functional business workflows',
      'Active commercial pockets in Hinjawadi, Narhe, and Pune',
      'Support throughout property inspections and lease/sale agreements',
      'Clear documentation and transparent commercial terms'
    ]
  },
  {
    id: 'service-5',
    title: 'Land Property',
    subtitle: 'Category 05 • Strategic Land',
    category: 'Land Property',
    description: 'Acquisition, evaluation, and transaction guidance for land parcels throughout the Pune metropolitan region.',
    scope: 'Land Evaluation • Demarcation • Parcel Verification',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Land opportunities across Marunji, Hinjawadi, Narhe, and Pune',
      'Thorough due diligence on title chains and land surveys',
      'Objective guidance tailored to buyer goals and development plans',
      'Direct coordination with Future Construction leadership'
    ]
  },
  {
    id: 'service-6',
    title: 'Property Development',
    subtitle: 'Category 06 • Development Solutions',
    category: 'Property Development',
    description: 'Professional property development services delivering planned layouts, infrastructure, and built environments in Pune.',
    scope: 'Site Planning • Infrastructure • Project Execution',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'End-to-end property development execution in Pune & Marunji',
      'Site preparation, road layout, and utility planning',
      'Quality development standards backed by 42 Google reviews (4.0/5)',
      'Office conveniently located at Sakhare Complex, Hinjawadi'
    ]
  }
];

export const NEIGHBORHOOD_DESTINATIONS = [
  {
    name: 'Hotel Mezza9 Landmark',
    category: 'Prominent Landmark',
    distance: '1 Minute',
    desc: 'Prominent dining and hospitality landmark located right beside Sakhare Complex on Marunji Road.'
  },
  {
    name: 'Hinjawadi Rajiv Gandhi Infotech Park',
    category: 'Major IT / Business Hub',
    distance: '5 Minutes',
    desc: 'Premier technology and business park housing leading IT campuses, tech giants, and commercial centers.'
  },
  {
    name: 'Marunji Road Arterial Corridor',
    category: 'Arterial Transit Spine',
    distance: 'Immediate Access',
    desc: 'Key transit spine directly connecting Hinjawadi Phase 1 & 2 to Marunji and surrounding development zones.'
  },
  {
    name: 'Mumbai-Pune Expressway',
    category: 'Expressway Link',
    distance: '10 Minutes',
    desc: 'High-speed transit access connecting Pune to Mumbai, Dehu Road bypass, and western Maharashtra corridors.'
  },
  {
    name: 'Narhe & Pune Ring Road',
    category: 'Growth Corridor',
    distance: 'Key Connectivity',
    desc: 'Strategic linkage to southern and western Pune commercial and residential sectors including Narhe.'
  },
  {
    name: 'Pune Metro Line 3 Corridor',
    category: 'Elevated Rapid Transit',
    distance: 'Within Vicinity',
    desc: 'Elevated metro transit connecting Hinjawadi directly to Pune University, Shivaji Nagar, and city center.'
  }
];
