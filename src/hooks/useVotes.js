import { useEffect, useState } from "react";

export default function useVotes() {
    const [votes, setVotes] = useState(() => {
        const stored = localStorage.getItem("litdao_votes");
        return stored ? JSON.parse(stored) : {};
    });

    useEffect(() => {
        localStorage.setItem("litdao_votes", JSON.stringify(votes));
    }, [votes]);

    const voteOnProposal = (id, type) => {
        if (votes[id]?.userVote) return false;

        setVotes((prev) => ({
            ...prev,
            [id]: {
                userVote: type,
                timestamp: Date.now(),
                yes: (prev[id]?.yes || 0) + (type === "yes" ? 1 : 0),
                no: (prev[id]?.no || 0) + (type === "no" ? 1 : 0),
            },
        }));

        return true;
    };
    const getVote = (id) => votes[id]?.userVote || null;

    const getVoteCounts = (id, defaultVotes) => ({
        yes: votes[id]?.yes ?? defaultVotes.yes,
        no: votes[id]?.no ?? defaultVotes.no,
    });

    return { voteOnProposal, getVote, getVoteCounts };
}