function carregar() {
    var msg = window.document.getElementById( 'msg' ); // Obtém o elemento com o ID 'msg' e armazena na variável msg
    var img = window.document.getElementById( 'imagem' ); // Obtém o elemento com o ID 'imagem' e armazena na variável img
    var data = new Date() // Cria um novo objeto Date para obter a data e a hora atuais
    var hora = data.getHours() // Obtém a hora atual do objeto Date e armazena na variável hora
    var minutos = data.getMinutes(); // Obtém os minutos atuais do objeto Date e armazena na variável minutos
    if (hora >= 0 && hora < 12) { 
        msg.innerHTML = `Agora são exatamente ${hora}:${minutos},BOM DIA`
        img.src = `Fotos/amanhecer.webp`
        document.body.style.background = '#cce5ff' //// Alterando a cor de fundo para dia
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são exatamente ${hora}:${minutos}, BOA TARDE!`
        img.src = `Fotos/tarde.jpg`
        document.body.style.background = '#ffffcc' // Alterando a cor de fundo para tarde
    } else {
        msg.innerHTML = `Agora são exatamente ${hora}:${minutos}, BOA NOITE!`
        img.src = `Fotos/noite.jpg`
        document.body.style.background = '#111133' // Alterando a cor de fundo para noite
    }
}