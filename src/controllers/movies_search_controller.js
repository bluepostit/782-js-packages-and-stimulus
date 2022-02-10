import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['list', 'searchInput'];

  connect() {
    this.fetchMovies('harry potter');
  }

  search(event) {
    event.preventDefault();
    console.log('time to search!');
    this.listTarget.innerHTML = '';
    const text = this.searchInputTarget.value;
    this.fetchMovies(text);
  }

  fetchMovies(query) {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
      .then(response => response.json())
      .then((data) => this.insertMovies(data));
  }

  insertMovies(data) {
    data.Search.forEach((result) => {
      const movieTag = `
        <li class="list-group-item border-0">
          <img src="${result.Poster}" alt="" width="100">
        </li>`;
      this.listTarget.insertAdjacentHTML("beforeend", movieTag);
    });
  }
}
