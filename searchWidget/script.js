const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('search-input');
btnSearch.addEventListener('click', () => {
  inputSearch.classList.toggle('active-search');
  inputSearch.focus();
});
