import resim1 from "./assets/IMG-20200522-WA0025.jpg";
import resim2 from "./assets/IMG-20200522-WA0039.jpg";
import resim3 from "./assets/IMG-20200518-WA0017.jpg";
import resim4 from "./assets/034.jpg";
import resim5 from "./assets/035.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={resim1} alt="selected" className="selected" />
      </div>
      <div className="imgContainer">
        <img src="" alt="tantuni" className="" />
      </div>
    </div>
  );
}

export default App;
