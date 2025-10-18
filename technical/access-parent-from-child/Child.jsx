
const Child = (props) => {
  const handleChildFunction = (key, value) => {
    props.handleChildFunction("some argument");
    props.updateData(key, value);
  };

  return (
    <>
      <p>{props?.data?.test}</p>
      <p>{props?.data?.a}</p>
      <p>{props?.data?.b ? "I'm true" : "I'm false"}</p>
      <button
        onClick={() => {
          handleChildFunction("test", "Sam");
        }}
      >
        Call Test
      </button>
      <button
        onClick={() => {
          handleChildFunction("a", 100);
        }}
      >
        Call A
      </button>
      <button
        onClick={() => {
          handleChildFunction("b", true);
        }}
      >
        Call B
      </button>
    </>
  );
};

export default Child;