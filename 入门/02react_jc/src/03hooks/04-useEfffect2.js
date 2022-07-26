import React, { useState ,useEffect} from 'react'
export default function App() {
  const [name, setname] = useState("tom")
  useEffect(() => {
    setname(name.substring(0,1).toUpperCase()+name.substring(1))
  }, [name])
  return (
    <div>
      app-{name}
      <button onClick={()=>{setname("zsw")}}>点击</button>
    </div>
  )
}
