import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");

  const handleJoinChat = () => {
    if (username.trim()) {
      // TODO: Navigate to chat room
      console.log(`Joining chat as: ${username}`);
    }
  };

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo-section">
          <div className="logo-icon">💬</div>
          <h1 className="app-title">ChatFlow</h1>
        </div>
        <p className="tagline">Connect instantly, chat seamlessly</p>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <h2 className="hero-title">Experience Real-time Communication</h2>
          <p className="hero-description">
            Join thousands of users in our lightning-fast chat platform. Share
            messages, connect with friends, and stay in touch with your
            community.
          </p>

          <div className="join-section">
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleJoinChat()}
                className="username-input"
              />
              <button
                onClick={handleJoinChat}
                disabled={!username.trim()}
                className="join-button"
              >
                Join Chat
              </button>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h3 className="features-title">Why Choose ChatFlow?</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Lightning Fast</h4>
              <p>Messages delivered instantly with real-time synchronization</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h4>Secure</h4>
              <p>Your conversations are protected with end-to-end encryption</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h4>Global</h4>
              <p>Connect with users from around the world in real-time</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h4>Responsive</h4>
              <p>Perfect experience across all devices and screen sizes</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 ChatFlow. Built with React & WebSocket technology.</p>
      </footer>
    </div>
  );
}

export default App;
