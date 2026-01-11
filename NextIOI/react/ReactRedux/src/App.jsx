import './App.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByVal
} from '../src/action/action'


import { thunkHandler } from './action/productAction';

import HeaderCompo from './components/header';

function App() {
  const count = useSelector((state) => state.counter.value)
  const LoginStatus = useSelector((state) => state.user.isLoggedIn)
  // const prods = useSelector((state) => state.products.prod)
  const dispatch = useDispatch();

  const handleClickIncrement = ()=>{
    dispatch(increment())
  }
  const handleClickIncrementByVal = ()=>{
    dispatch(incrementByVal(10))
  }
  const handleClickDecrement = ()=>{
    dispatch(decrement())
  }
  const handleClickUser = ()=>{
    dispatch({type : 'toggleState'})
  }


  return (
    <>
      <header>
        <HeaderCompo
          CartCount={count}
        />
      </header>
      <main>

        <button onClick={handleClickIncrement} style={{margin:2}}> Increment </button>
        <button onClick={handleClickIncrementByVal}  style={{margin:2}} > Increment By 10 </button>
        <button onClick={handleClickDecrement}  style={{margin:2}}> Decrement </button>
        <button onClick={handleClickUser}  style={{margin:2}}> User Status </button>
        <button onClick={() => dispatch(thunkHandler())} style={{margin:2}}> Fetch Products </button>
        <h1>{count}</h1>
        <h1>{(LoginStatus) ? 'Logged In' : 'Logged Out'}</h1>
      </main>
    </>
  )
}

export default App