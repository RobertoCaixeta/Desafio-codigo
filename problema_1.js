// Declara a lista a ser manipulada
let lista = [8, 5, 10, 5, 2, 4, 4, 3]



function ord_lista(list) {
    // Filtra os elementos e retorna apenas a primeira aparição de cada
    var lista_unicos = list.filter(function(el, i) {
        return list.indexOf(el) === i;
    });
    // Ordena a lista
    lista_unicos.sort(function(a, b){return a - b});
    console.log(lista_unicos)


}

ord_lista(lista)