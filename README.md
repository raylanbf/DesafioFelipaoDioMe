# 🏆 Desafio: Classificador de Nível de Herói

Este projeto foi desenvolvido como parte de um desafio proposto pelo **Felipão**, da plataforma **DIO.me**, com o objetivo de praticar lógica de programação utilizando **JavaScript**.

O desafio consiste em classificar o nível de um herói com base na sua quantidade de experiência (XP).

---

## 🧠 Descrição do Desafio

Dado o nome de um herói e a quantidade de XP, o sistema deve determinar o **nível do herói** de acordo com a tabela abaixo:

| XP | Nível |
|---|---|
| Menor que 1.000 | Ferro |
| Até 2.000 | Bronze |
| Até 5.000 | Prata |
| Até 7.000 | Ouro |
| Até 8.000 | Platina |
| Até 9.000 | Ascendente |
| Até 10.000 | Imortal |
| Maior que 10.000 | Radiante |

Ao final, deve ser exibida a mensagem:

> **"O Herói de nome {nome} está no nível {nivel} com {xp} xp"**

---

## 🛠️ Tecnologias Utilizadas

- JavaScript (ES6)
- Node.js (opcional, para execução local)

---

## 📌 Variáveis Utilizadas

- `xp`: representa o nível de experiência do herói  
- `nomeHeroi`: representa o nome do herói  
- `nivelDeHeroi`: representa o nível do herói com base no XP  

A estrutura de decisão utilizada foi o `switch`.

---

## 💻 Código Fonte

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
  "O Herói de nome " + nomeHeroi +
  " está no nível " + nivelDeHeroi +
  " com " + xp + " xp"
);
