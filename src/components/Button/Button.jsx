import styles from "./Button.module.css";
import PropTypes from "prop-types";
const Button = (props) => {
  const { isOutline, icon, text } = props;
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};
Button.propTypes = {
  isOutline: PropTypes.bool,
  icon: PropTypes.element,
  text: PropTypes.string,
};

export default Button;
