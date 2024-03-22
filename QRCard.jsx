import React from 'react';
import QRCode from 'react-qr-code';


class QRCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = { inputValue: '', showQRCode: false };
      this.state = { inputValue1: ''};
    }
  
    handleChange = (event) => {
      this.setState({ inputValue1: event.target.value });
      this.setState({ inputValue2: event.target.value });
      this.setState({ inputValue3: event.target.value });
      this.setState({ inputValue4: event.target.value });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({ showQRCode: true });
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <p className='contentQr'>Name</p>
              <input type="text" value={this.state.inputValue1} onChange={this.handleChange} />
              <p className='contentQr' value={this.state.inputValue1}>{this.state.inputValue1}</p>
              <p className='contentQr'>Surname</p>
              <input type="text" value={this.state.inputValue2} onChange={this.handleChange} />
              <p className='contentQr' value={this.state.inputValue2}>{this.state.inputValue2}</p>
              <p className='contentQr'>Company</p>
              <input type="text" value={this.state.inputValue3} onChange={this.handleChange} />
              <p className='contentQr' value={this.state.inputValue3}>{this.state.inputValue3}</p>
              <p className='contentQr'>Function</p>
              <input type="text" value={this.state.inputValue4} onChange={this.handleChange} />
              <p className='contentQr' value={this.state.inputValue4}>{this.state.inputValue4}</p>
            </label>
            <button type="submit" className='contentQrButton'>Generate QR Code</button>
          </form>
          {this.state.showQRCode &&
            <QRCode fgColor={"#00f3dc"} value={this.state.inputValue} className="QrArea"/>
          }
        </div>
      );
    }
  }

export default QRCard;