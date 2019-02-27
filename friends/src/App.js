import React from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './FriendsList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: ''
    }
  }

componentDidMount() {
  axios.get('http://localhost:5000/friends').then(response => {
    console.log(response);
    this.setState({friends: response.data})
  })
  .catch(err => {
    console.log(err)
  })
}

handleNameChange = e => {
  this.setState({newFriend: e.target.value})
}

handleNewFriend = () => {
  const name = {name: this.state.newFriend}
  axios.post('http://localhost:5000/friends', name)
  .then(response => {
    console.log(response)
  this.setState({ 
    friends: response.data,
    
  })
  })
  .catch(err => console.log(err))
}

  render() {
    return (
      <div className="App">
      <FriendsList friends={this.state.friends}/>
      <input 
      type='text' 
      placeholder='lonely? add a friend' 
      onChange={this.handleNameChange} 
      value={this.state.friend} 
      />
        <button onClick={this.handleNewFriend}>ADD FRIENDZ</button>
        
      </div>
    );
  }
}

export default App;
