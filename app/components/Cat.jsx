import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardText from 'material-ui/lib/card/card-text';
import FlatButton from 'material-ui/lib/flat-button';
import Avatar from 'material-ui/lib/avatar';

export class Cat extends React.Component {

    render() {
        let cat = this.props.data;
        return (
            <Card className="card">
                <div className="cat-container">
                    <img className="cat-picture" src={cat.picture}/>
                    <div className="cat-info">
                        <h1>{cat.name}</h1>
                        <ul>
                            <li>Gender: {cat.gender}</li>
                            <li>Age: {cat.age}</li>
                            <li>Eye color: {cat.eyeColor}
                            </li>
                        </ul>
                    </div>
                    <div className="cat-score">{cat.score}</div>
                </div>
            </Card>
        );
    }
}
