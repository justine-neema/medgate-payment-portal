export const navBarLinks = [
  {
    linkLabel: 'Home',
    linkHref: '/',
  },
  {
    linkLabel: 'Browse Hospitals',
    linkHref: '/hospitals',
  },
  {
    linkLabel: 'How it works',
    linkHref: '/works',
  },
  {
    linkLabel: 'Testimonials',
    linkHref: '/testimonials',
  },
  {
    linkLabel: 'About',
    linkHref: '/about',
    subLinks: [
      {
        linkLabel: 'Our Story',
        linkHref: '/about/story',
      },
      {
        linkLabel: 'Team',
        linkHref: '/about/team',
      },
      {
        linkLabel: 'Careers',
        linkHref: '/about/careers',
      },
    ],
  },
];

export const groupUsers = [
  { avatar: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_3.png' },
  { avatar: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_8.png' },
  { avatar: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_9.png' },
  { avatar: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_10.png' },
];

export const heroSlides = [
  {
    title: 'Your Trusted Gateway to Healthcare in Rwanda',
    subtitle:
      'Connect with top hospitals and personalized care coordination. Get treated with confidence',
    cta: 'Get Started',
    secondaryCta: 'Browse Hospitals',
    bgImage: '/images/hero-bg.png',
    stats: '500+ Patients Helped • 15+ Partner Hospitals • 4.8 ⭐ Rating',
  },
  {
    title: 'Quality Healthcare Made Accessible',
    subtitle:
      "Compare hospitals, view services, and book appointments with Rwanda's leading medical facilities",
    cta: 'Get Started',
    secondaryCta: 'Browse Hospitals',
    bgImage: '/images/hero-bg.png',
    stats: '500+ Patients Helped • 15+ Partner Hospitals • 4.8 ⭐ Rating',
  },
  {
    title: 'Your Health Journey Starts Here',
    subtitle: 'Expert medical care coordination and seamless hospital connections across Rwanda',
    cta: 'Get Started',
    secondaryCta: 'Browse Hospitals',
    bgImage: '/images/hero-bg.png',
    stats: '500+ Patients Helped • 15+ Partner Hospitals • 4.8 ⭐ Rating',
  },
];

export const hospitals = [
  {
    hospitalId: '1',
    hospitalName: 'Legacy Hospital',
    rating: 4.8,
    location: 'Kigali/Rwanda',
    featured: true,
    price: 150000,
    services: ['Dental Procedures', 'Oral Surgery', 'Prosthodontics', 'Diagnostic & Imaging'],
    hospitalLogo:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&h=200&fit=crop',
  },
  {
    hospitalId: '2',
    hospitalName: 'King Faisal Hospital',
    rating: 4.9,
    location: 'Kigali/Rwanda',
    featured: true,
    price: 200000,
    services: ['Cardiology', 'Neurology', 'Oncology', 'Pediatrics'],
    hospitalLogo: null,
  },
  {
    hospitalId: '3',
    hospitalName: 'Rwanda Military Hospital',
    rating: 4.7,
    location: 'Kigali/Rwanda',
    featured: false,
    price: 120000,
    services: ['Emergency Care', 'Surgery', 'Radiology', 'Laboratory'],
    hospitalLogo:
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=200&h=200&fit=crop',
  },
  {
    hospitalId: '4',
    hospitalName: 'CHUK Hospital',
    rating: 4.6,
    location: 'Kigali/Rwanda',
    featured: false,
    price: 180000,
    services: ['Internal Medicine', 'Obstetrics', 'General Surgery', 'Pharmacy'],
    hospitalLogo: null,
  },
  {
    hospitalId: '5',
    hospitalName: 'Clinique La Medicale',
    rating: 4.5,
    location: 'Kigali/Rwanda',
    featured: true,
    price: 95000,
    services: ['Primary Care', 'Vaccination', 'Lab Tests', 'Consultation'],
    hospitalLogo:
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=200&h=200&fit=crop',
  },
  {
    hospitalId: '6',
    hospitalName: 'Polyclinique du Plateau',
    rating: 4.4,
    location: 'Kigali/Rwanda',
    featured: false,
    price: 110000,
    services: ['Dermatology', 'Ophthalmology', 'ENT', 'Physiotherapy'],
    hospitalLogo: null,
  },
];
