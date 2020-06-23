<!DOCTYPE HTML>
<html>

    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous">
        <script src="../js/tft.js"></script>

        <link rel="stylesheet" type="text/css" href="../css/index.css">
    </head>


    <body onload="new Tft().init();">

    <main id="main">

        <div id="comprarUnidadePrincipal">
            <div id="tabuleiro">

                <div
                     class="tabuleiroPosicao" id="tabuleiroPosicao1"
                     title="-"
                     onmouseenter="new Tft().trocaClassePosicaoTabuleiroAoEntrar(this.id);"
                     onmouseleave="new Tft().trocaClassePosicaoTabuleiroAoSair(this.id);"
                     onkeypress="new Tft().venderUnidade(event, this.id);"
                     tabindex="-1"
                >
                    <img src="">
                </div>

                <div
                        class="tabuleiroPosicao" id="tabuleiroPosicao2"
                        title="-"
                        onmouseenter="new Tft().trocaClassePosicaoTabuleiroAoEntrar(this.id);"
                        onmouseleave="new Tft().trocaClassePosicaoTabuleiroAoSair(this.id);"
                        onkeypress="new Tft().venderUnidade(event, this.id);"
                        tabindex="-1"
                >
                    <img src="">
                </div>

                <div
                        class="tabuleiroPosicao" id="tabuleiroPosicao3"
                        title="-"
                        onmouseenter="new Tft().trocaClassePosicaoTabuleiroAoEntrar(this.id);"
                        onmouseleave="new Tft().trocaClassePosicaoTabuleiroAoSair(this.id);"
                        onkeypress="new Tft().venderUnidade(event, this.id);"
                        tabindex="-1"
                >
                    <img src="">
                </div>

                <div
                        class="tabuleiroPosicao" id="tabuleiroPosicao4"
                        title="-"
                        onmouseenter="new Tft().trocaClassePosicaoTabuleiroAoEntrar(this.id);"
                        onmouseleave="new Tft().trocaClassePosicaoTabuleiroAoSair(this.id);"
                        onkeypress="new Tft().venderUnidade(event, this.id);"
                        tabindex="-1"
                >
                    <img src="">
                </div>

                <div
                        class="tabuleiroPosicao" id="tabuleiroPosicao5"
                        title="-"
                        onmouseenter="new Tft().trocaClassePosicaoTabuleiroAoEntrar(this.id);"
                        onmouseleave="new Tft().trocaClassePosicaoTabuleiroAoSair(this.id);"
                        onkeypress="new Tft().venderUnidade(event, this.id);"
                        tabindex="-1"
                >
                    <img src="">
                </div>

                <div
                        class="tabuleiroPosicao" id="tabuleiroPosicao6"
                        title="-"
                        onmouseenter="new Tft().trocaClassePosicaoTabuleiroAoEntrar(this.id);"
                        onmouseleave="new Tft().trocaClassePosicaoTabuleiroAoSair(this.id);"
                        onkeypress="new Tft().venderUnidade(event, this.id);"
                        tabindex="-1"
                >
                    <img src="">
                </div>

                <div
                        class="tabuleiroPosicao" id="tabuleiroPosicao7"
                        title="-"
                        onmouseenter="new Tft().trocaClassePosicaoTabuleiroAoEntrar(this.id);"
                        onmouseleave="new Tft().trocaClassePosicaoTabuleiroAoSair(this.id);"
                        onkeypress="new Tft().venderUnidade(event, this.id);"
                        tabindex="-1"
                >
                    <img src="">
                </div>

                <div
                        class="tabuleiroPosicao" id="tabuleiroPosicao8"
                        title="-"
                        onmouseenter="new Tft().trocaClassePosicaoTabuleiroAoEntrar(this.id);"
                        onmouseleave="new Tft().trocaClassePosicaoTabuleiroAoSair(this.id);"
                        onkeypress="new Tft().venderUnidade(event, this.id);"
                        tabindex="-1"
                >
                    <img src="">
                </div>

                <div
                        class="tabuleiroPosicao" id="tabuleiroPosicao9"
                        title="-"
                        onmouseenter="new Tft().trocaClassePosicaoTabuleiroAoEntrar(this.id);"
                        onmouseleave="new Tft().trocaClassePosicaoTabuleiroAoSair(this.id);"
                        onkeypress="new Tft().venderUnidade(event, this.id);"
                        tabindex="-1"
                >
                    <img src="">
                </div>

            </div>



            <div id="compraUnidadeContanier">

                <div id="nivelContanier">
                   <div id="nivelAtual">Nv. 3 </div>
                    <div id="expAtual">2/6</div>
                    <div id="barraExp"></div>
                </div>

                <div id="botaoRoletarContanier">

                    <button id="botaoExp" type="button" onclick="new Tft().compraExp();" ></button>
                    <button id="botaoRoletar" type="button"  onclick="new Tft().gerarUnidades();"></button>

                </div>

                <div id="compraUnidade">

                    <div class="unidade">

                        <div class="sombraImagemUnidade">

                        </div>
                        <img
                            class="imagemUnidade"
                            src="" title="" id="unidade1"
                            onclick="new Tft().comprarUnidade(this.src, this.id);"
                            ondragstart="new Tft().comprarUnidade(this.src, this.id);"
                        />

                        <div class="tagNomeunidade">
                            <p class="nomeUnidade"></p>
                            <div class='iconeGold'>
                                <p class="custoUnidade"></p>
                            </div>
                        </div>

                    </div>

                    <div class="unidade">

                        <div class="sombraImagemUnidade"></div>
                        <img
                                class="imagemUnidade"
                                src="" title="" id="unidade2"
                                onclick="new Tft().comprarUnidade(this.src, this.id);"
                                ondragstart="new Tft().comprarUnidade(this.src, this.id);"
                        />

                        <div class="tagNomeunidade">
                            <p class="nomeUnidade"></p>
                            <div class='iconeGold'>
                                <p class="custoUnidade"></p>
                            </div>
                        </div>

                    </div>

                    <div class="unidade">

                        <div class="sombraImagemUnidade"></div>
                        <img
                                class="imagemUnidade"
                                src="" title="" id="unidade3"
                                onclick="new Tft().comprarUnidade(this.src, this.id);"
                                ondragstart="new Tft().comprarUnidade(this.src, this.id);"
                        />

                        <div class="tagNomeunidade">
                            <p class="nomeUnidade"></p>
                            <div class='iconeGold'>
                                <p class="custoUnidade"></p>
                            </div>
                        </div>

                    </div>

                    <div class="unidade">

                        <div class="sombraImagemUnidade"></div>
                        <img
                                class="imagemUnidade"
                                src="" title="" id="unidade4"
                                onclick="new Tft().comprarUnidade(this.src, this.id);"
                                ondragstart="new Tft().comprarUnidade(this.src, this.id);"
                        />

                        <div class="tagNomeunidade">
                            <p class="nomeUnidade"></p>
                            <div class='iconeGold'>
                                <p class="custoUnidade"></p>
                            </div>
                        </div>

                    </div>

                    <div class="unidade">

                        <div class="sombraImagemUnidade"></div>
                        <img
                                class="imagemUnidade"
                                src="" title="" id="unidade5"
                                onclick="new Tft().comprarUnidade(this.src, this.id);"
                                ondragstart="new Tft().comprarUnidade(this.src, this.id);"
                        />

                        <div class="tagNomeunidade">
                            <p class="nomeUnidade"></p>
                            <div class='iconeGold'>
                                <p class="custoUnidade"></p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </main>

    </body>
</html>
