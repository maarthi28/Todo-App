import React, {Component} from 'react';

class CompletedTaskList extends Component{
    render(props){
        return(
            <div>
                <br/>
                {this.props.completedList.length > 0 ?(
            <div className="ui divided middle aligned list">{
                this.props.completedList.map((list_items,i)=>
                        <div key={i} className="item">
                            <i aria-hidden="true" className="hand point right outline big icon"></i>
                            <h4 className="content">{list_items}</h4><br/>
                        </div>)
                }
            </div>):(<div className="content"><h3>Oops...You haven't Done..</h3></div>)}
            </div>
        )
    }
}

export default CompletedTaskList;