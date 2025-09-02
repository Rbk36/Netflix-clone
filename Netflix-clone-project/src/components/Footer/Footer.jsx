import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-icons">
        <ul>
          <li>
            <FacebookOutlinedIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
        </ul>
      </div>
      <div className="footer-data">
        <ul>
          <li>Audio Description</li>
          <li>Investor Relation</li>
          <li>Legal Notice</li>
        </ul>
        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cooker Preferences</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Media center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="service-code">
        <p>Service Code</p>
      </div>
      <div className="copy-write">&copy;1997-2004 Netflix,Inc</div>
    </div>
  );
};

export default Footer;
