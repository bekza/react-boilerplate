import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    username: "Bekzatik"
  }

  usernameChangeHandler = (newName) => {
    this.setState({username: newName.target.value})
  }

  render() {
    return (
      <div className="App">
        <p> User Input </p>
        <UserInput 
          name={this.state.username}
          usernameChange={this.usernameChangeHandler.bind(this)}/>
        <p>User Output</p>
        <UserOutput userName={this.state.username}/>
      </div>
    );
  }
}

export default App;
