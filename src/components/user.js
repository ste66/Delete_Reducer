import React,{Component} from 'react';





class User extends Component {

    state = {
        isVisible : true
    }


    onDeleteUser = (e)=>{
        //! You can delete props
        /* const{id,deleteUser} = this.props; */

        // ! WE WILL FILL THIS PART LATER
        //deleteUser(id);

        // ? In the next step, i will use "Dispatc Consumer" and we will take an "action" here!
    }


    onClickEvent = (e) =>{
        this.setState({
            isVisible : !this.state.isVisible
        })
    }

    render(){

    const {name,team,goals} = this.props;
    const {isVisible} = this.state;

        return(




            <div className="col-md-8 mb-4">

                        <div className="card">
                            {/* HEADER */}
                            <div className="card-header d-flex justify-content-between" style={ isVisible?{backgroundColor:"blue", color:"white"}:{backgroundColor:"red", color:"white"}}>

                            <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>

                            <i onClick={this.onDeleteUser} className="fa fa-trash-o" style={{cursor:"pointer"}}></i>

                            </div>
                                    {/* BODY */}
                            {/* to hide the cards body */}

                            {
                                isVisible ?  <div className="card-body">
                                <p className="card-text">Team: {team}</p>
                                <p className="card-text">Goals: {goals}</p>
                                </div> : null
                            }
                            
                        </div>

                    </div>


    
        


        )
    }
}


export default User;