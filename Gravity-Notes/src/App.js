import { Route, Routes } from "react-router-dom";
import "./App.css";
import "../src/Default.css";
import { Bodycontent } from "./Components/Body-content/Body-content";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navigation/Navbar";
import { Login } from "./Pages/AuthWidget/Login/Login";
import { SignUp } from "./Pages/AuthWidget/SignUp/SignUp";
import { Homepage } from "./Pages/Homepage/Homepage";
import { Landingpage } from "./Pages/Landing-page/Landing-page";
import Mockman from "mockman-js";
import { Archive } from "./Pages/Archive/Archive-page";





function App() {
  return (
    <>
    <Routes>
       <Route exact path="/" element={<Landingpage/>}/>
       <Route  path="/home" element={  <Homepage/>}/>
       <Route  path="/login" element={  <Login/>}/>
       <Route  path="/signup" element={ <SignUp/>}/>
       <Route  path="/archive" element={ <Archive/>}/>
       <Route  path="/mock" element={<Mockman/>}/>
     </Routes>
   </>
  );
}

export default App;

      
