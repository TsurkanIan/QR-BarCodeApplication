import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Barcode from './Pages/Barcode';
import Qrcode from './Pages/Qrcode';
import './App.css';
import Menu from './components/navbar/Menu';
import './components/navbar/Menu.css';
import { useState } from 'react';
import Card from './Pages/Card';
import imageSrc from './Pictures/qr-code.png';
function App() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [{value:"Генератор QR", href: 'QR-Gerenator', icon: "qr_code_2" },{value:"Генератор BarCode", href: 'BarCode', icon: "barcode" },{value:"О приложении", href: '*', icon: "info" }]
  
  return (
    <div className="app">
        <BrowserRouter>
        <nav>
          <div className="burger-btn" onClick={() => setMenuActive(!menuActive)} style={{margin: ' 0 5% 0 1%'}}>
              <span/>
              
          </div>
          <p style={{margin: ' 0 1% 0 1%'}}><strong>QR/Bar Code Generator</strong></p>
          <img style={{margin: ' 0 1% 0 1%', Color: 'white'}} src={imageSrc}></img>
        </nav>
        <main>
          <div class="mainContainer">
          <Routes>
                <Route path='*' element={<div className=".divContent"><About /></div>}/>
                <Route path='QR-Gerenator' element={<div className=".divContent"><Qrcode /></div>}/>
                <Route path='BarCode' element={<div className=".divContent"><Barcode /></div>}/>
                <Route path='Card' element={<div className=".divContent"><Card/></div>}/>
          </Routes>
          </div>
        </main>
          <Menu active={menuActive} setActive={setMenuActive} header="Меню" items={items}/>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
