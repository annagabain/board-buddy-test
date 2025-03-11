import React, { useState } from "react";
import BylawsComponent from "./components/BylawsComponent";
import VoteComponent from "./components/VoteComponent";
import participant1 from "./participant1.png";
import user from "./User.png";


function App() {
  // State to control the visibility of the Bylaws modal and the Vote modal
  const [showBylaws, setShowBylaws] = useState(false);
  const [showVote, setShowVote] = useState(false);

  const toggleBylawsModal = () => {
    setShowBylaws(!showBylaws);
  };

  const toggleVoteModal = () => {
    setShowVote(!showVote);
  };

  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <div className="timer">45:23</div>
      </div>

      <div className="content-layout">
        {/* Sidebar (Agenda Section) */}
        <div className="sidebar">
          <ul>
            <li>1. Opening</li>
            <li>2. Previous Minutes</li>
            <li>3. Financial Report</li>
            <li className="active">4. Current: Events</li>
            <li>5. Next: Budget</li>
          </ul>
        </div>

        {/* Chat Window in the Center */}
        <div className="main">
          <div className="chat-window">
            <h2 className="chat-title">AI Assistant Chat</h2>
            <div className="chat-message">
              <p>
                You need to vote on the <strong>summer event budget</strong>.
                Would you like me to start the voting process?
              </p>
            </div>
            <div className="chat-buttons">
              <button className="chat-button">Yes</button>
              <button className="chat-button">No</button>
              <button className="chat-button">More Info</button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          {/* Buttons for By-Laws, Agenda, and Voting */}
          <div className="button-panel">
            <button onClick={toggleBylawsModal}>By-laws</button>
            <button>Agenda</button>
            <button onClick={toggleVoteModal}>Start Vote</button>
          </div>

          {/* Participants Section */}
          <div className="participants">
            <img src={participant1}  alt="Participant 1" />
            <img src={user} alt="Participant 2" />
            <img src={user} alt="Participant 2" />
            <div className="add-participant">+1</div>
          </div>
        </div>
      </div>

      {/* Modal for Bylaws Component */}
      {showBylaws && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={toggleBylawsModal}>
              &times;
            </button>
            <BylawsComponent />
          </div>
        </div>
      )}

      {/* Modal for Vote Component */}
      {showVote && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={toggleVoteModal}>
              &times;
            </button>
            <VoteComponent />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
