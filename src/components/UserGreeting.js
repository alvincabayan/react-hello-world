import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // 1. if / else statement
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div> Welcome Vishwas </div>
        //     )
        // } else {
        //     return (
        //         <div> Welcome Guest </div>
        //     )
        // }
        // return (
        // <div>
        //     <div> Welcome Vishwas </div>
        //     <div> Welcome Guest </div>
        // </div>
        // )

        // 2. Element variable
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Vishwas</div>
        // } else {
        //     message = <div> Welcome Guest </div>
        // }

        // return <div>{message}</div>

        //3. Ternary conditional operator
        return this.state.isLoggedIn ? <div>Welcome Vishwas</div> : <div> Welcome Guest </div>            
        

        //4. Short-circuit operator approach
        // return this.state.isLoggedIn && <div>Welcome Vishwas</div>
    }
}

export default UserGreeting
