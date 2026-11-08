// Esquemas dos tipos de conteúdo do site.
// Cada pasta em src/content/ é um tipo. O painel (/admin) usa os mesmos campos.
import { defineCollection, z } from 'astro:content';

const exemplo = z.boolean().default(false); // true = mostra o selo "EXEMPLO"
const destino = z.string().optional();      // nome do arquivo do destino (ex.: "barcelona")
const texto = z.string().optional();

// ---------- VIAGENS ----------
const destinos = defineCollection({
  type: 'content', // o corpo do arquivo é o ROTEIRO (pode ficar vazio)
  schema: z.object({
    titulo: z.string(),
    pais: texto,
    sigla: texto,          // ex.: "BCN", aparece no carimbo
    resumo: texto,
    capa: texto,
    ordem: z.number().default(100),
    exemplo,
  }),
});

const dicas = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    resumo: texto,
    destino,
    capa: texto,
    data: z.coerce.date().optional(),
    exemplo,
  }),
});

const videos = defineCollection({
  type: 'data',
  schema: z.object({
    titulo: z.string(),
    youtube: texto, // link do vídeo no YouTube
    destino,
    data: z.coerce.date().optional(),
    exemplo,
  }),
});

const cupons = defineCollection({
  type: 'data',
  schema: z.object({
    empresa: z.string(),
    beneficio: texto, // ex.: "10% de desconto"
    codigo: texto,
    validade: texto,
    link: texto,
    regras: texto,
    destino,
    exemplo,
  }),
});

const hospedagens = defineCollection({
  type: 'data',
  schema: z.object({
    nome: z.string(),
    tipo: z.enum(['Hospedagem', 'Serviço']).default('Hospedagem'),
    descricao: texto,
    link: texto,
    destino,
    exemplo,
  }),
});

const equipamentos = defineCollection({
  type: 'data',
  schema: z.object({
    nome: z.string(),
    categoria: texto,
    descricao: texto,
    imagem: texto,
    link: texto,
    exemplo,
  }),
});

// ---------- CARREIRA INTERNACIONAL ----------
const guias = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    formato: z.enum(['Guia', 'E-book']).default('Guia'),
    resumo: texto,
    capa: texto,
    link: texto,          // página de compra ou download
    textoBotao: texto,
    exemplo,
  }),
});

const materiais = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    resumo: texto,
    capa: texto,
    link: texto,          // onde baixar
    exemplo,
  }),
});

const ferramentas = defineCollection({
  type: 'data',
  schema: z.object({
    nome: z.string(),
    categoria: texto,
    descricao: texto,
    link: texto,
    exemplo,
  }),
});

const conteudos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    tema: z.enum(['linkedin', 'curriculo', 'vagas', 'entrevistas']),
    resumo: texto,
    youtube: texto,
    data: z.coerce.date().optional(),
    exemplo,
  }),
});

export const collections = {
  destinos, dicas, videos, cupons, hospedagens, equipamentos,
  guias, materiais, ferramentas, conteudos,
};
