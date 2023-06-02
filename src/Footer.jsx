import "./App.css";
import twitterLogo from "../assets/twitter-icon.png";
import fbLogo from "../assets/fb-icon.png";
import gitLogo from "../assets/git-icon.png";
import igLogo from "../assets/ig-icon.png";

function Footer() {
  return (
    <footer>
      <img src={twitterLogo} />
      <img src={fbLogo} />
      <img src={igLogo} />
      <img src={gitLogo} />
    </footer>
  );
}

export default Footer;
