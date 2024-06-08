import './App.css'
import { AppRouter } from './routing/AppRouter'
import { Context } from './context/Context'
import { useState } from 'react'

function App () {
  const [user, setUser] = useState({
    username: '@dieramirezma',
    name: 'Diego Ramirez',
    phone: '3023020302'
  })


  return (
    <div className='App'>
      <Context.Provider value={{ user, setUser }}>
        <AppRouter />
      </Context.Provider>
    </div>
  )
}

export default App
