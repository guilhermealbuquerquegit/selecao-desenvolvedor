## Índice

- [ Backend ](#backend)
  - [ Rodando API](#api)
  - [ Testando API](#teste)
- [ Promises ](#promises)

<a name="backend"></a>

### Backend

Aplicação back-end REST API.

#### Tecnologias utilizadas 🚀

    - NodeJS
    - Express
    - SQLite
    - Typescript

<a name="api"></a>

### Rodando a aplicação 💻

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

<a name="teste"></a>

**Testes da API**

1.  Crie um serviço em Node.js que exponha uma API que retorne a lista de
    estados brasileiros, com nome e sigla uf.

        Resource URI > GET - http://localhost:4000/api/estados

2.  Nesse mesmo serviço em Node.js, exponha uma API que retorne a população
    de um determinado estado brasileiro :

        Resource URI > GET - http://localhost:4000/api/populacao/sp

3.  Crie mais uma API que acesse o serviço de população e retornar junto ao
    resultado a população de cada estado.

        Resource URI > GET - http://localhost:4000/api/estados

4.  API que retorna o estado pelo UF

        Resource URI > GET - http://localhost:4000/api/estados/ce

5.  API que retorna o estado pelo UF

        Resource URI > GET - http://localhost:4000/api/estados/ce

### Promises

Feito por Guilherme Albuquerquerque. 🤝 Entre em [contato](https://www.linkedin.com/in/guilherme-developer)
