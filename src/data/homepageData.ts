import { NavItem, ServiceCardItem, ModalityItem, TherapistItem } from "@/types";

export const siteConfig = {
  name: "Conejo Valley Family Counseling",
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description:
    "Counseling for adults, couples, and children in Newbury & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more. In-person & online.",
  logoUrl:
    "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png",
  phone: "805.242.3120",
  email: "info@conejovalleycounseling.com",
  address: {
    street: "925 Broadbeck Dr",
    suites: "Suites 200 and 225",
    cityStateZip: "Newbury Park, CA 91320",
  },
  serviceAreas:
    "Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley",
};

// Exact original navigation: Our Team, Specialties, Methods, FAQs, Contact
export const navigationItems: NavItem[] = [
  {
    title: "Our Team",
    href: "https://www.conejovalleycounseling.com/our-team",
    dropdown: [
      { title: "Jennifer Anderson, LMFT", href: "https://www.conejovalleycounseling.com/jennifer-anderson" },
      { title: "Candace Bletscher, AMFT", href: "https://www.conejovalleycounseling.com/candace-bletscher" },
      { title: "Heather Williams-Baumgart, AMFT", href: "https://www.conejovalleycounseling.com/heather-williams-baumgart" },
      { title: "Michaela Gorospe, AMFT", href: "https://www.conejovalleycounseling.com/michaela-gorospe" },
      { title: "Samantha Johnson, AMFT", href: "https://www.conejovalleycounseling.com/samantha-johnson" },
      { title: "Autumn Bodily, AMFT", href: "https://www.conejovalleycounseling.com/autumn-bodily" },
      { title: "Andrea Watkins, APCC", href: "https://www.conejovalleycounseling.com/andrea-watkins" },
      { title: "Rosa Gomez, AMFT", href: "https://www.conejovalleycounseling.com/rosa-gomez" },
      { title: "Chad Flores, AMFT", href: "https://www.conejovalleycounseling.com/chad-flores" },
    ],
  },
  {
    title: "Specialties",
    href: "https://www.conejovalleycounseling.com/specialties",
    dropdown: [
      { title: "Dissociation", href: "https://www.conejovalleycounseling.com/dissociative-identity-disorder-therapist-newbury-park" },
      { title: "Trauma", href: "https://www.conejovalleycounseling.com/trauma-counseling-newbury-park" },
      { title: "Special Needs Parenting", href: "https://www.conejovalleycounseling.com/counseling-special-needs-parents-newbury-park" },
      { title: "Couples", href: "https://www.conejovalleycounseling.com/couples-therapy" },
      { title: "Children & Teens", href: "https://www.conejovalleycounseling.com/children-and-teens" },
      { title: "Anxiety & Depression", href: "https://www.conejovalleycounseling.com/anxiety-depression" },
      { title: "Adoption", href: "https://www.conejovalleycounseling.com/adoption-therapy-ventura-county-ca" },
    ],
  },
  {
    title: "Methods",
    href: "https://www.conejovalleycounseling.com/methods",
    dropdown: [
      { title: "EMDR", href: "https://www.conejovalleycounseling.com/emdr-therapy-newbury-park" },
      { title: "Brainspotting", href: "https://www.conejovalleycounseling.com/brainspotting" },
      { title: "Somatic Therapy", href: "https://www.conejovalleycounseling.com/somatic-therapy" },
      { title: "Parts Work Therapy", href: "https://www.conejovalleycounseling.com/parts-work-therapy" },
    ],
  },
  {
    title: "FAQs",
    href: "https://www.conejovalleycounseling.com/faqs",
  },
  {
    title: "Contact",
    href: "https://www.conejovalleycounseling.com/contact",
  },
];

export const whoWeHelpCards: ServiceCardItem[] = [
  {
    id: "adults",
    title: "Adults",
    description:
      "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
    image:
      "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/066f60e6-1354-4d47-a586-ab3f2f2ba612/Jennifer+A+-+Images+%288%29.jpg",
    alt: "Two people sitting on a log at the beach, facing a lake with mountains in the background.",
    link: "https://www.conejovalleycounseling.com/anxiety-depression",
  },
  {
    id: "couples",
    title: "Couples",
    description:
      "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
    image:
      "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d0157712-388c-4800-aada-c78db97ee966/Jennifer+A+-+Images+%289%29.jpg",
    alt: "A couple embracing on the beach, with both wearing casual summer clothing and smiling at each other.",
    link: "https://www.conejovalleycounseling.com/couples-therapy",
  },
  {
    id: "children-teens",
    title: "Children & Teens",
    description:
      "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
    image:
      "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d5d62bf4-34a7-4bf4-bf00-e1169863ace7/Jennifer+A+-+Images+%2810%29.jpg",
    alt: "A boy carrying a girl on a beach with waves in the background.",
    link: "https://www.conejovalleycounseling.com/children-and-teens",
  },
];

// Exact reference 12 topics
export const expertiseTopics: string[] = [
  "Dissociation",
  "Trauma",
  "Family conflict",
  "Special needs parenting",
  "Depression",
  "marriage",
  "anxiety",
  "relationships",
  "children",
  "teens",
  "intimacy & connection",
  "…and more.",
];

export const modalitiesData: ModalityItem[] = [
  {
    id: "trauma",
    title: "Trauma",
    description:
      "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
  },
  {
    id: "dissociation",
    title: "Dissociation",
    description:
      "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
  },
  {
    id: "emdr",
    title: "EMDR",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
  },
  {
    id: "special-needs",
    title: "Special Needs Parenting",
    description:
      "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
  },
];

export const therapistsList: TherapistItem[] = [
  { name: "Jennifer Anderson", title: "LMFT", href: "https://www.conejovalleycounseling.com/jennifer-anderson" },
  { name: "Heather Williams-Baumgart", title: "AMFT", href: "https://www.conejovalleycounseling.com/heather-williams-baumgart" },
  { name: "Autumn Bodily", title: "AMFT", href: "https://www.conejovalleycounseling.com/autumn-bodily" },
  { name: "Michaela Gorospe", title: "AMFT", href: "https://www.conejovalleycounseling.com/michaela-gorospe" },
  { name: "Candace Bletscher", title: "AMFT", href: "https://www.conejovalleycounseling.com/candace-bletscher" },
  { name: "Samantha Johnson", title: "AMFT", href: "https://www.conejovalleycounseling.com/samantha-johnson" },
  { name: "Andrea Watkins", title: "APCC", href: "https://www.conejovalleycounseling.com/andrea-watkins" },
  { name: "Rosa Gomez", title: "AMFT", href: "https://www.conejovalleycounseling.com/rosa-gomez" },
  { name: "Chad Flores", title: "AMFT", href: "https://www.conejovalleycounseling.com/chad-flores" },
];
