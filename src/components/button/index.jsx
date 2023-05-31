import './index.scss';

const Button = ({
  type = 'button',
  onClick,
  disabled = false,
  variant,
  linkUrl = '#',
  linkText,
  linkClasses,
  children,
  fullWidth,
}) => {
  const buttonStyle = variant === 'primary' ? 'primary' : 'secondary';

  return !linkText ? (
    <button
      className={`btn btn--${buttonStyle}${fullWidth ? ' btn--fullWidth' : ''}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  ) : (
    <a className={linkClasses} href={linkUrl}>
      {linkText}
    </a>
  );
};

export default Button;
