import React from 'react'
import PropTypes from 'prop-types'
Sidebar.prototype = {
  bg:PropTypes.string,
  position:PropTypes.string
}
//传参的默认值
Sidebar.defaultProps = {
  bg:'red',
  position:'left'
}
export default function Sidebar(props) {
  let {bg,position} = props
  var obj1 = {
      left:0
  }
  var obj2 = {
      right:0
  }

  var obj = {
      background:bg,
      width:"200px",
      position:"fixed"
  }

  var styleobj = position==="left"?{...obj,...obj1}:{...obj,...obj2}

  return (
      <div style={styleobj}>
          <ul>
              <li>11111</li>
              <li>11111</li>
              <li>11111</li>
              <li>11111</li>
              <li>11111</li>
              <li>11111</li>
              <li>11111</li>
              <li>11111</li>
              <li>11111</li>
              <li>11111</li>
              <li>11111</li>
              <li>11111</li>
          </ul>
      </div>
  )
}

