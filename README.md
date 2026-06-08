<div align="center">
  <h1>
    <img src="https://skillicons.dev/icons?i=typescript,nestjs,sqlite" /><br>
    Back-End — E-Commerce Platform 🇺🇸
  </h1>
  <p>
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/NestJS-10.x-E0234E?style=flat&logo=nestjs&logoColor=white" />
    <img src="https://img.shields.io/badge/SQLite-3.x-003B57?style=flat&logo=sqlite&logoColor=white" />
    <img src="https://img.shields.io/badge/ESLint-enabled-4B32C3?style=flat&logo=eslint&logoColor=white" />
    <img src="https://img.shields.io/badge/Prettier-enabled-F7B93E?style=flat&logo=prettier&logoColor=black" />
    <img src="https://img.shields.io/badge/Jest-enabled-C21325?style=flat&logo=jest&logoColor=white" />
  </p>
</div>

This repository contains the Back-End of <a href="https://github.com/paulo-campos-57" target="_blank">Paulo Campos</a>'s E-Commerce Platform project.<br>
The front-end repository can be found at this <a href="https://github.com/paulo-campos-57/e-commerce-platform-frontend/tree/development" target="_blank">link</a>.

---

## Project Structure

```
e-commerce-platform-backend/
├── src/
│   ├── common/               # Shared utilities, guards, pipes, interceptors
│   ├── modules/              # Feature modules
│   │   ├── auth/             # Authentication & authorisation (JWT)
│   │   ├── recommendation/   # Product recommendation logic
│   │   └── user/             # User management
│   ├── app.controller.spec.ts # Root controller unit tests
│   ├── app.controller.ts     # Root controller
│   ├── app.module.ts         # Root application module
│   ├── app.service.ts        # Root service
│   └── main.ts               # Application entry point (bootstrap)
│
├── test/                     # End-to-end tests
├── ec-platform.db            # SQLite database file
├── .env                      # Environment variables
├── .eslintrc / eslint.config.mjs  # ESLint configuration
├── .prettierrc               # Prettier configuration
├── nest-cli.json             # NestJS CLI configuration
├── package.json              # Dependencies & scripts
├── package-lock.json         # Lockfile
├── tsconfig.json             # TypeScript configuration
├── tsconfig.build.json       # TypeScript build configuration
├── LICENSE
└── README.md
```

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Primary language |
| [NestJS](https://nestjs.com/) | 10.x | Web framework |
| [SQLite](https://www.sqlite.org/) | 3.x | Relational database |
| [TypeORM](https://typeorm.io/) | — | ORM |
| [JWT / Passport](https://docs.nestjs.com/security/authentication) | — | Authentication |
| [ESLint](https://eslint.org/) | — | Linter |
| [Prettier](https://prettier.io/) | — | Code formatter |
| [Jest](https://jestjs.io/) | — | Unit & e2e testing |

---

## Requirements

- **Node.js** 20.x or higher
- **npm** 10.x or higher

---

## Environment Variables

Create a `.env` file at the root of the project and fill in your values:

```env
# Bycript for salt
BCRYPT_SALT_ROUNDS=number_of_salt_rounds
# JWT
# Generate a secure key with: node -e "require('crypto').randomBytes(32).toString('hex').then(console.log)"
JWT_SECRET=your_secret_key_here
```

---

## How to Run

### <img src="https://skillicons.dev/icons?i=github" height="20" style="vertical-align: middle;" /> 1. Clone the repository

```bash
git clone https://github.com/paulo-campos-57/e-commerce-platform-frontend.git
cd e-commerce-platform-frontend
git checkout development
```

### 📦 2. Install dependencies

```bash
npm install
```

### ⚙️ 3. Configure environment variables

```bash
# Create and edit the .env file with your credentials
cp .env.example .env
```

### ▶️ 4. Start the development server

```bash
npm run start:dev
```

The API will be available at **http://localhost:3000**.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run start` | Start the application |
| `npm run start:dev` | Start in watch mode (development) |
| `npm run start:prod` | Start compiled build (production) |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm run lint` | Run ESLint |
| `npm run format` | Format source files with Prettier |
| `npm run test` | Run unit tests |
| `npm run test:watch` | Run unit tests in watch mode |
| `npm run test:cov` | Run unit tests with coverage report |
| `npm run test:e2e` | Run end-to-end tests |

---

## Running Tests

```bash
# Run all unit tests
npm run test

# Run with verbose output
npm run test -- --verbose

# Run a specific test file
npm run test -- app.controller.spec.ts

# Run with coverage
npm run test:cov

# Run end-to-end tests
npm run test:e2e
```

---

## API Overview

| Prefix | Description |
|---|---|
| `/auth` | Registration, login, and JWT token management |
| `/users` | User profile and account management |
| `/recommendations` | Product recommendation retrieval and logic |

---

<br>

---

<div align="center">
  <h1>
    <img src="https://skillicons.dev/icons?i=typescript,nestjs,sqlite" /><br>
    Back-End — E-Commerce Platform 🇧🇷
  </h1>
  <p>
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/NestJS-10.x-E0234E?style=flat&logo=nestjs&logoColor=white" />
    <img src="https://img.shields.io/badge/SQLite-3.x-003B57?style=flat&logo=sqlite&logoColor=white" />
    <img src="https://img.shields.io/badge/ESLint-enabled-4B32C3?style=flat&logo=eslint&logoColor=white" />
    <img src="https://img.shields.io/badge/Prettier-enabled-F7B93E?style=flat&logo=prettier&logoColor=black" />
    <img src="https://img.shields.io/badge/Jest-enabled-C21325?style=flat&logo=jest&logoColor=white" />
  </p>
</div>

Este repositório contém o Back-End do projeto E-Commerce Platform de <a href="https://github.com/paulo-campos-57" target="_blank">Paulo Campos</a>.<br>
O repositório do front-end pode ser encontrado neste <a href="https://github.com/paulo-campos-57/e-commerce-platform-frontend/tree/development" target="_blank">link</a>.

---

## Estrutura do Projeto

```
e-commerce-platform-backend/
├── src/
│   ├── common/               # Utilitários, guards, pipes e interceptors compartilhados
│   ├── modules/              # Módulos de funcionalidades
│   │   ├── auth/             # Autenticação e autorização (JWT)
│   │   ├── recommendation/   # Lógica de recomendação de produtos
│   │   └── user/             # Gerenciamento de usuários
│   ├── app.controller.spec.ts # Testes unitários do controller raiz
│   ├── app.controller.ts     # Controller raiz
│   ├── app.module.ts         # Módulo raiz da aplicação
│   ├── app.service.ts        # Service raiz
│   └── main.ts               # Ponto de entrada da aplicação (bootstrap)
│
├── test/                     # Testes end-to-end
├── ec-platform.db            # Arquivo do banco de dados SQLite
├── .env                      # Variáveis de ambiente
├── .eslintrc / eslint.config.mjs  # Configuração do ESLint
├── .prettierrc               # Configuração do Prettier
├── nest-cli.json             # Configuração do NestJS CLI
├── package.json              # Dependências e scripts
├── package-lock.json         # Lockfile
├── tsconfig.json             # Configuração do TypeScript
├── tsconfig.build.json       # Configuração de build do TypeScript
├── LICENSE
└── README.md
```

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Linguagem principal |
| [NestJS](https://nestjs.com/) | 10.x | Framework web |
| [SQLite](https://www.sqlite.org/) | 3.x | Banco de dados relacional |
| [TypeORM](https://typeorm.io/) | — | ORM |
| [JWT / Passport](https://docs.nestjs.com/security/authentication) | — | Autenticação |
| [ESLint](https://eslint.org/) | — | Linter |
| [Prettier](https://prettier.io/) | — | Formatador de código |
| [Jest](https://jestjs.io/) | — | Testes unitários e e2e |

---

## Requisitos

- **Node.js** 20.x ou superior
- **npm** 10.x ou superior

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e preencha com suas credenciais:

```env
# Bycript for salt
BCRYPT_SALT_ROUNDS=numero_de_rodadas_de_salt
# JWT
# Gere uma chave segura com: node -e "require('crypto').randomBytes(32).toString('hex').then(console.log)"
JWT_SECRET=sua_chave_secreta_aqui
```

---

## Como Executar

### <img src="https://skillicons.dev/icons?i=github" height="20" style="vertical-align: middle;" /> 1. Clone o repositório

```bash
git clone https://github.com/paulo-campos-57/e-commerce-platform-frontend.git
cd e-commerce-platform-frontend
git checkout development
```

### 📦 2. Instale as dependências

```bash
npm install
```

### ⚙️ 3. Configure as variáveis de ambiente

```bash
# Crie e edite o arquivo .env com suas credenciais
cp .env.example .env
```

### ▶️ 4. Suba o servidor de desenvolvimento

```bash
npm run start:dev
```

A API estará disponível em **http://localhost:3000**.

---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run start` | Inicia a aplicação |
| `npm run start:dev` | Inicia em modo watch (desenvolvimento) |
| `npm run start:prod` | Inicia o build compilado (produção) |
| `npm run build` | Compila o TypeScript para `dist/` |
| `npm run lint` | Executa o ESLint |
| `npm run format` | Formata os arquivos com Prettier |
| `npm run test` | Executa os testes unitários |
| `npm run test:watch` | Executa os testes em modo watch |
| `npm run test:cov` | Executa os testes com relatório de cobertura |
| `npm run test:e2e` | Executa os testes end-to-end |

---

## Rodando os Testes

```bash
# Executar todos os testes unitários
npm run test

# Executar com saída detalhada
npm run test -- --verbose

# Executar um arquivo específico
npm run test -- app.controller.spec.ts

# Executar com cobertura
npm run test:cov

# Executar testes end-to-end
npm run test:e2e
```

---

## Visão Geral da API

| Prefixo | Descrição |
|---|---|
| `/auth` | Cadastro, login e gerenciamento de tokens JWT |
| `/users` | Perfil de usuário e gerenciamento de conta |
| `/recommendations` | Recuperação e lógica de recomendação de produtos |
