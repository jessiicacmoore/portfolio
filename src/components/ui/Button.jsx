import classNames from "classnames";

const Button = ({
  children,
  className,
  href,
  btnStyle = "default",
  ...props
}) => {
  const buttonClasses = classNames(
    "btn px-5 py-3 rounded-3xl font-bold border-2 border-gray-800 hover:border-indigo-900 inlne-block transition-colors",
    { "bg-gray-800 hover:bg-indigo-900 text-white": btnStyle === "default" },
    { "text-gray-800 hover:text-indigo-900": btnStyle === "ghost" },
    className,
  );
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
