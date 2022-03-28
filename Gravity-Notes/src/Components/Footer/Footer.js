import {ImGithub} from "react-icons/im";
import {ImTwitter} from "react-icons/im";
import {ImLinkedin} from "react-icons/im";
import "./Footer.css";


export function Footer() {
    return (
      <footer>
        <div>
          <div className="active-links">
            <ul className="footer">
              <li>
                {" "}
                <a className="action-links" href="https://twitter.com/je_et15">
                  <ImTwitter/>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="action-links"
                  href="https://github.com/jeetbhalani15"
                >
                  <ImGithub/>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="action-links"
                  href="https://www.linkedin.com/in/jeetbhalani/"
                >
                    <ImLinkedin/>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-txt">
            © 2022  |  Gravity Notes All Rights Resevered.
          </div>
        </div>
      </footer>
    );
  }
  