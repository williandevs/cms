'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const Contato = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' })
  const [status, setStatus] = useState<'idle' | 'enviando' | 'enviado'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('enviando')

    // Simulando envio
    await new Promise((res) => setTimeout(res, 1500))
    setStatus('enviado')

    // Resetar formulário
    setFormData({ nome: '', email: '', mensagem: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <div className="max-w-6xl mx-auto p-6 mt-32">
      <h2 className="text-3xl font-bold mb-8 text-center">Fale Conosco</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
          <Input
            name="nome"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="mensagem"
            placeholder="Sua mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows={5}
            required
          />
          <Button type="submit" disabled={status === 'enviando'} className="w-full">
            {status === 'enviando' ? 'Enviando...' : 'Enviar Mensagem'}
          </Button>
          {status === 'enviado' && (
            <p className="text-green-600 text-center">Mensagem enviada com sucesso!</p>
          )}
        </form>

        {/* Mapa do Google */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.715804603272!2d-46.65657228453993!3d-23.57910136813821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cdd6119a2f%3A0xcee00dc2d06ea81b!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1628781577375!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contato
