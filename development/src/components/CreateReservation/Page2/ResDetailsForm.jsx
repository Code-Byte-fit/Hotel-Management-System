import React from 'react'
import Input from '../../Common/Input/Input'
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from 'yup'
import style from "./Page2.module.css"

export default function ResDetailsForm() {
  const schema=yup.object().shape({
    name:yup.string().required(),
  })
    const {register,handleSubmit}=useForm({resolver:yupResolver(schema)})

    
    const onSubmit=(data)=>{
      console.log(data)
    }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <span className={style.sectionHeading}>RESERVATION DETAILS</span>
      <Input label="Source" type="select"/>
      <Input label="Arrival Time" type="time"/>
    <span className={style.sectionHeading}>MAIN GUEST</span>
      <div>
      <Input label="First name" type="text"/>
      <Input label="Last name" type="text"/>
      <Input label="Date of Birth" type="date"/>
      <Input label="Country" type="select"/>
      </div>
      <div>
      <Input label="Email" type="email"/>
      <Input label="Phone Number" type="text"/>
      
      </div>

    </form>

    </>
  )
}
