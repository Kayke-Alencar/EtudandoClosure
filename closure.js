///////////////////////////////////////<-------CARRO-------->/////////////////////////////////////////////////////
console.log("CARRO:\n")

/*
    Coloquei a clasure dentro de uma funcao que recebe o parametro carro, para poder criar  
    novas "instacias de carro" isto é, criar novos modelos de carro

*/

const carro = (modeloDoCarro)=>{ (function(){
    
    let velocidade = 0;
    let aceleracaoDoCarro = 0;

    function acelerarCarro(){
        velocidade += aceleracaoDoCarro; //velocidade = velocidade + aceleracao;
    }

    return obj = {
        acelerar(aceleracao){
            aceleracaoDoCarro = aceleracao;
            acelerarCarro();
        },

        freiar(){
            velocidade = 0;
            aceleracao = 0;
        },

        mostrarVelocidade(){
            console.log(`A velocidade do ${modeloDoCarro} é ${velocidade}Km`);
        }
    }
})(modeloDoCarro);

return obj
}

let camaro = carro("Camaro Amarelo");

camaro.acelerar(10);
camaro.mostrarVelocidade();
camaro.acelerar(20);
camaro.mostrarVelocidade();

camaro.freiar();
camaro.mostrarVelocidade();
camaro.acelerar(20);


let CeltaPreto = carro("Celta preto");

CeltaPreto.acelerar(20);
CeltaPreto.mostrarVelocidade();
CeltaPreto.acelerar(35);
CeltaPreto.mostrarVelocidade();

CeltaPreto.freiar();
CeltaPreto.mostrarVelocidade();


console.log("\n");
///////////////////////////////////////////TRIANGULO//////////////////////////////////////////////////
console.log("TRIANGULO:\n\n");


const triagulo = (()=>{

    let area = 0;
    let perimetro = 0;

    function desenhar(base, altura){ //ganbiarra para desenhar um triangulo ksk
        console.log("      | \\");
        console.log(" ");
        console.log("      |   \\");
        console.log(""+`${altura}`);
        console.log("      |      \\");
        console.log(" ");
        console.log("      |         \\");
        console.log("      - -- -- -- -");
        console.log("");
        console.log("          "+`${base}`);
    }


    return {
        cauculaArea(base, altura){
            desenhar(base, altura)
            resultado = base*altura/2;
            console.log(`A área de um triangulo retangulo de base ${base} e altura ${altura} é ${resultado}`);
            return resultado;
        },

        cauculaPerimetro(base, altura){
            perimetro = base + altura + (Math.sqrt(base**2 +altura**2)); //achei primeiro a hipotenusa para depois somar os outro lados do triangulo que sao sua base e altura
            console.log(`O perimetro de um triangulo retangulo de base ${base} e altura ${altura} é ${Math.round(perimetro, 2)}`);
            return resultado;
        }
    }


})();


triagulo.cauculaArea(10,20);
triagulo.cauculaPerimetro(10, 20);

console.log("\n");
///////////////////////////////////////////ELETRODOMESTICO//////////////////////////////////////////////////
console.log("ELETRODOMESTICO:\n");

/*
    Coloquei a clasure dentro de uma funcao que recebe diversos parametros, para poder criar  
    novas "instacias de eletrodomesticos diferentes" isto é.

*/

const eletrodomesticos = (nome) =>{ (()=>{
    let aparelho = nome;

    let calendario = { //em 2024
        jaeneiro: 31, //tem 31 dias 
        fevereiro: 29, //tem 28 dias
        marco:31, 
        abril:30,
        maio:31, 
        junho:30, 
        julho:31,
        agosto:31, 
        setembro:30, 
        outubro:31, 
        novembro:30, 
        dezembro:31
    };

    function TempoEmHora(mes, horaPorDia){
        return eval(`calendario.${mes}*${horaPorDia}`);
    }

    let energia = 0;

    return obj = {
        calcularConsumoDoMes(potencia, horaPorDia,  mes){
            let tempo = TempoEmHora(mes, horaPorDia);
            energia = potencia * tempo; // e = p.t
            console.log(`O gasto energenico do ${aparelho} será de ${Math.round(energia, 2)}kwh `);
        },

    }
})(nome)

return obj
}



let chuveiro = eletrodomesticos("chuveiro");


                            // p    hp    mes
chuveiro.calcularConsumoDoMes(6.8, 0.5 ,"abril");