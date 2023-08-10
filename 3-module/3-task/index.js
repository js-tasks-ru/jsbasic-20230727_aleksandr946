function camelize(str) {
  // ваш код...
  if (str.length > 0 && str.split('-').length > 0) {
    let res = str.split('-').filter(e=>e !== '').map(e => e[0].toUpperCase() + e.slice(1)).join('');
			
    (str.startsWith('-')) ? (res = res[0].toUpperCase() + res.slice(1)) : (res = res[0].toLowerCase() + res.slice(1));
    return res;
  }
  else {return str;}
}

/*
Второй вариант решения

function camelize(str) {
	let indexes = str.split('');
  let res = '';
  for (let i = 0; i < indexes.length; i++) {
    if (indexes[i] === '-') {
      res += indexes[i + 1].toUpperCase();
      i++;}
    else {res += indexes[i];}
  }
  return res;
}  */