
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Headers from './Components/Header/Header';
import Home from './main/home/home';
import MovieList from './Components/movieList/movieList';
function App() {
  return (
    <div className="App">
<Router>
<Headers/>

<Routes> 
  <Route index element={<Home/>}></Route>
   <Route path='movies/:id' element={<h1>Movie Details page</h1>}></Route>
<Route path='movies/:type' element={<MovieList/>}></Route>
<Route path='/*' element={<h1> Error page</h1>}></Route>
</Routes>
    
 
</Router>
    </div>
  );
}

export default App;
