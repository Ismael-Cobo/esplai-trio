import { useState } from "react"
import { Bola } from "./Bola"
import { Button } from "./Button"


function App() {

  const [numeros, setNumeros] = useState([
    { id: 1, num: Math.round(Math.random() * 50) },
    { id: 2, num: Math.round(Math.random() * 50) },
    { id: 3, num: Math.round(Math.random() * 50) },
  ])

  const [result, setResult] = useState(null)

  const handleClick = () => {
    const reduce = numeros.reduce((prev, curr) => prev + curr.num, 0)
    setResult(reduce)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        {
          numeros.map(({ id, num }) => (
            <Bola key={id} num={num} />
          ))
        }
      </div>
      <Button fn={handleClick} />

      {
        result && result
      }
    </div>
  )
}

export default App
