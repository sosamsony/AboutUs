import logo from './logo.svg';
import './App.css';
import img1 from './images/caricature-dimitri.svg';
import img2 from './images/caricature-mathilde.svg';
import img3 from './images/caricature-quentin_b.svg';
import React, {useState, useEffect} from 'react';
function App() {
  useEffect(()=>{
    setVisible(true);
  })
  const [visible,setVisible] = useState(false);
  return (
    <div className="App" >
      <div id="pageTitle" >
          <p>ABOUT SOSARENA</p>
      </div>
      <div className="columns" className={visible?'fadeIn':'fadeOut'}>
        <div id="team">
          <div>
            <p id="teamTitle">SAMSON SANYAOLU</p>
            <p id="teamPos">CEO</p>
          </div>
          <img src={img1} alt="CEO" />
        </div>
        <div id="team">
          <div>
            <p id="teamTitle">ESTHER SANYAOLU</p>
            <p id="teamPos">BDM</p>
          </div>
          <img src={img2} alt="BDM" />
        </div>
        <div id="team">
          <div>
            <p id="teamTitle">ELIZABETH AKINSOLA</p>
            <p id="teamPos">SMM</p>
          </div>
          <img src={img3} alt="SMM" />
        </div>
      </div>
      <div className="columns" id="middleColumn" className={visible?'fadeIn':'fadeOut'}>
        <div id="pageTitle1">
          <p>ABOUT SOSARENA</p>
        </div>
        <div id="pageData">
          <p>Sosarena is my personal brand, a digital brand with one stop solution for digital creation, learning and development. Pioneered to deliver bespoke business and community support services that empower business entity to grow their creative passion and exceed corporate goals. We also deliver professional masterclass trainings to empower young inventors to create their digital world with a direct partnership with Identity Embassy for outstanding capabilities and performance.
</p>
          <p>We provide scalable and cost-effective infrastructure services from around the world, all connected to a global and dedicated network.</p>
          <p>We have a solid platform that caters for the services to be delivered accurately and sustainably.</p>
        </div>
      </div>
      <div className="columns" id="rightColumn" className={visible?'fadeIn':'fadeOut'}>
        <div id="team">
          <img id="imgRight" src={img1} alt="CEO" />
          <div>
            <p id="teamTitle">SAMSON SANYAOLU</p>
            <p id="teamPos">CEO</p>
          </div>
        </div>
        <div id="team">
          <img id="imgRight" src={img2} alt="BDM" />
          <div>
            <p id="teamTitle">ESTHER SANYAOLU</p>
            <p id="teamPos">BDM</p>
          </div>
        </div>
        <div id="team" >
          <img id="imgRight" src={img3} alt="SMM" />
          <div>
            <p id="teamTitle">ELIZABETH AKINSOLA</p>
            <p id="teamPos">SMM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
