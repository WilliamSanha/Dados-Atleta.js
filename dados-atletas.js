class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas
    }


calculaCategoria(){
        if (this.idade > 8 && this.idade < 12 ){
            return "Infantil"
            
        }
        if(this.idade > 11 && this.idade < 14 ){
            return "Juvenil"
            
        }
        if(this.idade > 13 && this.idade < 16 ){
            return "Intermediário"
            
        }
        if(this.idade > 15 && this.idade < 31 ){
            return "Adulto"
            
        }
}
//para calcular a categoria do atleta

   calculaIMC() {
       return this.peso / (this.altura * this.altura)
       
   } //para calcular o IMC do atleta
  
 calculaMediaValida() {
    // Ordenando as notas
   this.notas = this.notas.sort();

   // Eliminando a maior e menor nota
   this.notas = this.notas.slice(1, 4);

   // Calculando a media
   // Acumulador para salvar a soma das notas
   var acumulador = 0;
   // Metodo forEach para somar as notas
   this.notas.forEach((nota) => {
     acumulador = nota + acumulador;
   });

   // Calculo da media utilizando o acumulador e a quantidade de notas
   let mediaValida = acumulador / this.notas.length;

   // Retorna a media valida do atleta
   return mediaValida;

}

    obtemNomeAtleta(){
        return this.nome;
        
    }
    // retorna o nome
    obtemAlturaAtleta(){
        return this.altura;
    }


   obtemIdadeAtleta(){
        return this.idade;
    } //retorna a idade

   obtemPesoAtleta(){
        return  this.peso;
    } //retorna o peso

   obtemNotasAtleta(){
        return  this.notas;
    } //retorna as notas

   obtemCategoria(){
       return atleta.calculaCategoria()
    } //retorna a categoria

   obtemIMC(){
        return atleta.calculaIMC()   
   } //retorna o imc

   obtemMediaValida(){
      return atleta.calculaMediaValida()
       
   }//retornar a media valida

}



const atleta = new Atleta("Cesar Abascal",
   30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);


 

 console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
 console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
 console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
 console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
 console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
 console.log(`Categoria: ${atleta.obtemCategoria()}`);
 console.log(`IMC: ${atleta.obtemIMC()}`);
 console.log(`Média Válida: ${atleta.calculaMediaValida()}`);




