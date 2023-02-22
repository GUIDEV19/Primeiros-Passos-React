import React from 'react'

const Container = ({children, myValue}) => {
  return (
    <div>
        <h1>Teste Childern</h1>
        {children}
        <p>{myValue}</p>
    </div>
  )
}

export default Container