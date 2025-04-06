import React, { useState } from "react";
import "./Form.css";

function ApplicationList({ applications }) {
  const [searchText, setSearchText] = useState("");

  // search applications based on search text
  const filteredApplications = applications.filter((app) => {
    const searchLower = searchText.toLowerCase();
    return (
      app.candidateName.toLowerCase().includes(searchLower) ||
      app.appliedFor.toLowerCase().includes(searchLower) ||
      app.skills.some(skill => skill.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="submitted-section">
      <h3>Submitted Applications</h3>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, applied for, or skills"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {filteredApplications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        filteredApplications.map((app, index) => (
          <div key={index} className="application-card">
            {app.profilePicture && (
              <img src={app.profilePicture} alt="Profile" className="profile-pic" />
            )}
            <p><strong>Name:</strong> {app.candidateName}</p>
            <p><strong>Applied For:</strong> {app.appliedFor}</p>
            <p><strong>Skills:</strong> {app.skills.join(", ")}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ApplicationList;
