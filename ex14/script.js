function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    if(hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(223, 176, 89)'
    }
    else if(hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = 'greenyellow'
    }
    else {
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(7, 7, 43)'
    }
}