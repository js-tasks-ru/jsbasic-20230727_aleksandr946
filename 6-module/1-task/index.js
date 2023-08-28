/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.render();
    this.elem.onclick = this.removeTr();
  }

  render() {
    this.elem = document.createElement('table');
    let thd = document.createElement('thead');
    let tbd = document.createElement('tbody');
    let headTr = document.createElement('tr');
    thd.appendChild(headTr);
    this.elem.appendChild(thd);
    this.elem.appendChild(tbd);
		
    Object.keys(this.rows[0]).forEach(item => {
      let newTh = document.createElement('th');
      newTh.append(item);
      headTr.appendChild(newTh);}
    );
		
    this.rows.forEach(item => {
      let newRow = document.createElement('tr');
      tbd.appendChild(newRow);
      for (let key in item) {
        let newTd = document.createElement('td');
        newTd.append(item[key]);
        newRow.appendChild(newTd);
      }

      let newTd = document.createElement('td');
      newTd.insertAdjacentHTML('beforeend', '<button>X</button>');
      newRow.appendChild(newTd);
    });
    return this.elem;
  }	

  removeTr() {
    document.addEventListener('click', function(event) { 
      if (event.target.closest('button')) {
        event.target.closest('tr').remove();
      }
    });
  }
}