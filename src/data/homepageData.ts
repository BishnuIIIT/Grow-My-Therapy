export interface NavItem {
  title: string;
  href: string;
}

export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  name: "Dr. Maya Reynolds, PsyD",
  title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds is a Licensed Clinical Psychologist in Santa Monica, CA, offering in-person and secure telehealth therapy for adults navigating anxiety, trauma, and professional burnout.",
  address: {
    street: "123th Street 45 W",
    cityStateZip: "Santa Monica, CA 90401",
  },
  practiceFormat: "In-person from the Santa Monica office and secure telehealth throughout California.",
};

export const navigationItems: NavItem[] = [
  { title: "About", href: "/#about" },
  { title: "Services", href: "/#services" },
  { title: "FAQ", href: "/#faq" },
  { title: "Contact", href: "/#contact" },
];

export const whoWeHelpCards: ServiceCardItem[] = [
  {
    id: "anxiety",
    title: "Anxiety & Stress Relief",
    description: "Therapy for adults who feel overwhelmed, stuck in overthinking, or emotionally on edge. We work together to manage constant worry, alleviate physical tension, and help you find a sustainable sense of calm and ease in your daily life.",
    image: "/images/service-anxiety.jpg",
    alt: "A person's hands holding a warm ceramic mug over a clean desk.",
    link: "/#services",
  },
  {
    id: "trauma",
    title: "Trauma & EMDR Therapy",
    description: "A carefully paced approach to healing from single-incident trauma and complex, long-standing patterns. Utilizing EMDR and body-oriented techniques, we focus on safety, stabilization, and helping you feel more regulated in your daily life.",
    image: "/images/service-trauma.jpg",
    alt: "Calm shoreline and water representing safety and restoration",
    link: "/#services",
  },
  {
    id: "burnout",
    title: "Overcoming Burnout & Perfectionism",
    description: "Tailored support for entrepreneurs, creatives, and professionals navigating high internal pressure. Therapy becomes a dedicated space to slow down, reconnect with yourself, and develop more sustainable, fulfilling ways of living and working.",
    image: "/images/service-burnout.jpg",
    alt: "A soft, warm sunset over rolling hills representing rest, perspective, and sustainable pacing.",
    link: "/#services",
  },
];

export const faqData: FAQItem[] = [
  {
    question: "Do you offer in-person or online therapy?",
    answer: "I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California. My office is designed to be a quiet, private space that feels calm and grounding.",
  },
  {
    question: "What types of clients do you typically work with?",
    answer: "I work exclusively with adults. Many of my clients are high-achieving, thoughtful, and self-aware individuals—including entrepreneurs, creatives, and professionals—who may feel \"functional\" on the outside but are quietly struggling with stress, overthinking, or burnout.",
  },
  {
    question: "What is your approach to treating trauma?",
    answer: "Trauma work is an important part of my practice. My approach is paced carefully, with a strong emphasis on safety, stabilization, and helping you feel more regulated in your daily life. I work with both single-incident trauma and more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress.",
  },
  {
    question: "What therapeutic methods do you use?",
    answer: "I integrate evidence-based methods to help you understand both the emotional and physiological sides of your experience. These include cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    question: "I feel \"functional\" on the outside but struggle internally. Can therapy help?",
    answer: "Absolutely. It is incredibly common for driven professionals to appear highly capable while internally dealing with constant worry, tension, or a sense of always bracing for something to go wrong. Therapy provides a structured, supportive space to slow down, reconnect, and develop more sustainable ways of living.",
  },
];
