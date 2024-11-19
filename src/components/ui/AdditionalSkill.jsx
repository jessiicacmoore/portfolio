import { formatItemsWithConjunction } from "@/utils/globalUtils.js";

const AdditionalSkill = ({ skill }) => {
  return (
    <li className="mt-2">
      <span className="font-bold text-gray-800">{skill.group}:</span>{" "}
      {formatItemsWithConjunction(skill.items)}
    </li>
  );
};

export default AdditionalSkill;
