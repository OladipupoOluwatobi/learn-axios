import React from 'react'

const Button = ({click}) => {
  return (
    <div className='App'>
        <button onClick={click}>
            Click
        </button>
    </div>
  )
}

export default Button