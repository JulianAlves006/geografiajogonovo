var pontuacao = 0;
const pontuacaoHtml = document.getElementById('pontuacao');
pontuacaoHtml.innerHTML = pontuacao;

var maximoPerguntas = 20;
const perguntasMaximas = document.getElementById('maximoPerguntas');
perguntasMaximas.innerHTML = maximoPerguntas;

function verificarContador() {
  // Exibe o valor atual do contado
  console.log(maximoPerguntas);
  if (maximoPerguntas <= 0) {
    // Redireciona para outra página quando o contador atinge zero
    window.location.href = `./resultado.html?valor=${encodeURIComponent(pontuacao)}`; 
  }
}


setInterval(verificarContador, 1000);

const perguntas = {
    facil: [
      { pergunta: "Qual o maior rio da Europa?", opcoes: ["Rio Volga (Rússia)", "Rio Danúbio (Europa Central)", "Rio Reno (Europa Ocidental)", "Rio Tâmisa (Reino Unido)"], correta: "Rio Volga (Rússia)" },
      { pergunta: "Qual a maior cordilheira montanhosa da Europa?", opcoes: ["Montes Cárpatos (Europa Central)", "Alpes (Europa Central)", "Montes Urais (Rússia)", "Montes Apeninos (Itália)"], correta: "Alpes (Europa Central)" },
      { pergunta: "Qual o maior lago da Europa?", opcoes: ["Lago Genebra (Suíça/França)", "Lago Ladoga (Rússia)", "Lago Balaton (Hungria)", "Lago Ness (Escócia)"], correta: "Rio Volga (Rússia)" },
      { pergunta: "Qual o maior país da Europa em extensão territorial?", opcoes: ["França", "Alemanha", "Espanha", "Rússia"], correta: "Rússia" }
    ],
    medio: [
      { pergunta: "Quem inventou a lâmpada?", opcoes: ["Edison", "Newton", "Einstein", "Tesla"], correta: "Edison" },
      { pergunta: "Qual o maior planeta?", opcoes: ["Terra", "Marte", "Júpiter", "Vênus"], correta: "Júpiter" }
    ],
    dificil: [
      { pergunta: "Qual é a fórmula da água?", opcoes: ["H2O", "CO2", "NaCl", "HCl"], correta: "H2O" },
      { pergunta: "Quem descobriu a gravidade?", opcoes: ["Newton", "Einstein", "Galileu", "Copérnico"], correta: "Newton" }
    ]
  };    

const perguntasMostradas = { facil: [], medio: [], dificil: [] };

    function mostrarPergunta() {
      maximoPerguntas = maximoPerguntas - 1;
      perguntasMaximas.innerHTML = maximoPerguntas;

      const dificuldade = document.querySelector('input[name="dificuldade"]:checked');
      
      if (!dificuldade) {
        alert('Por favor, selecione uma dificuldade.');
        return;
      }

      const nivel = dificuldade.value;
      const perguntasNivel = perguntas[nivel];
      const perguntasFeitas = perguntasMostradas[nivel];
      
      // Verifica se há perguntas não repetidas
      const perguntasDisponiveis = perguntasNivel.filter(p => !perguntasFeitas.includes(p));
      
      if (perguntasDisponiveis.length === 0) {
        alert(`Todas as perguntas de dificuldade ${nivel} já foram respondidas.`);
        return;
      }

      // Seleciona uma pergunta aleatória
      const perguntaSelecionada = perguntasDisponiveis[Math.floor(Math.random() * perguntasDisponiveis.length)];
      perguntasMostradas[nivel].push(perguntaSelecionada);  // Armazena a pergunta para não repetir

      // Exibe a pergunta e as opções de resposta
      document.getElementById('pergunta').textContent = perguntaSelecionada.pergunta;
      const opcoesContainer = document.getElementById('opcoes');
      document.getElementById('opcoes').style.display = 'block';
      opcoesContainer.innerHTML = '';  // Limpa opções anteriores

      perguntaSelecionada.opcoes.forEach(opcao => {
        const btn = document.createElement('button');
        btn.textContent = opcao;
        btn.onclick = () => verificarResposta(opcao, perguntaSelecionada.correta);
        opcoesContainer.appendChild(btn);
      });

      
      document.getElementById('perguntaContainer').style.display = 'block';
      document.getElementById('resultado').textContent = '';
    }

    function verificarResposta(opcaoSelecionada, respostaCorreta) {
  
      const dificuldade = document.querySelector('input[name="dificuldade"]:checked');
      const nivel = dificuldade.value;
      const resultado = document.getElementById('resultado');
      if (opcaoSelecionada === respostaCorreta) {
        resultado.textContent = 'Correto!';
        if(nivel == 'facil'){
          pontuacao += 1;
        }
        else if(nivel == 'medio'){
          pontuacao += 2;
        }
        else if(nivel == 'dificil'){
          pontuacao = pontuacao + 3;
          console.log(pontuacao);
        }
        else{
          alert('Algo de errado aconteceu!')
        }
        pontuacaoHtml.innerHTML = pontuacao;
      } else {
        resultado.textContent = 'Errado. Tente novamente!';
        pontuacaoHtml.innerHTML = pontuacao;
      }

      document.getElementById('opcoes').style.display = 'none';
    }
