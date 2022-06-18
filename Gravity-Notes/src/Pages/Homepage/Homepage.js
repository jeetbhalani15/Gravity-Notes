import { Bodycontent } from "../../Components/Body-content/Body-content";
import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navigation/Navbar";
import { useTheme } from "../../Contexts/Theme-context";
import "./Homepage.css";

export const Homepage = ()=>{
    const {darkTheme} = useTheme();
    return(
        <>
        <Navbar/>
        <Bodycontent/>
        <Footer/>
        </>
    );
}