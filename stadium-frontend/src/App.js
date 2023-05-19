import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StadiumList from './components/StadiumList';
import StadiumCreation from './components/StadiumCreation';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<StadiumList />}/>
        <Route path='/create' element={<StadiumCreation/>}/>
      </Routes>
    </div>
  );
}

export default App;
