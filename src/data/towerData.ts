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
}

export const TOWER_RESIDENCES: TowerResidence[] = [
  {
    id: 'res-42',
    residenceNumber: 'Residence 42',
    floor: 42,
    type: 'Tower Full Floor Residence',
    tagline: 'Centered directly on the grand axis of Central Park with north and south exposures.',
    price: 28500000,
    priceFormatted: '$28,500,000',
    bedrooms: 3,
    bathrooms: 3,
    powderRooms: 1,
    interiorSqFt: 4492,
    exposure: 'North / South / East',
    ceilingHeight: '14 FT',
    imageHero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    description: 'Encompassing the entire 42nd floor, this residence features private elevator access directly into an entry vestibule finished in white macauba stone. A 50-foot great hall frames uninterrupted views of Central Park.',
    keyFeatures: [
      'Private key-lock high-speed elevator vestibule',
      '50-foot Great Hall overlooking Central Park',
      'Custom Boffi kitchen in book-matched Cristallo quartzite',
      'Primary bathroom in Statuario marble with freestanding soaking tub',
      'Smoke-gray quarter-sawn oak herringbone floors throughout'
    ]
  },
  {
    id: 'res-64',
    residenceNumber: 'Residence 64',
    floor: 64,
    type: 'Tower Grand Full Floor',
    tagline: 'Soaring above the tree line with 360-degree panoramic glass curtain wall.',
    price: 39000000,
    priceFormatted: '$39,000,000',
    bedrooms: 4,
    bathrooms: 4,
    powderRooms: 1,
    interiorSqFt: 5268,
    exposure: 'Panoramic 360°',
    ceilingHeight: '14.5 FT',
    imageHero: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'At floor 64, the horizon opens from the Atlantic Ocean to the foothills of the Hudson Valley. Features dual corner primary suites and a dedicated service entrance with chef pantry.',
    keyFeatures: [
      'Floor-to-ceiling acoustic triple-glazed curtain walls',
      'Dual primary bedroom suites with private dressing lounges',
      'Custom bronze joinery and P.E. Guerin hand-cast hardware',
      'Integrated motorized solar & blackout shading by Lutron',
      'Bespoke sommelier wine room with 800-bottle storage'
    ]
  },
  {
    id: 'res-72',
    residenceNumber: 'Duplex Residence 72',
    floor: 72,
    type: 'The Tower Duplex',
    tagline: 'A monumental two-storey sky residence with a 28-foot double-height salon.',
    price: 54000000,
    priceFormatted: '$54,000,000',
    bedrooms: 4,
    bathrooms: 5,
    powderRooms: 1,
    interiorSqFt: 7128,
    exposure: 'North / South / East / West',
    ceilingHeight: '28 FT Double-Height',
    imageHero: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'Connected by a sculptural cantilevered bronze and oak spiral stair, Duplex 72 captures the grandest architectural proportions ever realized on Billionaires’ Row.',
    keyFeatures: [
      'Dramatic 28-foot double-height entertaining salon',
      'Sculptural bronze-and-travertine floating staircase',
      'Mezzanine library overlooking Central Park',
      'Private catering scullery with Gaggenau 400 series',
      'Four ensuite guest suites each with private marble bath'
    ]
  },
  {
    id: 'res-80',
    residenceNumber: 'Penthouse 80',
    floor: 80,
    type: 'The Quadplex Crown Penthouse',
    tagline: 'The pinnacle of Manhattan. Four private storeys crowned by an open-air sky loggia.',
    price: 88000000,
    priceFormatted: '$88,000,000',
    bedrooms: 5,
    bathrooms: 7,
    powderRooms: 2,
    interiorSqFt: 11500,
    exteriorSqFt: 3800,
    exposure: '360° Unobstructed',
    ceilingHeight: '16 FT to 30 FT',
    imageHero: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: 'Rising more than 1,300 feet above Manhattan, Penthouse 80 represents the ultimate residential commission in the world. Includes an internal private elevator, 3,800 sq ft private heated open-air terrace with infinity plunge spa, and private 360-degree observatory.',
    keyFeatures: [
      'Four private elevator levels with custom bronze cabs',
      '3,800 sq ft open-air heated terrace & sky plunge pool',
      'Full-floor primary retreat with private spa hammam',
      'Separate staff duplex with private service corridor',
      'Curated contemporary art gallery corridors'
    ]
  },
  {
    id: 'res-14',
    residenceNumber: 'Landmark Residence 14',
    floor: 14,
    type: 'The Heritage Salon Residence',
    tagline: 'Intimate landmark proportion marrying 1920s historic detailing with modern minimalism.',
    price: 17500000,
    priceFormatted: '$17,500,000',
    bedrooms: 3,
    bathrooms: 3,
    powderRooms: 1,
    interiorSqFt: 3820,
    exposure: 'North / West',
    ceilingHeight: '13.5 FT',
    imageHero: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    description: 'Situated within the landmarked historic rotunda of the tower podium, featuring restored hand-plastered decorative moldings, coffered ceilings, and warm Parisian chevron parquet.',
    keyFeatures: [
      'Original restored 1920s neoclassical cornices and moldings',
      'Grand wood-burning fireplace in Belgian black marble',
      'Private formal library finished in fluted French walnut',
      'Chef show kitchen opening into breakfast solarium'
    ]
  }
];

