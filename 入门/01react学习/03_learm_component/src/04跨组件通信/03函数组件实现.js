import React, { Component } from 'react'

//创建context对象

const Usercontext = React.createContext({
  nickname: "aaa",
  level: 0
})

function ProfileHeader() {
  return (
    <Usercontext.Consumer>
      {
        value => {
          return (
            <div>
              <h2>用户昵称：{value.nickname}</h2>
              <h2>用户等级：{value.level}</h2>
            </div>
          )
        }
      }
    </Usercontext.Consumer>
  )
}


function Profile(props) {
  return (
    <div>
      <ProfileHeader></ProfileHeader>
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nickname: "tom",
      level: 99
    }
  }
  render() {
    return (
      <div>
        <Usercontext.Provider value={this.state}>
          <Profile></Profile>
        </Usercontext.Provider>
      </div>
    )
  }
}
