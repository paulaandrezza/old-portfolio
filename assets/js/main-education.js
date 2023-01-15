const cursos = document.getElementById('cursos');

const cursosInfo = [
    { 
        curso: 'Análise e Desenvolvinento de Sistemas | Tecnologo', 
        local: "IFSP Campus Bragança Paulista",
        estado: "Cursando 2°/6 semestres",
        descricao: "",
    },
    { 
        curso: 'Mecatrônica | Técnico', 
        local: "IFSP Campus Bragança Paulista",
        estado: "Concluído 2019 | 1200h",
        descricao: "",
    },
    { 
        curso: 'Trilha Discover', 
        local: "RocketSeat",
        estado: "Concluído | 2h",
        descricao: "Primeiros conhecimentos sobre programação e tecnologia. Desde a diferenciação entre hardware e software, internet e seu papel no desenvolvimento, até o pensamento computacional e lógico, passando por tipos de aplicações web e linguagem de programação. Clareza sobre as bases da programação para web e aprender palavras e conceitos desse novo universo.",
    },
    { 
        curso: 'Trilha Fundamentar', 
        local: "RocketSeat",
        estado: "Concluído | 27h",
        descricao: "Este é o caminho para aprender a sobre estrutura e gerenciamento de dados, incluindo arrays, matriz, stack e queue. Esta é a trilha para a programação orientada a objetos, com os conceitos de classes, encampsulamento, herança, polimorfismo e abstração. Aqui também é o lugar para explorar linguagens de programação mais a fundo, descobrindo as definições e utilidade dos frameworks e das bibliotecas, como HTML, CSS, SQL, NodeJS, Git e muito mais.",
    },
    { 
        curso: 'Orange Tech + | Inter', 
        local: "DIO",
        estado: "Concluído | 78h",
        descricao: "Projeto para aprender do zero desenvolvimento front-end e back-end. O primeiro bootcamp do programa é uma trilha gratuita lançada pelo Inter, em parceria com a DIO, que vai abordar desde o princípio as tecnologias JavaScript, HTML, CSS, Typescript e React. ",
    },

];

function convertArrayToUl(curso) {
    return `
        <li class="box curso">
            <p class="sub title"><bold>${curso.curso}</bold></p>
            <p class="sub">${curso.local}</p>
            <p>${curso.estado}</p>
            <p>${curso.descricao}</p>
        </li>
    
    `
}

function createHtmlCursos() {
    const newHtml = cursosInfo.map(convertArrayToUl).join('')
    cursos.innerHTML = newHtml
}

createHtmlCursos();