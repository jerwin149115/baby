import { useState } from "react";
import "./App.css";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    "./src/assets/photo_2025-09-29_20-12-12.jpg"
  );

  return (
    <div className="app-container">
      <div className="app-center">
        <div
          onClick={() => setShowMessage(!showMessage)}
          className="flower-clickable"
        >
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="flower-svg"
          >
            {/* Petals */}
            <ellipse cx="100" cy="60" rx="25" ry="40" fill="#ff69b4" className="pulse delay-0" />
            <ellipse cx="140" cy="100" rx="40" ry="25" fill="#ff1493" className="pulse delay-1" />
            <ellipse cx="100" cy="140" rx="25" ry="40" fill="#ff69b4" className="pulse delay-2" />
            <ellipse cx="60" cy="100" rx="40" ry="25" fill="#ff1493" className="pulse delay-3" />
            <ellipse cx="130" cy="70" rx="30" ry="35" fill="#ffb6c1" className="pulse delay-4" />
            <ellipse cx="130" cy="130" rx="30" ry="35" fill="#ffb6c1" className="pulse delay-5" />
            <ellipse cx="70" cy="130" rx="30" ry="35" fill="#ffb6c1" className="pulse delay-6" />
            <ellipse cx="70" cy="70" rx="30" ry="35" fill="#ffb6c1" className="pulse delay-7" />

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
              {/* Image */}
              <div className="image-wrapper">
                <img
                  src={imageUrl}
                  alt="Special moment"
                  className="message-image"
                  onError={(e) => {
                    e.target.src =
                      "./src/assets/photo_2025-09-29_20-12-12.jpg";
                  }}
                />
              </div>

              <h2 className="message-title">To My Beautiful Soon to be Girlfriend 💕</h2>
              <div className="message-text">
                <p>
                  Just like this flower blooms with beauty and grace, you bring
                  color and joy to every moment of my life. You are my sunshine,
                  my happiness, and my everything.
                </p>
                <p>
                  Every day with you feels like a dream come true. Your smile
                  brightens even the darkest days, and your laughter is the
                  sweetest melody I've ever heard.
                </p>
                <p>
                  Thank you for being you—for your kindness, your strength, your
                  beautiful heart, and for choosing to share your life with me.
                  I am so grateful for every moment we spend together.
                </p>
                <p>
                  You inspire me to be better, to dream bigger, and to love
                  deeper. With you by my side, I feel like I can conquer the
                  world.
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
