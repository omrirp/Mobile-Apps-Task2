import { Component } from 'react';
import FCRecipes from '../functional-comps/FCRecipes';
import FCRecipesDone from '../functional-comps/FCRecipesDone';

let recipes = [
    {
        id: 1,
        name: 'Baba Ganoush',
        ingredients: ['Tehini', 'Eggplants'],
        imageURL: 'https://sixhungryfeet.com/wp-content/uploads/2020/11/Baba-Ganoush-2.jpg',
        cookingMethod: 'Mix',
    },
    {
        id: 2,
        name: 'Schnitzel',
        ingredients: ['Chicken breast', 'Breadcrumbs', 'Eggs'],
        imageURL: 'https://therecipecritic.com/wp-content/uploads/2020/10/pork-schnitzel-recipe-3.jpg',
        cookingMethod: 'Fry',
    },
];

let recipesDone = [];

export default class CCMyKitchen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: recipes,
            recipesDone: recipesDone,
        };
    }

    getIdFromRecipesToPrepare = (id) => {
        let newRecipesArr = this.state.recipes.filter((recipe) => recipe.id !== id);
        this.setState({ recipes: newRecipesArr });
    };

    render() {
        return (
            <div>
                <FCRecipes recipes={this.state.recipes} sendIdToPrepareFromRecipes={this.getIdFromRecipesToPrepare} />
                <hr />
                <FCRecipesDone recipes={this.state.recipesDone} />
            </div>
        );
    }
}
