import React, {Component} from 'react';
import './PracticeProblemOne.css';

class PracticeProblemOne extends Component{

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
        const newOffset = parseInt(e.target.value);
        this.setState({
            offset: newOffset,
        })
    }

    render(){
        let h4 = '';
        if(this.state.value < 0){
            h4 += 'h4-Red';
        }

        return(
            <div className="PracticeProblemOne">
                <h4>Practice Problem 1</h4>
                <h4 className={h4}>Count: {this.state.value} </h4>
                <button 
                    onClick={this.increaseCounter}
                    className="Button">Increment
                </button>

                <button 
                    onClick={this.decreaseCounter}
                    className="Button">Decrement
                </button>
                
                <input 
                    className="Input-number" 
                    type="number" 
                    onChange={this.changeOffset}
                    placeholder="offset"
                />
            </div>
        )
    }
}

export default PracticeProblemOne;