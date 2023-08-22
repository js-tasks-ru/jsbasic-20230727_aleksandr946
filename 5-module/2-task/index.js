function toggleText() {
  document.querySelector('.toggle-text-button').addEventListener('click', function() {
    let t = document.getElementById('text');
    return t.hidden ? t.hidden = false : t.hidden = true;});
}
