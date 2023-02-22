import React from 'react'

const Home = () => {
  return (
    <section className='home_section'>
      <header>
        <img src="/Images/madhav_lic.jpg" alt="logo" />
        <a href="https://www.madhavinsurance.in" target="_blank" rel="noreferrer">
          <button>Visit Website</button></a>
      </header>

      <div className='main_container'>
        <h2>Download Madhav Insurance Applications</h2>

        <div className='card_container'>

          <div className='card'>
            <h2>Staff App</h2>
            <div className='button_container'>
              <a href="/Apk/Madhav_Staff_v8.apk" download>
                <button>Download (Recommended)</button>
              </a>

              <a href="/Apk/Madhav_Staff_v7.apk" download>
                <button>Download </button>
              </a>
            </div>
          </div>

          <div className='card'>
            <h2>Head App</h2>
            <div className='button_container'>
              <a href="/Apk/Madhav_Head_v8.apk" download>
                <button>Download (Recommended)</button>
              </a>

              <a href="/Apk/Madhav_Head_v7.apk" download>
                <button>Download </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home