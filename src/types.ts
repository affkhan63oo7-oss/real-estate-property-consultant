export interface Property {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Penthouse' | 'Waterfront' | 'Villa' | 'Sanctuary';
  status: 'Available' | 'Under Offer' | 'Exclusive Reserve' | 'Completed';
  price: number;
  priceFormatted: string;
  location: {
    address: string;
    city: string;
    region: string;
    country: string;
    coordinates: { lat: number; lng: number };
  };
  specs: {
    bedrooms: number;
    bathrooms: number;
    interiorSqFt: number;
    exteriorSqFt: number;
    garageSpaces: number;
    yearBuilt: number;
    floors: number;
  };
  architect: {
    name: string;
    firm: string;
    philosophy: string;
  };
  description: string;
  story: string[];
  features: string[];
  amenities: string[];
  heroImage: string;
  gallery: { url: string; caption: string; category: string }[];
  floorPlans: {
    level: string;
    title: string;
    sqFt: number;
    image: string;
    description: string;
    rooms: { name: string; size: string }[];
  }[];
  nearbyPlaces: {
    category: 'Dining' | 'Aviation' | 'Yachting' | 'Education' | 'Culture';
    name: string;
    distance: string;
    travelTime: string;
  }[];
  featured?: boolean;
}

export interface Appointment {
  id: string;
  created_at: string;
  property_id: string;
  property_title: string;
  full_name: string;
  email: string;
  phone: string;
  date_of_birth: string; // Must allow dates before 2026
  preferred_date: string;
  preferred_time: string;
  inquiry_type: 'Private Viewing' | 'Architectural Tour' | 'Virtual Video Walkthrough' | 'Financial & Portfolio Consultation' | 'Property Consultation' | 'Commercial Real Estate' | 'Residential Buying' | 'Residential Selling' | 'Property Rentals';
  notes?: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Archived';
}

export interface LeadEnquiry {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  preferred_contact: 'Email' | 'Phone' | 'WhatsApp';
  property_interest?: string;
  budget_range: string;
  message: string;
  status: 'New' | 'Contacted' | 'Closed';
}

export interface FilterState {
  category: string;
  searchQuery: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'area-desc';
}
