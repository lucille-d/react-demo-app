import React from 'react';
import Card from 'material-ui/lib/card/card';

export class NewCat extends React.Component {
    constructor() {
        super();
        this.addCat = this
            .addCat
            .bind(this);
    }
    addCat() {
        this
            .props
            .addCat(this.refs.catName.value, this.refs.catPicture.value);
    }
    render() {
        let cat = this.props.data;
        return (
            <Card className="card">
                <div className="cat-container">
                    <div className="cat-info">
                        <ul>
                            <li>Name:
                                <input type="text" ref="catName"/></li>
                            <li>Picture url:
                                <input type="text" ref="catPicture"/>
                            </li>
                        </ul>
                        <button onClick={this.addCat}>Save</button>
                    </div>
                </div>
            </Card>
        );
    }
}
