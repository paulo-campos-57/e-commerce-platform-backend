<div align="center">
  <h1>
    <img src="https://skillicons.dev/icons?i=vue,vite,javascript" /><br>
    Front-End — E-Commerce Platform 🇺🇸
  </h1>
  <p>
    <img src="https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat&logo=vuedotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/Vue_Router-4.x-4FC08D?style=flat&logo=vuedotjs&logoColor=white" />
  </p>
</div>

This repository contains the Front-End of <a href="https://github.com/paulo-campos-57" target="_blank">Paulo Campos</a>'s E-Commerce Platform project.<br>
The back-end repository can be found at this <a href="https://github.com/paulo-campos-57/e-commerce-platform-backend/tree/development" target="_blank">link</a>.

---

## Project Structure

```
e-commerce-platform-frontend/
├── ec-front/
│   ├── public/               # Static assets served directly
│   ├── src/
│   │   ├── assets/           # Images, fonts, and global styles
│   │   ├── components/       # Reusable Vue components
│   │   ├── router/           # Vue Router configuration & route definitions
│   │   ├── services/         # API service layer (HTTP calls to the back-end)
│   │   ├── views/            # Page-level components (one per route)
│   │   ├── App.vue           # Root component
│   │   └── main.js           # Application entry point
│   ├── .gitignore
│   ├── index.html            # HTML entry point
│   ├── jsconfig.json         # JavaScript/IDE path aliases configuration
│   ├── package.json          # Dependencies & scripts
│   ├── package-lock.json     # Lockfile
│   ├── README.md
│   └── vite.config.js        # Vite configuration
│
├── .env                      # Environment variables
├── .gitignore
├── LICENSE
└── README.md
```

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Vue.js](https://vuejs.org/) | 3.x | Progressive UI framework |
| [Vite](https://vitejs.dev/) | 5.x | Build tool & dev server |
| [Vue Router](https://router.vuejs.org/) | 4.x | Client-side routing |
| [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | ES2022 | Primary language |
| [Axios](https://axios-http.com/) | — | HTTP client for API requests |

---

## Requirements

- **Node.js** 20.x or higher
- **npm** 10.x or higher

> Make sure the back-end is running before starting the front-end.

---

## Environment Variables

Create a `.env` file at the root of `ec-front/` and fill in your values:

```env
# Back-end API base URLs
VITE_BACKEND_API_URL=http://localhost:3000
PYTHON_API_URL=http://localhost:8000
```

> All environment variables exposed to the client must be prefixed with `VITE_`.

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
cd ec-front
npm install
```

### ⚙️ 3. Configure environment variables

```bash
# Create and edit the .env file with your credentials
cp .env.example .env
```

### ▶️ 4. Start the development server

```bash
npm run dev
```

The application will be available at **http://localhost:5173**.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot-reload |
| `npm run build` | Build the application for production into `dist/` |
| `npm run preview` | Locally preview the production build |

---

## Application Overview

| Directory | Description |
|---|---|
| `components/` | Reusable UI elements (buttons, cards, modals, etc.) |
| `views/` | Full-page components mapped to routes |
| `router/` | Route definitions and navigation guards |
| `services/` | Abstraction layer for all API communication with the back-end |
| `assets/` | Static resources such as images, icons, and global stylesheets |

---

<br>

---

<div align="center">
  <h1>
    <img src="https://skillicons.dev/icons?i=vue,vite,javascript" /><br>
    Front-End — E-Commerce Platform 🇧🇷
  </h1>
  <p>
    <img src="https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat&logo=vuedotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/Vue_Router-4.x-4FC08D?style=flat&logo=vuedotjs&logoColor=white" />
  </p>
</div>

Este repositório contém o Front-End do projeto E-Commerce Platform de <a href="https://github.com/paulo-campos-57" target="_blank">Paulo Campos</a>.<br>
O repositório do back-end pode ser encontrado neste <a href="https://github.com/paulo-campos-57/e-commerce-platform-backend/tree/development" target="_blank">link</a>.

---

## Estrutura do Projeto

```
e-commerce-platform-frontend/
├── ec-front/
│   ├── public/               # Assets estáticos servidos diretamente
│   ├── src/
│   │   ├── assets/           # Imagens, fontes e estilos globais
│   │   ├── components/       # Componentes Vue reutilizáveis
│   │   ├── router/           # Configuração do Vue Router e definição de rotas
│   │   ├── services/         # Camada de serviços de API (chamadas HTTP ao back-end)
│   │   ├── views/            # Componentes de página (um por rota)
│   │   ├── App.vue           # Componente raiz
│   │   └── main.js           # Ponto de entrada da aplicação
│   ├── .gitignore
│   ├── index.html            # Ponto de entrada HTML
│   ├── jsconfig.json         # Configuração de aliases JavaScript/IDE
│   ├── package.json          # Dependências e scripts
│   ├── package-lock.json     # Lockfile
│   ├── README.md
│   └── vite.config.js        # Configuração do Vite
│
├── .env                      # Variáveis de ambiente
├── .gitignore
├── LICENSE
└── README.md
```

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [Vue.js](https://vuejs.org/) | 3.x | Framework de UI progressivo |
| [Vite](https://vitejs.dev/) | 5.x | Build tool e servidor de desenvolvimento |
| [Vue Router](https://router.vuejs.org/) | 4.x | Roteamento client-side |
| [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) | ES2022 | Linguagem principal |
| [Axios](https://axios-http.com/) | — | Cliente HTTP para requisições à API |

---

## Requisitos

- **Node.js** 20.x ou superior
- **npm** 10.x ou superior

> Certifique-se de que o back-end esteja em execução antes de iniciar o front-end.

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz de `ec-front/` e preencha com suas credenciais:

```env
# URLs base da API do back-end
VITE_BACKEND_API_URL=http://localhost:3000
PYTHON_API_URL=http://localhost:8000
```

> Todas as variáveis de ambiente expostas ao cliente devem ter o prefixo `VITE_`.

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
cd ec-front
npm install
```

### ⚙️ 3. Configure as variáveis de ambiente

```bash
# Crie e edite o arquivo .env com suas credenciais
cp .env.example .env
```

### ▶️ 4. Suba o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em **http://localhost:5173**.

---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot-reload |
| `npm run build` | Gera o build de produção na pasta `dist/` |
| `npm run preview` | Visualiza localmente o build de produção |

---

## Visão Geral da Aplicação

| Diretório | Descrição |
|---|---|
| `components/` | Elementos de UI reutilizáveis (botões, cards, modais, etc.) |
| `views/` | Componentes de página completa mapeados a rotas |
| `router/` | Definição de rotas e guards de navegação |
| `services/` | Camada de abstração para toda comunicação com a API do back-end |
| `assets/` | Recursos estáticos como imagens, ícones e folhas de estilo globais |
