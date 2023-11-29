// Obtém a data atual
var dataAtual = new Date();

// Obtém o dia, mês e ano
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1; // Os meses em JavaScript começam do zero, então adicionamos 1
var ano = dataAtual.getFullYear();


var ultimoDiaDoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);
var maximoDias = ultimoDiaDoMes.getDate();
console.log(maximoDias)
// Exibe os resultados no console
console.log("Dia:", dia);
console.log("Mês:", mes);
console.log("Ano:", ano);

console.log(`Voce tem ${ano-1998} anos  ${mes-6} meses e ${dia-9} dias`)

var ageResult = document.querySelectorAll('.age-result');
var monthInput = document.getElementById('imonth')
var yearInput = document.getElementById('iyear')

var inputInfo = document.querySelectorAll('.info-input')
var titleInput = document.querySelectorAll('.title')
var txtErro = document.querySelectorAll('.text-erro')

function sendResult(){
    if(inputInfo[0].value == '' & inputInfo[1].value == ''& inputInfo[2].value == '' ){
       dayErro();
       monthErro();
       yaerErro();
    }

    else{
        removeErro();
        ageResult[0].innerHTML = ano - yearInput.value;
        ageResult[1].innerHTML = mes - monthInput.value;
        ageResult[2].innerHTML = dia - dayInput.value;
    }
}

function dayErro(){
    inputInfo[0].style.border = '1px solid hsl(0, 100%, 67%)'
    titleInput[0].style.color = 'hsl(0, 100%, 67%)'
    txtErro[0].style.display = 'block'
}
function monthErro(){
    inputInfo[1].style.border = '1px solid hsl(0, 100%, 67%)'
    titleInput[1].style.color = 'hsl(0, 100%, 67%)'
    txtErro[1].style.display = 'block'
}
function yaerErro(){
    inputInfo[2].style.border = '1px solid hsl(0, 100%, 67%)'
    titleInput[2].style.color = 'hsl(0, 100%, 67%)'
    txtErro[2].style.display = 'block'
}

function removeErro(){
    dayInput.style.border = '1px solid hsl(0, 0%, 86%)'
    titleInput[0].style.color = 'hsl(0, 1%, 44%)'
    txtErro[0].style.display = 'none'
}
