import React from "react"
import { Fieldset } from "./styles"

function Input({id, label, type, placeholder, register, disabled  }) {
  return (
    <Fieldset>
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} {...register} disabled={disabled}/>
    </Fieldset>
  )
}

export default Input
