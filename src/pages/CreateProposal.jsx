import React from "react";
import "./CreateProposal.css";

function CreateProposal() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("proposal submitted (mocked)");
    };

    return (
        <div className="create-proposal-page">
            <div className="create-proposal">
                <h2>Create New Proposal</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Proposal Title" required />
                    <textarea placeholder="Proposal Description" rows="6" required />
                    <button type="submit">Submit Proposal</button>
                </form>
            </div>
        </div>
    );
}

export default CreateProposal;
