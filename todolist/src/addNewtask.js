import React,{Component} from 'react';
class AddNewTask extends Component{
    constructor(props){
        super(props);
        this.state = { newtask_value: '',
        }
        this.changeNewtaskvalue = this.changeNewtaskvalue.bind(this);
        this.upadteNewValues = this.upadteNewValues.bind(this);        
    }

    changeNewtaskvalue = (event) =>{
        this.setState({
            newtask_value: event.target.value,
        })
    }

    upadteNewValues = () => {
        if(this.state.newtask_value){
            this.props.add_tasklist(this.state.newtask_value);
            this.props.change_states();
            this.setState({
                newtask_value: '',
            })
        }
    }
    render(props){
        return(
            <div>
                <div>
                <input className="ui focus input ui placeholder" type="text" placeholder="Enter your new task" value={this.state.newtask_value}
                onChange = {this.changeNewtaskvalue}></input>
                </div>
                <br/>
                <div>
                <button className="ui primary button" type="button" onClick = {this.upadteNewValues}>ADD</button>    
                </div>
            </div>
        )
    }
}

export default AddNewTask;