import React from 'react'

class Cow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


// sound event listener here 


render(){
        return(
          <div>
              <h2>I'm cow</h2>
              <img src="/images/cow.gif"width="100" height="100"></img>
          </div>
        )
  }
}


export default Cow