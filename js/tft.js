function Tft(){

    this.init = function () {

        globais = {
            tabuleiroCheio: false,
            level: 1,
            exp:0
        };

        var apertouBotaoRoletarTeclado = false;
        var $this = this;

        document.addEventListener("keydown", function(event) {
            if (event.key == 'd' && !apertouBotaoRoletarTeclado) {
                apertouBotaoRoletarTeclado = true;
                $this.gerarUnidades();
            }
        });

        document.addEventListener("keyup", function() {
            apertouBotaoRoletarTeclado = false;
        });



        this.gerarUnidades();

    };

    this.gerarUnidades = function () {

        //O número no final do nome de cada unidade representa seu custo
        var unidades = {

            unidadesCusto1:['Caitlyn1', 'Fiora1', 'Graves1','Illaoi1','Jarvan IV1', 'Leona1', 'Malphite1', 'Nocturne1',
                'Poppy1', 'TwistedFate1', 'Xayah1', 'Ziggs1','Zoe1'],

            unidadesCusto2:['Ahri2','Annie2','Blitzcrank2','Darius2','KogMaw2','Lucian2','Nautilus2','Mordekaiser2',
                'Rakan2','Shen2','Xin Zhao2','Yasuo2','Zed2'],

            unidadesCusto3:['Ashe3','Bardo3','Cassiopeia3','Ezreal3','Jayce3','Karma3','Master Yi3','Neeko3','Rumble3',
                'Shaco3','Syndra3','Vayne3','Vi3'],

            unidadesCusto4:['Fizz4','Gnar4','Irelia4','Jinx4','Jhin4','Riven4','Teemo4','Soraka4','Viktor4','Wukong4'],

            unidadesCusto5:['Aurelion5','Ekko5','Gangplank5','Janna5','Lulu5','Thresh5','Urgot5','Xerath5']

        };

        //Desenha as unidades
        for(var i=1;i<6;i++){
            var unidadeEscohida = this.selecionaTierUnidades(unidades);
            var nomeUnidadeSemCusto = this.removeCaracter(unidadeEscohida,unidadeEscohida.length-1,'');
            var propiedadesUnidade =   this.selecionaTierUnidade(unidadeEscohida);
            var unidadePos = '#unidade'+i;


            //Revela a unidade caso tenha sido vendida
            document.querySelector(unidadePos)
                .setAttribute("style", "display:block;");

            document.querySelectorAll('.sombraImagemUnidade')[i-1]
                 .setAttribute("style", "display:block;");

            document.querySelectorAll('.tagNomeunidade')[i-1]
                 .setAttribute("style","display:block;");//TODO: checar isso aqui


            document.querySelectorAll('.nomeUnidade')[i-1].innerText = nomeUnidadeSemCusto;
            document.querySelector(unidadePos).src = this.selecionaImagemUnidade(nomeUnidadeSemCusto);

            //Adiciona as propiedades do tier de cada unidade (cores e valores)
            document.querySelectorAll('.custoUnidade')[i-1]
                .innerText = propiedadesUnidade.valorUnidade;

            document.querySelectorAll('.sombraImagemUnidade')[i-1]
                .setAttribute("style", propiedadesUnidade.corBordaUnidade);

            document.querySelectorAll('.tagNomeunidade')[i-1]
                .setAttribute("style", propiedadesUnidade.corTagUnidade);
        }


    };

    this.selecionaTierUnidades = function(array) {

        var unidadesPossiveis = [];
        var level = globais.level;
        var unidadeEscolhida = '';

        switch(true){

            case (level >= 1 && level <= 2):
                unidadesPossiveis['unidadeCusto1'] = array.unidadesCusto1;

                break;
            case (level === 3):
                unidadesPossiveis['unidadeCusto1'] = array.unidadesCusto1;
                unidadesPossiveis['unidadeCusto2'] = array.unidadesCusto2;

                break;
            case (level === 4):
                unidadesPossiveis['unidadeCusto1'] = array.unidadesCusto1;
                unidadesPossiveis['unidadeCusto2'] = array.unidadesCusto2;
                unidadesPossiveis['unidadeCusto3'] = array.unidadesCusto3;

                break;
            case (level >= 5 && level <= 6):
                unidadesPossiveis['unidadeCusto1'] = array.unidadesCusto1;
                unidadesPossiveis['unidadeCusto2'] = array.unidadesCusto2;
                unidadesPossiveis['unidadeCusto3'] = array.unidadesCusto3;
                unidadesPossiveis['unidadeCusto4'] = array.unidadesCusto4;

                break;
            case (level >= 7):
                unidadesPossiveis['unidadeCusto1'] = array.unidadesCusto1;
                unidadesPossiveis['unidadeCusto2'] = array.unidadesCusto2;
                unidadesPossiveis['unidadeCusto3'] = array.unidadesCusto3;
                unidadesPossiveis['unidadeCusto4'] = array.unidadesCusto4;
                unidadesPossiveis['unidadeCusto5'] = array.unidadesCusto5;

                break;
        }


        unidadeEscolhida = this.selecionaUnidade(unidadesPossiveis);

        return unidadeEscolhida;

    };


    this.selecionaUnidade = function (unidadesPossiveis) {

        var probabilidade = Math.floor(Math.random() * 100) +1;
        var unidadeEscolhida = '';
        var level = globais.level;


        switch(level){

            case 3:
                if(probabilidade <= 75){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto1']);
                }else{
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto2']);
                }

                break;
            case 4:
                if(probabilidade <= 55){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto1']);
                }else if (probabilidade  <= 85){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto2']);
                }else{
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto3']);
                }

                break;
            case 5:
                if(probabilidade <= 40){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto1']);
                }else if (probabilidade  <= 75){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto2']);
                }else if(probabilidade  <= 95){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto3']);
                }else{
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto4']);
                }

                break;
            case 6:
                if(probabilidade <= 25){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto1']);
                }else if (probabilidade  <= 60){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto2']);
                }else if(probabilidade  <= 90){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto3']);
                }else{
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto4']);
                }
                break;
            case 7:
                if(probabilidade <= 19){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto1']);
                }else if (probabilidade  <= 49){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto2']);
                }else if(probabilidade  <= 84){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto3']);
                }else if(probabilidade  <= 99){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto4']);
                }else{
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto5']);
                }

                break;
            case 8:
                if(probabilidade <= 14){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto1']);
                }else if (probabilidade  <= 34){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto2']);
                }else if(probabilidade  <= 69){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto3']);
                }else if(probabilidade  <= 94){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto4']);
                }else{
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto5']);
                }

                break;
            case 9:

                if(probabilidade <= 10){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto1']);
                }else if (probabilidade  <= 25){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto2']);
                }else if(probabilidade  <= 55){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto3']);
                }else if(probabilidade  <= 85){
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto4']);
                }else{
                    unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto5']);
                }

                break;
            default:
                unidadeEscolhida = this.probabilidade(unidadesPossiveis['unidadeCusto1']);
                break;

        }



        return unidadeEscolhida;

    };



    this.probabilidade = function (array){
        var unidadeEscolhida = array[Math.floor(Math.random() * array.length)];

        return unidadeEscolhida;

    };



    this.comprarUnidade = function (unidadeSrc, idUnidade) {


        if (globais.tabuleiroCheio === true) {
            return;
        }


        this.adicionaUnidadeTabuleiro(unidadeSrc);


        //Remove a unidade do comprador de unidades apenas se o tabuleiro não estiver cheio
        if(globais.tabuleiroCheio !== true){

            document.querySelector('#' + idUnidade)
                .setAttribute("style", "display:none;");//esconde a imagem da unidade

            document.querySelectorAll('#'+idUnidade)[0].nextElementSibling
                .setAttribute("style", "display:none;");//nextElementSibling = tagNomeUnidade

            document.querySelectorAll('#'+idUnidade)[0].previousElementSibling
                .setAttribute("style", "display:none;");//previousElementSibling = sombraImagemUnidade

            unidadeSrc.innerHTML = '-';
        }


    };

    this.adicionaUnidadeTabuleiro = function (unidade) {

        var posicoesTabuleiro = document.querySelectorAll(".tabuleiroPosicao");


        //Procura a primeira posição com '-' e insere a unidade escolhida na posição
        for(var i=0; i<posicoesTabuleiro.length; i++){

            if(posicoesTabuleiro[i].title === '-'){

                posicoesTabuleiro[i].childNodes[1]   //childNodes[1] é o propiedade img da posicaoTabuleiro
                    .setAttribute("style", "width: 124px;  height: 95px;");
                posicoesTabuleiro[i].childNodes[1].src = unidade;
                posicoesTabuleiro[i].title = '';

                return;
            }

        }

        globais.tabuleiroCheio = true;

    };

    this.selecionaImagemUnidade = function (unidade) {

        var imgUnidadeEscolhida ='../img/splashArt/'+unidade+'.jpg';

        return imgUnidadeEscolhida;
    };


    this.trocaClassePosicaoTabuleiroAoEntrar = function(tabuleiroPosicao){
        document.querySelector("#"+tabuleiroPosicao).classList.remove('tabuleiroPosicao');
        document.querySelector("#"+tabuleiroPosicao).classList.add('tabuleiroExcluirPosicao');
        document.querySelector("#"+tabuleiroPosicao).focus();
    };


    this.trocaClassePosicaoTabuleiroAoSair = function(tabuleiroPosicao) {
        document.querySelector("#"+tabuleiroPosicao).classList.remove('tabuleiroExcluirPosicao');
        document.querySelector("#"+tabuleiroPosicao).classList.add('tabuleiroPosicao');
        document.querySelector("#"+tabuleiroPosicao).blur();
    };


    this.venderUnidade = function(event, tabuleiroPosicao) {

        var classePosicaoTabuleiro = document.querySelector("#"+tabuleiroPosicao);


        /*Checa se a tecla apertada para vender a unidade é a "e" e caso seja vende a unidade e seta o tabuleiroCheio
         para false*/

        if(classePosicaoTabuleiro.classList.value === 'tabuleiroExcluirPosicao' && classePosicaoTabuleiro.title === ''
            && event.key === 'e'){
            classePosicaoTabuleiro.title = '-';
            classePosicaoTabuleiro.childNodes[1].setAttribute("style", "display:none;");
            globais.tabuleiroCheio = false;
        }

    };

    this.removeCaracter = function (str,index,chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    };


    this.selecionaTierUnidade = function (unidade) {

        var propiedadesUnidade = {
            backGroundColor:'',
            corUnidade:'',
            valorUnidade:''
        };

        //Pega apenas o custo da unidade e ignora o nome
        var custoUnidade = unidade.substr(unidade.length-1,unidade.length-1);


        switch(custoUnidade){
            case '1':
                propiedadesUnidade.valorUnidade = '1';

                propiedadesUnidade.corTagUnidade = 'background: linear-gradient(90deg, rgba(60,63,66,1) 22%, ' +
                    'rgba(33,35,37,1) 57%, rgba(24,25,28,1) 100%);';

                propiedadesUnidade.corBordaUnidade = 'border-color: rgba(33,35,37,1) rgba(33,35,37,1)' +
                    ' rgba(33,35,37,1) rgba(33,35,37,1);';
                break;
            case '2':
                propiedadesUnidade.valorUnidade = '2';

                propiedadesUnidade.corTagUnidade = 'background: linear-gradient(90deg, rgba(19,51,43,1) 22%, ' +
                    'rgba(18,53,44,1) 57%, rgba(22,78,44,1) 100%);';

                propiedadesUnidade.corBordaUnidade = 'border-color: rgba(18,53,44,1) rgba(18,53,44,1)' +
                    ' rgba(18,53,44,1) rgba(18,53,44,1);';

                break;
            case '3':
                propiedadesUnidade.valorUnidade = '3';

                propiedadesUnidade.corTagUnidade = 'background: linear-gradient(90deg, rgba(2,0,36,1) 12%, ' +
                    'rgba(30,66,101,1) 66%, rgba(0,212,255,1) 100%);';

                propiedadesUnidade.corBordaUnidade = 'border-color: rgba(30,66,101,1)  rgba(30,66,101,1)' +
                    '  rgba(30,66,101,1)  rgba(30,66,101,1);';
                break;
            case '4':
                propiedadesUnidade.valorUnidade = '4';

                propiedadesUnidade.corTagUnidade = 'background: linear-gradient(90deg, rgba(2,0,36,1) 0%, ' +
                    'rgba(121,9,118,1) 100%, rgba(0,212,255,1) 100%);';

                propiedadesUnidade.corBordaUnidade = 'border-color: rgba(121,9,118,1)  rgba(121,9,118,1)' +
                    '  rgba(121,9,118,1)  rgba(121,9,118,1);';
                break;
            case '5':
                propiedadesUnidade.valorUnidade = '5';

                propiedadesUnidade.corTagUnidade = 'background: linear-gradient(90deg, rgba(91,51,2,1) 22%, ' +
                    'rgba(175,120,10,1) 57%, rgba(216,172,24,1) 100%);';

                propiedadesUnidade.corBordaUnidade = 'border-color: rgba(175,120,10,1)  rgba(175,120,10,1)' +
                    '  rgba(175,120,10,1)  rgba(175,120,10,1);';
                break;
        }


        return propiedadesUnidade;
    };


    this.compraExp = function (){
      globais.exp += 4;


      switch(true){
          case(globais.exp <= 6):
              globais.level = 3;
              break;
          case(globais.exp <= 10):
              globais.level = 4;
              break;
          case(globais.exp <= 20):
              globais.level = 5;
              break;
          case(globais.exp <= 32):
              globais.level = 6;
              break;
          case(globais.exp <= 50):
              globais.level = 7;
              break;
          case(globais.exp <= 66):
              globais.level = 8;
              break;
          case(globais.exp >= 66):
              globais.level = 9;
              break;

      }

      //adiciona o nivel atual
      document.querySelector('#nivelAtual').innerText = 'Nv. '+globais.level;



    };



}