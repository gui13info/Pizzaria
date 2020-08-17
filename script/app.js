var input = document.querySelector('.quantidade');

var btnIncrementa = document.querySelector('.btn-incrementa');

btnIncrementa.addEventListener('click' , incrementa);
function incrementa() {
    input.value++
}

//DECREMENTANDO VALOR
var btnDecrementa = document.querySelector('.btn-decrementa')

btnDecrementa.addEventListener('click', decrementa);
function decrementa() {
    if(input.value <= 0){
        input.value = 0;
    }else{
        input.value--;
    }
}

//CALCULANDO TOTAL
