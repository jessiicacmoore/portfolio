import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPython,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";

export const CORE_SKILLS_LIST = [
  { name: "JavaScript", since: 2019, icon: SiJavascript },
  { name: "React", since: 2019, icon: SiReact },
  { name: "HTML", since: 2019, icon: SiHtml5 },
  { name: "CSS/SASS", since: 2019, icon: SiCss3 },
  { name: "Python", since: 2019, icon: SiPython },
  { name: "NextJS", since: 2021, icon: SiNextdotjs },
  { name: "Node.js", since: 2021, icon: SiNodedotjs },
  { name: "TypeScript", since: 2022, icon: SiTypescript },
];

export const ADDITIONAL_SKILLS = [
  {
    name: "Technical",
    skills: [
      {
        group: "Frontend Libraries",
        items: ["Tailwind CSS", "React Hooks", "React Context API", "Redux"],
      },
      { group: "Backend Libraries", items: ["Express", "Django"] },
      { group: "Version Control", items: ["Git", "GitHub"] },
      { group: "APIs", items: ["RESTful APIs", "GraphQL"] },
      { group: "Project Management Tools", items: ["Jira", "Asana"] },
      { group: "Web Performance", items: ["Chrome DevTools", "Lighthouse"] },
      { group: "Accessibility", items: ["WCAG Compliance", "Screen Readers"] },
      { group: "Testing", items: ["Jest"] },
    ],
  },
  {
    name: "Professional",
    skills: [
      {
        group: "Leadership",
        items: [
          "Leadership",
          "Mentoring",
          "Coaching",
          "Cross-Functional Collaboration",
        ],
      },
      {
        group: "Organization",
        items: ["Time Management", "Task Prioritization", "Project Planning"],
      },
      {
        group: "Project Facilitation",
        items: ["Goal Setting", "Project Planning"],
      },
      {
        group: "Innovation",
        items: ["Creative Problem-Solving", "Initiative"],
      },
      {
        group: "Delegation",
        items: ["Managing Workload", "Encouraging Ownership"],
      },
      {
        group: "Adaptability",
        items: ["Empathy", "Adaptability", "Patience"],
      },
      {
        group: "Conflict Resolution",
        items: ["Mediation", "Diplomatic Communication"],
      },
    ],
  },
  {
    name: "Bonus",
    skills: [
      {
        group: "Technical Support",
        items: ["“Have you tried turning it off and on again?” specialist"],
      },
      {
        group: "Infinite Tab Management",
        items: ["Can work efficiently with 50+ browser tabs open"],
      },
      {
        group: "Snack Procurement",
        items: ["Elite snack-for-every-meeting planner"],
      },
      {
        group: "Slack Etiquette",
        items: ["Skilled in GIF responses and 🎉 reactions"],
      },
      {
        group: "LinkedIn Lurking",
        items: ["Polished the art of “light stalking” for network-building"],
      },
      {
        group: "Zoom Stylist",
        items: [
          "Elevating virtual meetings with impeccable background choices.",
        ],
      },
      {
        group: "Playlist Connoisseur",
        items: ["Crafting the perfect soundtrack for any focus session."],
      },
    ],
  },
];