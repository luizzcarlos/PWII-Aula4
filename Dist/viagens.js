//class viagem{
//    constructor (public tempoGasto: number,public velocidadeMedia:number, public rendimentoVeiculo:number){}
//      distancia ():number{
//          return (this.velocidadeMedia * this.rendimentoVeiculo);
//      }
//      consumo ():number {
//          return (this.distancia() / this.rendimentoVeiculo):
//      }
//}
var viagem = /** @class */ (function () {
    function viagem() {
    }
    viagem.prototype.distancia = function () {
        return this.tempoGasto * this.velocidadeMedia;
    };
    viagem.prototype.consumo = function () {
        return this.distancia() / this.rendimentoVeiculo;
    };
    return viagem;
}());
