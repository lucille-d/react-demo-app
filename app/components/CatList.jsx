import React from 'react';
import {Cat} from './Cat.jsx';

export class CatList extends React.Component {
    render() {
        let catsNodes = this
            .props
            .cats
            .map((cat) => {
                return (<Cat key={cat._id} data={cat} voteForCat={this.props.voteForCat}/>);
            })
        return (
            <div>
                {catsNodes}
            </div>
        );
    }
}
