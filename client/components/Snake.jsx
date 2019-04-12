import React from 'react'

class Snake extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


// sound event listener here 


render(){
  return (
  <div>
  <h2>I'm Snake</h2>
  <img src="/images/snake.jpg"width="100" height="100"></img>
</div>
  )
  }
}

export default Snake