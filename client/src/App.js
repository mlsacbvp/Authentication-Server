import { useRef, useState, useEffect } from "react";
import "./App.css";
import { uploadFile } from "./services/api";
<<<<<<< HEAD

=======
// import nav from "./components/nav";
import NavBar from "./components/NavBar";
>>>>>>> b2d392716cc90e88117cf3628e849b570fe5a1e3
function App() {
  const fileInputRef = useRef();
  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  const [file, setFile] = useState("");
  console.log(file);
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile();
      }
    };
    getImage();
  }, [file]);
  return (
<<<<<<< HEAD
    <>
      <div className="container">
        {/* <img src={logo} alt="banner" /> */}
        <div className="wrapper">
          <h1>FILE VORTEX</h1>
          <p className="tag">Unleash the Power of Seamless Sharing</p>
          <button onClick={() => onUploadClick()}>Upload</button>
=======


    
    <div className="container">
    <header><NavBar/></header>
      {/* <img src={logo} alt="banner" /> */}
      <div className="wrapper">
        <h1>FILE VORTEX</h1>
        <p className="tag">Unleash the Power of Seamless Sharing</p>
        <button onClick={() => onUploadClick()}>Upload</button>
>>>>>>> b2d392716cc90e88117cf3628e849b570fe5a1e3

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>
<<<<<<< HEAD
    </>
=======

    </div>
>>>>>>> b2d392716cc90e88117cf3628e849b570fe5a1e3
  );
}

export default App;
