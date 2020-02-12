const nome = "Danilo"
const sexo = "M"
const idade = 65
const contribuição = 35

if (sexo === "F" || sexo === "M"){
    if (sexo === "M" && contribuição >= 35 && + contribuição + idade >= 95 || sexo === "F" && contribuição >= 30 && + contribuição + idade >= 85) {
        console.log(`${nome}, você pode se aposentar!`)
    }
    else {
        console.log(`${nome}, você não pode se aposentar!`)
    } 
} else {
        console.log("Sexo inválido!")
    }

    console.log(idade + " Anos " + contribuição + " Contribuição" + " = " + (idade + contribuição))
