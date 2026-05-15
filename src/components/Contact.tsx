import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/niraj-bharambe07/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — niraj-bharambe07
              </a>
            </p>
            <p>
              <a
                href="mailto:bharambeireniraj@gmail.com"
                data-cursor="disable"
              >
                bharambeireniraj@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              M.Sc. Computer Science (Future Networked Systems), Trinity College
              Dublin — 2024–present
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/NirajB-dev"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/niraj-bharambe07/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Niraj Bharambe</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
