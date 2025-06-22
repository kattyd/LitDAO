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

  const handleVote = async (type) => {
    if (!walletConnected || hasVoted || loading) return;

    setLoading(true);
    const result = await voteOnChain(proposal.id, type);

    if (result.success) {
      voteOnProposal(proposal.id, type); // Update local hook
      onVote(proposal.id, type);         // Notify parent to update UI
    }

    setLoading(false);
  };

  return (
    <div className="proposal-card">
      <h4>{proposal.title}</h4>
      <p>{proposal.description}</p>
      <p>Votes: ✅ {displayedVotes.yes} | ❌ {displayedVotes.no}</p>
      <Link to={`/proposal/${proposal.id}`}>view details</Link>

      {walletConnected && !hasVoted && (
        <div className="vote-buttons">
          <button onClick={() => handleVote("yes")} disabled={loading}>
            {loading ? "voting..." : "vote yes"}
          </button>
          <button onClick={() => handleVote("no")} disabled={loading}>
            {loading ? "voting..." : "vote no"}
          </button>
        </div>
      )}

      {hasVoted && <p>you voted: {hasVoted.toUpperCase()}</p>}
    </div>
  );
}

export default ProposalCard;
