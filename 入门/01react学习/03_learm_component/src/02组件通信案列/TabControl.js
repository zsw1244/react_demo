import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class TabControl extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 0
    }
  }
  itemClick(index) {
    this.setState({
      currentIndex: index
    })
    const {itemClick} = this.props;
    itemClick(index);
  }
  render() {
    const { titles } = this.props
    const { currentIndex } = this.state
    return (
      <div className='tab-control'>
        {
          titles.map((item, index) => {
            return (
              <div
                key={item}
                className={'tab-item ' + (index === currentIndex ? "active" : "")}
                onClick={e => this.itemClick(index)}>
                <span>{item}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}
TabControl.propTypes = {
  titles: PropTypes.array.isRequired
}
