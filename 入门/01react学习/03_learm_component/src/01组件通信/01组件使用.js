// import React , { Component} from 'react'

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       message:"hellow word"
//     }
//   }
//   render() {
//     return (
//       <div>
//         我是app组件
//         <h2>{this.state.message}</h2>
//       </div>
//     )
//   }
// }

/**
 * 函数式组件的特点:
 *  1.没有this对象
 *  2.没有内部的状态
 */
function App(){
  return (
    <div>
      <span>我是function的组件: App组件</span>
      <h2>counter</h2>
      <button>+1</button>
      <h2>你好啊,王小波</h2>
    </div>
  )
}
export default App;
