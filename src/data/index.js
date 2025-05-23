import resort1 from "../assets/resort/resort1.png";
import resort2 from "../assets/resort/resort2.png";
import resort3 from "../assets/resort/resort3.png";
import gym1 from "../assets/gym/gym1.png";
import gym2 from "../assets/gym/gym2.png";
import gym3 from "../assets/gym/gym3.png";
import manga1 from "../assets/mangapulse/manga1.png";
import manga2 from "../assets/mangapulse/manga2.png";
import manga3 from "../assets/mangapulse/manga3.png";
import grimoire1 from "../assets/grimoire/grimoire1.png";
import grimoire2 from "../assets/grimoire/grimoire2.png";
import grimoire3 from "../assets/grimoire/grimoire3.png";

export const projectData = [
  {
    onClick: () => {
      window.open("https://mangapulse.netlify.app/", "_blank");
    },
    title: "Manga Pulse",
    about:
      "A manga & anime tracking site to track your read, reading or want to read manga, get recommendations and details about your favorites.",
    techUsed: [
      "React JS",
      "Redux",
      "React Hook Form",
      "Styled Components",
      "Supabase",
      "React Query",
      "React Router",
    ],
    slides: [manga1, manga2, manga3],
  },
  {
    onClick: () => {
      window.open("https://saintsresort.netlify.app/", "_blank");
    },
    title: "Saint's Resort",
    about:
      "Resort booking and checking in/out site built with react, styled components and typescript.",
    techUsed: [
      "React JS",
      "TypeScript",
      "Styled Components",
      "React Router",
      "React Query",
      "React Hook Form",
      "Supabase",
    ],
    slides: [resort1, resort2, resort3],
  },
  {
    onClick: () => {
      window.open("https://saintsgym.netlify.app/", "_blank");
    },
    title: "Saint's Gym",
    about: "Gym membership site built with react, tailwind and typescript.",
    techUsed: ["React JS", "TypeScript", "TailwindCSS"],
    slides: [gym1, gym2, gym3],
  },
  {
    onClick: () => window.open("https://grimoirebooks.vercel.app/", "_blank"),
    title: "Grimoire",
    about:
      "Book exploration and library management site built with NextJS, tailwind and typescript.",
    techUsed: ["Next JS", "TypeScript", "TailwindCSS", "React Query", "Redux"],
    slides: [grimoire1, grimoire2, grimoire3],
  },
];

export const recentWorkExperience = [
  {
    date: "JULY - PRESENT 2024",
    title: "Technical Support Advocate ● TekExperts",
    about:
      "Provided global support for users facing issues with Microsoft Office, Microsoft 365, and Windows products. Responsibilities included diagnosing and resolving software, configuration, and account-related problems, while offering efficient troubleshooting through remote desktop tools. Consistently ensured user satisfaction by delivering timely solutions and maintaining detailed logs of each case using Microsoft's internal ticketing system.",
    techUsed: ["M365", "MS Office", "Windows"],
  },
  {
    date: "JUNE - AUGUST 2023",
    title: "Flutter Developer ● The Shawn Exchange",
    about:
      "Developed and integrated UI services with the backend API service to fetch data and perform transactions, with code optimization, abstraction and reusability as priorities.",
    techUsed: ["Flutter", "Postman", "Riverpod"],
  },
  {
    date: "DECEMBER - NOVEMBER 2021-2022",
    title: "Software Engineer ● Calcon Systems Global Solutions",
    about:
      "Collaborated with the development team to design and develop high-quality mobile applications using the Flutter framework. Developed, tested, and maintained efficient, reusable, and reliable code.",
    techUsed: ["Flutter", "Provider", "Riverpod", "Dio"],
  },
  {
    date: "SEPTEMBER - DECEMBER 2020",
    title: "Software Engineer Intern ● Secure Records Management Solutions",
    about:
      "Collaborated with team members to streamline data entry processes and improve efficiency. Collaborated with team members to ensure high-quality, user-friendly apps. Worked with design team to implement visual elements and ensure consistency with branding and UX guidelines.",
    techUsed: ["Flutter"],
  },
];

export const articles = [
  "https://medium.com/@anthonyarinze/on-the-educational-system-school-systems-the-metric-of-progress-3f8138f480fe",
];
