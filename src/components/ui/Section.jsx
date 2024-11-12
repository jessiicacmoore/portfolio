import classNames from 'classnames';

const Section = ({ children, className, ...props }) => {
  const sectionClasses = classNames('py-20 bg-neutral-100', className);
  return <section className={sectionClasses}>{children}</section>;
};

export default Section;
