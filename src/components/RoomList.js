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
        {this.state.rooms.map((room, index) => <div key={room.key} onClick={() => this.props.updateActiveRoom(room.key)}>{(room.name)}</div>)}
        <form onSubmit={(e) => this.createRoom(e)}>
          <input onChange={(e) => this.handleOnChange(e)} type='text' value={this.state.newName} />
          <button type="submit">New Room</button>
        </form>
      </div>
    )
  }
};

export default RoomList;
