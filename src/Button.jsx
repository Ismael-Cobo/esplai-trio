import React from 'react'

export const Button = ({ fn }) => {
  return (
    <button onClick={fn} style={{ width: 'max-content' }}>Calcular</button>
  )
}
