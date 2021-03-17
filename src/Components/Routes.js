import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import NewPost from "./Post/NewPost";
import Post from "./Post/Post";
import Modal from "./Homepage/Modal";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/new">
        <NewPost />
      </Route>
      <Route exact path="/oops">
        <Modal />
      </Route>
      <Route exact path="/:postId">
        <Post />
      </Route>
    </Switch>
  );
};

export default Routes;
