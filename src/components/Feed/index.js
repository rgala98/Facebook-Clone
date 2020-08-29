import React, { useState, useEffect } from "react";

import "./Feed.css";
import StoryReel from "../StoryReel";
import MessageSender from "../MessageSender";
import Post from "../Post";
import db from "../../firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}

      {/* <Post
        key="2"
        profilePic="https://randomuser.me/api/portraits/men/36.jpg"
        message="WOwwwww this is amazing"
        timestamp="this is timestamp"
        username="rgala98"
        image="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      /> */}
    </div>
  );
};

export default Feed;
