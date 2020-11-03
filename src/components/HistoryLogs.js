import React from 'react'

const HistoryLogs =(props)=> {
    const logs = props.logs
    const res = logs?.length
    ? logs.map((log, idx) => {
        const { calc } = log;
        const left = calc.split("=")[0]
        const right = calc.split("=")[1]
        return (
          <div className="entry" key={idx}>
            <p>{left} = <strong>{right}</strong></p>
          </div>
        );
      })
    : "";
    return (
        <div className="logs">
            <h4>Past calculations: </h4>
          {res}  
        </div>
    )
}

export default HistoryLogs