import React from 'react'

export const Bola = ({ num }) => {
  return (
    <span style={{
      width: '50px',
      height: '50px',
      backgroundColor: 'pink',
      fontSize: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      color: 'white',
      padding: '1rem'
    }}>{num}</span>
  )
}
