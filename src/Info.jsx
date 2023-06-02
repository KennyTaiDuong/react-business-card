import "./App.css";
import mug from "./assets/kd_faceshot.jpeg";
import emailIcon from "./assets/email-icon.svg";
import linkedinIcon from "./assets/linkedin-icon.svg";

function Info() {
  return (
    <div>
      <img src={mug} className="self-portrait" />
      <div className="info-container">
        <h2 className="name">Kenny Duong</h2>
        <h4 className="position">Frontend Developer</h4>
        <p className="name-link">kennyduong.website</p>
      </div>
      <div className="btn-container">
        <button className="email-btn">
          <img src={emailIcon} />
          Email
        </button>
        <button className="linkedin-btn">
          <img src={linkedinIcon} />
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Info;
