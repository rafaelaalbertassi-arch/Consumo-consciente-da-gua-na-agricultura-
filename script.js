/**
 * script.js — Uso Consciente da Água na Agricultura
 * Responsabilidades:
 *  1. Quiz interativo com 10 questões
 *  2. Animação de reveal ao rolar a página
 */

/* ============================================================
   1. DADOS DO QUIZ
   ============================================================ */
const questoes = [
  {
    texto: "Qual é o principal objetivo do uso consciente da água na agricultura?",
    opcoes: [
      "Gastar mais água",
      "Aumentar o desperdício",
      "Utilizar a água de forma eficiente e sustentável",
      "Eliminar a irrigação"
    ],
    correta: 2
  },
  {
    texto: "Qual sistema de irrigação reduz significativamente o desperdício de água?",
    opcoes: [
      "Inundação",
      "Gotejamento",
      "Mangueira aberta",
      "Aspersão sem controle"
    ],
    correta: 1
  },
  {
    texto: "O que a captação de água da chuva proporciona?",
    opcoes: [
      "Mais desperdício",
      "Economia e reaproveitamento da água",
      "Poluição do solo",
      "Menor produtividade"
    ],
    correta: 1
  },
  {
    texto: "Por que monitorar a umidade do solo é importante?",
    opcoes: [
      "Para irrigar apenas quando necessário",
      "Para gastar mais água",
      "Para secar o solo",
      "Para eliminar nutrientes"
    ],
    correta: 0
  },
  {
    texto: "O desperdício de água pode causar:",
    opcoes: [
      "Conservação dos recursos",
      "Uso sustentável",
      "Escassez hídrica",
      "Melhor aproveitamento"
    ],
    correta: 2
  },
  {
    texto: "O que são nascentes?",
    opcoes: [
      "Fontes naturais de água",
      "Máquinas agrícolas",
      "Sistemas de irrigação",
      "Reservatórios artificiais"
    ],
    correta: 0
  },
  {
    texto: "Qual atitude ajuda a preservar os recursos hídricos?",
    opcoes: [
      "Irrigar sem planejamento",
      "Descartar resíduos em rios",
      "Utilizar técnicas eficientes de irrigação",
      "Desperdiçar água"
    ],
    correta: 2
  },
  {
    texto: "A agricultura sustentável busca:",
    opcoes: [
      "Apenas aumentar a produção",
      "Equilibrar produção e preservação ambiental",
      "Consumir mais recursos",
      "Eliminar áreas verdes"
    ],
    correta: 1
  },
  {
    texto: "Qual recurso pode auxiliar na economia de água?",
    opcoes: [
      "Sensores de umidade",
      "Vazamentos",
      "Irrigação excessiva",
      "Queimadas"
    ],
    correta: 0
  },
  {
    texto: "O uso consciente da água beneficia:",
    opcoes: [
      "Apenas agricultores",
      "Apenas consumidores",
      "Somente o meio ambiente",
      "Agricultores, sociedade e meio ambiente"
    ],
    correta: 3
  }
];

/* Letras para os botões de opção */
const LETRAS = ["A", "B", "C", "D"];

/* ============================================================
   2. ESTADO DO QUIZ
   ============================================================ */
let questaoAtual = 0;   // índice da questão sendo exibida
let pontuacao    = 0;   // acertos acumulados
let respondida   = false; // impede duplo clique

/* ============================================================
   3. REFERÊNCIAS AO DOM
   ============================================================ */
const elCounter      = document.getElementById("questionCounter");
const elProgress     = document.getElementById("progressFill");
const elQuestionText = document.getElementById("questionText");
const elOptionsList  = document.getElementById("optionsList");
const elFeedback     = document.getElementById("feedback");
const elBtnNext      = document.getElementById("btnNext");
const elQuizBox      = document.getElementById("quizBox");
const elResultBox    = document.getElementById("resultBox");
const elResultIcon   = document.getElementById("resultIcon");
const elResultScore  = document.getElementById("resultScore");
const elResultMsg    = document.getElementById("resultMessage");
const elBtnRetry     = document.getElementById("btnRetry");

/* ============================================================
   4. FUNÇÕES DO QUIZ
   ============================================================ */

/**
 * Renderiza a questão atual na tela.
 */
