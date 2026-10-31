import { Icon } from "../assests/assets";

/**
 * Portfolio content is maintained here because this project has no CMS or
 * backend. Keep unknown employment and ownership details null until confirmed.
 *
 * @typedef {"personal" | "professional" | "open-source" | "freelance" | "client" | "experimental" | "unclassified"} ProjectCategory
 * @typedef {Object} Company
 * @property {string} id
 * @property {string} name
 * @property {string | null} logo
 * @property {string | null} website
 * @property {string | null} location
 * @typedef {Object} Experience
 * @property {string} id
 * @property {string} companyId
 * @property {string | null} role
 * @property {string | null} employmentType
 * @property {string | null} workplaceType
 * @property {string | null} location
 * @property {string | null} startDate Date in YYYY-MM format
 * @property {string | null} endDate Date in YYYY-MM format
 * @property {boolean | null} isCurrent
 * @property {string | null} summary
 * @property {string[]} responsibilities
 * @property {string[]} achievements
 * @property {string[]} technologies
 * @property {string[]} relatedProjectIds
 * @typedef {Object} PortfolioProject
 * @property {string} id
 * @property {string} title
 * @property {string} slug
 * @property {ProjectCategory} category
 * @property {string | null} ownership
 * @property {string | null} status
 * @property {string | null} tagline
 * @property {string | null} shortDescription
 * @property {string | null} fullDescription
 * @property {string | null} thumbnail
 * @property {{src: string, type: "image" | "video", alt: string}[]} gallery
 * @property {string[]} technologies
 * @property {string[]} features
 * @property {string | null} myContribution
 * @property {string | null} problem
 * @property {string | null} solution
 * @property {string | null} challenges
 * @property {string | null} architecture
 * @property {string | null} liveUrl
 * @property {string | null} githubUrl
 * @property {string | null} documentationUrl
 * @property {string | null} companyId
 * @property {string | null} startDate
 * @property {string | null} completionDate
 * @property {boolean} isFeatured
 * @property {number} displayOrder
 * @property {string | null} role
 * @property {string | null} duration
 * @property {string | null} outcome
 */

/** @type {Company[]} */
export const companies = [
  {
    id: "clicktrik",
    name: "Clicktrik Company",
    logo: null,
    website: null,
    location: null,
  },
];

/** @type {Experience[]} */
export const experiences = [
  {
    id: "clicktrik-role-to-confirm",
    companyId: "clicktrik",
    role: null,
    employmentType: null,
    workplaceType: null,
    location: null,
    startDate: null,
    endDate: null,
    isCurrent: null,
    summary: null,
    responsibilities: [],
    achievements: [],
    technologies: [],
    relatedProjectIds: [],
  },
];

const gallery = (assets, title) =>
  assets.map((src, index) => ({
    src,
    type: "image",
    alt: `${title} project screenshot ${index + 1}`,
  }));

