// Estrutura do site: as três abas principais e as sub-abas de cada área.
import { getCollection } from 'astro:content';

export type AreaId = 'bruna' | 'carreira' | 'viagens';

export interface Area {
  id: AreaId;
  nome: string;
  curto: string;   // rótulo usado no celular
  numero: string;  // número da divisória
  href: string;
  convite: string; // frase usada nas prévias "continue folheando"
  itens: string[]; // palavras-chave curtas da prévia
}

export const AREAS: Record<AreaId, Area> = {
  bruna: {
    id: 'bruna',
    nome: 'Bruna Barros',
    curto: 'Bruna',
    numero: '01',
    href: '/',
    convite: 'Quem eu sou, onde me encontrar nas redes e por onde começar.',
    itens: ['sobre mim', 'YouTube', 'TikTok'],
  },
  carreira: {
    id: 'carreira',
    nome: 'Carreira internacional',
    curto: 'Carreira',
    numero: '02',
    href: '/carreira-internacional/',
    convite: 'Curso, guias, materiais gratuitos e conteúdos para buscar oportunidades fora do Brasil.',
    itens: ['curso', 'guias', 'LinkedIn', 'entrevistas'],
  },
  viagens: {
    id: 'viagens',
    nome: 'Viagens',
    curto: 'Viagens',
    numero: '03',
    href: '/viagens/',
    convite: 'Destinos, roteiros, dicas, cupons e o que vai na minha mochila.',
    itens: ['destinos', 'roteiros', 'cupons'],
  },
};

export const ORDEM_AREAS: AreaId[] = ['bruna', 'carreira', 'viagens'];

export const TEMAS = {
  linkedin: 'LinkedIn',
  curriculo: 'Currículo',
  vagas: 'Busca de vagas',
  entrevistas: 'Entrevistas',
} as const;
export type TemaId = keyof typeof TEMAS;

export interface SubAba {
  nome: string;
  href: string;
  descricao: string;
  quantidade: number | null; // null = sempre visível
}

const C = '/carreira-internacional';
const V = '/viagens';

/** Sub-abas de cada área. Categorias sem conteúdo ficam escondidas. */
export async function subAbas(area: AreaId): Promise<SubAba[]> {
  if (area === 'carreira') {
    const lista: SubAba[] = [
      { nome: 'Direito na Gringa', href: `${C}/direito-na-gringa/`, descricao: 'Meu curso', quantidade: null },
      { nome: 'Guias e e-books', href: `${C}/guias-e-ebooks/`, descricao: 'Materiais completos para se preparar', quantidade: (await getCollection('guias')).length },
      { nome: 'Materiais gratuitos', href: `${C}/materiais-gratuitos/`, descricao: 'Para baixar e começar hoje', quantidade: (await getCollection('materiais')).length },
      { nome: 'Ferramentas e indicações', href: `${C}/ferramentas-e-indicacoes/`, descricao: 'O que eu uso e recomendo', quantidade: (await getCollection('ferramentas')).length },
      { nome: 'Conteúdos', href: `${C}/conteudos/`, descricao: 'LinkedIn, currículo, vagas e entrevistas', quantidade: (await getCollection('conteudos')).length },
    ];
    return lista.filter((s) => s.quantidade === null || s.quantidade > 0);
  }
  if (area === 'viagens') {
    const destinos = await getCollection('destinos');
    const lista: SubAba[] = [
      { nome: 'Destinos', href: `${V}/destinos/`, descricao: 'Tudo sobre cada lugar', quantidade: destinos.length },
      { nome: 'Roteiros', href: `${V}/roteiros/`, descricao: 'Dia a dia de cada viagem', quantidade: destinos.filter(temRoteiro).length },
      { nome: 'Dicas', href: `${V}/dicas/`, descricao: 'Para viajar melhor', quantidade: (await getCollection('dicas')).length },
      { nome: 'Vídeos', href: `${V}/videos/`, descricao: 'Direto do YouTube', quantidade: (await getCollection('videos')).length },
      { nome: 'Cupons', href: `${V}/cupons/`, descricao: 'Descontos que eu indico', quantidade: (await getCollection('cupons')).length },
      { nome: 'Hospedagens e serviços', href: `${V}/hospedagens-e-servicos/`, descricao: 'Onde ficar e o que contratar', quantidade: (await getCollection('hospedagens')).length },
      { nome: 'Equipamentos', href: `${V}/equipamentos/`, descricao: 'O que vai na mochila', quantidade: (await getCollection('equipamentos')).length },
    ];
    return lista.filter((s) => s.quantidade === null || s.quantidade > 0);
  }
  return [];
}

/** Um destino "tem roteiro" quando o texto do arquivo não está vazio. */
export function temRoteiro(d: { body: string }) {
  return d.body.trim().length > 0;
}
