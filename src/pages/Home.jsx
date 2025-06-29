import { FaWallet } from "react-icons/fa";
import ProposalCard from "../components/ProposalCard";
import useVotes from "../hooks/useVotes";
import "./Home.css";
import { useState } from "react";

function Home({ walletConnected, address, connectWallet }) {
    const [proposals, setProposals] = useState([
        {
            id: 1,
            title: "Fund Local Libraries",
            description: "Allocate 5 ETH to renovate libraries.",
            votes: { yes: 12, no: 3 },
        },
        {
            id: 2,
            title: "Sponsor Book Readings",
            description: "Support 10 book readings nationwide.",
            votes: { yes: 18, no: 2 },
        },
    ]);

    const handleVote = (proposalId, type) => {
        setProposals((prevProposals) =>
            prevProposals.map((p) => {
                if (p.id === proposalId) {
                    return {
                        ...p,
                        votes: {
                            ...p.votes,
                            [type]: p.votes[type] + 1,
                        },
                    };
                }
                return p;
            })
        );
    };

    return (
        <div className="home">
            <section className="hero">
                <div className="hero-text">
                    <h2>Welcome to <br />LitDAO</h2>
                    <p>Funding literature, libraries and literacy <br />with the power of crypto.</p>
                    <div className="hero-btn">
                        {!walletConnected ? (
                            <button onClick={connectWallet} className="wallet-btn">
                                <FaWallet style={{ marginRight: "8px" }} />
                                Connect Wallet
                            </button>
                        ) : (
                            <p>Connected: {address.slice(0, 6)}...{address.slice(-4)}</p>
                        )}
                    </div>
                </div>
                <img src="/assets/reading.png" alt="LitDAO" className="hero-image" />
            </section>

            <section className="info">
                <h2>we are committed to the growth of literacy</h2>
                <p>no matter where you are in the world you can help</p>
            </section>

            <section className="features">
                <div className="features-grid">
                    <div className="features-card">
                        <h3>projects</h3>
                        <p>create investments early, find a team of enthusiasts to start building.</p>
                    </div>
                    <div className="features-card">
                        <h3>investments</h3>
                        <p>get votes on your projects and find investment easier than ever.</p>
                    </div>
                    <div className="features-card">
                        <h3>social</h3>
                        <p>learn from each other and get the best mentorship where you need</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
