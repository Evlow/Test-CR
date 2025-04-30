import { LitElement, html } from "lit";
import "../item-card/item-card";
import styles from "./cards-container.scss" assert { type: "css" };

export class CardsContainer extends LitElement {
  static styles = styles;

  static properties = {
    cards: { type: Array },
    filteredCards: { type: Array },
  };

  constructor() {
    super();
    this.cards = [];
    this.filteredCards = [];
  }
  // Méthode pour mettre à jour les propriétés
  willUpdate(changedProperties) {
    if (changedProperties.has("cards")) {
      this.filteredCards = [...this.cards];
    }
  }

  // Méthode pour gérer la saisie dans le champ de recherche
  handleSearchInput(event) {
    const query = event.detail.query.toLowerCase();

    if (!query) {
      // Si le champ est vide, réinitialise le filtre
      this.filteredCards = [...this.cards];
    } else {
      // Filtre les cartes en fonction du nom ou de la description
      this.filteredCards = this.cards.filter(
        (card) =>
          card.name.toLowerCase().includes(query) ||
          card.description.toLowerCase().includes(query)
      );
    }

    this.requestUpdate();
  }

  // Fonction appelée lors de l'ajout dans le champ de recherche
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("search-input", this.handleSearchInput);
  }
  // Fonction appelée lors de la suppression dans le champ de recherche
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("search-input", this.handleSearchInput);
  }

  render() {
    return html`
      <div
        class="cards-container"
        aria-label="Liste des cartes"
        aria-live="polite"
        aria-relevant="additions removals"
      >
      ${this.filteredCards.length === 0
          ? html`<p>Aucune carte trouvée.</p>`
          : 
        this.filteredCards.map(
          (card) => html`
            <item-card
              .key="${card.id}"
              .userName="${card.userName}"
              .name="${card.name}"
              .description="${card.description}"
              .photoUrl="${card.photoUrl}"
              role="listitem"
              aria-label="${card.name}: ${card.description}"
            ></item-card>
          `
        )}
      </div>
    `;
  }
}
customElements.define("cards-container", CardsContainer);
