import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        mytext: "aaa"
      },
      {
        id: 2,
        mytext: "bbb"
      },
      {
        id: 3,
        mytext: "ccc"
      }
    ]
  }
  myref = React.createRef()
  render() {

    return (
      <div>
        {/* <input ref="mytext"/> */}
        <input ref={this.myref} />
        <button onClick={this.handleClick}>add1</button>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return (
                <li key={item.id}>
                  {item.mytext}
                  {/* <button onClick={this.del.bind(index)}>删除</button> */}
                  <button onClick={ ()=>this.del(index)}>删除</button>
                </li>
              )
            })
          }
        </ul>
        {/* 三部条件判断 */}
        {/* {this.state.list.length>0?"":<div>暂无可办事件</div>} */}
        { this.state.list.length === 0 && <div>暂无可办事件</div>}
      </div>
    )
  }
  del = (index) =>{
    let newListdel = this.state.list.concat()
    newListdel.splice(index,1)
    this.setState({
      list:newListdel
    })
  }
  handleClick = () => {
    let newList = [...this.state.list]
    newList.push({mytext:this.myref.current.value,id:this.state.list.length+1})
    console.log(newList)
    this.setState({
      list:newList
    })

    // 清除框
    this.myref.current.value = ""
  }

}
