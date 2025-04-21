const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  color: "white",
};

const gtBgColor = (variant) => {
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
      throw new Error(`Bu variant tipi desteklenmiyor: ${variant}`);
  }
};

const Alert2 = ({ variant, children }) => {
  return (
    <p
      style={{
        ...alertStyles,
        backgroundColor: gtBgColor(variant),
      }}
    >
      {children}
    </p>
  );
};

export default Alert2;
