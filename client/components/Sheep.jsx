import React from 'react'

class Sheep extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


// sound event listener here 


render(){
  return (
  <div>
  <h2>I'm Sheep</h2>
  <img src="/images/sheep.jpg"width="100" height="100"></img>
</div>
  )
  }
}


export default Sheep