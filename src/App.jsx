import './App.css'
import { NavBar } from './components/NavBar/NavBar';
import { item } from './components/itemListContainer/itemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App (){
  return(
    <div>
         <NavBar />
         <item />
         
    </div>
    
  )
}

export default App;