function renderizarQuestao() {
  const q = questoes[questaoAtual];
  respondida = false;

  /* Contador e barra de progresso */
  const numero = questaoAtual + 1;
  elCounter.textContent = `Questão ${numero} de ${questoes.length}`;
  elProgress.style.width = `${(numero / questoes.length) * 100}%`;

  /* Texto da pergunta */
  elQuestionText.textContent = q.texto;

  /* Limpa opções e feedback anteriores */
  elOptionsList.innerHTML = "";
  elFeedback.textContent  = "";
  elFeedback.className    = "feedback";

  /* Desabilita o botão "Próxima" até o usuário responder */
  elBtnNext.disabled = true;

  /* Cria os itens de opção */
  q.opcoes.forEach((texto, i) => {
    const li  = document.createElement("li");
    li.classList.add("option-item");
    li.dataset.index = i;

    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.setAttribute("type", "button");
    btn.setAttribute("aria-label", `Opção ${LETRAS[i]}: ${texto}`);

    const letra = document.createElement("span");
    letra.classList.add("option-letter");
    letra.textContent = LETRAS[i];

    const labelTexto = document.createElement("span");
    labelTexto.textContent = texto;

    btn.appendChild(letra);
    btn.appendChild(labelTexto);
    li.appendChild(btn);

    /* Evento de clique na opção */
    btn.addEventListener("click", () => selecionarOpcao(i));

    elOptionsList.appendChild(li);
  });
}

/**
 * Processa a escolha do usuário.
 * @param {number} indice - Índice da opção clicada (0–3)
 */
function selecionarOpcao(indice) {
  /* Ignora cliques repetidos */
  if (respondida) return;
  respondida = true;

  const q       = questoes[questaoAtual];
  const correta = q.correta;
  const items   = elOptionsList.querySelectorAll(".option-item");

  /* Destaca a opção selecionada */
  items[indice].classList.add("selected");

  /* Aguarda um breve instante para dar feedback visual de seleção */
  setTimeout(() => {
    /* Marca correta e errada */
    items[correta].classList.add("correct");

    if (indice === correta) {
      pontuacao++;
      exibirFeedback(true);
    } else {
      items[indice].classList.remove("selected");
      items[indice].classList.add("wrong");
      exibirFeedback(false);
    }

    /* Desabilita todos os botões */
    items.forEach(item => item.classList.add("disabled"));

    /* Habilita "Próxima" */
    elBtnNext.disabled = false;
  }, 200);
}

/**
 * Exibe a mensagem de feedback (acerto ou erro).
 * @param {boolean} acertou
 */
function exibirFeedback(acertou) {
  elFeedback.className = acertou
    ? "feedback correct-msg"
    : "feedback wrong-msg";

  elFeedback.textContent = acertou
    ? "✅ Correto! Muito bem!"
    : `❌ Incorreto. A resposta certa era: ${questoes[questaoAtual].opcoes[questoes[questaoAtual].correta]}`;
}

/**
 * Avança para a próxima questão ou exibe o resultado final.
 */
function avancarQuestao() {
  questaoAtual++;

  if (questaoAtual < questoes.length) {
    renderizarQuestao();
  } else {
    exibirResultado();
  }
}

/**
 * Oculta o quiz e exibe o painel de resultado.
 */
function exibirResultado() {
  elQuizBox.classList.add("hidden");
  elResultBox.classList.remove("hidden");

  /* Ícone e mensagem conforme pontuação */
  let icone, mensagem;

  if (pontuacao <= 4) {
    icone    = "🌱";
    mensagem = "Continue aprendendo sobre sustentabilidade!";
  } else if (pontuacao <= 7) {
    icone    = "💧";
    mensagem = "Bom conhecimento sobre o tema!";
  } else {
    icone    = "🏆";
    mensagem = "Parabéns! Você demonstra excelente consciência ambiental!";
  }

  elResultIcon.textContent  = icone;
  elResultScore.textContent = `Você acertou ${pontuacao} de ${questoes.length} questões`;
  elResultMsg.textContent   = mensagem;
}

/**
 * Reinicia o quiz do zero.
 */
function refazerQuiz() {
  questaoAtual = 0;
  pontuacao    = 0;

  elResultBox.classList.add("hidden");
  elQuizBox.classList.remove("hidden");

  renderizarQuestao();
}

/* ============================================================
   5. EVENTOS
   ============================================================ */
elBtnNext.addEventListener("click", avancarQuestao);
elBtnRetry.addEventListener("click", refazerQuiz);

/* ============================================================
   6. ANIMAÇÃO DE REVEAL AO ROLAR (Intersection Observer)
   ============================================================ */
function iniciarReveal() {
  const elementos = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    /* Fallback: exibe tudo de uma vez em navegadores muito antigos */
    elementos.forEach(el => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // observa apenas uma vez
        }
      });
    },
    { threshold: 0.15 } // dispara quando 15% do elemento estiver visível
  );

  elementos.forEach(el => observer.observe(el));
}

/* ============================================================
   7. INICIALIZAÇÃO
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderizarQuestao(); // carrega a primeira questão
  iniciarReveal();     // ativa animações de scroll
});
