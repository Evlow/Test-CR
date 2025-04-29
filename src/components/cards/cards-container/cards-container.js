import { LitElement, html } from 'lit';
import '../item-card/item-card';
import styles from './cards-container.scss' assert { type: 'css' };

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

  willUpdate(changedProperties) {
    if (changedProperties.has('cards')) {
      // À chaque mise à jour de "cards", on synchronise "filteredCards"
      this.filteredCards = [...this.cards];
    }
  }

  handleSearchInput(event) {
    const query = event.detail.query.toLowerCase();

    if (!query) {
      this.filteredCards = [...this.cards];
    } else {
      this.filteredCards = this.cards.filter(
        (card) =>
          card.name.toLowerCase().includes(query) ||
          card.description.toLowerCase().includes(query)
      );
    }

    this.requestUpdate();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('search-input', this.handleSearchInput);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('search-input', this.handleSearchInput);
  }

  render() {
    return html`
      <div class="cards-container" role="region" aria-label="Liste des cartes de villes">
        ${this.filteredCards.length > 0
          ? html`
              <div
                class="cards-container__list"
                role="list"
                aria-live="polite"
                aria-relevant="additions removals"
              >
                ${this.filteredCards.map(
                  (card) => html`
                    <item-card
                      .name="${card.name}"
                      .description="${card.description}"
                      .photoUrl="${card.photoUrl}"
                      role="listitem"
                      aria-label="${card.name}: ${card.description}"
                    ></item-card>
                  `
                )}
              </div>
            `
          : html`
              <p
                class="cards-container__empty-message"
                role="status"
                aria-live="polite"
              >
                Aucune carte disponible.
              </p>
            `}
      </div>
    `;
  }
  
}
customElements.define('cards-container', CardsContainer);
