import React, { Component } from "react";
import { hot } from "react-hot-loader";
class App extends Component {
   constructor(props){
       super(props)
       this.state = { 
           counter: 0,
           error: false, 
       };
   }
    makeIncrementor = (amount) => () => {
       this.setState( prevState => {
           let next = prevState.counter + amount
           return {
               counter: next < 0 ? 0 : next,
           }
       })
    }
    increment = this.makeIncrementor(1)
    decrement = this.makeIncrementor(-1)
    render() {
        // determine whether error is hidden based on state
        const errorClass = this.state.error ? '' : 'hidden';
        return (
                <div className="app" data-test="app">
                    <h1 data-test="counter">
                    The counter is currently {this.state.counter}
                    </h1>
                    <h2 data-test="error-message" className={ errorClass }>Counter cannot go below zero</h2>
                    <button data-test="increment-button" 
                        onClick={this.increment}
                    >
                        Increment Counter
                    </button>
                    <button data-test="decrement-button" 
                        onClick={this.decrement}
                    >
                        Decrement Counter
                    </button>
                </div>
            );
    }
}

export default hot(module)(App);