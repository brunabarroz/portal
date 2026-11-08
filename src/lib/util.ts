// Pequenas funções de apoio.

/** Valor ainda não preenchido: vazio ou começando com "[PREENCHER". */
export function pendente(valor?: string | null): boolean {
  return !valor || valor.trim() === '' || valor.trim().startsWith('[PREENCHER');
}

/** Extrai o ID de um link do YouTube (youtu.be, watch?v=, shorts, embed). */
export function youtubeId(url?: string): string | null {
  if (pendente(url)) return null;
  const m = url!.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}

export function formatarData(d?: Date) {
  if (!d) return '';
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });
}

/** Ordena por data (mais recente primeiro); sem data vai para o fim. */
export function porData<T extends { data: { data?: Date } }>(a: T, b: T) {
  return (b.data.data?.getTime() ?? 0) - (a.data.data?.getTime() ?? 0);
}
