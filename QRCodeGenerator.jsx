import QRCode from 'react-qr-code';
import './App.css';
import React, { useState } from 'react';

function QRCodeGenerator(QrData) {
  const [inputValue, setInputValue, ] = useState('');
  const [inputPicture, setInputPicture, ] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const newColor = QrData.color;
  const inputLevel = QrData.Ilevel;
  console.log(QrData);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setInputPicture(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowQRCode(true);
  };

  const [value1, setValue1] = useState(256);

  const handleChange3 = (event) => {
    setValue1(parseInt(event.target.value));
  };
    const [isChecked, setIsChecked] = useState(false);
    const handleChange4 = () => {
      setIsChecked(!isChecked);
    }

  return (
    
    <div>
      <input
        type="range"
        min={128}
        max={512}
        value1={value1}
        onChange={handleChange3}
      />
      <p>Selected value: {value1}</p>
      <form onSubmit={handleSubmit}>
        <label>
          <p className='contentQr'>Введите данные (до 7096 символов):</p>
          <input type="text" value={inputValue} onChange={handleChange} />
          <p className='contentQr'>Вставьте ссылку на картинку (опицонально)</p>
          <input type="text" value={inputPicture} onChange={handleChange2} />
        </label>
        <label>
          <input type="checkbox" checked={isChecked} onChange={handleChange4} />
          <span>{isChecked ? 'Включено' : 'Вложить изображение в QR-код'}</span>
        </label>
        <button type="submit" className='contentQrButton'>Сгенерировать QR-код</button>
      </form>
      <div style={{ position: 'relative' }}>
      <img
        src={inputPicture}
        style={{
          display: !isChecked && 'none',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: value1/3.75,
          height: value1/3.75,
          border: isChecked && `${value1/30}px solid #ffffff`
          
        }}
      />
      
      {showQRCode && <QRCode 
        size={value1}
        level={inputLevel} 
        fgColor={newColor} 
        value={inputValue}
      className="QrArea"/>}
      </div>
    </div>
  );
}

export default QRCodeGenerator;