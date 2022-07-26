import React, { Component } from 'react'
import './css/02-maizuo.css'
import Center from './12component/Center'
import Cinema from './12component/Cinema'
import Film from './12component/Film'
export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "电影"
      },
      {
        id: 2,
        text: "影院"
      },
      {
        id: 3,
        text: "我的"
      }
    ],
    current: 0
  }
  heandeClick(index) {
    this.setState({
      current: index
    })
  }
  which() {
    switch (this.state.current) {
      case 0:
        return <Film></Film>
      case 1:
        return <Cinema></Cinema>
      case 2:
        return <Center></Center>

      default:
        return null
    }
  }
  render() {
    return (
      <div>
        {
          this.which()
        }
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li
                  className={this.state.current === index ? 'active' : ''}
                  key={item.id} onClick={() => this.heandeClick(index)}>
                  {item.text}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
