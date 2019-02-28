import React from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './FriendsList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
     
        name: '',
        age: '',
        email: ''
      
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
  
  this.setState({[e.target.name]: e.target.value})
}

handleNewFriend = (e) => {
 e.preventDefault();
  const friend = {
    name: this.state.name,
    age: this.state.age,
    email: this.state.email
  }
  axios.post('http://localhost:5000/friends', friend)
  .then(response => {
    console.log(response)
  this.setState({ 
    friend: response.data,
    name: '',
    age: '',
    email: ''
    
  })
  })
  .catch(err => console.log(err))
}

  render() {
    return (
      <div className="App">
      
      <form>
            <input 
      type='text' 
      name='name'
      placeholder='lonely? add a friend name' 
      onChange={this.handleNameChange} 
      value={this.state.name} 
      />
      
      <input 
      type='text' 
      name='age'
      placeholder='age please' 
      onChange={this.handleNameChange} 
      value={this.state.age} 
      />
      
      <input 
      type='text' 
      name='email'
      placeholder='email' 
      onChange={this.handleNameChange} 
      value={this.state.email} 
      />
     </form>
        <button onClick={this.handleNewFriend}>ADD FRIENDZ</button>
            
            <FriendsList friends={this.state.friends}/>
        
      </div>
    );
  }
}

export default App;
