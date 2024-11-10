var pontuacao = 0;
const pontuacaoHtml = document.getElementById('pontuacao');
pontuacaoHtml.innerHTML = pontuacao;

var maximoPerguntas = 20;
const perguntasMaximas = document.getElementById('maximoPerguntas');
perguntasMaximas.innerHTML = maximoPerguntas;

function verificarContador() {
  if (maximoPerguntas <= 0) {
    // Redireciona para outra página quando o contador atinge zero
    window.location.href = `./resultado.html?valor=${encodeURIComponent(pontuacao)}`; 
  }
}


setInterval(verificarContador, 300);

const perguntas = {
    facil: [
      { pergunta: "Qual o maior rio da Europa?", opcoes: ["Rio Volga (Rússia)", "Rio Danúbio (Europa Central)", "Rio Reno (Europa Ocidental)", "Rio Tâmisa (Reino Unido)"], correta: "Rio Volga (Rússia)" },
      { pergunta: "Qual a maior cordilheira montanhosa da Europa?", opcoes: ["Montes Cárpatos (Europa Central)", "Alpes (Europa Central)", "Montes Urais (Rússia)", "Montes Apeninos (Itália)"], correta: "Alpes (Europa Central)" },
      { pergunta: "Qual o maior lago da Europa?", opcoes: ["Lago Genebra (Suíça/França)", "Lago Ladoga (Rússia)", "Lago Balaton (Hungria)", "Lago Ness (Escócia)"], correta: "Rio Volga (Rússia)" },
      { pergunta: "Qual o maior país da Europa em extensão territorial?", opcoes: ["França", "Alemanha", "Espanha", "Rússia"], correta: "Rússia" },
      { pergunta: "Qual é o maior rio da Ásia", opcoes: ["Rio Amarelo", "Rio Yangtzé", "Rio Mekong", "Rio Amazonas"], correta: "Rio Yangtzé" },
      { pergunta: "Qual é o mais alto pico da Ásia?", opcoes: ["Monte Everest", "Monte Kilimanjaro", "Monte Fuji", "Monte Olympus"], correta: "Monte Everest" },
      { pergunta: "Qual é o maior lago da Ásia?", opcoes: ["Lago Baikal", "Lago Cáspio", "Lago Tiberíades", "Lago Vitória"], correta: "Lago Cáspio" },
      { pergunta: "Qual é o principal rio da Índia?", opcoes: ["Rio Ganges", "Rio Bramaputra", "Rio Indo", "Rio Mekong"], correta: "Rio Ganges" },
      { pergunta: "Qual é o maior deserto da Ásia?", opcoes: ["Deserto de Gobi", "Deserto do Taklamã", "Deserto da Arábia", "Deserto do Saara"], correta: "Deserto do Taklamã" },
      { pergunta: "Quais são as características do clima mediterrâneo?", opcoes: ["Invernos frios e secos, verões curtos e chuvosos.", "Chuvas constantes e temperaturas amenas o ano todo.", "Verões quentes e secos; invernos amenos e chuvosos.", "Invernos muito quentes e verões gelados."], correta: "Verões quentes e secos; invernos amenos e chuvosos." },
      { pergunta: "Em quais regiões da Europa predomina o clima polar?", opcoes: ["Nas áreas ao longo do Mar Mediterrâneo.", "No extremo norte, como Islândia e Noruega.", "Na costa atlântica da França.", "Na Europa Central, como na Alemanha."], correta: "No extremo norte, como Islândia e Noruega." },
      { pergunta: "Qual fator influencia o clima de países como Portugal e Espanha?", opcoes: ["A altitude das montanhas.", "A latitude tropical.", "A influência do Mar Mediterrâneo.", "As geleiras do Ártico."], correta: "A influência do Mar Mediterrâneo" },
      { pergunta: "Como o relevo influencia o clima na Europa?", opcoes: ["Causa chuvas regulares ao longo de todas as regiões montanhosas.", "Aumenta a temperatura nas regiões costeiras.", "Forma barreiras que retêm ventos úmidos, criando áreas secas no lado oposto.", "Não exerce nenhuma influência no clima."], correta: "Forma barreiras que retêm ventos úmidos, criando áreas secas no lado oposto." },
      { pergunta: "Como o clima oceânico se distribui na Europa?", opcoes: ["Está presente no leste europeu.", "Predomina na Europa Ocidental, como Reino Unido e França.", "É característico da Escandinávia.", "É comum apenas no sul da Europa."], correta: "Predomina na Europa Ocidental, como Reino Unido e França." },
      { pergunta: "Qual é o tipo de vegetação predominante na tundra da Europa?", opcoes: ["Floresta tropical", "Deserto", "Tundra", "Savana"], correta: "Tundra" },
      { pergunta: "Qual tipo de árvore é comum nas florestas boreais da Ásia?", opcoes: ["Eucalipto", "Bétula", "Palmeira", "Mangueira"], correta: "Bétula" },
      { pergunta: "Que tipo de vegetação é típica do Mediterrâneo na Europa?", opcoes: ["Floresta temperada", "Vegetação xerófila", "Floresta tropical", "Campos de arroz"], correta: "Vegetação xerófila" },
      { pergunta: "Qual das seguintes plantas é um símbolo da vegetação da Ásia Central?", opcoes: ["Pinho", "Cacto", "Bambu", "Artemísia"], correta: "Artemísia" },
      { pergunta: "Qual tipo de vegetação é mais comum na região dos Alpes europeus?", opcoes: ["Floresta de coníferas", "Deserto de areia", "Vegetação tropical", "Campo de flores silvestres"], correta: "Floresta de coníferas" },
      { pergunta: "Qual o mar interior que banha a costa da Europa Oriental?", opcoes: ["Mar Mediterrâneo", "Mar Negro", "Mar do Norte", "Mar Báltico"], correta: "Mar Negro" }
    ],
    medio: [
      { pergunta: "Qual é o nome da cordilheira que separa a Europa da Ásia?", opcoes: ["Cordilheira dos Urais", "Cordilheira do Cáucaso", "Cordilheira do Himalaia", "Cordilheira do Altai"], correta: "Cordilheira dos Urais" },
      { pergunta: "Qual é o rio que forma a fronteira entre a Tailândia e o Laos?", opcoes: ["Rio Mekong", "Rio Chao Phraya", "Rio Irrawaddy", "Rio Salween"], correta: "Rio Mekong" },
      { pergunta: "Qual é o deserto localizado na Mongólia e na China?", opcoes: ["Deserto de Gobi", "Deserto do Taklamã", "Deserto da Arábia", "Deserto do Karakum"], correta: "Deserto de Gobi" },
      { pergunta: "Qual é o nome do lago mais profundo da Ásia?", opcoes: ["Lago Baikal", "Lago Cáspio", "Lago Tiberíades", "Lago Issyk-Kul"], correta: "Lago Baikal" },
      { pergunta: "Qual é o rio que atravessa a cidade de Pequim?", opcoes: ["Rio Amarelo", "Rio Yangtzé", "Rio Mekong", "Rio Hai"], correta: "Rio Amarelo" },
      { pergunta: "Qual é a influência da Corrente do Golfo no clima da Europa Ocidental?", opcoes: ["Reduz a temperatura, deixando os invernos mais rigorosos.", "Aumenta a umidade no verão.", "Aquece a Europa Ocidental, tornando os invernos mais amenos.", "Não tem influência no clima europeu."], correta: "Aquece a Europa Ocidental, tornando os invernos mais amenos." },
      { pergunta: "Como as massas de ar afetam o clima europeu?", opcoes: ["As massas de ar polares trazem calor para a Europa Central.", "As massas de ar tropicais trazem umidade e calor para o sul da Europa.", "As massas de ar tropicais causam queda de temperatura no norte europeu.", "Não há impacto significativo das massas de ar no clima europeu."], correta: "As massas de ar tropicais trazem umidade e calor para o sul da Europa." },
      { pergunta: "O que caracteriza o clima continental na Europa?", opcoes: ["Chuvas abundantes durante todo o ano.", "Pouca variação entre as temperaturas das estações.", "Invernos frios e secos; verões quentes e curtos.", "Estações definidas e verões úmidos."], correta: "Invernos frios e secos; verões quentes e curtos." },
      { pergunta: "Por que o clima na Escandinávia é mais frio que no resto da Europa?", opcoes: ["Por estar mais próxima do Equador.", "Devido à influência das geleiras alpinas.", "Por estar localizada em altas latitudes.", "Pela proximidade com desertos frios."], correta: "Por estar localizada em altas latitudes." },
      { pergunta: "Como o clima afeta a vegetação na Europa?", opcoes: ["Climas frios favorecem florestas tropicais.", "Climas continentais permitem o crescimento de florestas temperadas e estepes.", "Climas mediterrâneos sustentam vegetação densa e chuvosa o ano todo.", "A vegetação não é afetada pelo clima."], correta: "Climas continentais permitem o crescimento de florestas temperadas e estepes." },
      { pergunta: "Qual dos seguintes rios NÃO atravessa a Europa?", opcoes: ["Rio Volga", "Rio Danúbio", "Rio Nilo", "Rio Reno"], correta: "Rio Nilo" },
      { pergunta: "Qual das seguintes cadeias montanhosas NÃO está localizada na Europa?", opcoes: ["Alpes", "Montes Urais", "Andes", "Pirineus"], correta: "Andes" },
      { pergunta: "Qual a principal característica do relevo da Península Escandinava?", opcoes: ["Planícies extensas", "Desertos áridos", "Montanhas e fiordes", "Vulcões ativos"], correta: "Montanhas e fiordes" },
      { pergunta: "Qual dos seguintes países NÃO possui costa no Mar Mediterrâneo?", opcoes: ["Itália", "Grécia", "França", "Alemanha"], correta: "Alemanha" },
      { pergunta: "Qual é o principal tipo de vegetação encontrada nas regiões de clima temperado da Europa?", opcoes: ["Floresta tropical", "Floresta boreal", "Floresta caducifólia", "Vegetação xerófila"], correta: "Floresta caducifólia" },
      { pergunta: "Na Ásia, qual região é famosa por suas florestas de coníferas, especialmente o pinheiro?", opcoes: ["Planícies do Indo", "Montes Urais", "Taiga siberiana", "Deserto de Gobi"], correta: "Taiga siberiana" },
      { pergunta: "Qual tipo de vegetação é característico das estepes da Europa Oriental?", opcoes: ["Floresta densa", "Pradarias", "Campos de flores silvestres", "Vegetação alpina"], correta: "Pradarias" },
      { pergunta: "Qual é a principal característica da vegetação da região do Mar Mediterrâneo?", opcoes: ["Alta biodiversidade de árvores tropicais", "Predomínio de plantas xerófitas e arbustos", "Florestas sempre verdes", "Vegetação aquática abundante"], correta: "Predomínio de plantas xerófitas e arbustos" },
      { pergunta: "Qual planta é considerada um símbolo da vegetação da região do Himalaia?", opcoes: ["Carvalho", "Sagu", "Bambu", "Pinho-de-Casuar"], correta: "Bambu" },
      { pergunta: "Qual das seguintes características NÃO é típica do relevo da Península Ibérica?", opcoes: ["Cadeias montanhosas como os Pirenéus e a Serra da Estrela.", "Planícies férteis e extensas, como a planície da Mesetá.", "Costas recortadas com penhascos e enseadas.", "Vulcões ativos e extensos campos de lava."], correta: "Vulcões ativos e extensos campos de lava." }
    ],
    dificil: [
      { pergunta: "Qual é o nome da cordilheira que separa a Ásia Menor da Ásia Central?", opcoes: ["Cordilheira do Tian Shan", "Cordilheira do Pamir", "Cordilheira do Cáucaso", "Cordilheira do Altai"], correta: "Cordilheira do Tian Shan" },
      { pergunta: "Qual é o rio que forma a fronteira entre a China e o Vietnã?", opcoes: ["Rio Mekong", "Rio Vermelho", "Rio Pearl", "Rio Lancang"], correta: "Rio Vermelho" },
      { pergunta: "Qual é o nome do planalto localizado na Índia e no Paquistão?", opcoes: ["Planalto do Deccan", "Planalto do Tibete", "Planalto do Irã", "Planalto do Khorasan"], correta: "Planalto do Deccan" },
      { pergunta: "Qual é o nome do golfo localizado no sul da Ásia?", opcoes: ["Golfo Pérsico", "Golfo de Omã", "Golfo de Bengala", "Golfo do Sião"], correta: "Golfo de Bengala" },
      { pergunta: "Qual é o nome da ilha mais grande da Ásia?", opcoes: ["Ilha de Borneo", "Ilha de Sumatra", "Ilha de Java", "Ilha de Ceilão"], correta: "Ilha de Borneo" },
      { pergunta: "Como a Oscilação do Atlântico Norte (NAO) influencia o clima europeu?", opcoes: ["Ela só afeta o verão, trazendo ondas de calor.", "Em sua fase positiva, traz invernos mais úmidos e amenos; na fase negativa, invernos frios e secos.", "Impede a formação de chuvas no inverno.", "Não afeta o clima europeu."], correta: "Em sua fase positiva, traz invernos mais úmidos e amenos; na fase negativa, invernos frios e secos." },
      { pergunta: "Como o aquecimento global afeta o clima da Europa?", opcoes: ["Reduz a frequência de eventos climáticos extremos.", "Intensifica ondas de calor e secas no sul da Europa.", "Deixa o clima mais frio na Europa Ocidental.", "Diminui as temperaturas no norte da Europa."], correta: "Intensifica ondas de calor e secas no sul da Europa." },
      { pergunta: "Como a urbanização cria ilhas de calor urbano nas cidades europeias?", opcoes: ["Aumenta a temperatura nas áreas centrais devido ao asfalto e concreto.", "Reduz a temperatura nas áreas centrais das cidades.", "Causa chuvas mais frequentes nas áreas urbanas.", "Não altera o clima local."], correta: "Aumenta a temperatura nas áreas centrais devido ao asfalto e concreto." },
      { pergunta: "Como o efeito Föhn afeta o clima nas regiões montanhosas da Europa?", opcoes: ["Causa chuvas intensas nas encostas voltadas para o vento.", "Resfria rapidamente as áreas montanhosas.", "Aumenta a temperatura e reduz a umidade ao descer as encostas.", "Não tem impacto significativo no clima."], correta: "Aumenta a temperatura e reduz a umidade ao descer as encostas." },
      { pergunta: "Como o derretimento do gelo no Ártico impacta o clima europeu?", opcoes: ["Enfraquece a corrente de jato, causando ondas de frio e calor mais longas. ", "Aumenta as chuvas no sul da Europa.", "Faz com que o inverno europeu seja menos frio.", "Torna o clima europeu mais estável e previsível."], correta: " Enfraquece a corrente de jato, causando ondas de frio e calor mais longas." },
      { pergunta: "Qual o nome da cordilheira montanhosa que separa a Europa da Ásia e é considerada a fronteira natural entre os dois continentes?", opcoes: ["Alpes", "Montes Cárpatos", "Montes Urais", "Pirineus"], correta: "Montes Urais" },
      { pergunta: "Qual o rio europeu que possui o maior volume de água doce do continente, sendo também o mais longo da Europa?", opcoes: ["Rio Danúbio", "Rio Volga", "Rio Reno", "Rio Dnieper"], correta: "Rio Volga" },
      { pergunta: "Qual o nome do planalto que ocupa a maior parte da Península Ibérica e é caracterizado por um clima continental e solos áridos?", opcoes: ["Planície da Mesetá", "Planalto da Jutlândia", "Planalto da Anatólia", "Planalto da Escócia"], correta: "Planície da Mesetá" },
      { pergunta: "Qual o nome do fiorde norueguês mais famoso e profundo, conhecido por sua beleza natural e por ser um importante destino turístico?", opcoes: ["Fiorde de Sognefjord", "Fiorde de Geirangerfjord", "Fiorde de Hardangerfjord", "Fiorde de Lysefjord"], correta: "Fiorde de Sognefjord" },
      { pergunta: "Qual o nome do lago europeu que é o maior do mundo em termos de volume de água doce, apesar de não ser o maior em área superficial?", opcoes: ["Lago Ladoga", "Lago Baikal", "Lago Genebra", "Lago Onega"], correta: "Lago Baikal" },
      { pergunta: "Qual é o principal fator que limita a vegetação nas regiões áridas da Ásia Central, como o deserto de Karakum?", opcoes: ["Altitude elevada", "Precipitação escassa", "Solo ácido", "Poluição industrial"], correta: "Precipitação escassa"},
      { pergunta: "Qual tipo de vegetação é encontrado nas áreas de tundra na Sibéria, e que se caracteriza por sua resistência ao frio extremo?", opcoes: ["Floresta de folha perene", "Vegetação xerófila", "Musgos e líquenes", "Floresta tropical decidual"], correta: "Musgos e líquenes" },
      { pergunta: "No contexto da vegetação da Europa, qual é a principal característica das florestas mistas do sul da Alemanha?", opcoes: ["Predomínio de árvores coníferas", "Alta diversidade de espécies de árvores caducifólias e coníferas", "Exclusividade de plantas xerófitas", "Vegetação predominantemente herbácea"], correta: "Alta diversidade de espécies de árvores caducifólias e coníferas" },
      { pergunta: "Qual é a vegetação predominante na região montanhosa do Cáucaso, onde a biodiversidade é particularmente alta?", opcoes: ["Floresta subtropical", "Tundra alpina", "Estepes secas", "Floresta boreal"], correta: "Floresta subtropical" },
      { pergunta: "Na região do Oriente Médio, que tipo de vegetação é comum em áreas de clima semiárido, como na Turquia?", opcoes: ["Florestas densas de coníferas", "Pradarias ricas em nutrientes", "Zonas de vegetação mediterrânea", "Florestas de mangue"], correta: "Zonas de vegetação mediterrânea" }
    ]
  };    

const perguntasMostradas = { facil: [], medio: [], dificil: [] };

    function mostrarPergunta() {

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
      maximoPerguntas = maximoPerguntas - 1;
      perguntasMaximas.innerHTML = maximoPerguntas;

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
