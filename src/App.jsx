import { useState } from 'react'
import './App.css'
import ApplicationForm from './ApplicationForm'
import ApplicationList from './ApplicationList'
function App() {
  const [applications, setApplications] = useState([]);
  const [showForm, setShowForm] = useState(true); // True shows form, False shows application list

  const handleAddApplication = (newApplication) => {
    setApplications((prev) => [...prev, newApplication]);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Buttons to toggle between Form and Application List */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setShowForm(true)} style={{ marginRight: "10px" }}>
          Show Form
        </button>
        <button onClick={() => setShowForm(false)}>
          Show Applications
        </button>
      </div>

      {/* Conditional rendering based on the state */}
      {showForm ? (
        <ApplicationForm onSubmitApplication={handleAddApplication} />
      ) : (
        <ApplicationList applications={applications} />
      )}
    </div>
  );
}

export default App;