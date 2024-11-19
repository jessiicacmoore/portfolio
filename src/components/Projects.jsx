import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { PROJECTS_LIST } from "@/constants/projects";
import Project from "./ui/Project";

const Projects = () => {
  return (
    <Section id="projects" className="bg-white">
      <SectionTitle>What I've been working on.</SectionTitle>
      <ul>
        {PROJECTS_LIST.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
