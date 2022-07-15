import styles from "./Button.module.css";

const Button = ({ children, view }) => {
  return (
    <button
      className={view === "orange" ? `${styles.orange}` : `${styles.white}`}
    >
      {children}
    </button>
  );
};

export default Button;
