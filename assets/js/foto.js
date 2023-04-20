// armazena uma lista das imagens do carrossel
var imagens = [
    "/assets/img/1.png",
    "/assets/img/2.png",
    "/assets/img/3.png",
    "/assets/img/4.png",
    "/assets/img/5.png",
    "/assets/img/6.png",
    "/assets/img/7.png",
    "/assets/img/8.png",
    "/assets/img/9.png",
    "/assets/img/10.png",
    "/assets/img/11.png",
    "/assets/img/12.png",
  ];
  
  // define o índice da primeira imagem e sua duração em segundos
  var indiceImagem = 0;
  var duracaoImagem = 0.2;
  
  // função responsável por atualizar a imagem do carrossel
  function atualizarImagem() {
    // obtém a imagem do carrossel pelo CLASS
    var imagemCarrossel = document.querySelector(".image-carousel img");
  
    // define a próxima imagem como a origem da imagem do carrossel
    imagemCarrossel.src = imagens[indiceImagem];
      
    // incrementa o índice da próxima imagem
    indiceImagem++;
      
    // se o índice for maior que o número total de imagens, redefine-o para zero
    if (indiceImagem >= imagens.length) {
      indiceImagem = 0;
    }
  }
  
  // chama a função atualizarImagem e define a duração do intervalo em milissegundos 
  setInterval(atualizarImagem, duracaoImagem * 1000);