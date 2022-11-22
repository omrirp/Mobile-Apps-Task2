import { Component } from 'react';

export default class CCRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            ingredients: this.props.ingredients,
            imageURL: this.props.imageURL,
            cookingMethod: this.props.cookingMethod,
            isReady: this.props.isReady,
        };
    }

    render() {
        let ingredientsSTR = '';
        let ings = this.props.ingredients;
        for (let i = 0; i < ings.length; i++) {
            if (i < ings.length - 1) {
                ingredientsSTR += ings[i] + ', ';
            } else {
                ingredientsSTR += ings[i];
            }
        }
        let isReadyStr = '';
        if (!this.props.isReady) {
            isReadyStr = 'Prepare Dish!';
        } else {
            isReadyStr = 'EAT!';
        }

        return (
            <div className='item'>
                <img src={this.props.imageURL} alt='' />
                <h4>{this.props.name}</h4>
                <h4>{ingredientsSTR}</h4>
                <p>{this.props.cookingMethod}</p>
                <button
                    onClick={() => {
                        if (!this.state.isReady) {
                            this.props.sendIdToPrepareFromRecipe(this.state.id);
                        }
                        this.props.sendIdToEatFromRecipe(this.state.id);
                    }}
                >
                    {isReadyStr}
                </button>
            </div>
        );
    }
}
