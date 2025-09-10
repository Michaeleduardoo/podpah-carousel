# Podpah - Carousel de Imagens

Um aplicativo React moderno que simula um carousel de imagens estilo Instagram, desenvolvido com TypeScript e Vite.

## 📋 Sobre o Projeto

O Podpah é uma aplicação web interativa que apresenta um carousel de imagens com navegação intuitiva, similar ao feed do Instagram. O projeto inclui funcionalidades como navegação por setas, paginação com indicadores visuais e um design responsivo.

## ✨ Funcionalidades

- **Carousel de Imagens**: Navegação suave entre 6 imagens diferentes
- **Controles de Navegação**: Setas para navegar entre as imagens
- **Indicadores de Paginação**: Pontos visuais que mostram a posição atual
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela
- **Tema Toggle**: Alternância entre temas claro e escuro
- **Header Personalizado**: Cabeçalho com perfil e verificação
- **Animações Suaves**: Transições fluidas entre as imagens

## 🛠️ Tecnologias Utilizadas

- **React 18.3.1** - Biblioteca principal para interface
- **TypeScript 5.5.3** - Tipagem estática
- **Vite 5.4.1** - Build tool e servidor de desenvolvimento
- **CoreUI 5.3.0** - Componentes de interface
- **React Icons 5.3.0** - Ícones para a aplicação
- **ESLint 9.9.0** - Linting e formatação de código

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

3. Abra seu navegador e acesse `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter para verificar o código

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Carousel/          # Componente principal do carousel
│   ├── Controls/          # Controles de navegação
│   ├── Header/            # Cabeçalho da aplicação
│   ├── Image/             # Imagens do carousel
│   ├── Inter/             # Componente de interação
│   ├── Loading/           # Componente de carregamento
│   ├── Notification/      # Sistema de notificações
│   └── ThemeToggle/       # Toggle de tema
├── hooks/                 # Hooks customizados
├── App.tsx               # Componente principal
├── App.css               # Estilos globais
└── main.tsx              # Ponto de entrada da aplicação
```

## 🎨 Componentes Principais

### Carousel
- Gerencia a exibição das imagens
- Controla a navegação entre slides
- Implementa scroll suave

### Header
- Exibe informações do perfil
- Inclui toggle de tema
- Mostra verificação de conta

### Controls
- Botões de navegação (anterior/próximo)
- Integração com o estado do carousel

## 🔧 Configuração

O projeto utiliza as seguintes configurações:

- **TypeScript**: Configurado com strict mode
- **ESLint**: Regras de linting para React e TypeScript
- **Vite**: Configuração otimizada para desenvolvimento e build

## 📱 Responsividade

A aplicação foi desenvolvida com foco na responsividade, adaptando-se a diferentes tamanhos de tela e dispositivos móveis.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ usando React e TypeScript.

---

**Nota**: Este projeto é uma demonstração de um carousel de imagens estilo Instagram, desenvolvido para fins educacionais e de portfólio.
