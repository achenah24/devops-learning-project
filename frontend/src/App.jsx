import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('Checking backend...')

  useEffect(() => {
    async function getBackendStatus() {
      try {
        const response = await fetch('http://localhost:3000/api/status')

        if (!response.ok) {
          throw new Error('Backend request failed')
        }

        const data = await response.json()
        setStatus(data.status)
      } catch {
        setStatus('Could not connect to server')
      }
    }

    getBackendStatus()
  }, [])

  return (
    <main>
      <h1>DevOps Learning Project</h1>
      <p>Backend Status: {status}</p>
    </main>
  )
}

export default App
