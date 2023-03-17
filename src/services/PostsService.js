import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { api } from "./AxiosService.js"


class PostsService{

  async getProfile(id){
    // AppState.profile = null
    const res = await api.get('api/profiles/' + id)
    AppState.profile = res.data
    console.log('[GETTING THE PROFILE]', AppState.profile);
  }

  async getProfileInfo(id) {
    // eslint-disable-next-line no-undef
    await Promise.allSettled([
      this.getProfile(id),
      this.getAllPosts('api/posts?creatorId=' + id)
    ])
  }

  async getAllPosts(url = 'api/posts') {
    AppState.posts = []
    const res = await api.get(url)
    console.log('[GETTING POSTS]', res.data);
    AppState.posts = res.data.posts.map(post => new Post(post))
    console.log(AppState.posts);

  //   const res = await api.get(url)
  //   const posts = res.data.posts
  //   const newer = res.data.newer
  //   const older = res.data.older
  //   AppState.posts = posts
  //   AppState.newerPage = newer
  //   AppState.olderPage = older
  }
}


export const postsService = new PostsService()