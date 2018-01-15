import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div style={modalStyles}>
                <div>Modal Window</div>
                <button onClick={this.props.onClick}>Close</button>
            </div>
        );
    }
}

let modalStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#f5f5f5',
    width: '100%',
    height: '100%',
    textAlign: 'center'
}

export default Modal;