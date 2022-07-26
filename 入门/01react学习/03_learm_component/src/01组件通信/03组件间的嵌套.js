import React, { Component } from 'react'

//header
function Header(){
  return (
    <div>
      我是header组件
    </div>
  )
}

//main
function ProductList() {
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  )
}
function Banner() {
  return (
    <h3>我是Banner组件</h3>
  )
}

function Main(){
  return (
    <div>
      <Banner></Banner>
      <ProductList></ProductList>
    </div>
  )
}
// footer
function Footer(){
  return (
    <div>
      我是Footer组件
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App组件</h1>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    )
  }
}
