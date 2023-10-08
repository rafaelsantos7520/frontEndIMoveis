import { z } from "zod";

const PropertySchema = z.object({
  id: z.string().uuid(),
  quartos: z.number().int(),
  banheiros: z.number().int(),
  descricao: z.string(),
  bairro: z.string(),
  titulo: z.string(),
  tamanho: z.number(),
  vagas_garagem: z.number().int(),
  valor: z.number(),
  cidade: z.string(),
  fotos: z.array(z.string().url()),
  userId: z.string().uuid(),
  created_at: z.date(),
  tipo: z.string(),
});

const PropertyRequestSchema = PropertySchema.omit({
  id: true,
  created_at: true,
});

export  {PropertyRequestSchema,PropertySchema};
