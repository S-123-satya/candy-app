import React from 'react'
import Input from '../UI/Input'

const AddCandy = (props) => {
  return (
    <form onSubmit={props.onAddcandy} >
        <Input label="name" type="text" ></Input>
        <Input label="desc" type="text" ></Input>
        <Input label="price" type="number" ></Input>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default AddCandy