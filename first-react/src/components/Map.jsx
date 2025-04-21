const Kitaplar = [
  { id: "id-1", name: "İnsancıklar" },
  { id: "id-2", name: "Kırmızı Başlıklı Kız" },
  { id: "id-3", name: "Uğultulu Tepeler" },
  { id: "id-4", name: "İrade Terbiyesi" },
];
const List = ({ kitaps }) => {
  return (
    <ul>
      {kitaps.map((kitap, index) => {
        return <li key={index}>{kitap.name}</li>;
      })}
    </ul>
  );
};

const Library = () => {
  return (
    <>
      <h2>Kitap listeleri</h2>
      <List kitaps={Kitaplar} />
    </>
  );
};

export default Library;
