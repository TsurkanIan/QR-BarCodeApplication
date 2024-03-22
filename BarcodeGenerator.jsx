import React from 'react';
import Barcode from 'react-barcode';
import './App.css';

class BarcodeGenerator extends React.Component {
    constructor(props){
        super(props);
        this.state = { inputValue: '', ShowBarCode: false };
    }

    
    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
      }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ ShowBarCode: true });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p className='contentQr'>Enter numbers:</p>
                        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                    </label>
                    <button type="submit" className='contentQrButton'>Generate Bar Code</button>
                </form>
                {this.state.ShowBarCode &&
                    <Barcode value={this.state.inputValue} className="QrArea"/>
                }
            </div>
        );
    }
}


export default BarcodeGenerator;