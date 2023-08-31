function toggleText() {
  document.querySelector('.toggle-text-button').addEventListener('click', function() {
    let t = document.querySelector('#text');
    return t.hidden ? t.hidden = false : t.hidden = true;
  });
}