function HelloBtn() {
  const message = () => {
    alert('Hello from HelloBtn!')
  };

  return (
    <>
    <button onClick={() => {message("123")}}>Click</button>
    </>
  );
}

export default HelloBtn;