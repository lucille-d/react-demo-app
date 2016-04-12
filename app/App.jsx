import React from 'react';
import ReactDOM from 'react-dom';
import {CatList} from './components/CatList.jsx';
import {NewCat} from './components/NewCat.jsx';
import AppBar from 'material-ui/lib/app-bar';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

import CatAPI from './api/CatAPI.js';

const fabStyle = {
    position: 'absolute',
    bottom: 20,
    right: 20
};

class RateMyKittenApp extends React.Component {
    constructor() {
        super();
        this.state = {
            isAddingCat: false,
            cats: CatAPI.cats
        };
        this.toggleAddPanel = this
            .toggleAddPanel
            .bind(this);
        this.voteForCat = this
            .voteForCat
            .bind(this);
        this.addCat = this
            .addCat
            .bind(this);
    }
    toggleAddPanel() {
        if (this.state.isAddingCat) {
            this.setState({isAddingCat: false});
        } else {
            this.setState({isAddingCat: true});
        }
    }
    addCat(name, picture) {
        let newCats = this
            .state
            .cats
            .slice();
        newCats.unshift({
            _id: Math.random() * 1000000000,
            name: name,
            picture: picture,
            score: 0
        });
        this.setState({cats: newCats, isAddingCat: false});
    }
    voteForCat(catId, value) { //+1 or -1
        let newCats = this
            .state
            .cats
            .slice();
        newCats.forEach(function (cat) {
            if (cat._id === catId) {
                cat.vote = value;
            }
        });
        this.setState({cats: newCats});
    }
    render() {
        let newCat;
        if (this.state.isAddingCat) {
            newCat = <NewCat addCat={this.addCat}/>;
        }
        return (
            <div>
                <AppBar title="Rate my kitten" showMenuIconButton={false}/> {newCat}
                <CatList cats={this.state.cats} voteForCat={this.voteForCat}/>
                <FloatingActionButton style={fabStyle} onClick={this.toggleAddPanel}>
                    <ContentAdd/>
                </FloatingActionButton>
            </div>
        );
    }
}

ReactDOM.render(
    <RateMyKittenApp/>, document.getElementById('app'));

// <Router>
//     <Route path="/" handler={Main}>
//         <IndexRedirect to="/cats"/>
//         <Route path="/cats" handler={CatList}/>
//         <Route path="/new" handler={NewCat}/>
//     </Route>
// </Router>
