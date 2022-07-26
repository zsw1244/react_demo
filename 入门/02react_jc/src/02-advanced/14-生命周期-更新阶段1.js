import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class App extends Component {
  state = {
    myname: "tom",
    list: []
  }
  componentDidMount() {
    axios.get("/test.json").then(res => {
      console.log(res.data.data.films)

      this.setState({
        list: res.data.data.films
      })
      // 访问
      new BetterScroll("#warpper")
    })
  }
  componentWillUpdate() {
    console.log("componentWillUpdate", document.getElementById("myname"))
  }
  componentDidUpdate(prevProps,prevState) {
    console.log("componentDidUpdate", document.getElementById("myname"))
    // 更新后， 想要获取dom节点， 更新
    console.log("prevState",prevState.list)
    if(prevState.list.length===0){
        new BetterScroll("#warpper")
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => { this.setState({ myname: "张三" }) }}>点击</button>
        <div id='myname'>{this.state.myname}</div>
        <div id='warpper' style={{
          height: "100px", overflow: "hidden", background: "yellow"
        }}>
          <ul>
            {
              this.state.list.map((item, index) => {
                return (
                  <li key={item.filmId}>{item.name}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
