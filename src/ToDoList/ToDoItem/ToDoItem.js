import React from 'react';
import classes from './ToDoItem.css';

const todoItem = (props) => {

    return (
        <div className={classes.ToDoItem}>
            <div className={classes.Item}>
                <input className={classes.Button} type="radio" onClick={props.done}/>
                <span className={classes.Task}>{props.title}</span>
                <span className={classes.Date}>{props.date}</span>
            </div><br/>
        </div>
    )
}

export default todoItem;