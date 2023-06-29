import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import imgLogo from '../assets/logo.svg'

export default function Header() {
  const [pageState, setPageState] = useState('Login')
  const location = useLocation()
  const navigate = useNavigate()

  const auth = getAuth()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState('Perfil')
      } else {
        setPageState('Login')
      }
    })
  }, [auth])

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true
    }
  }

  return (
    <div className="bg-#a8dadc border-b shadow-sm flex-shrink-0 top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src={imgLogo}
            alt="logo"
            className="h-11 cursor-pointer w-11"
            onClick={() => navigate('/')}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-red-400 hover:text-red-700 hover:text-base transition-all duration-200 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/initial') && 'text-black border-b-red-500'
              }`}
              onClick={() => navigate('/initial')}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-red-400 hover:text-red-700 hover:text-base transition-all duration-200 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/offers') && 'text-black border-b-red-500'
              }`}
              onClick={() => navigate('/offers')}
            >
              Ofertas
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-red-400 hover:text-red-700 hover:text-base transition-all duration-200 border-b-[3px] border-b-transparent ${
                (pathMatchRoute('/sign-in') || pathMatchRoute('/profile')) &&
                'text-black border-b-red-500'
              }`}
              onClick={() => navigate('/profile')}
            >
              {pageState}
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-red-400 hover:text-red-700 hover:text-base transition-all duration-200 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/offers') && 'text-black border-b-red-500'
              }`}
              onClick={() => navigate('/about')}
            >
              Sobre
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-red-400 hover:text-red-700 hover:text-base transition-all duration-200 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/offers') && 'text-black border-b-red-500'
              }`}
              onClick={() => navigate('/contacting')}
            >
              Contato
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
