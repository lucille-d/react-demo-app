import React from 'react';
import Card from 'material-ui/lib/card/card';
import IconButton from 'material-ui/lib/icon-button';
import ThumbUp from 'material-ui/lib/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/lib/svg-icons/action/thumb-down';

export class Cat extends React.Component {
    render() {
        let cat = this.props.cat;
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
                    <div className="cat-score">
                        <IconButton className={"cat-score-up " + (cat.vote === -1 ? 'grey': '')} onClick={this
                            .props
                            .voteForCat
                            .bind(this, cat._id, 1)}><ThumbUp/></IconButton>
                        <div className="cat-score-value">{cat.score + (cat.vote || 0)}</div>
                        <IconButton className={"cat-score-down " + (cat.vote === +1 ? 'grey': '')} onClick={this
                            .props
                            .voteForCat
                            .bind(this, cat._id, -1)}><ThumbDown/></IconButton>
                    </div>
                </div>
            </Card>
        );
    }
}
