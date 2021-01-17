import React,{Component} from 'react';
import classes from './ToDoList.css';
import ToDoItem from './ToDoItem/ToDoItem';

class ToDoList extends Component{
    
    state = {
        taskTitle: '',
        taskDate: '',
        todoList: [],
    }

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async deleteItem(index){
       const newToDoList = this.state.todoList.filter(item =>{
            return this.state.todoList[index] !== item;
        })

        // wait few milliseconds so users can see the task selected to delete
        await this.sleep(300);
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
                    key={todoItem.title + todoItem.date}
                    done={()=>this.deleteItem(index)}
                />
            )
        }

        )
        return (
            <div className={classes.ToDoList}>
                <h4>Practice Problem 2 (To-do List)</h4>
                <div className={classes.Input}>
                    <input 
                        className={classes.TextField} 
                        type="text" 
                        placeholder="Enter a task..." 
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
                <div className={classes.ToDo_List}>
                    {todoListComponents}
                </div>
            </div>
        )
    }
}

export default ToDoList;