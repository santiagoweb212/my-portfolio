import { myFont } from '@/app/fonst'
import React from 'react'
interface InputProps{
    textPlaceHolder:string,
    textLabel:string
}
const Input = ({textPlaceHolder,textLabel}:InputProps) => {
  return (
    <div className=" flex flex-col text-colorTextoParrafo">
        <label htmlFor="" className={`${myFont.className} text-xl`}>{textLabel}</label>
        <input type="text" placeholder={textPlaceHolder} className="py-2 px-3  outline outline-slate-400 outline-1 rounded-lg " />
      </div>
  )
}

export default Input