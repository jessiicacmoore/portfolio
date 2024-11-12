import classNames from 'classnames';

const Button = ({
  children,
  className,
  href,
  btnStyle = 'default',
  ...props
}) => {
  const buttonClasses = classNames(
    'px-5 py-3 rounded-3xl font-bold border-2 border-gray-800 inlne-block',
    { 'bg-gray-800 text-white': btnStyle === 'default' },
    { 'text-gray-800': btnStyle === 'ghost' },
    className
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
