# <h1 align="center">Seleção Desenvolvedor Fullstack</h1>

## Backend

Aplicação back-end REST API.

## 🚀 Tecnologias utilizadas

#### Backend

- NodeJS
- Express
- SQLite
- Typescript

## 💻 Rodando a aplicação

#### Requisitos

- NodeJS versão LTS
- Npm

**Clone o repositório**

```sh
git clone https://github.com/guilhermealbuquerquegit/teste-desenvolvedor.git
```

**Instale as dependencias**

```sh
npm install
```

**Inicie o processo**

```sh
npm run dev
```

**Testes da API**

1.  Crie um serviço em Node.js que exponha uma API que retorne a lista de
    estados brasileiros, com nome e sigla uf.

        Resource URI > GET - http://localhost:4000/api/estados

2.  Crie um serviço em Node.js que exponha uma API que retorne o estado pelo id

        Resource URI > GET - http://localhost:4000/api/estados/:id

3.  Crie mais uma API que acesse o serviço de população e retornar junto ao
    resultado a população de cada estado.

        Resource URI > GET - http://localhost:4000/api/populacao

4.  Nesse mesmo serviço em Node.js, exponha uma API que retorne a população
    de um determinado estado brasileiro pelo id.

        Resource URI > GET - http://localhost:4000/api/estados/:id/populacao

5.  Nesse mesmo serviço em Node.js, exponha uma API que retorne a população
    de um determinado estado brasileiro pela uf.

        Resource URI > GET - http://localhost:4000/api/populacao/:uf

Feito por Guilherme Albuquerquerque. 🤝 Entre em [contato](https://www.linkedin.com/in/guilherme-developer)
