let distancia = 100; 
let velocidade_caminhao = 80; 
let velocidade_carro = 110; 

let tempo_caminhao = distancia / velocidade_caminhao; 
let tempo_carro = distancia / velocidade_carro; 

let tempo_total_caminhao = tempo_caminhao + 0.1667; 

let distancia_caminhao = velocidade_caminhao * tempo_total_caminhao; 
let distancia_carro = velocidade_carro * tempo_carro; 

if (distancia_caminhao < distancia_carro) {
  console.log("O caminhão está mais próximo de Ribeirão Preto.");
} else {
  console.log("O carro está mais próximo de Ribeirão Preto.");
}
