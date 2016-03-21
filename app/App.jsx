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
<<<<<<< HEAD
                <AppBar style={{position: 'fixed', top: 0}} title="Rate My Kitten"/> <div className="card-container">{catsNodes}</div>
=======
                <AppBar title="Rate My Kitten"/> {catsNodes}
>>>>>>> 8587de61fe88b697fc5b0b1b189a0e538f109e63
            </div>
        );
    }
}

ReactDOM.render(
    <RateMyKittenApp/>, document.getElementById('main'));
