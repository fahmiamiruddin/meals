import './App.css';
// import FunctionalTest from './components/FunctionalTest';
import Navbar from './components/Navbar';
// import { StateComp } from './components/StateComp';
// import UseEffectComp from './components/UseEffectComp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Meals from './pages/Meals';
import DetailMeal from './pages/DetailMeal';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/meals' element={<Meals/>} />
          <Route path='/meal/:idMeal' element={<DetailMeal />} />
        </Routes>
        
        {/* <FunctionalTest/> */}
        {/* <StateComp/> */}
        {/* <UseEffectComp/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
