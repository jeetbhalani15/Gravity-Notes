import { Route, Routes } from "react-router-dom";
import "./App.css";
import "../src/Default.css";
import { Bodycontent } from "./Components/Body-content/Body-content";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navigation/Navbar";
import { Login } from "./Pages/AuthWidget/Login/Login";
import { SignUp } from "./Pages/AuthWidget/SignUp/SignUp";
import { Homepage } from "./Pages/Homepage/Homepage";
import { LandingPage } from "./Pages/Landing-page/Landing-page";
import Mockman from "mockman-js";
import { Archive } from "./Pages/Archive/Archive-page";
import { Trash } from "./Pages/Trash-page/Trash";
import { Tags } from "./Pages/Tags-page/Tag-page";
import { Logout } from "./Pages/Logout/Logout";
import { useTheme } from "./Contexts/Theme-context";






function App() {
  const {darkTheme} = useTheme();
  return (
    <>
    <div id="root" className={darkTheme ? "dark" : null}  >
    <Routes>
       <Route exact path="/" element={<LandingPage/>}/>
       <Route  path="/home" element={  <Homepage/>}/>
       <Route  path="/login" element={  <Login/>}/>
       <Route  path="/signup" element={ <SignUp/>}/>
       <Route  path="/archive" element={ <Archive/>}/>
       <Route  path="/trash" element={ <Trash/>}/>
       <Route  path="/label" element={ <Tags/>}/>
       <Route  path="/logout" element={ <Logout/>}/>
       <Route  path="/mock" element={<Mockman/>}/>
     </Routes>
     </div>
   </>
  );
}

export default App;

      
