import { Property } from '../types';

export const PROPERTIES: Property[] = [
  {
    id: 'villa-solaria',
    title: 'Villa Solaria',
    subtitle: 'The Alpine Cantilever Estate',
    tagline: 'A sculptural monument of raw volcanic concrete and structural glass suspended over the Engadin.',
    category: 'Villa',
    status: 'Available',
    price: 38500000,
    priceFormatted: '$38,500,000',
    featured: true,
    location: {
      address: '7 Via Corviglia',
      city: 'St. Moritz',
      region: 'Graubünden',
      country: 'Switzerland',
      coordinates: { lat: 46.4983, lng: 9.8392 }
    },
    specs: {
      bedrooms: 6,
      bathrooms: 8,
      interiorSqFt: 12400,
      exteriorSqFt: 18500,
      garageSpaces: 6,
      yearBuilt: 2025,
      floors: 3
    },
    architect: {
      name: 'Valerio Olgiati & Kengo Kuma Studio',
      firm: 'Olgiati Atelier',
      philosophy: 'Pure structural honesty where mineral matter dissolves into the high-altitude crystalline light.'
    },
    description: 'Suspended dramatically over the pristine Engadin valley, Villa Solaria is an uncompromising feat of contemporary alpine engineering. Built with hand-troweled warm alpine concrete, Swedish triple-glazed acoustic curtain walls, and reclaimed Swiss stone pine.',
    story: [
      'Every angle of Villa Solaria was mathematically oriented to capture the sun’s lowest winter azimuth, warming the thermal mass naturally while framing the snow-capped summits of Piz Nair.',
      'The centerpiece is a 32-meter heated cantilevered pool that juts daringly over the pine forest canopy, giving the swimmer the uncanny illusion of floating into the alpine void.'
    ],
    features: [
      'Heated 32m cantilevered structural glass infinity pool',
      'Private heated helicopter landing pad with automated lighting',
      'Subterranean 3,000-bottle climate-controlled vintage wine vault',
      'Integrated spa featuring Finnish cedar sauna and cryogenic plunge pool',
      'Underground 6-bay gallery garage with automotive turntable',
      'Direct private ski-in / ski-out access to Corviglia slopes'
    ],
    amenities: [
      'Helipad',
      'Cantilever Pool',
      'Subterranean Spa',
      'Wine Cave',
      'Smart Automation',
      'Ski-in / Ski-out',
      'Staff Quarters',
      'Automotive Turntable'
    ],
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
        caption: 'Exterior southern elevation framing the alpine horizon',
        category: 'Exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Great Room with 24-foot double-height ceilings and raw monolithic fireplace',
        category: 'Interior'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Master suite sanctuary overlooking the Engadin Valley',
        category: 'Bedroom'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
        caption: 'Minimalist chef kitchen with fluted volcanic basalt and bronze joinery',
        category: 'Kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
        caption: 'Spa wellness pavilion with heated granite soaking bath',
        category: 'Spa'
      }
    ],
    floorPlans: [
      {
        level: 'Level 01',
        title: 'Garden, Wellness & Automobile Gallery',
        sqFt: 4600,
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        description: 'Subterranean retreat containing the 6-vehicle display gallery, staff apartments, wine vault, and private wellness retreat.',
        rooms: [
          { name: 'Spa & Thermal Suite', size: '1,200 sq ft' },
          { name: 'Automotive Gallery', size: '1,800 sq ft' },
          { name: 'Sommelier Wine Vault', size: '450 sq ft' },
          { name: 'Staff Quarters (2 Suites)', size: '1,150 sq ft' }
        ]
      },
      {
        level: 'Level 02',
        title: 'Grand Living & Cantilever Terrace',
        sqFt: 4800,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        description: 'Soaring open-plan pavilion encompassing the double-height reception salon, dining hall, and cantilevered infinity pool.',
        rooms: [
          { name: 'Great Room & Fireplace', size: '2,100 sq ft' },
          { name: 'Formal Dining Salon', size: '750 sq ft' },
          { name: 'Culinary Studio & Scullery', size: '950 sq ft' },
          { name: 'Cantilever Pool Deck', size: '1,000 sq ft' }
        ]
      },
      {
        level: 'Level 03',
        title: 'The Sky Sanctuary & Primary Suites',
        sqFt: 3000,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        description: 'Dedicated primary wing with dual dressing lounges, private terrace overlooking Piz Nair, and four guest suites.',
        rooms: [
          { name: 'Primary Suite & Private Terrace', size: '1,450 sq ft' },
          { name: 'Dual Dressing Chambers', size: '600 sq ft' },
          { name: 'Executive Library / Atelier', size: '450 sq ft' },
          { name: 'Guest Wing Suite A & B', size: '500 sq ft' }
        ]
      }
    ],
    nearbyPlaces: [
      { category: 'Aviation', name: 'Samedan Private Jet Airport', distance: '6.2 km', travelTime: '8 min drive / 3 min heli' },
      { category: 'Dining', name: 'Badrutt’s Palace & Le Relais', distance: '1.8 km', travelTime: '4 min drive' },
      { category: 'Culture', name: 'St. Moritz Design Gallery & Museum', distance: '2.1 km', travelTime: '5 min drive' },
      { category: 'Yachting', name: 'Lake St. Moritz Sailing Club', distance: '2.5 km', travelTime: '6 min drive' }
    ]
  },
  {
    id: 'the-monolith-sky',
    title: 'The Horizon Monolith',
    subtitle: 'Triplex Sky Sanctuary',
    tagline: 'An aerial architectural triumph towering above Central Park with 360-degree glass envelope.',
    category: 'Penthouse',
    status: 'Available',
    price: 48000000,
    priceFormatted: '$48,000,000',
    featured: true,
    location: {
      address: '220 Central Park South',
      city: 'New York City',
      region: 'New York',
      country: 'United States',
      coordinates: { lat: 40.7667, lng: -73.9798 }
    },
    specs: {
      bedrooms: 5,
      bathrooms: 7,
      interiorSqFt: 9800,
      exteriorSqFt: 2400,
      garageSpaces: 3,
      yearBuilt: 2024,
      floors: 3
    },
    architect: {
      name: 'Robert A.M. Stern & Studio Liaigre',
      firm: 'Liaigre Paris',
      philosophy: 'Classical restraint married to modern aerodynamic verticality and sculptural lightness.'
    },
    description: 'Occupying the uppermost three storeys of an architectural icon, The Horizon Monolith commands unobstructed vistas spanning the whole of Central Park, the Hudson River, and the Atlantic horizon.',
    story: [
      'The triplex features a monumental bronze-clad floating staircase suspended inside a 40-foot interior atrium.',
      'Private elevator reveals lead directly into an ethereal salon finished in French limestone, hand-rubbed bronze, and bespoke silk carpets.'
    ],
    features: [
      '360-degree panoramic glass envelope with motorized solar shades',
      'Private 2,400 sq ft outdoor sky terrace with heated plunge spa',
      'Dual primary suites each featuring private travertine baths',
      'Private internal high-speed bronze elevator serving all 3 levels',
      'Custom Boffi kitchen with Calacatta marble and Gaggenau 400 series',
      '24/7 dedicated white-glove building concierge and private sommelier'
    ],
    amenities: [
      'Sky Terrace',
      'Private Plunge Pool',
      'Internal Elevator',
      'Central Park Views',
      'Concierge',
      'Wine Room',
      'Valet Parking'
    ],
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
        caption: 'Sky terrace looking north across the seasonal tapestry of Central Park',
        category: 'Exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
        caption: 'Triple-height grand salon with bespoke sculptural lighting installation',
        category: 'Interior'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
        caption: 'Primary bathroom enveloped in book-matched Statuario marble slabs',
        category: 'Bathroom'
      }
    ],
    floorPlans: [
      {
        level: 'Floor 78',
        title: 'The Arrival & Entertaining Floor',
        sqFt: 3600,
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        description: 'Formal reception salon, catering kitchen, formal dining for 20 guests, and private corner study.',
        rooms: [
          { name: 'Grand Salon', size: '1,800 sq ft' },
          { name: 'Park Dining Salon', size: '600 sq ft' },
          { name: 'Boffi Show Kitchen', size: '550 sq ft' }
        ]
      },
      {
        level: 'Floor 79',
        title: 'The Sky Suites Floor',
        sqFt: 3400,
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
        description: 'Four ensuite bedroom chambers with floor-to-ceiling glass and private dressing lounges.',
        rooms: [
          { name: 'Primary Suite West', size: '1,200 sq ft' },
          { name: 'Primary Suite East', size: '1,100 sq ft' },
          { name: 'Guest Chambers 3 & 4', size: '1,100 sq ft' }
        ]
      },
      {
        level: 'Floor 80',
        title: 'Crown Terrace & Private Observatory',
        sqFt: 2800,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
        description: 'Open-air sky garden with heated infinity spa pool, outdoor kitchen, and private fireplace lounge.',
        rooms: [
          { name: 'Sky Lounge Pavilion', size: '800 sq ft' },
          { name: 'Open-Air Heated Terrace', size: '2,000 sq ft' }
        ]
      }
    ],
    nearbyPlaces: [
      { category: 'Dining', name: 'Le Bernardin & Per Se', distance: '0.4 km', travelTime: '3 min walk' },
      { category: 'Aviation', name: 'Teterboro Executive Jetport', distance: '18 km', travelTime: '20 min drive' },
      { category: 'Culture', name: 'Carnegie Hall & Lincoln Center', distance: '0.6 km', travelTime: '5 min walk' },
      { category: 'Yachting', name: 'North Cove Marina Manhattan', distance: '5.5 km', travelTime: '12 min drive' }
    ]
  },
  {
    id: 'casa-brutale',
    title: 'Residenza Caelum',
    subtitle: 'Brutalist Mediterranean Haven',
    tagline: 'Sculpted directly into the rose granite cliffs of Sardinia with private superyacht mooring.',
    category: 'Waterfront',
    status: 'Available',
    price: 54000000,
    priceFormatted: '$54,000,000',
    featured: true,
    location: {
      address: 'Promontorio di Capo Caccia',
      city: 'Porto Cervo',
      region: 'Costa Smeralda',
      country: 'Italy',
      coordinates: { lat: 41.1342, lng: 9.5312 }
    },
    specs: {
      bedrooms: 7,
      bathrooms: 9,
      interiorSqFt: 15200,
      exteriorSqFt: 32000,
      garageSpaces: 8,
      yearBuilt: 2025,
      floors: 4
    },
    architect: {
      name: 'Alberto Campo Baeza & Studio Fuksas',
      firm: 'Campo Baeza Associates',
      philosophy: 'The poetry of heavy mineral mass meeting the turquoise weight of the Mediterranean Sea.'
    },
    description: 'Chiseled seamlessly into ancient rose-colored Sardinian granite, Residenza Caelum represents an unprecedented fusion of raw architectural brutalism and nautical refinement.',
    story: [
      'Rather than sitting upon the hillside, the residence was excavated from the living bedrock, creating cool subterranean living spaces illuminated by vertical light shafts.',
      'A private hydraulic funicular glides quietly down the cliffside to a protected sea harbor capable of mooring yachts up to 60 meters.'
    ],
    features: [
      'Private deep-water yacht dock with automated boat lift',
      'Infinity pool carved directly into granite rock shelf',
      'Private sea cave converted into thermal hammam',
      'Glass-encased cliffside funicular linking living levels to harbor',
      'Organic rooftop gardens featuring indigenous Sardinian flora',
      'Subterranean cinema and private tasting salon'
    ],
    amenities: [
      'Superyacht Dock',
      'Sea Cave Spa',
      'Rock Infinity Pool',
      'Funicular Lift',
      'Subterranean Cinema',
      'Helipad Access',
      'Botanical Terraces'
    ],
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
        caption: 'Aerial perspective of the estate integrated into the jagged coastline',
        category: 'Exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
        caption: 'Terrace at dusk overlooking the sapphire waters of the Mediterranean',
        category: 'Exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Monolithic raw concrete salon with minimalist white oak furnishings',
        category: 'Interior'
      }
    ],
    floorPlans: [
      {
        level: 'Sea Level',
        title: 'Nautical Club & Private Dock',
        sqFt: 3800,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        description: 'Boathouse, dive center, seaside lounge, and deep-water mooring.',
        rooms: [
          { name: 'Nautical Boathouse', size: '1,500 sq ft' },
          { name: 'Harbor Lounge & Bar', size: '1,100 sq ft' },
          { name: 'Seaside Hammam', size: '1,200 sq ft' }
        ]
      },
      {
        level: 'Mid Level',
        title: 'Guest Pavilions & Water Gardens',
        sqFt: 5600,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
        description: 'Four standalone guest villas arranged around reflecting pools and bougainvillea gardens.',
        rooms: [
          { name: 'Guest Villas (4 Suites)', size: '3,800 sq ft' },
          { name: 'Outdoor Kitchen & Dining Pergola', size: '1,800 sq ft' }
        ]
      },
      {
        level: 'Crown Level',
        title: 'Master Residence & Cliff Terrace',
        sqFt: 5800,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        description: 'Main entertaining pavilion, master sanctuary, and 180-degree infinity pool.',
        rooms: [
          { name: 'Grand Mediterranean Salon', size: '2,600 sq ft' },
          { name: 'Owner’s Sanctuary', size: '1,800 sq ft' },
          { name: 'Infinity Deck', size: '1,400 sq ft' }
        ]
      }
    ],
    nearbyPlaces: [
      { category: 'Yachting', name: 'Yacht Club Costa Smeralda', distance: '3.4 km', travelTime: '6 min tender' },
      { category: 'Aviation', name: 'Olbia Costa Smeralda Airport (Private Terminal)', distance: '28 km', travelTime: '25 min drive / 8 min heli' },
      { category: 'Dining', name: 'Quattro Passi al Pescatore', distance: '4.1 km', travelTime: '8 min drive' }
    ]
  },
  {
    id: 'the-kyoto-sanctuary',
    title: 'The Komorebi Pavilion',
    subtitle: 'Zen Modernist Estate',
    tagline: 'An ethereal sanctuary of charred cedar, moss courtyards, and restorative thermal waters.',
    category: 'Sanctuary',
    status: 'Available',
    price: 24800000,
    priceFormatted: '$24,800,000',
    featured: false,
    location: {
      address: '14 Higashiyama Foothills',
      city: 'Kyoto',
      region: 'Kansai',
      country: 'Japan',
      coordinates: { lat: 35.0116, lng: 135.7681 }
    },
    specs: {
      bedrooms: 4,
      bathrooms: 5,
      interiorSqFt: 7600,
      exteriorSqFt: 22000,
      garageSpaces: 4,
      yearBuilt: 2024,
      floors: 2
    },
    architect: {
      name: 'Tadao Ando Architect & Associates',
      firm: 'Ando Associates',
      philosophy: 'Geometry, shadow, and wind orchestrated into a timeless vessel of serene contemplation.'
    },
    description: 'Concealed within a centuries-old bamboo forest on the eastern hills of Kyoto, The Komorebi Pavilion seamlessly unites classical Sukiya-style carpentry with architectural cast-in-place concrete.',
    story: [
      'Traditional master carpenters (Miyadaiku) spent 36 months assembling the cypress timber frame without a single metallic fastener.',
      'Natural geothermal springs feed an authentic black-basalt private onsen with open vistas into cascading moss gardens.'
    ],
    features: [
      'Authentic natural geothermal onsen bathhouse',
      'Centuries-old private moss garden curated by Kyoto temple master',
      'Ceremonial tearoom with tatami mats and sunken hearth',
      'Charred Shou Sugi Ban exterior siding with lifetime weather resistance',
      'Underfloor radiant geothermal heating across entire residence',
      'Private meditation pavilion suspended above a koi pond'
    ],
    amenities: [
      'Thermal Onsen',
      'Tea Ceremony Room',
      'Zen Garden',
      'Koi Pond',
      'Heated Tatami',
      'Security Gatehouse',
      'Meditation Pavilion'
    ],
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=85',
        caption: 'The pavilion reflected in the tranquil evening koi pond',
        category: 'Exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1600&q=85',
        caption: 'Interior engawa walkway opening onto the moss gardens',
        category: 'Interior'
      }
    ],
    floorPlans: [
      {
        level: 'Pavilion Level',
        title: 'Zen Gardens & Master Quarters',
        sqFt: 5200,
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
        description: 'Single-storey continuous living floor designed around courtyard gardens.',
        rooms: [
          { name: 'Grand Engawa & Salon', size: '2,200 sq ft' },
          { name: 'Primary Hinoki Suite', size: '1,400 sq ft' },
          { name: 'Tea Pavilion & Hearth', size: '600 sq ft' },
          { name: 'Thermal Onsen Pavilion', size: '1,000 sq ft' }
        ]
      }
    ],
    nearbyPlaces: [
      { category: 'Culture', name: 'Gion Historic Quarter & Nanzen-ji', distance: '2.2 km', travelTime: '6 min drive' },
      { category: 'Dining', name: 'Hyotei (3-Michelin Stars)', distance: '1.9 km', travelTime: '5 min drive' },
      { category: 'Aviation', name: 'Kansai International Airport (KIX)', distance: '85 km', travelTime: '70 min bullet train / 25 min heli' }
    ]
  },
  {
    id: 'the-nordic-fjord',
    title: 'Fjordgard Observatory',
    subtitle: 'Arctic Minimalist Villa',
    tagline: 'A glass-and-titanium jewel perched above the Norwegian Sea for year-round aurora viewing.',
    category: 'Villa',
    status: 'Available',
    price: 19500000,
    priceFormatted: '$19,500,000',
    featured: false,
    location: {
      address: 'Fjordveien 88',
      city: 'Tromsø',
      region: 'Troms',
      country: 'Norway',
      coordinates: { lat: 69.6492, lng: 18.9553 }
    },
    specs: {
      bedrooms: 4,
      bathrooms: 5,
      interiorSqFt: 6900,
      exteriorSqFt: 14000,
      garageSpaces: 3,
      yearBuilt: 2024,
      floors: 2
    },
    architect: {
      name: 'Snøhetta',
      firm: 'Snøhetta Oslo',
      philosophy: 'Architecture that emerges directly from the geography, offering profound intimacy with nature.'
    },
    description: 'An architectural sculpture perched on a granite outcropping over the fjord, engineered with ultra-insulating aerogel glass walls that maintain absolute warmth in sub-zero Arctic conditions.',
    story: [
      'The crown of the villa is an observatory lounge with heated glass ceilings engineered to melt snowfall instantly, ensuring uninterrupted views of the Aurora Borealis.',
      'A private seaplane pontoon and yacht berth provide direct access to the outer Arctic archipelago.'
    ],
    features: [
      'Retractable heated glass roof for Aurora Borealis observation',
      'Private deep-water seaplane and vessel pontoon',
      'Geothermal heat pumps with zero net carbon footprint',
      'Finnish smoke sauna with cold plunge directly into sea',
      'Full wine tasting room and Nordic culinary kitchen'
    ],
    amenities: [
      'Aurora Observatory',
      'Seaplane Dock',
      'Geothermal Heat',
      'Smoke Sauna',
      'Zero-Carbon',
      'Fjord Access'
    ],
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
        caption: 'The observatory glowing beneath the Arctic evening twilight',
        category: 'Exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Minimalist Scandinavian fireplace with raw volcanic stone',
        category: 'Interior'
      }
    ],
    floorPlans: [
      {
        level: 'Fjord Level',
        title: 'Pontoon, Spa & Guest Suites',
        sqFt: 3500,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        description: 'Seaside sauna, boathouse, and three suites opening directly toward the fjord.',
        rooms: [
          { name: 'Seaside Spa & Sauna', size: '900 sq ft' },
          { name: 'Guest Suites (3 Suites)', size: '2,000 sq ft' },
          { name: 'Nautical Gear Room', size: '600 sq ft' }
        ]
      }
    ],
    nearbyPlaces: [
      { category: 'Aviation', name: 'Tromsø Airport (TOS)', distance: '16 km', travelTime: '18 min drive' },
      { category: 'Dining', name: 'Emmas Drømmekjøkken', distance: '14 km', travelTime: '15 min drive' }
    ]
  },
  {
    id: 'palazzo-lumina',
    title: 'Palazzo Della Luce',
    subtitle: 'Minimalist Renaissance Revival',
    tagline: 'An aristocratic 18th-century lakeside palazzo reincarnated through radical contemporary minimalism.',
    category: 'Waterfront',
    status: 'Exclusive Reserve',
    price: 62000000,
    priceFormatted: '$62,000,000',
    featured: false,
    location: {
      address: 'Riva di Tremezzo 12',
      city: 'Lake Como',
      region: 'Lombardy',
      country: 'Italy',
      coordinates: { lat: 45.9868, lng: 9.2275 }
    },
    specs: {
      bedrooms: 8,
      bathrooms: 11,
      interiorSqFt: 18500,
      exteriorSqFt: 45000,
      garageSpaces: 10,
      yearBuilt: 2024,
      floors: 4
    },
    architect: {
      name: 'John Pawson & David Chipperfield Architects',
      firm: 'Pawson Studio London',
      philosophy: 'Honoring ancient baroque proportions through the cleansing discipline of absolute reduction.'
    },
    description: 'Set within 4.5 acres of private botanical gardens on the shores of Lake Como, Palazzo Della Luce is an unprecedented dialogue between 18th-century neoclassical frescoes and razor-sharp titanium minimalist glass.',
    story: [
      'Italian state conservators spent 5 years painstakingly restoring the vaulted baroque ceilings before the architects inserted a floating steel-and-glass structural mezzanine.',
      'Includes a private covered boathouse with two Riva Aquarama slips and an olive grove producing bespoke cold-pressed estate olive oil.'
    ],
    features: [
      'Private boathouse with 2 covered Riva speedboat slips',
      '4.5 acres of walled century-old private botanical gardens and olive groves',
      'Museum-grade climate-controlled contemporary art gallery',
      'Heated 25m outdoor black granite swimming pool overlooking the lake',
      'Subterranean spa, Turkish bath, and cold plunge chambers'
    ],
    amenities: [
      'Private Boathouse',
      'Botanical Gardens',
      'Art Gallery',
      'Lakefront Pool',
      'Helicopter Lawn',
      'Security Compound',
      'Staff Villas'
    ],
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85',
        caption: 'Classical facade mirrored across Lake Como at golden hour',
        category: 'Exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Master suite with vaulted fresco ceilings and minimalist furnishings',
        category: 'Bedroom'
      }
    ],
    floorPlans: [
      {
        level: 'Piano Nobile',
        title: 'Grand Entertaining & Gallery',
        sqFt: 6200,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
        description: 'Monumental vaulted salon, formal state dining room, and art gallery.',
        rooms: [
          { name: 'Baroque State Salon', size: '2,800 sq ft' },
          { name: 'State Dining Hall', size: '1,400 sq ft' },
          { name: 'Curator Art Gallery', size: '2,000 sq ft' }
        ]
      }
    ],
    nearbyPlaces: [
      { category: 'Dining', name: 'Grand Hotel Tremezzo', distance: '1.2 km', travelTime: '3 min boat / 4 min drive' },
      { category: 'Aviation', name: 'Milan Malpensa Airport (MXP)', distance: '75 km', travelTime: '55 min drive / 18 min heli' }
    ]
  }
];

