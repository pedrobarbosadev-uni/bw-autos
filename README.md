# 🏎️ BW Autos — Landing Page Premium

> _Velocidade com Elegância_

Landing page profissional e altamente moderna para a **BW Autos**, concessionária focada em veículos premium e esportivos.

---

## ✨ Preview

Uma experiência visual imersiva com tema escuro, animações fluidas e estética inspirada em marcas como Lamborghini, Porsche e Tesla.

---

## 📁 Estrutura do Projeto

```
bw-autos/
├── index.html          # Arquivo principal HTML
├── css/
│   └── styles.css      # Todos os estilos (Dark Mode, animações, responsivo)
├── js/
│   └── script.js       # Interações, animações e lógica de UI
├── assets/
│   ├── images/         # (imagens locais adicionais, se necessário)
│   └── icons/          # (ícones adicionais, se necessário)
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia   | Descrição                                        |
| ------------ | ------------------------------------------------ |
| HTML5        | Estrutura semântica e acessível                  |
| CSS3         | Custom Properties, Grid, Flexbox, animações      |
| JavaScript   | Vanilla JS puro (sem frameworks)                 |
| Google Fonts | Bebas Neue + Rajdhani + Orbitron                 |
| Unsplash API | Imagens de alta qualidade via URL (sem download) |

> Nenhuma dependência externa de JS. Zero frameworks. 100% vanilla.

---

## 🎨 Design

- **Tema:** Dark Mode exclusivo
- **Paleta:** Preto profundo `#080808` · Vermelho neon `#dc2626` · Branco `#e8e8e8`
- **Fontes:** Bebas Neue (títulos), Orbitron (tech/labels), Rajdhani (corpo)
- **Estilo:** Minimalista premium, inspirado em concessionárias de luxo europeias

---

## 🔥 Funcionalidades

### Interatividade

- [x] **Loader animado** com barra de progresso e logo pulsante
- [x] **Cursor customizado** com efeito de hover (desktop)
- [x] **Animação SVG do carro** — surge deslizando ao carregar
- [x] **Scroll Reveal** — elementos entram em cena ao rolar
- [x] **Contadores animados** (velocidade, tempo, potência)
- [x] **Tilt 3D** nos cards de veículos (desktop)
- [x] **Parallax** no hero
- [x] **Filtro de veículos** por categoria (Todos / Esportivos / Luxo / Elétricos)
- [x] **Formulário de contato** com máscara de telefone e feedback visual
- [x] **Menu hambúrguer** animado (mobile)
- [x] **Botão "voltar ao topo"** com aparição dinâmica
- [x] **Faixa animada** com scroll infinito

### Seções

| #   | Seção            | Descrição                                           |
| --- | ---------------- | --------------------------------------------------- |
| 1   | **Hero**         | Impacto visual máximo com carro SVG animado e stats |
| 2   | **Sobre**        | História da empresa com imagem premium              |
| 3   | **Veículos**     | Grid filtrável com 6 modelos premium                |
| 4   | **Diferenciais** | 6 cards com benefícios exclusivos                   |
| 5   | **Contato**      | Formulário completo + dados de contato              |

---

## 📱 Responsividade

| Breakpoint          | Layout                                   |
| ------------------- | ---------------------------------------- |
| Desktop (> 1024px)  | 3 colunas, cursor customizado            |
| Tablet (768–1024px) | 2 colunas, ajuste de espaçamento         |
| Mobile (< 768px)    | 1 coluna, menu hambúrguer, cursor nativo |
| Small (< 480px)     | Otimizações extras de fonte e botões     |

---

## 🚀 Como Rodar

### Localmente (sem servidor)

Basta abrir o arquivo `index.html` no navegador:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### Com servidor local (recomendado para melhor performance)

```bash
# Python 3
python -m http.server 3000

# Node.js (com npx)
npx serve .

# VS Code — instale a extensão "Live Server" e clique em "Go Live"
```

Acesse: `http://localhost:3000`

---

## 📤 Deploy no GitHub Pages

```bash
# 1. Crie um repositório no GitHub
git init
git add .
git commit -m "feat: BW Autos landing page"
git branch -M main
git remote add origin https://github.com/seu-usuario/bw-autos.git
git push -u origin main

# 2. Ative o GitHub Pages
# Vá em Settings → Pages → Source: main / root
# Seu site estará em: https://seu-usuario.github.io/bw-autos/
```

---

## 🖼️ Imagens

As imagens dos veículos são carregadas via URLs do [Unsplash](https://unsplash.com), não necessitando de download. Requerem conexão com a internet.

Para uso offline, baixe as imagens e substitua as URLs por caminhos locais em `./assets/images/`.

---

## 📄 Licença

Projeto desenvolvido para fins de demonstração. Livre para uso e modificação.

---

<div align="center">
  <strong>BW Autos</strong> · Feito com ♥ para apaixonados por automóveis
</div>
