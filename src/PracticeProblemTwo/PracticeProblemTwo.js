import React,{Component} from 'react';
import classes from './PracticeProblemTwo.css';
import ToDoItem from './ToDoList/ToDoItem';

class PracticeProblemTwo extends Component{
    
    state = {
        taskTitle: '',
        taskDate: '',
        todoList: [],
    }

    deleteItem = (index) => {
        
       const newToDoList = this.state.todoList.filter(item =>{
            return this.state.todoList[index] !== item;
        })

        this.setState({todoList: newToDoList});
    };

    processInput = (e) => {
        const newTaskTitle= e.target.value;
        this.setState({taskTitle: newTaskTitle});
    };

    processDate = (e) => {
        const newDate = e.target.value;
        this.setState({taskDate: newDate});
    };

    createTask = () => {

        if(this.state.taskTitle !== '' && this.state.taskDate !== ''){
            const newToDoList = [...this.state.todoList];
            newToDoList.push({title: this.state.taskTitle, date: this.state.taskDate});
            this.setState({todoList: newToDoList});
        }
    };

    render(){
        const todoListComponents = this.state.todoList.map((todoItem, index) => {
            return(
                <ToDoItem 
                    title={todoItem.title}
                    date={todoItem.date}
                    key={todoItem.item + todoItem.date}
                    done={()=>this.deleteItem(index)}
                />
            )
        }

        )
        return (
            <div className={classes.PracticeProblemTwo}>
                <h4>Practice Problem 2</h4>
                <div className={classes.Input}>
                    <input 
                        className={classes.TextField} 
                        type="text" 
                        placeholder="Create new task..." 
                        onChange={this.processInput}
                    />
                    <input 
                        className={classes.Date} 
                        type="date"
                        onChange={this.processDate}
                    />
                    <button 
                        className={classes.Button}
                        onClick={this.createTask}>New Task
                    </button>
                </div><br/>

                <h3 className={classes.All_tasks}>All Tasks</h3>
                <div className={classes.ToDoList}>
                    {todoListComponents}
                </div>
            </div>
        )
    }
}

export default PracticeProblemTwo;