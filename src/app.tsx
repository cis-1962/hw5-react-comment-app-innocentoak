import React, { useState } from 'react';
import './app.css';
import Post from './Post';
import PostCreator from './PostCreator';
import { PostType } from './types';

function App() {

  const [posts, setPosts] = useState<PostType[]>([]);

  const handleNewPost = (op: string, text: string) => {

    const newPost: PostType = {
      id: Date.now(),
      text: text,
      op: op,
      voteCount: 0,
      replies: [],
    };

    setPosts([...posts, newPost]);

  };

  const addReply = (parentId: number, op: string, text: string) => {

    const addReplyToPost = (posts, parentId, reply) => {

      return posts.map(post => {

        if (post.id === parentId) {

          return { ...post, replies: [...(post.replies || []), reply] };

        } else if (post.replies) {

          return { ...post, replies: addReplyToPost(post.replies, parentId, reply) };

        }

        return post;

      });

    };

    const newReply = { id: Date.now(), text, op, voteCount: 0, replies: [] };

    const updatedPosts = addReplyToPost(posts, parentId, newReply);

    setPosts(updatedPosts);

  };

  return (
    <div className="app">

      <h1>CIS 1962 Comment Forum</h1>

      <PostCreator onSubmission={handleNewPost} />

      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          text={post.text}
          op={post.op}
          voteCount={post.voteCount}
          replies={post.replies}
          onReplySubmit={addReply}
          depth={0}
        />
      ))}

    </div>
  );
}

export default App;
