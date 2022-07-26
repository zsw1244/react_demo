import React, { Component } from 'react'
import Navbar from './16Navbar/index'
export default class App extends Component {

  render() {
    return (
      <div>
        <div>
          <h1>
            首页
          </h1>
          <Navbar title="首页" leftshow={true}></Navbar>
        </div>
        <div>
          <h1>
            列表
          </h1>
          <Navbar title="列表" leftshow={true}></Navbar>
        </div>        
        <div>
          <h1>
            购物车
          </h1>
          <Navbar title="购物车" leftshow={true}></Navbar>
        </div>
      </div>
    )
  }
}
