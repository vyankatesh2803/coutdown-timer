

const TimerTile = ({data,text}) => {
    return (
        <div className="d-flex flex-column align-items-center" style={{border:'1px solid red', borderRadius:'8px',background: 'linear-gradient(to bottom left, #76E9FE, #AE57FC)'}}>
            <h1 style={{color:'#e6e7e8'}}>{data}</h1>
            <h1 style={{color:'#A2B8E0',fontSize:'calc(1rem + 0.5vw)'}}>{text}</h1>
        </div>
    )
}

export default TimerTile