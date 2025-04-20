// KOşullu renderleme

// const MessageBox = ({ messages }) => {
//   messages = "ben bir dikdörtgenim";
//   return (
//     <p>
//       {messages?.length > 0
//         ? `You have${messages?.length}messages.`
//         : "NO messages yet."}
//     </p>
//   );
// };
// export default MessageBox;

// const Deneme = () => {
//   return (
//     <div>
//       {[1, 2, 3].map((item, index) => {
//         return <p key={index}>{item}</p>;
//       })}
//     </div>
//   );
// };

// export default Deneme;

// const favourite = [
//   {
//     id: "id-1",
//     name: "Negin",
//   },
//   {
//     id: "id-2",
//     name: "Shirin",
//   },
//   {
//     id: "id-3",
//     name: "Zohre",
//   },
// ];

// const List = ({ girls }) => {
//   return (
//     <ul>
//       {girls.map((girl, index) => {
//         return <li key={index}>{girl.name}</li>;
//       })}
//     </ul>
//   );
// };

// const Appp = () => {
//   return (
//     <>
//       <h2>Girls of the Week</h2>
//       <List girls={favourite} />
//     </>
//   );
// };

// export default Appp;

const meyveler = [
  { id: "id-1", name: "elma" },
  { id: "id-2", name: "armut" },
  { id: "id-3", name: "ayva" },
];
const List = ({ fruits }) => {
  return (
    <ul>
      {fruits.map((fruit, index) => {
        return <li key={index}>{fruit.name}</li>;
      })}
    </ul>
  );
};

const Appp = () => {
  return (
    <>
      <h2>Fruits of the Week</h2>
      <List fruits={meyveler} />
    </>
  );
};

export default Appp;
