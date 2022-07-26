import React, { useState ,useEffect} from 'react'
import axios from 'axios'
export default function App() {
  const [list, setlist] = useState([])
  useEffect(() => {
    axios.get("/test.json").then(res=>{
      console.log(res.data)
      setlist(res.data.data.films)
  })
  }, [])
  return (
    <div>
      {
        list.map((item,index)=>{
          return (
            <li key={index}>{item.name}</li>
          )
        })
      }
    </div>
  )
}
