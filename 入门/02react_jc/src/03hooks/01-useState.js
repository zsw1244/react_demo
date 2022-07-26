import React, { useState } from 'react'

export default function App() {
  const [name, setName] = useState("tom")
  const [age] = useState(100)
  return (
    <div>
      <button onClick={() => {
        setName("张三")
      }}>点击</button>
      <div>{name}-{age}</div>
    </div>
  )
}
