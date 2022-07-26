import React, { Component } from 'react'

class Cpn extends Component{
  componentWillUnmount(){
    console.log("执行了组件的componentWillUnmount方法");
  }
  render(){
    return (
      <div>
        我是组件
      </div>
    )
  }
}

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      count:1,
      isShow:true
    }
    console.log("执行了组件的constructor方法");
  }
  componentDidMount(){
    console.log("执行了组件的componentDidMount方法");
  }
  componentDidUpdate(){
    console.log("执行了组件的componentDidUpdate方法");
  }
  increment(){
    this.setState({
      count:this.state.count+1
    })
  }
  changebtn(){
    this.setState({
      isShow:!this.state.isShow
    })
  }
  render() {
    console.log("执行了组件的render方法");
    return (
      <div>App
        <h2>当前计数：{this.state.count}</h2>
        <button onClick={ e =>{this.increment()}}>+1</button>
        <br/>
        {this.state.isShow && <Cpn></Cpn>}
        <button onClick={ e => this.changebtn()}>切换</button>
      </div>
      
    )
  }
}
