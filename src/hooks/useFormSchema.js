import { z } from 'zod'

export const formSchema = z.object({
  nome: z
    .string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .max(100, 'Nome muito longo')
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, 'Nome deve conter apenas letras'),

  email: z
    .string()
    .min(1, 'E-mail é obrigatório')
    .email('Insira um e-mail válido'),

  telefone: z
    .string()
    .min(1, 'Telefone é obrigatório')
    .min(10, 'Telefone deve ter pelo menos 10 dígitos')
    .max(15, 'Telefone inválido')
    .regex(/^[\d\s\(\)\-\+]+$/, 'Formato de telefone inválido'),
})
