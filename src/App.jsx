import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter';
import Users from './Users';
import Friends from './Friends';
// import Counter from './counter';





function App() {
  function handleClick(){
    alert('Button clicked');
  }
  const handleClick2 = () =>{
    alert('Tr mare cudi');
  }
  const thirdButton =(n)=>{
    alert(n+2)
  }

  return (
    <>
      <h1>React core concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      {/* <Counter></Counter> */}
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      {/* <button onClick={thirdButton(2)}>Third Button</button> */}
    </>
  )
}

export default App