export const AMENITIES_DATA = [
  {
    id: 'infinity-pool',
    title: 'Suspended Infinity Pools',
    subtitle: 'Defying gravity over natural horizons',
    description: 'Precision-engineered cantilevered bodies of water wrapped in zero-edge structural crystal glass. Heated sustainably via geothermal loops, designed for slow mornings and silent twilight contemplation.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    specs: ['32-meter heated cantilever', 'Acoustic overflow gutters', 'Integrated submerged loungers', 'Ozone purification']
  },
  {
    id: 'subterranean-spa',
    title: 'Subterranean Thermal Spas',
    subtitle: 'Carved sanctuary of heat and mineral calm',
    description: 'Carved directly from mountain bedrock and clad in book-matched Vals quartz. Featuring Finnish pine dry saunas, Turkish hammams, and sub-zero cryogenic therapy suites.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
    specs: ['Finnish stone dry saunas', 'Sub-zero cryo chamber', 'Hydrotherapy cascades', 'Chromotherapy lighting']
  },
  {
    id: 'private-aviation',
    title: 'Helicopter & Aviation Access',
    subtitle: 'Effortless global transit directly to your door',
    description: 'ICAO-compliant private helipads equipped with stealth automated retractable lighting and GPS navigation beacons, connecting directly with international private jet hubs.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=85',
    specs: ['Night-vision landing beacons', 'Heated tarmac surface', 'Automated security sweep', 'Direct baggage lift']
  },
  {
    id: 'sommelier-vault',
    title: 'Sommelier Wine Vaults',
    subtitle: 'Preserving rare vintages with museum precision',
    description: 'Seismically isolated subterranean cellars engineered with independent hygrometric control systems, anti-vibration timber racks, and private tasting tables carved from monolithic travertine.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85',
    specs: ['Dual-zone 12°C/16°C controls', 'Vibration-damped racking', 'Rare vintage display safes', 'Sommelier inventory system']
  },
  {
    id: 'automotive-gallery',
    title: 'Automotive Display Galleries',
    subtitle: 'Curated showroom for collector automobiles',
    description: 'Epoxy-finished galleries with museum-grade color-calibrated spotlighting, climate control, and whisper-quiet mechanical turntables to showcase your most prized automotive sculptures.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85',
    specs: ['6 to 10 vehicle capacity', 'Motorized center turntable', 'Dehumidified air system', 'Exhaust extraction ducts']
  }
];