export const PANORAMA_VIEWS = [
  {
    id: 'day',
    label: 'Morning Light',
    time: '09:30 AM',
    headline: '843 Acres of Crystalline Green',
    description: 'The vast tapestry of Central Park stretches uninterrupted to the northern horizon, framed in razor-sharp acoustic glass.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2200&q=90'
  },
  {
    id: 'dusk',
    label: 'Golden Hour',
    time: '06:45 PM',
    headline: 'Warm Amber Over the Manhattan Skyline',
    description: 'Sunlight catches the fluted terra-cotta pilasters, casting elongated shadows across the park and igniting the skyline in gold.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2200&q=90'
  },
  {
    id: 'night',
    label: 'Starlight & City Lights',
    time: '11:15 PM',
    headline: 'A Constellation of Urban Brilliance',
    description: 'Looking south toward the Empire State and New York Harbor, the city becomes a shimmering sea of incandescent geometry.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90'
  }
];

export const AMENITIES_SUITE = [
  {
    id: 'swimming-pool',
    title: 'The Swimming Colonnade',
    dimensions: '82-Foot Heated Lap Pool',
    material: 'Warm French Chamesson Limestone',
    description: 'A serene 82-foot two-lane heated pool enveloped in vaulted limestone arches and bronze sconces, featuring private daybed cabanas and acoustic sound isolation.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85'
  },
  {
    id: 'dining-salon',
    title: 'The Private Dining Salon',
    dimensions: '24-Seat Private State Room',
    material: 'Macassar Ebony & Hand-Chased Bronze',
    description: 'Designed for private state dinners, galas, and celebrations with an adjoining professional catering kitchen for visiting Michelin-starred chefs.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85'
  },
  {
    id: 'fitness-club',
    title: 'Double-Height Athletic Club',
    dimensions: '4,500 Sq Ft Wellness Pavilion',
    material: 'Vals Quartzite & Swiss Cedar',
    description: 'Outfitted with custom Technogym Artis series machinery, dedicated reformer Pilates studio, infrared sauna suites, and private personal training consultation.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=85'
  },
  {
    id: 'porte-cochere',
    title: 'Discreet Private Porte-Cochère',
    dimensions: 'Subterranean Covered Arrival',
    material: 'Granite Cobblestones & Bronze Gates',
    description: 'A 24-hour subterranean vehicular arrival hall ensuring total discretion, private valet staging, and direct elevator transfer to private residences.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85'
  },
  {
    id: 'music-salon',
    title: 'Steinway Concert Grand Hall',
    dimensions: 'Acoustically Tuned Music Room',
    material: 'Acoustic White Oak & Belgian Velvet',
    description: 'Honoring the storied historic Steinway heritage on 57th Street, an intimate performance salon hosting private chamber recitals.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1800&q=85'
  }
];

export const NEIGHBORHOOD_DESTINATIONS = [
  { name: 'Central Park', category: 'Nature & Parks', distance: '1 Minute Walk', desc: 'Direct access to Grand Army Plaza and the southern bridle paths.' },
  { name: 'Carnegie Hall', category: 'World Culture', distance: 'Adjacent', desc: 'The world’s premiere acoustic concert hall, steps from the lobby.' },
  { name: 'Museum of Modern Art (MoMA)', category: 'Fine Arts', distance: '4 Minutes Walk', desc: 'The world’s greatest collection of modern and contemporary masterworks.' },
  { name: 'Bergdorf Goodman', category: 'High Fashion', distance: '3 Minutes Walk', desc: 'Legendary Fifth Avenue luxury couture and private styling salons.' },
  { name: 'Le Bernardin', category: 'Fine Gastronomy', distance: '5 Minutes Walk', desc: 'Eric Ripert’s three-Michelin-star seafood institution.' }
];
