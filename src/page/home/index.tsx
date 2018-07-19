import React, { Component } from 'react';
import './index.scss';

class Home extends Component {
    public componentDidMount() {
        interface InterfaceClass {
            say: () => {};
        }

        class Clock implements InterfaceClass {
            constructor() {}

            public say() {
                return () => {};
            }
        }
        const a = new Clock();
        console.log(a);
    }
    public render() {
        return <div className="homeWrap">home</div>;
    }
}

export default Home;
