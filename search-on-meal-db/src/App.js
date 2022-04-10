
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Meals from './Components/Meals/Meals';
import NotFound from './Components/NotFound/NotFound';
import SingleMeal from './Components/SingleMeal/SingleMeal';


function App() {
  return (
    <div className="App">
      <div style={{backgroundColor:'yellow'}}>
        <h3>this is a demo navbar
          <br />
          <Link to='/meals'>search items</Link>
          <br />
          <Link to='/'> home</Link>
        </h3>
      </div>
      <Routes>
        <Route path='/meals' element={<Meals></Meals>}></Route>
        <Route path='/meals/:id' element={<SingleMeal></SingleMeal>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
