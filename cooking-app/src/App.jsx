//import logo from './logo.svg';
import './App.css';
import Eheader from './elements/Eheader';
import CCIngredient from './class-comps/CCIngredient';

function App() {
    return (
        <div className='App'>
            {Eheader}
            <hr />
            <div id='ph'>
                <CCIngredient
                    ingredientId={1}
                    name='Baba Ganoush'
                    imageURL='https://sixhungryfeet.com/wp-content/uploads/2020/11/Baba-Ganoush-2.jpg'
                    calories={150}
                ></CCIngredient>
            </div>
        </div>
    );
}

export default App;
