const PropsButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

const Uygulama = () => {
  return (
    <>
      <PropsButton message="Playing music"> Play some music </PropsButton>
      <PropsButton message="Uploading your data"> Uploading data</PropsButton>
    </>
  );
};

export default Uygulama;
