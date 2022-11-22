import CCRecipe from '../class-comps/CCRecipe';

export default function FCRecipesDone(props) {
    const getIdFromRecipe = (id) => {
        props.sendIdToEatFromRecipes(id);
    };

    let recipesStr = props.recipes.map((recipe) => (
        <CCRecipe
            id={recipe.id}
            name={recipe.name}
            ingredients={recipe.ingredients}
            imageURL={recipe.imageURL}
            cookingMethod={recipe.cookingMethod}
            key={recipe.id}
            sendIdToEatFromRecipe={getIdFromRecipe}
            sendIdToPrepareFromRecipe={() => {}}
            isReady={recipe.isReady}
        />
    ));

    return <div>{recipesStr}</div>;
}
