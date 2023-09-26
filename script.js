function showAlert() {
    var searchQuery = document.querySelector('#search').value;

    if (searchQuery) {
        alert("" + searchQuery);
        window.location.href = 'https://www.google.com/search?q=';
    }
}