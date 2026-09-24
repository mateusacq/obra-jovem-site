# ESTRUTURA:

## Endpoint: / (homepage, index.html)
  - HEADER: Logo da OJ + Obra Jovem Site, fundo amarelo e escrito em preto ou branco
  - FOOTER: fundo preto, escrito branco, contato
  - MENU DINÂMICO:
    - Inicio, sobre nós, obras, eventos, equipe, contato
    - Todos os elementos sao clicaveis e scrollam para a seçao correspondente dele na pagina (com o trem do #)
    - Elemento "eventos" expande para duas opções: "retiros" e "calendario"
  - Funcionalidade de dark/light mode (envolve só um pouco de JavaScript)

  ### Templates bons:
  - https://startbootstrap.com/theme/agency
  - https://startbootstrap.com/theme/grayscale
  - https://html5up.net/dimension
  - https://html5up.net/alpha
  - https://html5up.net/prologue
  - React tb tem outros bons

## Endpoint: /#inicio
  - Mensagem legal na capa
  - Foto legal tb (talvez foto de todo mundo junto)

## Endpoint: /#eventos
  - Titulo: Eventos
  - Subtitulo: saiba mais sobre nossos eventos:
  - Dois botoes: "calendario", "retiros", cada um redirecionando para a página correspondente, hiperlinks

## Endpoint: /#equipe
  - Caixas com cada ministério / equipe, com foto, nome e cargo
  - Caixas organizadas de maneira hierárquica, com os cargos mais altos em cima

## Endpoint: /obras
  - PALETA DE CORES DEPENDE DE CADA OBRA (consultar instagrans da comunicação)
  - /obras/crisma, /obras/d1, /obras/d2, /obras/kayros, /obras/god
  
## Endpoint: /obras/crisma
  - Colocar verificação se a pessoa confessou pra crismar 
    - Usar um Formulário. Adicionar uma caixa de seleção (Checkbox) obrigatória dizendo: "Declaro perante Deus e a Igreja que realizei o sacramento da confissão em preparação para a Crisma". Também pedir a foto que comprova isso (ver o que coords acham).

## Endpoint: /retiros
- Seção usuário comum:
  - Forms de inscrição
  - Descrição do retiro
  - Data que ocorrerá
- Seção coordenação:
  - checklist de coisas pra fazer 
  - caixinha que leva ao google drive

## Endpoint: /calendario
  - Lista de eventos com data, descrição e local
  - Adaptado do pdf da sarah
  - Sugestão de Ouro do Gemini: criar uma agenda pública no Google Agenda para a Obra Jovem e incorporar (embed) essa agenda na página /calendario. Assim, quando a coordenação atualizar o Google Agenda no celular, o site atualiza sozinho. (falar disso com a Sarah e falar que o LITC usa isso também).

# SEGURANÇA E AUTENTICAÇÃO:
não expor versão de server nem versão de nada em nenhuma parte do site
não expor a linguagem que o backend foi escrito

# CHECKLIST
- [ ] Descobrir como replicar o header pro site todo
- [ ] Fazer calendário aproveitando planilha do calendário
- [ ] Fazer parte da crisma com sessão de confissão 

# 🔴 O que é MUITO DIFÍCIL e deve ficar para a Versão 2.0 (Alerta)

1. Autenticação e Administração (/login, /signup, /admin, /avisos)

    O problema: Criar um sistema de login seguro do zero envolve criptografia de senhas, proteção contra ataques (como injeção de SQL), controle de sessão (cookies/tokens) e recuperação de senha por e-mail. É o tipo de coisa que não se deve fazer do zero sem experiência, pois lida com dados sensíveis (LGPD) dos membros da igreja.

    O problema da área de coordenação em /retiros: Construir um checklist interativo exclusivo para administradores transforma seu site num "Trello" ou "Notion".

    A Solução (Como trocar para algo simples):

        Corte o login e o admin da Versão 1. Faça o site ser 100% público, focado em divulgar a Obra Jovem.

        Para a gestão da coordenação (checklists, links pro Drive), continuem usando um grupo no WhatsApp, o Trello ou o Notion. Não tente reinventar a roda construindo um sistema de gestão dentro do site da igreja agora.

        Para a página de /avisos, em vez de criar um painel de administração onde a comunicação digita os avisos, considere usar ferramentas que transformam o Instagram ou um canal do Telegram em um mural de recados no site, ou simplesmente atualize o código manualmente uma vez por mês.

## Endpoint: /login
  - Página de login do servo ou do coordenador

## Endoint: /signup
  - Página de cadastro de novo servou ou coordenador

## Endpoint: /avisos
  - Aba onde a comunicação vai mexer mais

## Endpoint: /admin
  - página de administração do site
  - requer autenticação
  - permite gerenciar membros da coordenação com permissões superiores no site
