//import logo from './logo.svg';
import './App.css';
import Eheader from './elements/Eheader';
import CCMyKitchen from './class-comps/CCMyKitchen';

function App() {
    return (
        <div className='App'>
            {Eheader}
            <hr />
            <CCMyKitchen />
        </div>
    );
}

export default App;
