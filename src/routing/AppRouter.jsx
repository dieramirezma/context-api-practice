import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from '../components/Home'
import { Articles } from '../components/Article'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Login } from '../components/Login'
import { ErrorPage } from '../components/ErrorPage'
import { useContext } from 'react'
import { Context } from '../context/Context'
import logo from '../assets/logo.png'

export const AppRouter = () => {
  const { user, setUser } = useContext(Context)

  return (
    <Router>
      <header className='header-nav'>
        <nav>
          <div className='logo'>
            <img className='logo-img' src={logo} alt='Logo' />
          </div>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/articles'>Articles</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About Us</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            {user.hasOwnProperty('username') && user.username !== null
              ? (
                <>
                  <li><NavLink to='/login'>{user.username}</NavLink></li>
                  <li>
                    <a
                      href='/' onClick={e => {
                        e.preventDefault()
                        setUser({})
                      }}
                    >Logout
                    </a>
                  </li>
                </>
                )
              : (
                <li><NavLink to='/login'>Sign In</NavLink></li>
                )}
          </ul>
        </nav>
      </header>
      <section className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </section>
    </Router>
  )
}
