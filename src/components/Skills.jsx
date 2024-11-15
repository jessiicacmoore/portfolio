import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBars from "./ui/SkillBars";
import SectionSubTitle from "./ui/SectionSubTitle";
import AdditionalSkills from "./ui/AdditionalSkills";

const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle>Some things I'm skilled in.</SectionTitle>
      <SkillBars />
      <SectionSubTitle className="mb-0 mt-8">Additional skills</SectionSubTitle>
      <AdditionalSkills />
    </Section>
  );
};

export default Skills;
