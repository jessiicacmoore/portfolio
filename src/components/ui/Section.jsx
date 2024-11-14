import classNames from "classnames";

const Section = ({ children, className, ...props }) => {
  const sectionClasses = classNames(
    "py-20 bg-neutral-100 text-center",
    className,
  );
  return (
    <section className={sectionClasses} {...props}>
      <div className="container mx-auto max-w-screen-lg">{children}</div>
    </section>
  );
};

export default Section;
