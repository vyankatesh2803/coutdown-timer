import { useEffect, useState } from "react";
import TimerTile from "../timerTile/timerTile";

const Timer = ({ time }) => {
  const [timesUp, setTimesUp] = useState(false)
  const [milisec, setMilisec] = useState(time);
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)

  useEffect(() => {
    setMilisec(time);
  }, [time]);

  useEffect(() => {
    if (milisec > 0) {
      const timerId = setTimeout(() => {
        setMilisec((milisec) => milisec - 1000);

        const remainingMs = milisec - 1000;
        const newDays = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
        const remainingMs2 = remainingMs % (1000 * 60 * 60 * 24);
        const newHours = Math.floor(remainingMs2 / (1000 * 60 * 60));
        const remainingMs3 = remainingMs2 % (1000 * 60 * 60);
        const newMinutes = Math.floor(remainingMs3 / (1000 * 60));
        const remainingMs4 = remainingMs2 % (1000 * 60);
        const newSeconds = Math.floor(remainingMs4 / 1000);
        if (newSeconds === 0 && document.getElementById('datetime') !== '') {
          setTimesUp(true)
        }

        setDays(newDays);
        setHours(newHours);
        setMinutes(newMinutes);
        setSeconds(newSeconds);
      }, 1000);
  
      return () => clearTimeout(timerId);
    }
    else {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      setTimesUp(false)
    }
  }, [milisec])

  return (
    <>
      {timesUp ?
       <h5>🎉<span style={{color:'#ae00fc'}}>The countdown is over! What's next on your adventure?</span>🎉</h5> : 
       <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-2 col-3">
              <TimerTile data={days} text={'Days'}/>
            </div>
            <div className="col-md-2 col-3">
              <TimerTile data={hours} text={'Hours'}/>
            </div>
            <div className="col-md-2 col-3">
              <TimerTile data={minutes} text={'Minutes'}/>
            </div>
            <div className="col-md-2 col-3">
              <TimerTile data={seconds} text={'Seconds'}/>
            </div>
          </div>
        </div>
      }

      
    </>
  );
};

export default Timer;