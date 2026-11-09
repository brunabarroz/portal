// Lê os dados do perfil e do curso (editados pelo painel) com valores padrão.
// Assim o site continua funcionando mesmo se algum campo ficar vazio ou for apagado.
import perfilBruto from '../data/perfil.json';
import cursoBruto from '../data/curso.json';

type Rede = { rede: string; url?: string; destaque?: boolean };
type Modulo = { titulo?: string; descricao?: string };
const txt = (v: unknown, padrao = '') => (typeof v === 'string' ? v : padrao);
const lista = <T>(v: unknown): T[] => (Array.isArray(v) ? (v.filter(Boolean) as T[]) : []);

const p = perfilBruto as Record<string, unknown>;
export const perfil = {
  nome: txt(p.nome, 'Bruna Barros') || 'Bruna Barros',
  saudacao: txt(p.saudacao, 'Oi, eu sou a Bruna.'),
  linhaApoio: txt(p.linhaApoio),
  bio: txt(p.bio),
  foto: txt(p.foto),
  fotoDescricao: txt(p.fotoDescricao, 'Foto da Bruna Barros'),
  redes: lista<Rede>(p.redes).filter((r) => r.rede),
};

const c = cursoBruto as Record<string, unknown>;
export const curso = {
  nome: txt(c.nome, 'Direito na Gringa') || 'Direito na Gringa',
  chamada: txt(c.chamada),
  descricao: txt(c.descricao),
  paraQuem: lista<string>(c.paraQuem).filter((x) => typeof x === 'string' && x.trim()),
  modulos: lista<Modulo>(c.modulos).filter((m) => m.titulo?.trim()),
  linkHotmart: txt(c.linkHotmart),
  textoBotao: txt(c.textoBotao, 'Conhecer o curso') || 'Conhecer o curso',
  imagem: txt(c.imagem),
};

/** Separa um texto em parágrafos (linhas em branco entre eles). */
export const paragrafos = (t: string) => t.split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean);
