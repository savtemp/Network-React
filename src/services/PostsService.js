import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { api } from "./AxiosService.js"


class PostsService{
  getProfilePosts(id) {
    throw new Error('Method not implemented.');
  }

  async getAllPosts() {
    AppState.posts = []
    const res = await api.get('api/posts')
    console.log('[GETTING CARS]', res.data);
    AppState.posts = res.data.posts.map(post => new Post(post))
    console.log(AppState.posts);
  }

}


export const postsService = new PostsService()