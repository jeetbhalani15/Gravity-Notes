import { Bodycontent } from "../../Components/Body-content/Body-content";
import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navigation/Navbar";

export const Homepage = ()=>{
    return(
        <>
        <Navbar/>
        <Bodycontent/>
        <Footer/>
        </>
    );
}