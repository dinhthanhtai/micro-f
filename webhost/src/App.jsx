import { lazy } from 'react'
import './App.css'
const RemoteApp = lazy(() => import('remoteApp/App')); 

function App() {

  return (
    <>
     <h1>Web host</h1>
     <RemoteApp />
    </>
  )
}

export default App
