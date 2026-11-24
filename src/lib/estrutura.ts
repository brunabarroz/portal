// Estrutura do site: as três pastas principais.
// Versão enxuta: Bruna (início), Direito na Gringa (curso) e Compras (indicações).
// As áreas antigas (Carreira e Viagens) estão guardadas em /arquivo, prontas para voltar.
import { getCollection, type CollectionEntry } from 'astro:content';

export type AreaId = 'bruna' | 'curso' | 'compras';

export interface Area {
  id: AreaId;
  nome: string;
  curto: string;   // rótulo usado no celular
  numero: string;  // número da divisória
  href: string;
  convite: string; // frase curta das prévias
  itens: string[]; // palavras-chave curtas da prévia
}

export const AREAS: Record<AreaId, Area> = {
  bruna: {
    id: 'bruna',
    nome: 'Bruna Barros',
    curto: 'Bruna',
    numero: '01',
    href: '/',
    convite: 'Quem eu sou e onde me encontrar.',
    itens: ['sobre mim', 'redes'],
  },
  curso: {
    id: 'curso',
    nome: 'Direito na Gringa',
    curto: 'Curso',
    numero: '02',
    href: '/direito-na-gringa/',
    convite: 'Meu curso para advogadas que querem trabalhar para fora.',
    itens: ['meu curso'],
  },
  compras: {
    id: 'compras',
    nome: 'Minhas compras',
    curto: 'Compras',
    numero: '03',
    href: '/compras/',
    convite: 'Tudo o que eu uso e indico, separado por pasta.',
    itens: ['indicações', 'links'],
  },
};

export const ORDEM_AREAS: AreaId[] = ['bruna', 'curso', 'compras'];

export interface SubAba {
  nome: string;
  href: string;
  descricao: string;
  quantidade: number | null;
}

// ---------- Pastas de compras ----------
export type Produto = CollectionEntry<'compras'>;

/** Transforma o nome da pasta num endereço: "Viagem e mochilão" → "viagem-e-mochilao". */
export const slugPasta = (nome: string) =>
  nome.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export interface Pasta { nome: string; slug: string; href: string; produtos: Produto[] }

/** Pastas de compras, na ordem em que aparecem pela primeira vez. Pastas vazias não existem. */
export async function pastasCompras(): Promise<Pasta[]> {
  const produtos = (await getCollection('compras')).sort((a, b) => a.data.ordem - b.data.ordem || a.data.nome.localeCompare(b.data.nome));
  const mapa = new Map<string, Pasta>();
  for (const p of produtos) {
    const slug = slugPasta(p.data.pasta);
    if (!mapa.has(slug)) mapa.set(slug, { nome: p.data.pasta, slug, href: `/compras/${slug}/`, produtos: [] });
    mapa.get(slug)!.produtos.push(p);
  }
  return [...mapa.values()];
}

/** Sub-abas de cada área (só Compras tem: uma para cada pasta). */
export async function subAbas(area: AreaId): Promise<SubAba[]> {
  if (area !== 'compras') return [];
  const pastas = await pastasCompras();
  if (pastas.length < 2) return []; // com uma pasta só, as abas não ajudam
  return pastas.map((p) => ({ nome: p.nome, href: p.href, descricao: '', quantidade: p.produtos.length }));
}
