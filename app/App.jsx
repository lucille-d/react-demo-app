import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';
import {Cat} from './components/Cat.jsx';
import CatAPI from './api/CatAPI.js';

class RateMyKittenApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: []
        };
        CatAPI
            .getCatList()
            .then(function (cats) {
                this.setState({cats: cats});
            }.bind(this));
    }

    render() {
        let catsNodes = this
            .state
            .cats
            .map(function (cat) {
                return (<Cat key={cat._id} data={cat}/>);
            })
        return (
            <div>
                <AppBar title="Rate My Kitten"/> {catsNodes}
            </div>
        );
    }
}

ReactDOM.render(
    <RateMyKittenApp/>, document.getElementById('main'));
