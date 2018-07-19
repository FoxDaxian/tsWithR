import React, { Component } from 'react';
import './App.scss';

// page
import Home from './page/home/index';

class App extends Component {
    public render() {
        return (
            <div className="App">
                <Home />
            </div>
        );
    }
}

export default App;
