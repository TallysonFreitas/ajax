document.addEventListener('DOMContentLoaded', function () {  
    const name = document.querySelector('#name')
    const username = document.getElementById('username')
    const avatar = document.getElementById('avatar')
    const seguindo = document.getElementById('seguindo')
    const seguidores = document.querySelector('#seguidores')
    const link = document.querySelector('.profile-link')
    const repositorios = document.querySelector('#repositorios')
    const api = 'https://api.github.com/users/TallysonFreitas'

    fetch(api)
        .then(function (res) {  
            return res.json()
        })
        .then(function (json) {  
            avatar.src = json.avatar_url
            name.innerHTML += json.name
            username.innerHTML += json.login
            seguindo.innerHTML += json.following
            seguidores.innerHTML += json.followers
            repositorios.innerHTML += json.public_repos
            link.href = json.html_url
        })
})