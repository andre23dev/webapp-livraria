#  Livraria

App Livraria, gerencie sua biblioteca de livros. Projeto criado a partir do curso API Node com Express na Alura.

---
#### Setup
- [Git](#git)
- [Node](#node)
- [NPM](#npm)
- [Database](#database)

### Organização do Projeto

Crie uma pasta nomeada como Workspace.
Navegue até a pasta, em seguida iremos configurar e iniciar o git. Caso já tenha a configuração feita, avance para [Node](#node).

---
## Git

`git init` inicie o git

Utilizaremos o parâmetro de configuração `--global`, se preferir remova este parâmetro para aplicar a configuração local.
`git config --global user.name "Nome do Desenvolvedor"`
`git config --global user.`

Clone o projeto informando o nome do usuário e repositório.
`git clone git@github.com:<username>/<repositorio>.git`

A cada sessão de código, realize o teste se estiver ok, adicione os arquivos.
`git add .` adiciona todos os arquivos no diretório corrente.

Realize o commit do código com uma mensagem.
`git commit -m "ajuste na consulta de informações"`

Envie as informações para o repositório no git
`git push`

## Node
WebSite NodeJS informações e documentação
Windows: Baixar instalador no website nodejs
    [adicionar link para download]

## NPM

Setup npm para instalação de pacotes. 

Init NPM
`npm init -y` inicia npm, -y aprova todas as alterações contido no arquivo package.json

Instalar as dependências a partir do arquivo package.json
`npm install dependencies`

Pacotes utilizados no projeto

Instalar Node
Instalar npm
Instalar nodemon
Instalar express
Instalar moongose

# Database
---

## MongoDB Atlas

https://www.mongodb.com/cloud/atlas/register

- Criar conta
- Criar Cluster
- Criar database
- Adicionar um registro com titulo, autor, editora e numeroPáginas

## Moongose

cluster name:   cluster-webapp-livraria
database name:  db-livraria

# Referências

https://www.nodejs.com
https://www.npmjs.com
https://mongodb.com
https://www.markdownguide.org/
https://github.com/alura-cursos/2404-api-node-express