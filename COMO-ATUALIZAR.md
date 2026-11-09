# Como atualizar o seu site

Este guia é para você, Bruna. Não é preciso saber programar.

---

## 1. Como o site funciona (em 30 segundos)

- O **layout** (cores, pastas, menus) fica separado do **conteúdo** (textos, links, cupons…).
- Você mexe só no conteúdo, pelo **painel de edição**, em **app.pagescms.org**.
- O painel funciona por formulários: você preenche os campos e clica em **Save**. Em cerca de 1 minuto, a Vercel atualiza o site sozinha.
- Cada item aparece automaticamente nas páginas certas. Por exemplo: um cupom com o destino "Barcelona" aparece em **Viagens › Cupons** e também na página de **Barcelona**.
- Uma categoria só aparece no menu quando tem pelo menos um item. Assim não ficam páginas vazias.

**Onde cada coisa fica:**
- **Código e conteúdo:** github.com/brunabarroz/portal
- **Site no ar:** Vercel. Toda mudança salva no GitHub é publicada sozinha.
- **Painel de edição:** app.pagescms.org

---

## 2. Primeiro acesso ao painel (uma vez só)

1. Entre em **app.pagescms.org**.
2. Clique em **Sign in with GitHub** e use a sua conta `brunabarroz`.
3. Se o GitHub perguntar, autorize o **Pages CMS** a acessar o repositório **portal**. Pode escolher só esse repositório.
4. Na lista, clique em **brunabarroz / portal**.

Pronto. No menu da esquerda aparecem as seções do seu site. Dica: salve essa página nos favoritos do navegador e do celular.

---

## 3. O dia a dia no painel

| Seção do painel | Onde aparece no site |
|---|---|
| **Meu perfil** | Página Bruna Barros: foto, apresentação e redes |
| **Curso Direito na Gringa** | Carreira › Direito na Gringa (e o botão da Hotmart) |
| **Viagens · Destinos e roteiros** | Viagens › Destinos e Viagens › Roteiros |
| **Viagens · Dicas** | Viagens › Dicas (e a página do destino) |
| **Viagens · Vídeos do YouTube** | Viagens › Vídeos (e a página do destino) |
| **Viagens · Cupons** | Viagens › Cupons (e a página do destino) |
| **Viagens · Hospedagens e serviços** | Viagens › Hospedagens e serviços (e a página do destino) |
| **Viagens · Equipamentos e produtos** | Viagens › Equipamentos |
| **Carreira · Guias e e-books** | Carreira › Guias e e-books |
| **Carreira · Materiais gratuitos** | Carreira › Materiais gratuitos |
| **Carreira · Ferramentas e indicações** | Carreira › Ferramentas e indicações |
| **Carreira · Conteúdos** | Carreira › Conteúdos (separados por tema) |

### Adicionar algo novo (cupom, vídeo, dica, produto…)
1. Clique na seção. Por exemplo, **Viagens · Cupons**.
2. Clique em **Add an entry**.
3. Preencha os campos. Os que dizem "opcional" podem ficar em branco.
4. Clique em **Save**. Em cerca de 1 minuto, o item aparece no site.

### Adicionar um destino com roteiro
1. Abra **Viagens · Destinos e roteiros** e clique em **Add an entry**.
2. Preencha o nome, o país, a sigla do carimbo (ex.: `BCN`), o resumo e a foto de capa.
3. No campo **Roteiro**, escreva o dia a dia. Use um título para cada dia, por exemplo "Dia 1 — Centro histórico".
4. Clique em **Save**.

Se deixar o roteiro vazio, o destino aparece normalmente, só que fora da lista de Roteiros.

### Ligar um item a um destino
Dicas, vídeos, cupons e hospedagens têm o campo **Destino**. Escolha o destino na lista e o item passa a aparecer também na página daquele lugar.

### Adicionar um vídeo
Cole o link do vídeo do YouTube. A miniatura aparece sozinha no site.

### Trocar a foto, a apresentação ou os links das redes
Abra **Meu perfil**. As redes com **"Botão grande em destaque"** marcado (YouTube e TikTok) viram botões grandes na página inicial.

### Atualizar o curso
Abra **Curso Direito na Gringa** e cole o link da Hotmart. O botão de compra só fica ativo depois que o link está preenchido.

### Editar ou apagar algo
Abra a seção e clique no item para editar. Para apagar, use o menu **⋯** ao lado do item e escolha **Delete**.

### Fotos
Nos campos de imagem, clique e envie a foto do computador ou do celular. Para capas, prefira fotos horizontais.

---

## 4. Marcadores e exemplos

- **`[PREENCHER: ...]`** (caixinha amarela) indica uma informação que falta. Basta trocar o texto pelo conteúdo real.
- **Selo "EXEMPLO"** marca conteúdo demonstrativo, criado só para mostrar o layout. Para usar o seu conteúdo, você pode:
  - abrir o item, colocar o conteúdo real e **desmarcar** "É conteúdo de exemplo?";
  - ou **apagar** o item de exemplo e criar um novo.

### O que ainda falta preencher
- **Meu perfil:** foto, apresentação e links do YouTube, TikTok, Instagram e LinkedIn.
- **Curso:** chamada, apresentação, "para quem é", módulos e link da Hotmart.
- **Itens de exemplo para substituir ou apagar:**
  - Viagens: Barcelona e Lisboa (destinos), 2 dicas, 2 vídeos, 2 cupons, 2 hospedagens/serviços e 2 equipamentos.
  - Carreira: 1 guia, 1 material gratuito, 2 ferramentas e 4 conteúdos.

---

## 5. Se preferir, é só pedir ao Claude

Você também pode abrir o Claude Code na pasta `CLAUDE CODE - PROJETO 1` e pedir qualquer mudança, inclusive de visual, que o painel não faz. Se você mexeu pelo painel antes, não precisa fazer nada: o Claude baixa as suas mudanças antes de começar.

---

<details>
<summary>Para quem for mexer no código (não é necessário para você)</summary>

- Site em **Astro 4** com *content collections* (`src/content/`). O esquema dos campos fica em `src/content/config.ts` e o painel (Pages CMS) espelha esses campos em `.pages.yml`.
- Áreas e sub-abas ficam em `src/lib/estrutura.ts`; a moldura (pastas na lateral, trilha e "continue folheando") em `src/layouts/Base.astro`; as cores e a tipografia em `src/styles/global.css`.
- Publicação na Vercel a partir da branch `main`.
- `npm install`, depois `npm run dev` para desenvolver ou `npm run build` para gerar `dist/`.
</details>
