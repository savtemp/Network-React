import { observer } from 'mobx-react-lite';
import React from 'react';
import { AppState } from '../AppState.js';
import { postsService } from '../services/PostsService.js';
import { BindEditable } from '../utils/FormHandler.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

function PostForm() {

  const editable = {...AppState.posts}
  const bindEditable = BindEditable(editable)

  async function handleSubmit(){
    try {
      window.event?.preventDefault()
      logger.log({editable})
      await postsService.createPost(editable)
    } catch (error) {
      Pop.error(error)
    }
  }

  return (
    <div className="PostForm">
      <form onSubmit={handleSubmit}>

      </form>
    </div>
  )

}
export default observer(PostForm)