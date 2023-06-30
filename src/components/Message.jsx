import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { toast } from 'react-toastify'

export default function Message() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || message === '' || phone === '') {
      toast.warning('Preencha os campos.')
      return
    }

    emailjs
      .sendForm(
        'service_e7d7usw',
        'template_xvbgsin',
        e.target,

        'avv6uQ0puupw5tSE4',
      )
      .then(
        (response) => {
          console.log('Email Enviado', response.status, response.text)
          setEmail('')
          setMessage('')
          setName('')
          setPhone('')
          toast.success('Email enviado')
        },
        (err) => {
          console.log('Erro: ', err)
          toast.error('Email não enviado.')
        },
      )
  }

  return (
    <section
      id="contact"
      className="bg-primary text-slate-800 min-h-[732px] section"
    >
      <div className=" container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">
          Mande uma mensagem para nós
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px] text-center text-black">
          Uma imobiliária confiável desempenha um papel crucial ao oferecer
          segurança, tranquilidade e eficiência durante todo o processo de
          compra, venda ou aluguel de imóveis.
        </p>
        {/* form */}
        <form
          onSubmit={sendEmail}
          className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]"
        >
          <input
            className="form-control rounded-md"
            type="text"
            placeholder="Nome Completo"
            value={name}
            name="from_name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control rounded-md"
            type="email"
            placeholder="Seu melhor email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-control rounded-md"
            placeholder="Whatsaap"
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            className="textarea resize-none h-44 rounded-md"
            placeholder="Mensagem*"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="btn text-white bg-gray-900 hover:bg-gray-500-hover transition-all h-14 rounded-md  hover:bg-gray-800"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  )
}
