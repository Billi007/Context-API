
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UseContextProvider from './context/UseContextProvider'

function App() {
  

  return (
    <UseContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UseContextProvider>
  )
}

export default App