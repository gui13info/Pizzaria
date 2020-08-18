var input = document.querySelector('.quantidade');

var btnIncrementa = document.querySelector('.btn-incrementa');

btnIncrementa.addEventListener('click' , incrementa);
function incrementa() {
    input.value++

    var item = btnIncrementa.closest('.item');
    var precoItem = item.querySelector('.preco-item');
    var preco = Number(precoItem.textContent);
    
    var Total = document.querySelector('#total');
    Total.textContent = preco + Number(Total.textContent);
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
