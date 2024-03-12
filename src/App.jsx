
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from './views/NotFound';


function App() {
  
  return (
    <div className='Container2'>
      <Navigation/>

      <Routes>

        <Route
        path='/'
        element={<Home/>}
        />

        <Route
        path='/Contact'
        element={<Contact/>}
        />

        <Route
        path='*'
        element={<NotFound/>}
        />
       
        

      </Routes>

      
    </div>
  )
}

export default App
