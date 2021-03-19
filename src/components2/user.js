import React,{Component} from 'react';

import UserConsumer from "./context"

class User extends Component {

    state = {
        isVisible : true
    }

// ! =====================================================================
    onDeleteUser = (dispatch,e)=>{
      
        const{id} = this.props;

        // ! WE WILL FILL THIS PART LATER
        //deleteUser(id);

        // ? In the next step, i will use "Dispatch Consumer" and we will take an "action" here!

        dispatch({type:"DELETE_USER",payload:id})
    }
// ! =====================================================================

    onClickEvent = (e) =>{
        this.setState({
            isVisible : !this.state.isVisible
        })
    }

    render(){

    const {name,team,goals} = this.props;
    const {isVisible} = this.state;

    // ? return here: is for Component =========================================================
        return(
            <UserConsumer>

                { value =>{

                 // ? return here: is for Arrow Function ========================================
                return(

                    <div className="col-md-8 mb-4">

                    <div className="card">
                        {/* HEADER */}
                        <div className="card-header d-flex justify-content-between" style={ isVisible?{backgroundColor:"blue", color:"white"}:{backgroundColor:"red", color:"white"}}>

                        <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>


                    {/* ============================================================================================ */}
                        <i onClick={()=>{this.onDeleteUser(value.dispatch)}} className="fa fa-trash-o" style={{cursor:"pointer"}}></i>
                    {/* ============================================================================================ */}


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



                }}

            </UserConsumer>

        )
    }
}


export default User;




