import { useState } from "react";
import "./App.css";
import myPhoto from "./assets/photo_2025-09-29_20-12-12.jpg"; // ✅ import your image

export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="app-container">
      <div className="app-center">
        <div
          onClick={() => setShowMessage(!showMessage)}
          className="flower-clickable"
        >
          {/* SVG Flower */}
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="flower-svg"
          >
            {/* Petals */}
            <ellipse cx="100" cy="60" rx="25" ry="40" fill="#ff69b4" />
            <ellipse cx="140" cy="100" rx="40" ry="25" fill="#ff1493" />
            <ellipse cx="100" cy="140" rx="25" ry="40" fill="#ff69b4" />
            <ellipse cx="60" cy="100" rx="40" ry="25" fill="#ff1493" />
            <ellipse cx="130" cy="70" rx="30" ry="35" fill="#ffb6c1" />
            <ellipse cx="130" cy="130" rx="30" ry="35" fill="#ffb6c1" />
            <ellipse cx="70" cy="130" rx="30" ry="35" fill="#ffb6c1" />
            <ellipse cx="70" cy="70" rx="30" ry="35" fill="#ffb6c1" />

            {/* Center */}
            <circle cx="100" cy="100" r="25" fill="#ffd700" />
            <circle cx="100" cy="100" r="20" fill="#ffed4e" />

            {/* Stem */}
            <rect x="95" y="140" width="10" height="60" fill="#228b22" rx="5" />
            <ellipse cx="80" cy="160" rx="15" ry="10" fill="#32cd32" />
            <ellipse cx="120" cy="170" rx="15" ry="10" fill="#32cd32" />
          </svg>
        </div>

        {/* Instruction text */}
        {!showMessage && <p className="instruction">Click the flower 🌸</p>}

        {/* Message */}
        {showMessage && (
          <div className="message-box fadeIn">
            <div className="message-content">
              <div className="image-wrapper">
                <img
                  src={myPhoto} // ✅ use imported photo
                  alt="Special moment"
                  className="message-image"
                />
              </div>

              <h2 className="message-title">
                To My Beautiful Soon to be Girlfriend 💕
              </h2>
              <div className="message-text">
                <p>
                  Just like this flower blooms with beauty and grace, you bring
                  color and joy to every moment of my life.
                </p>
                <p>
                  Every day with you feels like a dream come true. Your smile
                  brightens even the darkest days, and your laughter is the
                  sweetest melody I've ever heard.
                </p>
                <p>
                  Thank you for being you—for your kindness, your strength, your
                  beautiful heart, and for choosing to share your life with me.
                </p>
                <p>
                  You inspire me to be better, to dream bigger, and to love
                  deeper.
                </p>
              </div>
              <p className="closing-text">
                I love you more than words can express! ❤️
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
