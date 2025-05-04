function carregar(){
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var hora = new Date().getHours();
    var minuto = new Date().getMinutes();
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if(hora >= 0 && hora < 12){
        img.scr = "fotomanha.png";
        document.body.style.background = '#c6e9fc'
    }else if(hora >=12 && hora <18){
        img.src = "fototarde.png";
        document.body.style.background = '#b9b9b9'
    }else{
        img.src = "fotonoite.png"
        document.body.style.background = '#2f2d20'
    }
}
