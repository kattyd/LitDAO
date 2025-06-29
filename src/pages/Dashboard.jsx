import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProposalCard from "../components/ProposalCard";
import "./Dashboard.css";

function Dashboard({ walletConnected }) {
    const navigate = useNavigate();

    const [mockProposals] = useState([
        {
            id: 1,
            title: "fund your local libraries",
            description: "allocate 5 eth to renovate libraries.",
            votes: { yes: 12, no: 3},
        },
        {
            id: 2,
            title: "sponsor book readings",
            description: "support 10 book reading nationwide.",
            votes: { yes: 18, no: 2 },
        },
    ]);

    return (
        <div className="dashboard">
            <h3>DAO treasury balance</h3>
            <p>Ξ 42.13 ETH</p>

            <h3>active proposals</h3>
            <div className="proposals">
                {mockProposals.map((proposal) => (
                    <ProposalCard
                        key={proposal.id}
                        proposal={proposal}
                        walletConnected={walletConnected}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;