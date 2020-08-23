//INCREMENTANDO VALOR
var btnIncrementas = document.querySelectorAll('.btn-incrementa');

for(let botao of btnIncrementas){
    botao.addEventListener('click' , incrementa);
    
    function incrementa() {
        var item = botao.closest('.item');
        
        var input = item.querySelector('.quantidade');
        input.value++;
    
        var preco = pegaPrecoItem(item);
        addTotal(preco);
    }

}

//DECREMENTANDO VALOR
var btnDecrementas = document.querySelectorAll('.btn-decrementa')

for(let botao of btnDecrementas){
    botao.addEventListener('click', decrementa);

    function decrementa() {
        var item = botao.closest('.item');
        
        var input = item.querySelector('.quantidade');
        if(input.value <= 0){
            input.value = 0;
        }else{
            input.value--;
            var preco = pegaPrecoItem(item);
            addTotal(-preco);
        }
    }

}

var formPedido = document.forms.pedido;

formPedido.addEventListener('submit', () => {
    
})

//Funções auxiliares
function pegaPrecoItem(item){
    var precoItem = item.querySelector('.preco-item');
    return (Number(precoItem.textContent));
}

function addTotal(preco){
    var Total = document.querySelector('#total');
    Total.textContent = preco + Number(Total.textContent);
}
