import { useState } from "react";
import { Link } from "react-router-dom";
import { voteOnChain } from "../utils/fakeBlockchain";
import useVotes from "../hooks/useVotes";
import "./ProposalCard.css";

function ProposalCard({ proposal, walletConnected, onVote }) {
  const { voteOnProposal, getVote, getVoteCounts } = useVotes();
  const [loading, setLoading] = useState(false);

  const hasVoted = getVote(proposal.id);
  const displayedVotes = getVoteCounts(proposal.id, proposal.votes);

  const totalVotes = displayedVotes.yes + displayedVotes.no;
  const yesPercent = totalVotes ? (displayedVotes.yes / totalVotes) * 100 : 0;
  const noPercent = 100 - yesPercent;

  const handleVote = async (type) => {
    if (!walletConnected || hasVoted || loading) return;

    setLoading(true);
    const result = await voteOnChain(proposal.id, type);

    if (result.success) {
      voteOnProposal(proposal.id, type);
      onVote(proposal.id, type);
    }

    setLoading(false);
  };

  return (
    <div className="proposal-card">
      <h4>{proposal.title}</h4>
      <p className="description">{proposal.description}</p>

      <div className="progress-bar">
        <div className="yes" style={{ width: `${yesPercent}%` }}></div>
        <div className="no" style={{ width: `${noPercent}%` }}></div>
      </div>

      <div className="vote-counts">
        <span>✅ {displayedVotes.yes} Yes</span>
        <span>❌ {displayedVotes.no} No</span>
      </div>

      <Link to={`/proposal/${proposal.id}`} className="view-link">View details</Link>

      {walletConnected && !hasVoted && (
        <div className="vote-buttons">
          <button onClick={() => handleVote("yes")} disabled={loading}>
            {loading ? "Voting..." : "Vote Yes"}
          </button>
          <button onClick={() => handleVote("no")} disabled={loading}>
            {loading ? "Voting..." : "Vote No"}
          </button>
        </div>
      )}

      {hasVoted && <p className="voted-status">You voted: {hasVoted.toUpperCase()}</p>}
    </div>
  );
}

export default ProposalCard;
