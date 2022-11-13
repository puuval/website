import React from 'react'
import './App.css';
import Container from '@mui/material/Container';
import axios from 'axios'
import { useState, useEffect } from 'react';

/*
FRONTEND FOR THE APPLICATION
MAKES AND MAINTAINS THE CONNECTION TO THE BACKEND
*/

/*
Creates instance to use .env file
*/
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL
})

/*
Unix-time clock
*/
function UnixClock() {
  const [date, setDate] = useState(new Date())
  
  function refreshClock() {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 10);
    return function cleanup() {
      clearInterval(timerId);
    }
  }, [])

  return (
    <span>
      {Math.round(date.getTime()/1000)}
    </span>
  );
}

/*
This class keeps track of the state of the application
*/
class App extends React.Component {
  componentDidMount() {}

  /*
  Renders the state of the application to the browser
  */
  render() {
    return (
      <>
      <Header />
      <HeaderUnix />
      <Clock />
      </>
  )}
}

/*
Header
*/
const Header = () => {
  return(
    <>
    <Container id="header1">
      <h1>WORK</h1>
    </Container>
    <Container id="header2">
        <h2>IN PROGRESS</h2>
    </Container>
    </>
  )
}

/*
Unix time header 
*/
const HeaderUnix = () => {
  return(
    <Container id="headerUnix" >
  <h4>UNIX TIME</h4>
    </Container>
  )
}

/*
Unix-clock 
*/
const Clock = () => {
  return(
    <Container id="time" >
      <h5> <UnixClock /> </h5>
    </Container>
  )
}

export default App;
