import React from 'react';
import './App.css';
import shopxImg1 from "../src/assets/shopx1.png";


function App() {
  return (
    <div class="app">

      <div className="personal-info">
        <div className="name-text">ALI MOHAMED EMAD</div>
        <div className="profile-description-text">
          I am a really good developer please hire me
        </div>
      </div>

      <div className="projects">
        <div className="project-title">ShopX</div>
        <img className="app-img-left" src={shopxImg1} alt="Logo" />
        <img className="app-img-right" src={shopxImg1} alt="Logo" />
        <div className="project-subtitle">Personal Project</div>

        <div className="project-title">Cantina</div>
        <img className="app-img-left" src={shopxImg1} alt="Logo" />
        <img className="app-img-right" src={shopxImg1} alt="Logo" />
        <div className="project-subtitle">Personal Project</div>

        <div className="project-title">Chicken11</div>
        <img className="app-img-left" src={shopxImg1} alt="Logo" />
        <img className="app-img-right" src={shopxImg1} alt="Logo" />
        <div className="project-subtitle">Personal Project</div>
      </div>



    </div>
  );
}

export default App;
