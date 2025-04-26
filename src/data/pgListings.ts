
import { PGListing } from "../types/pg";

export const pgListings: PGListing[] = [
  {
    id: "pg-1",
    name: "Comfort Haven PG",
    location: "HSR Layout",
    area: "HSR Layout",
    city: "Bangalore",
    rent: 12000,
    type: "Boys",
    roomType: "Double",
    amenities: ["WiFi", "AC", "Food", "Laundry", "TV", "Power Backup", "Fridge"],
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800"
    ],
    description: "Comfort Haven PG offers a relaxing environment for students and working professionals. Located in the prime area of HSR Layout, all essential amenities are within walking distance. The PG provides delicious home-cooked meals three times a day. Each room is well-ventilated and comes with comfortable beds, study tables, and wardrobes. The common areas include a TV room and a reading space.",
    contactName: "Rahul Sharma",
    contactPhone: "9876543210",
    contactEmail: "rahul.sharma@example.com",
    featured: true,
    rating: 4.5,
    reviewCount: 32
  },
  {
    id: "pg-2",
    name: "Urban Nest",
    location: "Indiranagar",
    area: "Indiranagar",
    city: "Bangalore",
    rent: 15000,
    type: "Girls",
    roomType: "Single",
    amenities: ["WiFi", "AC", "Food", "Laundry", "Gym", "Power Backup"],
    images: [
      "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800"
    ],
    description: "Urban Nest is a premium PG accommodation designed exclusively for girls. It offers a safe and secure environment in the heart of Indiranagar. All rooms come with air conditioning, high-speed internet, and modern furniture. The in-house chef prepares nutritious meals, and a dedicated housekeeping team ensures cleanliness. The PG also features a small gym and a common area for recreation.",
    contactName: "Priya Patel",
    contactPhone: "8765432109",
    contactEmail: "priya.patel@example.com",
    featured: true,
    rating: 4.8,
    reviewCount: 45
  },
  {
    id: "pg-3",
    name: "Harmony House",
    location: "Koramangala",
    area: "Koramangala",
    city: "Bangalore",
    rent: 10000,
    type: "Co-ed",
    roomType: "Triple",
    amenities: ["WiFi", "Food", "Laundry", "TV", "Power Backup"],
    images: [
      "https://images.unsplash.com/photo-1560448075-75a2c4a96943?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800"
    ],
    description: "Harmony House is a co-ed PG located in the vibrant area of Koramangala. The PG offers affordable accommodation with essential amenities including WiFi, regular meals, and laundry service. The rooms are spacious and well-maintained, accommodating three people comfortably. The PG is close to major tech parks and educational institutions, making it an ideal choice for students and working professionals.",
    contactName: "Vikram Singh",
    contactPhone: "7654321098",
    contactEmail: "vikram.singh@example.com",
    featured: false,
    rating: 4.2,
    reviewCount: 28
  },
  {
    id: "pg-4",
    name: "Serenity Stays",
    location: "Whitefield",
    area: "Whitefield",
    city: "Bangalore",
    rent: 14000,
    type: "Boys",
    roomType: "Double",
    amenities: ["WiFi", "AC", "Food", "Laundry", "TV", "Power Backup", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800"
    ],
    description: "Serenity Stays provides a peaceful and comfortable living experience for young professionals and students. Located in the tech hub of Whitefield, the PG is close to major IT companies. The accommodation offers air-conditioned rooms with modern amenities. The facility includes dedicated parking space, making it convenient for those with vehicles. The food menu is diverse, catering to different tastes.",
    contactName: "Arun Kumar",
    contactPhone: "6543210987",
    contactEmail: "arun.kumar@example.com",
    featured: false,
    rating: 4.0,
    reviewCount: 18
  },
  {
    id: "pg-5",
    name: "Tranquil Towers",
    location: "Electronic City",
    area: "Electronic City",
    city: "Bangalore",
    rent: 13000,
    type: "Girls",
    roomType: "Single",
    amenities: ["WiFi", "AC", "Food", "Laundry", "Gym", "Power Backup", "Security"],
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800"
    ],
    description: "Tranquil Towers is a women's PG located in Electronic City, offering a safe and comfortable living space. The PG features single occupancy rooms, each equipped with air conditioning and high-speed internet. The facility has 24/7 security with CCTV surveillance. A small gym is available for residents who want to maintain their fitness routine. The in-house kitchen serves vegetarian and non-vegetarian meals.",
    contactName: "Meera Desai",
    contactPhone: "9876543210",
    contactEmail: "meera.desai@example.com",
    featured: true,
    rating: 4.7,
    reviewCount: 39
  },
  {
    id: "pg-6",
    name: "Green View Residency",
    location: "JP Nagar",
    area: "JP Nagar",
    city: "Bangalore",
    rent: 11000,
    type: "Co-ed",
    roomType: "Double",
    amenities: ["WiFi", "Food", "Laundry", "TV", "Power Backup", "Garden"],
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560448075-75a2c4a96943?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800"
    ],
    description: "Green View Residency is a co-ed PG in the peaceful neighborhood of JP Nagar. The property features a beautiful garden where residents can relax after a long day. The rooms are available on a sharing basis, with comfortable beds and adequate storage space. The PG provides homely food and has a common TV room for entertainment. Regular cleaning service ensures a tidy living environment.",
    contactName: "Sunita Rao",
    contactPhone: "8765432109",
    contactEmail: "sunita.rao@example.com",
    featured: false,
    rating: 4.1,
    reviewCount: 22
  },
  {
    id: "pg-7",
    name: "Sterling Suites",
    location: "Marathahalli",
    area: "Marathahalli",
    city: "Bangalore",
    rent: 9000,
    type: "Boys",
    roomType: "Triple",
    amenities: ["WiFi", "Food", "Laundry", "TV", "Power Backup"],
    images: [
      "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800"
    ],
    description: "Sterling Suites offers affordable accommodation for young men in Marathahalli area. The PG is ideal for those working in nearby tech parks or studying in local institutions. The rooms are shared among three people, with individual beds and personal storage units. The facility provides three meals a day and has a common TV room for leisure. High-speed WiFi and power backup ensure uninterrupted connectivity.",
    contactName: "Anand Verma",
    contactPhone: "7654321098",
    contactEmail: "anand.verma@example.com",
    featured: false,
    rating: 3.8,
    reviewCount: 14
  },
  {
    id: "pg-8",
    name: "Maple Residency",
    location: "BTM Layout",
    area: "BTM Layout",
    city: "Bangalore",
    rent: 16000,
    type: "Girls",
    roomType: "Single",
    amenities: ["WiFi", "AC", "Food", "Laundry", "TV", "Power Backup", "Fridge", "Microwave"],
    images: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560448075-75a2c4a96943?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800"
    ],
    description: "Maple Residency is a premium PG for women located in BTM Layout. The PG offers single occupancy rooms with modern amenities like air conditioning, refrigerator, and microwave. Each room is designed to provide maximum comfort and privacy. The facility serves nutritious meals and maintains high standards of cleanliness. The location is convenient, with easy access to shopping centers, hospitals, and public transport.",
    contactName: "Kavita Menon",
    contactPhone: "6543210987",
    contactEmail: "kavita.menon@example.com",
    featured: true,
    rating: 4.9,
    reviewCount: 51
  },
  {
    id: "pg-9",
    name: "Sunshine PG",
    location: "Brookefield",
    area: "Brookefield",
    city: "Bangalore",
    rent: 12000,
    type: "Co-ed",
    roomType: "Double",
    amenities: ["WiFi", "Food", "Laundry", "TV", "Power Backup", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1560448075-75a2c4a96943?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800"
    ],
    description: "Sunshine PG is a co-ed accommodation in the developing area of Brookefield. The PG offers double sharing rooms with basic amenities to ensure a comfortable stay. The facility includes a parking area for residents with vehicles. Regular meals are provided, with special menu on weekends. The PG is located in a peaceful neighborhood, ideal for those who prefer a quiet environment.",
    contactName: "Rajan Iyer",
    contactPhone: "9876543210",
    contactEmail: "rajan.iyer@example.com",
    featured: false,
    rating: 4.0,
    reviewCount: 19
  },
  {
    id: "pg-10",
    name: "City Comfort PG",
    location: "Bellandur",
    area: "Bellandur",
    city: "Bangalore",
    rent: 14000,
    type: "Boys",
    roomType: "Single",
    amenities: ["WiFi", "AC", "Food", "Laundry", "TV", "Power Backup", "Gym"],
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?auto=format&fit=crop&w=800"
    ],
    description: "City Comfort PG is designed for young men who value privacy and comfort. Located in Bellandur, the PG is close to major IT companies and shopping centers. The accommodation offers single occupancy rooms with air conditioning and high-speed internet. A small gym within the premises allows residents to maintain their fitness routine. The PG serves three nutritious meals a day and provides regular laundry service.",
    contactName: "Karan Malhotra",
    contactPhone: "8765432109",
    contactEmail: "karan.malhotra@example.com",
    featured: true,
    rating: 4.6,
    reviewCount: 37
  },
];

export const amenitiesList = [
  "WiFi",
  "AC",
  "Food",
  "Laundry",
  "TV",
  "Power Backup",
  "Gym",
  "Parking",
  "Fridge",
  "Security",
  "Garden",
  "Microwave",
];

export const locationsList = [
  "HSR Layout",
  "Indiranagar",
  "Koramangala",
  "Whitefield",
  "Electronic City",
  "JP Nagar",
  "Marathahalli",
  "BTM Layout",
  "Brookefield",
  "Bellandur",
];

export const roomTypes = [
  "Single",
  "Double",
  "Triple",
  "Multiple"
];

export const pgTypes = [
  "Boys",
  "Girls",
  "Co-ed"
];

export const admins = [
  {
    username: "admin",
    password: "password123"
  }
];
