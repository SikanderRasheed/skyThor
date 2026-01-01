import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Topbar from './components/Topbar/Topbar'
import AppHeader from './components/Header/Header'
import Overview from './pages/overview/overview'
import Footer from './components/Footer/Footer'
import BottomBar from './components/BottomBar/BottomBar'

const routes = [
  {
    path: '/', element: <Home />
  },
  {
    path: '/overview', element: <Overview />
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
      <Footer />
      <BottomBar />
    </BrowserRouter>
  )
}

export default App
