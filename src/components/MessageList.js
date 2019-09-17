import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };

    this.messagesRef = props.firebase.database().ref('messages');
    }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const messages = snapshot.val();
      messages.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( messages ) })
    });
  }

  getCurrentMessages() {
    return this.state.messages.filter((message) => {
      return message.roomId === this.props.activeRoom
    })
  }

  render() {
    return (
      <div>
        {
          this.getCurrentMessages().map((message) => {
            return (
              <div key={message.key}>
                <div>{message.username}</div>
                <div>{message.content}</div>
                <div>{message.roomId}</div>
                <div>{message.sentAt}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
};

export default MessageList;
