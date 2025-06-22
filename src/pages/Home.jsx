import { useState } from "react";
import { FaWallet } from "react-icons/fa";
import ProposalCard from "../components/ProposalCard";
import useVotes from "../hooks/useVotes"; // ← for simulated vote logic
import "./Home.css";

function Home() {
    const [walletConnected, setWalletConnected] = useState(false);
    const [address, setAddress] = useState("");

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

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                setAddress(accounts[0]);
                setWalletConnected(true);
            } catch (err) {
                console.error("Wallet connection failed", err);
            }
        } else {
            alert("Please install MetaMask.");
        }
    };

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
                <h2>we are commited to the growth of literacy</h2>
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

            {/* {!walletConnected ? (
                <div className="connect-message">
                    <p>Please connect your wallet to view DAO proposals and treasury.</p>
                </div>
            ) : (
                <section className="dashboard">
                    <h3>DAO Treasury Balance</h3>
                    <p>Ξ 42.13 ETH</p>

                    <h3>Active Proposals</h3>
                    <div className="proposals">
                        {proposals.map((proposal) => (
                            <ProposalCard 
                                key={proposal.id}
                                proposal={proposal}
                                walletConnected={walletConnected}
                                onVote={handleVote}
                            />
                        ))}
                    </div>
                </section>
            )} */}
        </div>
    );
}

export default Home;
