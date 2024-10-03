import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  // to handle state of toggle button. When clicked, car changes and related color
  const [toggled, setToggled] = useState(false);

  const SpeedDisplay = ({ speed }) => (
    <div className={`SpeedDisplay speed-above-100' ${speed > 100 ? 'speed-above-100' : 'speed-under-100'}`}>
      <div className='SpeedDisplay-center'>
        <div style={{ fontWeight: 'bold', fontSize: '40px', position: 'center-fixed' }}>
          {speed}
        </div>
        <div style={{ fontSize: '19px', marginTop: '-5px' }}>
          km/h
        </div>
      </div>
    </div>
  );

  // useState and useEffect hooks to manage and update the state of cars speeds
  const [carOneSpeed, setCarOneSpeed] = useState(0);
  const [carTwoSpeed, setCarTwoSpeed] = useState(0);

  // new speed till max 200 km/h is generated randomly every 2 seconds 
  useEffect(() => {
    const interval = setInterval(() => {
      setCarOneSpeed(Math.floor(Math.random() * 200));
      setCarTwoSpeed(Math.floor(Math.random() * 200));
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="mainDiv">
      {/*conditional rendering to change color of car icon when toggle button is clicked to change car*/} 
      <div>
        {toggled ?
          <i className="fa-solid fa-car fa-xl" style={{ color: "#FFD43B" }}></i> :
          <i class="fa-solid fa-car fa-xl" style={{ color: "#1e69eb" }}></i>}
      </div>

      <div className='rowContainer'>
        <div className='column font-bold' style={{ color: "#1e69eb" }}>1</div>
        <div className='column'>
          <button
            className={`toggle-btn ${toggled ? "toggled" : ""}`}
            onClick={() => setToggled(!toggled)}>
            <div className='thumb'></div>
          </button>
        </div>
        <div className='column' style={{ color: "#FFD43B" }}>2</div>
      </div>
{/*conditional rendering to change from car1 to car2*/} 
      <div className="flex space-x-8">
        {toggled ? <SpeedDisplay carName="Car 2" speed={carOneSpeed} /> :
          <SpeedDisplay carName="Car 1" speed={carTwoSpeed} />}
        <div style={{ marginTop: "10px" }}>Current speed</div>
      </div>
{/*conditional rendering to change color of footer when toggle button is clicked to change car*/} 
      <div >
        {toggled ? <div className='footer' style={{ backgroundColor: "#FFD43B" }} /> :
          <div className='footer' style={{ backgroundColor: "#1e69eb" }} />}
      </div>
    </div>
  );
}

export default App;
