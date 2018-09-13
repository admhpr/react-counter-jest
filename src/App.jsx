import React, { Component } from "react";
import { hot } from "react-hot-loader";
class App extends Component {
    render() {
        return (
            <div className="App" data-test="app">
                <h1 data-test="increment-button"></h1>
                <h1 data-test="counter"></h1>
            </div>
        );
    }
}

export default hot(module)(App);