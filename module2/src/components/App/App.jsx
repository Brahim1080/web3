import { useState } from 'react'

import Display from 'components/Display/Display'
import Button from 'components/Button/Button'

const App = () => {
  const [counter, setCounter] = useState(0)

  console.log('rendering with counter value', counter)


  const changeCount = (delta) => setCounter(counter + delta)
 

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