
import React from 'react'
import Pig from './Pig.jsx'
import Cow from './Cow.jsx'
import Rooster from './Rooster.jsx'
import Snake from './Snake.jsx'
import Sheep from './Sheep.jsx'



const App = () => {
  return (
    <div className='farm'>
      <div  className='title'>
        <h1>Fun farm</h1>,
    </div>
      <div  className='Pig'>
        <Pig />,
    </div>
      <div  className='Cow'>
        <Cow />,
    </div>
      <div  className='Rooster'>
        <Rooster />,
    </div>
      <div  className='Snake'>
        <Snake />,
    </div>
      <div  className='Sheep'>
        <Sheep />,
    </div>
    </div>
  )
}



export default App
