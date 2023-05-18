import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StadiumList from './components/StadiumList';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<StadiumList />}/>
      </Routes>
    </div>
  );
}

export default App;
