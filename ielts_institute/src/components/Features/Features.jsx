import React from 'react';
import { Mic, FileText, Brain, Users } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "Speaking Practice",
      description: "Interactive speaking sessions with real-time feedback and pronunciation analysis to boost your confidence.",
      highlights: ["AI Voice Analysis", "Pronunciation Coaching", "Mock Speaking Tests"]
    },
    {
      icon: FileText,
      title: "Mock Tests",
      description: "Full-length practice tests that simulate real IELTS exam conditions with detailed performance analysis.",
      highlights: ["Timed Practice Tests", "Instant Results", "Performance Analytics"]
    },
    {
      icon: Brain,
      title: "AI Band Score Prediction",
      description: "Advanced AI technology predicts your band score and provides personalized improvement strategies.",
      highlights: ["Accurate Predictions", "Weakness Analysis", "Study Recommendations"]
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Learn from certified IELTS instructors with proven track records of student success.",
      highlights: ["1-on-1 Sessions", "Group Classes", "24/7 Support"]
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container1">
        <div className="header">
          <h2>Everything You Need to Excel in IELTS</h2>
          <p>
            Our comprehensive platform combines cutting-edge technology with expert instruction 
            to give you the best chance of achieving your target band score.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="card">
                <div className="card-header">
                  <div className="icon-wrapper">
                    <IconComponent className="icon" />
                  </div>
                  <h3 className="card-title">{feature.title}</h3>
                </div>
                <div className="card-content">
                  <p className="description">{feature.description}</p>
                  <ul className="highlights-list">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="highlight-item">
                        <span className="highlight-dot"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cta">
          <div className="cta-box">
            <h3>Ready to Start Your IELTS Journey?</h3>
            <p>
              Join thousands of successful students who achieved their dream scores with our proven methods.
            </p>
            <button className="cta-button">Get Started Today</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
