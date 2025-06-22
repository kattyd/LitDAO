export function voteOnChain(proposalId, voteType) {
    // simulate a blockchain transaction
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Voted ${voteType} on proposal ${proposalId}`);
            resolve(true);
        }, 1000);
    });
}