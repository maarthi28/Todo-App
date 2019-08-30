import React, {Component} from 'react';
import TodoHome from './todoHome';
import CompletedTaskList from './completedTaskList';
import './index.css';

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state = { selectedView: 'Todo',
                       Todo_List:['Do Exercise','Eat Fruits','Wash Clothes'],
                       completed_tasks:[],
                    }
        this.completedTasks = this.completedTasks.bind(this);
        this.add_tasklist = this.add_tasklist.bind(this);
    }
    completedTasks = (comp_value) => {
        this.setState(prevState => ({
            completed_tasks: [...prevState.completed_tasks, comp_value]
        }));
        this.remove_tasklist(comp_value);
    }
    remove_tasklist = (newValue) => {
        var arr_list = [...this.state.Todo_List];
        var index = arr_list.indexOf(newValue)
        if(index !== -1){
            arr_list.splice(index,1);
            this.setState({Todo_List:arr_list});
        }
    }
    add_tasklist = (newValue) =>{
        this.setState(prevState => ({
            Todo_List: [...prevState.Todo_List, newValue]
        }));
    }
    render(){
        return(
            <div className="center">
            <div >
                <div className="ui blue inverted three item menu">
                <a className="item" onClick={()=> this.setState({selectedView: "Todo"})}>MY TODO'S</a>
                <a className="item" onClick={()=> this.setState({selectedView: "Completed"})}>COMPLETED</a>
                </div>
                <div className="ui segment">
                {this.state.selectedView == 'Todo' && 
                <TodoHome todo_list={this.state.Todo_List} completedTasks={this.completedTasks} add_tasklist={this.add_tasklist}/>}
                {this.state.selectedView == 'Completed' && <CompletedTaskList completedList = {this.state.completed_tasks}/>}
                </div>
            </div>
            </div>
        )
    }
}

export default Homepage;