import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newName: '',
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const rooms = snapshot.val();
      rooms.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( rooms ) })
    });
  }

  createRoom(e) {
    e.preventDefault();
    this.roomsRef.push({ name: this.state.newName });
  }

  handleOnChange(e) {
    this.setState({
      newName: e.target.value,
    })
  }

  render() {
    return (
      <div>
        {this.state.rooms.map((rooms, index) => <div>{(rooms.name)}</div>)}
        <input onChange={(e) => this.handleOnChange(e)} type='text' value={this.state.newName} />
        <button onClick={(e) => this.createRoom(e)}>click</button>
      </div>
    )
  }
};

export default RoomList;
