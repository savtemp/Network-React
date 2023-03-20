import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppState } from '../AppState.js';
import PostCard from '../components/PostCard.jsx';
import ProfileCard from '../components/ProfileCard.jsx';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';

function ProfilePage() {

  const {id} = useParams()


  async function getProfileInfo(){
    try {
      await postsService.getProfileInfo(id)
    } catch (error) {
      Pop.error(error)
    }
  }

  async function getProfile(){
    try {
      await postsService.getProfile(id)
    } catch (error) {
      Pop.error(error)
    }
  }

  async function getProfilePosts(){
    try {
      await postsService.getAllPosts(id)
    } catch (error) {
      Pop.error(error.message)
    }
  }

  useEffect(() => {
    getProfileInfo()
    getProfile()
    getProfilePosts()
  }, [id])

  const profile = AppState.profile

  if(!AppState.profile){
    return(<div>Loading ...</div>)
  }

  const posts = (AppState.posts.map(post => {
    return (
      <div className="my-1" key={post.id}>
        {/* STUB POST CARD GOES HERE */}
        <PostCard post={post} />
      </div>
    )
  }))


  return (

    <div className="ProfilePage container-fluid">
      <div className='row justify-content-center'>
        <div className="col-md-8">
          {/* STUB a profileCard will go here */}
          <ProfileCard  key={profile} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
        {posts}
        </div>
      </div>
    </div>
  )

}
export default observer(ProfilePage)