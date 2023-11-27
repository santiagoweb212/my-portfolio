import React from 'react'
import { myFont } from '../fonst'

const Title = ({texto}) => {
  return (
    <h1 className={`${myFont.className} text-prymari py-2 text-4xl underline`}>{texto}</h1>
  )
}

export default Title