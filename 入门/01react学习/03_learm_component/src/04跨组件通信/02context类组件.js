import React, { Component } from 'react'

//创建context对象

const Usercontext = React.createContext({
  nickname:"aaa",
  level:0
})

class ProfileHeader extends Component{
  render() {
    const {nickname,level } = this.context
    return (
      <div>
        <div>
          <h2>用户昵称：{nickname}</h2>
          <h2>用户等级：{level}</h2>
        </div>
      </div>
    )
  }
}
ProfileHeader.contextType = Usercontext


function Profile(props){
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
  constructor(props){
    super(props)
    this.state = {
      nickname:"tom",
      level:99
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
