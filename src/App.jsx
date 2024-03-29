import { useState } from 'react'
import Header from './Layouts/Header';
import NavBar from './Layouts/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
    </>
  )
}

export default App
