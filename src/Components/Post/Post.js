import React from "react";
import duotone1 from "../../Assets/Imgs/duotone1.png";

const Post = () => {
  return (
    <div>
      <img className="mx-auto sm:w-5/6 md:w-4/6" src={duotone1}></img>
      <h1 className="text-4xl py-10 font-black">Title of the Blog Post</h1>
      <p className="pb-5 italic w-4/6 md:w-2/6 mx-auto">
        It should have a button that shows an edit form for the post; this does
        not need to be routed differently (the url should stay the same). The
        edit form can look like the new-post form, above.
      </p>
    </div>
  );
};

export default Post;
