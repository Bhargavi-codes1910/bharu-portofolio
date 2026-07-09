import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to CareerGPT</h1>

        <h2>Your AI Placement Preparation Partner</h2>

        <p>
          Practice interviews, analyze resumes, generate aptitude questions,
          and prepare for placements with AI.
        </p>

        <div className="buttons">
          <button className="btn1">Get Started</button>
          <button className="btn2">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;