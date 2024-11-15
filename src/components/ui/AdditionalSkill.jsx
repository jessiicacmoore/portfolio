import { formatAdditionalSkills } from "@/utils/skillsUtils.js";

const AdditionalSkill = ({ skill }) => {
  return (
    <li className="mt-2">
      <span className="font-bold text-gray-800">{skill.group}:</span>{" "}
      {formatAdditionalSkills(skill.items)}
    </li>
  );
};

export default AdditionalSkill;
