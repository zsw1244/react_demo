import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myusername:"kerwin"
    }
    render() {
        let { myusername } = this.state
        return (
            <div>
                <h1>登录页</h1>
                <input  
                    type="text"  
                    value={this.state.myusername}
                    onChange={(evt)=>{
                        this.setState({
                            myusername:evt.target.value
                        })
                    }}/>

                <button onClick={()=>{
                    console.log(myusername)
                }}>登录</button>
                <button onClick={()=>{
                    this.setState({
                        myusername:""
                    })
                }}>重置</button>


                {/* <Child myvalue={this.myusername.current.value}/> */}
            </div>
        )
    }
}
