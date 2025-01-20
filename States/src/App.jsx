import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardWrapper from '../../Wrapper_Components/src/Components/CardWrapper'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardWrapper title="Card Title 1" footer="Card Footer 1">
        {" "}
        <p>This is the content of the card 1.</p> 
        <p>More content can go here.</p>{" "}
      </CardWrapper>
      <br />
      <CardWrapper title="Card Title 2" footer="Card Footer 2">
        {" "}
        <p>This is the content of the card 2.</p> 
        <p>More content can go here.</p>{" "}
      </CardWrapper>
      <br />
      <CardWrapper title="Card Title 3" footer="Card Footer 3">
        {" "}
        <p>This is the content of the card 3.</p> 
        <p>More content can go here.</p>{" "}
      </CardWrapper>
    </>
  )
}

export default App
