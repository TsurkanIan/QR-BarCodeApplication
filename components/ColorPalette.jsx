import React, { useState } from 'react';
import QRCodeGenerator from '../QRCodeGenerator';
import './navbar/Menu.css';
const ColorPalette = () => {

  // color
  const [selectedColor, setSelectedColor] = useState(null);
  const colors = [
    '#ff0000','#000000','#4c4c4c','#b4005a','#86b31a','#ad78ff','#c200ff','#cccccc',
    '#00FF00', 
    '#0000FF', 
    '#FFFF00', 
    '#FF00FF',
    '#00FFFF', 
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  //level
  const [selectedLevel, setSelectedLevel] = useState('L');
  const levels = [
    'L',
    'M',
    'Q',
    'H'
  ];

  const handleColorClick1 = (Ilevel) => {
    setSelectedLevel(Ilevel);
  };
  return (
    <div>
        <QRCodeGenerator color={selectedColor} Ilevel={selectedLevel}/>
        <div className='GeneralBottom'>
        <div  className='GeneralPersonalization'>
        <p style={{color:'#ffffff'}}><strong>Выберите цвет:</strong></p>
        <div style={{ display: 'flex' }}>
          {colors.map((color) => (
            <div className='hoverColor'
              key={color}
              style={{
                width: '25px',
                height: '25px',
                margin: '2px',
                backgroundColor: color,
                border: color === selectedColor ? '2px solid black' : 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                boxShadow: `0 0 10px 2px ${color}`
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
        {selectedColor && <p style={{color:'#ffffff'}}>Выбранный цвет: {selectedColor}</p>}
      </div>
      <div  className='GeneralPersonalization'>
      <p style={{color:'#ffffff'}}><strong>Выберите уровень резервации данных:</strong></p>
      <div style={{ display: 'flex' }}>
        {levels.map((Ilevel) => (
          <div className=".ChooseLevel"
            key={Ilevel}
            style={{
              cursor: 'pointer'
            }}
            onClick={() => handleColorClick1(Ilevel)}
          ><p className='pIlevel'>{Ilevel}</p></div>
        ))}
      </div>
      {selectedLevel && <p style={{color:'#ffffff'}}>Выбранный уровень резервации данных: <strong>"{selectedLevel}"</strong></p>}
      </div>
      </div>
    </div>
  );
};

export default ColorPalette;