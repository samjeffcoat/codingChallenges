animals = [
  {
    type: 'Dog',
    mammal: true,
  },
  {
    type: 'Snake',
    mammal: false,
  },
  {
    type: 'Cheetah',
    mammal: true,
  },
];
/*
Brute Force O(n)
*/
function getAnimals(animals) {
  let newAnimals = [];

  for (let animal of animals) {
    newAnimals.push(animal.type);
  }

  return newAnimals;
}

/*
Array.Filter
Solution 2
*/
function findMammalsArrayFilter(animals) {
  return animals.filter((animal) => animal.mammal === true);
}

/*  
Solution 2 modified
*/
function findMammalsArrayDestructureFilter(animals) {
  return animals.filter(({ mammal }) => mammal === true);
}

console.log(getAnimals(animals));

//O(N)
