import React, { useState } from "react";
import "./Form.css";

function ApplicationForm({ onSubmitApplication }) {
  const [candidateName, setCandidateName] = useState("");
  const [appliedFor, setAppliedFor] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [skills, setSkills] = useState([]);

  const handleAddSkill = () => setSkills([...skills, ""]);

  const handleRemoveSkill = (index) => {
    const updated = [...skills];
    updated.splice(index, 1);
    setSkills(updated);
  };

  const handleSkillChange = (index, value) => {
    const updated = [...skills];
    updated[index] = value;
    setSkills(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApplication = {
      candidateName,
      appliedFor,
      profilePicture: profilePicture ? URL.createObjectURL(profilePicture) : null,
      skills,
    };

    onSubmitApplication(newApplication);

    // Reset form
    setCandidateName("");
    setAppliedFor("");
    setProfilePicture(null);
    setSkills([]);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Application Form</h2>

      <div className="form-row">
        <label>Candidate Name:</label>
        <input
          type="text"
          value={candidateName}
          onChange={(e) => setCandidateName(e.target.value)}
          required
        />
      </div>

      <div className="form-row">
        <label>Applied For:</label>
        <select value={appliedFor} onChange={(e) => setAppliedFor(e.target.value)} required>
          <option value="">-- Select --</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
        </select>
      </div>

      <div className="form-row">
        <label>Profile Picture:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProfilePicture(e.target.files[0])}
        />
      </div>

      <div className="form-row">
        <label>Skills:</label>
        <div className="skills-column">
          {skills.map((skill, index) => (
            <div key={index} className="skill-row">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                required
              />
              <button type="button" onClick={() => handleRemoveSkill(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddSkill}>Add More Skill</button>
        </div>
      </div>

      <div className="form-row">
        <label></label>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ApplicationForm;
