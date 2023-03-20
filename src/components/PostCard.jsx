import { observer } from "mobx-react-lite";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../models/Post.js";
import "./PostCard.scss"

/** @param {{post:Post}} props */
function PostCard({post}){

  return(
    <div className="PostCard card">
      <div className="d-flex m-1 py-2">
        <Link to={'/profiles/' + post.creator.id}>
          <img className="profileImg rounded-circle" src={post.creator.picture} alt="" />
        </Link>
        <p className="m-0 pt-2 px-2">{post.creator.name}</p>
      </div>
      <div className="">
        <p className="mx-2">{post.body}</p>
        <img className="postImg" src={post.imgUrl} alt="" />
      </div>
      <div>
        <p className="m-0 text-end p-2">❤️</p>
        <p className="m-0 text-end p-2">💔</p>
      </div>
    </div>
  )

}

PostCard.propTypes = {
  post: PropTypes.instanceOf(Post)
}

export default observer(PostCard)