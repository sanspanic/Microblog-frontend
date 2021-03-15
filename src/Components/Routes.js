import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import NewPost from "./Post/NewPost";
import Post from "./Post/Post";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/new">
        <NewPost />
      </Route>
      <Route exact path="/:postId">
        <Post />
      </Route>
    </Switch>
  );
};

export default Routes;