/** @type {PortfolioProject[]} */
export const projects = [
  {
    id: "eden-rose",
    title: "EDEN ROSE",
    slug: "eden-rose",
    category: "client",
    ownership: "Client project, as described in the existing case study.",
    status: null,
    tagline: "A photography portfolio shaped around cinematic storytelling.",
    shortDescription:
      "A photography portfolio designed to bring visual storytelling and a premium presentation together.",
    fullDescription:
      "A visually immersive portfolio concept for photography, emphasizing emotions, storytelling, and premium aesthetics.",
    thumbnail: null,
    gallery: [
      {
        src: "https://mediavault.clicktrick.in/uploads/68e60be1d265d81a1fca3c06/videos/d864b282-e067-42ee-aab8-c9141b58d5e5.webm",
        type: "video",
        alt: "Eden Rose photography portfolio preview",
      },
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: [
      "Cinematic fullscreen video sections",
      "Smooth Framer Motion animations",
      "Responsive gallery layout",
      "Optimized image & video loading",
    ],
    myContribution: "Frontend Developer & UI Designer.",
    problem:
      "The client needed a modern portfolio that feels luxurious and cinematic without sacrificing performance or usability.",
    solution:
      "Built a motion-driven website with fullscreen visuals, subtle animations, and optimized media loading to maintain speed.",
    challenges: null,
    architecture: null,
    liveUrl: "https://photography-coral-mu.vercel.app/",
    githubUrl: null,
    documentationUrl: null,
    companyId: null,
    startDate: null,
    completionDate: null,
    isFeatured: true,
    displayOrder: 1,
    role: "Frontend Developer & UI Designer",
    duration: "2 Weeks",
    outcome:
      "Delivered a premium portfolio experience that enhances brand identity and improves client engagement.",
  },
  {
    id: "real-estatein",
    title: "Real Estatein",
    slug: "real-estatein",
    category: "unclassified",
    ownership: null,
    status: null,
    tagline: "A clear, mobile-first home for property listings.",
    shortDescription:
      "A property browsing experience focused on clear listings and straightforward navigation.",
    fullDescription:
      "A real estate platform designed to showcase property listings clearly and make browsing approachable.",
    thumbnail: Icon.estate2,
    gallery: gallery([Icon.estate2], "Real Estatein"),
    technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
    features: [
      "Modern property listing cards",
      "Clean and minimal UI",
      "Mobile-first responsive design",
      "Fast page navigation",
    ],
    myContribution: "Frontend Developer.",
    problem:
      "Users needed an easy-to-navigate interface to browse properties without feeling overwhelmed by information.",
    solution:
      "Designed a card-based layout with clear typography, intuitive navigation, and a mobile-first approach.",
    challenges: null,
    architecture: null,
    liveUrl: "https://real-estate2-psi.vercel.app/",
    githubUrl: null,
    documentationUrl: null,
    companyId: null,
    startDate: null,
    completionDate: null,
    isFeatured: false,
    displayOrder: 2,
    role: "Frontend Developer",
    duration: "10 Days",
    outcome:
      "Improved property visibility and user experience, making browsing simple and efficient.",
  },
  {
    id: "estatein",
    title: "Estatein",
    slug: "estatein",
    category: "unclassified",
    ownership: null,
    status: null,
    tagline: "A focused landing page for a real estate brand.",
    shortDescription:
      "A real estate landing page with a high-impact introduction and clear calls to action.",
    fullDescription:
      "A conversion-focused landing page for a real estate brand, designed to communicate trust, clarity, and a strong visual identity.",
    thumbnail: Icon.estate1,
    gallery: gallery([Icon.estate1, Icon.estate2], "Estatein"),
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    features: [
      "High-impact hero section",
      "Clear call-to-action layout",
      "Minimal yet modern UI",
      "Optimized for conversions",
    ],
    myContribution: "Frontend Developer.",
    problem:
      "The challenge was to present trust, clarity, and modern design within a limited content structure.",
    solution:
      "Focused on bold sections, clear CTAs, and a structured layout that guides users naturally.",
    challenges: null,
    architecture: null,
    liveUrl: "https://real-estate-henna-nine.vercel.app/",
    githubUrl: "https://github.com/Meraj-1/Real-Estate",
    documentationUrl: null,
    companyId: null,
    startDate: null,
    completionDate: null,
    isFeatured: true,
    displayOrder: 3,
    role: "Frontend Developer",
    duration: "1 Week",
    outcome:
      "Created a conversion-focused landing page that strengthens brand credibility and user trust.",
  },
  {
    id: "ecommerce-platform",
    title: "ECOM-WEB",
    slug: "ecommerce-platform",
    category: "unclassified",
    ownership: null,
    status: null,
    tagline: "A product-first storefront built for a smoother shop.",
    shortDescription:
      "An e-commerce frontend with a clear product presentation and responsive shopping layout.",
    fullDescription:
      "A modern e-commerce frontend designed to make browsing and shopping feel clear, fast, and approachable.",
    thumbnail: Icon.ecom1,
    gallery: gallery([Icon.ecom1, Icon.ecom2], "E-commerce platform"),
    technologies: ["React", "Tailwind CSS"],
    features: [
      "Product-focused UI design",
      "Clean category & product sections",
      "Responsive shopping layout",
      "Fast and smooth interactions",
    ],
    myContribution: "Frontend Developer.",
    problem:
      "Users often drop off when interfaces are cluttered or slow, especially on mobile devices.",
    solution:
      "Built a clean and fast UI with product-focused layouts and smooth interactions.",
    challenges: null,
    architecture: null,
    liveUrl: "https://ecom-forever-2.vercel.app/",
    githubUrl: "https://github.com/Meraj-1/Ecom_Backend",
    documentationUrl: null,
    companyId: null,
    startDate: null,
    completionDate: null,
    isFeatured: true,
    displayOrder: 4,
    role: "Frontend Developer",
    duration: "2 Weeks",
    outcome:
      "Delivered a user-friendly shopping experience with improved engagement and clarity.",
  },
  {
    id: "zerodha-clone",
    title: "Zerodha Clone",
    slug: "zerodha-clone",
    category: "unclassified",
    ownership: null,
    status: null,
    tagline: null,
    shortDescription: null,
    fullDescription: null,
    thumbnail: Icon.zerodha1,
    gallery: gallery([Icon.zerodha1, Icon.zerodha2], "Zerodha Clone"),
    technologies: ["React", "Node.js", "Tailwind CSS"],
    features: [],
    myContribution: null,
    problem: null,
    solution: null,
    challenges: null,
    architecture: null,
    liveUrl: "https://zerodhaclonefivne.vercel.app/",
    githubUrl: "https://github.com/Meraj-1/Zerodha.2.0/tree/main/frontend",
    documentationUrl: null,
    companyId: null,
    startDate: null,
    completionDate: null,
    isFeatured: false,
    displayOrder: 5,
    role: null,
    duration: null,
    outcome: null,
  },
];

export const projectCategories = [
  { id: "personal", label: "Personal projects" },
  { id: "professional", label: "Professional projects" },
  { id: "open-source", label: "Open source" },
  { id: "freelance", label: "Freelance projects" },
  { id: "client", label: "Client projects" },
  { id: "experimental", label: "Experimental projects" },
  { id: "unclassified", label: "Unclassified" },
];

export const projectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

export const companyById = (companyId) =>
  companies.find((company) => company.id === companyId);
