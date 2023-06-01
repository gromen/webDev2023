import './index.scss';

const Button = ({ type, onClick, disabled = false, variant, linkUrl, linkText, children }) => {
  const ButtonTag = linkText ? 'a' : 'button';

  return (
    <ButtonTag
      href={linkUrl}
      className={variant ? `btn btn--${variant}` : ''}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {linkText}
      {children}
    </ButtonTag>
  );
};

export default Button;
