import React, { Component } from 'react'
import User from "./user";

import UserConsumer from "./context"


 class List extends Component {
    render() {

// ? ==================================================================
        // ! We are not passing props anymore. So you can delete below part!
      /*   const {users, deleteUser} = this.props; */
// ? ==================================================================

        // value : this.state
        // users : this.state.users => value.users

        // const {users} = this.props; => this.props.users
        // const {users} = value; => value.users

        return (
            
        
            <UserConsumer>


            { (value)=>{

                    const {users}= value;

                    return(

                        <div>
                            {
                                users.map(myUser =>{
                                    return(
                                        <User 
                                        
                                        key = {myUser.id}
                                        id={myUser.id}
                                        name = {myUser.name}
                                        team = {myUser.team}
                                        goals = {myUser.goals}
                                  
                                        />
                                    )

                                })

                            }
                            </div>


                    )


            }




            }


            </UserConsumer>
           
        )
    }
}


export default List;






