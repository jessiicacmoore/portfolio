import classNames from "classnames";

const Card = ({ children, className, inSlider, ...props }) => {
  const cardClasses = classNames(
    "rounded-xl bg-white px-12 py-9 shadow-lg",
    { "h-full": inSlider },
    className,
  );

  var component = (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
  if (inSlider) {
    return <div className="h-full p-8">{component}</div>;
  }
  return component;
};

export default Card;
