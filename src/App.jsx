import "./App.css";

function App() {
  console.log("The server is running on ", import.meta.env.MODE);

  console.log(import.meta.env);

  if (import.meta.env.DEV) console.log("the server is in DEV ENV");

  return (
    <>
      <p>Test</p>
    </>
  );
}

export default App;
