import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import './assets/scss/main.scss'
import Pop from './utils/Pop.js'
import { adsService } from './services/AdsService.js'
import { AppState } from './AppState.js'

// FIXME ads work when I change something in the code and then if I refresh the page, they go away (this is because the ad in the appstate isn't reactive)
// NOTE to fix this make a component that is observable (adBar) and throw in the adComponent on it and then add the adBar to the app.vue
export function App() {

  async function getAds(){
    try {
      await adsService.getAds()
    } catch (error) {
      Pop.error(error.message)
    }
  }

  let ads = (AppState.ads.map(ad => {
    return (
      <div key={ad.title}>
        <img className='img-fluid' src={ad.tall} alt="" />
      </div>
    )
  }))


  useEffect(() => {
    getAds()
  }, [])

  return (
    <div className="App" id="app">
      <header>
        <Navbar />
      </header>

      <main>

        <div className='container-fluid'>
          <Outlet />
        </div>

        {/* <div className='container-fluid ads'>
          {ads}
        </div> */}

      </main>

      {/* <footer className="bg-dark text-light text-center p-3 ">
        Made with 💖 by CodeWorks
      </footer> */}

    </div>
  )
}
