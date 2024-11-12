import classNames from "classnames";

const SectionTitle = ({ children, className, ...props }) => {
  const sectionClasses = classNames('py-7', className)
  return ( 
    <section className={sectionClasses}>
      {children}
    </section>
   );
}
 
export default SectionTitle;