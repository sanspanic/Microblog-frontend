import React, { useState, useEffect, useContext } from "react";
import duotone8 from "../../Assets/Imgs/duotone8.png";
import { PenNib, Trash } from "phosphor-react";
import CommentForm from "./CommentForm";
import CommentSection from "./CommentSection";
import Form from "./Form";
import BlogApi from "../../api";
import { useParams, useHistory } from "react-router-dom";
import VotingThumbs from "../Homepage/VotingThumbs";
import PostsContext from "../../Context/PostsContext";

const Post = () => {
  const history = useHistory();
  const { postId } = useParams();
  const [post, setPost] = useState({
    id: "",
    title: "",
    description: "",
    body: "",
    votes: "",
    comments: [],
  });
  const [comments, setComments] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const { posts, setPosts } = useContext(PostsContext);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };
  const removeComment = async (comment, commentId) => {
    try {
      const res = await BlogApi.removeComment(postId, commentId);
      //console.log(res);
      setComments(comments.filter((c) => c !== comment));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getPost = async (id) => {
      const res = await BlogApi.getPostById(id);
      console.log("GOT POST BY ID ", res);
      setPost(res);
      //console.log(res.comments);
      setComments(res.comments);
      //set post and comments
    };
    getPost(postId);
  }, [postId, posts]);

  const handleDelete = async () => {
    try {
      const res = await BlogApi.deletePost(postId);
      setPosts(posts.filter((p) => p.id != postId));
      //console.log(res);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <img
          alt="book"
          className="mx-auto sm:w-5/6 md:w-4/6"
          src={duotone8}
        ></img>
        <h1 className="text-4xl py-10 font-black">{post.title}</h1>
        <p className="pb-5 italic w-4/6 md:w-2/6 mx-auto">{post.description}</p>
      </div>
      {!isEditing && (
        <div className="flex justify-evenly">
          <button
            onClick={() => setIsEditing(true)}
            className="text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-indigo-800 focus:ring focus:outline-none border-0 py-1 px-3 mb-4"
          >
            Edit <PenNib className="inline" size={24} />
          </button>
          <div className="flex flex-col items-center">
            <VotingThumbs
              id={postId}
              title={post.title}
              description={post.description}
              votes={post.votes}
            />
            <div className="text-sm text-gray-500">Upvotes: {post.votes}</div>
          </div>
          <button
            onClick={handleDelete}
            className="text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-red-800 focus:ring focus:outline-none border-0 py-1 px-3 mb-4"
          >
            Delete <Trash className="inline" size={24} />
          </button>
        </div>
      )}

      <div className="">
        {isEditing && (
          <Form
            title={post.title}
            description={post.description}
            body={post.body}
            postId={postId}
            setIsEditing={setIsEditing}
            setPost={setPost}
          />
        )}
        {!isEditing && (
          <>
            <p className="p-5 text-center max-w-prose border border-gray-300 mx-auto rounded mb-10">
              {post.body}
            </p>
            <CommentSection comments={comments} removeComment={removeComment} />
            <CommentForm addComment={addComment} postId={postId} />
          </>
        )}
      </div>
    </>
  );
};

export default Post;
