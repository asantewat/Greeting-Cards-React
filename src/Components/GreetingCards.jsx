import React from 'react'

const GreetingCards = ({title, message}) => {
  return (
    <div className='border p-10'>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  )
}

export default GreetingCards
