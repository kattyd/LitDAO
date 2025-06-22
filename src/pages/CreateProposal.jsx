import React from "react";
import "./CreateProposal.css";

function CreateProposal() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("proposal submitted (mocked)");
    };

    return (
        <div className="create-proposal">
            <h2>create new proposal</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="proposal title" required />
                <textarea placeholder="proposal description" required />
                <button type="submit">submit proposal</button>
            </form>
        </div>
    );
}

export default CreateProposal;