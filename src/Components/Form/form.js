import { useState } from "react"
import Timer from "../timerLogic/timer"

const Form = () => {
    const [time, setTime] = useState(0)
    const [err, setErr] = useState(false)

    const validateTime = () => {
        const inputTime = document.getElementById('datetime').value;

        if (!inputTime) {
          alert('Input is blank. Please enter a date and time for the countdown.');
          return false;
        }

        const targetTime = new Date(inputTime).getTime();
        const currentTime = new Date().getTime();
        const diffInMilliseconds = Math.abs(targetTime - currentTime);
      
        const maxDays = 100 * 24 * 60 * 60 * 1000;
      
        if (diffInMilliseconds > maxDays) {
            setErr(true)
            return false;
        }
        setErr(false)
        setTime(diffInMilliseconds)
    };

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                <h1><strong><span style={{color:'#e6e7e8'}}>Countdown</span> <span style={{color:'#ae00fc'}}>Timer</span></strong></h1>
                <input 
                    className="mb-3" 
                    type="datetime-local" 
                    step={1}
                    id="datetime" 
                    style={{border:'1px solid white',backgroundColor:'inherit',borderRadius:'5px',color:'white', padding:'8px'}}
                >
                </input>
                {time === 0 ? 
                <button 
                    className="mb-5" 
                    style={{border:'1px solid white',backgroundColor:'inherit',borderRadius:'5px',color:'white', padding:'8px'}}
                    onClick={validateTime}
                >
                        Start Timer
                </button>
                :
                <button 
                    className="mb-5" 
                    style={{border:'1px solid white',backgroundColor:'inherit',borderRadius:'5px',color:'white', padding:'8px'}}
                    onClick={()=>{setTime(0);document.getElementById('datetime').value=''}}
                >
                        Reset Timer
                </button>
                }
                {err ? 
                <h1 style={{color:'#ae00fc'}}><strong>Selected time is more than 100 days</strong></h1> : <Timer time={time}/>
                }
            </div>
        </>
    )
}

export default Form