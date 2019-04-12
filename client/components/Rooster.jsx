import React from 'react'

class Rooster extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false
      };
      this.url="../../sound/rooster.mp3"
      this.audio = new Audio(this.url)
    };
    play(){
      this.setState({
      play:true 
      });
     this.audio.play()
    };

// sound event listener here 


render(){
  return (
  <div>
  <h2>I'm Rooster</h2>
  <button onClick={this.play.bind(this)}><img src="/images/rooster.jpg"width="100" height="100"></img></button>
</div>
  )

  }
}


export default Rooster