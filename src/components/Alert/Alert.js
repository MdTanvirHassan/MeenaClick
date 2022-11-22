import React from 'react'

export default function Alert(props) {
    const capitalize =(word)=> {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}fully!</strong> {capitalize(props.alert.message)}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
    </div>
  )
}
