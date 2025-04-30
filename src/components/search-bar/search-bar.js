import { LitElement, html } from "lit";
import styles from "./search-bar.scss" assert { type: "css" };

export class SearchBar extends LitElement {
  static styles = styles;

  static properties = {
    query: { type: String },
  };

  constructor() {
    super();
    this.query = "";
  }

  // Fonction appelée lors de la saisie dans le champ de recherche
  handleSearchInput(event) {
    this.query = event.target.value;

    this.dispatchEvent(
      new CustomEvent("search-input", {
        detail: { query: this.query },
        bubbles: true,
        composed: true,
      })
    );
  }

  // Fonction appelée au clic sur le bouton de recherche
  handleSearchClick() {
    this.dispatchEvent(
      new CustomEvent("search-click", {
        detail: { query: this.query },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="search-bar">
      <label for="search-input">Rechercher</label>
      <div>
          <input
            id="search-input"  
            type="text"
            placeholder="Nom d'une ressource"
            .value="${this.query}"
            @input="${this.handleSearchInput}"
            aria-label="Rechercher une ressource" 
            aria-describedby="search-description"
          />
  
          <span id="search-description" class="sr-only">
            Entrez le nom d'une ressource pour la rechercher
          </span>
  
          <button 
            class="search-button" 
            @click="${this.handleSearchClick}"
            aria-label="Lancer la recherche"
          >
            <img
              src="/assets/search.svg"
              alt="Icône de recherche"
              class="search-icon"
            />
          </button>
        </div>
      </div>
    `;
  }
} 
customElements.define("search-bar", SearchBar);
