import "./landing.css"
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/hero-logo.png";
import notelogo from "../../Assets/Images/notes-logo.png";
import notelogo1 from "../../Assets/Images/note-paper.svg";

export const LandingPage = ()=>{
return(
    <>
    <div className="big-wrapper dark">
        <header>
            <div className="container">
            <div className="hero-logo">
          <div className="logo-mg">
            <img className="logo-img" src={logo} alt="logo" />
          </div>
          <div className="bg-color">
            {/* <Link to="/"> */}
              <div>GRAVITY</div>
              <small className="small-txt">Notes</small>
            {/* </Link> */}
          </div>
        </div>
                <div className="links">
                    <ul>
                        <li className="nav-btn-txt">Home</li>
                        <li className="nav-btn-txt">Docs</li>
                        <li className="nav-btn-txt">About Us</li>
                        <li><button className="toggle-btn">
                            <i className="fa fa-moon-o"></i>
                            <i className="fa fa-sun-o"></i>
                          </button></li>
                        
                        </ul>
                    </div>
                    <div className="overlay"></div>
                    <div className="hamburger-menu">
                        <div className="bar"></div>
                    </div>
                </div>
        </header>
        <div className="showcase-area">
            <div className="container">
                <div className="big-title">
                    <h1 className="heading-txt"> <span className="word-color">Create.</span> Organize. Share. Easy. </h1>
                    <p className="hero-txt">Notes is the best place to jot down quick thoughts or to save longer filled with checklists, images, web links, scanned Docs, Handwritten notes.</p>
                    <div className="cta-btn">
                       <Link to="/login"> <button className="btn">Join Now</button></Link>
                    </div>
                    <div className="btn">
                        {/* <button className="aha-btn">Already have Account </button> */}
                    </div>
                </div>
                <div className="img-box">
                    <img  className="round" src={notelogo} alt="image"/>
                </div>
            </div>
        </div>
        <footer>
        <div className="bottom-area">
                
                 <ul >
                    <li> <a className="action-links"  href=""><i className="fa fa-github"></i></a></li>
                    <li> <a className="action-links" href=""><i className="fa fa-twitter"></i></a></li>
                    <li> <a className="action-links" href=""><i className="fa fa-linkedin"></i></a></li>
                </ul>
           </div>
        </footer>
    </div>
    </>
);
}