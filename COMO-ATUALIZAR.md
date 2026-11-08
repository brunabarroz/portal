# Como atualizar o seu site

Este guia é para você, Bruna. Não é preciso saber programar.

---

## 1. Como o site funciona (em 30 segundos)

- O **layout** (cores, abas, menus) fica separado do **conteúdo** (textos, links, cupons…).
- Você mexe só no conteúdo, pelo **painel de edição**, em `seusite.com/admin`.
- O painel funciona por formulários: você preenche os campos e clica em **Publicar**. Em cerca de 1 minuto o site se atualiza sozinho.
- Cada item aparece automaticamente nas páginas certas. Por exemplo: um cupom marcado com o destino "Barcelona" aparece em **Viagens › Cupons** e também na página de **Barcelona**.
- Uma categoria só aparece no menu quando tem pelo menos um item. Assim não ficam páginas vazias.

---

## 2. Colocar o site no ar (uma vez só)

Você vai precisar de duas contas gratuitas: **GitHub**, onde os arquivos ficam guardados, e **Netlify**, que publica o site.

1. Crie uma conta em **github.com**.
2. Crie uma conta em **netlify.com** usando o botão *"Sign up with GitHub"*.
3. ✅ O projeto já está no GitHub em `github.com/brunabarroz/portal`.
4. Na Netlify, clique em **Add new site → Import an existing project → GitHub** e escolha `portal`. As configurações já vêm prontas: clique em **Deploy**.
5. Para liberar o painel, abra **Site configuration → Access & security → OAuth** na Netlify, clique em **Install provider** e escolha **GitHub**. *(O GitHub fornece um "Client ID" e um "Secret" quando você cria um "OAuth App" em github.com → Settings → Developer settings. Use como "callback URL" `https://api.netlify.com/auth/done`.)*
6. ✅ O painel já está configurado para o repositório `brunabarroz/portal`.
7. Para usar um domínio próprio (ex.: brunabarros.com), configure em **Domain management** na Netlify.

Pronto. A partir daí, tudo é feito em `seusite.com/admin`, entrando com o GitHub.

---

## 3. O dia a dia no painel

No menu da esquerda do painel aparecem as seções:

| Seção do painel | Onde aparece no site |
|---|---|
| ⚙️ Meu perfil e curso → **Meu perfil** | Página Bruna Barros: foto, apresentação e redes |
| ⚙️ Meu perfil e curso → **Curso Direito na Gringa** | Carreira › Direito na Gringa (e o botão da Hotmart) |
| ✈️ Viagens · Destinos e roteiros | Viagens › Destinos e Viagens › Roteiros |
| ✈️ Viagens · Dicas | Viagens › Dicas (e a página do destino) |
| ✈️ Viagens · Vídeos do YouTube | Viagens › Vídeos (e a página do destino) |
| ✈️ Viagens · Cupons | Viagens › Cupons (e a página do destino) |
| ✈️ Viagens · Hospedagens e serviços | Viagens › Hospedagens e serviços (e a página do destino) |
| ✈️ Viagens · Equipamentos e produtos | Viagens › Equipamentos |
| 💼 Carreira · Guias e e-books | Carreira › Guias e e-books |
| 💼 Carreira · Materiais gratuitos | Carreira › Materiais gratuitos |
| 💼 Carreira · Ferramentas e indicações | Carreira › Ferramentas e indicações |
| 💼 Carreira · Conteúdos | Carreira › Conteúdos (filtrados por tema) |

### Adicionar um novo destino com roteiro
1. Abra **✈️ Viagens · Destinos e roteiros → Novo destino**.
2. Preencha o nome, o país e a sigla do carimbo (ex.: `BCN`), o resumo e a foto de capa.
3. No campo **Roteiro**, escreva o dia a dia. Use o botão de título (H2) para cada dia: "Dia 1 — Centro histórico".
4. Clique em **Publicar**.
   - Se deixar o roteiro vazio, o destino aparece normalmente, só que fora da lista de Roteiros.

### Adicionar um vídeo
1. Abra **✈️ Viagens · Vídeos do YouTube → Novo vídeo**.
2. Cole o link do vídeo (ex.: `https://www.youtube.com/watch?v=...`). A miniatura aparece sozinha.
3. Escolha o **destino**, se o vídeo for sobre um lugar específico.

### Adicionar um cupom
Abra **✈️ Viagens · Cupons → Novo cupom** e preencha a empresa, o benefício, o código, o link e, se quiser, o destino.

### Adicionar um produto ou equipamento
Abra **✈️ Viagens · Equipamentos e produtos → Novo produto**. Os produtos são agrupados pela **categoria** que você digitar (ex.: "Mochilas", "Eletrônicos"). Use sempre o mesmo nome para agrupar itens iguais.

### Trocar a foto, a apresentação ou os links das redes
Abra **⚙️ Meu perfil e curso → Meu perfil**. As redes com **"Botão grande em destaque"** marcado (YouTube e TikTok) viram botões grandes na página inicial.

### Atualizar o curso
Abra **⚙️ Meu perfil e curso → Curso Direito na Gringa** e cole o link da Hotmart. O botão de compra só fica ativo depois que o link está preenchido.

### Editar ou apagar algo
Clique no item na lista da seção, edite e clique em **Publicar**. Para apagar, use **Excluir entrada** dentro do item.

---

## 4. Marcadores e exemplos

- **`[PREENCHER: ...]`** (caixinha amarela) indica uma informação que falta. Basta trocar o texto pelo conteúdo real.
- **Selo "EXEMPLO"**: conteúdo demonstrativo criado só para mostrar o layout. Para usar o seu conteúdo, há dois caminhos:
  - editar o item, colocar o conteúdo real e **desmarcar** "É conteúdo de exemplo?";
  - ou **excluir** o item de exemplo e criar um novo.

### O que ainda falta preencher
- Perfil: foto, apresentação, links do YouTube, TikTok, Instagram e LinkedIn.
- Curso: chamada, apresentação, "para quem é", módulos e link da Hotmart.
- Substituir ou apagar os itens de exemplo: Barcelona e Lisboa (destinos), 2 dicas, 2 vídeos, 2 cupons, 2 hospedagens/serviços, 2 equipamentos, 1 guia, 1 material gratuito, 2 ferramentas e 4 conteúdos de carreira.

---

## 5. Dicas de escrita no painel

- **Resumo**: 1 ou 2 frases. Ele aparece nos cartões das listas.
- **Imagens**: use fotos horizontais para capas. O painel aceita arrastar e soltar.
- **Links de afiliado**: cole o link completo, começando com `https://`.

---

<details>
<summary>Para quem for mexer no código (não é necessário para você)</summary>

- Site em **Astro 4** com *content collections* (`src/content/`). O esquema dos campos fica em `src/content/config.ts` e o painel espelha esses campos em `public/admin/config.yml`.
- Áreas e sub-abas ficam em `src/lib/estrutura.ts`; a moldura (abas, trilha e "continue folheando") em `src/layouts/Base.astro`; as cores e a tipografia em `src/styles/global.css`.
- `npm install`, depois `npm run dev` para desenvolver ou `npm run build` para gerar `dist/`.
- Para testar o painel no computador: rode `npm run painel-local` em um terminal e `npm run dev` em outro, e abra `localhost:4321/admin`.
</details>
