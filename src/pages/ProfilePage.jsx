import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppState } from '../AppState.js';
import ProfileCard from '../components/ProfileCard.jsx';

// import PostCard from '../components/PostCard.jsx';

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

  // async function getProfilePosts(){
  //   try {
  //     await postsService.getProfilePosts(id)
  //   } catch (error) {
  //     Pop.error(error.message)
  //   }
  // }

  useEffect(() => {
    getProfileInfo()
  }, [id])


  if(!AppState.profile){
    return(<div>Loading ...</div>)
  }



  return (

    <div className="ProfilePage container-fluid">
      <div className='row'>
        <div className="col-md-8">
          {/* STUB a profileCard will go here */}
          <ProfileCard />
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