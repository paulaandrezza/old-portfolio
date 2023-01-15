const gitApi = {}

function convertRepoApitoRepo(repoDetail) {
    const repositorio = new Repositorio()
    repositorio.id = repoDetail.id
    repositorio.name = repoDetail.name
    repositorio.language = repoDetail.language
    repositorio.description = repoDetail.description
    repositorio.html_url = repoDetail.html_url
    return repositorio
}


gitApi.getRepo = () => {
    const url = `https://api.github.com/users/paulaandrezza/repos`

    return fetch(url)
        .then((response) => response.json())
        .then((repositorios) => repositorios.map(convertRepoApitoRepo))
}
