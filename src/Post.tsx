import React, { useState } from 'react';
import Vote from './Vote';
import PostCreator from './PostCreator';
import { PostType } from './types';

type PostProps = PostType & {

    onReplySubmit: (parentId: number, op: string, text: string) => void;

    depth: number;

};

const Post: React.FC<PostProps> = ({ id, text, op, voteCount, replies, onReplySubmit, depth }) => {

    const [showReply, setShowReply] = useState(false);

    const toggleReply = () => setShowReply(!showReply);

    return (
        <div className="post">

            <div className="post-content">
                <p>{text}</p>
                <p>By {op}</p>
                <Vote voteCount={voteCount} />
            </div>

            {depth < 2 && (
                <>
                    <button onClick={toggleReply}>
                        {showReply ? 'Cancel' : 'Reply'}
                    </button>

                    {showReply && (
                        <PostCreator
                            onSubmission={(op, text) => onReplySubmit(id, op, text)}
                        />
                    )}
                </>
            )}

            <div className="replies">
                {replies && replies.length > 0 && (
                    <div>
                        <h3>Replies</h3>
                        {replies.map((reply) => (
                            <Post
                                key={reply.id}
                                {...reply}
                                onReplySubmit={onReplySubmit}
                                depth={depth + 1}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Post;
