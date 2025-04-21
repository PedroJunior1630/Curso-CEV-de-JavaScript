var hora = 8
console.log(`Agora são ${hora}h`);
if(hora > 12 && hora < 18){
    console.log("Boa tarde!");
}else if(hora >= 18){
    console.log("Boa noite!");
}else if(hora >= 24 || hora <= 5){
    console.log("Boa madrugada!");
}else{
    console.log("Bom dia!");
}