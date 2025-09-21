import { useState } from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // "home", "login", "chat"
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const handleJoinChat = () => {
    if (username.trim()) {
      // TODO: Navigate to chat room
      console.log(`Joining chat as: ${username}`);
      setCurrentPage("chat");
    }
  };

  const handleShowLogin = () => {
    setCurrentPage("login");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setUsername(userData.username);
    setCurrentPage("chat"); // For now, redirect to chat after login
    console.log("User logged in:", userData);
  };

  // Render login page
  if (currentPage === "login") {
    return <Login onBack={handleBackToHome} onLogin={handleLogin} />;
  }

  // Render chat page (placeholder for now)
  if (currentPage === "chat") {
    return (
      <div className="chat-container">
        <div className="chat-header">
          <h2>Welcome to ChatFlow, {user?.username || username}!</h2>
          <button onClick={handleBackToHome} className="back-home-button">
            ← Back to Home
          </button>
        </div>
        <div className="chat-placeholder">
          <p>Chat interface coming soon...</p>
        </div>
      </div>
    );
  }

  // Render home page
  return (
    <div className="home-container">
      <header className="header">
        <div className="header-top">
          <div className="logo-section">
            <div className="logo-icon">💬</div>
            <h1 className="app-title">ChatFlow</h1>
          </div>
          <button onClick={handleShowLogin} className="login-link">
            Sign In
          </button>
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
            <p className="quick-join-note">
              Or{" "}
              <button onClick={handleShowLogin} className="inline-login-link">
                sign in
              </button>{" "}
              for a personalized experience
            </p>
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
