import React from "react";
import { useParams } from "react-router-dom";
import "./ProposalDetail.css";

function ProposalDetail() {
    const { id } = useParams();

    return (
        <div className="proposal-detail">
            <h2>proposal #{id}</h2>
            <p>this is a placeholder for proposal details. you can fetch or pass actual proposal data here.</p>
        </div>
    );
}

export default ProposalDetail;