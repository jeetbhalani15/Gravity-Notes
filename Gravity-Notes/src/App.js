import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Bodycontent } from "./Components/Body-content/Body-content";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navigation/Navbar";
import { Homepage } from "./Pages/Homepage/Homepage";
import { Landingpage } from "./Pages/Landing-page/Landing-page";




function App() {
  return (
    <>
    <Routes>
       <Route exact path="/" element={<Landingpage/>}/>
       <Route  path="/home" element={  <Homepage/>}/>
     </Routes>
   </>
  );
}

export default App;

      
