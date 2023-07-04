// document.addEventListener('DOMContentLoaded', function () {  
//     const name = document.querySelector('#name')
//     const username = document.getElementById('username')
//     const avatar = document.getElementById('avatar')
//     const seguindo = document.getElementById('seguindo')
//     const seguidores = document.querySelector('#seguidores')
//     const link = document.querySelector('.profile-link')
//     const repositorios = document.querySelector('#repositorios')
//     const api = 'https://api.github.com/users/TallysonFreitas'

//     fetch(api)
//         .then(function (res) {  
//             return res.json()
//         })
//         .then(function (json) {  
//             avatar.src = json.avatar_url
//             name.innerHTML += json.name
//             username.innerHTML += json.login
//             seguindo.innerHTML += json.following
//             seguidores.innerHTML += json.followers
//             repositorios.innerHTML += json.public_repos
//             link.href = json.html_url
//         })
// })

document.addEventListener('DOMContentLoaded', function () {  
    const api = 'https://api.github.com/users/TallysonFreitas'
    const nome = document.querySelector('.profile-name')
    const username = document.querySelector('.profile-username')
    const avatar = document.querySelector('.profile-avatar')
    const repositorios = document.querySelector('#repositorios')
    const seguidores = document.querySelector('#seguidores')
    const seguindo = document.querySelector('#seguindo')
    const link = document.querySelector('.profile-link')

    fetch(api)
        .then(function (resposta) {  
            return resposta.json()
        })
        .then(function (json) {  
            nome.innerHTML = json.name
            avatar.src = json.avatar_url
            username.innerHTML += json.login
            seguindo.innerHTML += json.following
            seguidores.innerHTML += json.followers
            repositorios.innerHTML += json.public_repos
            link.href = json.html_url
        })
})