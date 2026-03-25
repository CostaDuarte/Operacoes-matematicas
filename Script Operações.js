let numUm, numDois, result;
//// ADIÇÃO
numUm = Number(prompt("me diga o primeiro valor da adição"));
numDois = Number(prompt("me diga o segundo valor da adição"));

alert(`o resultado da adição é: ${(numUm+numDois).toFixed(2)}`);
//// SUBTRAÇÃO
numUm = Number(prompt("Me mostre o primeiro número da subtração"));
numDois = Number(prompt("Me mostre o segundo número da subtração"));

alert(`o resultado da subtração é: ${(numUm-numDois).toFixed(2)}`);
//// MULTIPLICAÇÃO
numUm = Number(prompt("insira o primeiro número:"));
numDois = Number(prompt("insira o segundo número:"));
result = numUm * numDois;

alert(`o resutado da sua multiplicação é: ${result.toFixed(2)}`);
//// DIVISÃO
numUm = Number(prompt("informe o número que vai ser dividido"));
numDois = Number(prompt("informe o número que vai dividir"));

alert(
  `o número ${numUm} dividido por ${numDois} resulta em ${(numUm / numDois).toFixed(2)}`,
);
