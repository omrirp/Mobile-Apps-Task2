import CCRecipe from '../class-comps/CCRecipe';

export default function FCRecipesDone(props) {
    let recipesStr = props.recipes.map((recipe) => (
        <CCRecipe
            id={recipe.id}
            name={recipe.name}
            ingredients={recipe.ingredients}
            imageURL={recipe.imageURL}
            cookingMethod={recipe.cookingMethod}
            key={recipe.id}
        />
    ));

    return <div>{recipesStr}</div>;
}
