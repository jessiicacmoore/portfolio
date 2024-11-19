import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const About = () => {
  return (
    <Section id="about" className="relative z-10 -mt-12 bg-white pt-6">
      <SectionTitle>A little bit about me.</SectionTitle>
      <p>
        Hi, I’m Jess—a fullstack developer with a frontend focus, and I'm
        passionate about creating accessible, user-centered experiences. Since
        transitioning from marketing to web development in 2019, I’ve quickly
        progressed from a web developer role to leading a team, mentoring
        developers, and championing best practices. I specialize in React,
        JavaScript, and CSS/SASS, building seamless, inclusive interfaces.
      </p>
      <p>
        Outside of coding, I enjoy creative hobbies like photography, crafting
        with air-dry clay, and spending time with{" "}
        <a href="https://www.instagram.com/_sweetbabyhaze/" target="_blank">
          my rescue pup Hazel
        </a>
        . I’m driven to keep learning and building digital experiences that are
        both innovative and accessible.
      </p>
    </Section>
  );
};

export default About;
