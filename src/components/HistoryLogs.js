import React from 'react'

const HistoryLogs = (props) => {
    const logs = props.logs
    const res = logs?.length
    ? logs.map((log, idx) => {
        const { calc } = log;
        const expression = calc.split("=")[0]
        const result = calc.split("=")[1]
        return (
          <div className="entry" key={idx}>
            <p>{expression} = <strong>{result}</strong></p>
          </div>
        );
      })
    : "";
    return (
        <div className="logs">
            <h3>Past calculations</h3>
            {res}  
        </div>
    )
}

export default HistoryLogs;