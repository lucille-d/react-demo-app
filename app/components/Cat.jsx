import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import Avatar from 'material-ui/lib/avatar';

export class Cat extends React.Component {

    render() {
        let cat = this.props.data;
        return (
            <Card className="card">
                <CardHeader title={cat.name} avatar={< Avatar size = "150" src = "http://lorempixel.com/100/100/nature/" style = {
                    {
                        border: 0,
                        borderRadius: '2px'
                    }
                } />}/>
                <CardText>
                    <ul>
                        <li>Gender:  {cat.gender}</li>
                        <li>Age:  {cat.age}</li>
                        <li>Eye color: {cat.eyeColor} </li>
                    </ul>
                </CardText>
                <CardActions>
                    <FlatButton label="+1"/>
                    <FlatButton label="-1"/>
                </CardActions>
            </Card>
        );
    }
}
