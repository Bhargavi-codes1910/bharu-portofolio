import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">CareerGPT</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Chatbot</a></li>
        <li><a href="#">Resume</a></li>
        <li><a href="#">Interview</a></li>
        <li><a href="#">Quiz</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;