import React, {Component} from 'react';
import AddNewTask from './addNewtask';

class TodoHome extends Component{
    constructor(props){
        super(props);
        this.state = { button_clicked:false,
                       show_addnew_button: true,
                    }
        this.allow_addNewTask = this.allow_addNewTask.bind(this);
        this.change_states = this.change_states.bind(this);
    }
    allow_addNewTask = () => {
        this.setState({
            button_clicked:true,
            show_addnew_button:false,
        })     
    }
    change_states = () =>{
        this.setState({
            button_clicked:false,
            show_addnew_button:true,
        });
    }
    render(){
        return(
            <div className="ui divided middle aligned list">
                {
                this.props.todo_list.map((list_items,i)=>
                        <div key={i} className="item">
                            <div className="right floated content">
                                <button onClick={()=>{ this.props.completedTasks(list_items)}} className="ui button">Done</button></div>
                                <i aria-hidden="true" className="hand point right outline big icon"></i>
                            <h4 className="content">{list_items}</h4><br/>
                        </div>)
                }
                {this.state.show_addnew_button && <button className="ui primary button" onClick={this.allow_addNewTask}>Add New Task</button> }
                {this.state.button_clicked && <AddNewTask add_tasklist = {this.props.add_tasklist} change_states = {this.change_states}/>}
            </div>

        );
    }

};

export default TodoHome;