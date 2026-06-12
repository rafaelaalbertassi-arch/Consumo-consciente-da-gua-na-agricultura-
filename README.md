# 💧 Uso Consciente da Água na Agricultura

Site educativo sobre o uso responsável da água no campo, com conteúdo informativo e quiz interativo de 10 questões.

---

## 📋 Sobre o Projeto

O objetivo do site é conscientizar visitantes — agricultores, estudantes e o público geral — sobre a importância de usar a água de forma eficiente na produção agrícola. O conteúdo abrange conceitos, boas práticas sustentáveis e um quiz para fixação do aprendizado.

---

## 🗂️ Estrutura de Arquivos

```
/
├── index.html   → Estrutura e conteúdo da página
├── style.css    → Estilos, paleta de cores e animações
└── script.js    → Lógica do quiz e animações de scroll
```

> Nenhuma dependência externa. Funciona 100% offline com HTML, CSS e JavaScript puro.

---

## 🖥️ Como Usar

1. Baixe ou clone os três arquivos para uma mesma pasta.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Nenhuma instalação ou servidor é necessário.

---

## 📄 Seções do Site

### Cabeçalho
Título principal, subtítulo e ícone animado com efeito flutuante.

### Introdução
Quatro cards explicando:
- O conceito de uso consciente da água
- A importância da água para a agricultura
- Os impactos do desperdício hídrico
- Os benefícios da sustentabilidade

### Boas Práticas
Cinco práticas sustentáveis apresentadas em cards visuais:

| Prática | Descrição resumida |
|---|---|
| 💧 Irrigação por Gotejamento | Entrega água direto na raiz, reduzindo perdas em até 60% |
| 🌧️ Captação de Água da Chuva | Cisternas e reservatórios para reaproveitamento |
| 📊 Monitoramento da Umidade | Sensores indicam o momento certo de irrigar |
| 🌿 Proteção de Nascentes | Preservação da mata ciliar para recarga de aquíferos |
| ♻️ Reutilização de Água | Reaproveitamento de águas residuárias no campo |

### Quiz Interativo
- 10 questões de múltipla escolha (4 alternativas cada)
- Uma questão exibida por vez
- Barra de progresso e contador de questões
- Feedback visual imediato (✅ acerto / ❌ erro com resposta correta destacada)
- Pontuação calculada automaticamente
- Resultado final com mensagem personalizada
- Botão para refazer o quiz

**Faixas de resultado:**

| Acertos | Mensagem |
|---|---|
| 0 – 4 | 🌱 Continue aprendendo sobre sustentabilidade! |
| 5 – 7 | 💧 Bom conhecimento sobre o tema! |
| 8 – 10 | 🏆 Parabéns! Você demonstra excelente consciência ambiental! |

---

## 🎨 Design

- **Paleta:** verde-floresta `#2d6a4f`, azul-água `#2176ae`, bege-terra `#f5f9f0`
- **Tipografia:** Segoe UI / system-ui (sem fontes externas)
- **Responsivo:** layout adaptado para desktop e mobile
- **Acessibilidade:** foco visível no teclado, suporte a `prefers-reduced-motion`
- **Animações:** reveal suave ao rolar a página via `IntersectionObserver`; hover nos cards; transições nas opções do quiz

---

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (variáveis, Grid, Flexbox, animações, media queries)
- JavaScript ES6+ (sem frameworks ou bibliotecas externas)

---

## 📱 Compatibilidade

Compatível com todos os navegadores modernos:

| Navegador | Suporte |
|---|---|
| Chrome / Edge | ✅ Total |
| Firefox | ✅ Total |
| Safari | ✅ Total |
| Mobile (iOS/Android) | ✅ Total |

---

## 📜 Licença

Projeto educativo de uso livre. Pode ser adaptado e redistribuído com fins educacionais.
