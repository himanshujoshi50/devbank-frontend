import React from 'react'
import { createRoot } from 'react-dom/client'

function App(){
  const [msg, setMsg] = React.useState('Loading...')
  React.useEffect(() => {
    fetch('/api/greet')
      .then(r => r.json())
      .then(d => setMsg(d.message))
      .catch(() => setMsg('Backend not reachable'))
  }, [])
  return (
    <div style={{fontFamily:'sans-serif', padding:20}}>
      <h1>DevBank Frontend</h1>
      <p>Message from backend: <b>{msg}</b></p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
