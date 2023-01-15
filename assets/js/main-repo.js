const repoList = document.getElementById('repo-list');

const languageColors = [
    { language: "JavaScript", color: "#f1e05a" },
    { language: "Python", color: "#3572A5" },
    { language: "Ruby", color: "#701516" },
    { language: "C++", color: "#f34b7d" },
    { language: "Go", color: "#00ADD8" },
    { language: "Shell", color: "#89e051" },
    { language: "Markdown", color: "#333" },
    { language: "TypeScript", color: "#2b7489" },
    { language: "Swift", color: "#ffac45" },
    { language: "Kotlin", color: "#F18E33" },
    { language: "Java", color: "#b07219" },
    { language: "PHP", color: "#4F5D95" },
    { language: "C#", color: "#178600" },
    { language: "CSS", color: "#563d7c" },
    { language: "C", color: "#555555" },
    { language: "Objective-C", color: "#438eff" },
    { language: "Rust", color: "#dea584" },
    { language: "Scala", color: "#c22d40" },
    { language: "HTML", color: "#e34c26" },
    { language: "Jupyter Notebook", color: "#DA5B0B" },
    { language: "HTML", color: "#e34c26" },
    { language: null, color: "#252525" },
];

const idReposParaExibir = [
    587443474,
    577856949,
    563413076,
    578731423,
    580936380,
    554972872,
]
  

function convertRepoToUl(repositorio){

    const backgroundColor = languageColors.find(x => x.language === repositorio.language).color;

    if (!idReposParaExibir.find(i => i === repositorio.id)) {
        return null;
    }

    return `<a href="${repositorio.html_url}" target="_blank">
        <ul class="box project">
            <ul class="project-title">
                <li><img src="./assets/img/icon-folder.svg" alt="icon folder"></li>
                <li><h3>${repositorio.name}</h3></li>
            </ul>
            <li>
                <p>${repositorio.description}</p>
            </li>
            <li class="language">
                <span class="repo-language-color" style="background-color: ${backgroundColor}"></span>
                <span class="programing-language">${repositorio.language}</span>
            </li>
        </ul>
        </a>
    `
}


function loadGitItens() {
    gitApi.getRepo().then((repositorios = []) => {
            const newHtml = repositorios.map(convertRepoToUl).join('')
            repoList.innerHTML = newHtml
        })
}

loadGitItens()