function verificar(){
    var ano = new Date().getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.getElementById("res");
    if(fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    }else{
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >=0 && idade < 10){
                img.setAttribute('src','fotobebe-h.png');
            }else if(idade < 21){
                img.setAttribute('src','fotojovem-h.png');
            }else if(idade < 50){
                img.setAttribute('src','fotoadulto-h.png');
            }else{
                img.setAttribute('src','fotoidoso-h.png');
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'fotobebe-f.png');
            }else if(idade < 21){
                img.setAttribute('src', 'fotojovem-f.png');
            }else if(idade < 50){
                img.setAttribute('src', 'fotoadulto-m.png');
            }else{
                img.setAttribute('src', 'fotoidoso-f.png');
            }
        }
        res.innerHTML = `Genero ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}