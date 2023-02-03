import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';


function App() {
  return(
    <div className='App'>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/product/:id" element={<Details/>} />
        <Route path="/product/edit/:id" element={<Update/>} />
      </Routes>
    </div>
  )
}

export default App;
