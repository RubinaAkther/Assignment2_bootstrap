document.getElementById('searchButton').addEventListener('click', function () {
  const searchInput = document.getElementById('searchInput');

  searchInput.classList.toggle('active');

  if (searchInput.classList.contains('active')) {
    searchInput.focus();
  }
});
