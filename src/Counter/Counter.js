import React, {Component} from 'react';
import classes from './Counter.css';

class Counter extends Component{

    state = {
        value: 0,
        offset: 1,
    }

    increaseCounter = () => {
        const currentValue = this.state.value;
        this.setState({
            value: (currentValue + this.state.offset),
        })
    }

   decreaseCounter = () => {
        const currentValue2 = this.state.value;
        this.setState({
            value: (currentValue2 - this.state.offset),
        });
    }

    changeOffset = (e) => {
        let newOffset;
        if(e.target.value !== ''){
            newOffset = e.target.value;
        } else{
            newOffset = 1;
        }

        this.setState({
            offset: newOffset,
        });
    }

    render(){
        let h4 = '';
        if(this.state.value < 0){
            h4 = classes.h4_Red;
        }

        return(
            <div className={classes.Counter}>
                <h4>Practice Problem 1 (Counter)</h4>
                <h4 className={h4}>Count: {this.state.value} </h4>
                <button 
                    onClick={this.increaseCounter}
                    className={classes.Button}>Increment
                </button>

                <button 
                    onClick={this.decreaseCounter}
                    className={classes.Button}>Decrement
                </button>
                
                <input 
                    className={classes.Input_number}
                    type="number" 
                    onChange={this.changeOffset}
                    placeholder="offset"
                />
            </div>
        )
    }
}

export default Counter;