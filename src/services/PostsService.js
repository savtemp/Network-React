import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"


class PostsService{

  async getActiveProfile(id){
    AppState.activeProfile = null
    const res = await api.get('api/profiles/' + id)
    AppState.activeProfile = res.data
  }

  async getProfilePosts(id) {
    // eslint-disable-next-line no-undef
    await Promise.allSettled([
      this.getActiveProfile(id),
      this.getAllPosts('api/posts?creatorId =' + id)
    ])
  }

  async getAllPosts(url = 'api/posts') {
    // AppState.posts = []
    // const res = await api.get('api/posts')
    // console.log('[GETTING CARS]', res.data);
    // AppState.posts = res.data.posts.map(post => new Post(post))
    // console.log(AppState.posts);

    const res = await api.get('url')
    const posts = res.data.posts
    const newer = res.data.newer
    const older = res.data.older
    AppState.posts = posts
    AppState.newerPage = newer
    AppState.olderPage = older
  }
}


export const postsService = new PostsService()