import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import Modal from './Modal';

class Portals extends Component {
    constructor(props) {

        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({isOpen: !state.isOpen}))
    }

    render() {
        return (
            <div>
                {
                    this.state.isOpen &&
                    ReactDOM.createPortal(
                        <Modal onClick={this.toggle} />,
                        document.getElementById('portal')
                    )
                }
                <button onClick={this.toggle}>Toggle Modal</button>
            </div>
        );
    }

}

export default Portals;