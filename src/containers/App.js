import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'

let App = (state) => {
  const content = state.user.get('loggedIn') ? <div>hallå</div> : <Login />

  return (
    <div>
      {content}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

App = connect(mapStateToProps)(App)

export default App
