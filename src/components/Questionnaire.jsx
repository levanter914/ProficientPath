// src/components/Questionnaire.js
import React, { useState } from 'react';
import './Questionnaire.css';

function Questionnaire() {
  const [formData, setFormData] = useState({
    currentSkills: '',
    learningStyle: '',
    timeCommitment: '',
    goals: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    console.log('Submitted data:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <h2>Thank you for submitting the questionnaire!</h2>
        <p>We will create a personalized roadmap for Web Development based on your responses.</p>
        <a href="https://df42af93dea4f2ea5d.gradio.live/" className="try-app-button">Try the App!</a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Web Development Questionnaire</h2>
      <div>
        <label>Current Skills:</label>
        <input
          type="text"
          name="currentSkills"
          value={formData.currentSkills}
          onChange={handleChange}
          placeholder="List your current skills"
        />
      </div>
      <div>
        <label>Learning Style:</label>
        <select
          name="learningStyle"
          value={formData.learningStyle}
          onChange={handleChange}
        >
          <option value="">Select learning style</option>
          <option value="visual">Visual</option>
          <option value="auditory">Auditory</option>
          <option value="kinesthetic">Kinesthetic</option>
        </select>
      </div>
      <div>
        <label>Time Commitment:</label>
        <input
          type="text"
          name="timeCommitment"
          value={formData.timeCommitment}
          onChange={handleChange}
          placeholder="How many hours per week?"
        />
      </div>
      <div>
        <label>Goals:</label>
        <input
          type="text"
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          placeholder="What are your learning goals?"
        />
      </div>
      <div className="button-container">
        <button type="submit" className="submit-button">Submit</button>
      </div>
      <div className="button-container">
        <a href="https://df42af93dea4f2ea5d.gradio.live/" className="try-app-button">Try the App!</a>
      </div>
    </form>
  );
}

export default Questionnaire;
