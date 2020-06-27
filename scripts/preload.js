function preload() {
  /*** CENARIOS PARALAX ***/
  imagemCenario1 = loadImage('imagens/cenario/fase01/1.png');
  imagemCenario2 = loadImage('imagens/cenario/fase01/2.png');
  imagemCenario3 = loadImage('imagens/cenario/ceu.png');
  imagemCenario4 = loadImage('imagens/cenario/BG_Decor.png');
  imagemCenario5 = loadImage('imagens/cenario/Middle_Decor.png');
  imagemCenario6 = loadImage('imagens/cenario/Foreground.png');
  imagemCenario7 = loadImage('imagens/cenario/Ground.png');

  /*** TELA INICIAL - SPLASH ***/
  imagemSplash = loadImage('imagens/cenario/splash/background.png');
  imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
  fontPrincipal = loadFont('imagens/assets/fonteTelaInicial.otf');

  /*** PERSONAGEM ***/
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  
  /*** VIDA ***/
  imagemVida = loadImage('imagens/assets/coracao.png')
  

  /*** OBJETOS TELA NPC E COLETAVEIS ***/
  imagemCristal = loadImage('imagens/coletaveis/crystal.png');
  imagemNpc = loadImage('imagens/cenario/npc/bee.png');
  
  /*** SONS ***/
  somDoPulo = loadSound('sons/somPulo.mp3');
  
  gc = loadSound('sons/moeda.mp3');
  gameover = loadImage('imagens/assets/game-over.png');
  trilhaSonora = loadSound('sons/trilha_jogo.mp3');
  somEntrada = loadSound('sons/entrada.mp3');
  somPerdeVida = loadSound('sons/hit.wav');
  somGanhaVida = loadSound('sons/vida.wav');
  
  gg = loadSound('sons/GameOver.mp3');

  /*** INIMIGOS ***/
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  
  fita = loadJSON('fita/fita.json');
}
