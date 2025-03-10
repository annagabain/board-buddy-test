import React, { useState, useEffect } from "react";
import axios from "axios";

function BylawsComponent() {
  const [bylaws, setBylaws] = useState({});

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/by-laws")
      .then(response => setBylaws(response.data))
      .catch(error => console.error("Error fetching by-laws:", error));
  }, []);

  return (
    <div>
      <h2>By-laws</h2>
      <ul>
        {Object.entries(bylaws).map(([key, value]) => (
          <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default BylawsComponent;
