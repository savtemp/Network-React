import { observer } from 'mobx-react-lite';
import React from 'react';
import { AppState } from '../AppState.js';

function profileCard() {

  const activeProfile = AppState.activeProfile

  const socialIcons = (
    <div className='d-flex align-items-center gap-3 my-2 justify-content-center'>
      <a className={!activeProfile.linkedin ? 'd-none' : 'btn btn-outline-dark'} href={activeProfile.linkedIn} rel="noreferrer">
        <i className="mdi mdi-linkedin"></i>
      </a>
      <a className={!activeProfile.github ? 'd-none' : 'btn btn-outline-dark'} href={activeProfile.github} rel="noreferrer">
        <i className="mdi mdi-github"></i>
      </a>
      <a className={!activeProfile.resume ? 'd-none' : 'btn btn-outline-dark'} href={activeProfile.resume} rel="noreferrer">
        <i className="mdi mdi-card-account-details"></i>
      </a>
    </div>
  )

  return !activeProfile ? (<div>loading...</div>) : (
    <div className='ProfileCard'>
      <div className='card'>
        <div className="card-body p-lg-5 text-center">
          <img src={activeProfile.picture}
            alt={activeProfile.name}
            className='rounded-circle profile-img'
            height="200" width={200} />
          <p className="display-6 my-2">{activeProfile.name}</p>
          {socialIcons}
          <kbd>
            {activeProfile.class} - {activeProfile.graduated ? '🦧' : ''}
          </kbd>
        </div>
      </div>
    </div>
  )

}
export default observer(profileCard)