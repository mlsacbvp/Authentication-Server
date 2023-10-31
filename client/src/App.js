import { useRef, useState, useEffect } from "react";
import "./App.css";
import { uploadFile } from "./services/api";
// import nav from "./components/nav";
import NavBar from "./components/NavBar.js";
function App() {
  const fileInputRef = useRef();
  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  console.log(file);
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);
  return (
    <div className="container">
      <header>
        <NavBar />
      </header>
      {/* <img src={logo} alt="banner" /> */}
      <div className="wrapper">
        <h1>FILE VORTEX</h1>
        <p className="tag">Unleash the Power of Seamless Sharing</p>
        <button onClick={() => onUploadClick()}>Upload</button>

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result} target="_blank">
          {result}
        </a>
      </div>
    </div>
  );
}

export default App;
