import pokemonCardTpl from './pokemon-card.hbs';
import API from './api-serves';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);

  console.log(pokemon);

  //   refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
}
