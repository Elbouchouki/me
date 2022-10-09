import { SocialIconProps } from "react-social-icons";
export const SITE_TITLE: string = "Elbouchouki Ahmed";

export const SITE_DESCRIPTION: string = "";

export const SOCIAL_MEDIA: SocialIconProps[] = [
  {
    url: "https://github.com/Elbouchouki/",
    bgColor: "transparent",
    fgColor: "gray",
  },
  {
    url: "https://ma.linkedin.com/in/elbouchouki-ahmed/",
    bgColor: "transparent",
    fgColor: "gray",
  },
  {
    url: "https://www.facebook.com/GoAwayDudeeeeee/",
    bgColor: "transparent",
    fgColor: "gray",
  },
];

export const TYPE_WRITING: string[] = [
  "Hi, My name is Elbouchouki Ahmed",
  "I'am a software egineering student",
  "I ❤️ to turn coffee into code",
  // "I Spend Most of Time Coding Outstanding Projects Or Learning New Technologies",
];
export const MY_BACKGROUND: string =
  "I am Ahmed, still studying software engineering and distributed computing systems at ENSET Mohammedia. I would say that this portfolio presents me better than my words. I spend most of my time coding great projects or learning new technologies";

export interface IExperience {
  logo: string;
  title: string;
  company: string;
  technologies: string[];
  start: string;
  end: string;
  summary: string[];
}
export const EXPERIENCES: IExperience[] = [
  {
    logo: "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png",
    title: "FullStack Developer",
    company: "MOAJ",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
    ],
    start: "DEC 2020",
    end: "OCT 2022",
    summary: ["point 1", "point 2", "point 3"],
  },
  {
    logo: "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png",
    title: "FullStack Developer",
    company: "MOAJ",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
    ],
    start: "DEC 2020",
    end: "OCT 2022",
    summary: ["point 1", "point 2", "point 3"],
  },
  {
    logo: "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png",
    title: "FullStack Developer",
    company: "MOAJ",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
    ],
    start: "DEC 2020",
    end: "OCT 2022",
    summary: ["point 1", "point 2", "point 3"],
  },
];
