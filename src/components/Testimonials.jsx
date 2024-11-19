import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { SiLinkedin } from "react-icons/si";
import Section from "@/components/ui/Section";
import Testimonial from "@/components/ui/Testimonial";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import TESTIMONIALS_LIST from "@/constants/testimonials";

const SPLIDE_OPTIONS = {
  type: "loop",
};

const Testimonials = () => {
  return (
    <Section id="testimonials" className="text-center">
      <SectionTitle>What my colleagues say about me.</SectionTitle>
      <div className="testimonials -mx-8 mb-8">
        <Splide options={SPLIDE_OPTIONS}>
          {TESTIMONIALS_LIST.map((testimonial, index) => (
            <SplideSlide key={index}>
              <Testimonial testimonial={testimonial} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <Button href="https://linkedin.com/in/jesscodes" target="_blank">
        <SiLinkedin className="mb-1 mr-2 inline-block" />
        Read more on LinkedIn
      </Button>
    </Section>
  );
};

export default Testimonials;
