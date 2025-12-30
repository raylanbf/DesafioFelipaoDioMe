// Variáveis: 
// xp (representa o nível de experiência do herói),
// nomeHeroi (representa o nome do herói) e 
// nivelDeHeroi (representa o nível do herói com base no XP).
// Foi utilizado o switch como estrutura de decisão.

```js
const xp = 1000;
const nomeHeroi = "Gustavo";
let nivelDeHeroi;

switch (true) {
  case xp < 1000:
    nivelDeHeroi = "Ferro";
    break;

  case xp <= 2000:
    nivelDeHeroi = "Bronze";
    break;

  case xp <= 5000:
    nivelDeHeroi = "Prata";
    break;

  case xp <= 7000:
    nivelDeHeroi = "Ouro";
    break;

  case xp <= 8000:
    nivelDeHeroi = "Platina";
    break;

  case xp <= 9000:
    nivelDeHeroi = "Ascendente";
    break;

  case xp <= 10000:
    nivelDeHeroi = "Imortal";
    break;

  default:
    nivelDeHeroi = "Radiante";
}

console.log(
  "O Herói de nome " + nomeHeroi + " está no nível " + nivelDeHeroi +
  " com " + xp + " xp"
);
