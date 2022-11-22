import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Character from './components/pages/Character';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/character' element={<Character />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
