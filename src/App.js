import React, { useState } from "react"
import "./App.css"
import GoogleLogin from "react-google-login"
function App() {
  const responseGoogle = response => {
    console.log(JSON.stringify(response))
  }
  if (!process.env.REACT_APP_GOOGLE_CLIENT_ID) {
    alert("Please include .env file for your API keys")
  }
  return (
    <div className="App">
      <header className="App-header">
        <>
          <div>Welcome</div>
          <GoogleLogin clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} buttonText="Login" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={"single_host_origin"} />
        </>
      </header>
    </div>
  )
}

export default App
