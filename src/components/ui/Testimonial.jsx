import { FaQuoteLeft } from "react-icons/fa";
import Card from "@/components/ui/Card";

const Testimonial = ({ testimonial }) => {
  return (
    <Card inSlider className="pt-16">
      <figure className="flex h-full flex-col justify-between">
        <blockquote className="relative flex flex-grow flex-col justify-center md:text-xl">
          <p className="relative">
            <FaQuoteLeft
              className="absolute -left-1 -top-1 z-0 text-7xl text-blue-50"
              aria-hidden
            />
            <span className="relative z-0">{testimonial.quote}</span>
          </p>
        </blockquote>
        <figcaption className="mx-4 mt-8 border-t border-t-gray-500 pt-8 sm:mx-12 md:mx-20">
          <p className="text-2xl font-bold text-gray-800">{testimonial.name}</p>
          <p>{testimonial.relation}</p>
        </figcaption>
      </figure>
    </Card>
  );
};

export default Testimonial;
