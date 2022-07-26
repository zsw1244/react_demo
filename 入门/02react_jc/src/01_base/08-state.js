import React, { Component } from 'react'

export default class App extends Component {
    state = {
        text: "收藏"
    }
    btntext = () => {
        if (this.state.text === "收藏") {
            this.setState({
                text: "取消收藏"
            })
        } else {
            this.setState({
                text: "收藏"
            })
        }
    }
    render() {
        return (
            <div>
                <h1>
                    欢迎来到react开发
                </h1>
                <button onClick={this.btntext}>{this.state.text}</button>
            </div>
        )
    }
}
