import React, { Component } from 'react'

/* 
Notes:

Provide ( incoming) : Store your state
Consumer ( out going) : Access the data 

*/

// ? ==============================================
// ! RULE 1: CREATE YOUR CONTEXT

// The name of the context is "UserContext". 
// You can give any name to your context!

const UserContext = React.createContext();

// ? ==============================================

// ! RULE 2: CREATE YOUR PROVIDER

// Here we are not exporting Provider Component as default! So we can delete "default"!

export class UserProvider extends Component {

  // I need to store my state here! Inside the provider!

    state = {
        users : [
          {
            id:1,
            name:"Lionel Messi",
            team:"Barcelona",
            goals:40
          },
          {
            id:2,
            name:"Christian Ronaldo",
            team:"Real Madrid",
            goals:40
          },
          {
            id:3,
            name:"Alper Ece",
            team:"FC Dusseldorf",
            goals:99
          }
        ],
      
      }
    


    render() {
        return (

            <UserContext.Provider value={this.state}>

                {this.props.children} {/* {this.props.children} = <App/> */}

            </UserContext.Provider>

        )
    }
}

// ? ==============================================

// ! RULE 3: CREATE YOUR CONSUMER

// 1st Way: Define as a variable
const UserConsumer = UserContext.Consumer;

export default UserConsumer;

// 2nd Way: Export it directly

//export default UserContext.Consumer;