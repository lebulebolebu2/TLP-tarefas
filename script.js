function calcular(){

let nome = document.getElementById("nome").value;
let sala = document.getElementById("sala").value;


let m1 = Number(document.getElementById("m1").value);
let m2 = Number(document.getElementById("m2").value);
let m3 = Number(document.getElementById("m3").value);



let media = (m1 + m2 + m3) / 3;



document.getElementById("resultado").innerHTML =

"Aluno: " + nome +
"<br>Sala: " + sala +
"<br>Média Final: " + media.toFixed(2);

}
