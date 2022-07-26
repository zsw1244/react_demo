import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Navbar extends Component {
  // 类属性
  static propTypes = {
    title: PropTypes.string,
    leftshow: PropTypes.bool
  }

  //默认值
  static defaultProps = {
    leftshow: true
  }
  render() {
    let { title , leftshow} = this.props
    return (
      <div>
        {leftshow && <button>返回</button>}
        navbar-{title}
        <button>home</button>
      </div>
    )
  }
}
