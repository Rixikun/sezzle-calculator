import React from 'react'

const HistoryLogs =(props)=> {
    const logs = props.logs
    const res = logs?.length
    ? logs.map((log, idx) => {
        const { calc } = log;
        return (
          <div key={idx}>
            <p>{calc}</p>
          </div>
        );
      })
    : "";
    return (
        <>
        <div>
          {res}  
        </div>
        </>
    )
}

export default HistoryLogs