export interface Database {
  public: {
    Tables: {
      hero_content: {
        Row: HeroContent;
        Insert: Omit<HeroContent, "id">;
        Update: Partial<Omit<HeroContent, "id">>;
      };
      services: {
        Row: Service;
        Insert: Omit<Service, "id">;
        Update: Partial<Omit<Service, "id">>;
      };
      about_content: {
        Row: AboutContent;
        Insert: Omit<AboutContent, "id">;
        Update: Partial<Omit<AboutContent, "id">>;
      };
      testimonials: {
        Row: Testimonial;
        Insert: Omit<Testimonial, "id">;
        Update: Partial<Omit<Testimonial, "id">>;
      };
      products: {
        Row: Product;
        Insert: Omit<Product, "id">;
        Update: Partial<Omit<Product, "id">>;
      };
      contact_info: {
        Row: ContactInfo;
        Insert: Omit<ContactInfo, "id">;
        Update: Partial<Omit<ContactInfo, "id">>;
      };
      bookings: {
        Row: Booking;
        Insert: Omit<Booking, "id" | "created_at">;
        Update: Partial<Omit<Booking, "id" | "created_at">>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

export interface HeroContent {
  id: string;
  title_en: string;
  title_fr: string;
  subtitle_en: string;
  subtitle_fr: string;
  cta_text_en: string;
  cta_text_fr: string;
  image_url: string | null;
}

export interface Service {
  id: string;
  name_en: string;
  name_fr: string;
  description_en: string;
  description_fr: string;
  icon: string;
  image_url: string | null;
  display_order: number;
}

export interface AboutContent {
  id: string;
  title_en: string;
  title_fr: string;
  body_en: string;
  body_fr: string;
  years_experience: number;
  happy_clients: number;
  image_url: string | null;
}

export interface Testimonial {
  id: string;
  client_name: string;
  service_en: string;
  service_fr: string;
  quote_en: string;
  quote_fr: string;
  rating: number;
}

export interface Product {
  id: string;
  name_en: string;
  name_fr: string;
  description_en: string;
  description_fr: string;
  price: number;
  category: string;
  image_url: string | null;
  in_stock: boolean;
  featured: boolean;
}

export interface ContactInfo {
  id: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  booking_url: string;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string | null;
  preferred_date: string | null;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  created_at: string;
}
