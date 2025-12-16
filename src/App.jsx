import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Topbar from './components/Topbar/Topbar'
import Header from './components/Header/Header'
import AppHeader from './components/Header/Header'

const routes = [
  {
    path: '/', element: <Home />
  },
]

function App() {

  return (
    <BrowserRouter>
      <Topbar />
      <AppHeader />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
