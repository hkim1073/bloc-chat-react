import React, {Component} from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

const firebaseConfig = {
      apiKey: "AIzaSyC_DOtuAd0eNTIV5k3I2gDN6-QPCn_u6LU",
      authDomain: "bloc-chat-react-d1331.firebaseapp.com",
      databaseURL: "https://bloc-chat-react-d1331.firebaseio.com",
      projectId: "bloc-chat-react-d1331",
      storageBucket: "",
      messagingSenderId: "161676084102",
      appId: "1:161676084102:web:79274380ce503f04"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends Component {
  state = {
    activeRoom: '',
    user: {},
  }

  updateActiveRoom(id) {
    this.setState({
      activeRoom: id,
    })
  }

  setUser(user) {
    this.setState({
      user: user || {},
    });
  }

  render () {
    return (
      <div className= "App">
        <header>
        </header>
        <main>
          <RoomList firebase={firebase} updateActiveRoom={(id) => this.updateActiveRoom(id)} />
          <MessageList firebase={firebase} activeRoom={this.state.activeRoom} />
          <User firebase={firebase} setUser={(user) => this.setUser(user)} user={this.state.user} />
        </main>
      </div>
    )
  }
}


export default App;
