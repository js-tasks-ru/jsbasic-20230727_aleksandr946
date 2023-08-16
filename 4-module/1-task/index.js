function makeFriendsList (friends) {
  let list = document.createElement('ul');
  list.insertAdjacentHTML("beforeend", friends.map(e => '<li>' + e.firstName + ' ' + e.lastName + '</li>').join(''));
  return list;
}
