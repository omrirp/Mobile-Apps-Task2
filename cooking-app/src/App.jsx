//import logo from './logo.svg';
import './App.css';
import Eheader from './elements/Eheader';
import CCIngredient from './class-comps/CCIngredient';
import CCRecipe from './class-comps/CCRecipe';
import CCMyKitchen from './class-comps/CCMyKitchen';

function App() {
    return (
        <div className="App">
            {Eheader}
            <hr />
            <CCMyKitchen />

            <div id="ph">
                {/* <CCRecipe
                    id={1}
                    name="Baba Ganoush"
                    ingredients={['Tehini', 'Eggplants']}
                    imageURL="https://sixhungryfeet.com/wp-content/uploads/2020/11/Baba-Ganoush-2.jpg"
                    cookingMethod="mix"
                /> */}
            </div>
        </div>
    );
}

export default App;
