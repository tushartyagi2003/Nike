import React from 'react'

const Button = ({text, width}) => {
  return (
    <button style={{height: "40px", width: width , backgroundColor:"red" , color:"#fff", borderRadius:"10px"}}>{text}</button>
  )
}

export default Button