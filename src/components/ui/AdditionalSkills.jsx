import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "@/components/ui/Card";
import { ADDITIONAL_SKILLS } from "@/constants/skills";
import AdditionalSkill from "./AdditionalSkill";

const AdditionalSkills = () => {
  return (
    <div className="-mx-8">
      <Splide
        options={{
          type: "loop",
        }}
      >
        {ADDITIONAL_SKILLS.map((category) => (
          <SplideSlide key={category.name}>
            <Card inSlider className="flex flex-col justify-center">
              <h4 className="text-2xl font-black text-gray-800">
                {category.name}
              </h4>
              <ul>
                {category.skills.map((skill) => (
                  <AdditionalSkill key={skill.group} skill={skill} />
                ))}
              </ul>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default AdditionalSkills;
