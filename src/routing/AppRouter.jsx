import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { Articles } from '../components/Article'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Login } from '../components/Login'

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='*'
          element={(
            <div>
              <h1>404</h1>
              <p>Page not found</p>
            </div>
        )}
        />
      </Routes>
    </Router>
  )
}
