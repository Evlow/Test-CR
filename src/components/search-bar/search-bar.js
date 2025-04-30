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
        <span class="create-text">Rechercher</span>
        <div>
          <input
            type="text"
            placeholder="Nom d'une ressource"
            .value="${this.query}"
            @input="${this.handleSearchInput}"
          />
          <button class="search-button" @click="${this.handleSearchClick}">
            <img
              src="/assets/search.svg"
              alt="icone recherche"
              class="search-icon"
            />
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define("search-bar", SearchBar);
