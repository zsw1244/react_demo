import React, { Component } from 'react'

class Btn extends Component {
  render(){
    const {onClick} = this.props;
    return <button onClick={onClick}>+1</button>
  }
}

export default class App extends Component {
  constructor(){
    super()
    this.state={
      counter:0
    }
  }
  // increment = ()=>{
  //   this.setState({
  //     counter:this.state.counter + 1
  //   })
  // }
  increment(){
    this.setState({
      counter:this.state.counter + 1
    })
  }
  render() {
    return (
      <div>
        <h1>当前计数:{this.state.counter}</h1>
        <button onClick={e=>this.increment()}> +1</button>
        <Btn onClick={e=>this.increment()}></Btn>
      </div>
    )
  }
}
