import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "United Kingdom",
    score: "8.5",
    image: "https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    review: "The AI-powered feedback was incredibly helpful. I improved my speaking score from 6.5 to 8.5 in just 6 weeks. The instructors were patient and provided excellent guidance throughout my preparation.",
    course: "Intensive IELTS Course"
  },
  {
    name: "David Chen",
    country: "China",
    score: "8.0",
    image: "https://images.unsplash.com/photo-1631131428457-3c14bdcb81d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    review: "The mock tests were exactly like the real exam. The detailed analysis helped me understand my weaknesses and improve systematically. I achieved my target score of 8.0 on my first attempt!",
    course: "Mock Test Package"
  },
  {
    name: "Priya Patel",
    country: "India",
    score: "9.0",
    image: "https://images.unsplash.com/photo-1725473824377-b1a507db7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    review: "Exceptional teaching quality and personalized attention. The speaking practice sessions with native speakers boosted my confidence significantly. I scored 9.0 overall and got into my dream university!",
    course: "Premium One-on-One"
  }
];

const Testimonials = () => (
  <section className="testimonials-section">
    <div className="testimonials-header">
      <h2>What Our Students Say</h2>
      <p>Don't just take our word for it. Here's what our successful students have to say about their IELTS journey with us.</p>
    </div>
    <div className="testimonials-grid">
      {testimonials.map((t, idx) => (
        <div className="testimonial-card" key={idx}>
          <div className="quote-icon">
            <Quote size={28} color="#2563eb" />
          </div>
          <p className="testimonial-review">"{t.review}"</p>
          <div className="testimonial-rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} color="#facc15" fill="#facc15" />
            ))}
            <span className="testimonial-rating-num">5.0</span>
          </div>
          <div className="testimonial-user-row">
            <img className="testimonial-img" src={t.image} alt={t.name} />
            <div>
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-country">{t.country}</div>
            </div>
            <div className="testimonial-score">
              <div className="score-main">{t.score}</div>
              <div className="score-label">Band Score</div>
            </div>
          </div>
          <div className="testimonial-course">{t.course}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
