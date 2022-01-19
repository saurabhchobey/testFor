
import React, { useState, useRef, useEffect } from 'react'



const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    function toggle() {
      setIsActive(!isActive);
    }
  
    function reset() {
      setSeconds(0);
      setIsActive(false);
    }
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);
  
	
    function countdown(){
        if(isActive){
            setIsActive(false)
            setSeconds(seconds=>seconds-1)
        }
    }


	

	
	

	return (
		<div className="App">
			<h2>{seconds}</h2>
            <button  onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
        <button onclick= {countdown}> countdown</button>
		</div>
	)
}

export default Timer;
