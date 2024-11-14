import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial slide h-full p-8">
      <figure className="flex h-full flex-col justify-between rounded-xl bg-white px-7 pb-7 pt-16 shadow-lg">
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
    </div>
  );
};

export default Testimonial;
