import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { api } from "./AxiosService.js"


class PostsService{
  async likePost(post) {
    if(!AppState.posts){
      throw new Error('You must be logged in to like a post')
    }
    const res = await api.post('api/posts/' + post.id + '/like')
    const postIndex = AppState.posts.findIndex(p => p.id == post.id)
    AppState.posts.splice(postIndex, 1, res.data)
  }

  async getProfile(id){
    AppState.profile = null
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

    const newer = res.data.newer
    const older = res.data.older

    AppState.newerPage = newer
    AppState.olderPage = older
  }

  async createPost(postData){
    const res = await api.post('api/posts', postData)
    console.log('[CREATING POST]', res.data);
    let newPost = new Post(res.data)
    AppState.posts.unshift(newPost)
  }
}


export const postsService = new PostsService()