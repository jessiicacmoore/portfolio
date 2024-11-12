import classNames from 'classnames';

const SectionTitle = ({ children, className, ...props }) => {
  const h2Classes = classNames('text-3xl pb-3', className);

  return (
    <h2 className={h2Classes.trim()} {...props}>
      {children}
    </h2>
  );
};

export default SectionTitle;
