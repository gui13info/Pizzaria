// var input = document.querySelector('.quantidade');
var btnIncrementa = document.querySelector('.btn-incrementa');

//INCREMENTANDO VALOR
btnIncrementa.addEventListener('click' , incrementa);

function incrementa() {
    var item = btnIncrementa.closest('.item');
    
    var input = item.querySelector('.quantidade');
    input.value++;

    var preco = pegaPrecoItem(item);
    addTotal(preco);
}

//DECREMENTANDO VALOR
var btnDecrementa = document.querySelector('.btn-decrementa')

btnDecrementa.addEventListener('click', decrementa);

function decrementa() {
    if(input.value <= 0){
        input.value = 0;
    }else{
        input.value--;

        var item = btnDecrementa.closest('.item');

        var preco = pegaPrecoItem(item);
        
        removeTotal(preco);
    }
}


function pegaPrecoItem(item){
    var precoItem = item.querySelector('.preco-item');
    return (Number(precoItem.textContent));
}

function addTotal(preco){
    var Total = document.querySelector('#total');
    Total.textContent = preco + Number(Total.textContent);
}

function removeTotal(preco){
    var Total = document.querySelector('#total');
    Total.textContent = Number(Total.textContent) - preco;
}
