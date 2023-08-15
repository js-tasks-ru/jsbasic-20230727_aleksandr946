function highlight(table) {
  // ваш код...
  let cellName1 = 'Status'; let cellName2 = 'Gender'; let cellName3 = 'Age';
  let statusIndex, genderIndex, ageIndex;
	
  for (let i = 0; i < table.rows[0].cells.length; i++) {
    let column = table.rows[0].cells[i];
		
    if (column.textContent === cellName1) {
      statusIndex = i;
    }
    else if (column.textContent === cellName2) {
      genderIndex = i;
    } 
    else if (column.textContent === cellName3) {
      ageIndex = i;
    } else { continue;}
  }

  for (let i = 1; i < table.rows.length; i++) {
    let status = table.rows[i].cells[statusIndex];
    let gender = table.rows[i].cells[genderIndex];
    let age = table.rows[i].cells[ageIndex];
	
    if (status.dataset.available == 'true') { 
      status.parentNode.classList.add('available');
    } 
    else if (status.dataset.available == 'false') {
      status.parentNode.classList.add('unavailable');
    } 
    else {
      status.parentNode.hidden = true;
    }

    if (gender.textContent == 'm') {gender.parentNode.classList.add('male');} else if (gender.textContent == 'f') {gender.parentNode.classList.add('female');} else {continue;}

    if (age.textContent < 18) {gender.parentNode.style.textDecoration = 'line-through';}
  }
}
