//class viagem{
//    constructor (public tempoGasto: number,public velocidadeMedia:number, public rendimentoVeiculo:number){}
//      distancia ():number{
//          return (this.velocidadeMedia * this.rendimentoVeiculo);
//      }

//      consumo ():number {
//          return (this.distancia() / this.rendimentoVeiculo):
//      }
//}



class viagem{
          
    tempoGasto:number
    velocidadeMedia:number
    rendimentoVeiculo:number

    distancia():number{
        return this.tempoGasto * this.velocidadeMedia
    }
       
    consumo ():number {
        return this.distancia() / this.rendimentoVeiculo
    }
}