import {ImGithub} from "react-icons/im";
import {ImTwitter} from "react-icons/im";
import {ImLinkedin} from "react-icons/im";
import { useTheme } from "../../Contexts/Theme-context";
import "./Footer.css";


export function Footer() {
  const {darkTheme} = useTheme();
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
          <div className={darkTheme ? "footer-txt" : null}>
            © 2022  |  Gravity Notes All Rights Resevered.
          </div>
        </div>
      </footer>
    );
  }
  