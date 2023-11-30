// Obtém a data atual
var dataAtual = new Date();

// Obtém o dia, mês e ano
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1; // Os meses em JavaScript começam do zero, então 
var ano = dataAtual.getFullYear();

var ultimoDiaDoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);
var maximoDias = ultimoDiaDoMes.getDate();

var ageResult = document.querySelectorAll('.age-result');
var dayInput = document.getElementById('iday')
var monthInput = document.getElementById('imonth')
var yearInput = document.getElementById('iyear')

var inputInfo = document.querySelectorAll('.info-input')
var titleInput = document.querySelectorAll('.title')
var txtErro = document.querySelectorAll('.text-erro')

function validarData(ano1, mes1, dia1) {
    const data = new Date(ano1, mes1 - 1, dia1);
    return (
      data.getFullYear() === ano1 &&
      data.getMonth() === mes1 - 1 &&
      data.getDate() === dia1
    );
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

    monthInput.style.border = '1px solid hsl(0, 0%, 86%)'
    titleInput[1].style.color = 'hsl(0, 1%, 44%)'
    txtErro[1].style.display = 'none'

    yearInput.style.border = '1px solid hsl(0, 0%, 86%)'
    titleInput[2].style.color = 'hsl(0, 1%, 44%)'
    txtErro[2].style.display = 'none'
}
function removeErroDay(){
    dayInput.style.border = '1px solid hsl(0, 0%, 86%)'
    titleInput[0].style.color = 'hsl(0, 1%, 44%)'
    txtErro[0].style.display = 'none'
}
function removeErroMonth(){
    monthInput.style.border = '1px solid hsl(0, 0%, 86%)'
    titleInput[1].style.color = 'hsl(0, 1%, 44%)'
    txtErro[1].style.display = 'none'
}
function removeErroYear(){
    yearInput.style.border = '1px solid hsl(0, 0%, 86%)'
    titleInput[2].style.color = 'hsl(0, 1%, 44%)'
    txtErro[2].style.display = 'none'   
}
function yearValidate(){
    txtErro[2].innerHTML = 'Must be a Valid Year'
    txtErro[2].style.display = 'block'
    inputInfo[2].style.border = '1px solid hsl(0, 100%, 67%)'
    titleInput[2].style.color = 'hsl(0, 100%, 67%)'
}
function monthValidate(){
    txtErro[1].innerHTML = 'Must be a Valid Month'
    txtErro[1].style.display = 'block'
    inputInfo[1].style.border = '1px solid hsl(0, 100%, 67%)'
    titleInput[1].style.color = 'hsl(0, 100%, 67%)'        
}

function dayValidate(){
    txtErro[0].innerHTML = 'Must be a Valid Date'
    txtErro[0].style.display = 'block'
    inputInfo[0].style.border = '1px solid hsl(0, 100%, 67%)'
    titleInput[0].style.color = 'hsl(0, 100%, 67%)'      
}


function sendResult(){
    var yearInputValue = parseInt(yearInput.value, 10);
    var monthInputValue = parseInt(monthInput.value, 10);
    var dayInputValue = parseInt(dayInput.value, 10);

    var validacao = validarData(yearInputValue, monthInputValue, dayInputValue)

    window.alert(`${validacao} ${yearInputValue} ${monthInputValue} ${dayInputValue}`)
    if(inputInfo[0].value == ''|| inputInfo[1].value == '' ||inputInfo[2].value == ''){
        if(inputInfo[0].value == '' & inputInfo[1].value == '' &inputInfo[2].value == ''){
            dayErro();
            monthErro();
            yaerErro();
        }
        else{
            if(inputInfo[0].value == ''){
                dayErro();
            }        
            else if(inputInfo[1].value == ''){
                monthErro();
            }

            else if(inputInfo[2].value == ''){
                yaerErro();
            }
        }
    }
    else{
        if(validacao == false){
            dayValidate();
            monthValidate();
            yearValidate();
        }
        else if(yearInputValue > ano || yearInputValue <= 0){
            yearValidate();
        }
        else if(monthInputValue > 12 || monthInputValue <= 0) {
            monthValidate();
        }
        else{
            removeErro();
            ageResult[0].innerHTML = ano - yearInputValue;
            ageResult[1].innerHTML = mes - monthInputValue;
            ageResult[2].innerHTML = dia - dayInputValue;            
        }
    }
}

