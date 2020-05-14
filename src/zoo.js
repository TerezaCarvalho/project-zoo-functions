/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return data.animals.filter(element => ids.includes(element.id));
}
  // console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals.find(element => animal.includes(element.name))
  // o find() me retorna o array do animal passado como parametro
  // o loop ocorre só dentro desse array.
                      .residents.every(element => element.age >= age);
}

// console.log(animalsOlderThan('penguins', 10));

function employeeByName(employeeName) {
  // seu código aqui
  return data.employees.find(
    employee => employee.firstName === employeeName ||
    employee.lastName === employeeName) || {};
}
// console.log(employeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}
  // console.log(createEmployee(personalInfo, associatedWith));

function git (id) {
  // seu código aqui
  return data.employees.some(elements => elements.managers.find(elemId => elemId === id));
}
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui

}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
