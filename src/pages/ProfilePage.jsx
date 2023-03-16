import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppState } from '../AppState.js';

// import PostCard from '../components/PostCard.jsx';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';

function ProfilePage() {

  const {id} = useParams()

  let profileCard = AppState.activeProfile

  async function getProfilePosts(){
    try {
      await postsService.getProfilePosts(id)
    } catch (error) {
      Pop.error(error.message)
    }
  }

  if(!AppState.activeProfile){
    return(<div>Loading ...</div>)
  }

  useEffect(() => {
    getProfilePosts()
  }, [id])

  return (

    <div className="profilePage container-fluid">
      <div className='row'>
        <div className="col-md-8">
          {/* STUB a profileCard will go here */}
          {profileCard}
        </div>
      </div>
      <div className="row">
        {/* STUB postCard will go here */}
        {/* <PostCard /> */}
      </div>
    </div>
  )

}
export default observer(ProfilePage)