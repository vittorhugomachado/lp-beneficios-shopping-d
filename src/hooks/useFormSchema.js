import { z } from "zod";

export const formSchema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  cargo: z.string().min(2, "Informe seu cargo"),
  celular: z
    .string()
    .min(10, "Celular inválido")
    .regex(/^[\d\s\(\)\-\+]+$/, "Formato inválido"),
  cidade: z.string().min(2, "Informe sua cidade"),
  cpf: z.string().regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, "CPF inválido"),
  endereco: z.string().min(5, "Informe seu endereço"),
  estadoCivil: z.string().min(1, "Selecione o estado civil"),
  genero: z.string().min(1, "Selecione o gênero"),
});
