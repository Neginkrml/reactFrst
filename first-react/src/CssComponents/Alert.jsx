import "../style.css/alert.css";
import clsx from "clsx";

const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  color: "white",
  fontSize: 20,
};

const getBgColor = (variant) => {
  switch (variant) {
    case "info":
      return "blue";
    case "success":
      return "green";
    case "error":
      return "red";
    case "warning":
      return "orange";
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

const Alert = ({ variant, children, error }) => {
  return (
    <p
      className={clsx("defaultCSS", {
        "bg-red": error === "red",
        "bg-blue": error === "blue",
      })}

      // className="alert"
      // style={{
      //   ...alertStyles,
      //   backgroundColor: getBgColor(variant),
      // }}
    >
      {children}
    </p>
  );
};

export default Alert;
