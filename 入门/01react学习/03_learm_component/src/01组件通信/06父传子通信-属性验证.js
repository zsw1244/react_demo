import React , {Component} from 'react'
import PropTypes from 'prop-types';

function ChildCpn(props) {
  const { name, age, height } = props;
  console.log(name, age, height);
  const { names } = props;
  return (
    <div>
      <h2>{name + age + height}</h2>
      <ul>
        {
          names.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}


//控制属性的类型
ChildCpn.propTypes = {
  //必传属性
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array
}

//传参的默认值
ChildCpn.defaultProps = {
  name: "why",
  age: 30,
  height: 1.98,
  names: ["aaa", "bbb"]
}
//写法二
// class ChildCpn2 extends Component {
//   // es6中的class fields写法
//   static propTypes = {

//   }

//   static defaultProps = {

//   }
// }
export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="why" age={18} height={1.88} names={["abc", "cba"]}/>
        <ChildCpn name="kobe" age={40} height={1.98} names={["nba", "mba"]}/>
        <ChildCpn/>
      </div>
    )
  }
}
