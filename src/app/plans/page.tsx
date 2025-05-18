

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const plans = [
  {
    title: 'Plano C',
    description: 'Ideal para clientes que NÃO tem um domínio e NÃO tem site',
    price: 'R$ 125,00 / Mês',
    features: [
      'Licença de Uso do CMS',
      'Hospedagem',
      'Gestão de E-mails',
      'Suporte por E-mail',
      'Suporte por Whatsapp',
      'Setup Inicial do CMS',
      'Customização do CMS (C1)',
      'Customização do CMS (C2)',
      'Setup da Loja Virtual (até 30 itens)',
      'Atendimento + Consultoria (por CNPJ)',
    ],
    highlight: false,
  },
  {
    title: 'Plano B',
    description: 'Ideal para clientes que têm um domínio mas não têm site',
    price: 'R$ 150,00 / Mês',
    features: [
      'Licença de Uso do CMS',
      'Hospedagem',
      'Gestão de E-mails',
      'Suporte por E-mail',
      'Suporte por Whatsapp',
      'Setup Inicial do CMS',
      'Customização do CMS (C1)',
      'Customização do CMS (C2)',
      'Setup da Loja Virtual (até 30 itens)',
      'Atendimento + Consultoria (por CNPJ)',
    ],
    highlight: true, // Destaque no plano B
  },
  {
    title: 'Plano A',
    description: 'Para clientes que conhecem internet e buscam mais resultados',
    price: 'R$ 300,00 / Mês',
    features: [
      'Licença de Uso do CMS',
      'Hospedagem',
      'Gestão de E-mails',
      'Suporte por E-mail',
      'Suporte por Whatsapp',
      'Setup Inicial do CMS',
      'Customização do CMS (C1)',
      'Customização do CMS (C2)',
      'Setup da Loja Virtual (até 30 itens)',
      'Atendimento + Consultoria (por CNPJ)',
      'Marketing Digital',
    ],
    highlight: false,
  },
]

const Plans = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto mt-[100px] mb-[100px]">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={`border-2 flex flex-col justify-between ${
            plan.highlight ? 'border-blue-500' : 'border-gray-200'
          }`}
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {plan.title}
              {plan.highlight && <Badge variant="outline">Mais Popular</Badge>}
            </CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-4">{plan.price}</div>
            <ul className="space-y-2 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Escolher Plano</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default Plans
