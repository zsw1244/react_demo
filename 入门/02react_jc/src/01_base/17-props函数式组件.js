/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

 import React, { Component } from 'react'
 import Navbar from './16Navbar/index.js'
 import Sidebar from './17Sidebar/index'
 export default class App extends Component {
     render() {
         return (
             <div>
                 {/* 类组件 */}
                 <Navbar title="导航"></Navbar>

                {/* 函数式组件 */}
                 <Sidebar bg="red" position="left"></Sidebar>
             </div>
         )
     }
 }
 