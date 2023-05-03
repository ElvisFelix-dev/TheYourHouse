import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <section className="relative bg-[url('./assets/imgBg.jpg')] bg-cover bg-center bg-no-repeat">
      <Helmet>
        <title>YourHouse</title>
      </Helmet>
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Está Buscando Algo?
            <strong className="block font-extrabold text-rose-700">
              Aqui Você Vai Encontrar
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Um local para fazer um encontro com familiares e amigos, Ou até
            mesmo a sua próxima aquisição. Na{' '}
            <span className="text-rose-700">YourHouse </span>
            você vai encontrar.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="/sign-in"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Fazer Login
            </Link>

            <Link
              to="/initial"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Explorar
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
