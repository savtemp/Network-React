import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AppState } from "../AppState.js";
import PostCard from "../components/PostCard.jsx";
import { accountService } from "../services/AccountService.js";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import "./HomePage.scss"

function HomePage() {

  async function getAllPosts(){
    try {
      await postsService.getAllPosts()
    } catch (error) {
      Pop.error(error.message)
    }
  }

  let posts = (AppState.posts.map(post => {
    return (
      <div className="my-1" key={post.id}>
        {/* STUB POST CARD GOES HERE */}
        <PostCard post={post} />
      </div>
    )
  }))

  async function getAccount(){
    try {
      await accountService.getAccount()
    } catch (error) {
      Pop.error(error.message)
    }
  }

  let account = (AppState.account)

  useEffect(() => {
    getAllPosts()
    getAccount()
  }, [])

  return (
    <section className="home-page row p-2">

          <div className="col-md-4 card profileInfoCard">
            <div className="row">
              <Link to={'account'}>
                <img className="img-fluid rounded-circle p-2" src={account?.picture} alt="" />
              </Link>
              <p className="m-0 py-2 text-center">{account?.name}</p>
            </div>
          </div>

          <div className="col-md-8">
            {posts}
          </div>



    </section>
  )
}
export default observer(HomePage)