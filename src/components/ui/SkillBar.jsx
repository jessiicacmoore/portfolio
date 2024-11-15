import { formatYears } from "@/utils/skillsUtils.js";
const SkillBar = ({ Icon, widthPercentage, name, years, inView }) => {
  return (
    <li className="mb-4 text-left">
      <div>
        <span className="font-bold text-gray-800">
          {Icon && <Icon className="mb-1 mr-1 inline-block" />} {name}:{" "}
        </span>
        <span>{formatYears(years)}</span>
      </div>
      <div
        className="bar mt-1 h-8 bg-gray-800 transition duration-200"
        style={{
          width: inView ? `${widthPercentage}%` : "0%",
          transition: "width 1s ease-in-out",
        }}
        aria-hidden
      ></div>
    </li>
  );
};

export default SkillBar;
