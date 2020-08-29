import React from "react";
import Story from "../Story";

import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        profileSrc="https://randomuser.me/api/portraits/men/36.jpg"
        name="Sonny Sangha"
      />

      <Story
        image="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        profileSrc="https://randomuser.me/api/portraits/women/34.jpg"
        name="Sara Mills"
      />

      <Story
        image="https://images.unsplash.com/photo-1527510324148-d503699fe7f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        profileSrc="https://randomuser.me/api/portraits/men/66.jpg"
        name="Rajesh Koothrapalli"
      />

      <Story
        image="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        profileSrc="https://randomuser.me/api/portraits/women/13.jpg"
        name="Lexie Grey"
      />

      <Story
        image="https://images.unsplash.com/photo-1519444793799-fb6e09f43bfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        profileSrc="https://randomuser.me/api/portraits/men/88.jpg"
        name="Rafeh Qazi"
      />
    </div>
  );
};

export default StoryReel;
