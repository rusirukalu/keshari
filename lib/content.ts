import { siteConfig } from "./config";

export const siteContent = {
  navigation: {
    brand: "Keshari Hansana",
    brandSub: "BEng (Hons) • Mathematics Teacher",
    links: [
      { href: "#about", label: "About" },
      { href: "#classes", label: "Classes" },
      { href: "#gallery", label: "Gallery" },
      { href: "#contact", label: "Contact" }
    ],
    ctaLabel: "Enquire Now"
  },
  hero: {
    badge: "English Medium Mathematics",
    headline: "Making Mathematics Easier to Understand.",
    subHeadline: "Helping Grade 6–11 & O/L students replace formulas memorization with logical clarity, building confidence that reflects directly in their results.",
    ctaPrimary: "Join a Class",
    ctaSecondary: "Contact Me",
    imageAlt: "Keshari Hansana portrait placeholder",
    trustItems: [
      "✓ English Medium",
      "✓ Engineering Graduate",
      "✓ Personalized Learning",
      "✓ Exam Focused"
    ]
  },
  whyLearnWithMe: {
    sectionTitle: "Why Learn With Me",
    sectionHeading: "Learning That Builds Confidence.",
    sectionDesc: "A structured, friendly environment where maths is taught as a logical language, not a set of mechanical formulas.",
    philosophyQuote: "My goal isn't just to prepare students for exams. It's to help them truly understand Mathematics.",
    // The 4-Step Method
    methodology: {
      title: "Our 4-Step Method",
      steps: [
        { step: "01", title: "Understand", desc: "Break down equations visually to comprehend 'why' they work before solving them." },
        { step: "02", title: "Practice", desc: "Solidify skills using structured worksheets matching local syllabus guidelines." },
        { step: "03", title: "Confidence", desc: "Weekly review sessions designed to replace exam anxiety with self-assurance." },
        { step: "04", title: "Results", desc: "Execute under simulated exam conditions to achieve distinction grades." }
      ]
    },
    // Visual Benefits Cards
    benefits: [
      { title: "Individual Focus", desc: "Strictly limited classroom sizes to monitor and trace each student's logical flow." },
      { title: "Concept-First Learning", desc: "Formulas are derived step-by-step in class, facilitating deep, long-term memory connection." },
      { title: "Monthly Progress Updates", desc: "Direct reporting loops to parents regarding attendance, scores, and focus areas." },
      { title: "Cyclic Revision", desc: "Routine recall of previous terms' work to make sure no math debt gets carried forward." }
    ]
  },
  about: {
    sectionTitle: "About Me",
    sectionHeading: "Engineering Logic. Tutoring Passion.",
    bioParagraphs: [
      "I believe mathematics is a language of patterns and problem-solving, not mechanical drilling. As a Software Engineering graduate from London Metropolitan University, I was trained to decompose complex algorithms into basic, logical modules. I bring this same precision directly to my math tuition.",
      "In my class, students learn to visualize numbers. By building a supportive workspace where errors are analyzed as analytical guides rather than failures, students discover their natural capability to solve algebraic and geometric equations."
    ],
    degreeCard: {
      title: "BEng (Hons) in Software Engineering",
      institution: "London Metropolitan University (Sri Lankan Affiliate)",
      duration: "2019 - 2022",
      desc: "Focus on computational math and algorithmic logic, bridging technical precision with pedagogical teaching formats."
    }
  },
  classes: {
    sectionTitle: "Class Programs",
    sectionHeading: "Mathematics Without Fear.",
    sectionDesc: "Comprehensive English-medium classes for the Sri Lankan syllabus. Designed to make numbers intuitive for every grade level.",
    outcomes: {
      "g6-8": [
        "Master variables & algebraic grids",
        "Introduction to ratio & coordinates",
        "Clear geometric visualization"
      ],
      "g9-10": [
        "Quadratic equations factoring",
        "Trigonometry and geometric proofs",
        "Handling graphs & inequalities"
      ],
      "g11": [
        "Complete national syllabus revisions",
        "Speed tactics & time management",
        "Paper structure optimization"
      ]
    }
  },
  testimonials: {
    sectionTitle: "Student Success",
    sectionHeading: "Real Results. Clear Progress.",
    list: [
      {
        quote: "Miss Keshari helped me understand algebra visually. I used to dread maths, but her step-by-step diagrams made it click. My term scores rose from 60% to 88%.",
        author: "Dinuka T.",
        role: "O/L Mathematics Student"
      },
      {
        quote: "Her background in software engineering brings a logical structure that traditional tuition lacks. The focus on why formulas work is highly effective.",
        author: "Mrs. Sanduni P.",
        role: "Parent of Grade 9 Student"
      },
      {
        quote: "Miss Keshari is extremely patient. The weekly past papers sessions and mock exams made the actual O/L exam feel like a normal classroom worksheet.",
        author: "Harith P.",
        role: "Grade 11 Student (A Grade)"
      }
    ]
  },
  gallery: {
    sectionTitle: "Learning Environment",
    sectionHeading: "Inside the Classroom.",
    sectionDesc: "Visual highlights of whiteboard algebra mapping, individual sheets reviews, and active lessons.",
    images: [
      { id: "img1", label: "Teacher Portrait", desc: "Keshari Hansana preparing visual lesson plans.", placeholder: "teacher-portrait.png" },
      { id: "img2", label: "Interactive Classroom", desc: "Focused worksheets drills and coordinate geometry.", placeholder: "hero-classroom.jpg" },
      { id: "img3", label: "Individual Review", desc: "Checking student logical proofs step-by-step.", placeholder: "student-activity.jpg" },
      { id: "img4", label: "Geometry session", desc: "Visualizing trigonometry graphs and theorems.", placeholder: "teaching-session.jpg" }
    ]
  },
  faq: {
    sectionTitle: "FAQ",
    sectionHeading: "Common Questions",
    items: [
      {
        question: "Who can join these classes?",
        answer: "Classes are open to students in Grade 6–11 following the Sri Lankan syllabus in English Medium. Both students seeking foundation help and those aiming for distinction ranks are welcome."
      },
      {
        question: "Are classes physical or online?",
        answer: "We offer interactive physical classes in Colombo as well as high-definition online classes utilizing interactive web drawing boards and worksheets."
      },
      {
        question: "How do we register?",
        answer: "Simply fill out the enquiry form below or message us via WhatsApp. We will connect with you to recommend the correct class grouping for the student."
      }
    ]
  },
  contact: {
    sectionTitle: "Enquire Now",
    sectionHeading: "Get In Touch Today.",
    sectionDesc: "Submit your details below to schedule an initial diagnostic evaluation or register for class groups. We will get back to you within 24 hours.",
    form: {
      nameLabel: "Student Name",
      namePlaceholder: "e.g., Harith Perera",
      parentLabel: "Parent / Guardian Name",
      parentPlaceholder: "e.g., Mrs. Perera",
      emailLabel: "Email Address",
      emailPlaceholder: "e.g., parent@email.com",
      phoneLabel: "Phone Number",
      phonePlaceholder: "e.g., +94 77 123 4567",
      gradeLabel: "Select Class Grade",
      gradePlaceholder: "Select Grade",
      messageLabel: "Inquiry Details",
      messagePlaceholder: "Briefly explain the student's current maths background or any specific challenge they face...",
      submitButton: "Send Enquiry",
      submittingButton: "Sending..."
    }
  },
  emotionalCta: {
    heading: "Logic is a Cultivated Habit. Not a Secret Gift.",
    subheading: "Help your child transition from numerical fear to absolute conceptual confidence. Class group slots are limited to maintain direct, personal guidance.",
    primaryCta: "Enquire Now",
    secondaryCta: "WhatsApp Message"
  },
  footer: {
    colophon: "Designed with precision. Building logical thinkers, one student at a time.",
    navigation: {
      title: "Menu",
      links: [
        { href: "#about", label: "About" },
        { href: "#classes", label: "Classes" },
        { href: "#gallery", label: "Gallery" },
        { href: "#contact", label: "Contact" }
      ]
    },
    contact: {
      title: "Direct Channels",
      items: [
        "Colombo, Sri Lanka",
        "+94 77 123 4567",
        "info@kesharihansana.com"
      ]
    },
    copyright: "© 2026 Keshari Hansana. All rights reserved. English Medium Mathematics Tuition."
  }
};
