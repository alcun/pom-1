import './App.css';
import React, { useState, useEffect } from 'react';




const App = () => {
  const [breakLength, setBreakLength] = React.useState(5)
  const [sessionLength, setSessionLength] = React.useState(25)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [timingType, setTimingType] = React.useState("SESSION")
  const [timeLeft, setTimeLeft] = React.useState(1500)



  const handleBreakIncrease = () => {
    if (breakLength < 60){
      setBreakLength(breakLength +1)
    }
  }

  const handleBreakDecrease = () => {
    if (breakLength > 1){
      setBreakLength(breakLength -1)
    }
  }

  const handleSessionIncrease = () => {
    if (sessionLength < 60){
      setSessionLength(sessionLength +1)
      setTimeLeft(timeLeft + 60)
    }
  }

  const handleSessionDecrease = () => {
    if (sessionLength > 1){
      setSessionLength(sessionLength -1)
      setTimeLeft(timeLeft - 60)

    }
  }


  const beginPlay = () => {}

  const pausePlay = () => {}

  const playAudio = () => {}

  

  const resetTimer =() => {}



  const handleReset = () => {
    pausePlay()
    pauseAudio()
    setBreakLength(5)
    setSessionLength(25)
    setTimeLeft(1500)


  }

  const handlePlay = () => {
    if playing then 
    pause


  }









  const timeFormatter = () =>{
  const minutes = Math.floor((timeLeft) / 60);
  const seconds = (timeLeft) - minutes * 60;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  return `${formattedMinutes}:${formattedSeconds}`;
}


  



  const title = timingType === "SESSION" ? "Session" : "Break";


  

  return (

    <main className="App">
      <div className="wrapper">
        <h2>Pomodoro</h2>
        <div className="break-session-length">
          <div>
            <h3 id="break-label">Break Length</h3>
            <div>
              <button disabled={play} onClick={handleBreakIncrease} id="break-increment">Increase</button>
                <strong id="break-length">{breakLength}</strong>
              <button disabled={play} onClick={handleBreakDecrease} id="break-decrement">Decrease</button>
            </div>
          </div>
          <div>
            <h3 id="session-label">Session Length</h3>
            <div>
            <button disabled={play} onClick={handleSessionIncrease} id="session-increment">Increase</button>
              <strong id="session-length">{sessionLength}</strong>
            <button disabled={play} onClick={handleSessionDecrease} id="session-decrement">Decrease</button>
            </div>
          </div>
        </div>
        <div className="timer-wrapper">
          <div className="timer">
            <h2 id="timer-label">{title}</h2>
            <h3 id="time-left">{timeFormatter()}</h3>
          </div>
          <button onClick={handlePlay} id="start_stop">Start/Stop</button>
          <button onClick={handleReset} id="reset">Reset</button>
        </div>
      </div>
    <audio
    id="beep"
    preload="auto"
    src={require("./beep.mp3")}
        />
    </main>
  );
}

export default App;
