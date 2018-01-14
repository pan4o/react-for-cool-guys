import React, { Component } from 'react';

class RefDom extends Component {
    render() {
        return (
            <div>
                <MyTextField />
                <ParentComponent text={"Parent component"}/>
                <GrandPar/>
            </div>
        );
    }
}

class MyTextField extends Component {
    constructor(props) {
        super(props);
        this.focusOnTextField = this.focusOnTextField.bind(this);
    }
    focusOnTextField() {
        this.textField.focus();
    }
    render() {
        return (
            <p>
                <input type="text" ref={ (input) => { this.textField = input; }} />
                <button onClick={this.focusOnTextField}>Focus on text field</button>
            </p>
        );
    }
}

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.focusOnChildInput = this.focusOnChildInput.bind(this);
    }
    focusOnChildInput() {
        this.childInput.focus();
    }
    render() {
        return (
            <div>
                <h2>{this.props.text}</h2>
                <ChildComponent inputRef={(input) => {this.childInput = input}} />
                <button onClick={this.focusOnChildInput}>Focus on child input</button>
            </div>
        );
    }
}

function ChildComponent(props) {
    return (
        <input type="text" ref={props.inputRef}/>
    )
}

function Par(props) {
    return (
        <ChildComponent inputRef={props.inputRef}/>
    );
}

class GrandPar extends Component {
    constructor(props) {
        super(props);
        this.focusChildInput = this.focusChildInput.bind(this);
    }
    focusChildInput() {
        this.childInput.focus();
    }
    render(){
      return (
        <div>
            <Par inputRef={(input) => {this.childInput = input}} />
            <button onClick={this.focusChildInput}>Grandpa button</button>
        </div>
      );
    }
}

export default RefDom;