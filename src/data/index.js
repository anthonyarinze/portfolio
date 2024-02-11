import resort1 from "../assets/resort/resort1.png";
import resort2 from "../assets/resort/resort2.png";
import resort3 from "../assets/resort/resort3.png";
import resort4 from "../assets/resort/resort4.png";
import gym1 from "../assets/gym/gym1.png";
import gym2 from "../assets/gym/gym2.png";
import gym3 from "../assets/gym/gym3.png";
import gym4 from "../assets/gym/gym4.png";

export const projectData = [
  {
    onClick: () => {
      window.open("https://saintsresort.netlify.app/", "_blank");
    },
    title: "Saint's Resort",
    about:
      "Resort booking and checking in/out site built with react, styled components and typescript.",
    techUsed: ["React JS", "TypeScript", "Styled Components", "Supabase"],
    slides: [resort1, resort2, resort3, resort4],
  },
  {
    onClick: () => {
      window.open("https://saintsgym.netlify.app/", "_blank");
    },
    title: "Saint's Gym",
    about: "Gym membership site built with react, tailwind and typescript.",
    techUsed: ["React JS", "TypeScript", "TailwindCSS"],
    slides: [gym1, gym2, gym3, gym4],
  },
];

export const recentWorkExperience = [
  {
    date: "JULY - AUGUST 2023",
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
      "Collaborated with team members to streamline data entry processes and improve efficiency. Collaborated with team members to ensure high-quality, user-friendly apps. Worked with design team to implement visual elements and ensure consistency with branding and UX guidelines",
    techUsed: ["Flutter"],
  },
];

export const articles = [
  "https://medium.com/@anthonyarinze/on-the-educational-system-school-systems-the-metric-of-progress-3f8138f480fe",
];
