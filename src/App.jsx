import React, { Component } from "react";
import { hot } from "react-hot-loader";
class App extends Component {
    constructor(props){
        super(props);
        this.state = { counter: 0 };
    }
    render() {
        return (
                <div className="App" data-test="app">
                    <h1 data-test="counter">
                    The counter is currently {this.state.counter}
                    </h1>
                    <button data-test="increment-button" 
                        onClick={() => { this.setState({ counter : this.state.counter + 1 })}}
                    >
                        Increment Counter
                    </button>
                </div>
            );
    }
}

export default hot(module)(App);