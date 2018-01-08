import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <p>Hello Serhii</p>
                <SuccessButton text="OK" />
                <Message text={"Test of Message component"} />
                <Media componentType={'video'} />
                <Media componentType={'image'} />
                <ComponentWithProps value={1 + 2 + 3 + 4 + 5} />
                <NumberDescribe number={2} />
                <NumberDescribe number={3} />
                <HelloComponent {...objectForHelloComponent} />
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

//Компоненты всегда нужно всегда именовать с большой буквы

let messageStyles = {
    color: 'red',
    backgroundColor: '#f1f1f1',
    padding: '10px 15px',
    margin: '10px 0'
};

function Message(props) {
    return (
        <div style={messageStyles}>{props.text}</div>
    );
}

//Выбор типа во время выполнения

function Video() {
    return <p>Video</p>;
}

function Image() {
    return <p>Image</p>;
}

let components = {
    video: Video,
    image: Image
};

function Media(props) {
    //Обязательное именование с большой буквы
    const MediaObject = components[props.componentType];
    return <MediaObject />;
}

//javascript выражение как свойства

function ComponentWithProps(props) {
    return <div>{props.value}</div>
}

function NumberDescribe(props) {
    let description;
    if(props.number % 2 == 0) {
        description = <strong>even</strong>;
    } else {
        description = <strong>odd</strong>;
    }

    return description;
}

//Spread операторы в React

function HelloComponent(props) {
    return (
        <div>
            <p>{props.header}</p>
            <p>{props.text}</p>
        </div>
    );
}

let objectForHelloComponent = {
    header: 'Man',
    text: 'Whats uupppppppppp!'
};

// синтаксис инициализации обьекта черезез spread оператор - <HelloComponent {...objectForHelloComponent} />

// 3.1.3 Потомки в JSX

export default App;
