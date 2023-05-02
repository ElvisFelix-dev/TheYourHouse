import { useLocation, useNavigate } from 'react-router-dom'

import imgLogo from '../assets/logo.svg'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true
    }
  }

  return (
    <div className="bg-#a8dadc border-b shadow-sm sticky top-0 z-50">
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
                pathMathRoute('/initial') && 'text-black border-b-red-500'
              }`}
              onClick={() => navigate('/initial')}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-red-400 hover:text-red-700 hover:text-base transition-all duration-200 border-b-[3px] border-b-transparent ${
                pathMathRoute('/offers') && 'text-black border-b-red-500'
              }`}
              onClick={() => navigate('/offers')}
            >
              Ofertas
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-red-400 hover:text-red-700 hover:text-base transition-all duration-200 border-b-[3px] border-b-transparent ${
                pathMathRoute('/sign-in') && 'text-black border-b-red-500'
              }`}
              onClick={() => navigate('/sign-in')}
            >
              Login
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
