import { formatItemsWithConjunction } from "@/utils/globalUtils.js";

const AdditionalSkill = ({ skill }) => {
  return (
    <li className="mt-2">
      <span className="block font-bold text-gray-800 sm:inline">
        {skill.group}:{" "}
      </span>
      {formatItemsWithConjunction(skill.items)}
    </li>
  );
};

export default AdditionalSkill;
