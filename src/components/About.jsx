import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const About = () => {
  return (
    <Section id="about" className="relative z-10 -mt-12 bg-white pt-6">
      <SectionTitle>A little bit about me.</SectionTitle>
      <p>
        My name is Jessica, but I'd love it if you called me Jess. I'm a
        fullstack developer with a frontend focus and passion for crafting
        accessible, user-centered experiences. Since transitioning from
        marketing to web development in 2019, I’ve grown quickly—from landing a
        web developer role to leading a team where I mentored developers and
        championed best practices for efficient, high-quality, accessible
        solutions. With a strong background in React, JavaScript, CSS/SASS, and
        user-focused design, I’m committed to building interfaces that are
        inclusive and seamless.
      </p>
      <p>
        As I continue to refine my frontend expertise, I focus on expanding my
        skill set with modern tools and frameworks that enhance the user
        experience and streamline development. Adaptable and collaborative, I
        thrive in roles that allow me to blend creativity with technical
        precision, always with an eye on innovation and accessibility.
      </p>
      <p>
        When I’m not coding, you’ll find me exploring creative hobbies like
        photography and working with air-dry clay, hanging out with{" "}
        <a href="https://www.instagram.com/_sweetbabyhaze/" target="blank">
          my rescue pup Hazel
        </a>
        , or planning new adventures. I’m excited about the future of web
        development and look forward to creating digital experiences that are as
        inclusive as they are innovative.
      </p>
    </Section>
  );
};

export default About;
