import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function SocialLinks() {
  return (
    <>
      <div className="flex space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaFacebook className="w-6 h-6" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaTwitter className="w-6 h-6" />
        </a>
      </div>
    </>
  )
}
