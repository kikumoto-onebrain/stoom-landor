import type { Metadata } from 'next'
import SmartLockerClient from './SmartLockerClient'

export const metadata: Metadata = {
  title: 'Smart Locker Stoom | Armário Inteligente para Entregas e Retiradas',
  description: 'Automatize entregas, retiradas e devoluções com o Smart Locker Stoom. Segurança, rastreabilidade e acesso 24/7 para condomínios, varejo e indústrias.',
}

export default function SmartLockerPage() {
  return <SmartLockerClient />
}
