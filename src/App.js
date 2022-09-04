import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

export default class App extends Component {
  //A STATE is aglobal object that contains all the most important things of the specific APP component
  state = { advice : '' };

componentDidMount(){
  //Here we will catch the actual advice API using axios
  this.fetchAdvice();
}
fetchAdvice = () => { //this is a method that belong to a class not a Function thats why we doont need CONST
  axios.get('https://api.adviceslip.com/advice')
     .then((response)=>{
      const {advice} = response.data.slip;
      this.setState({advice})

      // this.setState({advice : advice})

      //In line 7 we have the KEY advice and in line 16 we have the VALUE advice
      //In JS there is a rule if both value and key has same name we can only write it once like in line 17 
      
        // console.log(response.data.slip.advice);
        //This another way of doing of logging advice only in the CONSOLE

  })
  .catch((error)=>{
      console.log(error)
  });
}
  render() {
    // using the state we are rendering advice
    const {advice} = this.state
    return (
      <div className='app'>
        
        <div className='card'>

        <h className = 'heading'>{advice}</h>
        <button className='button' onClick={this.fetchAdvice}>
          <span>
            Give Me Adivce!
          </span>
        </button>
        </div>
        
      

      </div>
    )
  }
}
