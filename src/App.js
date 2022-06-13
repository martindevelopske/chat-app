import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Register from './pages/Register'
import SetAvatar from './pages/setAvatar'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/chat" element={<Chat />}></Route>
      <Route path="/setavatar" element={<SetAvatar />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App