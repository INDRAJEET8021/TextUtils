import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />

      <div className="container my-3">
        <TextForm heading="Enter Text To analyse below" />
      </div>
    </>
  );
}

export default App;
