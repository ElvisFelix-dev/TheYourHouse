import { Helmet } from 'react-helmet-async'

import imgImovel from '../assets/imgImovel.jpg'
import imgCorretores from '../assets/imgCorretores.jpg'
import Card from '../components/Card'

import imgGirl from '../assets/imgGirl.png'
import imgBoy from '../assets/imgBoy.png'
import imgWoman from '../assets/imgWoman.png'

export default function About() {
  return (
    <>
      <Helmet>
        <title>YourHouse | Sobre</title>
      </Helmet>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4">
            <img
              className="w-full h-auto object-cover rounded-md"
              src={imgImovel}
              alt="Imobiliária"
            />
            <p className="mb-4 pt-10">
              Além disso, a Imobiliária Your House se destaca pela transparência
              e honestidade em todas as transações. Eles buscam estabelecer
              relacionamentos de confiança com os clientes, fornecendo
              informações claras e precisas sobre cada imóvel e auxiliando em
              todo o processo de compra, venda ou aluguel.
            </p>
            <p className="mb-4 pt-10">
              Desde o início, a Imobiliária Your House tinha como objetivo
              proporcionar uma experiência única no mercado imobiliário. Eles se
              destacaram por adotar um modelo de atendimento personalizado, que
              coloca as necessidades e desejos dos clientes em primeiro lugar.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-2xl font-bold mb-4">Sobre a Imobiliária</h1>
            <p className="mb-4">
              A Imobiliária Your House é uma empresa que cresceu rapidamente
              desde a sua fundação. O seu sucesso é resultado do compromisso
              constante em oferecer um serviço excepcional aos seus clientes.
            </p>
            <p className="mb-4">
              Com uma equipe altamente qualificada e apaixonada pelo que faz, a
              Imobiliária Your House tem se dedicado a entender as demandas do
              mercado imobiliário e a oferecer soluções que atendam às
              expectativas dos clientes. Eles se esforçam para conhecer
              profundamente cada cliente, compreender suas preferências e
              necessidades específicas, a fim de fornecer as melhores opções de
              imóveis disponíveis.
            </p>

            <img className="rounded-md" src={imgCorretores} alt="" />
          </div>
        </div>
        <div className="justify-center">
          <h1 className="text-center pt-5 text-5xl font-bold ">Nosso time</h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center pb-3">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Card
            photoSrc={imgGirl}
            description={
              'Sua habilidade em estabelecer relacionamentos duradouros e sua capacidade de identificar oportunidades de negócio fazem dela uma líder inspiradora e um ativo valioso para a empresa.Com sua vasta experiência no mercado imobiliário.'
            }
            subtitle={'Assistente Administrativo'}
            title={'Ana Beatriz'}
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Card
            photoSrc={imgBoy}
            subtitle={'Corretor Sênior'}
            title={'Lucas Silva'}
            description={
              ' Reconhecido por sua dedicação em oferecer um serviço personalizado e de alto nível, tornando a experiência de compra ou venda de imóveis uma jornada tranquila e satisfatória para os clientes.'
            }
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Card
            photoSrc={imgWoman}
            subtitle={'Gerente de Vendas'}
            title={'Amanda Souza'}
            description={
              ' Sua dedicação em oferecer um suporte excepcional aos clientes e colegas de trabalho torna-a uma peça fundamental para o sucesso da equipe. Com suas habilidades organizacionais e atenção aos detalhes, ela garante o bom funcionamento dos processos internos e contribui para a eficiência operacional da empresa.'
            }
          />
        </div>
      </div>
    </>
  )
}
