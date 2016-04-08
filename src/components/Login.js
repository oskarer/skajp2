import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'

let Login = ({ dispatch }) => {
  let username
  let password

  return (
    <div>
      <input ref={(ref) => username = ref} placeholder="Username" type="text" />
      <input ref={(ref) => password = ref} placeholder="Password" type="password" />
      <button onClick={() => {
        dispatch(login(username, password))
      }}>
        Login
      </button>
    </div>
  )
}
Login = connect()(Login)

export default Login
