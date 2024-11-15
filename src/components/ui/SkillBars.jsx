import { useInView } from "react-intersection-observer";
import { CORE_SKILLS_LIST } from "@/constants/skills";
import {
  calculateYearsOfExperience,
  getMaxYears,
} from "@/utils/skillsUtils.js";
import SkillBar from "./SkillBar";

const SkillBars = () => {
  const currentYear = new Date().getFullYear();
  const skillData = calculateYearsOfExperience(CORE_SKILLS_LIST, currentYear);
  const maxYears = getMaxYears(skillData);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <ul ref={ref} className="md:grid md:grid-cols-2 md:gap-x-8">
      {skillData.map((skill) => {
        const widthPercentage = (skill.years / maxYears) * 100;

        return (
          <SkillBar
            key={skill.name}
            Icon={skill.icon}
            widthPercentage={widthPercentage}
            name={skill.name}
            years={skill.years}
            inView={inView}
          />
        );
      })}
    </ul>
  );
};

export default SkillBars;
