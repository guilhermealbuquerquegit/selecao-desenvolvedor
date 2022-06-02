for (let i = 0; i <= 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 100)
}

/*  resultado : 
            4
            4
            4
            4
    A) Com var você tem um escopo de função e apenas uma ligação 
    compartilhada para todas as suas iterações de loop - ou seja, 
    o i retorno de chamada em cada setTimeout significa a mesma variável 
    que finalmente é igual a 4 após o término da iteração de loop.
*/

/* B) 
    for (let i = 0; i <= 3; i++) {
        setTimeout(function () {
            console.log(i)
        }, 100)
    }

    Com let você tem um escopo de bloco e quando usado no for loop você 
    obtém uma nova ligação para cada iteração - ou seja, o retorno de i chamada em 
    cada setTimeout significa uma variável diferente, cada uma com um valor diferente: a primeira é 0, a próxima é 1 etc
*/
