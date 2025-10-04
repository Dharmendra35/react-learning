import Chai from "./chai";

function App() {
  const username = "mai aur tum";
  //this variable is directly injected in any tag using {}, and that will final evaluated expression, evaluated expression not work as variable, we can,t use that as js varibale after
  return (
    <>
      <Chai></Chai>
      <h1>This is a vite project {username}</h1>
      <p>test para</p>
    </>
  );
}

export default App;
