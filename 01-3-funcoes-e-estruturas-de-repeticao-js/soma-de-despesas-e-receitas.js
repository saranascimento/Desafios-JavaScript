const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]

  function somaNumeros(numeros) {
    // Soma todos números dentro do array "numeros"
    // let resultado = numeros.reduce((total, numero) => {
    //   return total + numero
    // }, 0)
    let resultado = 0

    for (let numero of numeros) {
      resultado += numero
    }

    return resultado 
  
  }

  function calculaSaldo(receitas, despesas) {
    somaReceitas = somaNumeros(receitas)
    somaDespesas = somaNumeros(despesas)
   
    return somaReceitas - somaDespesas

  }


  for(usuario of usuarios ){
    let saldoIndividual = calculaSaldo(usuario.receitas, usuario.despesas)
    if( saldoIndividual > 0) {
      console.log(`${usuario.nome} possui saldo POSITIVO de ${saldoIndividual.toFixed(2)}`)
    } else {
      console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldoIndividual.toFixed(2)}`)
    }
  }

 