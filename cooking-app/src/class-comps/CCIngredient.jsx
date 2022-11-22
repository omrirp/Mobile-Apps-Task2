import { Component } from 'react';

export default class CCIngredient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            name: this.props.name,
            imageURL: this.props.imageURL,
            calories: this.props.calories,
        };
    }

    render() {
        return (
            <div className='item' data={this.props.id}>
                <img src={this.props.imageURL} alt='' />
                <h4>{this.props.name}</h4>
                <h4>calories: {this.props.calories}</h4>
            </div>
        );
    }
}
