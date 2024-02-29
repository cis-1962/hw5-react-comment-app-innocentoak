import React from 'react';
import Vote from './Vote';
import { PostType } from './types';


type ReplyProps = {

    reply: PostType;

    onReplySubmit: (parentId: number, op: string, text: string) => void;

};

const Reply: React.FC<ReplyProps> = ({ reply, onReplySubmit }) => {

    return (
        <div className="reply">

            <p>{reply.text}</p>

            <p>By {reply.op}</p>

            <Vote voteCount={reply.voteCount} />

            {reply.replies && reply.replies.length > 0 && (

                reply.replies.map(subReply => (
                    <Reply key={subReply.id} reply={subReply} onReplySubmit={onReplySubmit} />
                ))

            )}

        </div>
    );

};

export default Reply;
