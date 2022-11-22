import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Formulario from './components/pages/Formulario';
import Login from './components/pages/Login';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Formulario />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
