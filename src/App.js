import resim1 from "./assets/IMG-20200522-WA0025.jpg";
import resim2 from "./assets/IMG-20200522-WA0039.jpg";
import resim3 from "./assets/IMG-20200518-WA0017.jpg";
import resim4 from "./assets/034.jpg";
import resim5 from "./assets/035.jpg";
import "./styles.css";
import { useState } from "react";

const Images = [resim1, resim2, resim3, resim4, resim5];

function App() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);

  return (
    <div className="App">
      <div className="container">
        <h1>Handsome Boys</h1>
        <img src={selectedImg} alt="selected" className="selected" />
      </div>
      <div className="imgContainer">
        {Images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="ss"
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
