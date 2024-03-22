import React from 'react';
import backgroundImage from '../Pictures/main.png';
import '../App.css'

const About = () => {
     const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    position: 'absolute',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    boxSizing: 'content-box',
    margin: '-50px'
     };
    return (
        <div style={containerStyle}>
          <div className="BackgroundContainer">
            <div className='AboutContainer'>
              <p className="AboutNote">Приложение написанное Цурканом Яном в рамках дипломного проекта в 2023 году</p>
            </div>
          </div>
        </div>
    );
};

export default About;