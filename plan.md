# ESTRUTURA:

## Endpoint: / (homepage, index.html)
  - PALETA DE CORES: preto, amarelo, branco, azul escuro, cores da bandeira do vaticano
  - HEADER: Logo da OJ + Obra Jovem Site
  - MENU DINÂMICO:
    - Inicio, sobre nós, obras, eventos, equipe, contato
    - Todos os elementos sao clicaveis e scrollam para a seçao correspondente dele na pagina (com o trem do #)
    - Elemento "eventos" expande para duas opções: "retiros" e "calendario"
  - Opção de modo escuro e modo claro eh sonhar mt?

## Endpoint: /#inicio
  - Mensagem legal na capa
  - Foto legal tb (talvez foto de todo mundo junto)

## Endpoint: /#sobre-nos
  - Colocar uma foto da divina bonitona atrás e escrever o sobre nós
  - Titulo: sobre nos
  - Subtitulo: @obrajovemdp (hiperlink pro instagram)
  - Sobre nós: "Somos a pastoral da Obra Jovem da paróquia Nossa Senhora da Divina Providência."
  - Fazer uma caixinha de cada obra, colocar a descrição dela, uma logo png com mascara e cor correspondente, o título com seu nome e o @ no instagram da obra correspondente no subtitulo
  - Colocar uma foto da obra atras da logo tambem
  - Exemplo de caixinha no powerpoint que montei

## Endpoint: /#eventos
  - Titulo: Eventos
  - Subtitulo: saiba mais sobre nossos eventos:
  - Dois botoes: "retiros" e "calendario", cada um redirecionando para a página correspondente, hiperlinks

## Endpoint: /#equipe
  - Caixas com cada pessoa da equipe, com foto, nome e cargo
  - Caixas organizadas de maneira hierárquica, com os cargos mais altos em cima

## Endpoint: /#contato
  - Vai ser so um quadrado preto com os contatos da OJ la embaixao 

## Endpoint: /obras
  - PALETA DE CORES DEPENDE DE CADA OBRA (consultar instagrans da comunicação)
  - /obras/crisma, /obras/d1, /obras/d2, /obras/kayros, /obras/god
  
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

## Endpoint: /admin
  - página de administração do site
  - requer autenticação
  - permite gerenciar membros da coordenação com permissões superiores no site

# SEGURANÇA E AUTENTICAÇÃO:
não expor versão de server nem nada 
não expor a linguagem que o backend foi escrito

# CHECKLIST
- [ ]
