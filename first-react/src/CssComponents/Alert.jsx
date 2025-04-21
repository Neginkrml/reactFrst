const alertStyless = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "white",
};

const Alert = ({ children }) => {
  return <p style={alertStyless}>{children}</p>;
};

export default Alert;
