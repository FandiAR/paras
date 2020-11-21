import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary, backgroundColor, size, label, ...props
}) => {
  const mode = primary
    ? 'paras-button--primary'
    : 'paras-button--secondary';
  const { isLoading } = props;
  return (
    <button
      type="button"
      className={[
        isLoading ? 'paras-button--loading' : 'paras-button',
        isLoading ? `paras-button--loading--${size}` : `paras-button--${size}`,
        isLoading ? '' : mode,
      ].join(' ')}
      disabled={isLoading}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
export default Button;

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,

  /**
   * Style for button when loading something
   */
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  isLoading: false,
};
