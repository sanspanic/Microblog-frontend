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
}

export default BlogApi;
