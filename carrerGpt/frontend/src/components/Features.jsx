import "./Features.css";

function Features() {
  const features = [
    {
      title: "AI Chatbot",
      description: "Ask AI any placement or technical question instantly."
    },
    {
      title: "Resume Analyzer",
      description: "Upload your resume and get ATS score with suggestions."
    },
    {
      title: "Aptitude Quiz",
      description: "Practice aptitude questions with AI-generated quizzes."
    },
    {
      title: "Interview Simulator",
      description: "Practice HR and technical interviews with AI."
    }
  ];

  return (
    <section className="features">
      <h2>Our Features</h2>

      <div className="feature-container">
        {features.map((feature, index) => (
          <div className="card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;