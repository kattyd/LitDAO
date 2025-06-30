import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProtectedRoute.css";

function ProtectedRoute({ walletConnected, children }) {

    const navigate = useNavigate();
    
    if (!walletConnected) {
        return (
            <div className="dashboard-locked">
                <h2>🔒 connect your wallet to view the dashboard</h2>
                <button onClick={() => navigate("/")}>go back</button>
            </div>
        );
    }

    return children;
}

export default ProtectedRoute;