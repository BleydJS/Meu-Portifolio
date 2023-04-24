// Seleciona todas as classes 'skill-box'
const skillBoxes = document.querySelectorAll('.skill-box');

// Percorre todas as classes 'skill-box' e adiciona os atributos necessários
skillBoxes.forEach(skillBox => {
  skillBox.setAttribute('data-tilt', '');
  skillBox.setAttribute('data-tilt-glare', 'true');
  skillBox.setAttribute('data-tilt-max-glare', '1.5');
  skillBox.setAttribute('data-tilt-speed', '400');
  skillBox.setAttribute('data-tilt-scale', '1.1');
  skillBox.setAttribute('data-tilt-perspective', '500');
  skillBox.setAttribute('data-tilt-max', '10');
  skillBox.setAttribute('data-tilt-startX', '0');
  skillBox.setAttribute('data-tilt-startY', '0');
});


const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
                    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
                    '<p>ReactJS</p> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>',
                    '<p>NextJs</p> <br> <p>É um framework que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.</p> <br>',
                    '<p>Sass</p> <br> <p>É uma linguagem de folhas de estilo. Basicamente o Sass potencializa o CSS.</p> <br>',
                    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
                    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>',
                    '<p>Bootstrap</p> <br> <p>É um framework de desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia. </p> <br>',
                    '<p>Jquery</p> <br> <p>É uma biblioteca javaScript que torna mais fácil a manipulação dos elementos HTML e CSS em uma pagina web, oferecendo recursos para criar animações, efeitos visuais e interatividade com o usuário, com foco na rapidez e eficiência. </p> <br>',
                    '<p>Photoshop</p> <br> <p>É um software de edição de imagem que permite aos usuários criar e manipular imagens digitais. Líder no mercado,é amplamente utilizado por profissionais de design gráfico, fotógrafos e artistas criativos. </p> <br>'
]

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = ' Passe o mouse por cima de alguma habilidade para ler a descrição ';
    } )
} );