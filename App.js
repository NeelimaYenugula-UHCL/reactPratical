import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	
	constructor()
	{
		super();
		this.state = {value:'',selectedLang:'1'}
	}
		handleChange = (e) =>{ 
    this.setState({value: e.target.value});
  }
  handleDropdownChange = (e) =>{ 
    this.setState({selectedLang: e.target.value});
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
        		  
          <textarea
		  style={{height:40, width:1000}}
value={this.state.value} onChange={this.handleChange}		  
		  />
		  <br/>
		  <select style={{width:100, height:25}} value={this.state.selectedLang} onChange={this.handleDropdownChange}>
		  <option value="1">English</option>
		  <option value="2">Spanish</option>
		  </select>
		  <br/>
		  
		  <div>{this.state.value}</div>
		  <div>{this.state.selectedLang}</div>
        </header>
      </div>
    );
  }
}

export default App;
