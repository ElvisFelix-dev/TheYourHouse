import Carousel from '../components/Carousel'
import Map from '../components/Map'
import SocialLinks from '../components/SocialLinks'

export default function Contacting() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4">
            <Map />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Contato</h2>
              <p className="text-gray-600 mb-2">Telefone: (XX) XXXX-XXXX</p>
              <p className="text-gray-600 mb-2">WhatsApp: (XX) XXXXX-XXXX</p>
              <p className="text-gray-600 mb-2">
                E-mail: contato@imobiliaria.com
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Localização</h2>
              <p className="text-gray-600 mb-2">Endereço: Rua Principal, 123</p>
              <p className="text-gray-600 mb-2">Cidade: Cidade Exemplo</p>
              <p className="text-gray-600 mb-2">Estado: UF</p>
            </div>
            <div>
              <h2 className="pb-3 font-semibold text-lg">
                Siga em nossas redes social
              </h2>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-center text-lg font-semibold">
          O que estão falando sobre nós
        </h1>
      </div>
      <div>
        <Carousel />
      </div>
    </>
  )
}
