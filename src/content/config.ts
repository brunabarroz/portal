// Esquemas dos tipos de conteúdo do site.
// Cada pasta em src/content/ é um tipo. O painel (Pages CMS, arquivo .pages.yml) usa os mesmos campos.
import { defineCollection, z } from 'astro:content';

// Campos vazios salvos pelo painel ("") contam como "não preenchido".
const vazio = (v: unknown) => (v === '' || v === null ? undefined : v);
const exemplo = z.preprocess(vazio, z.boolean().default(false)); // true = mostra o selo "EXEMPLO"
const texto = z.preprocess(vazio, z.string().optional());
const data = z.preprocess(vazio, z.coerce.date().optional());
// O destino pode vir como "barcelona" ou como caminho ("src/content/destinos/barcelona.md").
const destino = z.preprocess(
  (v) => (typeof v === 'string' && v.trim() ? v.trim().split('/').pop()!.replace(/\.mdx?$/, '') : undefined),
  z.string().optional(),
);
const opcao = <T extends [string, ...string[]]>(valores: T, padrao: T[number]) =>
  z.preprocess(vazio, z.enum(valores).default(padrao as never));

// ---------- VIAGENS ----------
const destinos = defineCollection({
  type: 'content', // o corpo do arquivo é o ROTEIRO (pode ficar vazio)
  schema: z.object({
    titulo: z.string(),
    pais: texto,
    sigla: texto,          // ex.: "BCN", aparece no carimbo
    resumo: texto,
    capa: texto,
    ordem: z.preprocess(vazio, z.coerce.number().default(100)),
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
    data,
    exemplo,
  }),
});

const videos = defineCollection({
  type: 'data',
  schema: z.object({
    titulo: z.string(),
    youtube: texto, // link do vídeo no YouTube
    destino,
    data,
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
    tipo: opcao(['Hospedagem', 'Serviço'], 'Hospedagem'),
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
    formato: opcao(['Guia', 'E-book'], 'Guia'),
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
    data,
    exemplo,
  }),
});

export const collections = {
  destinos, dicas, videos, cupons, hospedagens, equipamentos,
  guias, materiais, ferramentas, conteudos,
};
