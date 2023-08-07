function isEmpty(obj) {
  // ваш код...
  for (let key in obj) {
    return false;}
  return true;
}

// Дополнительное ДЗ 
// из obj11 вывести в консоль значения свойств
// используя только Object.keys и for
/*
let obj11 = {
  a: 1,
  b: 2,
  c: 3,
};

for (let key in obj11) {console.log(obj11[key]);} 

console.log(Object.values(obj11));
*/