import React from "react";
import CommentList from "./components/CommentList";
import EmptyList from "./components/EmptyList";

const App = ({ comments }) => {
  // You should reformat comments based on requirements
  if (comments.length === 0) {
    return <EmptyList />;
  }
  return <CommentList comments={comments} />;
};

export default App;
