import { useState } from 'react'

import Display from 'components/Display/Display'
import Button from 'components/Button/Button'

const App = () => {
 
  const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")))

  console.log('rendering with counter value', counter)


  const changeCount = (delta) => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter + delta;
      localStorage.setItem("counter", JSON.stringify(newCounter));
      return newCounter;
    });
  }
  
 

  return (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount} text="plus" delta={1} />
      <Button changeCount={changeCount} text="zero" delta={-counter}/>
      <Button changeCount={changeCount} text="minus" delta={-1}/>
    </div>
  )
} 
export default App