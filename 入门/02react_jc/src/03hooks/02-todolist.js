import React , { useState} from 'react'

export default function App() {
  const [text, settext] = useState("")
  const [list, setlist] = useState(["aa","bb","cc"])
  let handeradd = (evn) =>{
    settext(evn.target.value)
  }
  let handerbtn = () =>{
    setlist([...list,text])
    settext("")
  }
  let handerdel = (index) =>{
    console.log(index)
    var newlist = [...list]
    newlist.splice(index,1)
    setlist(newlist)
  }
  return (
    <div>
      <input onChange={handeradd} value={text}></input>
      <button onClick={handerbtn}>添加</button>
      {
        list.map((item,index)=>{
          return (
            <li key={index}>
              {item}
              <button onClick={()=>{handerdel(index)}}>del</button>
            </li>
          )
        })
      }
      {!list.length && <div>暂无可办事件</div>}
    </div>
  )
}
