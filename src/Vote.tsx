import React, { useState } from 'react';

type VoteProps = {

    voteCount: number;

};

const Vote: React.FC<VoteProps> = ({ voteCount }) => {

    const [votes, setVotes] = useState(voteCount);

    const handleUpvote = () => {

        setVotes(votes + 1);

    };

    const handleDownvote = () => {

        setVotes(votes - 1);

    };

    return (
        <div className="vote-container">
            <button onClick={handleUpvote} className="upvote-button">Upvote</button>

            <span className="votes-count">{votes}</span>

            <button onClick={handleDownvote} className="downvote-button">Downvote</button>
        </div>
    );

};

export default Vote;