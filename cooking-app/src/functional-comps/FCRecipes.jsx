import CCRecipe from '../class-comps/CCRecipe';

export default function FCRecipes(props) {
    const getIdFromRecipe = (id) => {
        props.sendIdToPrepareFromRecipes(id);
    };

    let recipesStr = props.recipes.map((recipe) => (
        <CCRecipe
            id={recipe.id}
            name={recipe.name}
            ingredients={recipe.ingredients}
            imageURL={recipe.imageURL}
            cookingMethod={recipe.cookingMethod}
            key={recipe.id}
            sendIdtoPrepareFromRecipe={getIdFromRecipe}
        />
    ));

    return <div>{recipesStr}</div>;
}
