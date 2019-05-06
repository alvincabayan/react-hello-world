import React, { Component } from 'react';
import './App.css';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';

class App extends Component {
    render() {
        return (
            <div className="App">
                <UserProvider value="alvin">
                    <ComponentC />    
                </UserProvider>    

               
            </div>
        );
    }
}

export default App;
