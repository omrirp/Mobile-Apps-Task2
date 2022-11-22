import { Component } from 'react';
import FCRecipes from '../functional-comps/FCRecipes';
import FCRecipesDone from '../functional-comps/FCRecipesDone';

let recipes = [
    {
        id: 1,
        name: 'Baba Ganoush',
        ingredients: ['Tehini', 'Eggplants'],
        imageURL:
            'https://sixhungryfeet.com/wp-content/uploads/2020/11/Baba-Ganoush-2.jpg',
        cookingMethod: 'Mix',
        isReady: false,
    },
    {
        id: 2,
        name: 'Schnitzel',
        ingredients: ['Chicken breast', 'Breadcrumbs', 'Eggs'],
        imageURL:
            'https://therecipecritic.com/wp-content/uploads/2020/10/pork-schnitzel-recipe-3.jpg',
        cookingMethod: 'Fry',
        isReady: false,
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
        // Transfer the desired Recipe the the recipesDone Array
        let preperedRecipe = this.state.recipes.find(
            (recipe) => recipe.id === id
        );
        preperedRecipe.isReady = true;
        let newRecipesDoneArr = [...this.state.recipesDone, preperedRecipe];

        // Removeing the same Recipe from the recipes Array
        let newRecipesArr = this.state.recipes.filter(
            (recipe) => recipe.id !== id
        );
        this.setState({
            recipes: newRecipesArr,
            recipesDone: newRecipesDoneArr,
        });
    };

    getIdFromRecipesToEat = (id) => {
        // Transfer the desired Recipe back to the recipes Array
        let eatenRecipe = this.state.recipesDone.find(
            (recipe) => recipe.id === id
        );
        eatenRecipe.isReady = false;
        let newRecipesArr = [...this.state.recipes, eatenRecipe];

        // Removeing the same Recipe from the recipesDone Array
        let newRecipesDoneArr = this.state.recipesDone.filter(
            (recipe) => recipe.id !== id
        );
        this.setState({
            recipes: newRecipesArr,
            recipesDone: newRecipesDoneArr,
        });
    };

    render() {
        return (
            <div>
                <FCRecipes
                    recipes={this.state.recipes}
                    sendIdToPrepareFromRecipes={this.getIdFromRecipesToPrepare}
                />
                <hr />
                <FCRecipesDone
                    recipes={this.state.recipesDone}
                    sendIdToEatFromRecipes={this.getIdFromRecipesToEat}
                />
            </div>
        );
    }
}
