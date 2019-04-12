class Cow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false
      };
      this.url="../../sound/airhorn.mp3"
      this.audio = new Audio(this.url)
    };
    play(){
      this.setState({
      play:true 
      });
     this.audio.play()
    };
    
    
// load sound
// click something, play sound
//connect click/play to image

// sound event listener here 
render(){
  return(
    <div>
  <button onClick={this.play.bind(this)} type="button">click</button>
</div>
  )
  }
}
