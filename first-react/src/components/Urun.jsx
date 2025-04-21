const MessageBox = ({ messages }) => {
  return (
    <>
      <p>
        {messages?.length > 10
          ? "Sizin uzun mesajınız var"
          : "Sizin kısa mesajınız var"}
      </p>
      <p>
        <strong>Mesaj:</strong>
        {messages}
      </p>
    </>
  );
};
export default MessageBox;
