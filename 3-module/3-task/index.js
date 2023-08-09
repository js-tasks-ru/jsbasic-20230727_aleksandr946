function camelize(str) {
  // ваш код...
  let indexes = str.split('');
  let res = '';
  for (let i = 0; i < indexes.length; i++) {
    if (indexes[i] === '-') {
      res += indexes[i + 1].toUpperCase();
      i++;}
    else {res += indexes[i];}
  }
  return res;
} 
