import React, { Component } from 'react'
// 相似点：都是纯js对象，都会触发render更新，都具有确定性（状态/属性相同，结果相同）
// 不同点：
// 1. 属性能从父组件获取，状态不能
// 2. 属性可以由父组件修改，状态不能
// 3. 属性能在内部设置默认值，状态也可以，设置方式不一样
// 4. 属性不在组件内部修改，状态要在组件内部修改
// 5. 属性能设置子组件初始值，状态不可以
// 6. 属性可以修改子组件的值，状态不可以

class Childre extends Component {
    render() {
        let { cbtn , text } = this.props
      return (
        <div >
            {text}
            <button onClick={cbtn}>修改</button>
        </div>
      )
    }
  }
export default class App extends Component {
  state = {
      text: "123"
  }
  btn = ()=>{
      this.setState({
        text:"456"
      })
  }
  render() {
    return (
      <div>
          <button onClick={this.btn}>修改</button>
          <Childre text={this.state.text} cbtn={this.btn}></Childre>
      </div>
    )
  }
}
