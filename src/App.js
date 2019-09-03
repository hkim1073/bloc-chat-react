import React, {Component} from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

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
  render () {
    return (
      <div className= "App">
        <header>
        </header>
        <main>
          <RoomList firebase={firebase} />
        </main>
      </div>
    )
  }
}


export default App;
