var semana = new Date().getDay();
console.log(`Hoje é ${semana}° dia da semana que é `);

switch(semana){
    case 0:
        console.log("Domingo");
        break
    case 1:
        console.log("Segunda-Feira");
        break
    case 2:
        console.log("Terça-Feira");
        break
    case 3:
        console.log("Quarta-feira");
        break
    case 4:
        console.log("Quinta-Feira");
        break
    case 5:
        console.log("Sexta-Feira");
        break
    case 6:
        console.log("Sábado");
        break
}
