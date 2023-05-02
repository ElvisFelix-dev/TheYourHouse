import { FaHeart, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-center bg-gray-900 text-white py-8">
        <div className="flex space-x-4 mb-4">
          <a
            className="text-red-600 hover:text-red-800 transition-all duration-200"
            href="https://www.instagram.com/eyesgreen_tech/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={20} />
          </a>
          <a
            className="text-blue-600 hover:text-blue-800 transition-all duration-200"
            href="https://twitter.com/elvis__felix"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={20} />
          </a>
          <a
            className="text-green-600 hover:text-green-800 transition-all duration-200"
            href="https://wa.me/5516996318063"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
        <p className="text-sm text-white hover:text-gray-400 transition-all duration-200 inline-block">
          <a
            href="https://2system.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Desenvolvido por 2System
          </a>
        </p>
      </footer>
    </>
  )
}
