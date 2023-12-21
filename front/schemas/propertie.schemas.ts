import { z } from "zod";

// Esquema de solicitação (request schema)

const PropertyRequestSchema = z.object({
  quartos: z
    .string()
    .min(1, "campo obrigatorio")
    .transform(Number)
    .refine((n) => !isNaN(n), {
      message: "Deve ser um número",
    }),
  banheiros: z
    .string()
    .min(2, "obrigatorio")
    .transform(Number)
    .refine((n) => !isNaN(n), {
      message: "Deve ser um número",
    }),
  descricao: z.string().min(1, "campo obrigario").max(300),
  bairro: z.string().min(1, "campo obrigario").max(100),
  titulo: z.string().min(1, "campo obrigario").max(100),
  tamanho: z
    .string()
    .transform(Number)
    .refine((n) => !isNaN(n), {
      message: "Deve ser um número",
    }),
  vagas_garagem: z
    .string()
    .min(1, "campo obrigatorio")
    .transform(Number)
    .refine((n) => !isNaN(n), {
      message: "Deve ser um número",
    }),
  valor: z
    .string()
    .min(1,"campo obrigatorio")
    .transform(Number)
    .refine((n) => !isNaN(n), {
      message: "Deve ser um número",
    }),
  cidade: z.string().min(1).max(100),
  fotos: z.array(z.string().url()).nonempty("campo obrigario"),
  userId: z.string().uuid(),
  tipo: z.string().min(1).max(50),
}); // Permite campos adicionais que não estão no esquema

// Esquema de resposta (response schema)
const PropertyResponseSchema = z.object({
  id: z.string().uuid(),
  quartos: z.number().int().positive(),
  banheiros: z.number().int().positive().optional(),
  descricao: z.string().min(1).max(255),
  bairro: z.string().min(1).max(100),
  titulo: z.string().min(1).max(100),
  tamanho: z.number().positive().optional(),
  vagas_garagem: z.number().int().positive().optional(),
  valor: z.number().positive(),
  cidade: z.string().min(1).max(100),
  fotos: z.array(z.string().url()).nonempty(),
  userId: z.string().uuid(),
  tipo: z.string().min(1).max(50),
  created_at: z.date(),
});

export type IProperpertyRequestData = z.infer<typeof PropertyRequestSchema>;
export type IProperpertyResponseData = z.infer<typeof PropertyResponseSchema>;
export { PropertyRequestSchema, PropertyResponseSchema };
