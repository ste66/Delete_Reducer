import React, { Component } from 'react'
import User from "./user";

import UserConsumer from "./context"


 class List extends Component {
    render() {

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






