import React, { Component } from 'react'

function Childcpn(){
  return (
    <div>
      子组件展示信息：{"名字:" + this.props.name + "年龄:" + this.props.age }
    </div>
  )
}


export default class App extends Component {
  render() {
    return (
      <div>
        <Childcpn name="why" age="18"></Childcpn>
      </div>
    )
  }
}
