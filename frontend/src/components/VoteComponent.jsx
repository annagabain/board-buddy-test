import React, { useState } from "react";
import axios from "axios";

function VoteComponent() {
    const [totalVotes, setTotalVotes] = useState("");
    const [yesVotes, setYesVotes] = useState("");
    const [decision, setDecision] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        try {
            const response = await axios.post("http://127.0.0.1:5000/vote", {
                
                total_votes: parseInt(totalVotes),
                yes_votes: parseInt(yesVotes),
            });
            setDecision(response.data.decision); // Display the decision from the backend
        } catch (error) {
            console.error("Error submitting vote:", error);
            setDecision("An error occurred. Please try again.");
        }
    };
    

    return (
        <div>
            <h2>Vote on Board Decisions</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Total Votes:
                        <input
                            type="number"
                            value={totalVotes}
                            onChange={(e) => setTotalVotes(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Yes Votes:
                        <input
                            type="number"
                            value={yesVotes}
                            onChange={(e) => setYesVotes(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
            {decision && (
                <div>
                    <h3>Decision:</h3>
                    <p>{decision}</p>
                </div>
            )}
        </div>
    );
}

export default VoteComponent;
