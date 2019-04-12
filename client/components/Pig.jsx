import React from 'react'

class Pig extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false
      };
      this.url="../../sound/pig.mp3"
      this.audio = new Audio(this.url)
    };
    play(){
      this.setState({
      play:true 
      });
     this.audio.play()
    };


  // sound event listener here 


  render() {
   
   return (
   <div>
    <h2>I'm Pig</h2>
    <button onClick={this.play.bind(this)}><img src="/images/pig.jpg"width="100" height="100"></img></button>
</div>
   )    
  }
}

export default Pig