var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [precoAlcool, precoGasolina, rendimentoAlcool, rendimentoGasolina] = 
  lines[0].split(' ').map(x => parseFloat(x));

const precoPorKmAlcool = precoAlcool/rendimentoAlcool;
const precoPorKmGasolina = precoGasolina/rendimentoGasolina;

const maisEconomico = precoPorKmGasolina <= precoPorKmAlcool ? 'G' : 'A';

console.log(maisEconomico);