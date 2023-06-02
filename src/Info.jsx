import "./App.css";

function Info() {
  return (
    <div>
      <img src=".\src\assets\kd_faceshot.jpeg" className="self-portrait" />
      <div className="info-container">
        <h2 className="name">Kenny Duong</h2>
        <h4 className="position">Frontend Developer</h4>
        <p className="name-link">kennyduong.website</p>
      </div>
      <div className="btn-container">
        <button className="email-btn">
          <img src="src\assets\email-icon.svg" />
          Email
        </button>
        <button className="linkedin-btn">
          <img src="src\assets\linkedin-icon.svg" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Info;
