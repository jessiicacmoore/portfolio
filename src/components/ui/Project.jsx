import { formatItemsWithConjunction } from "@/utils/globalUtils";
import SectionSubTitle from "./SectionSubTitle";
import Button from "./Button";

const Project = ({ project }) => {
  const { title, description, image, stack, repo, live } = project;

  return (
    <li className="mb-16 mt-10 flex flex-col items-center lg:text-left lg:odd:flex-row lg:even:flex-row-reverse">
      <img src={image} alt={`Project ${title}`} />
      <div>
        <SectionSubTitle className="mt-4">{title}</SectionSubTitle>
        <p>{description}</p>
        <p className="text-gray-800">
          <span className="font-bold">Stack:</span>{" "}
          {formatItemsWithConjunction(stack)}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
          {live && (
            <Button href={live} target="_blank">
              Live Demo
            </Button>
          )}
          {repo && (
            <Button href={repo} target="_blank" btnStyle="ghost">
              GitHub Repo
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Project;
