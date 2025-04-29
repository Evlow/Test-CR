import { LitElement, html } from 'lit';
import styles from './search-bar.scss' assert { type: 'css' };
export class SearchBar extends LitElement {
  static styles = styles

  // Méthode pour gérer l'input de recherche
  handleSearchInput(event) {
    const query = event.target.value;
    this.dispatchEvent(new CustomEvent('search-input', { detail: { query } }));
  }

  // Méthode pour gérer le clic sur le bouton de recherche
  handleSearchClick() {
    const query = this.shadowRoot.querySelector('input').value;
    this.dispatchEvent(new CustomEvent('search-click', { detail: { query } }));
  } 
  render() {
    return html`
      <div class="search-bar">
        <span class="create-text">Rechercher</span>
        <div>
          <input
          id="search-input"
            type="text"
            placeholder="Nom d'une ressource"
            @input="${this.handleSearchInput}"
          />
          <button class="search-button" @click="${this.handleSearchClick}">
            <img src="/assets/search.svg" alt="icone recherche" class="search-icon" />
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);
