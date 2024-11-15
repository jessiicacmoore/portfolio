import classNames from "classnames";

const SectionSubTitle = ({ children, className, ...props }) => {
  const h3Classes = classNames(
    "text-3xl mb-6 font-black text-gray-800",
    className,
  );

  return (
    <h3 className={h3Classes.trim()} {...props}>
      {children}
    </h3>
  );
};

export default SectionSubTitle;