export const STATS_DATA = [
  { value: 6, suffix: '+', label: 'Core Real Estate Services' },
  { value: 100, suffix: '%', label: 'Verified Properties' },
  { value: 1, suffix: ' Hub', label: 'South Bopal Focus' },
  { value: 99.4, suffix: '%', label: 'Client Advisory Satisfaction' }
];

export const TESTIMONIALS = [
  {
    id: 't-01',
    quote: 'South Bopal Real Estate provided exceptional property consultation and transparent guidance for our apartment purchase in South Bopal. Kishor Udhas was thorough and reliable.',
    author: 'Rajesh Patel',
    title: 'Home Buyer',
    location: 'South Bopal, Ahmedabad'
  },
  {
    id: 't-02',
    quote: 'Finding the right residential property in South Bopal was seamless with South Bopal Real Estate. Kishor Udhas ensured flawless valuation and title due diligence.',
    author: 'Mehul Shah',
    title: 'Property Buyer',
    location: 'South Bopal, Ahmedabad'
  },
  {
    id: 't-03',
    quote: 'Outstanding advisory on our bungalow and villa acquisition. Objective market analysis, zero hidden terms, and attentive support throughout the documentation from Kishor Udhas.',
    author: 'Darshan Dave',
    title: 'Bungalow Owner',
    location: 'South Bopal, Ahmedabad'
  }
];

export const CONSTRUCTION_PROGRESS = {
  title: 'Architectural Evolution & Engineering Milestone',
  subtitle: 'Drag the slider to examine the structural transformation from raw concrete foundation to the completed glass-and-stone residence.',
  earlierImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85',
  earlierLabel: 'Phase 02: Structural Cantilever & Concrete Pour',
  currentImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
  currentLabel: 'Phase 04: Finished Residence & Glazing'
};
