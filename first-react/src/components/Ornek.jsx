// KOşullu renderleme

const MessageBox = ({ messages }) => {
  return (
    messages = "Selam ben bir kızım"
    <>
          <p>
        {messages.length > 0
          ? `You have${messages.length}messages.`
          : "NO messages yet."}
      </p>
</>
  );
};
export default MessageBox;
