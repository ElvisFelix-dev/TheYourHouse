function Card({ photoSrc, title, description, subtitle }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img className="w-full rounded-lg mb-4" src={photoSrc} alt={title} />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <h2 className="text-lg text-red-400 font-bold mb-2">{subtitle}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
    </div>
  )
}

export default Card
