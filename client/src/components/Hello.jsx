const Hello = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1>hello</h1>
        <a href="http://127.0.0.1:4000/hello">nodejs click me</a>
        <a href="http://127.0.0.1:8080/hello">springboot click me</a>
      </div>
    </>
  );
};

export default Hello;
