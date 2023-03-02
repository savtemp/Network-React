import { action, makeAutoObservable } from "mobx"
import { isValidProp } from "./utils/isValidProp.js"


class ObservableAppState {

  user = null
  /** @type {import('./models/Account.js').Account | null} */
  account = null


  /** @type {import('./models/Post.js').Post[]} */
  posts = []
  post = null

  // NOTE add Profile model 
  activeProfile = null
  profilePosts = []


  // NOTE add Ads model 
  ads = []

  url = ''

  newerPage = null
  olderPage = null
  page = ''
  totalPages = ''


  constructor() {
    makeAutoObservable(this)
  }

}

// eslint-disable-next-line no-undef
export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    action(() => {
      target[prop] = value
    })()
    return true
  }
})