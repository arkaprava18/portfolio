export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string[];
  techStack: string[];
  highlights: string[];
  links: ProjectLink[];
  screenshots: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: 'irakhay',
    name: 'Irakhay',
    category: 'Multi-lingual e-commerce platform',
    summary:
      'Full-stack marketplace with multi-role access, automated workflows, and integrated payments.',
    description: [
      'Built a production-grade platform supporting user, admin, and super-admin workflows with a comprehensive admin panel.',
      'Implemented Stripe and YoMoney payments with automated email flows, cart cleanup jobs, and Telegram chat support.',
      'Developed a robust Node.js API with Express, MySQL, AWS S3 integration, and real-time features.',
      'Created an admin dashboard with product management, order processing, stock control, and customer communication tools.',
      'Integrated AWS services, payment gateways, and automated workflows for a seamless e-commerce experience.',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'AWS S3', 'Stripe', 'YoMoney', 'Bootstrap', 'Redux', 'JWT'],
    highlights: [
      'Multi-role interfaces with permissioned dashboards and advanced admin tooling.',
      'Automated cart cleanup with CRON jobs, email automation, and scheduled tasks.',
      'Third-party integrations for payments, file uploads, and customer support.',
      'Scalable architecture with AWS deployment and multi-currency support.',
    ],
    links: [{ label: 'Live Site', url: 'https://irakhay.com' }],
    screenshots: [],
  },
  {
    slug: 'thevanko',
    name: 'TheVanko',
    category: 'Content & classifieds platform',
    summary:
      'Content publishing and subscription platform with admin tooling and multilingual support.',
    description: [
      'Implemented content posting flows, admin dashboards, and multilingual interfaces.',
      'Designed database schema and server-side validators for reliable content operations.',
      'Built subscription billing and scheduled email automation workflows.',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'MariaDB', 'AWS'],
    highlights: [
      'Admin dashboards and content moderation tooling.',
      'Subscription billing with automation for renewals and notifications.',
      'Multilingual UX and structured content workflows.',
    ],
    links: [{ label: 'Live Site', url: 'https://thevanko.com' }],
    screenshots: [],
  },
  {
    slug: 'hault-api',
    name: 'HAULT API',
    category: 'Backend API for Logistics Platform',
    summary:
      'RESTful API powering a comprehensive logistics and delivery management system with real-time tracking and multi-role authentication.',
    description: [
      'Developed a scalable Node.js API with TypeScript, Express, and PostgreSQL for managing deliveries, drivers, fleet owners, and vendors.',
      'Implemented JWT authentication, role-based access control, and real-time updates using WebSockets for live tracking.',
      'Integrated payment processing, geolocation services, automated scheduling, and push notifications for efficient logistics operations.',
      'Built with modern architecture including Docker containerization, Redis caching, and comprehensive logging with Winston.',
    ],
    techStack: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'JWT', 'WebSockets', 'Docker', 'Redis', 'Winston', 'AWS S3'],
    highlights: [
      'Multi-role authentication system with secure API endpoints and real-time data synchronization.',
      'Real-time tracking and notifications for delivery status updates with WebSocket integration.',
      'Scalable architecture supporting high-volume logistics operations with cloud deployment.',
      'Advanced features including geofencing, route optimization, and automated dispatch systems.',
    ],
    links: [],
    screenshots: [],
  },
  {
    slug: 'hault-driver-app',
    name: 'HAULT Driver App',
    category: 'Mobile App for Drivers',
    summary:
      'React Native mobile application for delivery drivers with GPS tracking, route optimization, and earnings management.',
    description: [
      'Built a cross-platform mobile app using React Native and Expo for delivery drivers to manage assignments, track routes, and update delivery status.',
      'Integrated Google Maps for navigation, real-time location tracking, and optimized routing algorithms with offline capabilities.',
      'Implemented push notifications, secure authentication, and offline-first architecture for field operations in unreliable networks.',
      'Features include earnings tracking, performance analytics, customer communication, and automated check-in/check-out systems.',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Google Maps API', 'AsyncStorage', 'Push Notifications', 'Offline Storage'],
    highlights: [
      'Real-time GPS tracking and route optimization with Google Maps integration.',
      'Offline-first architecture ensuring functionality in areas with poor connectivity.',
      'Intuitive UI for quick status updates, earnings tracking, and customer interactions.',
      'Advanced features like automated dispatch, proof of delivery, and real-time fleet coordination.',
    ],
    links: [],
    screenshots: [],
  },
  {
    slug: 'hault-fleet-owner',
    name: 'HAULT Fleet Owner App',
    category: 'Mobile App for Fleet Management',
    summary:
      'React Native application for fleet owners to manage drivers, vehicles, and monitor delivery operations.',
    description: [
      'Developed a comprehensive fleet management app with driver assignment, vehicle tracking, and performance analytics using React Native and Expo.',
      'Integrated real-time dashboards, earnings reports, maintenance scheduling, and fleet performance metrics.',
      'Implemented secure communication channels, data synchronization with the central API, and advanced reporting features.',
      'Features include driver performance tracking, vehicle maintenance alerts, and automated billing systems.',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Real-time Synchronization', 'Data Visualization', 'Secure Communication', 'Push Notifications'],
    highlights: [
      'Comprehensive fleet oversight with real-time monitoring and performance dashboards.',
      'Advanced analytics and earnings optimization tools with interactive charts.',
      'Seamless integration with driver and vendor ecosystems through secure APIs.',
      'Automated maintenance scheduling and vehicle health monitoring systems.',
    ],
    links: [],
    screenshots: [],
  },
  {
    slug: 'hault-vendor',
    name: 'HAULT Vendor App',
    category: 'Mobile App for Vendors',
    summary:
      'React Native application for vendors to manage orders, track deliveries, and handle customer interactions.',
    description: [
      'Created a vendor-facing app for order management, delivery tracking, and customer communication using React Native and Expo.',
      'Integrated inventory management, order history, rating systems, and performance analytics for vendor operations.',
      'Implemented push notifications for order updates, secure payment processing, and real-time order status tracking.',
      'Features include customer feedback management, automated order confirmations, and vendor dashboard with sales metrics.',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Payment Integration', 'Notifications', 'Inventory Management'],
    highlights: [
      'Streamlined order management and delivery tracking with real-time updates.',
      'Advanced customer interaction tools, rating systems, and feedback management.',
      'Integrated payment processing and inventory management for seamless vendor operations.',
      'Performance analytics and automated notifications for improved vendor experience.',
    ],
    links: [],
    screenshots: [],
  },
];

export const featuredProjects = projects.slice(3, 7);
