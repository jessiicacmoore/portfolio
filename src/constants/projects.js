import buildMeImg from "@/assets/projects-buildme.png";
import crowdfunderImg from "@/assets/projects-crowdfunder.png";
import wineryAppImg from "@/assets/projects-wine.png";
import toDoAppImg from "@/assets/projects-latda.png";

export const PROJECTS_LIST = [
  {
    title: "buildMe",
    image: buildMeImg,
    stack: [
      "React",
      "Redux",
      "JavaScript",
      "Python",
      "Django REST Framework API",
      "PostgreSQL",
    ],
    description:
      "A web application where junior developers and designers can collaborate with one another in order to build an impressive portfolio. Users can view, post, find and apply to projects in order to connect with other users. This full stack application was built with a React front end which makes API requests to the Django back end.",
    repo: "https://github.com/jessiicacmoore/django_crowdfunder",
    live: null,
  },
  {
    title: "CrowdFunder",
    image: crowdfunderImg,
    stack: ["Python", "Django REST Framework API", "SQLite", "CSS"],
    description:
      "A backend clone of Kick starter using Django. As a team, we were tasked with managing and prioritizing user stories to complete a viable product within a short period of time. This project required agile development and team coding with Git & GitHub.",
    repo: "https://github.com/jessiicacmoore/django_crowdfunder",
    live: null,
  },
  {
    title: "Niagara Wineries",
    image: wineryAppImg,
    stack: ["JavaScript", "React", "SASS", "Yelp Fusion API"],
    description:
      "Niagara Wineries is a front-end React app that makes calls to Yelp's Fusion api in order to display the local wineries in Niagara. Users can filter results to specific regions of Niagara such as Niagara-On-The-Lake or Beamsville. After completing the winery details aspect, I plan to incorperate a backend so users can save wineries they would like to visit, or wineries they enjoyed.",
    repo: "https://github.com/jessiicacmoore/react-niagara-wineries",
    live: null,
  },
  {
    title: "Literally Another ToDo App - LATDA",
    image: toDoAppImg,
    stack: [
      "JavaScript",
      "React",
      "Axios",
      "SASS",
      "Python",
      "Django REST Framework API",
      "JWT AUthentication",
    ],
    description:
      "A simple, minimalist todo app - latda was built with the sole intention of practicing building a full stack web application that required user authentication. A particular challenge I faced was how to handle refreshing the short-lived access token without interrupting the users experience, or ability to post or update todos if they had been inactive for a few minutes.",
    repo: "https://github.com/jessiicacmoore/fullstack-todo-app",
    live: null,
  },
];
