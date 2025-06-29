import React from "react";
import { Navigate } from "react-router-dom";
import "./ProtectedRoute.css";

function ProtectedRoute({ walletConnected, children }) {
    
    if (!walletConnected) {
        return (
            <div className="dashboard-locked">
                <h2>🔒 connect your wallet to view the dashboard</h2>
                <button onClick={() => Navigate("/")}>go back</button>
            </div>
        );
    }

    return children;
}

export default ProtectedRoute;