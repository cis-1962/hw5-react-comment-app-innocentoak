import React, { useState } from 'react';

type PostCreatorProps = {

    onSubmission: (op: string, text: string, postId?: number) => void;

    postId?: number;

};

const PostCreator: React.FC<PostCreatorProps> = ({ onSubmission, postId }) => {

    const [op, setOp] = useState('');

    const [text, setText] = useState('');

    const [error, setError] = useState('');

    const handleSubmssion = (e: React.FormEvent) => {

        e.preventDefault();

        if (!op || !text) {

            setError('original poster and text are required');

            return;

        }

        onSubmission(op, text, postId);

        setOp('');
        setText('');
        setError('');

    };

    return (

        <form className="post-creator" onSubmit={handleSubmssion}>
            {error && <div className='error'>{error}</div>}

            <div>
                <label htmlFor="op">Name:</label>
                <input
                    type="text"
                    id="op"
                    value={op}
                    onChange={(e) => setOp(e.target.value)}
                    required />
            </div>

            <div>
                <label htmlFor="text">Text:</label>
                <textarea
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required>
                </textarea>
            </div>

            <button type="submit">Post</button>

        </form>

    );

};

export default PostCreator;