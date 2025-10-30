
import './first.css';
import mentorImage from '../public/first.png';

const First = () => {
  return (
    <div className="webinar-container">
      <div className="webinar-left">
        <h1>
          Unlock the Secret to <br />
          Building a Profitable <br />
          <span className="highlight">DROPSHIPPING</span> <br />
          Empire!
        </h1>
        <p className="description">
          Ready to escape confusion and finally start earning from your online store? <br />
          In this exclusive session, I'll hand you battle-tested strategies that my top students used to go from ₹0 to 7 figures — without guesswork, endless trial & error, or fake promises. <br />
          Just clarity, proven steps, and real success — built for YOU.
        </p>

        <h2 className="subheading">In India's #1 Dropshipping Masterclass</h2>

        <div className="info-grid">
          <div className="info-card">
            <h4>DATE</h4>
            <p>31st Oct</p>
          </div>
          <div className="info-card">
            <h4>TIME</h4>
            <p>8:00 PM</p>
          </div>
          <div className="info-card">
            <h4>PLATFORM</h4>
            <p>Zoom</p>
          </div>
          <div className="info-card">
            <h4>LANGUAGE</h4>
            <p>English | Hindi</p>
          </div>
        </div>
      </div>

      <div className="webinar-right">
        <p className="quote">“Launch your 7-Figure Store — Now!”</p>
        <div className="image-box">
          <img src={mentorImage} alt="Dropshipping Dashboard" />
        </div>
        <p className="trained-text">
          Trained Over 10,000+ Students Who Are Now Running Their Own Online Businesses
        </p>
        <button className="webinar-btn" onClick={() => window.open("https://live.skillsfavour.com/payment-link/68fc8be867ee3b46ba6a357c", "_blank")}>Yes! I'm in for the Webinar</button>
      </div>
    </div>
  );
};

export default First;