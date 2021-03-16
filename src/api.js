import axios from "axios";
const BASE_URL = "http://localhost:5000/api";

//static API class tying together methods used to communicate with API

class BlogApi {
  static async request(endpoint, data = {}, method = "get") {
    const url = `${BASE_URL}/${endpoint}`;
    const params = method === "post" ? data : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      /*       let message = err.response.data;
      throw message; */
    }
  }

  //individual API routes

  // [GET] /posts -> gets all posts saved in database
  static async getAllPosts() {
    let res = await this.request(`posts`);
    return res;
  }

  // [GET] /posts/:id -> gets one post by id
  static async getPostById(id) {
    let res = await this.request(`posts/${id}`);
    return res;
  }
  // [POST] /posts -> add new post to database
  static async addNewPost(data) {
    let res = await this.request(`posts`, data, "post");
    return res;
  }
  // [PUT] /posts/:id -> update existing post
  static async updatePost(data, id) {
    let res = await this.request(`posts/${id}`, data, "put");
    return res;
  }
  // [DELETE] /posts/:id -> delete existing post
  static async deletePost(id) {
    let res = await this.request(`posts/${id}`, {}, "delete");
    return res;
  }
}

export default BlogApi;
