import React from 'react';
import {CatList} from './CatList.jsx';

console.log("here1");
export class Main extends React.Component {
    constructor(props){console.log("here2");
        super(props);
    }

    render() {console.log("here3");
        return (
            <div>
                <AppBar title="Rate my kitten"/>
                {this.props.children}
            </div>
        );
    }
}
