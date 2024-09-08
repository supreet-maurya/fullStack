
//components
import { useContext } from 'react';
import Header from './components/header/Header';
import Home from './components/home/home';
import UserContext from './context/UserContext';
// import DataProvider from './context/DataProvider';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';

function App() {
  const {setOpen} = useContext(UserContext);
  const handleClick = () =>{
    setOpen(false);
  }
  return (

      <BrowserRouter>
        <div onClick={handleClick} className="App">
          <Header />
          <div className='mt-[73px]'>
            <Routes>
              <Route path = '/' element = {<Home />}/>
              <Route path = '/product/:id'  element = {<DetailView />}  />
              <Route path = '/cart' element = {<Cart/>}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
