import { observer } from 'mobx-react-lite';
import React from 'react';

function ProfilePage() {

  return (

    <div className="profilePage">
      <p>This is the profile page</p>
    </div>
  )

}
export default observer(ProfilePage)