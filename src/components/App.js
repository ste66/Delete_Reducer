import React, { Component } from 'react'

import Navbar from './navbar';
import List from './list';

/* import {UserProvider} from "./context" */



 class App extends Component {

// ! Cut your External State and paste it into Context.js

/* state = {
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

} */

// =============================================================

// ! RULE 2: WRAP YOUR ENTIRE APP WITH PROVIDER

// ? 1st Way: You can do it inside the App.js in the return part
// ? 2nd Way : You can do it inside the index.js 

// =============================================================

/* ------------------------------------------------------------- */
/* DELETE USER */

// Since the state is deleted from here, we delete the part below!

/* 
deleteUser = (id) =>{
  this.setState({
    users : this.state.users.filter(user => id !== user.id)
  })
}
 */

/* ------------------------------------------------------------- */
  render() {

    return (

            <div className="">

            <Navbar title="Navbar"/>

            {/* ================================================= */}

            {/* We delete the attributes here as props! We are not using props! */}
                            
         {/*  <List deleteUser={this.deleteUser} users={this.state.users} /> */}

            <List  />

            {/* ================================================= */}

            </div>
       
    )
  }
}

export default App;