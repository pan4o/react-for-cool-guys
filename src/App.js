import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <p>Hello Serhii</p>
                <SuccessButton text="OK" />
            </div>
        );
    }
}

// Доступ к компоненту через точку

const MyComponents = {
    Button: function(props) {
        return <button>{props.text}</button>;
    }
};

function SuccessButton(props) {
    return <MyComponents.Button text={props.text} />;
}

export default App;
